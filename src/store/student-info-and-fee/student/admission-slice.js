import { createSlice } from '@reduxjs/toolkit';

const intialStudentDetailsData = [
  {
    id: 1,
    name: "Primary Details",
    sectionCode: 0,
    section: [
      {
        id: 2,
        name: "Admission Details",
        subSection: [
          {
            name: "Admission No.",
            type: "text",
            selected: false,
            id: 3
          },
          {
            name: "Joining  Class",
            type: "text",
            selected: false,
            id: 4
          },
          {
            name: "Joining  Date",
            type: "date",
            selected: true,
            id: 5
          }
        ]
      },
      {
        id: 6,
        name: "Student Details",
        subSection: [
          {
            name: "First Name",
            type: "text",
            selected: true,
            id: 7
          },
          {
            name: "Middle Name",
            type: "text",
            selected: true,
            id: 8
          },
          {
            name: "Last Name",
            type: "text",
            selected: true,
            id: 9
          },
          {
            name: "Gender",
            type: "text",
            selected: true,
            id: 10
          },
          {
            name: "D.O.B",
            type: "date",
            selected: true,
            id: 11
          },
          {
            name: "Age",
            type: "text",
            selected: true,
            id: 12
          },
          {
            name: "Aadhaar No.",
            type: "text",
            selected: true,
            id: 13
          },
          {
            name: "PEN No.",
            type: "text",
            selected: true,
            id: 14
          },
        ]
      },
      {
        id: 15,
        name: "Class Details",
        subSection: [
          {
            name: "Class",
            type: "text",
            selected: true,
            id: 16
          },
          {
            name: "Section",
            type: "text",
            selected: true,
            id: 17
          },
        ]
      },
      {
        id: 18,
        name: "Fee Details",
        subSection: [
          {
            name: "Category",
            type: "text",
            selected: true,
            id: 19
          },
          {
            name: "Pay Mode",
            type: "text",
            selected: true,
            id: 20
          },
          {
            name: "Concession",
            type: "text",
            selected: true,
            id: 21
          },
          {
            name: "Date",
            type: "date",
            selected: true,
            id: 22
          }
        ]
      },
    ]
  },
  {
    id: 23,
    name: "Other Details",
    sectionCode: 1,
    section: [
      {
        id: 24,
        name: "Other Details",
        subSection: [
          {
            name: "Family Id",
            type: "text",
            selected: true,
            id: 25
          },
          {
            name: "Nationality",
            type: "text",
            selected: true,
            id: 26
          },
          {
            name: "Religion",
            type: "text",
            selected: true,
            id: 27
          },
          {
            name: "House",
            type: "text",
            selected: true,
            id: 28
          },
          {
            name: "Blood Group",
            type: "text",
            selected: true,
            id: 29
          },
          {
            name: "SRN. No.",
            type: "text",
            selected: true,
            id: 30
          }
        ]
      },
      {
        id: 31,
        name: "Other Details2",
        subSection: [
          {
            name: "Family Id",
            type: "text",
            selected: true,
            id: 32
          },
          {
            name: "Nationality",
            type: "text",
            selected: true,
            id: 33
          },
          {
            name: "Religion",
            type: "text",
            selected: true,
            id: 34
          },
          {
            name: "House",
            type: "text",
            selected: true,
            id: 35
          },
          {
            name: "Blood Group",
            type: "text",
            selected: true,
            id: 36
          },
          {
            name: "SRN. No.",
            type: "text",
            selected: true,
            id: 37
          }

        ]
      }
    ]
  },
  {
    id: 38,
    name: "Address",
    sectionCode: 2,
    section: [
      {
        id: 39,
        name: "Current Address",
        subSection: [
          {
            name: "Address",
            type: "textarea",
            selected: true,
            id: 40
          },
          {
            name: "Country/Region",
            type: "text",
            selected: true,
            id: 41
          },
          {
            name: "City",
            type: "text",
            selected: true,
            id: 42
          },
          {
            name: "State",
            type: "text",
            selected: true,
            id: 43
          },
          {
            name: "Zip Code",
            type: "text",
            selected: true,
            id: 44
          },
        ]
      },
      {
        id: 45,
        name: "Permanent Address",
        subSection: [
          {
            name: "Address",
            type: "textarea",
            selected: true,
            id: 46
          },
          {
            name: "Country/Region",
            type: "text",
            selected: true,
            id: 47
          },
          {
            name: "City",
            type: "text",
            selected: true,
            id: 48
          },
          {
            name: "State",
            type: "text",
            selected: true,
            id: 49
          },
          {
            name: "Zip Code",
            type: "text",
            selected: true,
            id: 50
          },
        ]
      }
    ]
  },
  {
    id: 51,
    name: "Contact Person",
    sectionCode: 3,
    section: [
      {
        id: 52,
        name: "Contact Person",
        subSection: [
          {
            name: "Title",
            type: "text",
            selected: true,
            id: 53
          },
          {
            name: "First Name",
            type: "text",
            selected: true,
            id: 54
          },
          {
            name: "Last Name",
            type: "text",
            selected: true,
            id: 55
          },
          {
            name: "Relation",
            type: "text",
            selected: true,
            id: 56
          },
          {
            name: "Mobile",
            type: "text",
            selected: true,
            id: 57
          },
          {
            name: "Relation",
            type: "text",
            selected: true,
            id: 58
          },
          {
            name: "Mobile",
            type: "text",
            selected: true,
            id: 59
          },
          {
            name: "Email",
            type: "text",
            selected: true,
            id: 60
          },
          {
            name: "Education",
            type: "text",
            selected: true,
            id: 61
          },
          {
            name: "Occupation",
            type: "text",
            selected: true,
            id: 62
          },
          {
            name: "Company",
            type: "text",
            selected: true,
            id: 63
          },
          {
            name: "Designation",
            type: "text",
            selected: true,
            id: 64
          }, {
            name: "Address(office)",
            type: "text",
            selected: true,
            id: 65
          },
          {
            name: "Adhaar No",
            type: "text",
            selected: true,
            id: 66
          },
          {
            name: "PAN",
            selected: true,
            id: 67
          }
        ]
      }
    ]
  },
  {
    id: 68,
    name: "Custom Fields",
    sectionCode: 4,
    section: [
      {
        id: 69,
        name: "Custom Fields",
        subSection: [
          {
            name: "name",
            type: "text",
            selected: true,
            id: 70
          },
          {
            name: "Class",
            type: "text",
            selected: true,
            id: 71
          },
          {
            name: "Admission Date",
            type: "text",
            selected: true,
            id: 72
          },
        ]
      },
    ]
  }
];

const rows = [
  {
    id: 1,
    AdmNo: '8574',
    AdmDate: '01-May-2024',
    StudentName: 'Pawan',
    class: 'X',
    DOB: '03-05-2000',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 350,
    AdmNo: '8575',
    AdmDate: '02-Jun-2024',
    StudentName: 'John',
    class: 'V',
    DOB: '15-Apr-2001',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 360,
    AdmNo: '8576',
    AdmDate: '03-May-2024',
    StudentName: 'Jane',
    class: 'I',
    DOB: '20-Jun-1999',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 4,
    AdmNo: '8577',
    AdmDate: '04-May-2024',
    StudentName: 'Alice',
    class: 'VI',
    DOB: '25-Jan-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 5,
    AdmNo: '8578',
    AdmDate: '05-May-2024',
    StudentName: 'Bob',
    class: 'XI',
    DOB: '30-Mar-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 6,
    AdmNo: '8579',
    AdmDate: '06-May-2024',
    StudentName: 'Emily',
    class: 'IX',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 7,
    AdmNo: '8580',
    AdmDate: '07-Jun-2024',
    StudentName: 'Michael',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 8,
    AdmNo: '8581',
    AdmDate: '08-May-2024',
    StudentName: 'Sara',
    class: 'III',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 9,
    AdmNo: '8582',
    AdmDate: '09-May-2024',
    StudentName: 'David',
    class: 'V',
    DOB: '20-Jan-2001',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 10,
    AdmNo: '8583',
    AdmDate: '10-May-2024',
    StudentName: 'Jessica',
    class: 'II',
    DOB: '25-Mar-2002',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 11,
    AdmNo: '8584',
    AdmDate: '11-Jun-2024',
    StudentName: 'Peter',
    class: 'IV',
    DOB: '30-May-2003',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Inactive'
  },
  {
    id: 12,
    AdmNo: '8585',
    AdmDate: '12-May-2024',
    StudentName: 'Sophia',
    class: 'XII',
    DOB: '05-Jul-2000',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 13,
    AdmNo: '8586',
    AdmDate: '13-Jun-2024',
    StudentName: 'Daniel',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 14,
    AdmNo: '8587',
    AdmDate: '14-May-2024',
    StudentName: 'Olivia',
    class: 'VII',
    DOB: '15-Nov-1997',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 15,
    AdmNo: '8588',
    AdmDate: '15-May-2024',
    StudentName: 'William',
    class: 'VIII',
    DOB: '20-Jan-2001',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 16,
    AdmNo: '8589',
    AdmDate: '16-May-2024',
    StudentName: 'Isabella',
    class: 'X',
    DOB: '25-Mar-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 17,
    AdmNo: '8590',
    AdmDate: '17-Jun-2024',
    StudentName: 'Liam',
    class: 'II',
    DOB: '30-May-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 18,
    AdmNo: 8591,
    AdmDate: '18-May-2024',
    StudentName: 'Mia',
    class: 'LkG',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 19,
    AdmNo: '8592',
    AdmDate: '19-May-2024',
    StudentName: 'Ethan',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 20,
    AdmNo: '8593',
    AdmDate: '20-May-2024',
    StudentName: 'Ava',
    class: 'UKG',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 21,
    AdmNo: '8584',
    AdmDate: '11-Jun-2024',
    StudentName: 'Peter',
    class: 'IV',
    DOB: '30-May-2003',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Inactive'
  },
  {
    id: 22,
    AdmNo: '8585',
    AdmDate: '12-May-2024',
    StudentName: 'Sophia',
    class: 'XII',
    DOB: '05-Jul-2000',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 23,
    AdmNo: '8586',
    AdmDate: '13-Jun-2024',
    StudentName: 'Daniel',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 24,
    AdmNo: '8587',
    AdmDate: '14-May-2024',
    StudentName: 'Olivia',
    class: 'VII',
    DOB: '15-Nov-1997',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 25,
    AdmNo: '8588',
    AdmDate: '15-May-2024',
    StudentName: 'William',
    class: 'VIII',
    DOB: '20-Jan-2001',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 26,
    AdmNo: '8589',
    AdmDate: '16-May-2024',
    StudentName: 'Isabella',
    class: 'X',
    DOB: '25-Mar-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 27,
    AdmNo: '8590',
    AdmDate: '17-Jun-2024',
    StudentName: 'Liam',
    class: 'II',
    DOB: '30-May-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 28,
    AdmNo: '8591',
    AdmDate: '18-May-2024',
    StudentName: 'Mia',
    class: 'LkG',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 29,
    AdmNo: '8592',
    AdmDate: '19-May-2024',
    StudentName: 'Ethan',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 30,
    AdmNo: '8593',
    AdmDate: '20-May-2024',
    StudentName: 'Ava',
    class: 'UKG',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 31,
    AdmNo: '8574',
    AdmDate: '01-May-2024',
    StudentName: 'Pawan',
    class: 'X',
    DOB: '10-May-2000',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 32,
    AdmNo: '8575',
    AdmDate: '02-Jun-2024',
    StudentName: 'John',
    class: 'V',
    DOB: '15-Apr-2001',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 33,
    AdmNo: '8576',
    AdmDate: '03-May-2024',
    StudentName: 'Jane',
    class: 'I',
    DOB: '20-Jun-1999',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 34,
    AdmNo: '8577',
    AdmDate: '04-May-2024',
    StudentName: 'Alice',
    class: 'VI',
    DOB: '25-Jan-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 35,
    AdmNo: '8578',
    AdmDate: '05-May-2024',
    StudentName: 'Bob',
    class: 'XI',
    DOB: '30-Mar-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 36,
    AdmNo: '8579',
    AdmDate: '06-May-2024',
    StudentName: 'Emily',
    class: 'IX',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 37,
    AdmNo: '8580',
    AdmDate: '07-Jun-2024',
    StudentName: 'Michael',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 38,
    AdmNo: '8581',
    AdmDate: '08-May-2024',
    StudentName: 'Sara',
    class: 'III',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 39,
    AdmNo: '8582',
    AdmDate: '09-May-2024',
    StudentName: 'David',
    class: 'V',
    DOB: '20-Jan-2001',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 40,
    AdmNo: '8583',
    AdmDate: '10-May-2024',
    StudentName: 'Jessica',
    class: 'II',
    DOB: '25-Mar-2002',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 41,
    AdmNo: '8584',
    AdmDate: '11-Jun-2024',
    StudentName: 'Peter',
    class: 'IV',
    DOB: '30-May-2003',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Inactive'
  },
  {
    id: 42,
    AdmNo: '8585',
    AdmDate: '12-May-2024',
    StudentName: 'Sophia',
    class: 'XII',
    DOB: '05-Jul-2000',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 43,
    AdmNo: '8586',
    AdmDate: '13-Jun-2024',
    StudentName: 'Daniel',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 44,
    AdmNo: '8587',
    AdmDate: '14-May-2024',
    StudentName: 'Olivia',
    class: 'VII',
    DOB: '15-Nov-1997',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 45,
    AdmNo: '8588',
    AdmDate: '15-May-2024',
    StudentName: 'William',
    class: 'VIII',
    DOB: '20-Jan-2001',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 46,
    AdmNo: '8589',
    AdmDate: '16-May-2024',
    StudentName: 'Isabella',
    class: 'X',
    DOB: '25-Mar-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 47,
    AdmNo: '8590',
    AdmDate: '17-Jun-2024',
    StudentName: 'Liam',
    class: 'II',
    DOB: '30-May-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 48,
    AdmNo: '8591',
    AdmDate: '18-May-2024',
    StudentName: 'Mia',
    class: 'LkG',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 49,
    AdmNo: '8592',
    AdmDate: '19-May-2024',
    StudentName: 'Ethan',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 50,
    AdmNo: '8593',
    AdmDate: '20-May-2024',
    StudentName: 'Ava',
    class: 'UKG',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 51,
    AdmNo: '8574',
    AdmDate: '01-May-2024',
    StudentName: 'Pawan',
    class: 'X',
    DOB: '10-May-2000',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 52,
    AdmNo: '8575',
    AdmDate: '02-Jun-2024',
    StudentName: 'John',
    class: 'V',
    DOB: '15-Apr-2001',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Inactive'
  },
  {
    id: 53,
    AdmNo: '8576',
    AdmDate: '03-May-2024',
    StudentName: 'Jane',
    class: 'I',
    DOB: '20-Jun-1999',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 54,
    AdmNo: '8577',
    AdmDate: '04-May-2024',
    StudentName: 'Alice',
    class: 'VI',
    DOB: '25-Jan-2002',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Active'
  },
  {
    id: 55,
    AdmNo: '8578',
    AdmDate: '05-May-2024',
    StudentName: 'Bob',
    class: 'XI',
    DOB: '30-Mar-2003',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Inactive'
  },
  {
    id: 56,
    AdmNo: '8579',
    AdmDate: '06-May-2024',
    StudentName: 'Emily',
    class: 'IX',
    DOB: '05-Jul-2000',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  },
  {
    id: 57,
    AdmNo: '8580',
    AdmDate: '07-Jun-2024',
    StudentName: 'Michael',
    class: 'X',
    DOB: '10-Sep-1998',
    Studentcategory: 'OBC',
    House: 'Red',
    Status: 'Active'
  },
  {
    id: 58,
    AdmNo: '8581',
    AdmDate: '08-May-2024',
    StudentName: 'Sara',
    class: 'III',
    DOB: '15-Nov-1997',
    Studentcategory: 'SC',
    House: 'Yellow',
    Status: 'Inactive'
  },
  {
    id: 59,
    AdmNo: '8582',
    AdmDate: '09-May-2024',
    StudentName: 'David',
    class: 'V',
    DOB: '20-Jan-2001',
    Studentcategory: 'General',
    House: 'Green',
    Status: 'Active'
  },
  {
    id: 60,
    AdmNo: '8583',
    AdmDate: '10-May-2024',
    StudentName: 'Jessica',
    class: 'II',
    DOB: '25-Mar-2002',
    Studentcategory: 'General',
    House: 'Blue',
    Status: 'Active'
  }
];



const initialState = {
  studentDetailsData: intialStudentDetailsData,
  studentDetailsList: rows,
  section: [],
  subGroups: [
    {
      label: 'Admission Details',
      value: 'Admission Details'
    },
    {
      label: 'Student Details',
      value: 'Student Details'
    },
    {
      label: 'Class Details',
      value: 'Class Details'
    },
    {
      label: 'Fee Details',
      value: 'Fee Details'
    }],
  isChecked: true
};

const customizationSlice = createSlice({
  name: 'admission',
  initialState,
  reducers: {
    addField: (state, action) => {
      const updatedData = state.studentDetailsData.map((item) => {
        if (item.name === action.payload.group) {
          const updatedSections = item.section.map((section) => {
            if (section.name === action.payload.subGroup) {
              return {
                ...section,
                subSection: [
                  ...section.subSection,
                  { name: action.payload.label, ...action.payload.customTextl, selected: true }
                ]
              };
            }
            return section;
          });
          return { ...item, section: updatedSections };
        }
        return item;
      })
      state.studentDetailsData = updatedData;
    },
    subGroupbyGroup: (state, action) => {
      const section = action.payload;
      state.subGroups = [];
      const relevantItems = state.studentDetailsData.filter(item => item.name === section);
      relevantItems.forEach(item => {
        item.section.forEach(subItem => {
          state.subGroups.push({ label: subItem.name, value: subItem.name });
        });
      });
    },
    searchFilter: (state, action) => {
      const searchQuery = action.payload;
      if (!searchQuery)
        state.studentDetailsData = intialStudentDetailsData;

      const filterData =state.studentDetailsData.map((group) => {
        const matchGroup = group.name.toLowerCase().includes(searchQuery.toLowerCase());
        if (matchGroup) {
          return group;
        } 
        else {
          const matchSection = group.section.map((field) => {
            const matchField = field.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchItem = field.subSection.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchField || matchItem;
          });
          return {
            name: group.name,
            id: group.id,
            sectionCode: group.sectionCode,
            matchSection: matchSection.some(Boolean) 
          };
        }
      });
       state.section=filterData;
    },
    removeUsedFields: (state, action) => {
      const idToRemove = action.payload;
      console.log(idToRemove)
      state.studentDetailsData.forEach(section => {
        section.section.forEach(subSection => {
          subSection.subSection.forEach(field => {
            if (field.id === idToRemove) {
              field.selected = !field.selected;
            }
          });
        });
      });
    }
  },
});


export const {
  addField,
  subGroupbyGroup,
  searchFilter,
  removeUsedFields
} = customizationSlice.actions;

export default customizationSlice.reducer;


