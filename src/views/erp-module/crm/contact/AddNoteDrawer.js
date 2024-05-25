// ======= Page Owner Vikash =========
// ======= Add Note Drawer and Content =========
import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TextArea from 'antd/es/input/TextArea';

const AddNoteDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();

  return (
    <>
        <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Add Note
        </Button>

      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 550 }, height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Note</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* Drawer Content */}
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

export default AddNoteDrawer;
