// // ======= Page Owner Vikash =========
// // ======= Return Tabs for Routes and Slab =========

import React, { useState } from 'react';
import ParamStepper from 'components/tabs/Stepper';
import { Card, Box } from '@mui/material';
import TransportRouteTable from './TransportRouteTable';
import SlabTable from './SlabTable';

const RoutesAndSlabs = () => {
  const [value, setValue] = useState(0);

  // drawer btn
  const tabPage = [
    {
      id: 1,
      name: 'Slabs',
      value: '1',
      component: SlabTable
    },
    {
      id: 2,
      name: 'Route',
      value: '2',
      component: TransportRouteTable
    }
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card sx={{ padding: '16px' }}>
        <Box sx={{ width: '100%' }}>
          {/* stepper tabs  */}
          <ParamStepper
            variant={'scrollable'}
            tabPage={tabPage}
            numberShow={false}
            showBottomNav={false}
            iconShow={false}
            value={value}
            handleChange={handleChange}
            customtabWrapper={{ marginTop: '0px' }}
          />
        </Box>
      </Card>
    </>
  );
};

export default RoutesAndSlabs;
