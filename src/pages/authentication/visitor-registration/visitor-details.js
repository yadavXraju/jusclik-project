// OWNER : DAMANDEEP
import React, { useState } from 'react';
import { Box, Button, Paper, TextField, InputAdornment, IconButton } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { css } from './css';
import { useEffect } from 'react';

export const VisitorDetails = ({ step, handleSteps, setPersonalDetails }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [purpose, setPurpose] = useState('');
  const [meet, setMeet] = useState('');
  useEffect(() => {
    setPersonalDetails({
      name: name,
      purpose: purpose,
      concernedPerson: meet
    });
  }, [name, purpose, meet]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (name.trim() === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (address.trim() === '') {
      setAddressError(true);
    } else {
      setAddressError(false);
    }

    // Handle form submission logic if all fields are valid
    if (name.trim() !== '' && address.trim() !== '') {
      // Perform your form submission logic here
      console.log('Form submitted:', { name, address, purpose, meet });
      // You can navigate or perform other actions here after form submission
    }
  };

  return (
    <>
      <Box sx={{ ...css.center, maxWidth: '25rem' }}>
        <Paper elevation={2} sx={{ ...css.mobilePaper }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ padding: '1rem 0' }}>
              <TextField
                id="outlined-basic-name"
                placeholder="Name"
                fullWidth
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                error={nameError}
                helperText={nameError ? 'Name is required' : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <PersonOutlineOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '50px'
                  },
                  mt: '1rem'
                }}
              />
              <TextField
                id="outlined-basic-address"
                placeholder="Address"
                fullWidth
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                error={addressError}
                helperText={addressError ? 'Address is required' : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <LocationOnOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '50px'
                  },
                  mt: '1rem'
                }}
              />
              <FormControl
                fullWidth
                variant="outlined"
                sx={{
                  mt: '1rem',
                  '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
                    display: 'none'
                  },
                  '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
                    display: 'none !important'
                  }
                }}
              >
                <InputLabel id="purpose-label" htmlFor="custom-select">
                  Purpose
                </InputLabel>
                <Select
                  labelId="purpose-label"
                  id="demo-simple-select"
                  // label="  Purpose"
                  value={purpose}
                  placeholder="Purpose"
                  onChange={(e) => setPurpose(e.target.value)}
                  required
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '50px'
                    }
                  }}
                >
                  {' '}
                  {/* Placeholder */}
                  <MenuItem value="placeholder" disabled>
                    Purpose
                  </MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                  <MenuItem value="Meeting Appointment">Meeting Appointment</MenuItem>
                  <MenuItem value="Delivery">Delivery</MenuItem>
                  <MenuItem value="Service">Service</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                variant="outlined"
                sx={{
                  mt: '1rem',
                  '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
                    display: 'none'
                  },
                  '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
                    display: 'none !important'
                  }
                }}
              >
                <InputLabel id="want-to-meet-label">Want To Meet</InputLabel>
                <Select
                  className="findmeselect"
                  labelId="want-to-meet-label"
                  id="demo-simple-select-want-to-meet"
                  value={meet}
                  // label="Want To Meet"
                  placeholder="Want To Meet"
                  onChange={(e) => setMeet(e.target.value)}
                  required
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '50px'
                    }
                  }}
                >
                  <MenuItem value="John Doe">John Doe</MenuItem>
                  <MenuItem value="Jane Smith">Jane Smith</MenuItem>
                  <MenuItem value="Alex Johnson">Alex Johnson</MenuItem>
                  {/* Add more options as needed */}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                sx={{
                  ...css.center,
                  ...css.marginAuto,
                  ...css.submitButton,
                  ...css.button
                }}
                disableElevation
                onClick={() => handleSteps(step)}
              >
                SUBMIT
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </>
  );
};


