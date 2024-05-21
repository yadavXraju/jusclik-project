// ownedby --      sangeeta

import React from 'react';
import { Grid, Paper, Typography, useMediaQuery, Avatar, Box} from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss';

const AgentLeaderBoard = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Dummy data for the agent leaderboard
  const agentData = [
    { id: 1, name: "John Doe", department: "Sales", lastLead: "April 20, 2024", TotalLeads: 100, successRate: "80%" },
    { id: 2, name: "Jane Smith", department: "Support", lastLead: "April 19, 2024", TotalLeads: 90, successRate: "85%" },
    { id: 3, name: "Michael Johnson", department: "Marketing", lastLead: "April 18, 2024", TotalLeads: 70, successRate: "75%" },
    { id: 4, name: "Emily Davis", department: "Operations", lastLead: "April 17, 2024", TotalLeads: 80, successRate: "78%" },
    { id: 5, name: "Emily Davis", department: "Operations", lastLead: "April 17, 2024", TotalLeads: 80, successRate: "78%" },
    { id: 6, name: "Emily Davis", department: "Operations", lastLead: "April 17, 2024", TotalLeads: 80, successRate: "78%" },
    { id: 7, name: "Emily Davis", department: "Operations", lastLead: "April 17, 2024", TotalLeads: 80, successRate: "78%" },
    { id: 8, name: "Emily Davis", department: "Operations", lastLead: "April 17, 2024", TotalLeads: 80, successRate: "78%" },
    { id: 9, name: "Emily Davis", department: "Operations", lastLead: "April 17, 2024", TotalLeads: 80, successRate: "78%" },
  ];

  return (
    <Paper
      spacing={gridSpacing}
      sx={{
        display: 'flex',
        borderRadius: '12px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid rgb(227, 227, 227)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
      }}
    >
      {/* Heading */}
      <Grid
        sx={{
          padding: '24px 24px 0 24px',
          background: '#f9f9fb',
          borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
          borderRadius: '12px 12px 0px 0',
        }}
      >
        <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
         Agent Leaderboard
        </Typography>
      </Grid>

      {/* Content */}
      <Grid
        sx={{
          display: 'flex',
          flexDirection:'column',
          paddingBottom: isMobile ? '20px' : '0px', // Increased padding for mobile view
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
          height:"332px",
          overflowY:"auto,"
        }}
        className='scrollbar'
      >
        {agentData.map(agent => (
          <Grid key={agent.id} container alignItems="center" spacing={2} md={12} xs={12} sx={{py:2, borderBottom:"1px solid #ccc"}}>
            <Grid item md={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>{agent.name}</Typography> {/* Added bold and margin-bottom */}
                  <Typography variant="body2">{agent.department}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item md={6}>
              <Box sx={{ ml: 2, textAlign: 'left' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>Total Leads:</Typography> {/* Added bold and margin-bottom */}
                <Typography variant="body2">{agent.TotalLeads}</Typography>
              </Box>
            </Grid>
          </Grid>
  
        ))}
        
      </Grid>
    </Paper>
  );
}

export default AgentLeaderBoard;
