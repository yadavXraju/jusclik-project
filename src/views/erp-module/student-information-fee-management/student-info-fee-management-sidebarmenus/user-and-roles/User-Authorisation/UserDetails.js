import React from 'react';
import Box from '@mui/material/Box';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { IconButton, Tooltip } from '@mui/material';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import InviteUserDrawer from './InviteUserDrawer';
import Switch from '@mui/material/Switch';
import CommonDataGrid from 'component/commonDataGrid';

const UserDetails = () => {
  const Click = (id) => {
    navigate(`/erp/student-info-fee/transport/bus-details/${id}`);
  };

  
  const columns = [
    { field: 'name', headerName: 'User Details', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 130 },
    { field: 'phone', headerName: 'Phone', flex: 1, minWidth: 130 },
    { field: 'role', headerName: 'Role', flex: 1, minWidth: 130 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 130,
      renderCell: () => (
       <Switch />
      )
    },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 130,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box onClick={(event) => event.stopPropagation()}>
          <Tooltip title="Preview">
            <IconButton>
              <RemoveRedEyeTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton>
              <EditTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteTwoToneIcon onClick={() => handleDeleteRow(params.row.id)} sx={{ color: '#f19e9e' }} />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];

  const tableRows = [
    {
      id: '1',
      name: 'Rahul',
      email: 'test123@gmail.com',
      phone:'8826506789',
      role: 'Admin',
      status: 'In Progress',
    },
    {
      id: '2',
      name: 'Tarun',
      email: 'tarun123@gmail.com',
      phone:'8826506789',
      role: 'User',
      status: 'In Progress',
    },
    {
      id: '3',
      name: 'Viaks',
      email: 'vikas@gmail.com',
      phone:'8826506789',
      role: 'Maintainer',
      status: 'Completed',
    },
    {
      id: '4',
      name: 'Daman',
      email: 'daman123@gmail.com',
      phone:'8816500780',
      role: 'Contributor',
      status: 'Completed',
    },
    {
      id: '5',
      name: 'Kulwinder',
      email: 'Kulwinder@gmail.com',
      phone:'9816500780',
      role: 'Admin',
      status: 'In Progress',
    },
    {
      id: '6',
      name: 'Harsh',
      email: 'Harsh@gmail.com',
      phone:'9816500780',
      role: 'Admin',
      status: 'Completed',
    },
    {
      id: '7',
      name: 'Ruby',
      email: 'Ruby@gmail.com',
      phone:'9816500780',
      role: 'Admin',
      status: 'Completed',
    },
    {
      id: '8',
      name: 'Sangeeta',
      email: 'Sangeeta@gmail.com',
      phone:'9816500780',
      role: 'Admin',
      status: 'Pending',
    }
  ];

  return (
    <Box sx={{padding:"5px"}}>
      <Box sx={{ display: 'flex', justifyContent: 'end',marginBottom:"10px"}}>
        <InviteUserDrawer />
      </Box>
      <CommonDataGrid
        className='scrollbar'
        rows={tableRows} columns={columns} width="100%"
        onRowClick={(params) => Click(params.id)}
        checkboxSelection={false}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 50 }
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]} />
    </Box>
  );
}

export default UserDetails;
