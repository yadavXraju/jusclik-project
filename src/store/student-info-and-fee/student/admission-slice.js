import { createSlice } from '@reduxjs/toolkit';

const studentDetailsData = [
    {
        id: 1,
        name: "Primary Details",
        sectionCode: 0,
        section: [
            {
                name: "Admission Details",
                subSection: [
                    {
                        name: "Admission No.",
                        type: "text",
                        selected:true,
                        id:1
                    },
                    {
                        name: "Admission Date",
                        type: "date",
                        selected:true,
                        id:2
                    },
                    {
                        name: "Joining  Class",
                        type: "text",
                        selected:true,
                        id:3
                    },
                    {
                        name: "Joining  Date",
                        type: "date",
                        selected:true,
                        id:4
                    }
                ]
            },
            {
                name: "Admission Details2",
                subSection: [
                    {
                        name: "Admission No.",
                        type: "text",
                        selected:true,
                        id:5
                    },
                    {
                        name: "Admission Date",
                        type: "date",
                        selected:true,
                        id:6
                    },
                    {
                        name: "Joining  Class",
                        type: "text",
                        selected:false,
                        id:7,
                    },
                    {
                        name: "Joining  Date",
                        type: "date",
                        selected:false,
                        id:8,
                    }
                ]
            },

            {
                name: "Student Details",
                subSection: [
                    {
                        name: "First Name",
                        type: "text",
                        selected:true,
                        id:9
                    },
                    {
                        name: "Middle Name",
                        type: "text",
                        selected:true,
                        id:10
                    },
                    {
                        name: "Last Name",
                        type: "text",
                        selected:true,
                        id:11
                    },
                    {
                        name: "Gender",
                        type: "text",
                        selected:true,
                        id:12
                    },
                    {
                        name: "D.O.B",
                        type: "date",
                        selected:true,
                        id:13
                    },
                    {
                        name: "Age",
                        type: "text",
                        selected:true,
                        id:14
                    },
                    {
                        name: "Aadhaar No.",
                        type: "text",
                        selected:true,
                        id:15
                    },
                    {
                        name: "PEN No.",
                        type: "text",
                        selected:true,
                        id:16
                    },
                    {
                        name: "abhishek",
                        type: "text",
                        selected:true,
                        id:17
                    },
                    {
                        name: "tarun",
                        type: "text",
                        selected:true,
                        id:18
                    },
                    {
                        name: "vikas",
                        type: "text",
                        selected:false,
                        id:19,
                    },
                    {
                        name:"suraj",
                        type:"text",
                        selected:false,
                        id:20
                    }
                ]
            },
            {
                name: "Class Details",
                subSection: [
                    {
                        name: "Class",
                        type: "text",
                        selected:true,
                        id:21
                    },
                    {
                        name: "Section",
                        type: "text",
                        selected:true,
                        id:22
                    },
                    {
                        name: "Vikas",
                        type: "text",
                        selected:true,
                        id:23
                    },
                ]
            },
            {
                name: "Fee Details",
                subSection: [
                    {
                        name: "Category",
                        type: "text",
                        selected:true,
                        id:24
                    },
                    {
                        name: "Pay Mode",
                        type: "text",
                        selected:true,
                        id:25
                    },
                    {
                        name: "Concession",
                        type: "text",
                        selected:true,
                        id:26
                    },
                    {
                        name: "date",
                        type: "date",
                        selected:true,
                        id:27
                    }
                ]
            },
        ]
    },
    {
        id: 1,
        name: "Other Details",
        sectionCode: 1,
        section: [
            {
                name: "Other Details",
                subSection: [
                    {
                        name: "Family Id",
                        type: "text",
                        selected:true,
                        id:28
                    },
                    {
                        name: "Nationality",
                        type: "text",
                        selected:true,
                        id:29
                    },
                    {
                        name: "Religion",
                        type: "text",
                        selected:true,
                        id:30
                    },
                    {
                        name: "House",
                        type: "text",
                        selected:true,
                        id:31
                    },
                    {
                        name: "Blood Group",
                        type: "text",
                        selected:true,
                        id:32
                    },
                    {
                        name: "SRN. No.",
                        type: "text",
                        selected:true,
                        id:33
                    },
                    {
                        name:"vikas",
                        type:"text",
                        selected:true,
                        id:34
                    }

                ]
            },
            {
                name: "Other Details2",
                subSection: [
                    {
                        name: "Family Id",
                        type: "text",
                        selected:true,
                        id:35
                    },
                    {
                        name: "Nationality",
                        type: "text",
                        selected:true,
                        id:36
                    },
                    {
                        name: "Religion",
                        type: "text",
                        selected:true,
                        id:37
                    },
                    {
                        name: "House",
                        type: "text",
                        selected:true,
                        id:38
                    },
                    {
                        name: "Blood Group",
                        type: "text",
                        selected:true,
                        id:39
                    },
                    {
                        name: "SRN. No.",
                        type: "text",
                        selected:true,
                        id:40
                    }

                ]
            }
        ]
    },
    {
        id: 3,
        name: "Custom Fields",
        sectionCode: 2,
        section: [
            {
                name: "Custom Fields",
                subSection: [
                      {
                        name:"name",
                        type:"text",
                        selected:true,
                        id:41
                      },
                      {
                        name:"Admission No.",
                        type:"text",
                        selected:true,
                        id:42
                      },
                      {
                        name:"Class",
                        type:"text",
                        selected:true,
                        id:43
                      },
                      {
                        name:"Admission Date",
                        type:"text",
                        selected:true,
                        id:44
                      },
                      {
                        name:"check",
                        type:"text",
                        selected:true,
                        id:45
                      }
                ]
            },
        ]
    }
];


const initialState = {
    studentDetailsData:studentDetailsData
  };
  
  const customizationSlice = createSlice({
    name: 'admission',
    initialState,
    reducers: {
    },
  });
  
  
  export const {
    menuOpen,
    setMenu,
    setFontFamily,
    setBorderRadius,
    setColorTheme,
    setColorThemeV2,
  } = customizationSlice.actions;
  
  export default customizationSlice.reducer;
  

