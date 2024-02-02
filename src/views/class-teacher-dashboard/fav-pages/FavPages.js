import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Typography, Grid } from '@mui/material';
import { boxHeight, HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';



const FavPages = () => {
  

  return (
    <MainCard style={boxHeight} className='scrollbar'>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Grid alignContent="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h2" style={HeadingCss}>
                Favourite Pages 
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Display the most visited menus */}
        {/* <Grid item xs={12} sx={{pt:"0"}}>
          <Typography variant="subtitle1">Most Visited Menus:</Typography>          
        </Grid> */}

        
      </Grid>
    </MainCard>
  );
};

export default FavPages;
