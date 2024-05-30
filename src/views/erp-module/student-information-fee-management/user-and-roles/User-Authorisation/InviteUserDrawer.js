import { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { TextField } from '@mui/material';
import SelectList from 'components/ui/custom-input/SelectList';
import ParamChackboxSelectAll from 'components/ui/custom-input/ChackboxSelectAll';
import DrawerLayOut from 'layout/drawer-layout';

const InviteUserDrawer = () => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();

  const [role, setrole] = useState('');
  const roleOptions = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Manager ', label: 'Manager' },
    { value: 'senior manager', label: 'senior manager' },
  ];
  const roleChange = (event) => {
    setrole(event.target.value);
  };

  const PrivilegesData = [
    { id: '1', details: { PrivilegesName: 'Allow To Send SMS', checked: true } },
    { id: '2', details: { PrivilegesName: 'Allow To Send Email', checked: false } },
    { id: '3', details: { PrivilegesName: 'Allow Export To Excel', checked: true } },
    { id: '4', details: { PrivilegesName: 'Allow Switch To Parent-Teacher Dashboard', checked: false } },
    { id: '5', details: { PrivilegesName: 'Exclusive Dynamic Reports Only', checked: true } },
    { id: '7', details: { PrivilegesName: 'Restrict User on Schools IP Addresses', checked: false } },
    { id: '12', details: { PrivilegesName: 'Back Date Fee Entry Permission', checked: true } },
  ];

  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  const DrawerBody = () => {
    return (
      <>
      <form>
              <Box sx={{ padding: 2 }}>
                <Box pb={2}>
                  <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                </Box>
                <Box pb={2}>
                  <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                </Box>
                <Box pb={2}>
                  <TextField id="outlined-basic" label="Mobile" variant="outlined" fullWidth />
                </Box>
                <Box pb={2}>
                  <SelectList label="Role" options={roleOptions} value={role} onChange={roleChange} />
                </Box>
                <ParamChackboxSelectAll data={PrivilegesData} onSelect={handleSelect} heading={<Typography variant="h4">Modules Access</Typography>} />
                <Box sx={{ padding: 2 }}>
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                  <Button sx={{ alignSelf: 'flex-end' }}>Cancal</Button>
                </Box>
              </Box>
            </form>
      </>
    )
  }


  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
      Invite User
      </Button>
      <DrawerLayOut anchor={anchor} direction={'right'} toggleDrawer={toggleDrawer}
        Title={'Invite User'} Body={<DrawerBody />} customStyles={{width:{ sm: '100vw', md: 700 }}}  
      />
    </>
  );
};

export default InviteUserDrawer;
