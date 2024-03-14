import React from 'react';
import { Grid,  TextField, Card, useMediaQuery, Typography } from '@mui/material';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

function ProfileDetail() {

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
      Primary Details
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
    {/* Email & Contact */}
    <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Primary Contact details
      </Typography>
    <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
      <Grid item xs={12} sm={12} lg={6}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Email" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" type='number' fullWidth label="Mobile" variant="outlined" />
      </Grid>
    </Grid>
    </Card>

    </>
  );
}

export default ProfileDetail;