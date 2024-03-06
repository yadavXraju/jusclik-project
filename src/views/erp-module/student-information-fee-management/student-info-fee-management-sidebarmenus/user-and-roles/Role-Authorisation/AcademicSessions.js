import React, { useState } from 'react';
import { Box, Card, Checkbox, List, ListItem, Typography } from '@mui/material';

function AcademicSessions() {

  const ModuleFormsEventsData = [
    { id: '1', details: { year: '2009-2010' } },
    { id: '2', details: { year: '2010-2011' } },
    { id: '3', details: { year: '2011-2012' } },
    { id: '4', details: { year: '2012-2013' } },
    { id: '5', details: { year: '2013-2014' } },
    { id: '6', details: { year: '2014-2015' } },
    { id: '7', details: { year: '2015-2016' } },
    { id: '8', details: { year: '2016-2017' } },
    { id: '9', details: { year: '2017-2018' } },
    { id: '10', details: { year: '2018-2019' } },
    { id: '11', details: { year: '2019-2020' } },
    { id: '12', details: { year: '2020-2021' } },
    { id: '13', details: { year: '2021-2022' } },
    { id: '14', details: { year: '2022-2023' } },
    { id: '15', details: { year: '2023-2024' } },
    { id: '15', details: { year: '2024-2025' } },
  ];

  // Initialize checkedItems with all checkboxes set to false
  const initialCheckedItems = ModuleFormsEventsData.reduce((acc, item) => {
    acc[item.id] = false;
    return acc;
  }, {});

  // State to manage checked status of checkboxes
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

  // Function to toggle the checked status of all checkboxes
  const handleSelectAll = () => {
    const areAllChecked = Object.values(checkedItems).every((isChecked) => isChecked);

    const newCheckedItems = {};
    ModuleFormsEventsData.forEach((item) => {
      newCheckedItems[item.id] = !areAllChecked;
    });
    setCheckedItems(newCheckedItems);
  };

  // Function to handle individual checkbox click
  const handleCheckboxClick = (id) => {
    setCheckedItems({
      ...checkedItems,
      [id]: !checkedItems[id]
    });
  };

  return (
    <>
      <Card
        sx={{
          width: { xs: '83vw', md: '100%' },
          overflow: { xs: 'scroll', md: 'hidden' },
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px'
        }}
      >
        <Box p={2} sx={{ borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Academic Sessions</Typography>
        </Box>
        <List sx={{ padding: 0 }}>
          <ListItem sx={{ padding: 0 }}>
            <Checkbox
              size="small"
              checked={Object.values(checkedItems).every((isChecked) => isChecked)}
              onChange={handleSelectAll}
            />
            <Typography variant="body1">Select All</Typography>
          </ListItem>
        </List>
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
        {ModuleFormsEventsData.map((item) => (
          <List key={item.id} sx={{ padding: 0, width:'200px' }}>
            <ListItem sx={{ padding: 0 }}>
              <Checkbox
                size="small"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckboxClick(item.id)}
              />
              <Typography variant="body1">{item.details.year}</Typography>
            </ListItem>
          </List>
        ))}
        </Box>
      </Card>
    </>
  );
}

export default AcademicSessions;
