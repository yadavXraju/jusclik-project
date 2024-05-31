// sangeeta

import React from 'react'
import {  Grid, Box, Paper, Button } from '@mui/material';
import CustomTextField from 'components/ui/custom-input/TextField';
import DateComponent from 'components/ui/custom-input/DateComponent';

const BookReservation= () => {

  const[bookReservationInfo,setBookReservationInfo]=React.useState({
    accessionNo:'',
    title:"",
    status:'',
    author:'',
    dateOfRequiredBook:'',
    remarks:''    
  })


  const handleChange=(e)=>{
    const{name,value}=e.target;
    setBookReservationInfo({...bookReservationInfo,[name]:value})
  }
  return (
    <>
        <Box sx={{textAlign:"center"}} >
    <Paper  sx={{padding:"40px 20px"}} >
    
      <Grid container spacing={2} sx={{marginTop:"10px"}} justifyContent="center" > 

       <Grid item xs={12} md={5}>

      <CustomTextField customStyle={{width:'100%',margin:"10px"}} label="Accession No"   name='accessionNo' onChange={handleChange} />

     <Grid container spacing={2} > 
       <Grid item xs={12} md={8}>
       <CustomTextField customStyle={{width:'100%',margin:"10px"}} label="Title"   name='title' onChange={handleChange} />

       </Grid>
       <Grid item xs={12} md={4}>
       <CustomTextField customStyle={{width:'100%',margin:"10px"}} label="Status" name='status'  onChange={handleChange} />
   
       </Grid>
      </Grid>

      <CustomTextField customStyle={{width:'100%',margin:"10px"}}  label="Author" name='author' onChange={handleChange} />

      
      
      <DateComponent label="Date for Required Book" customStyle={{width:'100%',margin:"10px"}} name='dateOfRequirment' onChange={handleChange} />

      <CustomTextField customStyle={{width:'100%',margin:"10px"}} multiline={true}   label="Remark" name='Remark' onChange={handleChange} />

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