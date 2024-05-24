import React from 'react'
import withParamDrawer from 'components/temp-withParamDrawer';
import ExpenseDrawerContent from './ExpenseDrawerContent';

const NewParamDrawer=withParamDrawer(ExpenseDrawerContent);
function ExpensesDrawer() {
  return (
    <div>
      <NewParamDrawer buttonLabel='Add an Expense' drawerTitle='Expense Request' />
    </div>
  )
}

export default ExpensesDrawer









// import React from 'react';
// import useDrawer from 'hooks/useDrawer';
// import Drawer from '@mui/material/Drawer';
// import {Button, Typography, Box} from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import ExpenseDrawerContent from './ExpenseDrawerContent';

// const ExpensesDrawer = () => {
//   const { anchor, toggleDrawer } = useDrawer();

//   return (
//     <>
//       <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>
//         Add an Expense
//       </Button>
//       <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
//       <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
//           <Typography variant="h4">Expense Request</Typography>
//           <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
//             Close
//           </Button>
//         </Box>
//         <ExpenseDrawerContent/>
//       </Box>
//       </Drawer>
//     </>
//   );
// };

// export default ExpensesDrawer;
