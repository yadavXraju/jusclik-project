import { Grid,  TextField, Paper, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LeaveDrop from '../LeaveDrop';
import Datecomponet from './Datecomponet';

const Leave = () => {
  return (
    <Box mt={4} mx={2}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '12px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid container>
          <Grid item xs={12} container flexDirection="row" alignItems="center">
            <Grid item xs={12} md={6} style={{ padding: '5px 10px' }}>
              <TextField
                multiline
                label="REMARK"
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid container flexDirection="row" item xs={12} md={6} style={{ padding: '5px 10px' }}>
              <Grid item md={6} style={{ padding: '5px 10px' }}>
                {/* <TextField type="date" fullWidth variant="outlined" label="Leave From:" /> */}
                <Datecomponet label="Leave From:"/>
              </Grid>

              <Grid item md={6} style={{ padding: '5px 10px' }}>
                {/* <TextField type="date" fullWidth variant="outlined"  label="Leave To:"/> */}
                <Datecomponet label="Leave To:"/>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={6} style={{ padding: '5px 10px' }}>
              <TextField fullWidth variant="outlined" label="Total Leaves:" />
            </Grid>
            <Grid item xs={12} md={6} style={{ padding: '5px 10px' }}>
              <TextField fullWidth variant="outlined" label=' Reason:' />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={6} style={{ marginBottom: '20px', padding: '5px 10px' }}>
              <LeaveDrop />
            </Grid>

         
          </Grid>

        </Grid>
        <Grid textAlign="end">  
            <Button variant="contained">Submit Request</Button>
            </Grid>
      </Paper>
    </Box>
  );
};

export default Leave;
