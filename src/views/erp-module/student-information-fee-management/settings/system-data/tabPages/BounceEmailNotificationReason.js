import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings = [
  {
    id: 1,
    tabHeading: "Records"
  },
  {
    id: 2,
    tabHeading: "Bounce Email Notification Reason {Restricted}"
  },
  {
    id: 3,
    tabHeading: "Created On"
  },
  {
    id:4,
    tabHeading:"Action"
  }
];

const data = [
    {
      id: 1,
      "records": "R001",
      "BounceEmail": "example1@example.com",
      "CreatedOn": "2024-03-04T12:00:00Z"
    },
    {
      id: 2,
      "records": "R002",
      "BounceEmail": "example2@example.com",
      "CreatedOn": "2024-03-04T12:15:00Z"
    },
    {
      id: 3,
      "records": "R003",
      "BounceEmail": "example3@example.com",
      "CreatedOn": "2024-03-04T12:30:00Z"
    },
    {
      id: 4,
      "records": "R004",
      "BounceEmail": "example4@example.com",
      "CreatedOn": "2024-03-04T12:45:00Z"
    },
    {
      id: 5,
      "records": "R005",
      "BounceEmail": "example5@example.com",
      "CreatedOn": "2024-03-04T13:00:00Z"
    }
  ];


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
                    <TextField id={name} label="Bounce Email Notification" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
            
                </Box>
            </Box>
        </>
    );
};


const BounceEmailNotification = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default BounceEmailNotification
