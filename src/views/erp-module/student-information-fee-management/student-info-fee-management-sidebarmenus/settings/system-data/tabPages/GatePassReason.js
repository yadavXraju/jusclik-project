import React from 'react'
import Drawer from '@mui/material/Drawer';
import {Box,Button,Typography,TextField} from '@mui/material';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings=[
  {
    id:2,
    tabHeading:"Gate Pass Reasons"
  },
  {
    id:3,
    tabHeading:"Created by"
  },
  {
   id:4,
   tabHeading:"Created On"
  },
  {
    id:5,
    tabHeading:"Action"
  }
];


const data = [
  {
    id: 1,
    gatePass: "Umang Kumar",
    CreatedBy: "Umang Kumar",
    CreatedOn: "08.Feb.2024"
  },
  {
    id: 2,
    gatePass: "John Doe",
    CreatedBy: "John Doe",
    CreatedOn: "10.May.2024"
  },
  {
    id: 3,
    gatePass: "Alice Smith",
    CreatedBy: "Alice Smith",
    CreatedOn: "15.Jul.2024"
  },
  {
    id: 4,
    gatePass: "Emily Brown",
    CreatedBy: "Emily Brown",
    CreatedOn: "20.Oct.2024"
  },
  {
    id: 5,
    gatePass: "James Wilson",
    CreatedBy: "James Wilson",
    CreatedOn: "25.Dec.2024"
  }
];


const DrawerContent = ({ toggleDrawer, handleChange, name }) =>{
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Gate Pass Reasons</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px",display:"flex",flexDirection:"column",gap:"20px" }}>
                    <TextField id={name} label="Gate Pass Reasons" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                </Box>
            </Box>
        </>
    );
};



const GatePassReason = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
     <ParamTable columns={tableHeadings} data={data}/>
     <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default GatePassReason;