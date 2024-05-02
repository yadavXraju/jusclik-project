import React from 'react'
import CloudLogo from '../../../assets/images/Untitled-2.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid,Typography ,Box ,Paper } from '@mui/material';
import StudentDetails from './StudentDetails';
import { useState } from 'react';

import SignUpRegisteration from './SignUpRegisteration';


const OnlineRegistration = () => {
  
  
  //  Tab Changer for Details Form Stepper
  const [TabChange, setTabChange] = React.useState(0);
  const [showSignUp, setShowSignUp] = useState(true);

  const continueHandler = () => {
   setShowSignUp(false) ;

  }


  const handleChange = (event, newValue) => {
    setTabChange(newValue);
  };
  //  Tab Changer for Details Form Stepper End
 
  return (
    <>
   
   {showSignUp ? (
    <Grid>
    <SignUpRegisteration continueHandler={continueHandler}/>
    </Grid>
   ) :
   
    (
     //StudentDetails Start
    <Grid>
    <Grid sx={{background:'#EEF2F6'}}> 

<Grid container spacing = {4}  sx={{paddingLeft:'6rem' , paddingTop:'6rem' , paddingBottom:'3.9rem' }}>

   
   <Grid item xs={2} component={Paper} >
    
  
      <Grid sx={{paddingLeft:'1rem' ,paddingRight:'1rem'  }}>
    <Box>
    
    <Typography variant='h3' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center'}}>
<img src={CloudLogo} alt='Logo' style={{ marginRight: '8px'  }} /> REGISTRATION FORM  </Typography>
                                                                                    
      </Box>
     

      <Box sx={{ width: '80%' , paddingTop:'2rem' }}>
    <Tabs value={TabChange} onChange={handleChange} centered orientation='vertical' sx={{ '& .MuiTabs-indicator': { left: 0, right: 'auto' } }}>
     <Tab className='findcomp' sx={{fontSize:'14px' , fontWeight:'bold' , alignItems:'start'}} label="STUDENT'S DETAILS" />
     <Tab  sx={{fontSize:'14px' , fontWeight:'bold' , alignItems:'start'}}  label="OTHER DETAILS" />
     <Tab  sx={{alignItems:'start'}} label="Item Three" />
     <Tab label="Item Two" />
     <Tab label="Item Three" />
       </Tabs>
      </Box>
      </Grid>
      </Grid>
   
   

  {/* Render your component here  Start */}
   

<StudentDetails/>

  {/* Render your component here END  */}
   
  



</Grid>


    </Grid>
    </Grid>
    ) }
    {/* StudentDetails End*/}

      
   
    </>
  )
}

export default OnlineRegistration



