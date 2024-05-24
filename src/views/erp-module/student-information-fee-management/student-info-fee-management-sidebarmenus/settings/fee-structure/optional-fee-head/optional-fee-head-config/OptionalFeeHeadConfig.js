import React from 'react';
import  ParamStepper from 'components/param-stepper';
import OptionalFeeHeadGlobally from './fee-head-globally';
import OptionalFeeHeadStudentWise from './fee-head-student-wise';
const tabPage = [
    {
        id: 1,
        name: 'Configure Globally',
        value: '1',
        component: OptionalFeeHeadGlobally ,
      },
  

    {
      id: 2,
      name: 'Configure Student Wise',
      value: '2',
      component: OptionalFeeHeadStudentWise,
    },


  ];

const OptionalFeeHeadConfigTab = () => {
  return (
    <>
          <ParamStepper 
              tabPage={tabPage}  //for tab label
              customtabWrapper={{marginTop:'0px'}} // outer box of tabs
              customStyleTabs={{borderBottom:'1px solid #ccc', marginTop:'20px' , }} // MuiTabs-root styles
              customtabSytle={{margin:'0 5px 0 20px' , padding:'0px' , minWidth:'0'}} // tab btn styles
              customtabPanelStyle={{paddingRight:'0' , marginTop:'0px' , padding:'0px',height:'auto'}}
              showBottomNav={false}
           />  
     </>
  )
}

export default OptionalFeeHeadConfigTab