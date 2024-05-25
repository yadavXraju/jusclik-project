import React from 'react';
import { Grid, Box, Button, Typography, Paper, useMediaQuery } from '@mui/material';
import PerformanceChart from './PerformanceChart';
import SubjectDisplay from './SubjectDisplay';


const subjectsData = [
  { subject: 'ENGLISH', progress: 98, Marks: "40", Grade: "A" },
  { subject: 'MATH', progress: 75, Marks: "40", Grade: "A" },
  { subject: 'HINDI', progress: 45, Marks: "40", Grade: "A" },
  { subject: 'PUNJABI', progress: 65, Marks: "40", Grade: "A" },
  { subject: 'SCIENCE', progress: 75, Marks: "40", Grade: "A" },
];

function Performance() {
  const res2560 = useMediaQuery('(min-width:2000px')
 const item_position = res2560?"baseline":"center"
  return (
    <>
      <Paper sx={{ padding: "10px 0px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems:item_position }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <PerformanceChart value={78} />
              <Button variant="outlined" sx={{ margin: "30px 10px 10px" }}>
                PRINT REPORT CARD
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
              <Typography variant="h3"></Typography>
              <Typography>Date: 16-jan-2012</Typography>
            </Grid>
            {subjectsData.map((data, index) => (
              <SubjectDisplay key={index} subject={data.subject} progress={data.progress} index={index} marks={data.Marks} grade={data.Grade} />
            ))}
            <Grid sx={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", margin: "10px 20px" }}>
              <Grid>
                <Typography sx={{ fontSize: "16px", fontWeight: "700", color: "black" }}>Result: Pass</Typography>
              </Grid>
              <Typography sx={{ fontSize: "16px", fontWeight: "700", color: "black" }}>Grade: A+</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Performance;
