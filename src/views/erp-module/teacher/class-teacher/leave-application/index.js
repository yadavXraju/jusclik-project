// ======= Page Owner Vikash =========
// ======= Leave Application Index =========
import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Box } from '@mui/system';
import LeaveBarChart from './LeaveapplicationBar';
import LeaveTabs from './LeaveApplicationFilter';
import { Paper } from '@mui/material';
import LeaveBalance from './LeaveBalance';

import withParamDrawer from 'components/temp-withParamDrawer';
import LeaveApplicationDrawerContent from './LeaveApplicationDrawerContent';

const NewParamDrawer=withParamDrawer(LeaveApplicationDrawerContent);

// leave drawer start ==========
function LeaveDrawer() {
  return (
    <div>
      <NewParamDrawer buttonLabel='Leave Application' drawerTitle='Request Leave' />
    </div>
  )
}

// leave drawer end ==========

const LeaveApplication = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} lg={7}>
        <Paper elevation={1}>
          <LeaveBarChart />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={5} lg={5}>
        <Paper elevation={1}>
          {/* <LeaveChart /> */}
          <LeaveBalance/>
        </Paper>
      </Grid>
    </Grid>
    <Paper elevation={1} sx={{ marginBottom: '16px', marginTop: '16px' }}>
      <Grid container spacing={2} p={2} sx={{ alignItems: 'end' }}>
        <Grid item xs={12} sm={8} lg={8} >
          <div>
            <h3>Pending Leave Details</h3>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} lg={4} >
          <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
            <LeaveDrawer />
          </div>
        </Grid>
      </Grid>
      <Box p={2}>
        <LeaveTabs />
      </Box>
    </Paper>
    {/* <LeaveForm/> */}
  </>
)

export default LeaveApplication