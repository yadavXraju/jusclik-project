import React from 'react';
import { Box, TextField, useMediaQuery, Card, Grid, Typography } from '@mui/material';
// import SelectList from 'views/common-section/ParamSelectList';
import ParamMultipleSelect from 'views/common-section/ParamMultipleSelect';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

function AddLeadForm() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  //   // ========= state for Attach Slab ============
  //   const [academicYear, setAcademicYear] = useState('');
  //   const AcademicYearOptions = [
  //     { value: 'Slab1', label: '2009-2010' },
  //     { value: 'Slab2', label: '2010-2011' },
  //     { value: 'Slab1', label: '2011-2012' },
  //     { value: 'Slab2', label: '2012-2013' },
  //     { value: 'Slab1', label: '2014-2015' },
  //     { value: 'Slab2', label: '2015-2016' },
  //     { value: 'Slab1', label: '2016-2017' },
  //     { value: 'Slab2', label: '2017-2018' },
  //   ];
  //   const AcademicYearChange = (event) => {
  //     setAcademicYear(event.target.value);
  //   };

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

  return (
    <>
      <Card sx={{ border: '1px solid #ccc', p: 2, borderRadius: '5px' }}>
        <Box>
          <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
            Basic Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="Lead-No" size={isMobile ? 'small' : 'normal'} fullWidth label="Lead No." variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="first-Name" size={isMobile ? 'small' : 'normal'} fullWidth label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="first-Name" size={isMobile ? 'small' : 'normal'} fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="email" size={isMobile ? 'small' : 'normal'} fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ParameterizedDateComponent customStyle={{ width: '100%' }} label="D.O.B" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField id="mobile-Number" size={isMobile ? 'small' : 'normal'} fullWidth label="Mobile" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ParamMultipleSelect options={Sources} label="Lead Source" value={leadSource} setValue={setLeadSource} />
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

          {/* <Box pb={2}>
            <SelectList
            label="Academic Year Upto"
            options={AcademicYearOptions}
            value={academicYear}
            onChange={AcademicYearChange}
            size={isMobile ? 'small' : 'normal'}
            />
          </Box>
          <Box pb={2}>
          <ParamMultipleSelect options={students} label="Classes" value={selectedStudents} setValue={setSelectedStudents} />
          </Box> */}
        </Box>
      </Card>
    </>
  );
}

export default AddLeadForm;
