
// Page owner - Kulwinder Singh
// Description -  Online Registration Form  

import React, { useState } from 'react';
import { Grid, Typography, Box, TextField, InputLabel, useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import Dropdown from 'views/common-section/ParamSelectList';

const Additional_Information = ({ handleClick }) => {
  const [formData, setFormData] = useState({
    parents_status: '',
    applied_earlier: 'select',
    reason_to_join: '',
    family_situation: '',
    applied_year: '',
    other_schools: '',
    applied_class: ''
  });

  const [formError, setFormError] = useState({
    parents_status: false,
    applied_earlier: false,
    reason_to_join: false,
    family_situation: false,
    applied_year: false,
    other_schools: false,
    applied_class: false
  });

//Dummy Data 
  const SelectParentsStatusOptions = [
    { value: 'select', label: 'Select' },
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' }
  ];

// Dummy Data                      
  const AppliedEarlierOptions = [
    { value: 'select', label: 'Select' },
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' }
  ];

// Dummy Data 
  const AppliedYearOptions = [
    { value: 'select', label: 'Select' },
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

  
  //Dummy data 
  const ClassOptions = [
    { value: 'select', label: 'Select' },
    { value: 'playgroup', label: 'Playgroup' },
    { value: 'nursery', label: 'Nursery' },
    { value: 'kg', label: 'KG' },
    { value: 'I', label: 'I' },
    { value: 'II', label: 'II' },
    { value: 'III', label: 'III' },
    { value: 'IV', label: 'IV' },
    { value: 'V', label: 'V' },
    { value: 'VI', label: 'VI' },
    { value: 'VII', label: 'VII' },
    { value: 'VIII', label: 'VIII' },
    { value: 'IX', label: 'IX' },
    { value: 'X', label: 'X' },
    { value: 'XI', label: 'XI' },
    { value: 'XII', label: 'XII' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'reason_to_join') {
      // Check if the input value exceeds 100 characters
      if (value.length > 150) {
        // Truncate the value to 100 characters
        const truncatedValue = value.slice(0, 150);
        // Update the state with the truncated value
        setFormData({ ...formData, [name]: truncatedValue });
      } else {
        // If the input value is within the limit, update the state with the value
        setFormData({ ...formData, [name]: value });
      }
    } else {
      // For other fields, update the state with the value directly
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateFields = (fields) => {
    const newErrors = {};
    Object.keys(fields).forEach((key) => {
      newErrors[key] = !fields[key].trim();
    });
    return newErrors;
  };

  const handleSubmit = (tab) => {
    let newErrors = validateFields(formData);

    // If "Have you applied" is 'no', skip validation for "Applied Year" and "For which Class"
    if (formData.applied_earlier === 'no') {
      newErrors = {
        ...newErrors,
        applied_year: false,
        applied_class: false
      };
    }

    setFormError(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // Perform action on valid submission, like navigating to next step
      handleClick(tab);
    }
  };

  //Below Function will use in button to validate validation
  console.log(() => handleSubmit(() => {}));

  const labelStyles = {
    marginBottom: '8px',
    fontWeight: '500',
    color: 'rgb(54, 65, 82)',
    whiteSpace: 'pre-wrap'

    // fontFamily: 'Roboto, sans-serif'
  };

  const Res1600 = useMediaQuery('(max-width:1600px)');
  const Res1480 = useMediaQuery('(max-width:1480px)');
  const Res1366 = useMediaQuery('(max-width:1366px)');
  const Res1366_1281 = useMediaQuery('(min-width:1024px) and (max-width:1356)');
  const Res1024 = useMediaQuery('(max-width:1024px)');
  const Res500 = useMediaQuery('(max-width:500px)')

  let Responsive = {
    marginBottom: '8px'
  };

  if (Res1600) {
    Responsive = {
      marginBottom: '28px'
    };
  }

  if (Res1480) {
    Responsive = {
      marginBottom: '8px'
    };
  }

  if (Res1366) {
    Responsive = {
      marginBottom: '28px'
    };
  }

  if (Res1024) {
    Responsive = {
      marginBottom: '8px'
    };
  }

  return (
    <>
      <Box sx={{ padding: '2rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' ,fontSize: Res500?'17px':'20px' }}>
          {' '}
          STEP 8: ADDITIONAL INFORMATION{' '}
        </Typography>
        <Divider />
      </Box>

      <Grid sx={{ overflowY: 'auto', height: '66vh' }}>
        <Grid sx={{ paddingTop:'1rem' , paddingBottom:'1rem' , paddingLeft:Res500?'1rem':'4rem' , paddingRight:Res500?'1rem':'4rem' }} container spacing={2}>
          <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
            <InputLabel sx={{ ...labelStyles, marginTop: '0px', ...Responsive }} htmlFor="parents_status">
              Are Parents Separated OR Divorced ?
            </InputLabel>
            <Dropdown
              options={SelectParentsStatusOptions}
              name="parents_status"
              onChange={handleChange}
              value={formData.parents_status || 'select'}
              error={formError.parents_status}
              required
              customStyle={{ '& > div': { background: '#ffffff' } }}
            />
          </Grid>

          <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
            <InputLabel sx={{ ...labelStyles, marginTop: '0px' }} htmlFor="family_situation">
              Do you live in a nuclear, joint OR extended family situation ?
            </InputLabel>
            <TextField
              name="family_situation"
              required
              fullWidth
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
              onChange={handleChange}
              value={formData.family_situation}
              error={formError.family_situation}
            />
          </Grid>

          <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
            <InputLabel sx={{ ...labelStyles, marginTop: '0px', ...Responsive }} htmlFor="other_schools">
              Which other school(s) have you applied to ?
            </InputLabel>
            <TextField
              name="other_schools"
              required
              fullWidth
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
              onChange={handleChange}
              value={formData.other_schools}
              error={formError.other_schools}
            />
          </Grid>

          <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
            <InputLabel sx={{ ...labelStyles, marginBottom: Res1366_1281 ? '28px' : '8px' }} htmlFor="applied_earlier">
              Have you applied to SHIKSHANTAR SCHOOL earlier ?
            </InputLabel>
            <Dropdown
              options={AppliedEarlierOptions}
              name="applied_earlier"
              onChange={handleChange}
              value={formData.applied_earlier || 'select'}
              error={formError.applied_earlier}
              required
              customStyle={{ '& > div': { background: '#ffffff' } }}
            />
          </Grid>

          <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
            <InputLabel sx={{ ...labelStyles, ...Responsive }} htmlFor="family_situation">
              {formData.applied_earlier === 'no' || formData.applied_earlier === 'select' ? 'Disabled' : 'Applied Year'}
            </InputLabel>
            <Dropdown
              options={AppliedYearOptions}
              name="applied_year"
              required
              disabled={formData.applied_earlier === 'no' || formData.applied_earlier === 'select'}
              customStyle={{ '& > div': { background: '#ffffff' } }}
              onChange={handleChange}
              value={formData.applied_year || 'select'}
              error={formError.applied_year}
            />
          </Grid>

          <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
            <InputLabel sx={{ ...labelStyles, ...Responsive }} htmlFor="applied_class">
              {formData.applied_earlier === 'no' || formData.applied_earlier === 'select' ? 'Disabled' : 'For which Class'}
            </InputLabel>
            <Dropdown
              options={ClassOptions}
              name="applied_class"
              disabled={formData.applied_earlier === 'no' || formData.applied_earlier === 'select'}
              required
              customStyle={{ '& > div': { background: '#ffffff' } }}
              onChange={handleChange}
              value={formData.applied_class || 'select'}
              error={formError.applied_class}
            />
          </Grid>
        </Grid>

        <Grid sx={{ paddingTop:'1rem' , paddingBottom:'1rem' , paddingLeft:Res500?'1rem':'4rem' , paddingRight:Res500?'1rem':'4rem' }} container spacing={2}>
          <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
            <TextField
              name="reason_to_join"
              required
              multiline
              rows={2}
              sx={{
                marginTop: '10px',
                '& .MuiInputBase-root textarea': {
                  backgroundColor: 'white'
                }
              }}
              width="20%"
              helperText="Why would you like your child to join SHIKSHANTAR SCHOOL ? (upto 150 words) *"
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
              style={{ backgroundColor: '#ffffff' }}
              onChange={handleChange}
              value={formData.reason_to_join}
              error={formError.reason_to_join}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* <Box sx={{ paddingBottom: '5rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('nine')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box> */}
    </>
  );
}

export default Additional_Information;
