import React from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import PlayStoreImage from '../../../assets/images/Google-Play.png';
import AppleStoreImage from '../../../assets/images/app-store.png';

const StoreButton = ({ href, storeImage, altText, isMobile }) => (
  <Button
    variant="contained"
    color="primary"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      height: isMobile ? '60px' : '60px',
      width: isMobile ? '60px' : '60px',
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: '#f6f6f6',
      }
    }}
    startIcon={<img src={storeImage} alt={altText} style={{ width: isMobile ? '40px' : '35px', height: isMobile ? '40px' : '35px' }} />}
  />
);

const AppStoreButtonsGroup = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ display: 'flex', gap: 1, position: 'absolute', right: isMobile?'30px':'20px', bottom:isMobile? '25px':'15px' }}> 
      <StoreButton
        href="https://play.google.com/store/apps/details?id=com.shauryasoft.cloud9app&hl=en&gl=US&pli=1"
        storeImage={PlayStoreImage}
        altText="Play Store"
        isMobile={isMobile}
      />
      <StoreButton
        href="https://apps.apple.com/in/app/cloud9-school-app/id1152506397"
        storeImage={AppleStoreImage}
        altText="Apple Store"
        isMobile={isMobile}
      />
    </Box>
  );
};

export default AppStoreButtonsGroup;
