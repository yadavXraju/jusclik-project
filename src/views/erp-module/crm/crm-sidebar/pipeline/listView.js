import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import { kanbanData } from './data';
import { Box, Paper } from '@mui/material';
import CommonDataGrid from 'views/common-section/commonDataGrid';
const KanbanListView = () => {
  // Prepare columns for the DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'website', headerName: 'Website', width: 200 },

  ];

  // Prepare rows for the DataGrid
  const rows = kanbanData.lanes.flatMap((lane) =>
    lane.cards.map((card) => ({
      id: card.id,
      title: card.title,
      status:card.details.status,
      phone: card.details.phone,
      email: card.details.email,
      website: card.details.website,
    }))
  );

  return (
    <Box component={Paper} style={{ height: 'calc(100vh - 350px)', width: '100%',margin:'25px' }}>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        component='Paper'
      /> */}
       <CommonDataGrid
            rows={rows}
            columns={columns} // Use state variable for columns
            // onRowClick={(params) => Click(params.row)}
            // initialState={{
            //   pagination: {
            //     paginationModel: { page: 0, pageSize: 50 }
            //   }
            // }}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            disableSelectionOnClick
            // pageSizeOptions={[10, 25, 50, 100]}
            checkboxSelection
          />
    </Box>
  );
};

export default KanbanListView;
