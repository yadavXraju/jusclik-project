import React, { useState } from 'react';
import { Grid, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function RolePrivileges() {
  const [selectedPrivileges, setSelectedPrivileges] = useState({});

  const PrivilegesData = [
    { id: '1', details: { PrivilegesName: 'Allow To Send SMS' } },
    { id: '2', details: { PrivilegesName: 'Allow To Send Email' } },
    { id: '3', details: { PrivilegesName: 'Allow Export To Excel' } },
    { id: '4', details: { PrivilegesName: 'Allow Switch To Parent-Teacher Dashboard' } },
    { id: '5', details: { PrivilegesName: 'Exclusive Dynamic Reports Only' } },
    { id: '6', details: { PrivilegesName: 'Read Only User' } },
    { id: '7', details: { PrivilegesName: 'Restrict User on Schools IP Addresses' } },
    { id: '8', details: { PrivilegesName: 'Access to Security Guard Entry View For Visitor Entry' } },
    { id: '9', details: { PrivilegesName: 'Allow User to approve Material Request in Inventory' } },
    { id: '10', details: { PrivilegesName: 'Allow access to manage leads for Bussiness Manager' } },
    { id: '11', details: { PrivilegesName: 'Allow User to approve Purchase Order in Inventory' } },
    { id: '12', details: { PrivilegesName: 'Back Date Fee Entry Permission' } },
    { id: '13', details: { PrivilegesName: 'Access to Management Dashboard' } },
    { id: '14', details: { PrivilegesName: 'Task Management Level/Full Access' } },
  ];

  const handleChange = (event, privilegeId) => {
    setSelectedPrivileges({
      ...selectedPrivileges,
      [privilegeId]: event.target.value
    });
  };

  return (
    <Box>
      <Grid container spacing={2}>
          {PrivilegesData.map(privilege => (
            <Grid key={privilege.id} item xs={12} md={6}>
            <Box>
              <FormControl fullWidth>
              <InputLabel id={`privilege-select-label-${privilege.id}`}>{privilege.details.PrivilegesName}</InputLabel>
              <Select
                labelId={`privilege-select-label-${privilege.id}`}
                id={`privilege-select-${privilege.id}`}
                value={selectedPrivileges[privilege.id] || ''}
                label={privilege.details.PrivilegesName}
                onChange={(event) => handleChange(event, privilege.id)}
              >
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
            </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default RolePrivileges;
