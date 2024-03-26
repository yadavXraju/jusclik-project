import React, {useEffect} from 'react';
import { Grid, TextField, Card, useMediaQuery, Typography } from '@mui/material';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import EditableTable from './EditableTable';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

function ProfileDetail({setStudentDetail, setEditItem}) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  console.log(setEditItem)


  const [admissionDetails, setAdmissionDetails] = React.useState({
    AdmNo: '',
    admDate: '',
    joiningClass: '',
    joiningDate: ''
  });

  useEffect(() => {
    // Check if setEditItem is available and set the initial values accordingly
    if (setEditItem) {
      setAdmissionDetails({
        AdmNo: setEditItem.AdmNo || '',
        admDate: setEditItem.AdmDate || '',
        joiningClass: setEditItem.class || '',
        joiningDate: setEditItem.joiningDate || ''
      });
    }
  }, [setEditItem]);

  const handleInputChange = (fieldName, value) => {
    setAdmissionDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value
    }));
  };

  return (
    <>
      {/* Admission Details */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Admission Details
        </Typography>
        <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} lg={6}>
            {/* <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" value={ setEditItem.AdmNo || ''} fullWidth label="Admission No." variant="outlined" /> */}
             <TextField
              size={isMobile ? 'small' : 'normal'}
              id="outlined-basic"
              value={admissionDetails.AdmNo}
              onChange={(e) => handleInputChange('AdmNo', e.target.value)}
              fullWidth
              label="Admission No."
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
          <ParameterizedDateComponent customStyle={{ width: '100%' }}  label={'Admission Date'} />
            {/* <ParameterizedDateComponent customStyle={{ width: '100%' }} value={admissionDetails.admDate} onChange={(date) => handleInputChange('admDate', date)} label={'Admission Date'} /> */}
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField size={isMobile ? 'small' : 'normal'} value={admissionDetails.joiningClass} onChange={(e) => handleInputChange('joiningClass', e.target.value)} id="outlined-basic" fullWidth label="Joining Class" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <ParameterizedDateComponent customStyle={{ width: '100%' }} label={'Joining Date'} />
          </Grid>
        </Grid>
      </Card>
      {/* Primary Contact */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Student Details
        </Typography>
        <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="First Name" variant="outlined" onChange={(e)=>setStudentDetail("firstName",e.target.value)}/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Middle Name" variant="outlined" onChange={(e)=>setStudentDetail("middleName",e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Last Name" variant="outlined" onChange={(e)=>setStudentDetail("lastName",e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Gender" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <ParameterizedDateComponent customStyle={{ width: '100%' }} label={'D.O.B.'} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" type="number" fullWidth label="Age" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Aadhaar No." variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="PEN No." variant="outlined" />
          </Grid>
        </Grid>
      </Card>

      {/* Class Detail */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Class Details
        </Typography>
        <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Class" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Section" variant="outlined" />
          </Grid>
        </Grid>
      </Card>

      {/* Other Detail */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Fee Details
        </Typography>
        <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Category" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Pay Mode" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Concession" variant="outlined" />
          </Grid>
        </Grid>
      </Card>

      {/* Sibling Details */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Sibling Details
        </Typography>

        <EditableTable />
      </Card>
    </>
  );
}

export default ProfileDetail;
