// sangeeta

import React from 'react';
import { Typography, TextField, Grid, Box, Paper,MenuItem, Button } from '@mui/material';

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
               <TextField fullWidth variant="outlined" label="Mobile No."  sx={{margin:"10px"}}/>
               <TextField fullWidth variant="outlined" label="Blood Group" sx={{margin:"10px"}} />
               <TextField fullWidth variant="outlined" label="Father Mobile No." sx={{margin:"10px"}}  />
               <TextField fullWidth variant="outlined"  label="Father Email" sx={{margin:"10px"}}  />
               <TextField fullWidth variant="outlined"  label="Mother Mobile No." sx={{margin:"10px"}} />
               <TextField fullWidth variant="outlined" label="Mother Email"  sx={{margin:"10px"}} />
               <TextField fullWidth variant="outlined"  label="Address" sx={{margin:"10px"}} />
           </Grid>
           <Grid item  xs={12} md={5}>
           <Typography variant='h3' >Information Requested</Typography>
           <TextField
              fullWidth variant="outlined"  label="Mobile No." sx={{margin:"10px"}} 
              />
               <TextField
                id="outlined-select-option"
                select
                label="Blood Group"
                defaultValue="EUR"
                fullWidth
                sx={{margin:"10px"}} 
              >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField fullWidth variant="outlined"   label="Father Mobile No." sx={{margin:"10px"}} />
              <TextField fullWidth variant="outlined" label="Father Email"  sx={{margin:"10px"}} />
              <TextField fullWidth variant="outlined" label="Mother Mobile No." sx={{margin:"10px"}}  />
              <TextField fullWidth variant="outlined"  label="Mother Email" sx={{margin:"10px"}} />
              <TextField fullWidth variant="outlined"  label="Address" sx={{margin:"10px"}} />
              <TextField
                id="outlined-select-option"
                label="Remark"
                multiline
                fullWidth
                sx={{margin:"10px"}} 
              />
          
            </Grid>
          </Grid>
    
          <Grid textAlign="end">  <Button variant="contained">Submit Request</Button></Grid>
        
        </Paper>
      </Box>
    </>
  );
}

export default PersonalDetail;