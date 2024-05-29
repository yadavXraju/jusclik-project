// sangeeta

import React from 'react'
import { Typography, Grid, Box, Paper, Button } from '@mui/material';
import CustomTextField from 'components/ui/custom-input/TextField';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';

const options = [
  {
    value: "1",
    label: 'A'
  },
  {
    value: "2",
    label: 'B'
  },
  {
    value: "3",
    label: 'C'
  },
  {
    value: "4",
    label: 'D'
  },
  {
    value: "5",
    label: 'E'
  },
  {
    value: "6",
    label: 'F'
  }
];
function ChangeSection() {
  return (
    <Box>
    <Paper  sx={{padding:"40px 20px"}}>
    
      <Grid container spacing={5} sx={{marginTop:"10px"}} justifyContent="center"> 

       <Grid item xs={12} md={5}>
           <Typography variant='h3'>Information as per records</Typography>
           <CustomTextField label="Class" customStyle={{width:"100%",margin:"10px"}} />
           <CustomTextField label="Section" customStyle={{width:"100%",margin:"10px"}} />

       </Grid>
       <Grid item  xs={12} md={5}>
       <Typography variant='h3' >Information Requested</Typography>
       <ParameterizedAutoComplete option={options} customStyle={{width:"100%",margin:"10px"}}  label="Class" />
       <ParameterizedAutoComplete option={options} customStyle={{width:"100%",margin:"10px"}}   label="Section" />
       <ParameterizedDateComponent label="Effective Date" customStyle={{width:"100%",margin:"10px"}}  />
       <CustomTextField type=" multiline"  label="Remark" customStyle={{width:"100%",margin:"10px"}} />
      
        </Grid>
      </Grid>

      <Grid textAlign="end">  <Button variant="contained">Submit Request</Button></Grid>
    
    </Paper>
  </Box>
  )
}

export default ChangeSection