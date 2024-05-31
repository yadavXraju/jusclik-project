// sangeeta

import React from 'react'
import { Grid, Box, Paper, Button } from '@mui/material';
import CustomTextField from 'components/ui/custom-input/TextField';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';


const options = [
  {
    value: "1",
    label: 'Withdrawal'
  },
  {
    value: "2",
    label: 'Change Route'
  }
];
function Widthrawal() {
  const[widthrawalInfo,setWidthrawalInfo]=React.useState({
    reasonOfWidthrawal:"",
    pendingDue:"",
    withdrawalDate:"",
    remark:""
  })

  const handleChange=()=>{
    const{name,value}=e.target;
    setWidthrawalInfo({...widthrawalInfo,[name]:value})
     
  }
  return (
    <Box>
    <Paper  sx={{padding:"40px 20px"}}>
    
     

      <Grid container spacing={2} sx={{marginTop:"10px"}} justifyContent="center"> 
     
       <Grid item xs={12} md={5}>
        <ParameterizedAutoComplete option={options} label="Reason of widthrawal" customStyle={{width:"100%",margin:"10px"}} name='reasonOfWidthrawal' onChange={handleChange} />
       
          <CustomTextField customStyle={{width:"100%",margin:"10px"}} label="Pending Due" name='pendingDue' onChange={handleChange} />
          <Grid xs={12} md={12} textAlign="end">  <Button variant="contained" >Pay Fee</Button></Grid>
        

          <ParameterizedDateComponent  label="Withdrawal Date"  customStyle={{width:"100%",margin:"10px"}} name='widthrawalDate' onChange={handleChange} />
          <CustomTextField customStyle={{width:"100%",margin:"10px"}}  label="Remark" multiline={true} onChange={handleChange} />

       </Grid>
      </Grid>

      <Grid textAlign="end">  <Button variant="contained">Submit Request</Button></Grid>
    
    </Paper>
  </Box>
  )
}

export default Widthrawal