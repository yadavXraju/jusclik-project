// ======= Page Owner Vikash =========
// ======= Asset Allocation Component  =========
import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import AssetsDataTable from './AssetsDataTable';
import AssetsRequestDrawer from './AssetsRequestDrawer';

function ClassTeacherAssets() {

  return (
    <>
      <Paper elevation={1} sx={{ marginTop: '15px' }}>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12} sm={8} lg={8}>
            <div>
              <h2>Asset Requests</h2>
              <span>You can raise asset requests supported by your organization</span>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
              <AssetsRequestDrawer />
            </div>
          </Grid>
        </Grid>
        <Box>
          <AssetsDataTable />
        </Box>
      </Paper>
    </>
  );
}

export default ClassTeacherAssets;
