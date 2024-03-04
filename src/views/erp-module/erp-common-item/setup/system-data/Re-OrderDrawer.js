import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, Paper } from '@mui/material';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import { useState } from 'react';

const ReOrderDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();

  // Initial class list
  const initialClassList = [
    'Nursery',
    'kg',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VI OLD',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII A',
    'XII- II',
    'XI- iii'
  ];

  // State to store the class list
  const [classList, setClassList] = useState(initialClassList);

  // Function to handle reordering of classes
  const handleReorder = (startIndex, endIndex) => {
    const updatedClassList = Array.from(classList);
    const [removed] = updatedClassList.splice(startIndex, 1);
    updatedClassList.splice(endIndex, 0, removed);
    setClassList(updatedClassList);
  };

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} variant="outlined" endIcon={<ImportExportOutlinedIcon />}>
        Re-Order
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Re-Order</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
              <h2>Class List</h2>
                {/* Render class list with draggable items */}
                {classList.map((className, index) => (
                  <Paper sx={{padding:'5px', margin:'5px'}} elevation={1} key={className}>
                    <div
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData('text/plain', index);
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                      }}
                      onDrop={(e) => {
                        const dropIndex = Number(e.dataTransfer.getData('text/plain'));
                        handleReorder(dropIndex, index);
                      }}
                    >
                      {className}
                    </div>
                  </Paper>
                ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ReOrderDrawer;
