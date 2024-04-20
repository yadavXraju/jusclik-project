import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const CommonDataGrid = ({ rows, columns, sx , onRowClick, pageSizeOptions = [5, 10], ...otherProps  }) => {

  return (
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={onRowClick}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection
        {...otherProps} 
        sx={sx}
      />
  );
};

export default CommonDataGrid;
