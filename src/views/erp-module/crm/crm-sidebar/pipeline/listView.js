import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const KanbanListView = ({ kanbanData }) => {
  // Prepare columns for the DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'website', headerName: 'Website', width: 200 },
  ];

  // Prepare rows for the DataGrid
  const rows = kanbanData.lanes.flatMap((lane) =>
    lane.cards.map((card) => ({
      id: card.id,
      title: card.title,
      phone: card.details.phone,
      email: card.details.email,
      website: card.details.website,
    }))
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default KanbanListView;
