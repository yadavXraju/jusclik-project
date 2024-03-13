// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import {
//   GridRowModes,
//   DataGrid,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridRowEditStopReasons,
// } from '@mui/x-data-grid';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomId,
//   randomArrayItem,
// } from '@mui/x-data-grid-generator';

// const roles = ['Market', 'Finance', 'Development'];
// const randomRole = () => {
//   return randomArrayItem(roles);
// };

// const initialRows = [
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 25,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 36,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 19,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 28,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 23,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
// ];

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// export default function EditableTable() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState({});

//   const handleRowEditStop = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const handleEditClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };

//   const columns = [
//     { field: 'name', headerName: 'Name', width: 180, editable: true },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 80,
//       align: 'left',
//       headerAlign: 'left',
//       editable: true,
//     },
//     {
//       field: 'joinDate',
//       headerName: 'Join date',
//       type: 'date',
//       width: 180,
//       editable: true,
//     },
//     {
//       field: 'role',
//       headerName: 'Department',
//       width: 220,
//       editable: true,
//       type: 'singleSelect',
//       valueOptions: ['Market', 'Finance', 'Development'],
//     },
//     {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       width: 100,
//       cellClassName: 'actions',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               sx={{
//                 color: 'primary.main',
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         height: 500,
//         width: '100%',
//         '& .actions': {
//           color: 'text.secondary',
//         },
//         '& .textPrimary': {
//           color: 'text.primary',
//         },
//       }}
//     >
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowModesModelChange={handleRowModesModelChange}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         slots={{
//           toolbar: EditToolbar,
//         }}
//         slotProps={{
//           toolbar: { setRows, setRowModesModel },
//         }}
//       />
//     </Box>
//   );
// }








// import React, { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';

// const initialRows = [
//   { id: 1, name: 'John Doe', age: 30 },
//   { id: 2, name: 'Jane Doe', age: 25 },
//   { id: 3, name: 'Alice Johnson', age: 35 },
// ];

// function EditableTable() {
//   const [rows, setRows] = useState(initialRows);

//   const handleRowEdit = (newRow) => {
//     const updatedRows = rows.map((row) => (row.id === newRow.id ? newRow : row));
//     setRows(updatedRows);
//   };

//   const columns = [
//     { field: 'name', headerName: 'Name', editable: true, width: 150 },
//     { field: 'age', headerName: 'Age', editable: true, width: 100 },
//   ];

//   return (
//     <>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         paginationMode="disable" // Disable pagination
//         onRowEditStop={(newRow) => handleRowEdit(newRow.data)}
//       />
//       <Button variant="contained" color="primary" onClick={() => console.log(rows)}>
//         Save Changes
//       </Button>
//     </>
//   );
// }

// export default EditableTable;






import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

const initialRow = { id: null, name: '', age: '' };

export default function EditableTable() {
  const [rows, setRows] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newRow, setNewRow] = useState({ ...initialRow });

  const handleEdit = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const handleSave = () => {
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    if (newRow.name && newRow.age) {
      setRows([...rows, { ...newRow, id: Date.now() }]);
      setNewRow({ ...initialRow });
    }
  };

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="editable table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {editingId === row.id ? (
                  <InputBase
                    value={row.name}
                    onChange={(e) => handleEdit(row.id, 'name', e.target.value)}
                  />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell align="right">
                {editingId === row.id ? (
                  <InputBase
                    type="number"
                    value={row.age}
                    onChange={(e) => handleEdit(row.id, 'age', parseInt(e.target.value))}
                  />
                ) : (
                  row.age
                )}
              </TableCell>
              <TableCell align="right">
                {editingId === row.id ? (
                  <IconButton onClick={handleSave}>
                    <AddIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setEditingId(row.id)}>
                    <EditIcon />
                  </IconButton>
                )}
                <IconButton onClick={() => handleDelete(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <InputBase
                placeholder="Name"
                value={newRow.name}
                onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
              />
            </TableCell>
            <TableCell align="right">
              <InputBase
                placeholder="Age"
                type="number"
                value={newRow.age}
                onChange={(e) => setNewRow({ ...newRow, age: parseInt(e.target.value) })}
              />
            </TableCell>
            <TableCell align="right">
              <IconButton onClick={handleAddRow}>
                <AddIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

     {/* <Box>
       <IconButton onClick={handleSave}>
                       <AddIcon />
                     </IconButton>
     </Box> */}
    </>
  );
}










// import React, { useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import Button from '@mui/material/Button';
// import EditIcon from '@mui/icons-material/Edit';

// const initialRow = { id: null, name: '', age: '' };

// export default function EditableTable() {
//   const [rows, setRows] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   const handleEdit = (id, field, value) => {
//     const updatedRows = rows.map((row) =>
//       row.id === id ? { ...row, [field]: value } : row
//     );
//     setRows(updatedRows);
//   };

//   const handleSave = () => {
//     setEditingId(null);
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter((row) => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleAddRow = () => {
//     setRows([...rows, { ...initialRow, id: Date.now() }]);
//   };

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="editable table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell align="right">Age</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell component="th" scope="row">
//                   {editingId === row.id ? (
//                     <InputBase
//                       value={row.name}
//                       onChange={(e) => handleEdit(row.id, 'name', e.target.value)}
//                     />
//                   ) : (
//                     row.name
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   {editingId === row.id ? (
//                     <InputBase
//                       type="number"
//                       value={row.age}
//                       onChange={(e) => handleEdit(row.id, 'age', parseInt(e.target.value))}
//                     />
//                   ) : (
//                     row.age
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   {editingId === row.id ? (
//                     <IconButton onClick={handleSave}>
//                       <AddIcon />
//                     </IconButton>
//                   ) : (
//                     <IconButton onClick={() => setEditingId(row.id)}>
//                       <EditIcon />
//                     </IconButton>
//                   )}
//                   <IconButton onClick={() => handleDelete(row.id)}>
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Button variant="outlined" onClick={handleAddRow}>
//         Add Row
//       </Button>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import Button from '@mui/material/Button';
// import OutlinedInput from '@mui/material/OutlinedInput';

// const initialRow = { id: null, name: '', age: '' };

// export default function EditableTable() {
//   const [rows, setRows] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   const handleEdit = (id, field, value) => {
//     const updatedRows = rows.map((row) =>
//       row.id === id ? { ...row, [field]: value } : row
//     );
//     setRows(updatedRows);
//   };

//   const handleSave = () => {
//     setEditingId(null);
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter((row) => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleAddRow = () => {
//     setRows([...rows, { ...initialRow, id: Date.now() }]);
//   };

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="editable table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell align="right">Age</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell component="th" scope="row">
//                   {editingId === row.id ? (
//                     <OutlinedInput
//                       value={row.name}
//                       onChange={(e) => handleEdit(row.id, 'name', e.target.value)}
//                       fullWidth
//                     />
//                   ) : (
//                     row.name
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   {editingId === row.id ? (
//                     <OutlinedInput
//                       type="number"
//                       value={row.age}
//                       onChange={(e) => handleEdit(row.id, 'age', parseInt(e.target.value))}
//                       fullWidth
//                     />
//                   ) : (
//                     row.age
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   {editingId === row.id ? (
//                     <IconButton onClick={handleSave}>
//                       <AddIcon />
//                     </IconButton>
//                   ) : (
//                     <IconButton onClick={() => setEditingId(row.id)}>
//                       {/* <EditIcon /> */}
//                     </IconButton>
//                   )}
//                   <IconButton onClick={() => handleDelete(row.id)}>
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Button variant="outlined" onClick={handleAddRow}>
//         Add Row
//       </Button>
//     </div>
//   );
// }
