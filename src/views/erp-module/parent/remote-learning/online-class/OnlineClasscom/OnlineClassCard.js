// sangeeta

import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import EventNoteIcon from '@mui/icons-material/EventNote';

const OnlineClassCard = () => {
  const onlineClasses = [
    {
      id: 1,
      date: '2024-01-27',
      time: '10:00 AM',
      link: 'https://example.com/class1',
      subject: 'Math',
    },
    {
      id: 2,
      date: '2024-01-28',
      time: '2:00 PM',
      link: 'https://example.com/class2',
      subject: 'Science',
    },
    {
      id: 3,
      date: '2024-01-28',
      time: '2:00 PM',
      link: 'https://example.com/class3',
      subject: 'English',
    },
    {
      id: 4,
      date: '2024-01-28',
      time: '2:00 PM',
      link: 'https://example.com/class4',
      subject: 'History',
    },
    // Add more online class data as needed
  ];

  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {onlineClasses.map((item, index) => (
        <Grid lg={4} md={6} sm={12} xs={12} key={item.id} sx={{ padding: '20px' }}>
          <Card elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', background: "#f8f9fa", borderRadius: '0px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderLeft: `5px solid ${index % 2 === 0 ? '#5e35b1' : 'rgb(144,202,249)'}`, transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' } }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: '0.5rem' }}>
                Online Class - {item.subject}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{ display: "flex", alignItems: "flex-end", color: 'rgba(0, 0, 0, 0.7)' }}>
                <EventNoteIcon sx={{ marginRight: '0.5rem', marginLeft: "-3px" }} /> Date: {item.date}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{ display: "flex", alignItems: "flex-end", color: 'rgba(0, 0, 0, 0.7)' }}>
                <TimerIcon sx={{ marginRight: '0.5rem', marginLeft: "-3px" }} /> Time: {item.time}
              </Typography>
              <a href={item.link} target='_blank' rel='noopener noreferrer' style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold', marginTop: '1rem', transition: 'color 0.3s', '&:hover': { color: "blue" } }}>
                Join Class
              </a>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OnlineClassCard;
