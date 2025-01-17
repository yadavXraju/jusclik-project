// ======= Page Owner Vikash =========
// ======= Leave Application Index =========
import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Box, Paper, Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LeaveBarChart from './LeaveapplicationBar';
import LeaveTabs from './LeaveApplicationFilter';
import LeaveBalance from './LeaveBalance';
import DrawerLayOut from 'layout/drawer-layout';
import useDrawer from 'hooks/useDrawer';
import LeaveApplicationDrawerContent from './LeaveApplicationDrawerContent';

const DrawerBody = () => {
  return (
    <>
    <LeaveApplicationDrawerContent/>
    </>
  );
}

const LeaveApplication = () => {
  const { anchor, toggleDrawer } = useDrawer();

  return (
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
            <LeaveBalance />
          </Paper>
        </Grid>
      </Grid>
      <Paper elevation={1} sx={{ marginBottom: '16px', marginTop: '16px' }}>
        <Grid container spacing={2} p={2} sx={{ alignItems: 'end' }}>
          <Grid item xs={12} sm={8} lg={8}>
            <div>
              <h3>Pending Leave Details</h3>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
              {/* <LeaveDrawer /> */}
              <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
              Leave Application
            </Button>
            </div>
            <DrawerLayOut 
              anchor={anchor} 
              direction={'right'} 
              toggleDrawer={toggleDrawer}
              Title={'Request Leave'} 
              Body={<DrawerBody />} 
              customStyles={{width: { sm: '100vw', md: 700 }}}
            />
          </Grid>
        </Grid>
        <Box p={2}>
          <LeaveTabs />
        </Box>
      </Paper>
      {/* <LeaveForm/> */}
    </>
  );
}

export default LeaveApplication;
