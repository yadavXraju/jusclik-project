import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const CommonDataGrid = ({ rows, columns, pageSizeOptions = [5, 10], ...otherProps }) => {

  return (
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection
        {...otherProps} 
      />
  );
};

export default CommonDataGrid;
