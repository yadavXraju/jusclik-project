import React from 'react';
import { Typography, Link, Box, useMediaQuery, useTheme, Grid } from '@mui/material';
import CloudLogo from '../../../assets/images/Untitled-2.png';
// import AppStoreButtonsGroup from './AppStoreLogos';

const commonTextStyle = {
  color: '#a8a6a6',
  fontFamily: 'plus Jakarta sans',
  fontSize: '12px',
  textAlign: 'center'
};

const PoweredBySection = () => {
  const theme = useTheme(); // Accessing theme object using useTheme hook
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const belowXl=useMediaQuery(theme.breakpoints.down( 'xl'))
  // console.log(belowXl);
  const viewportWidth = window.innerWidth;
  
  console.log(viewportWidth);
  // for padding if position is static
  let pad=false
  const pos=()=>{if(belowXl||isMobile||viewportWidth==1600){
    pad=true
    return 'static'

  }
  else{
    pad=false
    return 'static'
  }
}
let padBottom=null
if(viewportWidth>=600)
padBottom='1rem'
else
padBottom=null

  return (
    <>
      <Grid container pb={padBottom}>
        {/* powered by section */}
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: 'center',
              bottom: isMobile ? '60px' : '130px'
            }}
            position={pos()}
            paddingBottom={pad?'1rem':null}
          >
            <img src={CloudLogo} alt="Logo" />
            <Typography variant="body2" sx={{ ...commonTextStyle }}>
              Powered by
            </Typography>
            <Link
              href="http://www.shauryasoft.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...commonTextStyle, textDecoration: 'none' }}
            >
              www.shauryasoft.com
            </Link>

            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Typography variant="subtitle1" sx={{ ...commonTextStyle }}>
                Fee Payment Policies/ Terms & Conditions
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PoweredBySection;
