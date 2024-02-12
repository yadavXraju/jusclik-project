import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
//import Button from '@mui/material/Button';
//import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box } from '@mui/system';
import LeaveBarChart from './LeaveapplicationBar';
import LeaveChart from './LeaveApplicationChart';
import LeaveTabs from './LeaveApplicationFilter';
import { Paper } from '@mui/material';
import LeaveDrawer from './LeaveApplicationDrawer';
import LeaveForm from './leavedemo';


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
          <LeaveChart />
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
            {/* <Button variant="outlined" startIcon={<AddOutlinedIcon />}>
                Leave Application
              </Button> */}
            <LeaveDrawer />
          </div>
        </Grid>
      </Grid>
      <Box p={2}>
        <LeaveTabs />
      </Box>
    </Paper>
    <LeaveForm/>
  </>
)

export default LeaveApplication