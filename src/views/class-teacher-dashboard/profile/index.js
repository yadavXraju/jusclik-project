import React from 'react';
import { Avatar, Box, Typography, Button } from '@mui/material';
import { TeacherProfileDetails } from 'layout/MainLayout/Header/teacher-profile-section/TeacherProfile';
import { useNavigate } from 'react-router-dom'; 


  const Profile = () => {
    const navigate = useNavigate(); 
  
  
  return (
    <>
      <Box sx={{ textAlign: 'center',  border: ' 1px solid rgb(227 227 227)',borderRadius:'7px', padding: '2rem' , background:'#fff' }}>
        <Avatar alt="Remy Sharp" src={TeacherProfileDetails.TeacherImage} sx={{ width: 150, height: 150, margin: 'auto', marginBottom: '10px' }} />
        <Typography variant="h2">{TeacherProfileDetails.TeacherName}</Typography>
        {/* <Typography variant="h5" sx={{lineHeight:'1.6'}}>{TeacherProfileDetails.AdminNo}</Typography>
        <Typography variant="h5">Class : {TeacherProfileDetails.Class}</Typography> */}
        <Button sx={{ textTransform: 'uppercase', background: 'rgb(33, 150, 243)', color: '#fff' , marginTop:'1rem' }} variant="contained"  onClick={() => navigate('/student-profile')}>
          View Profile
        </Button>
      </Box>
    </>
  );
};

export default Profile;
