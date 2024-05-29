// sangeeta

import React from 'react';
import { Typography, Grid, Box, Paper,Button } from '@mui/material';
import CustomTextField from 'components/ui/custom-input/TextField';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';

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

function PersonalDetail() {
  return (
    <>
      <Box>
        <Paper  sx={{padding:"40px 20px"}}>
        
        
          <Grid container spacing={5} sx={{marginTop:"10px"}} justifyContent="center"> 
      
           <Grid item xs={12} md={5}>
               <Typography variant='h3'>Information as per records</Typography>
               <CustomTextField label="Mobile No."   customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField label="Blood Group"  customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField label="Father Mobile No."  customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField  label="Father Email"  customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField label="Mother Mobile No."   customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField label="Mother Email"   customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField label="Address"  customStyle={{margin:"10px",width:"100%"}}/>

           </Grid>
           <Grid item  xs={12} md={5}>
           <Typography variant='h3' >Information Requested</Typography>

           <CustomTextField label="Mobile No."   customStyle={{margin:"10px",width:"100%"}}/>

              <ParameterizedAutoComplete option={options}  label="Blood Group" customStyle={{width:"100%",margin:"10px"}} />
              <CustomTextField label="Father Mobile No."  customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField  label="Father Email"  customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField label="Mother Mobile No."   customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField label="Mother Email"   customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField label="Address"  customStyle={{margin:"10px",width:"100%"}}/>
               <CustomTextField label="Remark" type="multiline"  customStyle={{margin:"10px",width:"100%"}}/>
            </Grid>
          </Grid>
    
          <Grid textAlign="end">  <Button variant="contained">Submit Request</Button></Grid>
        
        </Paper>
      </Box>
    </>
  );
}

export default PersonalDetail;