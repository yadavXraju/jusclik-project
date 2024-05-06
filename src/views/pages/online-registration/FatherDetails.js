import React from 'react';
import { Grid, Typography, Box, Paper, TextField, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

function FatherDetails({handleClick}) {
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
    if (e.target.nodeName === "INPUT" && e.target.type === "text" && name !== "pan_card" && name !== "aadhar_card_no" && name !== "email") {
      // Capitalize the first letter
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      // Update the state with the capitalized value
      Setformdata({ ...Formdata, [name]: capitalizedValue });
    } else {
      // For other types of input fields, update the state directly
      Setformdata({ ...Formdata, [name]: value });
    }
  };
  return (
    <>
      <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
        <Paper sx={{height:'86vh'}}>
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 6 : FATHER&#39;S DETAILS{' '}
            </Typography>

            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>
              <TextField
                label="Father`s Name (Biological)"
                name="father_name"
                value={Formdata.father_name}
                error={FormError.father_name}
                onChange={FatherDetailsChangeHandler}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
              <TextField
                label="Aadhaar card no"
                name="aadhar_card_no"
                sx={{ marginTop: '20px' }}
                value={Formdata.aadhar_card_no}
                error={FormError.aadhar_card_no}
                onChange={FatherDetailsChangeHandler}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="Organisation"
                name="organisation"
                sx={{ marginTop: '20px' }}
                value={Formdata.organisation}
                error={FormError.organisation}
                onChange={FatherDetailsChangeHandler}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="Last Institute Attended"
                name="last_institute_attended"
                value={Formdata.last_institute_attended}
                onChange={FatherDetailsChangeHandler}
                sx={{ marginTop: '20px' }}
                error={FormError.last_institute_attended}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="PAN Card"
                name="pan_card"
                value={Formdata.pan_card}
                sx={{ marginTop: '20px' }}
                onChange={FatherDetailsChangeHandler}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Phone No"
                name="phone_no"
                value={Formdata.phone_no}
                onChange={PhoneNumberHandler}
                error={FormError.phone_no}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="Qualification"
                name="qualification"
                value={Formdata.qualification}
                onChange={FatherDetailsChangeHandler}
                sx={{ marginTop: '20px' }}
                error={FormError.qualification}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="Designation"
                name="designation"
                value={Formdata.designation}
                error={FormError.designation}
                sx={{ marginTop: '20px' }}
                onChange={FatherDetailsChangeHandler}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="Office Address"
                name="office_address"
                value={Formdata.office_address}
                onChange={FatherDetailsChangeHandler}
                sx={{ marginTop: '20px' }}
                error={FormError.office_address}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="Age"
                name="age"
                value={Formdata.age}
                onChange={FatherDetailsChangeHandler}
                sx={{ marginTop: '20px' }}
                error={FormError.age}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Email"
                name="email"
                value={Formdata.email}
                onChange={FatherDetailsChangeHandler}
                error={FormError.email}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="Profession"
                name="profession"
                value={Formdata.profession}
                onChange={FatherDetailsChangeHandler}
                sx={{ marginTop: '20px' }}
                error={FormError.profession}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="Annual Income"
                name="annual_income"
                value={Formdata.annual_income}
                error={FormError.annual_income}
                onChange={FatherDetailsChangeHandler}
                sx={{ marginTop: '20px' }}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                label="Area of Interest"
                name="area_of_interest"
                value={Formdata.area_of_interest}
                onChange={FatherDetailsChangeHandler}
                sx={{ marginTop: '20px' }}
                error={FormError.area_of_interest}
                fullWidth
                required
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>
          </Grid>

          <Box sx={{ paddingBottom: '6rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('seven')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default FatherDetails;
