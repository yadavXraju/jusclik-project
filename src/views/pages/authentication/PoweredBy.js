import React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CloudLogo from '../../../assets/images/Untitled-2.png';
import Box from '@mui/material/Box';
import AppStoreButtonsGroup from './AppStoreLogos';

const PoweredBySection = () => {
  return (
    <>
      <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mt: 5 }}>
        <img src={CloudLogo} alt="Logo" />
        <Typography sx={{ color: '#a8a6a6', mt: 1 }}>Powered by</Typography>
        <Link href="http://www.shauryasoft.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#a8a6a6', textDecoration: 'none' }}>
          www.shauryasoft.com
        </Link>
      </Grid>
      <Box sx={{mt:1,display:'flex', justifyContent: 'center'}}>
        <Typography variant="subtitle1" color="#a8a6a6">
          Fee Payment Policies/ Terms & Conditions
        </Typography>
      </Box>
      <AppStoreButtonsGroup />

    </>
  );
};

export default PoweredBySection;
