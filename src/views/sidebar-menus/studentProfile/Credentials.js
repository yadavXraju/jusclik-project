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
import Checkbox from '@mui/material/Checkbox';
import sidebarMenu from 'menu-items/sidebar-menu';



export default function Credentials() {

  // ============= User Name textfield toggle code ===========
  const [displayItem, setDisplayItem] = useState('changeEmail')
  const handleDisplay = () => {
    if (displayItem === 'changeEmail') {
      setDisplayItem('changeEmail active')
    }

    else {
      setDisplayItem('changeEmail')
    }
  }

   // ============= Password textfield toggle code ===========
  const [displayPassword, setDisplayPassword] = useState('showPassword')
  const handleDisplayPassword = () => {
    if (displayPassword === 'showPassword') {
      setDisplayPassword('showPassword active')
    }

    else {
      setDisplayPassword('showPassword')
    }
  }

   // ============= Configure toggle code ===========
  const [displayStudentPre, setdisplayStudentPre] = useState('displayStudentPre')
  const handledisplayStudentPre = () => {
    if (displayStudentPre === 'displayStudentPre') {
      setdisplayStudentPre('displayStudentPre active')
    }

    else {
      setdisplayStudentPre('displayStudentPre')
    }
  }

   // ============= User Name textfield toggle code ===========
  const [displayUseremail, setdisplayUseremail] = useState('displayUseremail')
  const handledisplayUseremail = () => {
    if (displayUseremail === 'displayUseremail') {
      setdisplayUseremail('displayUseremail active')
    }

    else {
      setdisplayUseremail('displayUseremail')
    }
  }

   // ============= User Password textfield toggle code ===========
  const [displayUserpassword, setdisplayUserpassword] = useState('displayUserpassword')
  const handledisplayUserpassword = () => {
    if (displayUserpassword === 'displayUserpassword') {
      setdisplayUserpassword('displayUserpassword active')
    }

    else {
      setdisplayUserpassword('displayUserpassword')
    }
  }


  return (
    <>
       {/* ============== Credentials component ============== */}
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
                      <Button size='small' onClick={handleDisplay} sx={{ backgroundColor: '#F9F9F9',
                       color: 'black','&:hover': {backgroundColor: '#DBDFE9'} }} variant="contained">Change User Name</Button>
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
                <Button size='small' sx={{ backgroundColor: '#F9F9F9', color: 'black', '&:hover': {backgroundColor: '#DBDFE9'} }} 
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
                      <Button size='small' onClick={handleDisplayPassword} sx={{ backgroundColor: '#F9F9F9', 
                      color: 'black','&:hover': {backgroundColor: '#DBDFE9'} }} variant="contained">Reset Password</Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box className={displayPassword} sx={{
              display: displayPassword.includes('active') ? 'block' : 'none'}}>

              <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
                  <Label >Current Password</Label>
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
                <Button size='small' sx={{ backgroundColor: '#F9F9F9', color: 'black', '&:hover': {backgroundColor: '#DBDFE9'} }} 
                onClick={handleDisplayPassword} variant="contained">Cancel</Button>
              </Box>
            </Box>

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
                    <Button onClick={handledisplayStudentPre} variant="contained">Configure</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
           </Box>
      </Card>
       
       <br/><br/>


      <Box className={displayStudentPre} sx={{ display: displayStudentPre.includes('active') ? 'Block' : 'none' }}>

      <Card sx={{ border: '1px solid #ccc' }}>
        <Box component="form">
          <CardContent>
               <Box className={displayUseremail} sx={{ display: displayUseremail.includes('active') ? 'none' : 'Block'  }}>
              <FormControl disabled variant="standard" fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel htmlFor="namefield">User Name</InputLabel>
                <Input
                  id="namefield"
                  disableUnderline
                  value={studentProfileDetails.StudentName}
                  endAdornment={
                    <InputAdornment sx={{ marginBottom: '20px' }} position="end">
                      <Button size='small' onClick={handledisplayUseremail} sx={{ backgroundColor: '#F9F9F9',
                       color: 'black','&:hover': {backgroundColor: '#DBDFE9'} }} variant="contained">Change User Name</Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box className={displayUseremail} sx={{
              display: displayUseremail.includes('active') ? 'block' : 'none'}}>

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
                <Button size='small' sx={{ backgroundColor: '#F9F9F9', color: 'black', '&:hover': {backgroundColor: '#DBDFE9'} }} 
                onClick={handledisplayUseremail} variant="contained">Cancel</Button>
              </Box>
            </Box>

              <Box sx={{borderBottom: '1px dotted #7d828e', marginBottom: '20px'}}></Box>

              <Box className={displayUserpassword}  sx={{ display: displayUserpassword.includes('active') ? 'none' : 'Block' }}>
              <FormControl variant="standard" fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel htmlFor="namefield">Password</InputLabel>
                <Input
                  id="namefield"
                  disableUnderline
                  type='password'
                  value="test@123"
                  endAdornment={
                    <InputAdornment sx={{ marginBottom: '20px' }} position="end">
                      <Button size='small' onClick={handledisplayUserpassword} sx={{ backgroundColor: '#F9F9F9', 
                      color: 'black','&:hover': {backgroundColor: '#DBDFE9'} }} variant="contained">Reset Password</Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box className={displayUserpassword} sx={{
              display: displayUserpassword.includes('active') ? 'block' : 'none'}}>

              <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
                  <Label >Current Password</Label>
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
                <Button size='small' sx={{ backgroundColor: '#F9F9F9', color: 'black', '&:hover': {backgroundColor: '#DBDFE9'} }} 
                onClick={handledisplayUserpassword} variant="contained">Cancel</Button>
              </Box>
            </Box>

          </CardContent>
        </Box>
      </Card>
      <br/><br/>
      
      {/* =========== Student Deshboard Preferences ============= */}
      <Card sx={{ border: '1px solid #ccc' }}>
        <Typography sx={{ p: 2, borderBottom: '1px solid #ccc' }} variant='h5' component="div">
          Student Deshboard Preferences
        </Typography>

        {sidebarMenu.children.map((item) => (
        <Box key={item.id}>
        <Box sx={{ display: 'flex',p: 2,borderBottom: '1px dotted #7d828e' }}>
               <Checkbox  defaultChecked />
                  <Box>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography variant='body2'>
                      Configure Student Account to share limited access of the dashbord  with your word.
                    </Typography>
                  </Box>
                </Box> 
        </Box>
        ))}
        <Box sx={{ p: 3, display:'flex', justifyContent:'flex-end' }} variant='h5' component="div">
        <Button  variant="contained">Save Changes</Button>
        </Box>
      </Card>
      </Box>
    </>
  );
}
