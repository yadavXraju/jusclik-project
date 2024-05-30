// ======= Page Owner Vikash =========
// ======= Entry point expenses and travel =========

import React from 'react';
import MainCard from 'components/ui/cards/MainCard';
import Expense from './Expense';
import { Box, Typography, Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ExpenseDrawerContent from './ExpenseDrawerContent';
import useDrawer from 'hooks/useDrawer';
import DrawerLayOut from 'layout/drawer-layout';

const Index = () => {
  const { anchor, toggleDrawer } = useDrawer();

  const DrawerBody = () => (
    <> 
      <ExpenseDrawerContent/> 
    </>
  );

  return (
    <>
      <MainCard>
        <Box pb={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant='h4'>Expenses to be Claimed</Typography>
            <Typography variant='h6' color={'#9d9999'}>The following are the expenses that you are yet to claim</Typography>
          </Box>
          <Box>
            <Button 
              onClick={toggleDrawer('right', true)} 
              sx={{ mr: '8px' }} 
              variant="outlined" 
              startIcon={<AddOutlinedIcon />}
            >
              Add an Expense
            </Button>
            <DrawerLayOut 
              anchor={anchor} 
              direction={'right'} 
              toggleDrawer={toggleDrawer}
              Title={'Expense Request'} 
              Body={<DrawerBody />}  
              customStyles={{width: { sm: '100vw', md: 700 },}}
            />
          </Box>
        </Box>
        <Expense/>
      </MainCard>
    </>
  );
};

export default Index;
