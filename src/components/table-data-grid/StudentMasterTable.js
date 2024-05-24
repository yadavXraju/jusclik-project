import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const StudentMasterTable = ({ columns, data }) => {
    const [selectedRows, setSelectedRows] = React.useState([]);

    const handleRowClick = (event, id) => {
        const selectedIndex = selectedRows.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = [...selectedRows, id];
        } else if (selectedIndex === 0) {
            newSelected = selectedRows.slice(1);
        } else if (selectedIndex === selectedRows.length - 1) {
            newSelected = selectedRows.slice(0, -1);
        } else if (selectedIndex > 0) {
            newSelected = [
                ...selectedRows.slice(0, selectedIndex),
                ...selectedRows.slice(selectedIndex + 1),
            ];
        }
        setSelectedRows(newSelected);
    };

    const isSelected = (id) => selectedRows.indexOf(id) !== -1;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Checkbox
                                indeterminate={
                                    selectedRows.length > 0 && selectedRows.length < data.length
                                }
                                checked={data.length > 0 && selectedRows.length === data.length}
                                onChange={(event) => {
                                    if (event.target.checked) {
                                        const newSelectedRows = data.map((row) => row.id);
                                        setSelectedRows(newSelectedRows);
                                    } else {
                                        setSelectedRows([]);
                                    }
                                }}
                            />
                        </TableCell>
                        {columns.map((column) => (
                            <TableCell key={column.id}>{column.tableHeading}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            hover
                            onClick={(event) => handleRowClick(event, row.id)}
                            selected={isSelected(row.id)}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={isSelected(row.id)}
                                    onChange={(event) => handleRowClick(event, row.id)}
                                />
                            </TableCell>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    <Typography>{row[column.id]}</Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StudentMasterTable;
