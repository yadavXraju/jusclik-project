import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, TextField } from '@mui/material';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings=[
  {
    id:2,
    tabHeading:"Other"
  },
  {
    id:3,
    tabHeading:"Category"
  },
  {
    id:4,
    tabHeading:"Created by"
  },
  {
  id:5,
  tabHeading:"Created On"
 },{
  id:6,
  tabHeading:"Action"
 }
]

const data=[
  {
    "other": "Some data",
    "category": "Category A",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "other": "Another data",
    "category": "Category B",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "other": "Additional data",
    "category": "Category C",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "other": "Extra data",
    "category": "Category D",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "other": "More data",
    "category": "Category E",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }
];



const DrawerContent = ({ toggleDrawer, handleChange, name}) =>{
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Other Category</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px",display:"flex",flexDirection:"column",gap:"20px" }}>
                    <TextField id={name} label="Other Category" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                </Box>
            </Box>
        </>
    );
};


const OtherCategory = ({ toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data}/>
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} />
      </Drawer>  
    </>
  )
}

export default OtherCategory