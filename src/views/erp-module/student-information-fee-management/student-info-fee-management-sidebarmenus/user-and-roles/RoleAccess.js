import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Checkbox, Box } from '@mui/material';
//import Switch from '@mui/material/Switch';
// import {TextField} from '@mui/material';
// import TextArea from 'antd/es/input/TextArea';

function RoleAccess() {
    const [isChecked, setIsChecked] = useState({
        'full-access': false,
        'view': false,
        'create': false,
        'edit': false,
        'approve': false,
    });

    // const handleSwitchChange = () => {
    //     setIsChecked(prevState => {
    //         const newState = {};
    //         for (let key in prevState) {
    //             newState[key] = !prevState[key];
    //         }
    //         return newState;
    //     });
    // };

    const handleCheckboxChange = (id) => {
        setIsChecked(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <>
         {/* <Box pb={2}>
            <TextField id="outlined-basic" label="Role Name" variant="outlined" fullWidth />
            </Box>
            <Box pb={2}>
              <Box p={0.5}>Description</Box>
              <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
            </Box> */}
         <Card sx={{ width: { xs: '83vw', md: '100%' }, overflow: { xs: 'scroll', md: 'hidden' }, border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    Access
                </Box>
                {/* <Box>
                    <Switch checked={Object.values(isChecked).every(value => value)} onChange={handleSwitchChange} inputProps={{ 'aria-label': 'Switch demo' }} />
                </Box> */}
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
                    <TableRow>
                        <TableCell>Website</TableCell>
                        {Object.entries(isChecked).map(([id, value]) => (
                            <TableCell style={{ paddingLeft: '14px'}} key={id}>
                                <Checkbox id={id} size='small' checked={value} onChange={() => handleCheckboxChange(id)} />
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
        </>
    );
}

export default RoleAccess;
