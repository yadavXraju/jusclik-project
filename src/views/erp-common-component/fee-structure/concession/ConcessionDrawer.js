import React from 'react';
import  ParamStepper from 'views/common-section/param-stepper';
import Tab1 from './Tab1';

const tabPage = [
    {
      id: 1,
      name: 'Tab1',
      value: '1',
      component: Tab1
    },
    {
        id: 2,
        name: 'Tab2',
        value: '2',
        component:'test'
      },
  

  ];

const ConcessionDrawer = () => {

  return (
    <>
         <ParamStepper 
          tabPage={tabPage}  //for tab label
        //   numberShow={false}  // removeing stpper 
        //   iconShow={false} // remove icon
          customtabWrapper={{marginTop:'0px'}} // outer box of tabs
          customStyleTabs={{borderBottom:'1px solid #ccc', marginTop:'0px' }} // MuiTabs-root styles
          customtabSytle={{margin:'0 5px 0 20px' , padding:'0px' , minWidth:'0'}} // tab btn styles
          customtabPanelStyle={{paddingRight:'0' , marginTop:'0px' , padding:'0px'}}
          />  
    </>
  )
}

export default ConcessionDrawer