import React from 'react';
import TransportLedger from '../TransportCommon/TransportLedger';
import { Card, Typography } from '@mui/material';
import TransportTable from './TransportTable';

const TransportAllocation = () => {
  return (
    <>
      <Card sx={{ padding: '16px' }}>
        <Typography sx={{ p: 2, mb:3, borderBottom: '1px solid #ccc' }} variant="h4" component="div">
          Transport Details
        </Typography>
        <TransportLedger />
        <TransportTable />
      </Card>
    </>
  );
};

export default TransportAllocation;
