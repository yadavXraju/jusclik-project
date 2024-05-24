import React from 'react';
import FavPages from 'components/FavPages';
import { FavPagesList } from './FavPagesList';
import { Box } from '@mui/material';

const ClassTeacherFavPages = () => {
  return (
    <>
    <Box sx={{'& .css-16ti1tk-MuiButtonBase-root-MuiButton-root': {fontSize:{md:'14px' , sm:'12px' , xs:'10px'}}}}>
      <FavPages FavPagesList={FavPagesList}/>

      </Box>
    </>
  )
}

export default ClassTeacherFavPages