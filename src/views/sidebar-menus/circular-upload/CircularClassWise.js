import React from 'react'
import { Grid,  TextField, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Datecomponent from '../request/requestcomponent/Datecomponent';
import MenuItem from '@mui/material/MenuItem';
import MainCard from 'ui-component/cards/MainCard';
import CircularName from './CircularName'



const Classes = [
    {
      value: '1',
      label: 'Pre-Nursery',
    },
    {
      value: '2',
      label: 'Nursery',
    },
    {
      value: '3',
      label: 'I',
    },
    {
      value: '4',
      label: 'II',
    },
  ];

const CircularClassWise = () => {
  return (
    <MainCard>
    <Box mt={4} mx={2}>
    <Paper style={{ padding: '20px', borderRadius: '12px' }}>
      <Grid container>
     

          <Grid flexDirection="row" item xs={6} md={6} style={{ padding: '5px 10px' }}>
            <Grid item md={12} style={{ padding: '5px 10px' }}>
              <Datecomponent label="Homework Date:"/>
            </Grid>

            <Grid item md={12} style={{ padding: '5px 10px' }}>
              <Datecomponent label="Submission Date:"/>
            </Grid>

          </Grid>
          {/* Class start */}
          <Grid container>
                      <Box
                          component="form"
                          sx={{
                              '& .MuiTextField-root': { m: 1, width: '25ch' }, paddingLeft:'23px'
                          }}
                          noValidate
                          autoComplete="off"
                         
                          md={12}
                      >
                          <div>
                              <TextField
                                  id="outlined-select-currency"
                                  select
                                  label="Class"
                                  defaultValue="1"
                                  helperText="Please select your class"
                              >
                                  {Classes.map((option) => (
                                      <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                      </MenuItem>
                                  ))}
                              </TextField>

                          </div>
                      </Box>
                    
                      </Grid>
          {/* Class end */}
        </Grid>

      

        <Grid container>
          <Grid item xs={6} md={6} style={{ marginBottom: '20px', padding: '5px 10px' }}>
          <CircularName/>
          </Grid>

       
        </Grid> 
      {/* <Grid textAlign="end">  
          <Button variant="contained">Submit Request</Button>
          </Grid> */}
    </Paper>
  </Box>
  </MainCard>
  )
}

export default CircularClassWise


