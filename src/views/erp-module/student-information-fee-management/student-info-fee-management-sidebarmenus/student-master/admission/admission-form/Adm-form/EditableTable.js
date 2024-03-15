import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//import InputBase from '@mui/material/InputBase';



const data = [
  { id: 1, Adm_No: 1234, name: 'Rohit', class: 'VI', Section: 'A' },
  { id: 2, Adm_No: 5678, name: 'Pawan', class: 'V', Section: 'B' },
  { id: 3, Adm_No: 9012, name: 'Suraj', class: 'IV', Section: 'A' },
  { id: 4, Adm_No: 3456, name: 'Sonu', class: 'II', Section: 'C' },
  { id: 5, Adm_No: 6789, name: 'Rahul', class: 'VIII', Section: 'B' }
];
//const initialRow = { id: null, Branch: '', enrollmentType: '', admissionNo: '', name: '', class: '', Section: '' };

export default function EditableTable() {
  const [enrollmentType, setEnrollmentType] = useState('Admission');
  const [Branch, setBranch] = React.useState('Dwarka');
  const [enrollmentType1, setEnrollmentType1] = useState();
  const [Branch1, setBranch1] = React.useState();
  const [admissionNo, setAdmissionNo] = useState('');
  const [showSecondRow, setShowSecondRow] = useState(false);

  // const [rows, setRows] = useState(data);
  // const [newRow, setNewRow] = useState({ ...initialRow });

  //   const handleSave = () => {
  //   handleAddRow(); // Call handleAddRow inside handleSave
  // };

  // const handleAddRow = () => {
  //   if (newRow.Branch && newRow.enrollmentType && newRow.admissionNo && newRow.name && newRow.class && newRow.Section) {
  //     setRows([...rows, { ...newRow, id: Date.now() }]);
  //     setNewRow({ ...initialRow });
  //   }
  // };

  // const handleAddRowAndSave = () => {
  //   handleAddRow();
  //   handleSave();
  // };





  const handleEnrollmentType = (event) => {
    setEnrollmentType(event.target.value);
  };

  const handleBranch = (event) => {
    setBranch(event.target.value);
  };

  const handleAdmissionNoChange = (event) => {
    setAdmissionNo(event.target.value);
  };
  const handleBranch1 = (event) => {
    setBranch1(event.target.value);
  };
  const handleEnrollmentType1 = (event) => {
    setEnrollmentType1(event.target.value);
  };

  const filteredData = data.filter((item) => item.Adm_No === parseInt(admissionNo));

  const handleAddSibling = () => {
    setShowSecondRow(true); // Show the second row when "Add Sibling" button is clicked
  };

  return (
    <>
      <Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="editable table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Branch</TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Enrollment Type</TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Admission No.</TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Name</TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Class</TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Section</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

               <TableRow >
               <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
                 <FormControl fullWidth>
                   <Select labelId="Branch-select-label" id="Branch-simple-select" value={Branch} onChange={handleBranch}>
                     <MenuItem value={'Dwarka'}>Dwarka</MenuItem>
                     <MenuItem value={'Noida'}>Noida</MenuItem>
                     <MenuItem value={'Delhi'}>Delhi</MenuItem>
                   </Select>
                 </FormControl>
               </TableCell>
               <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
                 <FormControl fullWidth>
                   <Select
                     labelId="EnrollmentType-select-label"
                     id="EnrollmentType-simple-select"
                     value={enrollmentType}
                     onChange={handleEnrollmentType}
                   >
                     <MenuItem value={'Enquiry'}>Enquiry</MenuItem>
                     <MenuItem value={'Registration'}>Registration</MenuItem>
                     <MenuItem value={'Provisional'}>Provisional</MenuItem>
                     <MenuItem value={'Admission'}>Admission</MenuItem>
                   </Select>
                 </FormControl>
               </TableCell>
               <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
                 <TextField id="outlined-basic" variant="outlined" value={admissionNo} onChange={handleAdmissionNoChange} />
               </TableCell>
               <TableCell width={'250px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
                 {filteredData.length > 0 && <div>{filteredData[0].name}</div>}
               </TableCell>
               <TableCell width={'100px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
                 {filteredData.length > 0 && <div>{filteredData[0].class}</div>}
               </TableCell>
               <TableCell width={'100px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
                 {filteredData.length > 0 && <div>{filteredData[0].Section}</div>}
               </TableCell>
               <IconButton sx={{ marginTop: '15px' }}>
                 <HighlightOffOutlinedIcon sx={{ color: '#f19e9e' }} />
               </IconButton>
             </TableRow>
             

              {showSecondRow && (
                <TableRow>
                  <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
                    <FormControl fullWidth>
                      <Select labelId="Branch-select-label" id="Branch-simple-select" value={Branch1} onChange={handleBranch1}>
                        <MenuItem value={'Dwarka'}>Dwarka</MenuItem>
                        <MenuItem value={'Noida'}>Noida</MenuItem>
                        <MenuItem value={'Delhi'}>Delhi</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="EnrollmentType-select-label"
                        id="EnrollmentType-simple-select"
                        value={enrollmentType1}
                        onChange={handleEnrollmentType1}
                      >
                        <MenuItem value={'Enquiry'}>Enquiry</MenuItem>
                        <MenuItem value={'Registration'}>Registration</MenuItem>
                        <MenuItem value={'Provisional'}>Provisional</MenuItem>
                        <MenuItem value={'Admission'}>Admission</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      // onChange={handleAdmissionNoChange}
                    />
                  </TableCell>
                  <TableCell width={'250px'} sx={{ padding: 1, border: '1px solid #ccc' }}></TableCell>
                  <TableCell width={'100px'} sx={{ padding: 1, border: '1px solid #ccc' }}></TableCell>
                  <TableCell width={'100px'} sx={{ padding: 1, border: '1px solid #ccc' }}></TableCell>
                </TableRow>
              )}

              {/* <TableRow>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                  <InputBase placeholder="Branch" value={newRow.Branch} onChange={(e) => setNewRow({ ...newRow, Branch: e.target.value })} />
                </TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                  <InputBase placeholder="Enrollment Type" value={newRow.enrollmentType} onChange={(e) => setNewRow({ ...newRow, enrollmentType: e.target.value })} />
                </TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                  <InputBase placeholder="Admission No" value={newRow.admissionNo} onChange={(e) => setNewRow({ ...newRow, admissionNo: e.target.value })} />
                </TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                  <InputBase placeholder="Name" value={newRow.name} onChange={(e) => setNewRow({ ...newRow, name: e.target.value })} />
                </TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                  <InputBase placeholder="Class" value={newRow.class} onChange={(e) => setNewRow({ ...newRow, class: e.target.value })} />
                </TableCell>
                <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>
                  <InputBase placeholder="Section" value={newRow.Section} onChange={(e) => setNewRow({ ...newRow, Section: e.target.value })} />
                </TableCell>
              </TableRow> */}

              {/* <Box pt={3}>
                <Button startIcon={<AddIcon />} onClick={handleAddRowAndSave}>
                  Add Contact
                </Button>
              </Box> */}
            </TableBody>
          </Table>
        </TableContainer>

        <Box pt={1}>
          <Button startIcon={<AddIcon />} onClick={handleAddSibling}>
            Add Sibling
          </Button>
        </Box>
      </Box>
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
// import IconButton from '@mui/material/IconButton';
// import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
// import AddIcon from '@mui/icons-material/Add';
// import { Box } from '@mui/system';
// import { Button, TextField } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const data = [
//   { id: 1, Adm_No: 1234, name: 'Rohit', class: 'VI', Section: 'A' },
//   { id: 2, Adm_No: 5678, name: 'Pawan', class: 'V', Section: 'B' },
//   { id: 3, Adm_No: 9012, name: 'Suraj', class: 'IV', Section: 'A' },
//   { id: 4, Adm_No: 3456, name: 'Sonu', class: 'II', Section: 'C' },
//   { id: 5, Adm_No: 6789, name: 'Rahul', class: 'VIII', Section: 'B' },
// ];

// export default function EditableTable() {
//   const [enrollmentType, setEnrollmentType] = useState('Admission');
//   const [Branch, setBranch] = React.useState('Dwarka');
//   const [admissionNo, setAdmissionNo] = useState('');

//   const handleEnrollmentType = (event) => {
//     setEnrollmentType(event.target.value);
//   };

//   const handleBranch = (event) => {
//     setBranch(event.target.value);
//   };

//   const handleAdmissionNoChange = (event) => {
//     setAdmissionNo(event.target.value);
//   };

//   const filteredData = data.filter((item) => item.Adm_No === parseInt(admissionNo));

//   return (
//     <>
//       <Box>
//         <TableContainer>
//           <Table sx={{ minWidth: 650 }} aria-label="editable table">
//             <TableHead>
//               <TableRow>
//                 <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Branch</TableCell>
//                 <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Enrollment Type</TableCell>
//                 <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Admission No.</TableCell>
//                 <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Name</TableCell>
//                 <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Class</TableCell>
//                 <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Section</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
//                   <FormControl fullWidth>
//                     <Select
//                       labelId="Branch-select-label"
//                       id="Branch-simple-select"
//                       value={Branch}
//                       onChange={handleBranch}
//                     >
//                       <MenuItem value={'Dwarka'}>Dwarka</MenuItem>
//                       <MenuItem value={'Noida'}>Noida</MenuItem>
//                       <MenuItem value={'Delhi'}>Delhi</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </TableCell>
//                 <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
//                   <FormControl fullWidth>
//                     <Select
//                       labelId="EnrollmentType-select-label"
//                       id="EnrollmentType-simple-select"
//                       value={enrollmentType}
//                       onChange={handleEnrollmentType}
//                     >
//                       <MenuItem value={'Enquiry'}>Enquiry</MenuItem>
//                       <MenuItem value={'Registration'}>Registration</MenuItem>
//                       <MenuItem value={'Provisional'}>Provisional</MenuItem>
//                       <MenuItem value={'Admission'}>Admission</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </TableCell>
//                 <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
//                   <TextField
//                     id="outlined-basic"
//                     variant="outlined"
//                     value={admissionNo}
//                     onChange={handleAdmissionNoChange}
//                   />
//                 </TableCell>
//                 <TableCell width={'250px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
//                   {filteredData.length > 0 && (
//                     <div>
//                       {filteredData[0].name}
//                     </div>)}

//                 </TableCell>
//                 <TableCell width={'100px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
//                 {filteredData.length > 0 && (
//                     <div>
//                       {filteredData[0].class}
//                     </div>)}
//                 </TableCell>
//                 <TableCell width={'100px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
//                 {filteredData.length > 0 && (
//                     <div>
//                       {filteredData[0].Section}
//                     </div>)}
//                 </TableCell>
//                 <IconButton sx={{ marginTop: '15px' }}>
//                   <HighlightOffOutlinedIcon sx={{ color: '#f19e9e' }} />
//                 </IconButton>
//               </TableRow>

//             </TableBody>
//           </Table>
//         </TableContainer>

//         <Box pt={3}>
//           <Button startIcon={<AddIcon />}>Add Sibling</Button>
//         </Box>
//       </Box>
//     </>
//   );
// }

// import React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import IconButton from '@mui/material/IconButton';
// import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
// import AddIcon from '@mui/icons-material/Add';
// import { Box } from '@mui/system';
// import { Button, TextField } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const data = [
//   { id: 1, Adm_No: 1234, name: 'Rohit', class: 'VI', Section:'A' },
//   { id: 2, Adm_No: 5678, name: 'Pawan', class: 'V', Section:'B' },
//   { id: 3, Adm_No: 9012, name: 'Suraj', class: 'IV', Section:'A' },
//   { id: 4, Adm_No: 3456, name: 'Sonu', class: 'II', Section:'C' },
//   { id: 5, Adm_No: 6789, name: 'Rahul', class: 'VIII', Section:'B' },
// ];

// export default function EditableTable() {
//   const [enrollmentType, setEnrollmentType] = React.useState('Admission');

//   const handleEnrollmentType = (event) => {
//     setEnrollmentType(event.target.value);
//   };
//   const [Branch, setBranch] = React.useState('Dwarka');

//   const handleBranch = (event) => {
//     setBranch(event.target.value);
//   };

//   console.log(enrollmentType)
//   return (
//     <>
//      <Box>
//       <TableContainer>
//         <Table sx={{ minWidth: 650 }} aria-label="editable table">
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Branch</TableCell>
//               <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Enrollment Type</TableCell>
//               <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Admission No.</TableCell>
//               <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Name</TableCell>
//               <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Class</TableCell>
//               <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Section</TableCell>
//               {/* <TableCell sx={{ padding: 1, border: '1px solid #ccc' }}>Actions</TableCell> */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//               <TableRow >
//                 <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }} component="th" scope="row">
//                     <FormControl fullWidth>
//                     <Select
//                       labelId="Branch-select-label"
//                       id="Branch-simple-select"
//                       value={Branch}
//                       onChange={handleBranch}
//                     >
//                       <MenuItem value={"Dwarka"}>Dwarka</MenuItem>
//                       <MenuItem value={"Noida"}>Noida</MenuItem>
//                       <MenuItem value={"Delhi"}>Delhi</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </TableCell>
//                 <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }} component="th" scope="row">

//                      {/* row.name */}
//                     <FormControl fullWidth>
//                     <Select
//                       labelId="EnrollmentType-select-label"
//                       id="EnrollmentType-simple-select"
//                       value={enrollmentType}
//                       onChange={handleEnrollmentType}
//                     >
//                       <MenuItem value={'Enquiry'}>Enquiry</MenuItem>
//                       <MenuItem value={'Registration'}>Registration</MenuItem>
//                       <MenuItem value={'Provisional'}>Provisional</MenuItem>
//                       <MenuItem value={'Admission'}>Admission</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </TableCell>
//                 <TableCell width={'150px'} sx={{ padding: 1, border: '1px solid #ccc' }}>
//                     <TextField  id="outlined-basic" variant="outlined" />
//                 </TableCell>
//                 <TableCell width={'250px'} sx={{ padding: 1, border: '1px solid #ccc' }}>

//                 </TableCell>
//                 <TableCell width={'100px'} sx={{ padding: 1, border: '1px solid #ccc' }}>

//                 </TableCell>
//                 <TableCell width={'100px'} sx={{ padding: 1, border: '1px solid #ccc' }}>

//                 </TableCell>
//                   <IconButton sx={{marginTop:'15px'}}>
//                     <HighlightOffOutlinedIcon sx={{color:'#f19e9e'}} />
//                   </IconButton>
//               </TableRow>
//             <TableRow>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Box pt={3}>
//         <Button startIcon={<AddIcon />} >Add Sibling</Button>
//       </Box>
//      </Box>
//     </>
//   );
// }
