// ======= Page Owner Vikash =========
import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import LeaveConsumedChart from './LeaveConsumedChart';
// import LeaveTable from './LeaveTable';
// import LeaveApplication from 'views/erp-module/teacher/class-teacher/class-teacher-sidebar/leave-application/index'

const LeaveApplication1 = () => {
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7} lg={7}>
            <Paper elevation={1}>
              <LeaveConsumedChart />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={5} lg={5}>
            <Paper elevation={1}></Paper>
          </Grid>
        </Grid>
      </Box>
      {/* <LeaveApplication/> */}
      {/* <LeaveTable /> */}
    </>
  );
};

export default LeaveApplication1;
