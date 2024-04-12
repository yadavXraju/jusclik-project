// material-ui
// import { useTheme } from '@mui/material/styles';
import brand from '../assets/images/brand.svg';
import { Box } from '@mui/material';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  // const theme = useTheme();

  const brandStyle = {
    display : 'flex',
    justifyContent:'start',
    alignItems:'center',
    gap:'10px'
  }

  const brandImage = {
    width:'70%',
    ObjectFit:'cover',
  }


  return (
    <>
    <Box style={brandStyle} >
      <img src={brand} alt="Jusklik"  style={brandImage}/>
     {/* <p style={{fontWeight:'700'}}>CLOUD9 SCHOOL APP</p> */}
    </Box>
    </>
  );
};

export default Logo;
