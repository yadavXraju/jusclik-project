import React from 'react'
import ParamTable from 'views/common-section/ParamTable';


const tableHeading = [
  {
    id: 1,
    tabHeading: "Records"
  },
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
  }
]

const data=[
  {
    "id": 1,
    "records": "123",
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
    "records": "456",
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
    "records": "789",
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
    "records": "101112",
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
    "records": "131415",
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
    "records": "161718",
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
    "records": "192021",
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
    "records": "222324",
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
    "records": "252627",
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
    "records": "282930",
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


const ConcessionCategory = () => {
  return (
    <>
      <ParamTable columns={tableHeading} data={data} />
    </>
  )
}

export default ConcessionCategory;


