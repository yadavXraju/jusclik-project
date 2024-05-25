// sangeeta

import React from 'react'
import { Typography, TextField, Grid, Box, Paper,MenuItem, Button } from '@mui/material';
import Datecomponet from './Datecomponent';

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
           <TextField fullWidth variant="outlined" label="Class"  sx={{margin:"10px"}}/>
           <TextField fullWidth variant="outlined"  label="Section" sx={{margin:"10px"}} />
       </Grid>
       <Grid item  xs={12} md={5}>
       <Typography variant='h3' >Information Requested</Typography>
       <TextField
            id="outlined-select-option"
            select
            label="Class" 
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
            <TextField
            id="outlined-select-option"
            select
            label="Section"
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

          {/* <TextField fullWidth variant="outlined" type='date'   label="Effective Date" sx={{margin:"10px"}}/> */}
          <Datecomponet label="Effective Date" />
          <TextField  id="outlined-select-option"
            label="Remark"
            multiline
            sx={{margin:"10px"}}
            fullWidth/>
        </Grid>
      </Grid>

      {/* <Grid container spacing={2} sx={{marginTop:"10px"}}> 
     
       <Grid item xs={12} md={5}>
      
       </Grid>
       <Grid item  xs={12} md={5}>
 

        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginTop:"10px"}}> 
    
       <Grid item xs={12} md={5}>
   
       </Grid>
       <Grid item  xs={12} md={5}>
     
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

export default ChangeSection