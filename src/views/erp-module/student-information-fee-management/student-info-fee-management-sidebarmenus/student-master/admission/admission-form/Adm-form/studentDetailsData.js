const data = [
    { 
        id:1,
        name: "Primary Details",
        icon:"@mui/icons-material/HomeWorkTwoTone",
        section: [
            {
                name: "Admission Details",
                subSection: [
                    {  
                        name: "Admission No.",
                        type: "text",
                    },
                    {   
                        name: "Admission Date",
                        type: "date",
                    },
                    {   
                        name: "Joining  Class",
                        type: "text",
                    },
                    {   
                        name: "Joining  Date",
                        type: "date",
                    },
                ]
            },
            {
                name: "Student Details",
                subSection: [
                    {  
                        name: "First Name",
                        type: "text",
                    },
                    {   
                        name: "Middle Name",
                        type: "text",
                    },
                    {   
                        name: "Last Name",
                        type: "text",
                    },
                    {   
                        name: "Gender",
                        type: "text",
                    },
                    {  
                        name: "D.O.B",
                        type: "date",
                    },
                    {   
                        name: "Age",
                        type: "text",
                    },
                    {   
                        name: "Aadhaar No.",
                        type: "text",
                    },
                    {   
                        name: "PEN No.",
                        type: "text",
                    },
                ]
            },
            {
                name: "Class Details",
                subSection: [
                    {  
                        name: "Class",
                        type: "text",
                    },
                    {   
                        name: "Section",
                        type: "text",
                    },
                ]
            },
            {
                name: "Fee Details",
                subSection: [
                    {  
                        name: "Category",
                        type: "text",
                    },
                    {   
                        name: "Pay Mode",
                        type: "text",
                    },
                    {  
                        name: "Concession",
                        type: "text",
                    },
                ]
            },
            {
                name: "Sibling Details",
                siblingDetails:{
                    name:"Sibling",
                }
            }
        ]
    }
];

export default data;