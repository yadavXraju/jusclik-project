// ======= Page Owner Vikash =========
// ======= Student Profile Mother Details =========
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';


export default function MotherDetails() {

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

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };



  return (
    <Card sx={{ border: '1px solid #ccc' }}>
    <Typography sx={{p:2,borderBottom: '1px solid #ccc'}} variant='h5'  component="div">
         Mother Details
    </Typography>
    <Typography sx={{p:2, mb : 3,display: 'flex', alignItems: 'center',borderBottom: '1px solid #ccc'}} variant='h5'  component="div">
    <CardMedia
        sx={{ height: 100, width: 100,borderRadius: '50%' }}
        image={studentProfileDetails.StudentImage}
        title="Father image"
      />
      <Typography variant="h5" m={2} sx={{fontSize:{lg:'20px' , md:'18px' , xs:'16px'}}}>Mother Name</Typography>
    </Typography>
    <Box component="form">
      <CardContent>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField id="outlined-basic" fullWidth label="Education/Qualification" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
        <TextField id="outlined-basic" fullWidth label="Occupation/Profession" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth label="Designation" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth label="Company/Organisation" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth label="Office Address" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth label="Area" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth label="Office Phone" type='number' variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField
         onChange={handleMobileChange}
                  onBlur={validateMobile}
                  error={mobileError}
                  helperText={mobileError ? 'Invalid mobile number' : ''}
         id="outlined-basic" fullWidth label="Mobile" type='number' variant="outlined" />

        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField
         onChange={handleEmailChange}
                  onBlur={validateEmail}
                  error={emailError}
                  helperText={emailError ? 'Invalid email address' : ''}
         id="outlined-basic" fullWidth label="Email" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth label="City" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth label="Pin Code" type='number' variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth label="Aadhaar No" type='number' variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField
              type="file"
              fullWidth
              variant='outlined'
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