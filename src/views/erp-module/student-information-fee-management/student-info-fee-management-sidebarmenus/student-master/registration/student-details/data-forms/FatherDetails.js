import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Paper, Typography, Divider } from '@mui/material';

const FatherDetailsForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    firstName: '',
    middleName: '',
    lastName: '',
    title: '',
    dateOfBirth: '',
    occupation: '',
    education: '',
    company: '',
    designation: '',
    address: '',
    area: '',
    city: '',
    pin: '',
    mobile: '',
    email: '',
    alternateMobile: '',
    aadhaarNo: '',
    pan: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <Paper elevation={0} sx={{ padding: "20px" }}>
      {/* Personal Info */}
      <Typography variant="h6" color="initial" gutterBottom style={{ marginTop: '20px', marginBottom: '10px' }}>Personal Info</Typography>
      <Divider variant="middle" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={formData.category}
                onChange={handleChange}
                name="category"
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        {/* Occupation and Education */}
        <Typography variant="h6" color="initial" gutterBottom style={{ marginTop: '20px', marginBottom: '10px' }}>Occupation and Education</Typography>
        <Divider variant="middle" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Education"
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {/* Address Info */}
        <Typography variant="h6" color="initial" gutterBottom style={{ marginTop: '20px', marginBottom: '10px' }}>Address Info</Typography>
        <Divider variant="middle" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Area"
              name="area"
              value={formData.area}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="PIN"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {/* Contact */}
        <Typography variant="h6" color="initial" gutterBottom style={{ marginTop: '20px', marginBottom: '10px' }}>Contact</Typography>
        <Divider variant="middle" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Alternate Mobile"
              name="alternateMobile"
              value={formData.alternateMobile}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {/* Other */}
        <Typography variant="h6" color="initial" gutterBottom style={{ marginTop: '20px', marginBottom: '10px' }}>Other</Typography>
        <Divider variant="middle" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Aadhaar No"
              name="aadhaarNo"
              value={formData.aadhaarNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="PAN"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

      </form>
    </Paper>
  )
}

export default FatherDetailsForm;
