import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const CommonDataGrid = ({ className='' , rows, columns, sx , onRowClick, pageSizeOptions = [5, 10], ...otherProps  }) => {

  return (
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={onRowClick}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection
        {...otherProps} 
        sx={sx}
        className={className}
      />
  );
};

export default CommonDataGrid;


// With Delete Prop 

// import React, { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// const CommonDataGrid = ({ className='', rows, columns, sx, onRowClick, pageSizeOptions=[5, 10], enableDelete=false, initialRows, ...otherProps }) => {
  
//   const [Rows, SetRows] = useState(initialRows);

//   const handleDeleteClick = (id) => {
//     SetRows(Rows.filter(Rows => Rows.id !== id));
//   };

//   const renderDeleteIcon = (params) => {
//     if (enableDelete) {
//       return (
//         <IconButton onClick={() => handleDeleteClick(params.id)} aria-label="delete">
//           <DeleteIcon />
//         </IconButton>
//       );
//     }
//     return null;
//   };
//   const updatedColumns = enableDelete ? [...columns, {
//     field: 'delete',
//     headerName: 'Delete',
//     width: 100,
//     sortable: false,
//     filterable: false,
//     disableColumnMenu: true,
//     renderCell: (params) => renderDeleteIcon(params),
//   }] : columns;

//   return (
//     <DataGrid
//       rows={Rows}
//       columns={updatedColumns}
//       onRowClick={onRowClick}
//       pageSizeOptions={pageSizeOptions}
//       checkboxSelection
//       {...otherProps}
//       sx={sx}
//       className={className}
//     />
//   );
// };

// export default CommonDataGrid;


//      how to use 

{/* <CommonDataGrid
        rows={rows}
        columns={columns}
        enableDelete={true} 
        initialRows={rows} // Enable delete icon
      /> */}
