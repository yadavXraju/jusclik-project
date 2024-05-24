// ======= Page Owner Vikash =========
// ======= Common Profile Section ==========
import React from 'react';
import { Avatar, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Profile = ({ teacherDetails }) => {
  const navigate = useNavigate(); 
  
  return (
    <Box sx={{ textAlign: 'center', border: '1px solid rgb(227 227 227)', borderRadius: '7px', padding: '2rem', background: '#fff' , height : '350px' , display : 'flex' , alignItems : 'center' , justifyContent : 'center', flexDirection:'column' }}>
      
      <Avatar alt="Remy Sharp" src={teacherDetails.image} sx={{ width: 150, height: 150, margin: 'auto', marginBottom: '10px' , marginTop : '0', background:'none' }} />

      <Typography variant="h2">{teacherDetails.name}</Typography>

      {teacherDetails.subject && (
        <Typography variant="h5" sx={{ lineHeight: '1.6' }}>Subject: {teacherDetails.subject}</Typography>
      )}
      {teacherDetails.class && (
        <Typography variant="h5">Class: {teacherDetails.class}</Typography>
      )}
      {teacherDetails.accessLevel && (
        <Typography variant="h5">Access Level : {teacherDetails.accessLevel}</Typography>
      )}

      <Button sx={{ textTransform: 'uppercase', background: 'rgb(33, 150, 243)', color: '#fff', marginTop: '1rem' , fontSize:{md:'14px' , sm:'12px' , xs:'10px'}}} variant="contained" onClick={() => navigate(teacherDetails.link)}>
        View Profile
      </Button>
    </Box>
  );
};

export default Profile;
