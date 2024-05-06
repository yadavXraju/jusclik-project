import React, {useState} from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TextArea from 'antd/es/input/TextArea';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import SelectList from 'views/common-section/ParamSelectList';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

const AddFollowUpDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();

  const [name, setName] = useState('');
  const nameOptions = [
    { value: 'Admin', label: 'Suraj' },
  ];
  const nameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
        <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AccessAlarmsOutlinedIcon />}>
        Add Follow Up
        </Button>

      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 550 }, height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Follow Up</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* Drawer content */}
            <Box mt={2}>
            <SelectList label="Role" options={nameOptions} value={name} onChange={nameChange} />
            </Box>
            <Box mt={2}>
                <ParameterizedDateComponent label="Follow Up Date" customStyle={{width:'100%'}} />
            </Box>
            <Box mt={1}>
            <Box p={0.5}>Note</Box>
            <TextArea rows={3} placeholder="Enter your text here..." fullWidth variant="outlined" />
            </Box>
            <Box py={2} sx={{display:'flex', justifyContent:'end'}}>
                <Button variant='contained' >Save</Button>
            </Box>

          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AddFollowUpDrawer;
