import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Checkbox, Box, Card, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

function ModuleFormsEvents() {
  const [moduleAccess, setModuleAccess] = useState({});

  const [Branch, setBranch] = React.useState('');
  const [Module, setModule] = React.useState('');

  const handleChange = (event) => {
    setBranch(event.target.value);
    setModule(event.target.value);
  };

  const ModuleFormsEventsData = [
    { id: '1', details: { formEvent: 'Enquiry' } },
    { id: '2', details: { formEvent: 'Registration' } },
    { id: '3', details: { formEvent: 'Registration Data' } },
  ];

  const handleFullAccessChange = (moduleId, checked) => {
    const updatedModuleAccess = { ...moduleAccess };
    updatedModuleAccess[moduleId] = {
      fullAccess: checked,
      inputRemarks: checked,
      showStudentsDetails: checked,
      add: checked,
      delete: checked,
      edit: checked,
      importData: checked,
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
      <Grid container spacing={2} pb={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Branch</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={Branch} label="Branch" onChange={handleChange}>
                <MenuItem value={10}>GURUGRAM [SHAURYA INTERNATIONAL sCHOOL]</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Module</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={Module} label="Module" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Card
        sx={{
          width: { xs: '83vw', md: '100%' },
          overflow: { xs: 'scroll', md: 'hidden' },
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px'
        }}
      >
        <Box p={2} sx={{ borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Student Master</Typography>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Full Access</TableCell>
              <TableCell>Input Remarks</TableCell>
              <TableCell>Show Students Details</TableCell>
              <TableCell>Add</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Import Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ModuleFormsEventsData.map((item) => (
              <TableRow key={item.id}>
                <TableCell sx={{ fontWeight: 'bold' }}>{item.details.formEvent}</TableCell>
                <TableCell style={{ paddingLeft: '14px' }}>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[item.id]?.fullAccess || false}
                    onChange={(e) => handleFullAccessChange(item.id, e.target.checked)}
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[item.id]?.inputRemarks || false}
                    onChange={(e) => handleCheckboxChange(item.id, 'inputRemarks', e.target.checked)}
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[item.id]?.showStudentsDetails || false}
                    onChange={(e) => handleCheckboxChange(item.id, 'showStudentsDetails', e.target.checked)}
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[item.id]?.add || false}
                    onChange={(e) => handleCheckboxChange(item.id, 'add', e.target.checked)}
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[item.id]?.delete || false}
                    onChange={(e) => handleCheckboxChange(item.id, 'delete', e.target.checked)}
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[item.id]?.edit || false}
                    onChange={(e) => handleCheckboxChange(item.id, 'edit', e.target.checked)}
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    size="small"
                    checked={moduleAccess[item.id]?.importData || false}
                    onChange={(e) => handleCheckboxChange(item.id, 'importData', e.target.checked)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}

export default ModuleFormsEvents;
