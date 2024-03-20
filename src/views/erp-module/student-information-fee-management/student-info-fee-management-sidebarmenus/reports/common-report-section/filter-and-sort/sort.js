import React, { useState } from 'react'
import { Box, Paper} from '@mui/material';
import ParamSelectList from 'views/common-section/ParamSelectList';


const availableSorting = [
    { "value": "enqNo", "label": "Enq No" },
    { "value": "enqDate", "label": "Enq Date" },
    { "value": "studentName", "label": "Student Name" },
    { "value": "class", "label": "Class" },
    { "value": "section", "label": "Section" },
    { "value": "classSection", "label": "Class Section" },
    { "value": "gender", "label": "Gender" },
    { "value": "birthDate", "label": "Birth Date" },
    { "value": "age", "label": "Age (Today)" },
    { "value": "address", "label": "Address (Complete)" },
    { "value": "commPhone", "label": "Comm Phone (M)" },
    { "value": "commEmail", "label": "Comm Email" },
    { "value": "joinClass", "label": "Join Class" },
    { "value": "concessionCategory", "label": "Concession Category" },
    { "value": "fatherName", "label": "Father Name" },
    { "value": "motherName", "label": "Mother Name" },
    { "value": "nationality", "label": "Nationality" },
    { "value": "religion", "label": "Religion" },
    { "value": "previousSchool", "label": "Previous School" },
    { "value": "lastGradeCompleted", "label": "Last Grade Completed" },
    { "value": "guardianName", "label": "Guardian Name" },
    { "value": "guardianRelationship", "label": "Guardian Relationship" },
    { "value": "guardianPhone", "label": "Guardian Phone" },
    { "value": "guardianEmail", "label": "Guardian Email" }
]

const sortingOrder=[
    {
        value:"Ascending",
        label:"Ascending"
    },
    {
        value:"Descending",
        label:"Descending"
    }
]

const Sort = () => {
    const [value, setValue] = useState();
    return (
        <Paper>
            <Box sx={{ position: "relative", border: "1px solid #f0f5f8",marginLeft:"5%",width: "90%", marginTop: "20px" }}>
                <ParamSelectList label="Roll No" options={availableSorting} value={value} setValue={setValue} size="medium" customSytle={{ width: "100%" }} />
            </Box>
            <Box sx={{ position: "relative", border: "1px solid #f0f5f8",marginLeft:"5%",width: "90%", marginTop: "20px" }}>
                <ParamSelectList label="Ascending" options={sortingOrder} value={value} setValue={setValue} size="medium" customSytle={{ width: "100%" }} />
            </Box>
        </Paper>
    )
}

export default Sort;