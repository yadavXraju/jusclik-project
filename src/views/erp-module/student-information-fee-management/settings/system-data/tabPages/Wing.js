import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ParamTable from 'components/table-data-grid/Table';


const tableHeadings = [
  {
    id: 2,
    tabHeading: "Wing{Restricted}"
  },
  {
    id: 3,
    tabHeading: "Created by"
  },
  {
    id: 4,
    tabHeading: "Created On"
  },
  {
    id: 5,
    tabHeading: "Action"
  }
]

const data = [
  {
    "wing": "A",
    "createdBy": "John Doe",
    "createdOn": "2024-03-05"
  },
  {
    "wing": "B",
    "createdBy": "Jane Smith",
    "createdOn": "2024-03-06"
  },
  {
    "wing": "C",
    "createdBy": "Alice Johnson",
    "createdOn": "2024-03-07"
  },
  {
    "wing": "D",
    "createdBy": "Bob Brown",
    "createdOn": "2024-03-08"
  },
  {
    "wing": "E",
    "createdBy": "Emma Wilson",
    "createdOn": "2024-03-09"
  }
];



const DrawerContent=({ toggleDrawer, handleChange, name }) => {
  return (
    <>
      <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">{name}</Typography>
          <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        <Box sx={{marginTop:"20px"}}>
          <TextField id={name} label={name}  variant="outlined" 
          inputProps={{ maxLength: 10 }} 
          onChange={(event) => handleChange("address", event.target.value)} 
          fullWidth
          autoComplete="off"  />
        </Box>
      </Box>
    </>
  );
};



const Wing = ({ toggleAddDrawer, toggleDrawer}) => {
  const handleChange=()=>{

  }

  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent handleChange={handleChange} data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}"/>
      </Drawer>
    </>
  )
}

export default Wing;