import React, { useState } from 'react';
import { Grid, Button, Box, Drawer, Typography } from '@mui/material';
import BottomNavbar from 'components/BottomNavbar';

const Commondrawer = ({ tabLength, tabValue, setTabValue, Heading, anchorProp = 'right', Drawer_Data }) => {
  

  return (
    <Grid>
      <Drawer anchor={anchorProp} open={anchor} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">{Heading}</Typography>
            <Button onClick={() => toggleDrawer(false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* Render Drawer Content Form */}
            {Drawer_Data}
          </Box>
        </Box>
        <Box>
          {/* <BottomNavbar
            tabPageLength={tabLength}
            value={tabValue}
            setValue={setTabValue}
            customStyle={{ width: { sm: '100vw', md: '42%' }, bottom: '0', borderRadius: '1px' }}
          /> */}
        </Box>
      </Drawer>
    </Grid>
  );
};

export default Commondrawer;