import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Checkbox, Box, Card, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import RoleForm from './Role-Authorisation/RoleForm';

function RoleAccess() {
  const [moduleAccess, setModuleAccess] = useState({});

  const modulesData = [
    { id: '1', details: { moduleName: 'Stufee', chacked: false } },
    { id: '2', details: { moduleName: 'Payroll', chacked: true } },
    { id: '3', details: { moduleName: 'Progress', chacked:false } },
    { id: '4', details: { moduleName: 'Library', chacked: true } },
    { id: '5', details: { moduleName: 'Inventory', chacked:false } },
    { id: '6', details: { moduleName: 'Website', chacked: true } },
    { id: '7', details: { moduleName: 'Visitor Mgmt', chacked:false } },
    { id: '8', details: { moduleName: 'Medical', chacked: true } }
  ];

  const handleFullAccessChange = (moduleId, checked) => {
    const updatedModuleAccess = { ...moduleAccess };
    updatedModuleAccess[moduleId] = {
      fullAccess: checked,
      view: checked,
      create: checked,
      edit: checked,
      delete: checked,
      approve: checked
    };
    setModuleAccess(updatedModuleAccess);
  };

  const handleCheckboxChange = (moduleId, key, checked) => {
    const updatedModuleAccess = { ...moduleAccess };
    updatedModuleAccess[moduleId] = { ...updatedModuleAccess[moduleId], [key]: checked };
    setModuleAccess(updatedModuleAccess);
  };

  return (
    <>
       <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
         <Box pt={4.3}>
         <RoleForm/>
         </Box>
        </Grid>
        <Grid item xs={12} md={8}>
        <Box>
      <Box p={2}>
        <Typography variant="h4">Modules Access</Typography>
      </Box>
      <Card
        sx={{
          overflow: { xs: 'scroll', md: 'hidden' },
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px'
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{background:'#f0f8ff'}}>
              <TableCell></TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Full Access</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>View</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Create</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Edit</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Delete</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Approve</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modulesData.map((module) => (
              <TableRow key={module.id}>
                <TableCell sx={{ fontWeight: 'bold', padding: '10px' }}>{module.details.moduleName}</TableCell>
                <TableCell style={{ paddingLeft: '14px', padding: '10px' }}>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[module.id]?.fullAccess || false}
                    onChange={(e) => handleFullAccessChange(module.id, e.target.checked)}
                  />
                </TableCell>
                <TableCell style={{ padding: '10px' }}>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[module.id]?.view || false}
                    onChange={(e) => handleCheckboxChange(module.id, 'view', e.target.checked)}
                  />
                </TableCell>
                <TableCell style={{ padding: '10px' }}>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[module.id]?.create || false}
                    onChange={(e) => handleCheckboxChange(module.id, 'create', e.target.checked)}
                  />
                </TableCell>
                <TableCell style={{ padding: '10px' }}>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[module.id]?.edit || false}
                    onChange={(e) => handleCheckboxChange(module.id, 'edit', e.target.checked)}
                  />
                </TableCell>
                <TableCell style={{ padding: '10px' }}>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[module.id]?.delete || false}
                    onChange={(e) => handleCheckboxChange(module.id, 'delete', e.target.checked)}
                  />
                </TableCell>
                <TableCell style={{ padding: '10px' }}>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[module.id]?.approve || false}
                    onChange={(e) => handleCheckboxChange(module.id, 'approve', e.target.checked)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      </Box>
        </Grid>
      </Grid>
      
    </>
  );
}

export default RoleAccess;
