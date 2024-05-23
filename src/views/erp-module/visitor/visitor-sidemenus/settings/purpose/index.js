import React from 'react';
import Systemdata from 'component/ParamSearchTabs';
import {
  VisitorPurpose,
  ToMeet,
  BlackListed,
  VisitorCategory
 
} from './Tabpages';
import { useSelector } from 'react-redux';





const SystemDataPages=()=>{
  const selectedTab = useSelector(state => state.visitorSettingsSlice.selectedTab);
  console.log(selectedTab);
  const tabPage = [
    {
      id: 245769457,
      name: "Visitor Purpose",
      component: VisitorPurpose,
    },
    {
      id: 245745644,
      name: "To Meet",
      component: ToMeet,
    }, {
      id: 65468742,
      name: "Black Listed Visitor",
      component: BlackListed,
    },
    {
      id:6546546,
      name: "Visitor Category",
      component: VisitorCategory,
    },
   


  ]
     return(
      <>

      <Systemdata tabPage={tabPage} selectedTab={selectedTab}/>
      </>
     )
}

export default SystemDataPages;