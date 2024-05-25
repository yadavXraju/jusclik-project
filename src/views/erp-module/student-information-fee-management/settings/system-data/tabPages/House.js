import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, TextField } from '@mui/material';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings = [
  {
    id:1,
    tabHeading:"House"
  },
  {
    id: 2,
    tabHeading: "Created by"
  }, {
    id: 3,
    tabHeading: "Created On"
  },
  {
    id: 4,
    tabHeading: "Action"
  }
]

const data = [
  {
    "id": 1,
    "house":"shsoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "id": 2,
    "house":"shsoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "id": 3,
    "house":"hssoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "id": 4,
    "house":"hssoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "id": 5,
    "house":"hssoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }];

  

const DrawerContent = ({ toggleDrawer, handleChange, name}) =>{
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">{name}</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px",display:"flex",flexDirection:"column",gap:"20px" }}>
                    <TextField id={name} label="House" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                </Box>
            </Box>
        </>
    );
};


const House = ({ toggleAddDrawer, toggleDrawer }) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
  )
}

export default House