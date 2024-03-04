import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import Expense from './Expense';
import ExpenseDrawer from './ExpensesDrawer';
import { Box, Typography } from '@mui/material';
import Setup from './Setup';

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
        <ExpenseDrawer/>
        </Box>
      </Box>
      <Expense/>
      <Setup/>
      </MainCard>

    </>
  );
};

export default index;
