import React from 'react';
import { Grid, Typography, Box, Paper, TextField, Button } from '@mui/material';
import { useSelector } from 'react-redux'; 
import Divider from '@mui/material/Divider';
import Dropdown from 'views/common-section/ParamSelectList';
import { useState } from 'react';

function StudentDetails({ handleClick ,backToLogin }) {
  const [allStudentDetails, setAllStudentDetails] = useState({
    gender: '',
    id_number: '',
    email_address: '',
    city: '',
    enrolled_since: '',
    test: '',
    primary_contact: '',
    preferred_mobile: '',
    house_no: '',
    pincode: '',
    board: '',
    nationality: '',
    child_photo_id: '',
    blood_group: '',
    current_address: '',
    last_school: '',
    school_distance: ''
  });
  const [errors, setErrors] = useState({
    gender: false,
    id_number: false,
    email_address: false,
    city: false,
    enrolled_since: false,
    test: false,
    primary_contact: false,
    preferred_mobile: false,
    house_no: false,
    pincode: false,
    board: false,
    nationality: false,
    child_photo_id: false,
    blood_group: false,
    current_address: false,
    last_school: false,
    school_distance: false
  });

  const allDataform = useSelector((state) => state.allDataform);

  const SelectGender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  const PrimaryContact = [
    { value: 'father', label: 'Father' },
    { value: 'mother', label: 'Mother' }
  ];
  //

  const ChildIdProof = [
    { value: 'aadhar_card', label: 'Aadhar Card' },
    { value: 'passport', label: 'Passport' }
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

  const ChangeHandlerStudentDetails = (e) => {
    setAllStudentDetails({ ...allStudentDetails, [e.target.name]: e.target.value });
  };

  //Error Validation

  const validateFields = (fields) => {
    const newErrors = {};
    Object.keys(fields).forEach((key) => {
      newErrors[key] = !fields[key].trim();
    });
    return newErrors;
  };

  const handleSubmit = (tab) => {
    const newErrors = validateFields(allStudentDetails);
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      handleClick(tab);
    }
  };
  //Error Handling  End

  // Error Handling preferred mobile
  const mobileHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'preferred_mobile') {
      // Check if the value contains non-numeric characters or commas
      if (!/^[0-9,]*$/.test(value)) {
        // If non-numeric characters or commas are found, return without updating the state
        return;
      }
    }
    // Update the state with the value
    setAllStudentDetails({ ...allStudentDetails, [name]: value });
  };

  const PincodeHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'pincode') {
      // Check if the value contains non-numeric characters or commas
      if (!/^[0-9]*$/.test(value)) {
        // If non-numeric characters or commas are found, return without updating the state
        return;
      }
    }
    // Update the state with the value
    setAllStudentDetails({ ...allStudentDetails, [name]: value });
  };

  return (
    <>
      <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
        <Paper>
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 1 : STUDENT&apos;S DETAILS{' '}
            </Typography>

            <Box sx={{ paddingBottom: '1.5rem' }}>
              <Button onClick={()=>backToLogin()} variant="contained" sx={{ height: '38px', width: '144px' }}>
                Back to Login
              </Button>
            </Box>
            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>
              <TextField
                label="Student`s Name"
                variant="outlined"
                fullWidth
                value={allDataform?.student_name}
                disabled
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Gender"
                options={SelectGender}
                name="gender"
                required
                error={errors.gender}
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.gender}
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              <TextField
                sx={{ marginTop: '25px' }}
                label={allStudentDetails.child_photo_id === 'passport' ? 'Enter Passport Number' : 'Enter Aadhar Card Number'}
                variant="outlined"
                required
                name="id_number"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.id_number}
                fullWidth
                error={errors.id_number} // Set error prop based on the error state
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                sx={{ marginTop: '25px' }}
                label="Email Address (you can add up to 2 numbers separated by commas)"
                variant="outlined"
                required
                error={errors.email_address}
                name="email_address"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.email_address}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                required
                error={errors.city}
                sx={{ marginTop: '25px' }}
                label="City"
                variant="outlined"
                name="city"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.city}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Enrolled Since"
                options={EnrolledSince}
                name="enrolled_since"
                required
                error={errors.enrolled_since}
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.enrolled_since}
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                sx={{ marginTop: '25px' }}
                label="Test"
                required
                error={errors.test}
                name="test"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.test}
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
                disabled
                fullWidth
                value={allDataform?.dob}
                inputProps={{ style: { backgroundColor: '#ffffff', color: 'black !important' } }}
              />

              <Dropdown
                label="Primary Contact Person"
                options={PrimaryContact}
                required
                error={errors.primary_contact}
                name="primary_contact"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.primary_contact}
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                label="Preferred Mobile (you can add up to 2 numbers separated by commas)"
                name="preferred_mobile"
                onChange={mobileHandler}
                value={allStudentDetails.preferred_mobile}
                required
                error={errors.preferred_mobile}
                variant="outlined"
                sx={{ marginTop: '25px' }}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                sx={{ marginTop: '25px' }}
                label="Flat No / House No "
                name="house_no"
                required
                error={errors.house_no}
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.house_no}
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                sx={{ marginTop: '25px' }}
                label="Pincode"
                required
                error={errors.pincode}
                name="pincode"
                onChange={PincodeHandler}
                value={allStudentDetails.pincode}
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Board"
                required
                error={errors.board}
                options={SelectBoard}
                name="board"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.board}
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Nationality"
                required
                error={errors.nationality}
                name="nationality"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.nationality}
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Child Photo ID (Either Aadhar or Passport No.)"
                options={ChildIdProof}
                required
                error={errors.child_photo_id}
                name="child_photo_id"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.child_photo_id}
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />
              <Dropdown
                label="Blood Group"
                options={BloodGroup}
                required
                error={errors.blood_group}
                name="blood_group"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.blood_group}
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                label="Current Address"
                required
                error={errors.current_address}
                name="current_address"
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.current_address}
                variant="outlined"
                sx={{ marginTop: '25px' }}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <TextField
                id="outlined-basic"
                label="Name of the school last enrolled in"
                variant="outlined"
                name="last_school"
                required
                error={errors.last_school}
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.last_school}
                sx={{ marginTop: '25px' }}
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Distance From School"
                options={Select_School_Distance}
                name="school_distance"
                required
                error={errors.school_distance}
                onChange={ChangeHandlerStudentDetails}
                value={allStudentDetails.school_distance}
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />
            </Grid>
          </Grid>

          <Box sx={{ paddingBottom: '2rem', display: 'flex', paddingRight: '4.2rem' }}>
            <Button onClick={() => handleSubmit('two')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default StudentDetails;
// 