// sangeeta

import React from 'react'
import { Typography,  Grid, Box, Paper,Button } from '@mui/material';
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
function InterBranchTransfer() {
  return (
    <Box>
    <Paper  sx={{padding:"40px 20px"}}>
    
      <Grid container spacing={5} sx={{marginTop:"10px"}} justifyContent="center"> 
    
       <Grid item xs={12} md={5}>
           <Typography variant='h3'>Information as per records</Typography>


           <CustomTextField  label="Branch" customStyle={{width:"100%",margin:"10px"}}/>
       
       </Grid>
     
       <Grid item  xs={12} md={5}>
       <Typography variant='h3' >Information Requested</Typography>
       <ParameterizedAutoComplete customStyle={{width:"100%",margin:"10px"}} label="Branch" option={options} />

          {/* <TextField fullWidth variant="outlined" type='date' label="Effective Date" sx={{marginTop:"10px"}}/> */}

      
          <ParameterizedDateComponent  customStyle={{width:"100%",margin:"10px"}} label="Effective Date"/>
          <CustomTextField   label="Remark"  customStyle={{width:"100%",margin:"10px"}} type="multiline"/>

        </Grid>
      </Grid>

    
      <Grid textAlign="end">  <Button variant="contained">Submit Request</Button></Grid>
    
    </Paper>
  </Box>
  )
}

export default InterBranchTransfer