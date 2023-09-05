import { Box, Stack, Typography } from '@mui/material'
import {HorizontalScrollbar} from './HorizontalScrollbar'
import { Loader } from './Loader'

const SimilarExercises = ({target, equipment}) => {
  return (
    <Box
      sx={{ mt: { lg: '100px', xs:'0'} }}
    >
      <Typography variant='h3' mb={5}>
        Exercises that the same musle group 
        </Typography>
        <Stack
          direction='row'
          sx={{ 
            p:'2',
            position:'relative'
           }}
        >
          {target.length ? <HorizontalScrollbar data={target} />: <Loader/>}
        </Stack>
     

      <Typography  variant='h3' mb={5}>
        Exercises that the same equipment
        </Typography>
        <Stack
          direction='row'
          sx={{ 
            p:'2',
            position:'relative'
           }}
        >
          {equipment.length ? <HorizontalScrollbar data={equipment} /> : <Loader/>}
        </Stack>
      
    </Box>
  )
}

export default SimilarExercises
