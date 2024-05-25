import React from 'react';
import MainCard from 'components/ui/cards/MainCard';
import Expense from './Expense';
import { Box, Typography } from '@mui/material';
import withParamDrawer from 'components/temp-withParamDrawer';
import ExpenseDrawerContent from './ExpenseDrawerContent';


const NewParamDrawer=withParamDrawer(ExpenseDrawerContent);
const index = () => {
  return (
    <>
      <MainCard>
      <Box pb={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
           <Typography variant='h4'>Expenses to be Claimed</Typography>
           <Typography variant='h6' color={'#9d9999'}>The following are the expenses that you are yet to claim</Typography>
        </Box>
        <Box>
        <NewParamDrawer buttonLabel='Add an Expense' drawerTitle='Expense Request' />
        </Box>
      </Box>
      <Expense/>
      </MainCard>
    </>
  );
};

export default index;
