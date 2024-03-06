import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Paper, Typography, Divider, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const StudentDetailsForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      studentId: '',
      regDate: '',
      className: '',
      image: '',
      dob: '',
      age: '',
      nationality: '',
      religion: '',
      bloodGroup: '',
      house: '',
    },
    address: {
      address: '',
      area: '',
      city: '',
      pin: '',
    },
    contact: {
      contact: '',
      mobile: '',
      email: '',
    },
    otherDetails: {
      adhaarNo: '',
      panNo: '',
      payMode: '',
      concession: '',
      category: '',
      familyId: '',
    },
  });

  const handleChange = (event, category) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [category]: {
        ...prevFormData[category],
        [name]: value
      }
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <Paper elevation={0} sx={{ padding: "20px", position: 'relative' }}>

      {/* Personal Info */}
      <Typography variant="h6" color="initial" gutterBottom style={{ marginTop: '20px', marginBottom: '10px' }}>Personal Info</Typography>
      <Divider variant="middle" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.personalInfo.name}
              onChange={(e) => handleChange(e, 'personalInfo')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Student ID"
              name="studentId"
              value={formData.personalInfo.studentId}
              onChange={(e) => handleChange(e, 'personalInfo')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Registration Date"
              name="regDate"
              type="date"
              value={formData.personalInfo.regDate}
              onChange={(e) => handleChange(e, 'personalInfo')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Class Name"
              name="className"
              value={formData.personalInfo.className}
              onChange={(e) => handleChange(e, 'personalInfo')}
            />
          </Grid>
          {/* Add other personal info fields here */}

        </Grid>

        {/* Address */}
        <Typography variant="h6" color="initial" gutterBottom style={{ marginTop: '20px', marginBottom: '10px' }}>Address</Typography>
        <Divider variant="middle" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address.address}
              onChange={(e) => handleChange(e, 'address')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Area"
              name="area"
              value={formData.address.area}
              onChange={(e) => handleChange(e, 'address')}
            />
          </Grid>
          {/* Add other address fields here */}

        </Grid>

        {/* Contact */}
        <Typography variant="h6" color="initial" gutterBottom style={{ marginTop: '20px', marginBottom: '10px' }}>Contact</Typography>
        <Divider variant="middle" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Contact"
              name="contact"
              value={formData.contact.contact}
              onChange={(e) => handleChange(e, 'contact')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Mobile"
              name="mobile"
              value={formData.contact.mobile}
              onChange={(e) => handleChange(e, 'contact')}
            />
          </Grid>
          {/* Add other contact fields here */}

        </Grid>

        {/* Other Details */}
        <Typography variant="h6" color="initial" gutterBottom style={{ marginTop: '20px', marginBottom: '10px' }}>Other Details</Typography>
        <Divider variant="middle" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Aadhaar No"
              name="adhaarNo"
              value={formData.otherDetails.adhaarNo}
              onChange={(e) => handleChange(e, 'otherDetails')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="PAN No"
              name="panNo"
              value={formData.otherDetails.panNo}
              onChange={(e) => handleChange(e, 'otherDetails')}
            />
          </Grid>
          {/* Add other details fields here */}

        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="text" type="">
            Skip
          </Button>
        </Grid>
      </form>
    </Paper>
  )
}

export default StudentDetailsForm;
