import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { TextField , useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Grid';


export default function ProfileForm() {

  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <Card sx={{ border: '1px solid #ccc' }}>
    <Typography sx={{p:2, borderBottom: '1px solid #ccc'}} variant='h5'  component="div">
         Primary Details
    </Typography>
    <Box component="form">
      <CardContent>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' }
         id="outlined-basic" fullWidth disabled value={'Male'} label="Gender" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth disabled label="Address" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth disabled label="DOB" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth disabled label="Area" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Landline" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth disabled label="City" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Mobile" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth disabled label="Pin Code" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Email" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth disabled label="House" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Aadhaar No." variant="outlined" />
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
