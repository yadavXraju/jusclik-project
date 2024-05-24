import React from 'react'
import ParamTable from 'components/Table';
import DrawerContent from './DrawerContent';
import Drawer from '@mui/material/Drawer';

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