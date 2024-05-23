import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import LogoImg from 'assets/images/school-logos/ArwachinLogo.png';

const commonStyles = (isMobile) => ({
  logoImage: {
    width: isMobile ? '200px' : '100px',
    height: isMobile ? '200px' : '100px',
    marginBottom: '15px',
  },
  title: {
    fontWeight: '500',
    fontSize: { xs: '24px', md: '30px' },
    color: '#E64B4C',
    textAlign: 'center',
    lineHeight: '30px',
  },
  subtitle: {
    fontSize: isMobile ? { sm: '14px', md: '18px' } : { md: '18px' },
    color: '#364152b5',
  },
});

const LeftLogo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
  const styles = commonStyles(isMobile);

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
        justifyContent: 'center',
        minHeight:'100%',
        minWidth:'100%'
      }}
    >
      <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <img src={LogoImg} alt="Logo" style={styles.logoImage} />
        <Typography sx={styles.title}>Arwachin Public <br /> School</Typography>
        <Typography sx={styles.subtitle}>Vasundhara, Ghaziabad</Typography>
      </Grid>
    </Grid>
  );
};

export default LeftLogo;
