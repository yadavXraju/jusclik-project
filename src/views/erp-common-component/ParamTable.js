// ReusableTable.js
import React, { useState } from 'react'; // Import useState
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
   tableContainer: {
    width: '100%',
    overflowX: 'auto',
    maxHeight: '80vh',
    '&::-webkit-scrollbar': { display: 'none' },
   },
};

const ReusableTable = ({ children, columns, data, tableStyle, action = true, dragIcon = false, tablePaper, onDeleteRow, handleEditClick, handleSaveClick }) => {
  const [editedData, setEditedData] = useState({}); // Define editedData state
  const [editId, setEditId] = useState(null); // Define editId state

  const handleInputChange = (e, key) => {
    const value = e.target.value;
    setEditedData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  return (
    <TableContainer className='scrollbar'  component={Paper} sx={{...style.tableContainer, ...tablePaper}}>
      <Table stickyHeader  sx={{...tableStyle}}>
        <TableHead sx={{ width: '100%', backgroundColor: '#1219260f', background: 'none', fontWeight: '600' }}>
          <TableRow>
            {columns?.map((column) => (
              <TableCell key={column.id}>{column.tabHeading}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row?.id}>
              {dragIcon && (
                <TableCell sx={{ width:'0' , padding:'0' , textAlign:'right' }}>
                  <Typography>
                    <DragIndicatorOutlinedIcon sx={{color:'#b3b9c1'}}/>
                  </Typography>
                </TableCell>
              )}

              {Object.keys(row).map((key, index) => {
                if (key === 'id') {
                  return null;
                }
                // Render editable text field if the row is being edited
                return (
                  <TableCell key={index}>
                    {editId === row.id ? (
                      // Render a TextField for editing when the row is being edited
                      <TextField
                        value={editedData[key] || row[key]}
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    ) : (
                      // Render the current value of the field when not in editing mode
                      <Typography>{row[key]}</Typography>
                    )}
                  </TableCell>
                );
              })}
              {action && (
                <TableCell>
                  {editId === row.id ? ( // Render save button if row is being edited
                    <Typography sx={{display:'flex', alignItems:'center'}}>
                      <Button onClick={handleSaveClick}>
                        Save
                     </Button>
                      <DeleteTwoToneIcon
                        sx={{ color: '#f19e9e', cursor: 'pointer', marginLeft: '15px' }}
                        onClick={() => onDeleteRow(row.id)} // Call delete function
                      />
                    </Typography>
                  ) : (
                    <Typography sx={{ display: 'flex', gap: '15px' }}>
                      <EditTwoToneIcon sx={{cursor:'pointer'}} onClick={() => {setEditId(row.id); handleEditClick(row.id, row)}} />
                      <DeleteTwoToneIcon
                        sx={{ color: '#f19e9e', cursor: 'pointer' }}
                        onClick={() => onDeleteRow(row.id)} // Call delete function
                      />
                    </Typography>
                  )}
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
