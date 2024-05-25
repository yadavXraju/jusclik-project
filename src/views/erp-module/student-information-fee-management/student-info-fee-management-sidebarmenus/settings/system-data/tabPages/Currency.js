import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, TextField } from '@mui/material';
import ParamTable from 'components/table-data-grid/Table';


const tableHeadings=[
    {
      id:2,
      tabHeading:"Currency {Restricted}"
    },
    {
      id:3,
      tabHeading:"Created On"
    },
    {
      id:4,
      tabHeading:"Action"
    }
]

const data = [
  {
    id: 1,
    currency: "INR",
    createOn: "05.Feb.2019"
  },
  {
    id: 2,
    currency: "USD",
    createOn: "10.May.2020"
  },
  {
    id: 3,
    currency: "EUR",
    createOn: "15.Jul.2021"
  },
  {
    id: 4,
    currency: "GBP",
    createOn: "20.Oct.2022"
  },
  {
    id: 5,
    currency: "JPY",
    createOn: "25.Dec.2023"
  }
];



const DrawerContent = ({ toggleDrawer, handleChange, name}) =>{
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Currency Restricted</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px",display:"flex",flexDirection:"column",gap:"20px" }}>
                    <TextField id={name} label="Currency Restricted" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                </Box>
            </Box>
        </>
    );
};


const Currency = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
    <ParamTable columns={tableHeadings} data={data}/>
    <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
  )
}

export default Currency;