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
// import EditIcon from '@mui/icons-material/Edit';
// import { Box } from '@mui/system';
// import { Button } from '@mui/material';

// const initialRow = { id: null, name: '', email: '', age: '', phone: '' };

// const data = [
//   { id: 1, name: 'tarun', email: 'abc@gmail.com', age: '25', phone: '34789753975' },
//   { id: 2, name: 'suraj', email: 'abc@gmail.com', age: '25', phone: '34789753975' },
// //   { id: 3, name: 'pawant', email: 'abc@gmail.com', age: '25', phone: '34789753975' },
// //   { id: 4, name: 'mukesh', email: 'abc@gmail.com', age: '25', phone: '34789753975' },
// ];

// export default function EditableTable() {
//   const [rows, setRows] = useState(data);
//   const [editingId, setEditingId] = useState(null);
//   const [newRow, setNewRow] = useState({ ...initialRow });

//   const handleEdit = (id, field, value) => {
//     const updatedRows = rows.map((row) => (row.id === id ? { ...row, [field]: value } : row));
//     setRows(updatedRows);
//   };

//   const handleSave = () => {
//     setEditingId(null);
//     handleAddRow(); // Call handleAddRow inside handleSave
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter((row) => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleAddRow = () => {
//     if (newRow.name && newRow.email && newRow.age && newRow.phone) {
//       setRows([...rows, { ...newRow, id: Date.now() }]);
//       setNewRow({ ...initialRow });
//     }
//   };

//   const handleAddRowAndSave = () => {
//     handleAddRow();
//     handleSave();
//   };

//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="editable table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Age</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell component="th" scope="row">
//                   {editingId === row.id ? (
//                     <InputBase value={row.name} onChange={(e) => handleEdit(row.id, 'name', e.target.value)} />
//                   ) : (
//                     row.name
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingId === row.id ? (
//                     <InputBase value={row.email} onChange={(e) => handleEdit(row.id, 'email', e.target.value)} />
//                   ) : (
//                     row.email
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingId === row.id ? (
//                     <InputBase type="number" value={row.age} onChange={(e) => handleEdit(row.id, 'age', parseInt(e.target.value))} />
//                   ) : (
//                     row.age
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingId === row.id ? (
//                     <InputBase value={row.phone} onChange={(e) => handleEdit(row.id, 'phone', e.target.value)} />
//                   ) : (
//                     row.phone
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   {editingId !== row.id && (
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
//             <TableRow>
//               <TableCell>
//                 <InputBase placeholder="Name" value={newRow.name} onChange={(e) => setNewRow({ ...newRow, name: e.target.value })} />
//               </TableCell>
//               <TableCell>
//                 <InputBase placeholder="Email" value={newRow.email} onChange={(e) => setNewRow({ ...newRow, email: e.target.value })} />
//               </TableCell>
//               <TableCell>
//                 <InputBase placeholder="Age" type="number" value={newRow.age} onChange={(e) => setNewRow({ ...newRow, age: parseInt(e.target.value) })} />
//               </TableCell>
//               <TableCell>
//                 <InputBase placeholder="Phone" value={newRow.phone} onChange={(e) => setNewRow({ ...newRow, phone: e.target.value })} />
//               </TableCell>
//               <TableCell align="right">
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Box pt={3}>
//         <Button startIcon={<AddIcon />} onClick={handleAddRowAndSave}>Add Contact</Button>
//       </Box>
//     </>
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
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import { Box } from '@mui/system';

// const initialRow = { id: null, name: '', age: '' };

// export default function EditableTable() {
//   const [rows, setRows] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [newRow, setNewRow] = useState({ ...initialRow });

//   const handleEdit = (id, field, value) => {
//     const updatedRows = rows.map((row) => (row.id === id ? { ...row, [field]: value } : row));
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
//     if (newRow.name && newRow.age) {
//       setRows([...rows, { ...newRow, id: Date.now() }]);
//       setNewRow({ ...initialRow });
//     }
//   };

//   return (
//     <>
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
//                     <InputBase value={row.name} onChange={(e) => handleEdit(row.id, 'name', e.target.value)} />
//                   ) : (
//                     row.name
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   {editingId === row.id ? (
//                     <InputBase type="number" value={row.age} onChange={(e) => handleEdit(row.id, 'age', parseInt(e.target.value))} />
//                   ) : (
//                     row.age
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   {editingId === row.id && (
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
//             <TableRow>
//               <TableCell>
//                 <InputBase placeholder="Name" value={newRow.name} onChange={(e) => setNewRow({ ...newRow, name: e.target.value })} />
//               </TableCell>
//               <TableCell align="right">
//                 <InputBase
//                   placeholder="Age"
//                   type="number"
//                   value={newRow.age}
//                   onChange={(e) => setNewRow({ ...newRow, age: parseInt(e.target.value) })}
//                 />
//               </TableCell>
//               <TableCell align="right">
//                 <IconButton onClick={handleAddRow}>
//                   <AddIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Box>
//         <IconButton onClick={handleAddRow}>
//           <AddIcon />
//         </IconButton>
//       </Box>
//     </>
//   );
// }












import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const initialRow = { id: null, name: '', email: '', age: '', phone: '' };

const data = [
  { id: 1, name: 'tarun', email: 'abc@gmail.com', age: '25', phone: '34789753975' },
  { id: 2, name: 'suraj', email: 'abc@gmail.com', age: '25', phone: '34789753975' },
  { id: 3, name: 'pawant', email: 'abc@gmail.com', age: '25', phone: '34789753975' },
  { id: 4, name: 'mukesh', email: 'abc@gmail.com', age: '25', phone: '34789753975' },
];

export default function EditableTable() {
  const [rows, setRows] = useState(data);
  const [editingId, setEditingId] = useState(null);
  const [newRow, setNewRow] = useState({ ...initialRow });

  const handleEdit = (id, field, value) => {
    const updatedRows = rows.map((row) => (row.id === id ? { ...row, [field]: value } : row));
    setRows(updatedRows);
  };

  const handleSave = () => {
    setEditingId(null);
    handleAddRow(); // Call handleAddRow inside handleSave
  };

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    if (newRow.name && newRow.email && newRow.age && newRow.phone) {
      setRows([...rows, { ...newRow, id: Date.now() }]);
      setNewRow({ ...initialRow });
    }
  };

  const handleAddRowAndSave = () => {
    handleAddRow();
    handleSave();
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="editable table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Name</TableCell>
              <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Email</TableCell>
              <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Age</TableCell>
              <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Phone</TableCell>
              <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }} component="th" scope="row">
                  {editingId === row.id ? (
                    <InputBase value={row.name} onChange={(e) => handleEdit(row.id, 'name', e.target.value)} />
                  ) : (
                    row.name
                  )}
                </TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                  {editingId === row.id ? (
                    <InputBase value={row.email} onChange={(e) => handleEdit(row.id, 'email', e.target.value)} />
                  ) : (
                    row.email
                  )}
                </TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                  {editingId === row.id ? (
                    <InputBase type="number" value={row.age} onChange={(e) => handleEdit(row.id, 'age', parseInt(e.target.value))} />
                  ) : (
                    row.age
                  )}
                </TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                  {editingId === row.id ? (
                    <InputBase value={row.phone} onChange={(e) => handleEdit(row.id, 'phone', e.target.value)} />
                  ) : (
                    row.phone
                  )}
                </TableCell>
                <TableCell align="right" sx={{ padding: 1, border: '1px solid #ccc' }}>
                  {editingId !== row.id && (
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
              <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                <InputBase placeholder="Name" value={newRow.name} onChange={(e) => setNewRow({ ...newRow, name: e.target.value })} />
              </TableCell>
              <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                <InputBase placeholder="Email" value={newRow.email} onChange={(e) => setNewRow({ ...newRow, email: e.target.value })} />
              </TableCell>
              <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                <InputBase placeholder="Age" type="number" value={newRow.age} onChange={(e) => setNewRow({ ...newRow, age: parseInt(e.target.value) })} />
              </TableCell>
              <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                <InputBase placeholder="Phone" value={newRow.phone} onChange={(e) => setNewRow({ ...newRow, phone: e.target.value })} />
              </TableCell>
              <TableCell align="right" sx={{ padding: 1, border: '1px solid #ccc' }}>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box pt={3}>
        <Button startIcon={<AddIcon />} onClick={handleAddRowAndSave}>Add Contact</Button>
      </Box>
    </>
  );
}

