import React from 'react';
import { Avatar, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Profile = ({ teacherDetails }) => {
  const navigate = useNavigate(); 
  
  return (
    <Box sx={{ textAlign: 'center', border: '1px solid rgb(227 227 227)', borderRadius: '7px', padding: '2rem', background: '#fff' }}>
      <Avatar alt="Remy Sharp" src={teacherDetails.image} sx={{ width: 150, height: 150, margin: 'auto', marginBottom: '10px' }} />
      <Typography variant="h2">{teacherDetails.name}</Typography>
      <Typography variant="h5" sx={{ lineHeight: '1.6' }}>Subject: {teacherDetails.subject}</Typography>
      <Typography variant="h5">Class: {teacherDetails.class}</Typography>
      <Button sx={{ textTransform: 'uppercase', background: 'rgb(33, 150, 243)', color: '#fff', marginTop: '1rem' }} variant="contained" onClick={() => navigate(teacherDetails.link)}>
        View Profile
      </Button>
    </Box>
  );
};

export default Profile;