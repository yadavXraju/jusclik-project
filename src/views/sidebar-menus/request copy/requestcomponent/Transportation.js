import React from 'react';
import { Typography, TextField, Grid, Box, Paper,MenuItem, Button } from '@mui/material';
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

// const route=[
//     {
//         name:"Route Name",
//         address:"0x...."
//     }
// ]

function Transportation() {
  return (
    <>
      <Box>
        <Paper  sx={{padding:"40px 20px"}}>
        
          <Grid container spacing={5} display="flex" justifyContent="center" >
            <Grid item xs={12} md={5}>
              <TextField
                id="outlined-select-option"
                select
                label="Transport Option"
                defaultValue="EUR"
                fullWidth
              >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={5} sx={{marginTop:"10px"}} justifyContent="center" alignContent="center"> 
     
           <Grid item xs={12} md={5}>
               <Typography variant='h3' >Information as per records</Typography>
               <TextField fullWidth variant="outlined" label='Pick Route' sx={{margin:"10px"}} />
               <TextField fullWidth variant="outlined" label="Pick Stop" sx={{margin:"10px"}} />
               <TextField fullWidth variant="outlined" label="Drop Route" sx={{margin:"10px"}}/>
               <TextField fullWidth variant="outlined" label="Drop Stop" sx={{margin:"10px"}} />
           </Grid>
           <Grid item  xs={12} md={5}>
           <Typography variant='h3' >Information Requested</Typography>
           <TextField
                id="outlined-select-option"
                select
                label="Pick Route"
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
                label="Pick Stop"
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
                label="Drop Route"
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
                label="Drop Stop" 
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
              <Datecomponet label="Effective Date"/>
              <TextField
                id="outlined-select-option"
                label="Remark"
                multiline
                fullWidth
                sx={{margin:"10px"}}
              />
            </Grid>
          </Grid>
          
          <Grid textAlign="end">  <Button variant="contained">Submit</Button></Grid>
        
        </Paper>
      </Box>
    </>
  );
}

export default Transportation;
