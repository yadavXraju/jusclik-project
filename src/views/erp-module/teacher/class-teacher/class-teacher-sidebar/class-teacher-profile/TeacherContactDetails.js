// ======= Page Owner Vikash =========
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import {TextField, useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { ClassTeacherProfileDetails } from 'layout/MainLayout/Header/TeacherProfile';


export default function TeacherContactDetails() {

    const isMobile = useMediaQuery('(max-width: 767px)')

 // Email validation
    const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailError(!emailRegex.test(email));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };



//   Phone No. validation

  const [mobile, setMobile] = React.useState('');
  const [mobileError, setMobileError] = React.useState(false);

  const validateMobile = () => {
    const mobileRegex = /^[0-9]{10}$/;
    setMobileError(!mobileRegex.test(mobile));
  };

  const handleMobileChange = (event) => {
    const inputMobile = event.target.value.replace(/\D/g, '');
    if (inputMobile.length <= 10){
      setMobile(inputMobile);
      setMobileError(false);
    }else {
      setMobileError(true);
    }
  };



  return (
    <Card sx={{ border: '1px solid #ccc' }}>
    <Typography sx={{p:2,borderBottom: '1px solid #ccc'}} variant='h5'  component="div">
         Contact Details
    </Typography>
    <Typography sx={{p:2, mb : 3,display: 'flex', alignItems: 'center',borderBottom: '1px solid #ccc'}} variant='h5'  component="div">
    <CardMedia
        sx={{ height: 100, width: 100,borderRadius: '50%' }}
        image={ClassTeacherProfileDetails.image}
        title="Father image"
      />
      <Typography variant="h1" m={2} sx={{fontSize:{lg:'20px' , md:'18px', xs:'16px'}}}>{ClassTeacherProfileDetails.name}</Typography>
    </Typography>
    <Box component="form">
      <CardContent>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Education/Qualification" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
        <TextField id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Occupation/Profession" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Designation" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Company/Organisation" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Office Address" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Area" variant="outlined" />
        </Grid>
        {/* <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth label="Office Phone" type='number' variant="outlined" />
        </Grid> */}
        <Grid item sm={6} xs={12}>
        <TextField
         onChange={handleMobileChange}
                  onBlur={validateMobile}
                  value={mobile}
                  error={mobileError}
                  helperText={mobileError ? 'Mobile number must be 10 digits' : ''}
         id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Mobile No." type='number' variant="outlined" />

        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField
         onChange={handleEmailChange}
                  onBlur={validateEmail}
                  error={emailError}
                  helperText={emailError ? 'Invalid email address' : ''}
         id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Email" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="City" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Pin Code" type='number' variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" size={isMobile  ? 'small' : 'normal' } fullWidth label="Aadhaar No" type='number' variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField
              type="file"
              fullWidth
              size={isMobile  ? 'small' : 'normal' }
              variant="outlined"
            />
        </Grid>
      </Grid>
      </Box>
      </CardContent>
      <CardActions>
      <Button variant="contained">Submit</Button>
      </CardActions>
    </Box>
    </Card>
  );
}