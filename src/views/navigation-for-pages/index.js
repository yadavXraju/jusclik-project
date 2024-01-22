import React from 'react';
import { Grid, Typography , Box} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useLocation } from 'react-router-dom';
import { gridSpacing } from 'store/constant';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useNavigate } from 'react-router-dom';


const UrlPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pageTitle = capitalizeFirstLetter(currentPath.replace('/', ''));
  const navigate = useNavigate();

  // Helper function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <MainCard sx={{ mb: 3 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sx={{display:'flex', justifyContent:'space-between'}}>

            <Grid alignContent="center" justifyContent="space-between">
              <Typography variant='h3'> {pageTitle} </Typography>
            </Grid>

            <Grid alignContent="center" justifyContent="space-between" sx={{display:'flex', alignItems:'center'}}>
              <Box sx={{cursor:'pointer'}} onClick={() => navigate('/dashboard')}>
                  <HomeOutlinedIcon sx={{color:'rgb(103, 58, 183)'}}/>
                </Box>

                {/* <Box> */}
                  <ChevronRightOutlinedIcon/>
               {/* </Box> */}

                <Box>
                 <Typography variant='subtitle'>{pageTitle}</Typography>
                </Box>
            </Grid>

          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default UrlPage;
