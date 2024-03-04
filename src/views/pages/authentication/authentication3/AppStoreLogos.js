import React from 'react';
import { Box, Button } from '@mui/material';
import PlayStoreImage from '../../../../assets/images/Google-Play.png';
import AppleStoreImage from '../../../../assets/images/app-store.png';

const StoreButton = ({ href, storeImage, altText }) => (
  <Button
    variant="contained"
    color="primary"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      height: '60px',
      width: '60px',
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}
    startIcon={<img src={storeImage} alt={altText} style={{ width: '40px', height: '40px'}} />}
  />
);

const AppStoreButtonsGroup = () => (
  <Box sx={{ display: 'flex', gap: 1, position: 'absolute', right: '30px', bottom: '25px' }}>
    <StoreButton
      href="https://play.google.com/store/apps/details?id=com.shauryasoft.cloud9app&hl=en&gl=US&pli=1"
      storeImage={PlayStoreImage}
      altText="Play Store"
    />
    <StoreButton href="https://apps.apple.com/in/app/cloud9-school-app/id1152506397" storeImage={AppleStoreImage} altText="Apple Store" />
  </Box>
);

export default AppStoreButtonsGroup;
