import React from 'react';
import Grid from '@mui/material/Grid';
import SubjectCard from './SubjectCard'
// import Item from '@mui/icons-material/Item'
import Box from '@mui/material/Box';


  
function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
         <SubjectCard/>
        </Grid>
        <Grid item xs={3}>
        <SubjectCard/>
        </Grid>
        <Grid item xs={3}>
         <SubjectCard/>
        </Grid>
        <Grid item xs={3}>
         <SubjectCard/>
        </Grid>
      </React.Fragment>
    );
  }
function Allsub() {
  return (
    <Box display="flex" alignItems="center"  justifyContent='centre' sx={{ flexGrow: 1,mx:3, mt:15, py:30 , background:'grey'}}>
    <Grid container spacing={1}>
      <Grid container alignItems="center" justifyContent='centre'  item spacing={2} >
        <FormRow />
      </Grid>
      <Grid container item spacing={2}>
        <FormRow />
      </Grid>
      <Grid container item spacing={2}>
        <FormRow />
      </Grid>
    </Grid>
  </Box>

  )
}
export default Allsub