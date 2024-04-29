import React from 'react';
import { Grid, Typography, Box, Paper, TextField, Button } from '@mui/material';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// import CloudLogo from '../../../assets/images/Untitled-2.png';
import Divider from '@mui/material/Divider';
import Dropdown from 'views/common-section/ParamSelectList';


function StudentDetails() {
  // const [TabChange, setTabChange] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setTabChange(newValue);
  // };

  const SelectGender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  const PrimaryContact = [
    { value: 'father', label: 'Father' },
    { value: 'mother', label: 'Mother' }
  ];

  const ChildIdProof = [
    { value: 'aadhar_no', label: 'Aadhar No' },
    { value: 'passport_no', label: 'Passport Number' }
  ];

  const BloodGroup = [
    { value: 'a+', label: 'A+' },
    { value: 'a-', label: 'A-' },
    { value: 'ab+', label: 'AB+' },
    { value: 'a-', label: 'A-' },
    { value: 'a rh-', label: 'A RH+' },
    { value: 'a rh-', label: 'A RH+' },
    { value: 'b+', label: 'B+' },
    { value: 'b-', label: 'B-' },
    { value: 'o-', label: 'O-' },
    { value: 'o-', label: 'O-' },
    { value: 'o rh+', label: 'O RH+' },
    { value: 'rh-', label: 'RH-' },
    { value: 'unknown', label: 'Unknown' }
  ];

  const EnrolledSince = [
    { value: 'na', label: 'NA' },
    { value: '2021-22', label: '2021-22' },
    { value: '2020-21', label: '2020-21' },
    { value: '2019-20', label: '2019-20' },
    { value: '2018-19', label: '2018-19' },
    { value: '2017-18', label: '2017-18' },
    { value: '2016-17', label: '2016-17' },
    { value: '2015-16', label: '2015-16' },
    { value: '2014-15', label: '2014-15' },
    { value: '2013-14', label: '2013-14' },
    { value: '2012-13', label: '2012-13' },
    { value: '2011-12', label: '2011-12' },
    { value: '2010-11', label: '2010-11' },
    { value: '2009-10', label: '2009-10' },
    { value: '2008-09', label: '2008-09' },
    { value: '2007-08', label: '2007-08' },
    { value: '2006-07', label: '2006-07' },
    { value: '2005-06', label: '2005-06' },
    { value: '2004-05', label: '2004-05' },
    { value: '2003-04', label: '2003-04' },
    { value: '2002-03', label: '2002-03' },
    { value: '2001-02', label: '2001-02' },
    { value: '2000-01', label: '2000-01' }
  ];

  const SelectBoard = [
    { value: 'cbse', label: 'CBSE' },
    { value: 'igcse', label: 'IGCSE' },
    { value: 'seb', label: 'SEB' },
    { value: 'ib', label: 'IB' },
    { value: 'others', label: 'Others' }
  ];

  const Select_School_Distance = [
    { value: '0-2 km', label: '0-2 Km' },
    { value: '3-5 km', label: '3-5 Km' },
    { value: '5-10 km', label: '5-10 Km' },
    { value: '10-15 km', label: '10-15 Km' },
    { value: '15-30 km', label: '15-30 Km' }
  ];

  return (
    <>
      <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
        <Paper>

          
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 1 : STUDENT&apos;S DETAILS{' '}
            </Typography>

            <Box sx={{  paddingBottom: '1.5rem' }}>
            <Button variant="contained" sx={{ height: '38px', width: '144px' }}>
              Back to Login
            </Button>
          </Box>
            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>
              <TextField label="Student`s Name" variant="outlined" fullWidth  inputProps={{ style: { backgroundColor: '#ffffff' } }} />

              <Dropdown
                label="Gender"
                options={SelectGender}
                name=""
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              <TextField
                sx={{ marginTop: '25px' }}
                label="Aadhar Card Number"
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                sx={{ marginTop: '25px' }}
                label="Email Address"
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                required
                sx={{ marginTop: '25px' }}
                label="City"
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Enrolled Since"
                options={EnrolledSince}
                name=""
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                sx={{ marginTop: '25px' }}
                label="Test"
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Date of Birth (dd-mm-yyyy)"
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Primary Contact"
                options={PrimaryContact}
                name=""
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                label="Preferred Mobile (you can add up to 2 numbers separated by commas)"
                variant="outlined"
                sx={{ marginTop: '25px' }}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                sx={{ marginTop: '25px' }}
                label="Flat No / House No "
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                sx={{ marginTop: '25px' }}
                label="Pincode"
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Board"
                options={SelectBoard}
                name=""
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Nationality"
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Child Photo ID (Either Aadhar or Passport No.)"
                options={ChildIdProof}
                name=""
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />
              <Dropdown
                label="Blood Group"
                options={BloodGroup}
                name=""
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                label="Current Address"
                variant="outlined"
                sx={{ marginTop: '25px' }}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                label="Name of the school last enrolled in"
                variant="outlined"
                sx={{ marginTop: '25px' }}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Distance From School"
                options={Select_School_Distance}
                name=""
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />
            </Grid>
          </Grid>

          <Box sx={{ paddingBottom: '2rem', display: 'flex' ,paddingRight:'4.2rem'}}>
  <Button variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto'  }}>
    Save and Next
  </Button>
</Box>
        </Paper>
      </Grid>
    </>
  );  
}

export default StudentDetails;
