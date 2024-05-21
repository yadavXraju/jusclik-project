import React from 'react';
import { Grid, Typography, Box, TextField, InputLabel, useMediaQuery} from '@mui/material';
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
    const { name, value } = e.target;
    if (name === 'name') {
      const noNumeric = /^[a-zA-Z\s]*$/;
      // Check if the value matches the defined pattern (no numeric values)
      if (noNumeric.test(value)) {
        // Capitalize the first letter
        const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        // Update the state with the capitalized value
        SetFormdata({ ...Formdata, [name]: capitalizedValue });
      }
    } else {
      SetFormdata({ ...Formdata, [name]: value });
    }
  };

  console.log(Formdata);

  const ClassOptions = [
    { value: 'select', label: 'Select' },
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

  const SchoolOptions = [
    { value: 'select', label: 'Select' },
    { value: 'shikshantar', label: 'Shikshantar' },
    { value: 'other_school', label: 'Other School' }
  ];

  const SiblingTwinOptions = [
    { value: 'select', label: 'Select' },
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' }
  ];

  const AppliedTwinOptions = [
    { value: 'select', label: 'Select' },
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' }
  ];

  const handleSubmit = (tab) => {
    const errors = {};
    if (Formdata.current_school === 'shikshantar') {
      // Check validation for sibling_admin_no if current_school is 'shikshantar'
      if (!Formdata.sibling_admin_no) {
        errors.sibling_admin_no = true;
      }
    }
    if (Formdata.current_school === 'other_school') {
      // Check validation for school_name if current_school is not 'shikshantar'
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

  const labelStyles = {
    marginBottom: '8px',
    fontWeight: '500',
    color: 'rgb(54, 65, 82)',
    whiteSpace: 'pre-wrap'
    // fontFamily: 'Roboto, sans-serif'
  };

  const Res500 = useMediaQuery('(max-width:500px)')

  return (
    <>
      <Box sx={{ padding: '2rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem',fontSize: Res500?'17px':'20px' }}>
          {' '}
          STEP 3 : SIBLING DETAILS (IF ANY){' '}
        </Typography>

        <Divider />
      </Box>

      <Grid sx={{ overflowY: 'auto', height: '66vh' }}>
      <Grid sx={{ paddingTop:'1rem' , paddingBottom:'1rem' , paddingLeft:Res500?'1rem':'4rem' , paddingRight:Res500?'1rem':'4rem' }} container spacing={2}>
        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="name">
            Name
          </InputLabel>
          <TextField
            fullWidth
            value={Formdata.name}
            name="name"
            onChange={SiblingChangeHandler}
            inputProps={{ style: { backgroundColor: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12} >
          <InputLabel sx={{ ...labelStyles }} htmlFor="applied_for_twin">
            Class
          </InputLabel>
          <Dropdown
            options={ClassOptions}
            onChange={SiblingChangeHandler}
            name="class"
            value={Formdata.class || 'select'}
            rootStyle={{}}
            customStyle={{ '& > div': { background: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="enrolled_since">
            Enrolled Since
          </InputLabel>
          <Dropdown
            options={EnrolledSince}
            name="enrolled_since"
            onChange={SiblingChangeHandler}
            value={Formdata.enrolled_since || 'select'}
            rootStyle={{}}
            customStyle={{ '& > div': { background: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="current_school">
            Current School
          </InputLabel>
          <Dropdown
            options={SchoolOptions}
            name="current_school"
            onChange={SiblingChangeHandler}
            value={Formdata.current_school || 'select'}
            customStyle={{ '& > div': { background: '#ffffff' } }}
          />
        </Grid>

        {Formdata.current_school !== 'select' ? (
          <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
            {Formdata.current_school !== 'select' &&
              (Formdata.current_school === 'other_school' ? (
                <>
                  <InputLabel sx={{ ...labelStyles }} htmlFor="school_name">
                    Name of the school
                  </InputLabel>
                  <TextField
                    name="school_name"
                    required
                    error={Formerror.school_name}
                    value={Formdata.school_name}
                    onChange={SiblingChangeHandler}
                    fullWidth
                    inputProps={{ style: { backgroundColor: '#ffffff' } }}
                  />
                </>
              ) : (
                Formdata.current_school === 'shikshantar' && (
                  <>
                    <InputLabel sx={{ ...labelStyles }} htmlFor="sibling_admin_no">
                      Sibling Admission No
                    </InputLabel>
                    <TextField
                      name="sibling_admin_no"
                      required
                      error={Formerror.sibling_admin_no}
                      value={Formdata.sibling_admin_no}
                      onChange={SiblingChangeHandler}
                      fullWidth
                      inputProps={{ style: { backgroundColor: '#ffffff' } }}
                    />
                  </>
                )
              ))}
          </Grid>
        ) : null}

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <InputLabel sx={{ ...labelStyles }} htmlFor="sibling_twin">
            If sibling is a twin
          </InputLabel>
          <Dropdown
            options={SiblingTwinOptions}
            name="sibling_twin"
            onChange={SiblingChangeHandler}
            value={Formdata.sibling_twin || 'select'}
            customStyle={{ '& > div': { background: '#ffffff' } }}
          />
        </Grid>

        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          {Formdata.sibling_twin === 'yes' && (
            <>
              <InputLabel sx={{ ...labelStyles }} htmlFor="applied_for_twin">
                Have you applied for Twin
              </InputLabel>
              <Dropdown
                options={AppliedTwinOptions}
                value={Formdata.applied_for_twin || 'select'}
                onChange={SiblingChangeHandler}
                name="applied_for_twin"
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />
            </>
          )}
        </Grid>
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
