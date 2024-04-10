import React from 'react'
import {  TextField, Grid, Box, Paper, Button } from '@mui/material';
import Datecomponet from './Datecomponent';

function BookReservation() {
  return (
    <>
        <Box sx={{textAlign:"center"}} >
    <Paper  sx={{padding:"40px 20px"}} >
    
      <Grid container spacing={2} sx={{marginTop:"10px"}} justifyContent="center" > 

       <Grid item xs={12} md={5}>
       <TextField
            id="outlined-select-option"
            fullWidth
            label="Accession No"
            sx={{margin:"10px"}}
          />
     <Grid container spacing={2} sx={{marginTop:"10px"}}> 
       <Grid item xs={12} md={8}>
       <TextField fullWidth variant="outlined" label="Title"sx={{margin:"10px"}} />
       </Grid>
       <Grid item xs={12} md={4}>
       <TextField fullWidth variant="outlined" id="status" label="Status" sx={{margin:"10px"}} />
       </Grid>
      </Grid>
      <TextField fullWidth variant="outlined"  label="Author" sx={{margin:"10px"}} />
      {/* <TextField fullWidth variant="outlined" type='date'  label="Date for Required Book"  sx={{margin:"10px"}}/> */}
      <Datecomponet  label="Date for Required Book"/>
      <TextField  id="outlined-select-option"
            label="Remark"
            multiline
            fullWidth
            sx={{margin:"10px"}}/>
       </Grid>
      </Grid>

    

      <Grid container spacing={2} sx={{marginTop:"10px"}}> 
 
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
      </Grid>
      <Grid textAlign="end">  <Button variant="contained">Submit Request</Button></Grid>
    </Paper>
  </Box>
    </>
  )
}

export default BookReservation