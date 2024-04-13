import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Checkbox, Box, Card, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useSelector,useDispatch} from 'react-redux';
import RoleForm from './Role-Authorisation/RoleForm';
import {handleFullAccesssChange,hanldeAccessChange} from 'store/student-info-and-fee/user-and-roles/user-and-roles-slice';

const RoleAccess = () => {
  const dispatch=useDispatch();
  const { moduleAccess } = useSelector((state) => state.userRoleAcess);
  console.log(moduleAccess)
 
  const handleAccess=(name,accessName,id,checked)=>{
        console.log(name,accessName,id,checked);
        if(accessName=="Full Access")
          dispatch(handleFullAccesssChange({name,accessName,id,checked}));
        else
         dispatch(hanldeAccessChange({name,accessName,id,checked}));
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box pt={4.3}>
            <RoleForm />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Box p={2}>
              <Typography variant="h4">Modules Access</Typography>
            </Box>
            <Card
              sx={{
                overflow: { xs: 'scroll', md: 'hidden' },
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px'
              }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ background: '#f0f8ff' }}>
                    <TableCell></TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Full Access</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>View</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Create</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Edit</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Delete</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Approve</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {moduleAccess.map((module) => (
                    <TableRow key={module.id}>
                      <TableCell sx={{ fontWeight: 'bold', padding: '10px' }}>{module.name}</TableCell>
                      {
                        module.accessLevel.map((access) =>
                          < TableCell style={{ paddingLeft: '14px', padding: '10px' }} key={access.id}>
                            <Checkbox
                              size="small"
                              checked={access.isSelected}
                              onChange={(e) => handleAccess(module.name,access.name,access.id, e.target.checked)}
                            />
                          </TableCell>
                        )
                      }
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Box>
        </Grid>
      </Grid >

    </>
  );
}

export default RoleAccess;
