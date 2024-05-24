// @Page Owner-Tarun Pandey
import React, {useState,useEffect } from 'react'
import { Box } from '@mui/material'
import ReportSection from './ReportSection'
import ParamSearchTab from 'components/ParamSearchTabs';
import { useSelector } from 'react-redux';
import ParamChackboxSelectAll from 'components/ParamChackboxSelectAll'

const ShowComponent = () => {
  const AllRecordData = [
    { id: '1', details: { class: 'Delete Documents', checked: false } },
    { id: '2', details: { class: 'Manage Folder', checked: true } },
    { id: '3', details: { class: 'View Documents', checked: true } },
    { id: '4', details: { class: 'Upload Documents', checked: false } },
  ];

  const SetupData = [
    { id: '1', details: { class: 'Delete Documents', checked: false } },
    { id: '2', details: { class: 'Manage Folder', checked: true } },
    { id: '3', details: { class: 'View Documents', checked: true } },
    { id: '4', details: { class: 'Upload Documents', checked: false } },
  ];

  const DocumentsData = [
    { id: '1', details: { class: 'Delete Documents', checked: false } },
    { id: '2', details: { class: 'Manage Folder', checked: true } },
    { id: '3', details: { class: 'View Documents', checked: true } },
    { id: '4', details: { class: 'Upload Documents', checked: false } },
  ];

  const ApprovalData = [
    { id: '1', details: { class: 'Delete Documents', checked: false } },
    { id: '2', details: { class: 'Manage Folder', checked: true } },
    { id: '3', details: { class: 'View Documents', checked: true } },
    { id: '4', details: { class: 'Upload Documents', checked: false } },
  ];
  return (
    <Box>
    {/* ========= Add All Records Authorisation ========= */}
    <Box pb={2}>
      <ParamChackboxSelectAll data={AllRecordData} onSelect={() => {}} heading='Add Records'/>
    </Box>
    {/* ========= Add Setup Authorisation ========= */}
    <Box pb={2}>
      <ParamChackboxSelectAll data={SetupData} onSelect={() => {}} heading='Settings' />
    </Box>
    {/* ========= Add Report Authorisation ========= */}
    <Box pb={2}>
      <ReportSection />
    </Box>
    {/* ========= Add Documents Authorisation ========= */}
    <Box pb={2}>
      <ParamChackboxSelectAll data={DocumentsData} onSelect={() => {}} heading='Documents' />
    </Box>
    {/* ========= Add Approval Authorisation ========= */}
    <Box pb={2}>
      <ParamChackboxSelectAll data={ApprovalData} onSelect={() => {}} heading='Approval' />
    </Box>
  </Box>
  )
}


const RoleAuthorisation = () => {
 
  const moduleAccess = useSelector((state) => state.userRoleAcess);
  console.log(moduleAccess)
  const[moduleData,setModuleData]=useState([]);
  
 const  moduleDataTrans=()=>{
  const filteredData = moduleAccess.moduleAccess.reduce((acc, current) => {
    if (current.isSelected) {
      acc.push({...current,component:ShowComponent});
    }
    return acc;
  }, []);
    setModuleData(filteredData);
  }

  useEffect(() => {
     moduleDataTrans();
  },[])

  

  return (
    <Box sx={{ paddingLeft: "100px" }}>
      <ParamSearchTab tabPage={moduleData} orientation="vertical" numberShow={false} showBottomNav={false} customtabWrapper={{ display: "flex", flexDirection: "row" }} />

    </Box>
  )
}

export default RoleAuthorisation