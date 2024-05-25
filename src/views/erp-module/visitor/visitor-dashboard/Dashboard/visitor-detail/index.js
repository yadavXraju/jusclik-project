// sangeeta
import React from 'react';
import { Paper, Typography, Box, Grid ,useMediaQuery} from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import PeopleIcon from '@mui/icons-material/People';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const VisitorDetail = () => {
  const isMobile=useMediaQuery('(max-width: 767px)');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        sx={{
          background: 'none',
        }}
      >
        {/* Counter grid */}
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          sx={{
            display: 'flex',
            borderRadius: '12px',
        
          }}
        >
          {/* Total Visitor */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: isMobile?'1rem':'2rem',
                background: '#f9f9fb',
                borderRadius: '12px',
                borderRight: '1px solid rgb(227, 227, 227)',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                gap:isMobile ?'40px': '40px',
              }}
            >
              <Box
                sx={{
                  background:isMobile?"rgb(204 245 232)": 'rgb(204 245 232)',
                  borderRadius: '50%',
                  padding: isMobile ? '7px':'7px',
                }}
              >
                <AccessAlarmIcon sx={{ color: 'rgb(16 185 129)', fontSize: isMobile?'30px':'30px', display: 'flex' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{fontSize: isMobile?"26px": '32px', color: '#000' }}>11.00 AM </Typography>
                <Typography variant="h4" sx={{ fontSize: isMobile?"13px": '16px', textTransform: 'uppercase', paddingTop: isMobile ? '7px':'7px', fontWeight: '500', color: '#12192685' }}>Busiest hour</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Todays visitor*/}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: isMobile?'1rem':'2rem',
                background: '#f9f9fb',
                borderRight: '1px solid rgb(227, 227, 227)',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                borderRadius: '12px',
                gap:isMobile ?'40px': '40px',
              }}
            >
              <Box
                sx={{
                  // background:isMoble?"rgb(245 238 215)": 'rgb(245 238 215)',
                  background:isMobile?"rgb(42 101 191 / 15%)": 'rgb(42 101 191 / 15%)',
                  borderRadius: '50%',
                  padding: isMobile ? '7px':'7px',
                  // color: '#F3DB3F'
                }}
              >
                <PeopleIcon sx={{ fontSize: isMobile?'30px':'30px', display: 'flex', color: 'rgb(42, 101, 191)' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontSize: isMobile?"26px": '32px', color: '000' }}>83</Typography>
                <Typography variant="h4" sx={{ fontSize: isMobile?"13px": '16px', textTransform: 'uppercase', paddingTop: isMobile ? '7px':'7px', fontWeight: '500', color: '#12192685' }}>Visitor in last 30 days</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Past week  */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: isMobile?'1rem':'2rem',
                background: '#f9f9fb',
                borderRadius: '12px',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                gap:isMobile ?'40px': '40px',
              }}
            >
              <Box
                sx={{
                  // background:isMoble?"rgb(42 101 191 / 15%)": 'rgb(42 101 191 / 15%)',
                  background:isMobile?"rgb(245 238 215)": 'rgb(245 238 215)',
                  borderRadius: '50%',
                  padding: isMobile ? '7px':'7px',
                  // color: 'rgb(42, 101, 191)'
                }}
              >
                <SentimentSatisfiedAltIcon sx={{ fontSize: isMobile?'30px':'30px', display: 'flex', color: '#F3DB3F' }}     />
              </Box>
              <Box>
                <Typography variant="h3" sx={{fontSize: isMobile?"26px": '32px', color: '#000' }}>98%</Typography>
                <Typography variant="h4" sx={{fontSize: isMobile?"13px": '16px', textTransform: 'uppercase', paddingTop: isMobile ? '7px':'7px', fontWeight: '500', color: '#12192685' }}>visitor Satisfactory Score</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default VisitorDetail;
