import { createSlice } from '@reduxjs/toolkit';

const intialStudentDetailsData = [
  {
    id: 1,
    name: "Primary Details",
    sectionCode: 0,
    section: [
      {
        id:50,
        name: "Admission Details",
        subSection: [
          {
            name: "Admission No.",
            type: "text",
            selected: true,
            id: 2
          },
          {
            name: "Joining  Class",
            type: "text",
            selected: true,
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
        id:56,
        name: "Student Details",
        subSection: [
          {
            name: "First Name",
            type: "text",
            selected: true,
            id: 6
          },
          {
            name: "Middle Name",
            type: "text",
            selected: true,
            id: 10
          },
          {
            name: "Last Name",
            type: "text",
            selected: true,
            id: 11
          },
          {
            name: "Gender",
            type: "text",
            selected: true,
            id: 12
          },
          {
            name: "D.O.B",
            type: "date",
            selected: true,
            id: 13
          },
          {
            name: "Age",
            type: "text",
            selected: false,
            id: 14
          },
          {
            name: "Aadhaar No.",
            type: "text",
            selected: true,
            id: 15
          },
          {
            name: "PEN No.",
            type: "text",
            selected: false,
            id: 16
          },
        ]
      },
      {
        id:57,
        name: "Class Details",
        subSection: [
          {
            name: "Class",
            type: "text",
            selected: true,
            id: 21
          },
          {
            name: "Section",
            type: "text",
            selected: true,
            id: 22
          },
        ]
      },
      { 
        id:58,
        name: "Fee Details",
        subSection: [
          {
            name: "Category",
            type: "text",
            selected: true,
            id: 24
          },
          {
            name: "Pay Mode",
            type: "text",
            selected: true,
            id: 25
          },
          {
            name: "Concession",
            type: "text",
            selected: true,
            id: 26
          },
          {
            name: "Date",
            type: "date",
            selected: true,
            id: 27
          }
        ]
      },
    ]
  },
  {
    id: 400,
    name: "Other Details",
    sectionCode: 1,
    section: [
      {
        id:59,
        name: "Other Details",
        subSection: [
          {
            name: "Family Id",
            type: "text",
            selected: true,
            id: 28
          },
          {
            name: "Nationality",
            type: "text",
            selected: true,
            id: 29
          },
          {
            name: "Religion",
            type: "text",
            selected: true,
            id: 30
          },
          {
            name: "House",
            type: "text",
            selected: true,
            id: 31
          },
          {
            name: "Blood Group",
            type: "text",
            selected: true,
            id: 32
          },
          {
            name: "SRN. No.",
            type: "text",
            selected: true,
            id: 33
          }
        ]
      },
      {
        id:60,
        name: "Other Details2",
        subSection: [
          {
            name: "Family Id",
            type: "text",
            selected: true,
            id: 35
          },
          {
            name: "Nationality",
            type: "text",
            selected: true,
            id: 36
          },
          {
            name: "Religion",
            type: "text",
            selected: true,
            id: 37
          },
          {
            name: "House",
            type: "text",
            selected: true,
            id: 38
          },
          {
            name: "Blood Group",
            type: "text",
            selected: true,
            id: 39
          },
          {
            name: "SRN. No.",
            type: "text",
            selected: true,
            id: 40
          }

        ]
      }
    ]
  },
  {
    id: 480,
    name: "Custom Fields",
    sectionCode: 2,
    section: [
      {
        id:62,
        name: "Custom Fields",
        subSection: [
          {
            name: "name",
            type: "text",
            selected: true,
            id: 41
          },
          {
            name: "Class",
            type: "text",
            selected: true,
            id: 43
          },
          {
            name: "Admission Date",
            type: "text",
            selected: true,
            id: 44
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
    id:350,
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
    }]
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
      state.subGroups=[];
      const relevantItems = state.studentDetailsData.filter(item => item.name === section);
      relevantItems.forEach(item => {
        item.section.forEach(subItem => {
          state.subGroups.push({ label: subItem.name, value: subItem.name });
        });
      });
    },
  },
});


export const {
  addField,
  subGroupbyGroup
} = customizationSlice.actions;

export default customizationSlice.reducer;


