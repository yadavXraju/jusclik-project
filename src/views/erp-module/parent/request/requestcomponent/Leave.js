// sangeeta

import { Grid,  TextField, Paper, Button } from '@mui/material';
import { Box  } from '@mui/system';
import React from 'react';
import LeaveDrop from '../LeaveDrop';
import Datecomponet from './Datecomponent';
import useMediaQuery from '@mui/material/useMediaQuery';

const Leave = () => {
 const res2560 = useMediaQuery('(min-width:2000px)')
 const res800 = useMediaQuery('(max-width:800px)')
 const rem=res2560?'12rem':null;
 const toppadding = res800?'10px':null;
 const toppadding2 = res800?'5px':null;
 
   

  return (
    <Box mt={4} mx={2}>
      <Paper style={{ padding: '20px', borderRadius: '12px' }}>
        <Box sx={{paddingLeft:rem , paddingRight:rem}}>
        <Grid container >
          <Grid item xs={12} container flexDirection="row" alignItems="center">
            <Grid item xs={12} md={6} style={{ padding: '5px 10px' }}>
              <TextField
                multiline
                label="REMARK"
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid container flexDirection="row" item xs={12} md={6} >
              <Grid item md={6} xs={12}  style={{ paddingLeft:'10px' ,paddingTop:toppadding2 ,paddingRight:'10px' }}>
                {/* <TextField type="date" fullWidth variant="outlined" label="Leave From:" /> */}
                <Datecomponet  Margin={'0px'} label="Leave From:"/>
              </Grid>

              <Grid item md={6} xs={12} style={{ paddingRight:'10px' , paddingLeft:'10px' , paddingTop:toppadding }}>
                {/* <TextField type="date" fullWidth variant="outlined"  label="Leave To:"/> */}
                <Datecomponet Margin={'0px'} label="Leave To:"/>
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
            </Box>
      </Paper>
    </Box>
  );
};

export default Leave;
