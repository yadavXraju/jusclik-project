// PAGE OWNER : DAMANDEEP
// list-view of kanban data
import React from 'react';
import { kanbanData } from './data';
import { Box, Paper } from '@mui/material';
import CommonDataGrid from 'component/commonDataGrid';
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
     
       <CommonDataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            disableSelectionOnClick
            checkboxSelection
          />
    </Box>
  );
};

export default KanbanListView;
