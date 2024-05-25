import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import ParamTable from 'components/table-data-grid/Table';

const classDetails = ['a', 'b', 'c', 'd', 'e'];

const tableHeadings=[
  {
    id:2,
    tabHeading:"Student Documents {Restricted}"
  },
  {
    id:3,
    tabHeading:"Online Doc"
  },
  {
    id:4,
    tabHeading:"Offline Doc"
  },
  {
    id:5,
    tabHeading:"Show On Parent"
  },
  {
    id:6,
    tabHeading:"Single Parent "
  },
  {
    id:7,
    tabHeading:"Academic Year from"
  },
  {
    id:8,
    tabHeading:"Academic Year Upto"
  },
  {
    id:9,
    tabHeading:"Created by"
  },
  {
    id:10,
    tabHeading:"Created On"
  },
  {
    id:11,
    tabHeading:"Action"
  }
]
	
const data=[
  {
    "id": 1,
    "sudentDocuments": "Document A",
    "onlineDoc": "documentA",
    "offlineDoc": "Physical Document A",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",
    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T12:00:00Z"
  },
  {
    "id": 2,
    "sudentDocuments": "Document B",
    "onlineDoc": "documentB",
    "offlineDoc": "Physical Document B",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",
    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T12:15:00Z"
  },
  {
    "id": 3,
    "sudentDocuments": "Document C",
    "onlineDoc": "documentC",
    "offlineDoc": "Physical Document C",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",

    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T12:30:00Z"
  },
  {
    "id": 4,
    "sudentDocuments": "Document D",
    "onlineDoc": "documentD",
    "offlineDoc": "Physical Document D",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",
    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T12:45:00Z"
  },
  {
    "id": 5,
    "sudentDocuments": "Document E",
    "onlineDoc": "documentE",
    "offlineDoc": "Physical Document E",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",
    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T13:00:00Z"
  }
]


const DrawerContent = ({ toggleDrawer, handleChange, name}) => {
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Student Documents Restricted</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <TextField id={name} label="Student Documents {Restricted}" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                    <FormControlLabel
                        control={<Checkbox checked={classDetails?.show} onChange={handleChange} />}
                        label="Online Doc"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={classDetails?.show} onChange={handleChange} />}
                        label="Offline Doc"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={classDetails?.show} onChange={handleChange} />}
                        label="Show On Parent"
                    />
                    <ParameterizedAutoComplete option={classDetails} id="Single Parent?" label="Wing" onChange={(event, newData) => handleChange("entryCode", newData)} />
                    <ParameterizedAutoComplete option={classDetails} id="Academic Year Upto" label="Academic Year Upto
                     " onChange={(event, newData) => handleChange("entryCode", newData)} />
                    <ParameterizedAutoComplete option={classDetails} id="Academic Year From" label="Academic Year From
                    " onChange={(event, newData) => handleChange("entryCode", newData)} />
                </Box>
            </Box>
        </>
    );
};


const StudentDocuments = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
       <ParamTable columns={tableHeadings} data={data}/>
       <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
    )

}

export default StudentDocuments