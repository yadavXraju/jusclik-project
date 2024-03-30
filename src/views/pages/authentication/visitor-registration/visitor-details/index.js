import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  //  Typography,
  TextField,
  // Toolbar,
  InputAdornment,
  IconButton,
  // useTheme,
  // useMediaQuery
  //  ,AppBar
} from '@mui/material';
// import { useNavigate } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { css } from '../css';

const VisitorDetails = ({ step, handleSteps }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [purpose, setPurpose] = useState('');
  const [meet, setMeet] = useState(''); 
  // const theme=useTheme()
  // const isSm=useMediaQuery(theme.breakpoints.down('sm'))
  // const navigate = useNavigate();

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
              <FormControl fullWidth variant="outlined" sx={{ mt: '1rem' }}>
                {/* <InputLabel id="purpose-label"  htmlFor="custom-select"
                  sx={{
                    paddingRight: '1rem',
                    paddingLeft:'1rem' // Add right padding to prevent wrapping
                  }}>Purpose</InputLabel> */}
                <Select
                  labelId="purpose-label"
                  id="demo-simple-select"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  // label="Purpose"
                  required
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '50px'
                    }
                  }}
                  placeholder='Purpose'
                >
                  <MenuItem value="I Work Here">I Work Here</MenuItem>
                  <MenuItem value="Meeting Appointment">Meeting Appointment</MenuItem>
                  <MenuItem value="Delivery">Delivery</MenuItem>
                  <MenuItem value="Service">Service</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" sx={{ mt: '1rem' }}>
                
                  <InputLabel id="want-to-meet-label"  >Want To Meet</InputLabel>

                <Select
                  labelId="want-to-meet-label"
                  id="demo-simple-select-want-to-meet"
                  value={meet}
                  placeholder='Want To Meet'
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

export default VisitorDetails;
