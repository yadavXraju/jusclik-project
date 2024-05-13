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


// With Delete Prop and Notification 

// import React, { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import WarningDialog from './WarningDialog'; 

// const CommonDataGrid = ({ className = '', rows, columns, sx, onRowClick, pageSizeOptions = [5, 10], enableDelete = false, initialRows, ...otherProps }) => {

//   const [Rows, setRows] = useState(initialRows);
//   const [deleteId, setDeleteId] = useState(null); // State to store the id of the row to be deleted
//   const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage the dialog open/close

//   const handleDeleteClick = (id) => {
//     // Set the id of the row to be deleted and open the dialog
//     setDeleteId(id);
//     setIsDialogOpen(true);
//   };

//   const handleConfirmDelete = () => {
//     // Filter out the row with the specified id
//     setRows(Rows.filter(row => row.id !== deleteId));
//     // Close the dialog
//     setIsDialogOpen(false);
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
//     <div>
//       <DataGrid
//         rows={Rows}
//         columns={updatedColumns}
//         onRowClick={onRowClick}
//         pageSizeOptions={pageSizeOptions}
//         checkboxSelection
//         {...otherProps}
//         sx={sx}
//         className={className}
//       />
//       {/* Integrate WarningDialog */}
//       <WarningDialog
//         open={isDialogOpen}
//         onClose={() => setIsDialogOpen(false)}
//         contentText="Are you sure you want to delete this row?"
//         onConfirm={handleConfirmDelete}
//       />
//     </div>
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



      