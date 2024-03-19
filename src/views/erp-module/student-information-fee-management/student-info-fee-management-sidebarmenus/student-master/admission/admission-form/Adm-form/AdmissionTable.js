import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, IconButton, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
//import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import AdmissionDrawer from './AdmissionDrawer';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';


const rows = [
  {
    id: 1,
    AdmNo: 8574,
    AdmDate: '01-May-2024',
    StudentName: 'Pawan',
    class: 'X',
    DOB: '10-May-2000',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 2,
    AdmNo: 8575,
    AdmDate: '02-Jun-2024',
    StudentName: 'John',
    class: 'V',
    DOB: '15-Apr-2001',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 3,
    AdmNo: 8576,
    AdmDate: '03-May-2024',
    StudentName: 'Jane',
    class: 'I',
    DOB: '20-Jun-1999',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 4,
    AdmNo: 8577,
    AdmDate: '04-May-2024',
    StudentName: 'Alice',
    class: 'VI',
    DOB: '25-Jan-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 5,
    AdmNo: 8578,
    AdmDate: '05-May-2024',
    StudentName: 'Bob',
    class: 'XI',
    DOB: '30-Mar-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 6,
    AdmNo: 8579,
    AdmDate: '06-May-2024',
    StudentName: 'Emily',
    class: 'IX',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 7,
    AdmNo: 8580,
    AdmDate: '07-Jun-2024',
    StudentName: 'Michael',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 8,
    AdmNo: 8581,
    AdmDate: '08-May-2024',
    StudentName: 'Sara',
    class: 'III',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 9,
    AdmNo: 8582,
    AdmDate: '09-May-2024',
    StudentName: 'David',
    class: 'V',
    DOB: '20-Jan-2001',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 10,
    AdmNo: 8583,
    AdmDate: '10-May-2024',
    StudentName: 'Jessica',
    class: 'II',
    DOB: '25-Mar-2002',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 11,
    AdmNo: 8584,
    AdmDate: '11-Jun-2024',
    StudentName: 'Peter',
    class: 'IV',
    DOB: '30-May-2003',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Inactive'
  },
  {
    id: 12,
    AdmNo: 8585,
    AdmDate: '12-May-2024',
    StudentName: 'Sophia',
    class: 'XII',
    DOB: '05-Jul-2000',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 13,
    AdmNo: 8586,
    AdmDate: '13-Jun-2024',
    StudentName: 'Daniel',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 14,
    AdmNo: 8587,
    AdmDate: '14-May-2024',
    StudentName: 'Olivia',
    class: 'VII',
    DOB: '15-Nov-1997',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 15,
    AdmNo: 8588,
    AdmDate: '15-May-2024',
    StudentName: 'William',
    class: 'VIII',
    DOB: '20-Jan-2001',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 16,
    AdmNo: 8589,
    AdmDate: '16-May-2024',
    StudentName: 'Isabella',
    class: 'X',
    DOB: '25-Mar-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 17,
    AdmNo: 8590,
    AdmDate: '17-Jun-2024',
    StudentName: 'Liam',
    class: 'II',
    DOB: '30-May-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 18,
    AdmNo: 8591,
    AdmDate: '18-May-2024',
    StudentName: 'Mia',
    class: 'LkG',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 19,
    AdmNo: 8592,
    AdmDate: '19-May-2024',
    StudentName: 'Ethan',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 20,
    AdmNo: 8593,
    AdmDate: '20-May-2024',
    StudentName: 'Ava',
    class: 'UKG',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 21,
    AdmNo: 8584,
    AdmDate: '11-Jun-2024',
    StudentName: 'Peter',
    class: 'IV',
    DOB: '30-May-2003',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Inactive'
  },
  {
    id: 22,
    AdmNo: 8585,
    AdmDate: '12-May-2024',
    StudentName: 'Sophia',
    class: 'XII',
    DOB: '05-Jul-2000',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 23,
    AdmNo: 8586,
    AdmDate: '13-Jun-2024',
    StudentName: 'Daniel',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 24,
    AdmNo: 8587,
    AdmDate: '14-May-2024',
    StudentName: 'Olivia',
    class: 'VII',
    DOB: '15-Nov-1997',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 25,
    AdmNo: 8588,
    AdmDate: '15-May-2024',
    StudentName: 'William',
    class: 'VIII',
    DOB: '20-Jan-2001',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 26,
    AdmNo: 8589,
    AdmDate: '16-May-2024',
    StudentName: 'Isabella',
    class: 'X',
    DOB: '25-Mar-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 27,
    AdmNo: 8590,
    AdmDate: '17-Jun-2024',
    StudentName: 'Liam',
    class: 'II',
    DOB: '30-May-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 28,
    AdmNo: 8591,
    AdmDate: '18-May-2024',
    StudentName: 'Mia',
    class: 'LkG',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 29,
    AdmNo: 8592,
    AdmDate: '19-May-2024',
    StudentName: 'Ethan',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 30,
    AdmNo: 8593,
    AdmDate: '20-May-2024',
    StudentName: 'Ava',
    class: 'UKG',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 31,
    AdmNo: 8574,
    AdmDate: '01-May-2024',
    StudentName: 'Pawan',
    class: 'X',
    DOB: '10-May-2000',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 32,
    AdmNo: 8575,
    AdmDate: '02-Jun-2024',
    StudentName: 'John',
    class: 'V',
    DOB: '15-Apr-2001',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 33,
    AdmNo: 8576,
    AdmDate: '03-May-2024',
    StudentName: 'Jane',
    class: 'I',
    DOB: '20-Jun-1999',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 34,
    AdmNo: 8577,
    AdmDate: '04-May-2024',
    StudentName: 'Alice',
    class: 'VI',
    DOB: '25-Jan-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 35,
    AdmNo: 8578,
    AdmDate: '05-May-2024',
    StudentName: 'Bob',
    class: 'XI',
    DOB: '30-Mar-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 36,
    AdmNo: 8579,
    AdmDate: '06-May-2024',
    StudentName: 'Emily',
    class: 'IX',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 37,
    AdmNo: 8580,
    AdmDate: '07-Jun-2024',
    StudentName: 'Michael',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 38,
    AdmNo: 8581,
    AdmDate: '08-May-2024',
    StudentName: 'Sara',
    class: 'III',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 39,
    AdmNo: 8582,
    AdmDate: '09-May-2024',
    StudentName: 'David',
    class: 'V',
    DOB: '20-Jan-2001',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 40,
    AdmNo: 8583,
    AdmDate: '10-May-2024',
    StudentName: 'Jessica',
    class: 'II',
    DOB: '25-Mar-2002',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 41,
    AdmNo: 8584,
    AdmDate: '11-Jun-2024',
    StudentName: 'Peter',
    class: 'IV',
    DOB: '30-May-2003',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Inactive'
  },
  {
    id: 42,
    AdmNo: 8585,
    AdmDate: '12-May-2024',
    StudentName: 'Sophia',
    class: 'XII',
    DOB: '05-Jul-2000',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 43,
    AdmNo: 8586,
    AdmDate: '13-Jun-2024',
    StudentName: 'Daniel',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 44,
    AdmNo: 8587,
    AdmDate: '14-May-2024',
    StudentName: 'Olivia',
    class: 'VII',
    DOB: '15-Nov-1997',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 45,
    AdmNo: 8588,
    AdmDate: '15-May-2024',
    StudentName: 'William',
    class: 'VIII',
    DOB: '20-Jan-2001',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 46,
    AdmNo: 8589,
    AdmDate: '16-May-2024',
    StudentName: 'Isabella',
    class: 'X',
    DOB: '25-Mar-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 47,
    AdmNo: 8590,
    AdmDate: '17-Jun-2024',
    StudentName: 'Liam',
    class: 'II',
    DOB: '30-May-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 48,
    AdmNo: 8591,
    AdmDate: '18-May-2024',
    StudentName: 'Mia',
    class: 'LkG',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 49,
    AdmNo: 8592,
    AdmDate: '19-May-2024',
    StudentName: 'Ethan',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 50,
    AdmNo: 8593,
    AdmDate: '20-May-2024',
    StudentName: 'Ava',
    class: 'UKG',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 51,
    AdmNo: 8574,
    AdmDate: '01-May-2024',
    StudentName: 'Pawan',
    class: 'X',
    DOB: '10-May-2000',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 52,
    AdmNo: 8575,
    AdmDate: '02-Jun-2024',
    StudentName: 'John',
    class: 'V',
    DOB: '15-Apr-2001',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 53,
    AdmNo: 8576,
    AdmDate: '03-May-2024',
    StudentName: 'Jane',
    class: 'I',
    DOB: '20-Jun-1999',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 54,
    AdmNo: 8577,
    AdmDate: '04-May-2024',
    StudentName: 'Alice',
    class: 'VI',
    DOB: '25-Jan-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 55,
    AdmNo: 8578,
    AdmDate: '05-May-2024',
    StudentName: 'Bob',
    class: 'XI',
    DOB: '30-Mar-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 56,
    AdmNo: 8579,
    AdmDate: '06-May-2024',
    StudentName: 'Emily',
    class: 'IX',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 57,
    AdmNo: 8580,
    AdmDate: '07-Jun-2024',
    StudentName: 'Michael',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 58,
    AdmNo: 8581,
    AdmDate: '08-May-2024',
    StudentName: 'Sara',
    class: 'III',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 59,
    AdmNo: 8582,
    AdmDate: '09-May-2024',
    StudentName: 'David',
    class: 'V',
    DOB: '20-Jan-2001',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 60,
    AdmNo: 8583,
    AdmDate: '10-May-2024',
    StudentName: 'Jessica',
    class: 'II',
    DOB: '25-Mar-2002',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  }
];

export default function AdmissionTable() {
  const navigate = useNavigate();

  // const handleRowClick = () => {
  //   navigate(`../registration`);
  // };

  const Click = () => {
    navigate('../admission-form');
  };

  const columns = [
    { field: 'AdmNo', headerName: 'Adm No.', type: 'number', flex: 1, align: 'left', headerAlign: 'left' },
    { field: 'AdmDate', headerName: 'Adm Date', flex: 1 },
    { field: 'StudentName', headerName: 'Name', flex: 1 },
    { field: 'class', headerName: 'Class', flex: 1 },
    { field: 'DOB', headerName: 'D.O.B', flex: 1 },
    { field: 'Studentcategory', headerName: 'Category', flex: 1 },
    { field: 'House', headerName: 'House', flex: 1 },
    { field: 'Status', headerName: 'Status', flex: 1 },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      renderCell: () => (
        <Box>
          <IconButton >
            <RemoveRedEyeTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
          </IconButton>
          <IconButton onClick={(event) => event.stopPropagation()}>
            <EditTwoToneIcon />
          </IconButton>
          <IconButton onClick={(event) => event.stopPropagation()}>
            <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
          </IconButton>
        </Box>
      )
    }
  ];

  return (
    <Card>
      <Box sx={{ borderBottom: '1px solid #ccc' }}>
        <Grid container spacing={2} p={2} sx={{ alignItems: 'end' }}>
          <Grid item xs={12} sm={8} lg={8}>
            <Box sx={{ paddingBottom: '0px' }}>
              <Typography variant='h4' sx={{ pb: '0px' }}>Students List</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
              {/* <Button sx={{ mr: 1 }} onClick={Click} variant="outlined" startIcon={<AddOutlinedIcon />}>
                Add Student
              </Button> */}
              <AdmissionDrawer/>
              <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                <FilterListRoundedIcon />
              </IconButton>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <IconButton sx={{ background: '#cccccc54' }} {...bindTrigger(popupState)}>
                      <MoreVertTwoToneIcon />
                    </IconButton>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Typography sx={{ p: 1, display: 'Grid' }}>
                        <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Import Contact</Button>
                        <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Download Contact</Button>
                      </Typography>
                    </Popover>
                  </div>
                )}
              </PopupState>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box p={2}>
        <DataGrid
          rows={rows}
          columns={columns} // Use state variable for columns
          onRowClick={Click}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 50 }
            }
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          checkboxSelection
        />
      </Box>
    </Card>
  );
}
























// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Card, IconButton, Button, Grid } from '@mui/material';
// import { Box } from '@mui/system';
// import { useNavigate } from 'react-router-dom';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
// import Typography from '@mui/material/Typography';
// import Popover from '@mui/material/Popover';
// import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

// const columns = [
//   // { field: 'id', headerName: 'ID', flex: 1 },
//   { field: 'AdmNo', headerName: 'Adm No.', type: 'number', flex: 1, align: 'left', headerAlign: 'left' },
//   { field: 'AdmDate', headerName: 'Adm Date', flex: 1 },
//   { field: 'StudentName', headerName: 'Name', flex: 1 },
//   { field: 'class', headerName: 'Class', flex: 1 },
//   { field: 'DOB', headerName: 'D.O.B', flex: 1 },
//   { field: 'Studentcategory', headerName: 'Category', flex: 1 },
//   { field: 'House', headerName: 'House', flex: 1 },
//   { field: 'Status', headerName: 'Status', flex: 1 },
//   {
//     field: 'Action',
//     headerName: 'Action',
//     flex: 1,
//     renderCell: () => (
//       <Box>
//         <IconButton onClick={(event) => event.stopPropagation()}>
//           <EditTwoToneIcon />
//         </IconButton>
//         <IconButton onClick={(event) => event.stopPropagation()}>
//           <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
//         </IconButton>
//       </Box>
//     )
//   }
// ];

// const rows = [
//   {
//     id: 1,
//     AdmNo: 8574,
//     AdmDate: '01-May-2024',
//     StudentName: 'Pawan',
//     class: 'X',
//     DOB: '10-May-2000',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Active'
//   },
//   {
//     id: 2,
//     AdmNo: 8575,
//     AdmDate: '02-Jun-2024',
//     StudentName: 'John',
//     class: 'V',
//     DOB: '15-Apr-2001',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Inactive'
//   },
//   {
//     id: 3,
//     AdmNo: 8576,
//     AdmDate: '03-May-2024',
//     StudentName: 'Jane',
//     class: 'I',
//     DOB: '20-Jun-1999',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 4,
//     AdmNo: 8577,
//     AdmDate: '04-May-2024',
//     StudentName: 'Alice',
//     class: 'VI',
//     DOB: '25-Jan-2002',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Active'
//   },
//   {
//     id: 5,
//     AdmNo: 8578,
//     AdmDate: '05-May-2024',
//     StudentName: 'Bob',
//     class: 'XI',
//     DOB: '30-Mar-2003',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Inactive'
//   },
//   {
//     id: 6,
//     AdmNo: 8579,
//     AdmDate: '06-May-2024',
//     StudentName: 'Emily',
//     class: 'IX',
//     DOB: '05-Jul-2000',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Active'
//   },
//   {
//     id: 7,
//     AdmNo: 8580,
//     AdmDate: '07-Jun-2024',
//     StudentName: 'Michael',
//     class: 'X',
//     DOB: '10-Sep-1998',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 8,
//     AdmNo: 8581,
//     AdmDate: '08-May-2024',
//     StudentName: 'Sara',
//     class: 'III',
//     DOB: '15-Nov-1997',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Inactive'
//   },
//   {
//     id: 9,
//     AdmNo: 8582,
//     AdmDate: '09-May-2024',
//     StudentName: 'David',
//     class: 'V',
//     DOB: '20-Jan-2001',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Active'
//   },
//   {
//     id: 10,
//     AdmNo: 8583,
//     AdmDate: '10-May-2024',
//     StudentName: 'Jessica',
//     class: 'II',
//     DOB: '25-Mar-2002',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Active'
//   },
//   {
//     id: 11,
//     AdmNo: 8584,
//     AdmDate: '11-Jun-2024',
//     StudentName: 'Peter',
//     class: 'IV',
//     DOB: '30-May-2003',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Inactive'
//   },
//   {
//     id: 12,
//     AdmNo: 8585,
//     AdmDate: '12-May-2024',
//     StudentName: 'Sophia',
//     class: 'XII',
//     DOB: '05-Jul-2000',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Active'
//   },
//   {
//     id: 13,
//     AdmNo: 8586,
//     AdmDate: '13-Jun-2024',
//     StudentName: 'Daniel',
//     class: 'X',
//     DOB: '10-Sep-1998',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Active'
//   },
//   {
//     id: 14,
//     AdmNo: 8587,
//     AdmDate: '14-May-2024',
//     StudentName: 'Olivia',
//     class: 'VII',
//     DOB: '15-Nov-1997',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Inactive'
//   },
//   {
//     id: 15,
//     AdmNo: 8588,
//     AdmDate: '15-May-2024',
//     StudentName: 'William',
//     class: 'VIII',
//     DOB: '20-Jan-2001',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 16,
//     AdmNo: 8589,
//     AdmDate: '16-May-2024',
//     StudentName: 'Isabella',
//     class: 'X',
//     DOB: '25-Mar-2002',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Active'
//   },
//   {
//     id: 17,
//     AdmNo: 8590,
//     AdmDate: '17-Jun-2024',
//     StudentName: 'Liam',
//     class: 'II',
//     DOB: '30-May-2003',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Inactive'
//   },
//   {
//     id: 18,
//     AdmNo: 8591,
//     AdmDate: '18-May-2024',
//     StudentName: 'Mia',
//     class: 'LkG',
//     DOB: '05-Jul-2000',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Active'
//   },
//   {
//     id: 19,
//     AdmNo: 8592,
//     AdmDate: '19-May-2024',
//     StudentName: 'Ethan',
//     class: 'X',
//     DOB: '10-Sep-1998',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 20,
//     AdmNo: 8593,
//     AdmDate: '20-May-2024',
//     StudentName: 'Ava',
//     class: 'UKG',
//     DOB: '15-Nov-1997',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Inactive'
//   },
//   {
//     id: 21,
//     AdmNo: 8584,
//     AdmDate: '11-Jun-2024',
//     StudentName: 'Peter',
//     class: 'IV',
//     DOB: '30-May-2003',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Inactive'
//   },
//   {
//     id: 22,
//     AdmNo: 8585,
//     AdmDate: '12-May-2024',
//     StudentName: 'Sophia',
//     class: 'XII',
//     DOB: '05-Jul-2000',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Active'
//   },
//   {
//     id: 23,
//     AdmNo: 8586,
//     AdmDate: '13-Jun-2024',
//     StudentName: 'Daniel',
//     class: 'X',
//     DOB: '10-Sep-1998',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Active'
//   },
//   {
//     id: 24,
//     AdmNo: 8587,
//     AdmDate: '14-May-2024',
//     StudentName: 'Olivia',
//     class: 'VII',
//     DOB: '15-Nov-1997',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Inactive'
//   },
//   {
//     id: 25,
//     AdmNo: 8588,
//     AdmDate: '15-May-2024',
//     StudentName: 'William',
//     class: 'VIII',
//     DOB: '20-Jan-2001',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 26,
//     AdmNo: 8589,
//     AdmDate: '16-May-2024',
//     StudentName: 'Isabella',
//     class: 'X',
//     DOB: '25-Mar-2002',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Active'
//   },
//   {
//     id: 27,
//     AdmNo: 8590,
//     AdmDate: '17-Jun-2024',
//     StudentName: 'Liam',
//     class: 'II',
//     DOB: '30-May-2003',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Inactive'
//   },
//   {
//     id: 28,
//     AdmNo: 8591,
//     AdmDate: '18-May-2024',
//     StudentName: 'Mia',
//     class: 'LkG',
//     DOB: '05-Jul-2000',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Active'
//   },
//   {
//     id: 29,
//     AdmNo: 8592,
//     AdmDate: '19-May-2024',
//     StudentName: 'Ethan',
//     class: 'X',
//     DOB: '10-Sep-1998',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 30,
//     AdmNo: 8593,
//     AdmDate: '20-May-2024',
//     StudentName: 'Ava',
//     class: 'UKG',
//     DOB: '15-Nov-1997',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Inactive'
//   },
//   {
//     id: 31,
//     AdmNo: 8574,
//     AdmDate: '01-May-2024',
//     StudentName: 'Pawan',
//     class: 'X',
//     DOB: '10-May-2000',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Active'
//   },
//   {
//     id: 32,
//     AdmNo: 8575,
//     AdmDate: '02-Jun-2024',
//     StudentName: 'John',
//     class: 'V',
//     DOB: '15-Apr-2001',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Inactive'
//   },
//   {
//     id: 33,
//     AdmNo: 8576,
//     AdmDate: '03-May-2024',
//     StudentName: 'Jane',
//     class: 'I',
//     DOB: '20-Jun-1999',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 34,
//     AdmNo: 8577,
//     AdmDate: '04-May-2024',
//     StudentName: 'Alice',
//     class: 'VI',
//     DOB: '25-Jan-2002',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Active'
//   },
//   {
//     id: 35,
//     AdmNo: 8578,
//     AdmDate: '05-May-2024',
//     StudentName: 'Bob',
//     class: 'XI',
//     DOB: '30-Mar-2003',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Inactive'
//   },
//   {
//     id: 36,
//     AdmNo: 8579,
//     AdmDate: '06-May-2024',
//     StudentName: 'Emily',
//     class: 'IX',
//     DOB: '05-Jul-2000',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Active'
//   },
//   {
//     id: 37,
//     AdmNo: 8580,
//     AdmDate: '07-Jun-2024',
//     StudentName: 'Michael',
//     class: 'X',
//     DOB: '10-Sep-1998',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 38,
//     AdmNo: 8581,
//     AdmDate: '08-May-2024',
//     StudentName: 'Sara',
//     class: 'III',
//     DOB: '15-Nov-1997',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Inactive'
//   },
//   {
//     id: 39,
//     AdmNo: 8582,
//     AdmDate: '09-May-2024',
//     StudentName: 'David',
//     class: 'V',
//     DOB: '20-Jan-2001',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Active'
//   },
//   {
//     id: 40,
//     AdmNo: 8583,
//     AdmDate: '10-May-2024',
//     StudentName: 'Jessica',
//     class: 'II',
//     DOB: '25-Mar-2002',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Active'
//   },
//   {
//     id: 41,
//     AdmNo: 8584,
//     AdmDate: '11-Jun-2024',
//     StudentName: 'Peter',
//     class: 'IV',
//     DOB: '30-May-2003',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Inactive'
//   },
//   {
//     id: 42,
//     AdmNo: 8585,
//     AdmDate: '12-May-2024',
//     StudentName: 'Sophia',
//     class: 'XII',
//     DOB: '05-Jul-2000',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Active'
//   },
//   {
//     id: 43,
//     AdmNo: 8586,
//     AdmDate: '13-Jun-2024',
//     StudentName: 'Daniel',
//     class: 'X',
//     DOB: '10-Sep-1998',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Active'
//   },
//   {
//     id: 44,
//     AdmNo: 8587,
//     AdmDate: '14-May-2024',
//     StudentName: 'Olivia',
//     class: 'VII',
//     DOB: '15-Nov-1997',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Inactive'
//   },
//   {
//     id: 45,
//     AdmNo: 8588,
//     AdmDate: '15-May-2024',
//     StudentName: 'William',
//     class: 'VIII',
//     DOB: '20-Jan-2001',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 46,
//     AdmNo: 8589,
//     AdmDate: '16-May-2024',
//     StudentName: 'Isabella',
//     class: 'X',
//     DOB: '25-Mar-2002',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Active'
//   },
//   {
//     id: 47,
//     AdmNo: 8590,
//     AdmDate: '17-Jun-2024',
//     StudentName: 'Liam',
//     class: 'II',
//     DOB: '30-May-2003',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Inactive'
//   },
//   {
//     id: 48,
//     AdmNo: 8591,
//     AdmDate: '18-May-2024',
//     StudentName: 'Mia',
//     class: 'LkG',
//     DOB: '05-Jul-2000',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Active'
//   },
//   {
//     id: 49,
//     AdmNo: 8592,
//     AdmDate: '19-May-2024',
//     StudentName: 'Ethan',
//     class: 'X',
//     DOB: '10-Sep-1998',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 50,
//     AdmNo: 8593,
//     AdmDate: '20-May-2024',
//     StudentName: 'Ava',
//     class: 'UKG',
//     DOB: '15-Nov-1997',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Inactive'
//   },
//   {
//     id: 51,
//     AdmNo: 8574,
//     AdmDate: '01-May-2024',
//     StudentName: 'Pawan',
//     class: 'X',
//     DOB: '10-May-2000',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Active'
//   },
//   {
//     id: 52,
//     AdmNo: 8575,
//     AdmDate: '02-Jun-2024',
//     StudentName: 'John',
//     class: 'V',
//     DOB: '15-Apr-2001',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Inactive'
//   },
//   {
//     id: 53,
//     AdmNo: 8576,
//     AdmDate: '03-May-2024',
//     StudentName: 'Jane',
//     class: 'I',
//     DOB: '20-Jun-1999',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 54,
//     AdmNo: 8577,
//     AdmDate: '04-May-2024',
//     StudentName: 'Alice',
//     class: 'VI',
//     DOB: '25-Jan-2002',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Active'
//   },
//   {
//     id: 55,
//     AdmNo: 8578,
//     AdmDate: '05-May-2024',
//     StudentName: 'Bob',
//     class: 'XI',
//     DOB: '30-Mar-2003',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Inactive'
//   },
//   {
//     id: 56,
//     AdmNo: 8579,
//     AdmDate: '06-May-2024',
//     StudentName: 'Emily',
//     class: 'IX',
//     DOB: '05-Jul-2000',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Active'
//   },
//   {
//     id: 57,
//     AdmNo: 8580,
//     AdmDate: '07-Jun-2024',
//     StudentName: 'Michael',
//     class: 'X',
//     DOB: '10-Sep-1998',
//     Studentcategory: 'OBC',
//     House: 'Red',
//     Status: 'Active'
//   },
//   {
//     id: 58,
//     AdmNo: 8581,
//     AdmDate: '08-May-2024',
//     StudentName: 'Sara',
//     class: 'III',
//     DOB: '15-Nov-1997',
//     Studentcategory: 'SC',
//     House: 'Yellow',
//     Status: 'Inactive'
//   },
//   {
//     id: 59,
//     AdmNo: 8582,
//     AdmDate: '09-May-2024',
//     StudentName: 'David',
//     class: 'V',
//     DOB: '20-Jan-2001',
//     Studentcategory: 'General',
//     House: 'Green',
//     Status: 'Active'
//   },
//   {
//     id: 60,
//     AdmNo: 8583,
//     AdmDate: '10-May-2024',
//     StudentName: 'Jessica',
//     class: 'II',
//     DOB: '25-Mar-2002',
//     Studentcategory: 'General',
//     House: 'Blue',
//     Status: 'Active'
//   }
// ];

// export default function AdmissionTable() {
//   const navigate = useNavigate(); // Import useNavigate hook


//   const handleRowClick = () => {
//     // Navigate to the student details page with the ID parameter
//     navigate(`../registration`);
//   };

//   const Click = () => {
//     navigate('../admission-form');
//   };

//   return (
//     <Card>
//       <Box sx={{borderBottom:'1px solid #ccc'}}>
//       <Grid container spacing={2} p={2} sx={{ alignItems: 'end' }}>
//         <Grid item xs={12} sm={8} lg={8}>
//           <Box sx={{paddingBottom:'0px'}}>
//             <Typography variant='h4' sx={{pb:'0px'}}>Students List</Typography>
//           </Box>
//         </Grid>

//         <Grid item xs={12} sm={4} lg={4}>
//           <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
//             <Button sx={{mr:1}} onClick={Click} variant="outlined" startIcon={<AddOutlinedIcon />}>
//               Add Student
//             </Button>
//             <IconButton sx={{marginRight:'8px', background:'#cccccc54'}}>
//             <FilterListRoundedIcon />
//             </IconButton>
//             <PopupState variant="popover" popupId="demo-popup-popover">
//                       {(popupState) => (
//                         <div>
//                           <IconButton  sx={{background:'#cccccc54',}} {...bindTrigger(popupState)}>
//                             <MoreVertTwoToneIcon />
//                           </IconButton>
//                           <Popover
//                             {...bindPopover(popupState)}
//                             anchorOrigin={{
//                               vertical: 'bottom',
//                               horizontal: 'center',
//                             }}
//                             transformOrigin={{
//                               vertical: 'top',
//                               horizontal: 'center',
//                             }}
//                           >
//                             <Typography sx={{ p: 1, display: 'Grid' }}>
//                               <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Import Contact</Button>
//                               <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Download Contact</Button>
//                             </Typography>
//                           </Popover>
//                         </div>
//                       )}
//             </PopupState>
//           </div>
//         </Grid>
//       </Grid>
//       </Box>
//       <Box p={2}> 
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           onRowClick={handleRowClick}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 50 }
//             }
//           }}
//           pageSizeOptions={[10, 25, 50, 100]}
//           checkboxSelection
//           // onColumnOrderChange={}
          
//         />
//       </Box>
//     </Card>
//   );
// }