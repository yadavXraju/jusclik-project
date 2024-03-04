import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box,Paper } from '@mui/material';

const Registration = () => {


  const columns = [
    { field: 'id', headerName: 'Amd. No.' },
    { field: 'Student Name', headerName: 'Student Name' },
    { field: 'Class', headerName: 'Class' },
    {
      field: 'D.O.B',
      headerName: 'D.O.B',
      type: 'date',
    },
    {
      field: 'Hosteler',
      headerName: 'Hosteler',
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  return (
    <div>
      <Paper variant="elevation" elevation="">
        <Box>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
        </Box>
      </Paper>
    </div>
  )
}

export default Registration