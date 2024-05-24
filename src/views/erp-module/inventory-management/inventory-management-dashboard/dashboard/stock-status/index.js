import React from 'react';
import { Paper, Grid, Box, Typography, useMediaQuery } from '@mui/material';
import { HeadingCss } from 'components/dashboard-css/CommonCss'

// icons
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import { useTheme } from '@emotion/react';

const StockStatus = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery (theme.breakpoints.only('xs'));

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
        height: isMobile?'100%':'412px'
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

      <Grid container spacing={0} sx={{display:isMobile?'block':''}}>
        {EnrollmentData.map((item, index) => (
          <Grid key={index} item  sm={4} md={4} lg={4}>
            <Box
              sx={{
                flexDirection: isMobile?'row':'column',
                textAlign: 'center',
                display: 'flex',
                gap: '30px',
                alignItems: 'center',
                padding: isMobile?'1rem':'6rem 2rem',
                justifyContent: isMobile?'flexStart':'center',
                borderRight: index < 2 && !isMobile ? '1px solid rgb(227, 227, 227)' : 'none', 
                borderBottom: index < 2 && isMobile ? '1px solid rgb(227, 227, 227)' : 'none', 
              }}
            >
              {/* icon */}
              <Box sx={{ background: `rgb(227, 242, 253)`, padding: '10px', borderRadius: '12px', display: 'flex' }}>{item.icon}</Box>

              {/* title and number */}
              <Box sx={{display:isMobile?'flex':'',alignItems:isMobile?'center':'', gap:isMobile?'20px':'' }}>
                <Typography variant="h3" sx={{ fontSize: '24px' }}>
                  {item.counterNumber}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: '16px', fontWeight: '400', paddingTop: isMobile?'0px': '20px' }}>
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
