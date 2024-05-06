import React, { useState } from 'react';
import { Grid, Typography, Box, Paper, TextField, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Dropdown from 'views/common-section/ParamSelectList';

function Additional_Information({handleClick}) {
  const [formData, setFormData] = useState({
    parents_status: '',
    applied_earlier: '',
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

  const SelectParentsStatusOptions = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
];

const AppliedEarlierOptions = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
];

const AppliedYearOptions = [
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


const ClassOptions = [
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
    setFormData({ ...formData, [name]: value });
    
  };
 console.log(formData)


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
      handleClick(tab)
    }
  };

  return (
    <>
      <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
        <Paper sx={{ height: '86vh' }}>
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 8: ADDITIONAL INFORMATION{' '}
            </Typography>
            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>
              <Dropdown
                label="Are Parents Separated OR Divorced ?"
                options={SelectParentsStatusOptions}
                name="parents_status"
                onChange={handleChange}
                value={formData.parents_status}
                error={formError.parents_status}
                required
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />
              <Dropdown
                label="Have you applied to SHIKSHANTAR SCHOOL earlier ?"
                options={AppliedEarlierOptions}
                name="applied_earlier"
                onChange={handleChange}
                value={formData.applied_earlier}
                error={formError.applied_earlier}
                required
                customStyle={{ '& > div': { background: '#ffffff' } }}
                rootStyle={{ marginTop: '20px' }}
              />
              <TextField
                name="reason_to_join"
                required
                multiline
                rows={2}
                sx={{ marginTop: '20px' }}
                fullWidth
                helperText="Why would you like your child to join SHIKSHANTAR SCHOOL ? (upto 100 words) *"
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
                style={{ backgroundColor: '#ffffff' }}
                onChange={handleChange}
                value={formData.reason_to_join}
                error={formError.reason_to_join}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Do you live in a nuclear, joint OR extended family situation ?"
                name="family_situation"
                required
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
                onChange={handleChange}
                value={formData.family_situation}
                error={formError.family_situation}
              />
              <Dropdown
                label= {formData.applied_earlier==='no'?"Disabled":'Applied Year'} 
                options={AppliedYearOptions}
                name="applied_year"
                required
                disabled={formData.applied_earlier==='no'}
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
                onChange={handleChange}
                value={formData.applied_year}
                error={formError.applied_year}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Which other school(s) have you applied to ?"
                name="other_schools"
                required
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
                onChange={handleChange}
                value={formData.other_schools}
                error={formError.other_schools}
              />
              <Dropdown
                label=  {formData.applied_earlier==='no'?"Disabled":'For which Class'}  
                options={ClassOptions}
                name="applied_class"
                disabled={formData.applied_earlier==='no'}
                required
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
                onChange={handleChange}
                value={formData.applied_class}
                error={formError.applied_class}
              />
            </Grid>
          </Grid>

          <Box sx={{ paddingBottom: '5rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('nine')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default Additional_Information;
