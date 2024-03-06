import React, { useState } from 'react';
import FatherDetail from './FatherDetail';
import MotherDetail from './MotherDetail';
import Drawer from '@mui/material/Drawer';
import StepperForm from './data-forms/StepperForm';
import Student from './Student';
import useDrawer from 'hooks/useDrawer';
const StudentDetails = () => {
    const {anchor,toggleDrawer}=useDrawer();
  return (
    <div>
      <Student onEditClick={toggleDrawer('right',true)} />
      <FatherDetail />
      <MotherDetail />

      {/* Component containing the click function */}
      {/* <button onClick={toggleDrawer('right',true)}>Open Drawer</button> */}

      {/* Component containing the drawer */}
      <Drawer anchor={"right"} open={anchor.right} onClose={toggleDrawer('right',false)}>
     <StepperForm/>
      </Drawer>
    </div>
  );  
};

export default StudentDetails;
