import React from 'react'
import { TextField, Grid, Box, Paper,MenuItem, Button } from '@mui/material';
import Datecomponet from './Datecomponet';

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
  return (
    <Box>
    <Paper  sx={{padding:"40px 20px"}}>
    
     

      <Grid container spacing={2} sx={{marginTop:"10px"}} justifyContent="center"> 
     
       <Grid item xs={12} md={5}>
       <TextField
            id="outlined-select-option"
            select
            label="Reason of widthrawal"
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
          <TextField fullWidth variant="outlined"  label="Pending Due" sx={{margin:"10px"}}/>
          <Grid xs={12} md={12} textAlign="end">  <Button variant="contained" >Pay Fee</Button></Grid>
        
          {/* <TextField fullWidth variant="outlined"  type='date' label="Withdrawal Date" sx={{margin:"20px"}}/> */}
          <Datecomponet label="Withdrawal Date"  />
          <TextField  id="outlined-select-option"
            label="Remark"
            multiline
            fullWidth
            sx={{margin:"10px"}}/>
       </Grid>
      </Grid>

      {/* <Grid container spacing={2} sx={{marginTop:"10px"}}> 
    
       <Grid item xs={12} md={5}>
    
       </Grid>
       <Grid item xs={12} md={5}>
      
       </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginTop:"10px"}}> 
   
       <Grid item xs={12} md={5}>
     
       </Grid>
      </Grid>


      <Grid container spacing={2} sx={{marginTop:"10px"}}> 
      
       <Grid item xs={12} md={5}>
    
       </Grid>
      </Grid> */}

      <Grid textAlign="end">  <Button variant="contained">Submit Request</Button></Grid>
    
    </Paper>
  </Box>
  )
}

export default Widthrawal