import React from 'react'
import {
  Grid,
  Box,
  Typography,
  //Paper,
  
  
  
  
 
  

} from '@mui/material';
import LeftLogo from '../authentication/LeftLogo';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import MobileLogin from '../authentication/MobileLogin';


const style = {
  formHeader: {
    marginBottom: '24px'
  },

  formHeading: {
    fontWeight: '500',
    fontSize: '30px',
    lineHeight: '40px',
    color:'rgb(58, 58, 58)',
    fontFamily:'plus Jakarta sans',
   
  }
};


const OnlineRegistration = () => {
  const [value, setValue] = React.useState('1');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Grid container>
      <Grid lg={6} sx={{ minHeight: '100vh' }}>
      <LeftLogo />
      </Grid>

      <Grid
        xs={12}
        lg={6}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          background: 'rgb(255, 236, 236)',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        {/* <Paper>  */  }
          <Grid sx={{ maxWidth: '575px', width: { xs: '100%', lg: '575px' }, margin: 'auto', padding: '30px' }}>
            <Box sx={style.formHeader}>
              <Typography variant="h1" sx={style.formHeading}>
                Online Registration
              </Typography>

             {/* <Typography variant="h4">Enter your details to register on Jusklik</Typography> */}
            </Box>

            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
            <Tab  label="New Registration" value="1" />
            <Tab label="Already Registered" value="2" />
          
          </TabList>
        </Box>
        <TabPanel value="1"> New Registration</TabPanel>
        <TabPanel value="2"> 
        <Box sx={{}}> 
        <MobileLogin />
        </Box>
        
        </TabPanel>
      
      </TabContext>
    </Box>

          
           
            

            {/* ======================= email */}
            

          
         

       
            {/* plans ====================== */}

           

            {/*====================== insitution type  drop down 
                    {/* btn  */}
         
          </Grid>
          {/*</Paper>   */}
      </Grid>
    </Grid>
  </>
  )
}

export default OnlineRegistration