import React from 'react'
import { Grid,  TextField, Paper, Button } from '@mui/material';
import { Box } from '@mui/system';

const currencies = [
    {
      value: 'Primary',
      label: 'Pre-Nursery',
    },
    {
      value: 'Primary',
      label: 'Nursery',
    },
    {
      value: 'Primary',
      label: 'I',
    },
    {
      value: 'Primary',
      label: 'II',
    },
  ];

const CircularClassWise = () => {
  return (
    <Box mt={4} mx={2}>
    <Paper style={{ padding: '20px', borderRadius: '12px' }}>
      <Grid container>
        <Grid item xs={12} container flexDirection="row" alignItems="center">
          {/* <Grid item xs={12} md={6} style={{ padding: '5px 10px' }}>
            <TextField
              multiline
              label="REMARK"
              fullWidth
              variant="outlined"
            />
          </Grid> */}

          <Grid container flexDirection="row" item xs={12} md={6} style={{ padding: '5px 10px' }}>
            <Grid item md={6} style={{ padding: '5px 10px' }}>
              {/* <TextField type="date" fullWidth variant="outlined" label="Leave From:" /> */}
              <Datecomponet label="Homework Date:"/>
            </Grid>

            <Grid item md={6} style={{ padding: '5px 10px' }}>
              {/* <TextField type="date" fullWidth variant="outlined"  label="Leave To:"/> */}
              <Datecomponet label="Submission Date:"/>
            </Grid>
          </Grid>
          {/* Class start */}
                      <Box
                          component="form"
                          sx={{
                              '& .MuiTextField-root': { m: 1, width: '25ch' },
                          }}
                          noValidate
                          autoComplete="off"
                      >
                          <div>
                              <TextField
                                  id="outlined-select-currency"
                                  select
                                  label="Select"
                                  defaultValue="EUR"
                                  helperText="Please select your currency"
                              >
                                  {currencies.map((option) => (
                                      <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                      </MenuItem>
                                  ))}
                              </TextField>

                          </div>
                      </Box>
          {/* Class end */}
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
  )
}

export default CircularClassWise


