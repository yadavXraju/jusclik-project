// Page owner - Kulwinder Singh
// online Registration

import React from 'react';
import { Grid, Typography, Box, TextField, InputLabel, useMediaQuery} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

const OtherDetails =({ handleClick }) => {
  const [Formdata, Setformdata] = useState({
    sibling_adm_no: '',
    sibling_class_section: '',
    sibling_name: ''
  });

  const OtherDetailsChangeHandler = (e) => {
    const { name, value } = e.target;

    // Check if the input field is a text field and not email or Aadhar card
    if (e.target.nodeName === 'INPUT' && e.target.type === 'text' && name === 'sibling_name') {
      // Define a regular expression to match only alphabetic characters and spaces
      const noNumeric = /^[a-zA-Z\s]*$/;
      // Check if the value matches the defined pattern (no numeric values)
      if (noNumeric.test(value)) {
        // Capitalize the first letter
        const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        // Update the state with the capitalized value
        Setformdata({ ...Formdata, [name]: capitalizedValue });
      } else {
        // If the value does not match the pattern, update the state with the value without the last character
        Setformdata({ ...Formdata, [name]: value.slice(0, -1) });
      }
    } else {
      // For other types of input fields, update the state directly
      Setformdata({ ...Formdata, [name]: value });
    }
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

  //Below Function will use in button to validate validation
  console.log(() => handleSubmit(() => {}));

  const labelStyles = {
    marginBottom: '8px',
    fontWeight: '500',
    color: 'rgb(54, 65, 82)',
    whiteSpace: 'pre-wrap'
    // fontFamily: 'Roboto, sans-serif'
  };

  const Res500 = useMediaQuery('(max-width:500px)')



  return (
    <>
      <Box sx={{ padding: '2rem ' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem', fontSize: Res500?'17px':'20px'}}>
          {' '}
          STEP 2 :OTHER DETAILS{' '}
        </Typography>

        <Divider />
      </Box>

      <Grid sx={{ paddingTop:'1rem' , paddingBottom:'1rem' , paddingLeft:Res500?'1rem':'4rem' , paddingRight:Res500?'1rem':'4rem' }} container spacing={2}>
        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="sibling_adm_no">
            Sibling: Adm No
          </InputLabel>
          <TextField
            fullWidth
            name="sibling_adm_no"
            onChange={OtherDetailsChangeHandler}
            value={Formdata.sibling_adm_no}
            error={Formerror.sibling_adm_no}
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
            required
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12} >
          <InputLabel sx={{ ...labelStyles }} htmlFor="sibling_class_section">
            Sibling: Class & Section
          </InputLabel>
          <TextField
            id="outlined-basic"
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

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12} >
          <InputLabel sx={{ ...labelStyles }} htmlFor="sibling_name">
            Sibling: Name
          </InputLabel>
          <TextField
            id="outlined-basic"
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

      {/* <Box sx={{ paddingBottom: '2rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('three')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box> */}
    </>
  );
}

export default OtherDetails;
