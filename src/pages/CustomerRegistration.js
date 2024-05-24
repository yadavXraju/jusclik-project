// Page Owner : Abhishek
// Description : Jusklik Customer Registration  Page url : Jusklik/registration



import React, { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  FormControl,
  MenuItem,
  Select,
  FormHelperText,
  Button,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';
import { useStyles } from './authentication/visitor-registration/mobile-number';
import { css } from './authentication/visitor-registration/css';
import SelectList from 'components/ui/custom-input/SelectList';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const style = {
  formHeader: {
    marginBottom: '24px'
  },

  formHeading: {
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '40px'
  }
};

const CountrySelect = ({ handleChange, formData }) => {
  return (
    <Select value={formData.country} onChange={handleChange} variant="standard">
      <MenuItem selected value="India">
        IN (+91)
      </MenuItem>
      <MenuItem value="Dubai">UAE (+971)</MenuItem>
      <MenuItem value="USA">USA (+1)</MenuItem>
    </Select>
  );
};

const Registration = () => {
  const navigate = useNavigate();
  const { pricingData } = useSelector((state) => state.pricingSlice);
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organisationType: 'Independent Insitution',
    insitutionName: '',
    nameOfGroup: '',
    numberOfBranches: '',
    insitutionType: '',
    mobileNumber: '',
    mobileError: false,
    country: 'India',
    email: '',
    selectedTier: pricingData.planName,
  });

  // Generic handleChange function to update form data
const handleChange = (e) => {
  const { name, value } = e.target;
  // Validate if the field is "mobileNumber" and the length is within the limit
  if (name === 'mobileNumber' && value.length <= 10) {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      mobileError: false
    }));
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // Only show error if the field is "mobileNumber"
      mobileError: name === 'mobileNumber'
    }));
  }
};




  // role option
  const RoleOptions = [
    { value: 'Teacher', label: 'Teacher' },
    { value: 'School Admin', label: 'School Admin' },
    { value: 'Principal', label: 'Principal' },
    { value: 'School Owner', label: 'School Owner' }
  ];

  //   insitution Type OPTIONS
  const InsitutionTypeOptions = [
    { value: 'kindergarten', label: 'kindergarten' },
    { value: 'Pre School', label: 'Pre School' },
    { value: 'School', label: 'School' },
    { value: 'College', label: 'College' },
    { value: 'Coaching Center', label: 'Coaching Center' }
  ];

  // tier options
  const TierOptions = [
    { value: 'Essential', label: 'Essential  (starting from ₹ 5,000/month)' },
    { value: 'Premium', label: 'Premium (starting from  ₹ 15,000/month)' },
    { value: 'Enterprise', label: 'Enterprise  (starting from ₹ 30,000/month)' }
  ];

  // Function to handle registration
  const handleRegistration = () => {
    navigate('');
  };

  return (
    <>
      <Grid container>
        <Grid lg={6} sx={{ minHeight: '100vh' }}></Grid>

        <Grid
          xs={12}
          lg={6}
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            background: 'rgb(255, 236, 236)',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <Paper>
            <Grid sx={{ maxWidth: '575px', width: { xs: '100%', lg: '575px' }, margin: 'auto', padding: '30px' }}>
              <Box sx={style.formHeader}>
                <Typography variant="h1" sx={style.formHeading}>
                  Register Now
                </Typography>

                <Typography variant="h4">Enter your details to register on Jusklik</Typography>
              </Box>

              {/* ==================== name */}
              <Grid sx={{ marginBottom: '24px' }}>
                <TextField
                  id="name"
                  name="name"
                  value={formData.name}
                  label="Your Name"
                  variant="outlined"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              {/* ===========================  role */}
              <Grid sx={{ marginBottom: '24px' }}>
                <SelectList label="Role" options={RoleOptions} value={formData.role} onChange={handleChange} name="role" />
              </Grid>

              {/* ================ mobile number */}
              <Grid sx={{ marginBottom: '24px' }}>
                <FormControl fullWidth>
                  {/* mobile number input box */}
                  <TextField
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <CountrySelect handleChange={handleChange} formData={formData} />
                        </InputAdornment>
                      )
                    }}
                    variant="outlined"
                    type='number'
                    required
                    fullWidth
                    error={formData.mobileError} // Set error state
                    id="Mobilenumber"
                    // Error message
                    helperText={
                      <FormHelperText className={classes.helperText}>
                        {formData.mobileError ? 'Mobile number must be 10 digits' : ''}
                      </FormHelperText>
                    }
                    placeholder="Mobile Number"
                    name="mobileNumber" 
                    autoComplete="Mobilenumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    sx={{
                      ...css.mobileNumber,
                      '& .MuiInput-underline:before': {
                        borderBottom: 'none'
                      },
                      '& .MuiInput-underline:after': {
                        borderBottom: 'none'
                      }
                    }}
                  />
                </FormControl>
              </Grid>

              {/* ======================= email */}
              <Grid sx={{ marginBottom: '20px' }}>
                <TextField
                  id="email"
                  name="email"
                  value={formData.email}
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                  // variant="standard"
                />
              </Grid>

              {/* ============================== Organisation Type */}
              <Grid sx={{ marginBottom: '10px' }}>
                <FormControl>
                  <FormLabel id="row-radio-buttons-group-label"> Organisation Type</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="organisationType"
                    value={formData.organisationType}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Independent Insitution" control={<Radio />} label="Independent Insitution" />
                    <FormControlLabel value="Group of Insitutions" control={<Radio />} label="Group of Insitutions" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {formData.organisationType === 'Independent Insitution' && (
                <>
                  <Grid container sx={{ marginBottom: '24px', justifyContent: 'space-between', gap: { xs: '20px', lg: null } }}>
                    <Grid sx={{ flex: { xs: '0 0 100%', lg: '0 0 60%' } }}>
                      <TextField
                        id="insitution-name"
                        name="insitutionName"
                        value={formData.insitutionName}
                        label="Insitution Name"
                        variant="outlined"
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>

                    <Grid sx={{ flex: { xs: '0 0 100%', lg: '0 0 35%' } }}>
                      <SelectList
                        label="Insitution Type"
                        options={InsitutionTypeOptions}
                        value={formData.insitutionType}
                        onChange={handleChange}
                        name="insitutionType"
                      />
                    </Grid>
                  </Grid>
                </>
              )}

              {formData.organisationType === 'Group of Insitutions' && (
                <Grid container sx={{ marginBottom: '24px', justifyContent: 'space-between', gap: { xs: '20px', lg: null } }}>
                  <Grid sx={{ flex: { xs: '0 0 100%', lg: '0 0 60%' } }}>
                    <TextField
                      id="name-of-group"
                      name="nameOfGroup"
                      value={formData.nameOfGroup}
                      label="Name of Group"
                      variant="outlined"
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>

                  <Grid sx={{ flex: { xs: '0 0 100%', lg: '0 0 35%' } }}>
                    <TextField
                      id="number of branches"
                      name="numberOfBranches"
                      value={formData.numberOfBranches}
                      label="Number of Branches"
                      variant="outlined"
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              )}

              {/* plans ====================== */}

              <Grid sx={{ marginBottom: '24px' }}>
                <SelectList
                  label="Select Tier"
                  options={TierOptions}
                  value={formData.selectedTier}
                  onChange={handleChange}
                  name="selectedTier"
                />
              </Grid>

              {/*====================== insitution type  drop down 
                      {/* btn  */}
              <Button
                sx={{ padding: '10px', borderRadius: '12px' }}
                variant="contained"
                fullWidth
                disableElevation
                onClick={handleRegistration}
              >
                Submit
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
