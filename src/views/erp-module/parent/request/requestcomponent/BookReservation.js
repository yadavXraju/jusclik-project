// sangeeta

import React from 'react'
import {  Grid, Box, Paper, Button } from '@mui/material';
import CustomTextField from 'components/ui/custom-input/TextField';
import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';

function BookReservation() {
  return (
    <>
        <Box sx={{textAlign:"center"}} >
    <Paper  sx={{padding:"40px 20px"}} >
    
      <Grid container spacing={2} sx={{marginTop:"10px"}} justifyContent="center" > 

       <Grid item xs={12} md={5}>

      <CustomTextField customStyle={{width:'100%',margin:"10px"}} label="Accession No" />

     <Grid container spacing={2} sx={{marginTop:"10px"}}> 
       <Grid item xs={12} md={8}>
       <CustomTextField customStyle={{width:'100%',margin:"10px"}} label="Title"/>

       </Grid>
       <Grid item xs={12} md={4}>
       <CustomTextField customStyle={{width:'100%',margin:"10px"}} label="Status"/>
   
       </Grid>
      </Grid>

      <CustomTextField customStyle={{width:'100%',margin:"10px"}}  label="Author"/>

      
      
      <ParameterizedDateComponent label="Date for Required Book" customStyle={{width:'100%',margin:"10px"}}/>

      <CustomTextField customStyle={{width:'100%',margin:"10px"}}    label="Remark" />

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