import React from 'react';
import FatherDetail from './FatherDetail';
import MotherDetail from './MotherDetail';
import Drawer from '@mui/material/Drawer';
// import StepperForm from './data-forms/StepperForm';
import Student from './Student';
import useDrawer from 'hooks/useDrawer';
import Mainform from '../../admission/admission-form/Forms.js/Mainform';
const StudentDetails = () => {
    const {anchor,toggleDrawer}=useDrawer();
  return (
    <div>
      <Student onEditClick={toggleDrawer('top',true)} />
      <FatherDetail />
      <MotherDetail />


      <Drawer anchor={"top"} open={anchor.top} onClose={toggleDrawer('top',false)}>
     {/* <StepperForm/> */}
     <Mainform />
      </Drawer>
    </div>
  );  
};

export default StudentDetails;
