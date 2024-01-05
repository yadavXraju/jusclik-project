import React from 'react'
import {Avatar , Box, Typography , Button} from '@mui/material';
import User1 from 'assets/images/users/user-round.svg';

const Profile = () => {
  const StudentName = 'Suraj'
  const AdminNo = 'V-A (Adm No : D00158)'
  return (
    <> 
    {/* <Avatar src={User1}/> */}
 

    <Box sx={{textAlign:'center', marginTop:'1rem' , border:'1px solid rgb(185 185 185)', padding:'2rem'}}>
    <Avatar alt="Remy Sharp" src={User1} sx={{ width: 200, height: 200 , margin:'auto', marginBottom : '10px' }}/>
      <Typography variant='h2'>{StudentName}</Typography> 
      <Typography variant='h5'>{AdminNo}</Typography>
      <Button sx={{textTransform: 'uppercase'}} variant="Profile" >Profile</Button>
      
    </Box>

    </>


  )
}

export default Profile

