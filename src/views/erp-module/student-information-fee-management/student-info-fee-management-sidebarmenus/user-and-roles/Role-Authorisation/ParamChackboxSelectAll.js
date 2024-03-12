import React, { useState, useEffect } from 'react';
import { Box, Checkbox, List, ListItem, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';

function ParamChackboxSelectAll({ data, onSelect, heading }) {
   // ============ State to manage checked status of checkboxes ===========
   const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const initialCheckedItems = {};
    data.forEach(item => {
      initialCheckedItems[item.id] = item.details.checked || false;
    });
    setCheckedItems(initialCheckedItems);
  }, [data]);


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
      <Container>
        <Paper elevation={1}
          sx={{
            width: { xs: '83vw', md: '100%' },
            overflow: { xs: 'scroll', md: 'hidden' },
            // border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px'
          }}
        >
          <List sx={{ padding: 0, borderBottom:'1px solid #ccc' }}>
          <ListItem sx={{ padding: 0 }}>
            <Checkbox size="small" checked={Object.values(checkedItems).every((isChecked) => isChecked)} onChange={handleSelectAll} />
            <Typography variant="h4">{heading}</Typography>
          </ListItem>
        </List>
          <Box>
            {data.map((item) => (
              <List key={item.id} sx={{ padding: 0 }}>
                <ListItem sx={{ padding: 0 }}>
                  <Checkbox 
                   size="small"
                   checked={checkedItems[item.id] || false} 
                   onChange={() => handleCheckboxClick(item.id)} 
                  />
                  <Typography variant="body1">
                    {item.details?.year}
                    {item?.details?.class}
                    {item.details?.libraryGroup}
                    {item.details?.inventoryGroup}
                    {item.details?.hostelGroup}
                    {item.details?.PrivilegesName}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default ParamChackboxSelectAll;














// import React, { useState } from 'react';
// import { Box, Card, Checkbox, List, ListItem, Typography } from '@mui/material';
// import { Container } from '@mui/system';

// function ParamChackboxSelectAll({ data, onSelect, heading }) {
//   // ======== Initialize checkedItems with all checkboxes set to false ===========
//   const initialCheckedItems = data.reduce((acc, item) => {
//     acc[item.id] = false;
//     return acc;
//   }, {});

//   // ============ State to manage checked status of checkboxes ===========
//   const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

//   // ============ Function to toggle the checked status of all checkboxes ==========
//   const handleSelectAll = () => {
//     const areAllChecked = Object.values(checkedItems).every((isChecked) => isChecked);

//     const newCheckedItems = {};
//     data.forEach((item) => {
//       newCheckedItems[item.id] = !areAllChecked;
//     });
//     setCheckedItems(newCheckedItems);
//   };

//   // ======== Function to handle individual checkbox click ========
//   const handleCheckboxClick = (id) => {
//     setCheckedItems({
//       ...checkedItems,
//       [id]: !checkedItems[id]
//     });
//     onSelect(id);
//   };

//   return (
//     <>
//       <Container>
//         {/* <Box p={2} >
//           <Typography variant="h4">{heading}</Typography>
//         </Box> */}
//         <List sx={{ padding: 0 }}>
//           <ListItem sx={{ padding: 0 }}>
//             <Checkbox size="small" checked={Object.values(checkedItems).every((isChecked) => isChecked)} onChange={handleSelectAll} />
//             <Typography variant="body1">{heading}</Typography>
//           </ListItem>
//         </List>
//         <Card
//           sx={{
//             width: { xs: '83vw', md: '100%' },
//             overflow: { xs: 'scroll', md: 'hidden' },
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '10px'
//           }}
//         >
//           <Box>
//             {data.map((item) => (
//               <List key={item.id} sx={{ padding: 0, width: '200px' }}>
//                 <ListItem sx={{ padding: 0 }}>
//                   <Checkbox 
//                    size="small"
//                    //checked={checkedItems[item.id] || false} 
//                    checked={checkedItems[item.id] !== undefined ? checkedItems[item.id] : item.details.checked}
//                    onChange={() => handleCheckboxClick(item.id)} 
//                   />
//                   <Typography variant="body1">
//                     {item.details?.year}
//                     {item?.details?.class}
//                     {item.details?.libraryGroup}
//                     {item.details?.inventoryGroup}
//                     {item.details?.hostelGroup}
//                   </Typography>
//                 </ListItem>
//               </List>
//             ))}
//           </Box>
//         </Card>
//       </Container>
//     </>
//   );
// }

// export default ParamChackboxSelectAll;