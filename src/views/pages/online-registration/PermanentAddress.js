import React from 'react';
import { Grid, Typography, Box, Paper, TextField, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

function PermanentAddress({ handleClick }) {
  const [Formdata, SetFormdata] = useState({
    area: '',
    city: '',
    state: ''
  });

  const PermanentAddChangeHandler = (e) => {
    const { name, value } = e.target;
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      SetFormdata({ ...Formdata, [name]: capitalizedValue });
    
  };

  const [Formerror, Setformerror] = useState({
    area: false,
    city: false,
    state: false
  });

  const handleSubmit = (tab) => {
    const errors = {};

    if (Formdata.area.trim() === '') {
      errors.area = true;
    }
    if (Formdata.city.trim() === '') {
      errors.city = true;
    }

    if (Formdata.state.trim() == '') {
      errors.state = true;
    }

    Setformerror(errors);

    if (Object.keys(errors).length == 0) {
      handleClick(tab);
    }
  };

  

  
  return (
    <>
      <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
        <Paper sx={{height:'86vh'}}>
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 5 : PERMANENT ADDRESS{' '}
            </Typography>

          
            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="area"
                value={Formdata.area}
                error={Formerror.area}
                onChange={PermanentAddChangeHandler}
                label="Area"
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="City"
                required
                name="city"
                value={Formdata.city}
                error={Formerror.city}
                onChange={PermanentAddChangeHandler}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="State"
                name="state"
                value={Formdata.state}
                error={Formerror.state}
                onChange={PermanentAddChangeHandler}
                required
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>
          </Grid>

          <Box sx={{ paddingBottom: '5rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('six')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default PermanentAddress;
