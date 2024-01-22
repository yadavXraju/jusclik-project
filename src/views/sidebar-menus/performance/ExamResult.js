import React from 'react';
import { Box, Paper, Typography,Grid ,Button} from '@mui/material';

function ExamResult({ goBack }) {
  return (
    <Box>
      <Paper elevation={1} sx={{  borderLeft: "5px solid red", margin: "20px 0", width: "100%" ,borderRadius:"0"}}>
        <Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"10px 20px"}}>
          <Grid item >
            <Typography variant="h5">English</Typography>
            <Typography variant="h6">Marks - 90</Typography>
          </Grid>
          <Grid item textAlign="right" >
            <Typography>Data: 10-jan-2012</Typography>
            <Typography>Grade: A+</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={1} sx={{  borderLeft: "5px solid red", margin: "20px 0", width: "100%" ,borderRadius:"0"}}>
        <Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"10px 20px"}}>
          <Grid item >
            <Typography variant="h5">English</Typography>
            <Typography variant="h6">Marks - 90</Typography>
          </Grid>
          <Grid item textAlign="right" >
            <Typography>Data: 10-jan-2012</Typography>
            <Typography>Grade: A+</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={1} sx={{  borderLeft: "5px solid red", margin: "20px 0", width: "100%" ,borderRadius:"0"}}>
        <Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"10px 20px"}}>
          <Grid item >
            <Typography variant="h5">English</Typography>
            <Typography variant="h6">Marks - 90</Typography>
          </Grid>
          <Grid item textAlign="right" >
            <Typography>Data: 10-jan-2012</Typography>
            <Typography>Grade: A+</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={1} sx={{  borderLeft: "5px solid red", margin: "20px 0", width: "100%" ,borderRadius:"0"}}>
        <Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"10px 20px"}}>
          <Grid item >
            <Typography variant="h5">English</Typography>
            <Typography variant="h6">Marks - 90</Typography>
          </Grid>
          <Grid item textAlign="right" >
            <Typography>Data: 10-jan-2012</Typography>
            <Typography>Grade: A+</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Box mt={2}>
       <Grid sx={{display:"flex",justifyContent:"space-between"}}>
        <Grid>
        <Typography>Total Marks: 450/500</Typography>
        <Typography>Result:Pass</Typography>
        </Grid>
       
        <Typography>Grade:A+</Typography>
        </Grid>
      </Box>
      <Grid><Button variant="contained" onClick={goBack}>Back</Button></Grid>
    </Box>
  );
}

export default ExamResult;
