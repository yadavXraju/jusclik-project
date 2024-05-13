import React from 'react';
import  ParamStepper from 'views/common-section/param-stepper';
import ConfigureStudentWise from './configure-student-wise/ConfigureStudentWise';
import ConfigureGlobally from './configure-globally/ConfigureGlobally';

const tabPage = [
    {
        id: 1,
        name: 'Configure Globally',
        value: '1',
        component:ConfigureGlobally,
      },
  

    {
      id: 2,
      name: 'Configure Student Wise',
      value: '2',
      component:  ConfigureStudentWise,
    },


  ];

const Config = () => {
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

export default Config