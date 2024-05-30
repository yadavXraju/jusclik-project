// sangeeta


import React from 'react';
import { Typography, Grid, Box, Paper, Button } from '@mui/material';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';


import CustomTextField from 'components/ui/custom-input/TextField';
import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';

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
              <ParameterizedAutoComplete   label="Transport Option" option={options}  customStyle={{width:"100%"}}/>
            </Grid>
          </Grid>

          <Grid container spacing={5} sx={{marginTop:"10px"}} justifyContent="center" alignContent="center"> 
     
           <Grid item xs={12} md={5}>
           <Typography variant='h3' >Information as per records</Typography>
            <CustomTextField label='Pick Route' customStyle={{margin:"10px",width:"100%"}} />
            <CustomTextField label="Pick Stop" customStyle={{margin:"10px",width:"100%"}} />
            <CustomTextField label="Drop Route" customStyle={{margin:"10px",width:"100%"}} />
            <CustomTextField label="Drop Stop" customStyle={{margin:"10px",width:"100%"}} />

           </Grid>
           <Grid item  xs={12} md={5}>
           <Typography variant='h3' >Information Requested</Typography>

           <ParameterizedAutoComplete option={options} customStyle={{margin:"10px",width:"100%"}}   label="Pick Route"/>
           
           <ParameterizedAutoComplete option={options} customStyle={{margin:"10px",width:"100%"}}    label="Pick Stop"/>
           <ParameterizedAutoComplete option={options} customStyle={{margin:"10px",width:"100%"}}   label="Drop Route"/>
           <ParameterizedAutoComplete option={options} customStyle={{margin:"10px",width:"100%"}}   label="Drop Stop" />
           <ParameterizedDateComponent label="Effective Date" customStyle={{margin:"10px",width:"100%"}} />
           <CustomTextField label="Remark" type="multiline" customStyle={{margin:"10px",width:"100%"}}  />

            </Grid>
          </Grid>
          
          <Grid textAlign="end">  <Button variant="contained">Submit</Button></Grid>
        
        </Paper>
      </Box>
    </>
  );
}

export default Transportation;
