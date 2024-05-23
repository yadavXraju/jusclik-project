// material-ui
// import { useTheme } from '@mui/material/styles';
import JusklikLogo from 'assets/images/JusklikLogo.svg';
import { Box } from '@mui/material';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  // const theme = useTheme();

  const LogoStyle = {
    display : 'flex',
    justifyContent:'start',
    alignItems:'center',
    gap:'10px'
  }

  const LogoImage = {
    width:'70%',
    ObjectFit:'cover',
  }


  return (
    <>
    <Box style={LogoStyle} >
      <img src={JusklikLogo} alt="Jusklik"  style={LogoImage}/>
     {/* <p style={{fontWeight:'700'}}>CLOUD9 SCHOOL APP</p> */}
    </Box>
    </>
  );
};

export default Logo;
