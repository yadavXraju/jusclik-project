import React from 'react';
import CommonConfig from './common-config-component';
import { Grid, Paper } from '@mui/material';

const Index = () => {

  return (
    <>
    <Grid container>
      <Grid item md={6}>
      <Paper>
        <CommonConfig />
      </Paper>
      </Grid>
      <Grid item>        
      </Grid>
    </Grid>
    </>
  );
};

export default Index;
