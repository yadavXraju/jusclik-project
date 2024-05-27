// ======= Page Owner Vikash =========
// ======= Return Routes Form Drawer =========

import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TransportRoutes from './TransportRoutes';
import Stoppage from './Stoppage';
import BottomNavbar from 'components/BottomNavbar';
import ParamStepper from 'components/tabs/Stepper';

const RoutesFormDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const [value, setValue] = useState(0);

  const tabPage = [
    {
      id: 1,
      name: 'Transport Routes',
      value: '1',
      component: TransportRoutes
    },
    {
      id: 2,
      name: 'Stoppage',
      value: '2',
      component: Stoppage
    }
  ];
  const tabLength = tabPage.length;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    // const Transport = () => {
  //   return <>Transport</>;
  // };

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Add Route
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { sm: '100vw', md: 820 }, height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Route & Stoppage</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            <ParamStepper
              variant={'scrollable'}
              tabPage={tabPage}
              showBottomNav={false}
              value={value}
              handleChange={handleChange}
              customtabPanelStyle={{ padding: '0px', marginTop: '4px' }}
              customtabWrapper={{ marginTop: '0px' }}
            />
          </Box>
        </Box>

        <BottomNavbar
          tabPageLength={tabLength}
          value={value}
          setValue={setValue}
          customStyle={{ width: { sm: '100vw', md: '42%' }, bottom: '0', borderRadius: '1px' }}
        />
      </Drawer>
    </>
  );
};

export default RoutesFormDrawer;
