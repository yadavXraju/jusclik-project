import React, { useState } from 'react';
import { Box, Card, Checkbox, List, ListItem, Typography } from '@mui/material';

function ParamChackboxSelectAll({ data, onSelect, heading }) {
  // ======== Initialize checkedItems with all checkboxes set to false ===========
  const initialCheckedItems = data.reduce((acc, item) => {
    acc[item.id] = false;
    return acc;
  }, {});

  // ============ State to manage checked status of checkboxes ===========
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

  // ============ Function to toggle the checked status of all checkboxes ==========
  const handleSelectAll = () => {
    const areAllChecked = Object.values(checkedItems).every((isChecked) => isChecked);

    const newCheckedItems = {};
    data.forEach((item) => {
      newCheckedItems[item.id] = !areAllChecked;
    });
    setCheckedItems(newCheckedItems);
  };

  // ======== Function to handle individual checkbox click ========
  const handleCheckboxClick = (id) => {
    setCheckedItems({
      ...checkedItems,
      [id]: !checkedItems[id]
    });
    onSelect(id);
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
          <Typography variant="h4">{heading}</Typography>
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
        {data.map((item) => (
          <List key={item.id} sx={{ padding: 0, width:'200px' }}>
            <ListItem sx={{ padding: 0 }}>
              <Checkbox
                size="small"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckboxClick(item.id)}
              />
              <Typography variant="body1">{item.details?.year}{item?.details?.class}{item.details?.libraryGroup}{item.details?.inventoryGroup}{item.details?.hostelGroup}</Typography>
            </ListItem>
          </List>
        ))}
        </Box>
      </Card>
    </>
  );
}

export default ParamChackboxSelectAll;
