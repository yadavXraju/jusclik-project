// @Page Owner-Tarun Pandey
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const DataGridDemo = React.forwardRef((props, ref) => {
  const { rows, columns } = props;
  return (
    <Box p={2} sx={{ width: '100%',overflowX:"auto" ,
    '& .MuiDataGrid-virtualScroller': {
      scrollbarWidth: 'thin',
     }
    }} className="scrollbar">
      <DataGrid
        sx={{ width: "100%" }}
        ref={ref}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            pagination: {
              paginationModel: { page: 0, pageSize: 50 }
            }
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}

      />
    </Box>
  );
})

export default DataGridDemo;