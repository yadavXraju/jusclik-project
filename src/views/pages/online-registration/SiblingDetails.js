import React from 'react';
import { Grid, Typography, Box, TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import Dropdown from 'views/common-section/ParamSelectList';
import { useState } from 'react';

function SiblingDetails({ handleClick }) {
  const [Formdata, SetFormdata] = useState({
    name: '',
    class: '',
    enrolled_since: '',
    current_school: 'select',
    sibling_admin_no: '',
    sibling_twin: '',
    applied_for_twin: '',
    school_name: ''
  });

  const [Formerror, SetformError] = useState({
    school_name: false,
    sibling_admin_no: false
  });



  const SiblingChangeHandler = (e) => {
    SetFormdata({ ...Formdata, [e.target.name]: e.target.value });
  };

  console.log(Formdata);

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

  const EnrolledSince = [
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

  const SchoolOptions = [
    { value: 'select', label: 'Select' },
    { value: 'same_school', label: 'Same School' },
    { value: 'other_school', label: 'Other School' }
  ];

  const SiblingTwinOptions = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' }
  ];

  const AppliedTwinOptions = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' }
  ];

  const handleSubmit = (tab) => {
    const errors = {};
    if (Formdata.current_school === 'same_school') {
      // Check validation for sibling_admin_no if current_school is 'same_school'
      if (!Formdata.sibling_admin_no) {
        errors.sibling_admin_no = true;
      }
    }
    if (Formdata.current_school === 'other_school') {
      // Check validation for school_name if current_school is not 'same_school'
      if (Formdata.school_name.trim() === '') {
        errors.school_name = true;
      }
    }

    SetformError(errors);

    if (Object.keys(errors).length === 0) {
      handleClick(tab);
    }
  };

   //Below Function will use in button to validate validation
   console.log(() => handleSubmit(() => {}));


  return (
    <>
   
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 3 : SIBLING DETAILS (IF ANY){' '}
            </Typography>

           
            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>
              <TextField
                label="Name"
                fullWidth
                value={Formdata.name}
                name="name"
                onChange={SiblingChangeHandler}
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />

              <Dropdown
                label="Current School"
                options={SchoolOptions}
                name="current_school"
                onChange={SiblingChangeHandler}
                value={Formdata.current_school}
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              {Formdata.current_school !== 'select' && Formdata.sibling_twin == 'yes' && (
                <Dropdown
                  label="Have you applied for Twin"
                  options={AppliedTwinOptions}
                  onChange={SiblingChangeHandler}
                  name="applied_for_twin"
                  rootStyle={{ marginTop: '20px' }}
                  customStyle={{ '& > div': { background: '#ffffff' } }}
                />
              )}
            </Grid>

            <Grid item xs={4}>
              <Dropdown
                label="Class"
                options={ClassOptions}
                onChange={SiblingChangeHandler}
                rootStyle={{}}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              {Formdata.current_school == 'select' && (
                <Dropdown
                  label="If sibling is a twin"
                  options={SiblingTwinOptions}
                  name="sibling_twin"
                  onChange={SiblingChangeHandler}
                  value={Formdata.sibling_twin}
                  rootStyle={{ marginTop: '20px' }}
                  customStyle={{ '& > div': { background: '#ffffff' } }}
                />
              )}

              {Formdata.current_school !== 'select' &&
                (Formdata.current_school === 'other_school' ? (
                  <TextField
                    label="Name of the school"
                    name="school_name"
                    required
                    error={Formerror.school_name}
                    value={Formdata.school_name}
                    onChange={SiblingChangeHandler}
                    fullWidth
                    sx={{ marginTop: '20px' }}
                    inputProps={{ style: { backgroundColor: '#ffffff' } }}
                  />
                ) : (
                  Formdata.current_school === 'same_school' && (
                    <TextField
                      label="Sibling Admission No"
                      name="sibling_admin_no"
                      required
                      error={Formerror.sibling_admin_no}
                      value={Formdata.sibling_admin_no}
                      onChange={SiblingChangeHandler}
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      inputProps={{ style: { backgroundColor: '#ffffff' } }}
                    />
                  )
                ))}
            </Grid>

            <Grid item xs={4}>
              <Dropdown
                label="Enrolled Since"
                options={EnrolledSince}
                name="enrolled_since"
                onChange={SiblingChangeHandler}
                value={Formdata.enrolled_since}
                rootStyle={{}}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />

              {Formdata.current_school === 'select' ? null : (
                <Dropdown
                  label="If sibling is a twin"
                  options={SiblingTwinOptions}
                  name="sibling_twin"
                  onChange={SiblingChangeHandler}
                  value={Formdata.sibling_twin}
                  rootStyle={{ marginTop: '20px' }}
                  customStyle={{ '& > div': { background: '#ffffff' } }}
                />
              )}

              {Formdata.current_school == 'select' && Formdata.sibling_twin == 'yes' && (
                <Dropdown
                  label="Have you applied for Twin"
                  options={AppliedTwinOptions}
                  onChange={SiblingChangeHandler}
                  name="applied_for_twin"
                  rootStyle={{ marginTop: '20px' }}
                  customStyle={{ '& > div': { background: '#ffffff' } }}
                />
              )}
            </Grid>
          </Grid>
{/* 
          <Box sx={{ paddingBottom: '2rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('five')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box> */}
    
    </>
  );
}

export default SiblingDetails;
