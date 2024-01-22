import React from 'react';
import { Grid, Box, Button, Typography, Paper } from '@mui/material';
import PerformanceChart from './PerformanceChart';
import SubjectDisplay from './SubjectDisplay';
// import ExamResult from './ExamResult'; // Import the ExamResult component

const subjectsData = [
  { subject: 'ENGLISH', progress: 98,Marks:"40",Grade:"A" },
  { subject: 'MATH', progress: 75 ,Marks:"40",Grade:"A"},
  { subject: 'HINDI', progress: 45 ,Marks:"40",Grade:"A"},
  { subject: 'PUNJABI', progress: 65 ,Marks:"40",Grade:"A"},
  { subject: 'SCIENCE', progress: 75 ,Marks:"40",Grade:"A"},
  // Add more subjects and their progress data as needed
];

function Performance() {

  return (
    <>
      <Paper sx={{ padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <PerformanceChart value={98} />
                  <Button variant="outlined" sx={{ margin: "30px 10px 10px" }} >
                   PRINT REPORT CARD
                  </Button>
            </Box>
            <Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px " }}>
              <Typography variant="h3">SEM-END EXAM</Typography>
              <Typography>Date: 16-jan-2012</Typography>
            </Grid>
            {
              subjectsData.map((data, index) => (
                <SubjectDisplay key={index} subject={data.subject} progress={data.progress} index={index} marks={data.Marks} grade={data.Grade} />
              ))
            }

        <Grid sx={{display:"flex",justifyContent:"space-between",padding:"10px 20px",margin:"10px 20px"}} >
        <Grid>
        {/* <Typography>Total Marks: 450/500</Typography> */}
        <Typography>Result:Pass</Typography>
        </Grid>
       
        <Typography>Grade:A+</Typography>
        </Grid>
          </Grid>
      
        </Grid>
      </Paper>
    </>
  );
}

export default Performance;
