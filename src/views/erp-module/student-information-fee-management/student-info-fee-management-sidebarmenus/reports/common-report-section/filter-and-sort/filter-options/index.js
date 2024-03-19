import React, { useState } from 'react';
import ParamSelectList from 'views/common-section/ParamSelectList';
import ParamChackboxSelectAll from 'views/common-section/ParamChackboxSelectAll';
import { Typography, Box, TextField } from '@mui/material';
import ParamDateComponent from 'views/common-section/ParamDateComponent';

const compareOptions = [
    {
        label: '= equal to',
        value: '= equal to'
    },
    {
        label: '# not equal to',
        value: '# not equal to'
    },
    {
        label: '< less than',
        value: '< less than'
    },
    {
        label: '> greater than',
        value: '> greater than'
    },
    {
        label: '<=less than equal to',
        value: '<=less than equal to'
    },
    {
        label: '>= greater than equal to',
        value: '>= greater than equal to'
    }
];

const studentFilterOption = [
    {
        label: "Filter from left",
        value: "Filter from left"
    },
    {
        label: "Filter from Right",
        value: "Filter from Right"
    },
    {
        label: "Filter from AnyWhere",
        value: "Filter from AnyWhere"
    }
]

const ClassOption = [
    { value: 'kg', label: 'KG' },
    { value: 'Nursery', label: 'Nursery' },
    { value: 'I', label: 'I' },
    { value: 'II', label: 'II' },
    { value: 'III', label: 'III' },
    { value: 'IV', label: 'IV' },
    { value: 'V', label: 'V' },
    { value: 'VI', label: 'VI' },
    { value: 'VII', label: 'VII' },
    { value: 'VIII', label: 'VIII' },
    { value: 'IX', label: 'IX' },
    { value: 'X', label: 'X' },
    { value: 'XI', label: 'XI' },
    { value: 'XII A', label: 'XII A' },
    { value: 'XIiiiii', label: 'XIiiiii' },
    { value: 'Play Group OLD', label: 'Play Group OLD' },
    { value: 'Va class', label: 'Va class' },
    { value: 'u class', label: 'u class' },
    { value: 'X OLD', label: 'X OLD' },
    { value: 'XII', label: 'XII' },
    { value: 'Grade 12', label: 'Grade 12' },
    { value: 'ANKUR/PRE-SCHOOL', label: 'ANKUR/PRE-SCHOOL' },
    { value: 'Grade III', label: 'Grade III' },
    { value: 'Pre school', label: 'Pre school' },
    { value: '10', label: '10' },
    { value: 'Passout', label: 'Passout' },
    { value: 'college first year', label: 'College First Year' }
];

const style = {
    mainStyle: {
        borderBottom: "2px solid #e5ebef",
        borderTop: "2px solid #e5ebef",
        borderRadius: "5px",
        height: "100px",
        width: "100%"
    },
    filterFieldStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        gap: "10px", width: "100%",
        alignItems: "center",
        marginTop: "10px"
    }
}

const FilterByEnquiryNo = () => {
    const [value, setValue] = useState();
    return (
        <Box sx={style?.mainStyle}>
            <Typography>Enq No</Typography>
            <Box sx={style?.filterFieldStyle}>
                <ParamSelectList label="= equal to" options={compareOptions} value={value} setValue={setValue} size="medium" customSytle={{ width: "110px" }} />
                <ParamDateComponent label="From" value={null} />
                <ParamDateComponent label="To" value={null} />
            </Box>
        </Box>
    )
}

const FilterByEnquiryDate = () => {
    const [value, setValue] = useState("");
    return (
        <Box sx={style?.mainStyle}>
            <Typography>Enq Date</Typography>
            <Box sx={style?.filterFieldStyle}>
                <ParamSelectList label="= equal to" options={compareOptions} value={value} setValue={setValue} size="medium" customSytle={{ width: "110px" }} />
                <ParamDateComponent label="From" value={null} />
                <ParamDateComponent label="To" value={null} />
            </Box>
        </Box>
    )
}

const FilterByStudentName = () => {
    const [value, setValue] = useState("Filter from Left");
    return (
        <Box sx={style?.mainStyle}>
            <Typography>Student Name</Typography>
            <Box sx={style?.filterFieldStyle}>
                <TextField id="outlined-basic" label="Input text to filter from" variant="outlined" />
                <ParamSelectList label={value} options={studentFilterOption} value={value} setValue={setValue} size="medium" />
            </Box>
        </Box>
    )
}

const FilterByClass = () => {
    const [value, setValue] = useState("Class");
    return (
        <Box sx={style?.mainStyle}>
            <Typography>Class</Typography>
            <Box sx={style?.filterFieldStyle}>
                <ParamSelectList label={value} options={compareOptions} value={value} setValue={setValue} size="medium" />
                <ParamChackboxSelectAll heading={value} data={ClassOption} value={value} setValue={setValue} size="medium" />
            </Box>
        </Box>
    )
}

const FilterBySection = () => {
    const [value, setValue] = useState("");
    return (
        <Box sx={style?.mainStyle}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Box sx={style?.filterFieldStyle}>
                <ParamSelectList label={value} options={compareOptions} value={value} setValue={setValue} size="medium" />
                <ParamChackboxSelectAll heading={value} data={ClassOption} value={value} setValue={setValue} size="medium" />
            </Box>
        </Box>
    )
}


export { FilterByEnquiryNo, FilterByEnquiryDate, FilterByStudentName, FilterByClass, FilterBySection };