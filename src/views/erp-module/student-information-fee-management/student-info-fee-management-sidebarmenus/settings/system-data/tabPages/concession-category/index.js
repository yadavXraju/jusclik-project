import React from 'react'
import ParamTable from 'views/erp-common-component/ParamTable';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';


const tableHeadings= [
  {
    id: 2,
    tabHeading: "Concession"
  },
  {
    id: 3,
    tabHeading: "Category"
  },
  {
    id: 4,
    tabHeading: "Academic"
  },
  {
    id: 5,
    tabHeading: "Year Upto"
  }, {
    id: 6,
    tabHeading: "Approval"
  }, {
    id: 7,
    tabHeading: "Email"
  }, {
    id: 8,
    tabHeading: "Approval Based"
  },
  {
    id: 9,
    tabHeading: "Concession Type"
  }, {
    id: 10,
    tabHeading: "Created by"
  }, {
    id: 11,
    tabHeading: "Created On"
  },{
    id:12,
    tabHeading:"Action"
  }
]

const data=[
  {
    "id": 1,
    "Concession": "50%",
    "Category": "Scholarship",
    "Academic": "High School",
    "YearUpTo": "2024",
    "Approval": "Pending",
    "Email": "student1@example.com",
    "ApprovalBased": "Grades",
    "ConcessionType": "Tuition",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  },
  {
    "id": 2,
    "Concession": "25%",
    "Category": "Financial Aid",
    "Academic": "Undergraduate",
    "YearUpTo": "2023",
    "Approval": "Approved",
    "Email": "student2@example.com",
    "ApprovalBased": "Income",
    "ConcessionType": "Books",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  },
  {
    "id": 3,
    "Concession": "10%",
    "Category": "Grant",
    "Academic": "Graduate",
    "YearUpTo": "2025",
    "Approval": "Denied",
    "Email": "student3@example.com",
    "ApprovalBased": "Merit",
    "ConcessionType": "Housing",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  },
  {
    "id": 4,
    "Concession": "75%",
    "Category": "Fellowship",
    "Academic": "PhD",
    "YearUpTo": "2026",
    "Approval": "Approved",
    "Email": "student4@example.com",
    "ApprovalBased": "Research Proposal",
    "ConcessionType": "Stipend",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  },
  {
    "id": 5,
    "Concession": "15%",
    "Category": "Scholarship",
    "Academic": "High School",
    "YearUpTo": "2024",
    "Approval": "Pending",
    "Email": "student5@example.com",
    "ApprovalBased": "Grades",
    "ConcessionType": "Tuition",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  },
  {
    "id": 6,
    "Concession": "30%",
    "Category": "Financial Aid",
    "Academic": "Undergraduate",
    "YearUpTo": "2023",
    "Approval": "Approved",
    "Email": "student6@example.com",
    "ApprovalBased": "Income",
    "ConcessionType": "Books",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  },
  {
    "id": 7,
    "Concession": "20%",
    "Category": "Grant",
    "Academic": "Graduate",
    "YearUpTo": "2025",
    "Approval": "Denied",
    "Email": "student7@example.com",
    "ApprovalBased": "Merit",
    "ConcessionType": "Housing",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  },
  {
    "id": 8,
    "Concession": "60%",
    "Category": "Fellowship",
    "Academic": "PhD",
    "YearUpTo": "2026",
    "Approval": "Approved",
    "Email": "student8@example.com",
    "ApprovalBased": "Research Proposal",
    "ConcessionType": "Stipend",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  },
  {
    "id": 9,
    "Concession": "40%",
    "Category": "Scholarship",
    "Academic": "High School",
    "YearUpTo": "2024",
    "Approval": "Pending",
    "Email": "student9@example.com",
    "ApprovalBased": "Grades",
    "ConcessionType": "Tuition",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  },
  {
    "id": 10,
    "Concession": "35%",
    "Category": "Financial Aid",
    "Academic": "Undergraduate",
    "YearUpTo": "2023",
    "Approval": "Approved",
    "Email": "student10@example.com",
    "ApprovalBased": "Income",
    "ConcessionType": "Books",
    "Createdby": "Admin",
    "CreatedOn": "2024-03-04"
  }
]


const ConcessionCategory = ({ toggleAddDrawer, toggleDrawer }) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  )
}

export default ConcessionCategory;


