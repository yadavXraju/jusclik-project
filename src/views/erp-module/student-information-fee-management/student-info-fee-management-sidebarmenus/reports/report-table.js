import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const DataGridDemo = React.forwardRef((props, ref) => {
  const { rows, columns } = props;
  return (
    <Box sx={{ width: '100%', marginTop: "50px",overflowX:"auto"}} className="scrollbar">
      <DataGrid
        sx={{ width: "100%" }}
        ref={ref}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableSelectionOnClick
        disableRowSelectionOnClick
      />
    </Box>
  );
})

export default DataGridDemo;