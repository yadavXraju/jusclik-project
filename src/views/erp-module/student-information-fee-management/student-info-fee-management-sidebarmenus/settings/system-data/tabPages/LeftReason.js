import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings = [
  {
    id: 2,
    tabHeading: "Left Reasons {Restricted}"
  },
  {
    id: 3,
    tabHeading: "Type"
  },
  {
    id: 4,
    tabHeading: "	Created On"
  },
  {
    id: 5,
    tabHeading: "Action"
  }
];

const data = [
  {
    id: 1, 
    "leftReasons": "Transferred to other school",
    "type": "For Admission",
    "CreatedOn": "05.Feb.2019"
  },
  {
    id: 2,
    "leftReasons": "Moved to another city",
    "type": "For Admission",
    "CreatedOn": "10.May.2020"
  },
  {
    id: 3,
    "leftReasons": "Financial reasons",
    "type": "For Admission",
    "CreatedOn": "15.Jul.2021"
  },
  {
    id: 4,
    "leftReasons": "Health issues",
    "type": "For Admission",
    "CreatedOn": "20.Oct.2022"
  },
  {
    id: 5,
    "leftReasons": "Family relocation",
    "type": "For Admission",
    "CreatedOn": "25.Dec.2023"
  }
]



const DrawerContent = ({ toggleDrawer, handleChange, name }) =>{
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
                    <TextField id={name} label="Left Reasons {Restricted}" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                    <ParameterizedAutoComplete  id="Wing" label="Type" onChange={(event, newData) => handleChange("entryCode", newData)} />
                </Box>
            </Box>
        </>
    );
};


const LeftReason = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default LeftReason