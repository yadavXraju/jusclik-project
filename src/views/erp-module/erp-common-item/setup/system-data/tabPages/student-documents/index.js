import React from 'react'
import ParamTable from 'views/common-section/ParamTable';


const tableHeading=[
  {
    id:1,
    tabHeading:"records"
  },
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
  }
]
	
const data=[
  {
    "id": 1,
    "records": "R001",
    "sudentDocuments": "Document A",
    "onlineDoc": "documentA",
    "offlineDoc": "Physical Document A",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",
    "singleParent": true,
    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T12:00:00Z"
  },
  {
    "id": 2,
    "records": "R002",
    "sudentDocuments": "Document B",
    "onlineDoc": "documentB",
    "offlineDoc": "Physical Document B",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",
    "singleParent": false,
    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T12:15:00Z"
  },
  {
    "id": 3,
    "records": "R003",
    "sudentDocuments": "Document C",
    "onlineDoc": "documentC",
    "offlineDoc": "Physical Document C",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",
    "singleParent": true,
    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T12:30:00Z"
  },
  {
    "id": 4,
    "records": "R004",
    "sudentDocuments": "Document D",
    "onlineDoc": "documentD",
    "offlineDoc": "Physical Document D",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",
    "singleParent": false,
    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T12:45:00Z"
  },
  {
    "id": 5,
    "records": "R005",
    "sudentDocuments": "Document E",
    "onlineDoc": "documentE",
    "offlineDoc": "Physical Document E",
    "showOn": "Student Portal",
    "shwoOnParent": "Parent Portal",
    "singleParent": true,
    "AcademicYearFrom": "2023",
    "AcademicYearTo": "2024",
    "CreatedBy": "Admin",
    "CreatedON": "2024-03-04T13:00:00Z"
  }
]


const StudentDocuments = () => {
  return (
    <>
       <ParamTable columns={tableHeading} data={data}/>
    </>
    )

}

export default StudentDocuments