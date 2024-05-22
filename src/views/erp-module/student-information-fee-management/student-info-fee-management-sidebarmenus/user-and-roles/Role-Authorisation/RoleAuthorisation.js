// @Page Owner-Tarun Pandey
import React, {useState,useEffect } from 'react'
import { Box } from '@mui/material'
import ReportSection from './ReportSection'
import DocumentSection from './DocumentSection'
import AllRecords from './AddRecord'
import SetupSection from './SetupSection'
import ApprovalSection from './ApprovalSection'
import ParamSearchTab from 'views/common-section/ParamSearchTabs';
import { useSelector } from 'react-redux';


const ShowComponent = () => {
  return (
    <Box>
      {/* ========= Add All Records Authorisation ========= */}
      <Box pb={2}>
        <AllRecords />
      </Box>
      {/* ========= Add Setup Authorisation ========= */}
      <Box pb={2}>
        <SetupSection />
      </Box>
      {/* ========= Add Report Authorisation ========= */}
      <Box pb={2}>
        <ReportSection />
      </Box>
      {/* ========= Add Documents Authorisation ========= */}
      <Box pb={2}>
        <DocumentSection />
      </Box>
      {/* ========= Add Approval Authorisation ========= */}
      <Box pb={2}>
        <ApprovalSection />
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









// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import ModuleFormsEvents from './ModuleFormsEvents';
// import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
// import AcademicSessions from './AcademicSessions';
// import ClassResultCoOrdinator from './ClassResultCoOrdinator';
// import ManageLibraryGroup from './ManageLibraryGroup';
// import ManageHostelUser from './ManageHostelUser';
// import ManageInventoryGroup from './ManageInventoryGroup';


// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
//       {value === index && (
//         <Box sx={{marginTop:'20px'}} padding={{xs:'0', md:'3'}}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`
//   };
// }

// export default function RoleAuthorisation() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="basic tabs example">
//           <Tab sx={{width:'200px'}}
//           label={
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <DescriptionTwoToneIcon  />
//               Manage Module Forms & Events
//             </Box>
//           } {...a11yProps(0)} />
//           <Tab label="Manage Module Wise Academic Sessions" {...a11yProps(1)} />
//           <Tab label="Manage Classes of Result Co-Ordinator" {...a11yProps(2)} />
//           <Tab label="Manage Library Group User" {...a11yProps(3)} />
//           <Tab label="Manage Inventory Group User" {...a11yProps(4)} />
//           <Tab label="Manage Hostel User Group" {...a11yProps(5)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//       <ModuleFormsEvents/>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         <AcademicSessions/>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         <ClassResultCoOrdinator/>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={3}>
//        <ManageLibraryGroup/>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={4}>
//         <ManageInventoryGroup/>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={5}>
//         <ManageHostelUser/>
//       </CustomTabPanel>
//     </Box>
//   );
// }
