import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { Grid } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Label } from 'reactstrap';



export default function Credentials() {

  const [displayItem, setDisplayItem] = useState('changeEmail')

  const handleDisplay = () => {
    if (displayItem === 'changeEmail') {
      setDisplayItem('changeEmail active')
    }

    else {
      setDisplayItem('changeEmail')
    }

  }

  const [displayPassword, setDisplayPassword] = useState('showPassword')

  const handleDisplayPassword = () => {
    if (displayPassword === 'showPassword') {
      setDisplayPassword('showPassword active')
    }

    else {
      setDisplayPassword('showPassword')
    }

  }


  return (
    <>
      <Card sx={{ border: '1px solid #ccc' }}>
        <Typography sx={{ p: 2, borderBottom: '1px solid #ccc' }} variant='h5' component="div">
          Credentials
        </Typography>
        <Box component="form">
          <CardContent>
            <Box className={displayItem} sx={{ display: displayItem.includes('active') ? 'none' : 'Block'  }}>
              <FormControl disabled variant="standard" fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel htmlFor="namefield">User Name</InputLabel>
                <Input
                  id="namefield"
                  disableUnderline
                  value={studentProfileDetails.StudentName}
                  endAdornment={
                    <InputAdornment sx={{ marginBottom: '20px' }} position="end">
                      <Button size='small' onClick={handleDisplay} sx={{ backgroundColor: '#9a9a9a63',
                       color: 'black','&:hover': {backgroundColor: '#9a9a9a63'} }} variant="contained">Change User Name</Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box className={displayItem} sx={{
              display: displayItem.includes('active') ? 'block' : 'none'}}>

              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Label>Enter New Email</Label>
                  <TextField size='small' id="outlined-basic" fullWidth />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Label>Confirm Password</Label>
                  <TextField size='small' id="outlined-basic" fullWidth />
                </Grid>
              </Grid>

              <Box sx={{ marginBottom: '15px', marginTop:'15px' }}>
                <Button sx={{ m: 1 }} size='small' variant="contained">Update Email</Button>
                <Button size='small' sx={{ backgroundColor: '#9a9a9a63', color: 'black', '&:hover': {backgroundColor: '#9a9a9a63'} }} 
                onClick={handleDisplay} variant="contained">Cancel</Button>
              </Box>
            </Box>

              <Box sx={{borderBottom: '1px dotted #7d828e', marginBottom: '20px'}}></Box>

              <Box className={displayPassword} sx={{ display: displayPassword.includes('active') ? 'none' : 'Block' }}>
              <FormControl disabled variant="standard" fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel htmlFor="namefield">Password</InputLabel>
                <Input
                  id="namefield"
                  disableUnderline
                  type='password'
                  value="test@123"
                  endAdornment={
                    <InputAdornment sx={{ marginBottom: '20px' }} position="end">
                      <Button size='small' onClick={handleDisplayPassword} sx={{ backgroundColor: '#9a9a9a63', 
                      color: 'black','&:hover': {backgroundColor: '#9a9a9a63'} }} variant="contained">Reset Password</Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box className={displayPassword} sx={{
              display: displayPassword.includes('active') ? 'block' : 'none'}}>

              <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
                  <Label>Current Password</Label>
                  <TextField disableUnderline size='small' id="outlined-basic" fullWidth />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Label>New Password</Label>
                  <TextField size='small' id="outlined-basic" fullWidth />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Label>Confirm New Password</Label>
                  <TextField size='small' id="outlined-basic" fullWidth />
                </Grid>
              </Grid>

              <Box sx={{ marginBottom: '15px', marginTop:'10px' }}>
                <Button sx={{ m: 1 }} size='small' variant="contained">Update Password</Button>
                <Button size='small' sx={{ backgroundColor: '#9a9a9a63', color: 'black', '&:hover': {backgroundColor: '#9a9a9a63'} }} 
                onClick={handleDisplayPassword} variant="contained">Cancel</Button>
              </Box>
            </Box>





            {/* <FormControl disabled variant="standard" fullWidth>
              <InputLabel htmlFor="namefield">Password</InputLabel>
              <Input
                id="namefield"
                type='password'
                value={'test@123'}
                endAdornment={
                  <InputAdornment sx={{ paddingBottom: '10px' }} position="end">
                    <Button size='small' sx={{ backgroundColor: '#9a9a9a63', color: 'black' }} variant="contained">Reset Password</Button>
                  </InputAdornment>
                }
              />
            </FormControl> */}


            <Box>
              <Grid sx={{ p: 2, marginTop: '2rem', border: '1px dotted #1e88e5', background: '#deedf9', borderRadius: '5px' }} container spacing={1}>
                <Grid item sm={10} sx={{ display: 'flex' }}>
                  <VerifiedUserOutlinedIcon sx={{ paddingRight: '5px', fontSize: '30px' }} color='primary' />
                  <Box>
                    <Typography variant="h4">Create Student Account</Typography>
                    <Typography variant='body2'>
                      Configure Student Account to share limited access of the dashbord  with your word.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={2} sx={{ display: 'flex', justifyContent: 'end' }}>
                  <Box>
                    <Button variant="contained">Configure</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          {/* <CardActions>
          <Button variant="contained">Submit</Button>
        </CardActions> */}
        </Box>
      </Card>

    </>
  );
}






{/* <FormControl variant="standard" fullWidth sx={{marginBottom:'10px'}}>
            <InputLabel htmlFor="namefield">Enter New Email</InputLabel>
            <Input
              id="namefield"
            />
          </FormControl>
          <FormControl variant="standard" fullWidth sx={{marginBottom:'10px'}}>
            <InputLabel htmlFor="namefield">Password</InputLabel>
            <Input
              id="namefield"
              type='password'
            />
          </FormControl>
          <FormControl variant="standard" fullWidth sx={{marginBottom:'10px'}}>
            <InputLabel htmlFor="namefield">Confirm Password</InputLabel>
            <Input
              id="namefield"
              type='password'
            />
          </FormControl> */}