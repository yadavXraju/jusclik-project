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
import Dropdown from 'views/common-section/ParamSelectList'
import TextField from '@mui/material/TextField';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent'





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

const SessionOptions = [
  { value: '2024-2025', label: '2024-2025' },

]

const ClassOptions = [

  {value:'3' , label:'III'},
  {value:'5' , label:'V'},
  {value:'6' , label:'VI'},
  {value:'8' , label:'VI'},
  {value:'9' , label:'IX'},
  {value:'10' , label:'X'},
  {value:'11' , label:'XI'},
  {value:'12A' , label:'XII A'},

]


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
        <TabPanel value="1"> 
        
        <Dropdown  
    label='Select Class'
    options={SessionOptions}  
    className='findcomp'
    rootStyle={{
        marginTop: '20px',
       
    }}
    customStyle={{
        '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '50px'
        },
        '& .MuiSelect-select' :{
          borderRadius:'50px',
        },
        '& .MuiSelect-select::focus' :{
          borderRadius:'50px',
        },

        background:'none',
    }}
/>



<Dropdown  
    label='Select Class'
    options={ClassOptions}  
    className='findcomp'
    rootStyle={{
        marginTop: '20px',
       
    }}
    customStyle={{
        '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '50px'
        },
        '& .MuiSelect-select' :{
          borderRadius:'50px',
        },
        '& .MuiSelect-select::focus' :{
          borderRadius:'50px',
        },

        background:'none',
    }}
/>


{/* <TextField
  id="outlined-basic"
  label="Student's Name"
  variant="outlined"
  fullWidth
/> */}

<TextField
  id="outlined-basic"
  label="Student's Name"
  variant="outlined"
  fullWidth
  sx={{
    marginTop: '20px',
    '& fieldset': {
      borderRadius: '50px',
    },
    '& .css-x77xb3-MuiInputBase-root-MuiOutlinedInput-root': {
      borderRadius: '50px',
    },
    background:'none',
  }}
/>




<ParameterizedDateComponent  label='Date of Birth' customStyle ={{marginTop:'20px' , width:'100%' ,borderRadius:'50px' }}/>
           
<TextField
  id="outlined-basic"
  label="Mobile"
  variant="outlined"
  fullWidth
  inputProps={{
    inputMode: 'numeric', // Set input mode to numeric
    pattern: '[0-9]*',    // Allow only numeric input
  }}
  sx={{
    marginTop: '20px',
    '& fieldset': {
      borderRadius: '50px',
    },
    '& .css-x77xb3-MuiInputBase-root-MuiOutlinedInput-root': {
      borderRadius: '50px',
    },
    background: 'none',
  }}
/>

       
       
        </TabPanel>
        
        
        
        <TabPanel value="2"> 
        <Box sx={{}}> 
        <MobileLogin />
        </Box>
        
        </TabPanel>
      
      </TabContext>
    </Box>


   
    


    
          

          
         

       
           
           

           
                   
         
          </Grid>
          {/*</Paper>   */}
      </Grid>
    </Grid>
  </>
  )
}

export default OnlineRegistration