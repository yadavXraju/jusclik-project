import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import LogoImg from '../../../assets/images/WhatsApp_Image_2020-03-21_at_8_04_53_PM__1-removebg-preview 1.png';

const LeftLogo = () => {
  const theme = useTheme(); // Accessing theme object using useTheme hook

  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={5}
      sx={{
        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <img
          src={LogoImg}
          alt="Logo"
          style={{ width: isMobile ? '200px' : '100px', height: isMobile ? '200px' : '100px', marginBottom: '15px' }}
        />
        <Typography
          sx={{ fontWeight: '500', fontSize: { xs: '24px', md: '30px' }, color: '#E64B4C', textAlign: 'center', lineHeight: '30px' }}
        >
          Arwachin Public <br /> School
        </Typography>
        <Typography sx={{ fontSize: { sm:'14px', md: '18px' }, color: '#364152b5' }}>Vasundhara, Ghaziabad</Typography>
      </Grid>
    </Grid>
  );
};

export default LeftLogo;
