// owned by sangeeta

import React from 'react'
import Systemdata from 'components/ParamSearchTabs';
import { leadClassification , leadSource,leadOwnerConfig} from './TabPages';

import { useSelector } from 'react-redux';

const LeadSystemData = () => {
  const selectedTab = useSelector(state => state.crmSettingSlice.selectedTab);
  console.log(selectedTab);

  const tabPage = [
    {
      id: 654687,
      name: "Lead Owner Configurations",
      component: leadOwnerConfig,
    },
    {
      id: 2457694,
      name: "Lead Classification",
      component: leadClassification ,
    },
    {
      id: 24544,
      name: "Lead Source",
      component: leadSource,
    },

 
   


  ]



  return (
    <>
     <Systemdata tabPage={tabPage} selectedTab={selectedTab} />
    </>
  )
}

export default LeadSystemData