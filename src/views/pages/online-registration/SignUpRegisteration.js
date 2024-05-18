import React from 'react';
import { Grid, Box, Button, Typography, useMediaQuery } from '@mui/material';
import LeftLogo from '../authentication/LeftLogo';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import MobileLogin from '../authentication/MobileLogin';
import Dropdown from 'views/common-section/ParamSelectList';
import TextField from '@mui/material/TextField';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import { useState } from 'react';
import TermsAndConditions from './TermsandConditions';
import PoweredBySection from './PoweredByComp';
// imported to use redux
import { useDispatch } from 'react-redux';
import { updateAllDataform } from 'store/pages/online-Registration/allDataformSlice';

// Online Registration Styling
const style = {
  formHeader: {
    marginBottom: '24px'
  },
  formHeading: {
    fontWeight: '500',
    fontSize: '30px',
    lineHeight: '40px',
    color: 'rgb(58, 58, 58)',
    fontFamily: 'plus Jakarta sans'
  }
};

// Session Dropdown List Const
const SessionOptions = [{ value: '2024-2025', label: '2024-2025' }];

// Class Dropdown List Cons
const ClassOptions = [
  { value: 'playgroup', label: 'Playgroup' },
  { value: 'nursery', label: 'Nursery' },
  { value: 'kg', label: 'KG' },
  { value: 'I', label: 'I' },
  { value: 'II', label: 'II' },
  { value: '3', label: 'III' },
  { value: '4', label: 'IV' },
  { value: '5', label: 'V' },
  { value: '6', label: 'VI' },
  { value: '8', label: 'VI' },
  { value: '8', label: 'VIII' },
  { value: '9', label: 'IX' },
  { value: '10', label: 'X' },
  { value: '11', label: 'XI' },
  { value: '12A', label: 'XII' }
];

const SignUpRegisteration = ({ continueHandler }) => {
  const [value, setValue] = React.useState('1');
  //Object to store data of all Filed
  const [allDataform, setallDataform] = useState({
    email: '',
    mobile: '',
    student_name: '',
    session: '',
    class: '',
    dob: ''
  });

  // Redux Implement  with also local state because setallDataform also used for Validation
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;

    // Check if the input field is a text field and not email or Aadhar card
    if (e.target.nodeName === 'INPUT' && e.target.type === 'text' && name !== 'email') {
      // Capitalize the first letter
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      // Update the state with the capitalized value
      setallDataform({ ...allDataform, [name]: capitalizedValue });
      dispatch(updateAllDataform({ [name]: capitalizedValue }));
    } else {
      // For other types of input fields, update the state directly
      setallDataform({ ...allDataform, [name]: value });
      dispatch(updateAllDataform({ [name]: value }));
    }
  };

  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  // Data can not directly stored in Dob , by this function using dob in setallDataform
  const DatePickerSelector = (date) => {
    const formatteddate = date.format('DD-MM-YYYY');
    setallDataform({ ...allDataform, dob: formatteddate });
    dispatch(updateAllDataform({ dob: formatteddate }));
  };

  // Error Handling

  const [formErrors, setFormErrors] = useState({
    session: false,
    class: false,
    student_name: false,
    dob: false,
    mobile: false,
    email: false
  });

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(allDataform).forEach((key) => {
      if (allDataform[key] === '') {
        errors[key] = true;
        isValid = false;
      }
    });

    //Email Error Handling

    if (allDataform.email !== '' && !/^\S+@\S+\.\S+$/.test(allDataform.email)) {
      errors.email = true;
      isValid = false;
    }

    //Phone Error Handling
    if (allDataform.mobile.length !== 10) {
      errors.mobile = true;
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const mobileHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'mobile') {
      // Check if the value contains non-numeric characters or exceeds 10 digits
      if (!/^\d*$/.test(value) || value.length > 10) {
        // If non-numeric characters are found or length exceeds 10, return without updating the state
        return;
      }
    }

    setallDataform({ ...allDataform, [name]: value });
    dispatch(updateAllDataform({ [name]: value })); // Dispatch action to update Redux state
  };

  // SaVe and Next Submit Button

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form is valid');

      setShowDiv1(false);
      setShowDiv2(true);
    } else {
      console.log('Form is invalid');
    }
  };

  // Function to Handle New Registration and Already Registered
  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  const NamehandleChange =(e)=>{
    const { name, value } = e.target;
    const alphabeticValue = value.replace(/[^A-Za-z\s]/g, ''); // Filter out non-alphabetical characters and spaces
    const capitalizedValue = alphabeticValue.charAt(0).toUpperCase() + alphabeticValue.slice(1); // Capitalize first letter
    setallDataform({ ...allDataform, [name]: capitalizedValue });
    dispatch(updateAllDataform({ [name]: capitalizedValue })); // Dispatch action to update Redux state
  }

  //Responsive

  let PowerByRem = '1.5rem'

  const Res1600 = useMediaQuery('(max-width:1600px)')

  if (Res1600) {
    PowerByRem = ''
  }

  return (
    <>
      {showDiv1 && (
        <Grid container sx={{ backgroundColor: '#f8fafc' }}>
        <Grid lg={6} md={6} sx={{ minHeight: '100vh', position: 'sticky', top: 0 }}>
          <LeftLogo />
        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={6}
          sx={{
            
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            background: 'rgb(255, 236, 236)',
            justifyContent: 'center',
            padding: '20px',
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            height:'100vh',
            overflowY: 'auto',
            overflowX:'hidden'
            
          }}
        >
          <Grid sx={{ maxWidth: '575px', width: { xs: '100%', lg: '575px' }, margin: 'auto', padding: '30px' }}>
            <Box sx={style.formHeader}>
              <Typography variant="h1" sx={style.formHeading}>
                Online Registration
              </Typography>
            </Box>
      
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="New Registration" value="1" />
                    <Tab label="Already Registered" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Dropdown
                    label="Session"
                    name="session"
                    error={formErrors.session}
                    onChange={changeHandler}
                    options={SessionOptions}
                    className="findcomp"
                    sx={{ backgroundColor: '#ffffff' }}
                    rootStyle={{ marginTop: '20px' }}
                    customStyle={{ '& > div': { background: '#ffffff' } }}
                  />
                  {formErrors.session && (
                    <Typography variant="body2" color="error">
                      Please select a session
                    </Typography>
                  )}
      
                  <Dropdown
                    label="Class For Admission"
                    options={ClassOptions}
                    name="class"
                    onChange={changeHandler}
                    rootStyle={{ marginTop: '20px' }}
                    customStyle={{ '& > div': { background: '#ffffff' } }}
                  />
                  {formErrors.class && (
                    <Typography variant="body2" color="error">
                      Please select a class
                    </Typography>
                  )}
                  <TextField
                    id="outlined-basic"
                    label="Student's Name"
                    variant="outlined"
                    name="student_name"
                    value={allDataform.student_name}
                    onChange={NamehandleChange}
                    fullWidth
                    sx={{ marginTop: '20px' }}
                    inputProps={{ style: { backgroundColor: '#ffffff' } }}
                  />
                  {formErrors.student_name && (
                    <Typography variant="body2" color="error">
                      Please enter the student name
                    </Typography>
                  )}
      
                  <ParameterizedDateComponent
                    label="Date of Birth"
                    onChange={DatePickerSelector}
                    name="dob"
                    value={allDataform.dob}
                    customStyle={{
                      marginTop: '20px',
                      width: '100%',
                      borderRadius: '50px',
                      '& .MuiInputBase-root input , & .MuiInputBase-adornedEnd': { background: 'white' }
                    }}
                  />
                  {formErrors.dob && (
                    <Typography variant="body2" color="error">
                      Please enter the date of birth
                    </Typography>
                  )}
      
                  <TextField
                    id="outlined-basic"
                    label="Mobile Number"
                    onChange={mobileHandler}
                    value={allDataform.mobile}
                    name="mobile"
                    variant="outlined"
                    fullWidth
                    sx={{ marginTop: '20px' }}
                    inputProps={{ style: { backgroundColor: '#ffffff' }, inputMode: 'numeric' }}
                  />
                  {formErrors.mobile && (
                    <Typography variant="body2" color="error">
                      Please enter a valid mobile number
                    </Typography>
                  )}
      
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    onChange={changeHandler}
                    name="email"
                    value={allDataform.email}
                    fullWidth
                    sx={{ marginTop: '20px' }}
                    inputProps={{ style: { backgroundColor: '#ffffff' } }}
                  />
                  {formErrors.email && (
                    <Typography variant="body2" color="error">
                      Please enter a valid email address
                    </Typography>
                  )}
      
                  <Button
                    onClick={handleSubmit}
                    sx={{
                      backgroundColor: '#fff',
                      color: '#364152b5',
                      borderRadius: '10px',
                      marginTop: '20px',
                      border: '1px solid #c4c4c4',
                      label: 'Next',
                      fontSize: '15px',
                      fontFamily: 'plus Jakarta sans',
                      cursor: 'pointer',
                      width: '40%',
                      height: '50px',
                      '&:hover': { backgroundColor: '#e64b4c', color: '#fff' }
                    }}
                  >
                    Save & Next
                  </Button>
                </TabPanel>
                <TabPanel value="2">
                  <Box>
                    <MobileLogin />
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
            <Box sx={{ paddingTop: PowerByRem, paddingLeft: '4rem' }}>
              <PoweredBySection />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      
      )}

      {/* Page Term and Conditions */}

      {showDiv2 && (
        <Grid>
          <Grid container sx={{ backgroundColor: '#f8fafc' }}>
            <Grid lg={6} xs={12}
              
              md={6} sx={{ minHeight: '100vh' }}>
              <LeftLogo />
            </Grid>
            <Grid
              xs={12}
              lg={6}
              md={6}
              sx={{
                Height: '98vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                background: 'rgb(255, 236, 236)',
                justifyContent: 'center',
                padding: '20px',
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
                
            overflowY: 'auto',
            overflowX:'hidden'
              }}
            >
              <Grid sx={{ maxWidth: '100%', width: { xs: '100%', lg: '100%' }, margin: 'auto', padding: '20px' }}>
                <TermsAndConditions continueHandler={continueHandler} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}


    </>
  );
};

export default SignUpRegisteration;
