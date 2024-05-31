// sangeeta

import React from 'react';
import { Typography, Grid, Box, Paper,Button } from '@mui/material';
import CustomTextField from 'components/ui/custom-input/TextField';
import AutoComplete from 'components/ui/custom-input/AutoComplete';

const options = [
  {
    value: "1",
    label: 'A+'
  },
  {
    value: "2",
    label: 'B+'
  },
  {
    value: "3",
    label: 'AB'
  }
];

// const route=[
//     {
//         name:"Route Name",
//         address:"0x...."
//     }
// ]

const PersonalDetail =()=> {

  const[personalDetailInfo,setPersonalDetailInfo]=React.useState({
    mobileNumber:'',
    bloodGroup:"",
    fatherMobileNumer:"",
    fatherEmail:"",

  })

  const handleChange = (e) => {
    const{name,value}=e.target;
    setPersonalDetailInfo({...personalDetailInfo,[name]:value});
  }
  return (
    <>
      <Box>
        <Paper  sx={{padding:"40px 20px"}}>
        
        
          <Grid container spacing={5} sx={{marginTop:"10px"}} justifyContent="center"> 
      
           <Grid item xs={12} md={5}>
               <Typography variant='h3'>Information as per records</Typography>
               <CustomTextField label="Mobile No."   customStyle={{margin:"10px",width:"100%"}} />
               <CustomTextField label="Blood Group"  customStyle={{margin:"10px",width:"100%"}} name="bloodGroup" onChange={handleChange } />
               <CustomTextField label="Father Mobile No."  customStyle={{margin:"10px",width:"100%"}} name='fatherMobileNumber' onChange={handleChange }/>
               <CustomTextField  label="Father Email"  customStyle={{margin:"10px",width:"100%"}} name='fatherEmail' onChange={handleChange }/>
               <CustomTextField label="Mother Mobile No."   customStyle={{margin:"10px",width:"100%"}}  name='motherMobileNumber' onChange={handleChange }  />
               <CustomTextField label="Mother Email"   customStyle={{margin:"10px",width:"100%"}} name='motherEmail' onChange={handleChange } />
               <CustomTextField label="Address"  customStyle={{margin:"10px",width:"100%"}} name='address' onChange={handleChange }/>

           </Grid>
           <Grid item  xs={12} md={5}>
           <Typography variant='h3' >Information Requested</Typography>

           <CustomTextField label="Mobile No."   customStyle={{margin:"10px",width:"100%"}}/>

              <AutoComplete option={options}  label="Blood Group" customStyle={{width:"100%",margin:"10px"}} name="bloodGroup" onChange={handleChange } />
              <CustomTextField label="Father Mobile No."  customStyle={{margin:"10px",width:"100%"}} name='fatherMobileNumber' onChange={handleChange } />
               <CustomTextField label="Father Email"  customStyle={{margin:"10px",width:"100%"}} name='fatherEmail' onChange={handleChange } />
               <CustomTextField label="Mother Mobile No."   customStyle={{margin:"10px",width:"100%"}} name='motherMobileNumber' onChange={handleChange }  />
               <CustomTextField label="Mother Email"   customStyle={{margin:"10px",width:"100%"}} name='motherEmail' onChange={handleChange } />
               <CustomTextField label="Address"  customStyle={{margin:"10px",width:"100%"}} name='address' onChange={handleChange }/>
               <CustomTextField label="Remark" multiline={true} customStyle={{margin:"10px",width:"100%"}} name='remark' onChange={handleChange } />
            </Grid>
          </Grid>
    
          <Grid textAlign="end">  <Button variant="contained">Submit Request</Button></Grid>
        
        </Paper>
      </Box>
    </>
  );
}

export default PersonalDetail;