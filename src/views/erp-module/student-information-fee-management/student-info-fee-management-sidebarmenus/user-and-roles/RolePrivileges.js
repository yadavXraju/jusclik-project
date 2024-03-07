// import React, { useState } from 'react';
// import { Grid, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// function RolePrivileges() {
//   const [selectedPrivileges, setSelectedPrivileges] = useState({});

//   const PrivilegesData = [
//     { id: '1', details: { PrivilegesName: 'Allow To Send SMS' } },
//     { id: '2', details: { PrivilegesName: 'Allow To Send Email' } },
//     { id: '3', details: { PrivilegesName: 'Allow Export To Excel' } },
//     { id: '4', details: { PrivilegesName: 'Allow Switch To Parent-Teacher Dashboard' } },
//     { id: '5', details: { PrivilegesName: 'Exclusive Dynamic Reports Only' } },
//     { id: '6', details: { PrivilegesName: 'Read Only User' } },
//     { id: '7', details: { PrivilegesName: 'Restrict User on Schools IP Addresses' } },
//     { id: '8', details: { PrivilegesName: 'Access to Security Guard Entry View For Visitor Entry' } },
//     { id: '9', details: { PrivilegesName: 'Allow User to approve Material Request in Inventory' } },
//     { id: '10', details: { PrivilegesName: 'Allow access to manage leads for Bussiness Manager' } },
//     { id: '11', details: { PrivilegesName: 'Allow User to approve Purchase Order in Inventory' } },
//     { id: '12', details: { PrivilegesName: 'Back Date Fee Entry Permission' } },
//     { id: '13', details: { PrivilegesName: 'Access to Management Dashboard' } },
//     { id: '14', details: { PrivilegesName: 'Task Management Level/Full Access' } },
//   ];

//   const handleChange = (event, privilegeId) => {
//     setSelectedPrivileges({
//       ...selectedPrivileges,
//       [privilegeId]: event.target.value
//     });
//   };

//   return (
//     <Box>
//       <Grid container spacing={2}>
//           {PrivilegesData.map(privilege => (
//             <Grid key={privilege.id} item xs={12} md={6}>
//             <Box>
//               <FormControl fullWidth>
//               <InputLabel id={`privilege-select-label-${privilege.id}`}>{privilege.details.PrivilegesName}</InputLabel>
//               <Select
//                 labelId={`privilege-select-label-${privilege.id}`}
//                 id={`privilege-select-${privilege.id}`}
//                 value={selectedPrivileges[privilege.id] || ''}
//                 label={privilege.details.PrivilegesName}
//                 onChange={(event) => handleChange(event, privilege.id)}
//               >
//                 <MenuItem value={10}>Yes</MenuItem>
//                 <MenuItem value={20}>No</MenuItem>
//               </Select>
//             </FormControl>
//             </Box>
//             </Grid>
//           ))}
//       </Grid>
//     </Box>
//   );
// }

// export default RolePrivileges;





// import React, { useState } from 'react';
// import { Grid, Box, FormControl, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
// import { Container } from '@mui/system';

// function RolePrivileges() {
//   const [selectedPrivileges, setSelectedPrivileges] = useState({});

//   const PrivilegesData = [
//     { id: '1', details: { PrivilegesName: 'Allow To Send SMS', chacked:'true' } },
//     { id: '2', details: { PrivilegesName: 'Allow To Send Email', chacked:'false' } },
//     { id: '3', details: { PrivilegesName: 'Allow Export To Excel', chacked:'true' } },
//     { id: '4', details: { PrivilegesName: 'Allow Switch To Parent-Teacher Dashboard', chacked:'false' } },
//     { id: '5', details: { PrivilegesName: 'Exclusive Dynamic Reports Only', chacked:'true' } },
//     { id: '6', details: { PrivilegesName: 'Read Only User', chacked:'true' } },
//     { id: '7', details: { PrivilegesName: 'Restrict User on Schools IP Addresses', chacked:'false' } },
//     { id: '8', details: { PrivilegesName: 'Access to Security Guard Entry View For Visitor Entry', chacked:'true' } },
//     { id: '9', details: { PrivilegesName: 'Allow User to approve Material Request in Inventory', chacked:'true' } },
//     { id: '10', details: { PrivilegesName: 'Allow access to manage leads for Bussiness Manager', chacked:'false' } },
//     { id: '11', details: { PrivilegesName: 'Allow User to approve Purchase Order in Inventory', chacked:'true' } },
//     { id: '12', details: { PrivilegesName: 'Back Date Fee Entry Permission', chacked:'true' } },
//     { id: '13', details: { PrivilegesName: 'Access to Management Dashboard', chacked:'false' } },
//     { id: '14', details: { PrivilegesName: 'Task Management Level/Full Access', chacked:'false' } },
//   ];

//   const handleChange = (event, privilegeId) => {
//     setSelectedPrivileges({
//       ...selectedPrivileges,
//       [privilegeId]: event.target.checked
//     });
//   };

//   return (
//     <Box>
//       <Container>
//       <Box p={1}>
//         <Typography variant="h4">Modules Access</Typography>
//       </Box>
//       <Grid container spacing={2} mt={1} sx={{border:'1px solid #ccc', borderRadius:'5px'}}>
//         {PrivilegesData.map(privilege => (
//           <Grid key={privilege.id} item xs={12} md={6}>
//             <Box pl={2}>
//               <FormControl component="fieldset">
//                 <FormGroup>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                       size='small'
//                         checked={selectedPrivileges[privilege.id] || false}
//                         onChange={(event) => handleChange(event, privilege.id)}
//                       />
//                     }
//                     label={privilege.details.PrivilegesName}
//                   />
//                 </FormGroup>
//               </FormControl>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default RolePrivileges;





import React, { useState, useEffect } from 'react';
import { Grid, Box, FormControl, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { Container } from '@mui/system';

function RolePrivileges() {
  const [selectedPrivileges, setSelectedPrivileges] = useState({});

  const PrivilegesData = [
    { id: '1', details: { PrivilegesName: 'Allow To Send SMS', checked: true } },
    { id: '2', details: { PrivilegesName: 'Allow To Send Email', checked: false } },
    { id: '3', details: { PrivilegesName: 'Allow Export To Excel', checked: true } },
    // Add more privileges data as needed
  ];

  // Set initial checked status based on data
  useEffect(() => {
    const initialCheckedStatus = {};
    PrivilegesData.forEach(privilege => {
      initialCheckedStatus[privilege.id] = privilege.details.checked;
    });
    setSelectedPrivileges(initialCheckedStatus);
  }, []);

  const handleChange = (event, privilegeId) => {
    setSelectedPrivileges({
      ...selectedPrivileges,
      [privilegeId]: event.target.checked
    });
  };

  const handleSelectAll = () => {
    const areAllChecked = Object.values(selectedPrivileges).every(checked => checked);
    const newSelectedPrivileges = {};
    Object.keys(selectedPrivileges).forEach(privilegeId => {
      newSelectedPrivileges[privilegeId] = !areAllChecked;
    });
    setSelectedPrivileges(newSelectedPrivileges);
  };

  return (
    <Box>
      <Container>
        <Box p={1}>
          <Typography variant="h4">Modules Access</Typography>
        </Box>
            <Box pl={2}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        size='small'
                        checked={Object.values(selectedPrivileges).every(checked => checked)}
                        onChange={handleSelectAll}
                      />
                    }
                    label="Modules Access"
                  />
                </FormGroup>
              </FormControl>
            </Box>
        <Grid container spacing={2} mt={1} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
          {PrivilegesData.map(privilege => (
            <Grid key={privilege.id} item xs={12} md={6}>
              <Box pl={2}>
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size='small'
                          checked={selectedPrivileges[privilege.id] !== undefined ? selectedPrivileges[privilege.id] : privilege.details.checked}
                          onChange={(event) => handleChange(event, privilege.id)}
                        />
                      }
                      label={privilege.details.PrivilegesName}
                    />
                  </FormGroup>
                </FormControl>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default RolePrivileges;
