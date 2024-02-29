import React from 'react';
import { Box, Typography, MenuItem, Select, IconButton } from '@mui/material';
import {  Info, Person, PersonOutline } from '@mui/icons-material';

function AttandanceStatus() {
  return (
    <Box>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '5px' }} p={2} backgroundColor={'#fff'}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Select
            value={'Last Week'}
            size='small'
            sx={{ minWidth: 100 }}
            renderValue={(value) => (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>{value}</Typography>
              </Box>
            )}
          >
            <MenuItem value={'Last Week'}>Last Week</MenuItem>
            <MenuItem value={'Last Month'}>Last Month</MenuItem>
            <MenuItem value={'Custom Range'}>Custom Range</MenuItem>
          </Select>
          <IconButton>
            <Info className="cursor-pointer" />
          </IconButton>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: 110 }}>
              <Box >
                <Person />
              </Box>
              <Typography variant="h6">Me</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ width: 110 }}>
                <Typography variant="h6" sx={{color:'#777'}}>Avg Hrs / Day</Typography>
                <Typography variant="h4">0h</Typography>
              </Box>
              <Box sx={{ width: 110 }}>
                <Typography variant="h6" sx={{color:'#777'}}>On time Arrival</Typography>
                <Typography variant="h4">0%</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: 110 }}>
              <Box className="dot dot-xl bg-accent-blue mr-10">
                <PersonOutline />
              </Box>
              <Typography variant="h6">My Team</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h4">8h 24m</Typography>
              <Typography variant="h4">67%</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AttandanceStatus;
