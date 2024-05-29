// sangeeta

import React from 'react';
import { Card, Grid, Typography, CardContent } from "@mui/material";
import TimerIcon from '@mui/icons-material/Timer';

const data = [
    {
        id: 1,
        subject: "HINDI",
        duration: "30min",
        link: "your_link_here"
    },
    {
        id: 2,
        subject: "MATH",
        duration: "30min",
        link: "your_link_here"
    },
    {
        id: 3,
        subject: "PUNJABI",
        duration: "30min",
        link: "your_link_here"
    },
    {
        id: 4,
        subject: "SCIENCE",
        duration: "30min",
        link: "your_link_here"
    }
];

function OnlineTest() {
    return (
        <Grid container spacing={3} sx={{ mt: 3 }}>
            {data.map((item, index) => (
                <Grid lg={4} md={6} sm={12} xs={12} key={item.id} sx={{ padding: '20px' }}>
                    <Card elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', background: "#f8f9fa", borderRadius: '0px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderLeft: `5px solid ${index % 2 === 0 ? '#5e35b1' : 'rgb(144,202,249)'}`, transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' } }}>
                        <CardContent>
                            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: '0.5rem' }}>
                                {item.subject}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" sx={{ display: "flex", alignItems: "flex-end", color: 'rgba(0, 0, 0, 0.7)' }}>
                                <TimerIcon sx={{ marginRight: '0.5rem', marginLeft: "-3px" }} /> Duration: {item.duration}
                            </Typography>
                            <a href={item.link} target='_blank' rel='noopener noreferrer' style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold', marginTop: '1rem', transition: 'color 0.3s', '&:hover': { color: '#1976D2' } }}>
                                Start Test
                            </a>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default OnlineTest;
