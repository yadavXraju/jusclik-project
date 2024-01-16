// AssignmentsHomeComp.js
import React, { useState } from 'react';
import { Grid, Paper, Typography,  Box,  Button } from '@mui/material';
import { gridSpacing } from 'store/constant';
import AssignmentItem from './AssignmentItem';
import { useNavigate } from 'react-router';
import { sortedUpcomingAssignments, previousAssignments } from 'views/sidebar-menus/assignments/UpcomingAndPrev';
import TabItem from 'views/sidebar-menus/assignments/TabItem';
import { HeadingCss } from '../dashboard-css/CommonCss';

const AssignmentsHomeComp = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const HomeWorkToShow = 4;

  const handleCheckboxClick = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id)
        : [...prevSelectedItems, id]
    );

    setCompletedItems((prevCompletedItems) =>
      prevCompletedItems.includes(id)
        ? prevCompletedItems.filter((itemId) => itemId !== id)
        : [...prevCompletedItems, id]
    );
  };

  const navigate = useNavigate();

  const panelStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const [value, setValue] = useState('UPCOMING');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid spacing={gridSpacing}>
      <Grid item component={Paper} lg={12} md={12} sm={12} xs={12} sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: '24px', border: '1px solid #80808026' }}>
        <Typography variant='h2' sx={{ textAlign: 'left' }} style={HeadingCss}>
          HOMEWORK & ASSIGNMENTS
        </Typography>

        <TabItem value={value} handleChange={handleChange} />

        <div className='tabs'>
          {value === 'UPCOMING' && (
            <div className='panel' style={panelStyle}>
              {sortedUpcomingAssignments.slice(0, HomeWorkToShow).map((item) => (
                <AssignmentItem
                  key={item.id}
                  item={item}
                  completedItems={completedItems}
                  selectedItems={selectedItems}
                  handleCheckboxClick={handleCheckboxClick}
                  navigate={navigate}
                />
              ))}
            </div>
          )}

          {value === 'PAST' && (
            <div className='panel' style={panelStyle}>
              {previousAssignments.slice(0, HomeWorkToShow).map((item) => (
                <AssignmentItem
                  key={item.id}
                  item={item}
                  completedItems={completedItems}
                  selectedItems={selectedItems}
                  handleCheckboxClick={handleCheckboxClick}
                  navigate={navigate}
                />
              ))}
            </div>
          )}
        </div>

        <Box sx={{ pt: 3 , marginLeft:'auto'}}>
          <Button variant='contained' onClick={() => navigate('/assignments')}>
            View More
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AssignmentsHomeComp;
