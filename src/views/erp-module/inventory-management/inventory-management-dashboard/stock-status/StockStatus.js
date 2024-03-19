import React from 'react';
import { Paper, Grid, Box, Typography } from '@mui/material';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

// icons
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';

const StockStatus = () => {
  const iconStyles = {
    fontSize: '30px',
    color: 'rgb(94, 53, 177)'
  };

  const EnrollmentData = [
    {
      id: 1,
      icon: <LiveHelpTwoToneIcon sx={{ ...iconStyles }} />,
      counterNumber: 284,
      counterTitle: 'Total Material Requested'
    },
    {
      id: 2,
      icon: <BadgeTwoToneIcon sx={{ ...iconStyles }} />,
      counterNumber: 194,
      counterTitle: 'Accepted/ Rejected'
    },
    {
      id: 3,
      icon: <AssignmentTurnedInTwoToneIcon sx={{ ...iconStyles }} />,
      counterNumber: 76,
      counterTitle: 'Pending'
    }
  ];

  return (
    <Paper
      sx={{
        border: '1px solid rgb(227, 227, 227)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
        height:'100%'
      }}
    >
      <Box
        sx={{
          padding: '24px 24px 0 24px',
          background: '#f9f9fb',
          borderRadius: '12px 12px 0 0',
          borderBottom: '1px solid rgb(227, 227, 227)'
        }}
      >
        <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
          Stock Status
        </Typography>
      </Box>

      <Grid container spacing={0}>
        {EnrollmentData.map((item, index) => (
          <Grid key={index} item xs={4} sm={4} md={4}>
            <Box
              sx={{
                flexDirection: 'column',
                textAlign: 'center',
                display: 'block',
                gap: '30px',
                alignItems: 'center',
                padding: '6rem 2rem',
                justifyContent: 'center',
                borderRight: '1px solid rgb(227, 227, 227)' 
              }}
            >
              {/* icon */}
              <Box sx={{ padding: '10px', borderRadius: '12px' }}>{item.icon}</Box>

              {/* title and number */}
              <Box>
                <Typography variant="h3" sx={{ fontSize: '24px' }}>
                  {item.counterNumber}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: '16px', fontWeight: '400', paddingTop: '20px' }}>
                  {item.counterTitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default StockStatus;
