import React from 'react';
import Box from '@mui/material/Box';
import AddRoleDrawer from './AddRoleDrawer';
import Avatar from '@mui/material/Avatar';
import CommonDataGrid from 'views/common-section/commonDataGrid';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

const tableRows = [
  {
    id: '1',
    roleName: 'Admin',
    Description: 'Unrestricted access to all modules',
    User: 'Abhishek'
  },
  {
    id: '2',
    roleName: 'manager',
    Description: 'Access to all modules except organisation settings',
    User: 'Daman'
  },
  {
    id: '3',
    roleName: 'senior manager',
    Description: 'Access to all modules except organisation settings',
    User: 'Vikas'
  }
];



const RoleDetails = () => {

  const stringAvatar = (name) => {
    return {
      sx: {
        fontSize:"16px",
        bgcolor: '#90caf9',
        width: "30px",
        height: "30px"
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  const columns = [
    { field: 'roleName', headerName: 'Role Name', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'Description', headerName: 'Description', flex: 1, minWidth: 130 },
    {
      field: 'User', headerName: 'User', flex: 1, minWidth: 130, renderCell: (param) => (
        <>
          <Chip sx={{ width: "auto",height:"40px",minWidth:"150px",justifyContent:"flex-start" }} 
          label={
          <Box sx={{ display: "flex", alignItems: 'center',height:"40px" }}>
            <Avatar {...stringAvatar(param.value)} /><Typography type="text" sx={{ marginLeft: "10px"}}>{param.value}</Typography>
          </Box>} 
          />
        </>
      )
    },
  ];

  return (
    <Box x={{ padding: "5px" }}>
      {/* ============== Role details tables ========== */}
      <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: "10px" }}>
        <AddRoleDrawer />
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

export default RoleDetails;
