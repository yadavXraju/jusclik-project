import React from 'react'
import Systemdata from 'views/common-section/ParamSearchTabs';
import { leadClassification , leadSource,leadOwnerConfig} from './TabPages';

const LeadSystemData = () => {


  const tabPage = [
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
     {
      id: 654687,
      name: "Lead Owner Configurations",
      component: leadOwnerConfig,
    },
 
   


  ]



  return (
    <>
     <Systemdata tabPage={tabPage} />
    </>
  )
}

export default LeadSystemData