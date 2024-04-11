// import React from 'react';

// // const heading = [
// //    {
// //     id:1,

// //    }
// // ]

// const TopDrawer = () => {
//   return (
//     <>
//         <h1>table</h1>
//     </>
//   )
// }

// export default TopDrawer

import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import SelectList from 'views/common-section/ParamSelectList';
import TextField from '@mui/material/TextField';

const headings = [
    {
        id: 1,
        heading: 'Classes',
    },
    {
        id: 2,
        heading: 'Amount',
    },
    {
        id: 3,
        heading: 'Action',
    },
];

const rows = [
    {
        id: 1,
        name: '',
        amount: 2000,
        action: '',
    },
];

export default function TopDrawer() {
    const [selectedClass, setSelectedClass] = useState('');
    const [amount, setAmount] = useState('');


    const selectedClassOptions = [
        { value: 'IV', label: 'IV' },
        { value: 'V', label: 'V' },
        { value: 'VI', label: 'VI' },
        { value: 'VII', label: 'VII' },
      ];


    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    return (
        <TableContainer component={Paper} sx={{ marginTop: '3rem' }}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        {headings.map((item) => (
                            <TableCell key={item.id}>{item.heading}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <Select
                                    value={selectedClass}
                                    onChange={handleClassChange}
                                >
                                    <MenuItem value="IV">IV</MenuItem>
                                    <MenuItem value="V">V</MenuItem>
                                    <MenuItem value="VI">VI</MenuItem>
                                    {/* Add more options as needed */}
                                </Select>

                                <SelectList 
                                    label="Class"
                                    options={ PeriodicityOptions}
                                    value={periodicity}
                                    onChange={Periodicity}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    value={amount}
                                    onChange={handleAmountChange}
                                    type="number"
                                />
                            </TableCell>
                            <TableCell>{row.action}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

