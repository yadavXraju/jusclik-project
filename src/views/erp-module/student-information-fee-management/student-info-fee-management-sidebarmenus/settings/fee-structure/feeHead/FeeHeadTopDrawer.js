import * as React from 'react';
import { useState } from 'react';
import SelectList from 'views/common-section/ParamSelectList';
import { Box , IconButton ,Tooltip , TextField ,Paper , TableRow ,TableHead , TableContainer , TableCell ,TableBody ,Table} from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';


const headings = [
    {
        id: 1,
        heading: 'Class',
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
    },
];

export default function  FeeHeadTopDrawer() {
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
        <TableContainer component={Paper} sx={{ marginTop: '3rem' , border:'1px solid #ccc' , minHeight:'400px'}}>
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
                            <TableCell sx={{}}>             
                                <SelectList 
                                    label="Class"
                                    options={selectedClassOptions}
                                    value={selectedClass}
                                    onChange={handleClassChange}
                                    customStyle={{maxWidth:'200px', minWidth:'200px'}}
                                />
                            </TableCell>

                            <TableCell>
                                <TextField
                                   id="amount" 
                                    value={amount}
                                    onChange={handleAmountChange}
                                    label="Amount" 
                                    variant="outlined"
                                    sx={{maxWidth:'200px', minWidth:'200px'}}
                                />
                            </TableCell>

                      
                            <TableCell>
                                <Box>
                                <Tooltip title="Edit">
                                    <IconButton>                                     
                                            <EditTwoToneIcon/>                              
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteTwoToneIcon sx={{color:'rgb(241, 158, 158)'}}/>
                                    </IconButton>
                                </Tooltip>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

