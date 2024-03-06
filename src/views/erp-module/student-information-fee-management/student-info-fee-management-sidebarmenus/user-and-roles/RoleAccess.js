import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Checkbox, Box, Card, Typography } from '@mui/material';

function RoleAccess() {
    const [moduleAccess, setModuleAccess] = useState({});

    const modulesData = [
        { id: '1', details: { moduleName: 'Stufee' } },
        { id: '2', details: { moduleName: 'Payroll' } },
        { id: '3', details: { moduleName: 'Progress' } },
        { id: '4', details: { moduleName: 'Library' } },
        { id: '5', details: { moduleName: 'Inventory' } },
        { id: '6', details: { moduleName: 'Website' } },
        { id: '7', details: { moduleName: 'Visitor Mgmt' } },
        { id: '8', details: { moduleName: 'Medical' } },
    ];

    const handleFullAccessChange = (moduleId, checked) => {
        const updatedModuleAccess = { ...moduleAccess };
        updatedModuleAccess[moduleId] = {
            fullAccess: checked,
            view: checked,
            create: checked,
            edit: checked,
            approve: checked,
        };
        setModuleAccess(updatedModuleAccess);
    };

    const handleCheckboxChange = (moduleId, key, checked) => {
        const updatedModuleAccess = { ...moduleAccess };
        updatedModuleAccess[moduleId] = { ...updatedModuleAccess[moduleId], [key]: checked };
        setModuleAccess(updatedModuleAccess);
    };

    return (
        <Card sx={{ width: { xs: '83vw', md: '100%' }, overflow: { xs: 'scroll', md: 'hidden' }, border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
            <Box p={2} sx={{borderBottom:'1px solid #ccc'}}>
                <Typography variant='h4'>
                    Modules Access
                </Typography>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Full Access</TableCell>
                        <TableCell>View</TableCell>
                        <TableCell>Create</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Approve</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {modulesData.map(module => (
                        <TableRow key={module.id}>
                            <TableCell sx={{fontWeight:'bold'}}>{module.details.moduleName}</TableCell>
                            <TableCell style={{ paddingLeft: '14px' }}>
                                <Checkbox
                                    size='small'
                                    checked={moduleAccess[module.id]?.fullAccess || false}
                                    onChange={(e) => handleFullAccessChange(module.id, e.target.checked)}
                                />
                            </TableCell>
                            <TableCell>
                                <Checkbox
                                    size='small'
                                    checked={moduleAccess[module.id]?.view || false}
                                    onChange={(e) => handleCheckboxChange(module.id, 'view', e.target.checked)}
                                />
                            </TableCell>
                            <TableCell>
                                <Checkbox
                                    size='small'
                                    checked={moduleAccess[module.id]?.create || false}
                                    onChange={(e) => handleCheckboxChange(module.id, 'create', e.target.checked)}
                                />
                            </TableCell>
                            <TableCell>
                                <Checkbox
                                    size='small'
                                    checked={moduleAccess[module.id]?.edit || false}
                                    onChange={(e) => handleCheckboxChange(module.id, 'edit', e.target.checked)}
                                />
                            </TableCell>
                            <TableCell>
                                <Checkbox
                                    size='small'
                                    checked={moduleAccess[module.id]?.approve || false}
                                    onChange={(e) => handleCheckboxChange(module.id, 'approve', e.target.checked)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}

export default RoleAccess;
