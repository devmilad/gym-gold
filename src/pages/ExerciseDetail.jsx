import { Box } from '@mui/material'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from '../components/Detail'
import { ExerciseVideos } from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { fetchData, options, youtubeOptions } from '../utils/fetchData'



export default function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [target, setTarget] = useState([])
  const [equipment, setEquipment] = useState([])
  const {id}=useParams()

  useEffect(() => {
    const fetchExercises=async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,options)
      setExerciseDetail(exerciseData)

      const exerciseVideo= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideo.contents)

      const targetData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseData.target}`,options)
      setTarget(targetData)

      const equipmentData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseData.equipment}`,options)
      setEquipment(equipmentData)
    }
    fetchExercises()
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises target={target} equipment={equipment} />
    </Box>
  )
}
