import React from 'react';
import TransportLedger from '../TransportCommon/TransportLedger';
import { Card, Typography, Box } from '@mui/material';
import TransportTable from './TransportTable';
import TransportDrawer from './TransportAllocationDrawer';

const TransportAllocation = () => {

  return (
    <>
      <Card sx={{ padding: '16px' }}>
        <Box p={1} mb={2} sx={{ borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between' }}>
          <Box sx={{display:'flex', alignItems:'end'}}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
              Bus Details
            </Typography>
          </Box>
          <Box>
           <TransportDrawer/>
          </Box>
        </Box>
        <TransportLedger />
        <TransportTable />
      </Card>
    </>
  );
};

export default TransportAllocation;
