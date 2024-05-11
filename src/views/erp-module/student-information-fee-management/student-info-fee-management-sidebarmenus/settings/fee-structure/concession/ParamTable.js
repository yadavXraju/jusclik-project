// import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox'; // Import Checkbox from @mui/material
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { useDispatch ,  } from 'react-redux';
import { handleFeeStructureConfig } from 'store/student-info-and-fee/setting/fee-structure-config';

const style = {
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
    maxHeight: '80vh',
    '&::-webkit-scrollbar': { display: 'none' },
  },
};

const ReusableTable = ({ children, columns, data, tableStyle, action = true, dragIcon = false, tablePaper }) => {
const dispatch = useDispatch();
const handleCheckboxClick = (id) => {
  dispatch(handleFeeStructureConfig(id))

 };

  return (
    <TableContainer component={Paper} sx={{ ...style.tableContainer, ...tablePaper }}>
      <Table stickyHeader sx={{ ...tableStyle }}>
        <TableHead sx={{ width: '100%', backgroundColor: '#1219260f', background: 'none', fontWeight: '600' }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>
                {/* Render checkbox if showCheckbox is true */}
                {column.showCheckbox ? (
                  <>
                    <Checkbox 
                      color="primary" 
                      onClick={() => handleCheckboxClick(column.id)} 
                      // checked={firstConcessionTypeValue} 
                    />
                    {column.tabHeading}
                  </>
                ) : (
                  column.tabHeading 
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row?.id}>
              {dragIcon && (
                <TableCell sx={{ width: '0', padding: '0', textAlign: 'right' }}>
                  <Typography>
                    <DragIndicatorOutlinedIcon sx={{ color: '#b3b9c1' }} />
                  </Typography>
                </TableCell>
              )}

              {Object.keys(row).map((key, index) => {
                if (key === 'id') {
                  return null;
                }
                return (
                  <TableCell key={index}>
                    <Typography>{row[key]}</Typography>
                  </TableCell>
                );
              })}
              {action && (
                <TableCell>
                  <Typography sx={{ display: 'flex', gap: '15px' }}>
                    <ModeEditOutlineOutlinedIcon />
                    <DeleteOutlineOutlinedIcon />
                  </Typography>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {children}
    </TableContainer>
  );
};

export default ReusableTable;