// ======= Page Owner Vikash =========
// ======= Add Employee Drawer =========

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
        Title={'Add Employee'} customStyles={{width:'100%'}} CustomBodyStyle={{ height:'calc(100vh - 115px)'}} Body={<EmployeeFormTab currEditItem={currEditItem} />}  
      />
    </>
  );
};

export default EmployeeDrawer;
 