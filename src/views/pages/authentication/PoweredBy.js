import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import CloudLogo from '../../../assets/images/Untitled-2.png';
import AppStoreButtonsGroup from './AppStoreLogos';

const commonTextStyle = {
  color: '#a8a6a6',
  fontFamily: 'plus Jakarta sans',
  fontSize: '12px',
  textAlign: 'center'
};

const PoweredBySection = () => {
  return (
    <>
      <Box sx={{textAlign: 'center',position: 'fixed', bottom: '100px', transform: 'translateX(56%)'}}>
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
      <AppStoreButtonsGroup />
    </>
  );
};

export default PoweredBySection;
