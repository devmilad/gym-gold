import { Box, Typography } from '@mui/material'
import  { useContext } from 'react'
import { ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu'
import { BodyPart } from './BodyPart';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={require('../assets/icons/left-arrow.png')} alt="left-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={require('../assets/icons/right-arrow.png')} alt="right-arrow" />
      </Typography>
    );
  };


export  const HorizontalScrollbar = ({data,bodyPart,setBodyPart,isBodyParts}) => {
  return (
    <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>
    { data.map((item, index)=>(
      <Box
          key={ index || item }
          itemId={item.id || item}
          title={item.id || item}
      >
       {isBodyParts ? <BodyPart  item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}  />:<ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu >
  )
}
