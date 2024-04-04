import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

const columns = [
  { id: 'documenttitle', label: 'Document Title', minWidth: 170 },
  { id: 'discription', label: 'Description', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 170, align: 'right' },
  { id: 'lastupdated', label: 'LastUpdated', minWidth: 170, align: 'right' },
];

function createData(documenttitle, discription, lastupdated, status) {
  return { documenttitle, discription, lastupdated, status };
}

const rows = [
  createData('Aadhar', 'Organization Code of Conduct...', '13 Jan, 2020'),
  createData('Fitness', 'Organization Code of Conduct...', '13 Jan, 2020'),
  createData('License', 'Organization Code of Conduct...', '13 Jan, 2020'),
  createData('Permit', 'Organization Code of Conduct...', '13 Jan, 2020'),
  createData('RegCertificate', 'Organization Code of Conduct...', '13 Jan, 2020'),
  createData('SpeedGovernor', 'Organization Code of Conduct...', '13 Jan, 2020'),
  createData('Insurance', 'Organization Code of Conduct...', '13 Jan, 2020'),
  createData('GPS', 'Organization Code of Conduct...', '13 Jan, 2020'),
];

export default function Documents() {

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 0 }}>
        <TableContainer sx={{height: 'calc(100vh - 188px)'}}>
          <Table stickyHeader aria-label="sticky table" sx={{ border: '1px solid #ccc' }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight:'bold' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    <TableCell sx={{ fontWeight: 'bold' }}>
                      {row.documenttitle}
                    </TableCell>
                    <TableCell>
                      {row.discription}
                    </TableCell>
                    <TableCell align="right">
                      {/* <Button size='small' sx={{ mr: '2px' ,background: 'rgb(0, 200, 83 , .5)', color: 'black' }}>Upload</Button> */}
                      <AttachFileIcon sx={{ color: 'rgb(124, 178, 221)' }}/>
                      {/* <Button size='small' sx={{ background: 'rgb(216, 67, 21, .5)', color: 'black' }}>Delete</Button> */}
                      <DeleteOutlineTwoToneIcon sx={{ color: '#f19e9e' }}/>
                    </TableCell>
                    <TableCell align="right">
                      {row.lastupdated}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      
    </>
  );
}

















// import * as React from 'react';
// import { Grid, TextField, Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// export default function Documents() {

//   return (
//     <>
//     <Box p={2} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
//         <Box>
//           <Typography pb={1} variant="h5">
//              DOCUMENTS <InfoOutlinedIcon sx={{ fontSize: '14px', color: '#746a6a' }} />{' '}
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={6}>
//               <TextField id="outlined-basic" label="Aadhar" type='file' fullWidth variant="outlined" />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField id="outlined-basic" label="Fitness" type='file' fullWidth variant="outlined" />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField id="outlined-basic" label="License" type='file' fullWidth variant="outlined" />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField id="outlined-basic" label="Permit" type='file' fullWidth variant="outlined" />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField id="outlined-basic" label="RegCertificate" type='file' fullWidth variant="outlined" />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField id="outlined-basic" label="SpeedGovernor" type='file' fullWidth variant="outlined" />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField id="outlined-basic" label="Insurance" type='file' fullWidth variant="outlined" />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField id="outlined-basic" label="GPS" type='file' fullWidth variant="outlined" />
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </>
//   );
// }
