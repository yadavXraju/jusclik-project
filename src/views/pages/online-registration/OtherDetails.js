import React from 'react';

import { Grid, Typography, Box, Paper, TextField, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

function OtherDetails({ handleClick }) {
  const [Formdata, Setformdata] = useState({
    sibling_adm_no: '',
    sibling_class_section: '',
    sibling_name: ''
  });

  const OtherDetailsChangeHandler = (e) => {
    Setformdata({ ...Formdata, [e.target.name]: e.target.value });
  };

  //Error Validation
  const [Formerror, Setformerror] = useState({
    sibling_adm_no: false,
    sibling_class_section: false,
    sibling_name: false
  });

  const validateFields = (fields) => {
    const newErrors = {};
    Object.keys(fields).forEach((key) => {
      newErrors[key] = !fields[key].trim();
    });
    return newErrors;
  };

  const handleSubmit = (tab) => {
    const newErrors = validateFields(Formdata);
    Setformerror(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      handleClick(tab);
    }
  };

  console.log(Formdata);

  return (
    <>
      <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
        <Paper>
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 2 :OTHER DETAILS{' '}
            </Typography>

            <Box sx={{ paddingBottom: '1.5rem' }}>
              <Button variant="contained" sx={{ height: '38px', width: '144px' }}>
                Back to Login
              </Button>
            </Box>
            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>
              <TextField
                label="Sibling: Adm No"
                fullWidth
                name="sibling_adm_no"
                onChange={OtherDetailsChangeHandler}
                value={Formdata.sibling_adm_no}
                error={Formerror.sibling_adm_no}
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Sibling: Class & Section"
                name="sibling_class_section"
                onChange={OtherDetailsChangeHandler}
                value={Formdata.sibling_class_section}
                error={Formerror.sibling_class_section}
                required
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff', color: 'black !important' } }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Sibling: Name"
                name="sibling_name"
                onChange={OtherDetailsChangeHandler}
                value={Formdata.sibling_name}
                error={Formerror.sibling_name}
                required
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>
          </Grid>

          <Box sx={{ paddingBottom: '2rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('three')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default OtherDetails;
