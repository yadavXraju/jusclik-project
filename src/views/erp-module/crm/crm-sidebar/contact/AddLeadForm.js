// ======= Page Owner Vikash =========
// ======= Add Lead Form =========
import React from 'react';
import { Box, TextField, useMediaQuery, Card, Grid, Typography } from '@mui/material';
import ParamMultipleSelect from 'component/ParamMultipleSelect';
import ParameterizedDateComponent from 'component/ParamDateComponent';
import TextArea from 'antd/es/input/TextArea';

function AddLeadForm({currEditItem}) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const [leadSource, setLeadSource] = React.useState([]);
  // =========== list of students ===========
  const Sources = [
    { id: 1, name: 'Social Media' },
    { id: 2, name: 'Website' },
    { id: 3, name: 'Referral' },
    { id: 4, name: 'Seminar' },
    { id: 5, name: 'Purchased' },
    { id: 6, name: 'Cold E-Mail' },
    { id: 7, name: 'Cold Call' },
    { id: 8, name: 'Organic' },
    { id: 9, name: 'PPC' },
    { id: 9, name: 'Google' }
  ];

  // State for form fields
  const defaultFormFields = {
    leadNo: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    mobile: '',
    // leadSource: [],
  };

  const [formFields, setFormFields] = React.useState(currEditItem ? {
    leadNo: currEditItem.contactNo || '',
    firstName: currEditItem.firstName || '',
    lastName: currEditItem.lastName || '',
    email: currEditItem.email || '',
    dob: currEditItem.dob || '',
    mobile: currEditItem.mobile || '',
  } : defaultFormFields);

  // Update formFields when on changes
  React.useEffect(() => {
    if (currEditItem) {
      setFormFields({
        leadNo: currEditItem.contactNo || '',
        firstName: currEditItem.firstName || '',
        lastName: currEditItem.lastName || '',
        email: currEditItem.email || '',
        dob: currEditItem.dob || '',
        mobile: currEditItem.mobile || '',
      });
    } else {
      setFormFields(defaultFormFields);
    }
  }, [currEditItem]);

  const handleChange = (field, value) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleDateChange = (newDate) => {
    const formattedDate = newDate ? newDate.format('DD-MM-YYYY') : '';
    handleChange('dob', formattedDate);
  };

  // console.log(currEditItem);

  return (
    <>
      <Card sx={{ border: '1px solid #ccc', p: 2, borderRadius: '5px' }}>
        <Box>
          <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
            Basic Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="Lead-No" size={isMobile ? 'small' : 'normal'} value={formFields.leadNo} onChange={(e) => handleChange('leadNo', e.target.value)} fullWidth label="Lead No." variant="outlined"  />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="first-Name" size={isMobile ? 'small' : 'normal'} value={formFields.firstName} onChange={(e) => handleChange('firstName', e.target.value)} fullWidth label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="first-Name" size={isMobile ? 'small' : 'normal'} value={formFields.lastName} onChange={(e) => handleChange('lastName', e.target.value)} fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="email" size={isMobile ? 'small' : 'normal'} value={formFields.email} onChange={(e) => handleChange('email', e.target.value)} fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ParameterizedDateComponent customStyle={{ width: '100%' }} value={formFields.dob} onChange={handleDateChange} label="D.O.B" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="mobile-Number" size={isMobile ? 'small' : 'normal'} value={formFields.mobile} onChange={(e) => handleChange('mobile', e.target.value)} fullWidth label="Mobile" variant="outlined" />
            </Grid>
           
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                id="Class Looking for"
                size={isMobile ? 'small' : 'normal'}
                fullWidth
                label="Class Looking for"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="Academic Session" size={isMobile ? 'small' : 'normal'} fullWidth label="Academic Session" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="Previous School" size={isMobile ? 'small' : 'normal'} fullWidth label="Previous School" variant="outlined" />
            </Grid>
          </Grid>
        </Box>

        <Box pt={2}>
          <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
            Lead Details
          </Typography>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
              <TextField id="Lead-Owner" size={isMobile ? 'small' : 'normal'} fullWidth label="Lead Owner" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
               <TextField id="Lead-status" size={isMobile ? 'small' : 'normal'} fullWidth label="Lead Status" variant="outlined"  />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="Lead-Stage" size={isMobile ? 'small' : 'normal'} fullWidth label="Lead Stage" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ParamMultipleSelect options={Sources} label="Lead Source" value={leadSource} setValue={setLeadSource} />
            </Grid>

            <Grid pt={1} item xs={12} md={12}>
            <Box p={0.5}>Remarks</Box>
            <TextArea rows={3} placeholder="Enter your text here..." fullWidth variant="outlined" />
          </Grid>
            
          </Grid>

          
        
        </Box>
      </Card>
    </>
  );
}

export default AddLeadForm;
