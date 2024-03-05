import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Paper, Typography } from '@mui/material';


const StudentDetailsForm = () => {
  // const [showStudentForm, setShowStudentForm] = useState(true);
  const [formData, setFormData] = useState({
    dob: '',
    address: '',
    bloodGroup: '',
    gender: '',
    house: '',
    area: '',
    city: '',
    pincode: '',
    nationality: '',
    contact: '',
    email: '',
    religion: '',
    reservation: '',
    category: '',
    concession: '',
    joinClass: '',
    aadhaarNo: ''
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
    <Paper elevation={2}  sx={{padding:"20px"}}>

      <Typography variant="subtitle1" color="initial">Edit Student details</Typography>
       <form onSubmit={handleSubmit}>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="First Name"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Middle Name"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Last Name"
          name="dob"
         
          value={formData.dob}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
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
          label="Blood Group"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            value={formData.gender}
            onChange={handleChange}
            name="gender"
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="House"
          name="house"
          value={formData.house}
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
          label="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Contact"
          name="contact"
          value={formData.contact}
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
          label="Religion"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Reservation"
          name="reservation"
          value={formData.reservation}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Concession"
          name="concession"
          value={formData.concession}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Join Class"
          name="joinClass"
          value={formData.joinClass}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Aadhaar No"
          name="aadhaarNo"
          value={formData.aadhaarNo}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
        <Button variant="text" type="" >
          skip
        </Button>
      </Grid>
    </Grid>
  </form>
    </Paper>
   
  )
}

export default StudentDetailsForm