import React from 'react';
import { Avatar, Box, Typography, Button } from '@mui/material';
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';
import { useNavigate } from 'react-router-dom'; 


  const Profile = () => {
    const navigate = useNavigate(); 
  
  return (
    <>
      <Box sx={{ textAlign: 'center',  border: '1px solid rgb(185 185 185)',borderRadius:'7px', padding: '2rem' }}>
        <Avatar alt="Remy Sharp" src={studentProfileDetails.StudentImage} sx={{ width: 150, height: 150, margin: 'auto', marginBottom: '10px' }} />
        <Typography variant="h2">{studentProfileDetails.StudentName}</Typography>
        <Typography variant="h5">{studentProfileDetails.AdminNo}</Typography>
        <Button sx={{ textTransform: 'uppercase', background: 'rgb(33, 150, 243)', color: '#fff' , marginTop:'1rem' }} variant="contained"  onClick={() => navigate('/student-profile')}>
          go to Profile
        </Button>
      </Box>
    </>
  );
};

export default Profile;
