// Page owner - Kulwinder Singh
// online Registration

import React from 'react';
import { Grid, Typography, Box, TextField, InputLabel,useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

const FatherDetails = ({ handleClick }) =>{
  const [Formdata, Setformdata] = useState({
    father_name: '',
    phone_no: '',
    email: '',
    aadhar_card_no: '',
    qualification: '',
    profession: '',
    organisation: '',
    designation: '',
    annual_income: '',
    last_institute_attended: '',
    office_address: '',
    area_of_interest: '',
    pan_card: '',
    age: ''
  });

  const [FormError, SetformError] = useState({
    father_name: false,
    phone_no: false,
    email: false,
    aadhar_card_no: false,
    qualification: false,
    profession: false,
    organisation: false,
    designation: false,
    annual_income: false,
    last_institute_attended: false,
    office_address: false,
    area_of_interest: false,
    age: false
  });

  // Error Validation Function
  const validateFields = (fields) => {
    const newErrors = {};
    Object.keys(fields).forEach((key) => {
      newErrors[key] = !fields[key].trim();
    });
    return newErrors;
  };

  const PhoneNumberHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'phone_no') {
      // Check if the value contains non-numeric characters or exceeds 10 digits
      if (!/^\d*$/.test(value) || value.length > 10) {
        // If non-numeric characters are found or length exceeds 10, return without updating the state
        return;
      }
    }
    Setformdata({ ...Formdata, [name]: value });
  };

  const AgeHandler = (e) => {
    const { name, value } = e.target;

    if (!/^\d*$/.test(value) || value.length > 3) {
      return;
    }
    Setformdata({ ...Formdata, [name]: value });
  };

  const handleSubmit = (tab) => {
    const newErrors = validateFields(Formdata);
    if (Formdata.email !== '' && !/^\S+@\S+\.\S+$/.test(Formdata.email)) {
      newErrors.email = true;
    }

    SetformError(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      handleClick(tab);
    }
  };

  const FatherDetailsChangeHandler = (e) => {
    const { name, value } = e.target;

    // Check if the input field is a text field
    if (
      e.target.nodeName === 'INPUT' &&
      e.target.type === 'text' &&
      name !== 'pan_card' &&
      name !== 'aadhar_card_no' &&
      name !== 'email' &&
      name !== 'annual_income'
    ) {
      // Check if the value contains only non-numeric characters
      const noNumeric = /^[a-zA-Z\s]+$/;
      if (noNumeric.test(value)) {
        // Capitalize the first letter
        const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        // Update the state with the capitalized value
        Setformdata({ ...Formdata, [name]: capitalizedValue });
      }
    } else if (name === 'aadhar_card_no' || name === 'annual_income') {
      // Check if the value contains only numeric characters and spaces
      const isNumericWithSpaces = /^[0-9\s]*$/;
      if (isNumericWithSpaces.test(value) || value === '') {
        // Update the state with the value
        Setformdata({ ...Formdata, [name]: value });
      }
    } else {
      // For other types of input fields, update the state directly
      Setformdata({ ...Formdata, [name]: value });
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
      <Box sx={{ padding: '2rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' , fontSize: Res500?'17px':'20px'}}>
          {' '}
          STEP 6 : FATHER&#39;S DETAILS{' '}
        </Typography>

        <Divider />
      </Box>

      <Grid sx={{ overflowY: 'auto', height: '66vh' }}>
      <Grid sx={{ paddingTop:'1rem' , paddingBottom:'1rem' , paddingLeft:Res500?'1rem':'4rem' , paddingRight:Res500?'1rem':'4rem' }} container spacing={2} >
        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles, marginTop: '0px' }} htmlFor="father_name">
            Father`s Name (Biological)
          </InputLabel>
          <TextField
            name="father_name"
            value={Formdata.father_name}
            error={FormError.father_name}
            onChange={FatherDetailsChangeHandler}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles, marginTop: '0px' }} htmlFor="phone_no">
            Phone No
          </InputLabel>
          <TextField
            name="phone_no"
            value={Formdata.phone_no}
            onChange={PhoneNumberHandler}
            error={FormError.phone_no}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles, marginTop: '0px' }} htmlFor="email">
            Email
          </InputLabel>
          <TextField
            name="email"
            value={Formdata.email}
            onChange={FatherDetailsChangeHandler}
            error={FormError.email}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="aadhar_card_no">
            Aadhaar card no
          </InputLabel>
          <TextField
            name="aadhar_card_no"
            value={Formdata.aadhar_card_no}
            error={FormError.aadhar_card_no}
            onChange={FatherDetailsChangeHandler}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="qualification">
            Qualification
          </InputLabel>
          <TextField
            name="qualification"
            value={Formdata.qualification}
            onChange={FatherDetailsChangeHandler}
            error={FormError.qualification}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="profession">
            Profession
          </InputLabel>
          <TextField
            name="profession"
            value={Formdata.profession}
            onChange={FatherDetailsChangeHandler}
            error={FormError.profession}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="organisation">
            Organisation
          </InputLabel>
          <TextField
            name="organisation"
            value={Formdata.organisation}
            error={FormError.organisation}
            onChange={FatherDetailsChangeHandler}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid  item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="designation">
            Designation
          </InputLabel>
          <TextField
            name="designation"
            value={Formdata.designation}
            error={FormError.designation}
            onChange={FatherDetailsChangeHandler}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="annual_income">
            Annual Income
          </InputLabel>
          <TextField
            name="annual_income"
            value={Formdata.annual_income}
            error={FormError.annual_income}
            onChange={FatherDetailsChangeHandler}
            fullWidth
            required
            inputProps={{
              style: { backgroundColor: '#ffffff' }
            }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="organisation">
            Last Institute Attended
          </InputLabel>
          <TextField
            name="last_institute_attended"
            value={Formdata.last_institute_attended}
            onChange={FatherDetailsChangeHandler}
            error={FormError.last_institute_attended}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="office_address">
            Office Address
          </InputLabel>
          <TextField
            name="office_address"
            value={Formdata.office_address}
            onChange={FatherDetailsChangeHandler}
            error={FormError.office_address}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="area_of_interest">
            Area of Interest
          </InputLabel>
          <TextField
            name="area_of_interest"
            value={Formdata.area_of_interest}
            onChange={FatherDetailsChangeHandler}
            error={FormError.area_of_interest}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="pan_card">
            PAN Card
          </InputLabel>
          <TextField
            name="pan_card"
            value={Formdata.pan_card}
            onChange={FatherDetailsChangeHandler}
            fullWidth
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="age">
            Age
          </InputLabel>
          <TextField
            name="age"
            value={Formdata.age}
            onChange={AgeHandler}
            error={FormError.age}
            fullWidth
            required
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>
      </Grid>
      </Grid>

      {/* <Box sx={{ paddingBottom: '6rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('seven')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box> */}
    </>
  );
}

export default FatherDetails;
