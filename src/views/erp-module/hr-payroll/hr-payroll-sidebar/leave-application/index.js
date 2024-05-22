// ======= Page Owner Vikash =========
import React from 'react'
import { Grid, Paper,  } from '@mui/material'
import LeaveConsumedChart from './LeaveConsumedChart'
// import LeaveApplication from 'views/erp-module/teacher/class-teacher/class-teacher-sidebar/leave-application/index'

const LeaveApplication1 = () => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} lg={7}>
        <Paper elevation={1}>
          <LeaveConsumedChart/>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={5} lg={5}>
        <Paper elevation={1}>
        </Paper>
      </Grid>
    </Grid>
      {/* <LeaveApplication/> */}
    </>
  )
}

export default LeaveApplication1