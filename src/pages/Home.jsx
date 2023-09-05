import { Box } from '@mui/material'
import {useState} from 'react'

import { HeroBanner } from '../components/HeroBanner'
import { SearchExercises } from '../components/SearchExercises'
import { Exercises } from '../components/Exercises'


export const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])
    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />
            <Exercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises} />
        </Box>
    )
}
