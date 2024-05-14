import React from 'react';
import { Grid, Typography, Box, TextField, InputLabel } from '@mui/material';
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

    if (name === 'city' || name === 'state') {
      // Check if value contains only letters, spaces, and commas
      if (/^[a-zA-Z,\s]*$/.test(value)) {
        const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        SetFormdata({ ...Formdata, [name]: capitalizedValue });
      }
    } else {
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      SetFormdata({ ...Formdata, [name]: capitalizedValue });
    }
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
  //Below Function will use in button to validate validation
  console.log(() => handleSubmit(() => {}));

  const labelStyles = {
    marginBottom: '8px',
    fontWeight: '500',
    color: 'rgb(54, 65, 82)',
    whiteSpace: 'pre-wrap'
    // fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Box sx={{ padding: '2rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
          {' '}
          STEP 5 : PERMANENT ADDRESS{' '}
        </Typography>

        <Divider />
      </Box>

      <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
        <Grid item xs={4}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="area">
            Area
          </InputLabel>
          <TextField
            fullWidth
            name="area"
            value={Formdata.area}
            error={Formerror.area}
            onChange={PermanentAddChangeHandler}
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xs={4}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="city">
            City
          </InputLabel>
          <TextField
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
          <InputLabel sx={{ ...labelStyles }} htmlFor="state">
            State
          </InputLabel>
          <TextField
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

      {/* <Box sx={{ paddingBottom: '5rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('six')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box> */}
    </>
  );
}

export default PermanentAddress;
