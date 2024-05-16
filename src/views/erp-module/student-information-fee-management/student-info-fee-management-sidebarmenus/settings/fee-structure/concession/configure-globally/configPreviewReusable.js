import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Checkbox } from '@mui/material';

const ReusableTable = ({ columns, data }) => {
  const [checkboxState, setCheckboxState] = useState({});

  // Function to handle checkbox change in the table body
  const handleCheckboxChange = (id) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Function to handle checkbox change in the table header
  const handleSelectAll = (columnId) => {
    const newState = { ...checkboxState };
    newState[columnId] = !newState[columnId];
    setCheckboxState(newState);
  };

  return (
    <TableContainer className='scrollbar' component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>
                {column.checkbox ? (
                    <>
                        <Checkbox
                            checked={checkboxState[column.id] || false}
                            onChange={() => handleSelectAll(column.id)}
                        />
                        <Typography>{column.tabHeading}</Typography>
                    </>
                ) : (
                  <Typography>{column.tabHeading}</Typography>
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column, colIndex) => {
                return (
                  <TableCell key={colIndex}>
                    {column.checkbox ? (
                        <>
                        <Checkbox
                            checked={checkboxState[row.id] || false} // Use row id for unique identification
                            onChange={() => handleCheckboxChange(row.id)} // Pass row id to the handler
                        />
                        <Typography>{row[Object.keys(row)[colIndex + 1]]}</Typography>
                      </>
                    ) : (
                      <Typography>{row[Object.keys(row)[colIndex + 1]]}</Typography>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
