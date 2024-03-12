import React from 'react';
import ParamChackboxSelectAll from '../../../../common-section/ParamChackboxSelectAll';
import { Typography } from '@mui/material';


const PrivilegesData = [
  { id: '1', details: { PrivilegesName: 'Allow To Send SMS', checked: true } },
  { id: '2', details: { PrivilegesName: 'Allow To Send Email', checked: false } },
  { id: '3', details: { PrivilegesName: 'Allow Export To Excel', checked: true } },
  { id: '4', details: { PrivilegesName: 'Allow Switch To Parent-Teacher Dashboard', checked: false } },
  { id: '5', details: { PrivilegesName: 'Exclusive Dynamic Reports Only', checked: true } },
  { id: '7', details: { PrivilegesName: 'Restrict User on Schools IP Addresses', checked: false } },
  { id: '12', details: { PrivilegesName: 'Back Date Fee Entry Permission', checked: true } },
];

function RolePrivileges() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={PrivilegesData} onSelect={handleSelect} heading={<Typography variant="h4">Modules Access</Typography>} />
    </div>
  );
}

export default RolePrivileges;









// import React, { useState, useEffect } from 'react';
// import { Grid, Box, FormControl, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
// import { Container } from '@mui/system';

// function RolePrivileges() {
//   const [selectedPrivileges, setSelectedPrivileges] = useState({});

//   const PrivilegesData = [
//     { id: '1', details: { PrivilegesName: 'Allow To Send SMS', checked: true } },
//     { id: '2', details: { PrivilegesName: 'Allow To Send Email', checked: false } },
//     { id: '3', details: { PrivilegesName: 'Allow Export To Excel', checked: true } },
//     { id: '4', details: { PrivilegesName: 'Allow Switch To Parent-Teacher Dashboard', checked: false } },
//     { id: '5', details: { PrivilegesName: 'Exclusive Dynamic Reports Only', checked: true } },
//     { id: '6', details: { PrivilegesName: 'Read Only User', checked: true } },
//     { id: '7', details: { PrivilegesName: 'Restrict User on Schools IP Addresses', checked: false } },
//     { id: '8', details: { PrivilegesName: 'Access to Security Guard Entry View For Visitor Entry', checked: true } },
//     { id: '9', details: { PrivilegesName: 'Allow User to approve Material Request in Inventory', checked: true } },
//     { id: '10', details: { PrivilegesName: 'Allow access to manage leads for Bussiness Manager', checked: false } },
//     { id: '11', details: { PrivilegesName: 'Allow User to approve Purchase Order in Inventory', checked: true } },
//     { id: '12', details: { PrivilegesName: 'Back Date Fee Entry Permission', checked: true } },
//     { id: '13', details: { PrivilegesName: 'Access to Management Dashboard', checked: false } },
//     { id: '14', details: { PrivilegesName: 'Task Management Level/Full Access', checked: false } },
//   ];

//   // Set initial checked status based on data
//   useEffect(() => {
//     const initialCheckedStatus = {};
//     PrivilegesData.forEach(privilege => {
//       initialCheckedStatus[privilege.id] = privilege.details.checked;
//     });
//     setSelectedPrivileges(initialCheckedStatus);
//   }, []);

//   const handleChange = (event, privilegeId) => {
//     setSelectedPrivileges({
//       ...selectedPrivileges,
//       [privilegeId]: event.target.checked
//     });
//   };

//   const handleSelectAll = () => {
//     const areAllChecked = Object.values(selectedPrivileges).every(checked => checked);
//     const newSelectedPrivileges = {};
//     Object.keys(selectedPrivileges).forEach(privilegeId => {
//       newSelectedPrivileges[privilegeId] = !areAllChecked;
//     });
//     setSelectedPrivileges(newSelectedPrivileges);
//   };

//   return (
//     <Box>
//       <Container>
//             <Box >
//               <FormControl component="fieldset">
//                 <FormGroup>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         size='small'
//                         checked={Object.values(selectedPrivileges).every(checked => checked)}
//                         onChange={handleSelectAll}
//                       />
//                     }
//                     label={<Typography variant="h4">Modules Access</Typography>}
//                   />
//                 </FormGroup>
//               </FormControl>
//             </Box>
//         <Grid container mt={1} p={1} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
//           {PrivilegesData.map(privilege => (
//             <Grid key={privilege.id} item xs={12} md={12}>
//               <Box pl={2}>
//                 <FormControl component="fieldset">
//                   <FormGroup>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           size='small'
//                           checked={selectedPrivileges[privilege.id] !== undefined ? selectedPrivileges[privilege.id] : privilege.details.checked}
//                           onChange={(event) => handleChange(event, privilege.id)}
//                         />
//                       }
//                       label={privilege.details.PrivilegesName}
//                     />
//                   </FormGroup>
//                 </FormControl>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default RolePrivileges;