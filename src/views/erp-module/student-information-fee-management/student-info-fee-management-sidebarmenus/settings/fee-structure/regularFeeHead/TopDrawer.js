import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
                            <TableCell sx={{maxWidth:'100px'}}>             
                                <SelectList 
                                    label="Class"
                                    options={selectedClassOptions}
                                    value={selectedClass}
                                    onChange={handleClassChange}
                                    customStyle={{maxWidth:'100px'}}
                                />
                            </TableCell>
                            <TableCell sx={{maxWidth:'100px'}}>
                                <TextField
                                   id="amount" 
                                    value={amount}
                                    onChange={handleAmountChange}
                                    label="Amount" 
                                    variant="outlined"
                                    // fullWidth
                                />
                            </TableCell>
                            <TableCell sx={{maxWidth:'100px'}}>{row.action}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

