// // ======= Page Owner Vikash =========
// // ======= Add Employee Drawer =========
// import React from 'react';
// import useDrawer from 'hooks/useDrawer';
// import Drawer from '@mui/material/Drawer';
// import { Button, Typography, Box  } from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import EmployeeFormTab from './EmployeeFormTab';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';



// const EmployeeDrawer = ({DrawerBtn = false, editIcon = false, handleClick, currEditItem}) => {
//   // ========= call custom hook for toggle drawer ==========
//   const { anchor, toggleDrawer } = useDrawer();

//   const handleEditClick = (event) => {
//     toggleDrawer('top', true)(event);
//     if (typeof handleClick === 'function') {
//       handleClick();
//     }
//   };

//   return (
//     <>
//       {DrawerBtn && (
//          <Button onClick={toggleDrawer('top', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
//          Add Employee
//          </Button>
//       )}

//       {editIcon && (
//           <EditTwoToneIcon onClick={() => handleEditClick(event)}/>
//       )}

//       <Drawer anchor={'top'} open={anchor.top} onClose={toggleDrawer('top', false)} >
//         <Box sx={{ width: '100%', height:'100vh', padding: 2 }} role="presentation">
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
//             <Typography variant="h4">Add Employee</Typography>
//             <Button onClick={toggleDrawer('top', false)} sx={{ alignSelf: 'flex-end' }}>
//               Close
//             </Button>
//           </Box>
//           <Box pt={3}>
//             {/* ========== Render Drawer Content ============ */}
//             <EmployeeFormTab currEditItem={currEditItem} />
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default EmployeeDrawer;
 




import React from 'react';
import useDrawer from 'hooks/useDrawer';
import { Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EmployeeFormTab from './EmployeeFormTab';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DrawerLayOut from 'layout/drawer-layout';



const EmployeeDrawer = ({DrawerBtn = false, editIcon = false, handleClick, currEditItem}) => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();

  const handleEditClick = (event) => {
    toggleDrawer('top', true)(event);
    if (typeof handleClick === 'function') {
      handleClick();
    }
  };

  return (
    <>
      {DrawerBtn && (
         <Button onClick={toggleDrawer('top', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
         Add Employee
         </Button>
      )}

      {editIcon && (
          <EditTwoToneIcon onClick={() => handleEditClick(event)}/>
      )}

      <DrawerLayOut anchor={anchor} direction={'top'} toggleDrawer={toggleDrawer}
        Title={'Add Employee'} customStyles={{width:'100%'}} Body={<EmployeeFormTab currEditItem={currEditItem} />}  
      />
    </>
  );
};

export default EmployeeDrawer;
 