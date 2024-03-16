import React from 'react';
import { Grid,  TextField, Card, useMediaQuery, Typography } from '@mui/material';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import EditableTable from './EditableTable';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

function ProfileDetail() {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <>
    {/* Admission Details */}
    <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1.4} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
       Admission Details
      </Typography>
    <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
      <Grid item xs={12} sm={12} lg={6}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Adm No." variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
       <ParameterizedDateComponent customStyle={{width:'100%'}} label={'Adm Date'}/>
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Joining Class" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
       <ParameterizedDateComponent customStyle={{width:'100%'}} label={'Joining Date'}/>
      </Grid>
    </Grid>
    </Card>
    {/* Primary Contact */}
    <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Student Details
      </Typography>
    <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="First Name" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Middle Name" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Last Name" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Gender" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <ParameterizedDateComponent customStyle={{width:'100%'}} label={'D.O.B.'}/>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" type='number' fullWidth label="Age" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Aadhaar No." variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="PEN. No." variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Category" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Pay Mode" variant="outlined" />
      </Grid>
    </Grid>
    </Card>
    {/* Personal Detail */}
    {/* <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Personal Details
      </Typography>
    <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
      <Grid item xs={12} sm={12} lg={6}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Gender" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <ParameterizedDateComponent customStyle={{width:'100%'}} label={'D.O.B.'}/>
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" type='number' fullWidth label="Age" variant="outlined" />
      </Grid>
    </Grid>
    </Card> */}
    {/* Class Detail */}
    <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Class Details
      </Typography>
    <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
      <Grid item xs={12} sm={12} lg={6}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Class" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Section" variant="outlined" />
      </Grid>
    </Grid>
    </Card>


    {/* Other Detail */}
    <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Other Details
      </Typography>
    <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Class" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Section" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Concession" variant="outlined" />
      </Grid>
    </Grid>
    </Card>



    {/* Sibling Details */}
    <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Sibling Details
      </Typography>
    {/* <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
      <Grid item xs={12} sm={12} lg={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enrollment Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Enrollment Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Enquiry</MenuItem>
          <MenuItem value={20}>Ragistration</MenuItem>
          <MenuItem value={30}>Provisional</MenuItem>
          <MenuItem value={30}>Admission</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" type='number' fullWidth label="Adm. No." variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Name" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Class/Section" variant="outlined" />
      </Grid>
    </Grid> */}
      <EditableTable/>
    </Card>

    </>
  );
}

export default ProfileDetail;