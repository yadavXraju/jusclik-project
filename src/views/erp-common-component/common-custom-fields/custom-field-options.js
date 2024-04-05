import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ParamSelectPlaceholder from 'views/common-section/ParamSelectPlaceholder';

// const availableFieldType = [
//     { value: "Picklist", label: "Picklist" },
//     { value: "Text", label: "Text" },
//     { value: "Numerical", label: "Numerical" },
//     { value: "Date", label: "Date" },
//     { value: "Currency", label: "Currency" },
//     { value: "Email", label: "Email" },
//     { value: "Phone", label: "Phone" },
//     { value: "URL", label: "URL" }
// ];

const availableSubtype = [
    { value: "singleline", label: "Single Line" },
    { value: "multiline", label: "Mulit Line" },
];

const availablePhoneLength = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
];

const dateoption = [
    { value: "Date and Time", label: "Date and Time" },
    { value: "Date", label: "Date" },
]

export const Email = ({ option, onChange }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <FormControlLabel control={<Checkbox name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox onChange={onChange} name="duplicates" checked={option?.duplicates} />} label="Do not allow duplicate values" />
            <FormControlLabel control={<Checkbox onChange={onChange} name="encryptField" checked={option?.encryptField} />} label="Encrypt field" />
        </Box>
    )
}

export const CustomCheckbox = ({ option, onChange }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <FormControlLabel control={<Checkbox onChange={onChange} checked={option?.isMandatory} />} label="Checked" />
            <FormControlLabel control={<Checkbox onChange={onChange} checked={option?.isMandatory} />} label="Unchecked" />
        </Box>
    )
}

export const Phone = ({ option, onChange }) => {
    return (
        <>
            <ParamSelectPlaceholder options={availablePhoneLength} value={option?.subType} onChange={onChange}
                name="subType" placeholder="Sub-type"
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                <FormControlLabel control={<Checkbox onChange={onChange} name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
                <FormControlLabel control={<Checkbox onChange={onChange} name="duplicates" checked={option?.duplicates} />} label="Do not allow duplicate values" />
                <FormControlLabel control={<Checkbox onChange={onChange} name="encryptField" checked={option?.encryptField} />} label="Encrypt field" />
            </Box>
        </>
    )
}

export const CustomText = ({ option, onChange }) => {
    return (
        <>
            <ParamSelectPlaceholder options={availableSubtype} value={option?.subType} onChange={onChange}
               name="subType" placeholder="Sub-type"
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                <FormControlLabel control={<Checkbox onChange={onChange} name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
                <FormControlLabel control={<Checkbox onChange={onChange} name="duplicates" checked={option?.duplicates} />} label="Do not allow duplicate values" />
                <FormControlLabel control={<Checkbox onChange={onChange} name="encryptField" checked={option?.encryptField} />} label="Encrypt field" />
            </Box>
        </>
    )
}

export const CustomNumber = ({ option, onChange }) => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                <FormControlLabel control={<Checkbox onChange={onChange} name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
                <FormControlLabel control={<Checkbox onChange={onChange} name="duplicates" checked={option?.duplicates} />} label="Do not allow duplicate values" />
                <FormControlLabel control={<Checkbox onChange={onChange} name="encryptField" checked={option?.encryptField} />} label="Encrypt field" />
            </Box>
        </>
    )
}

export const Currency = ({ option, onChange }) => {
    return (
        <>
            <FormControlLabel control={<Checkbox onChange={onChange} name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
        </>
    )
}

export const URL = ({ option, onChange }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <FormControlLabel control={<Checkbox onChange={onChange} name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox onChange={onChange} name="duplicates" checked={option?.duplicates} />} label="Do not allow duplicate values" />
        </Box>
    )
}

export const CustomDate = ({ option, onChange }) => {
    return (
        <>
             <ParamSelectPlaceholder options={dateoption} value={option?.subType} onChange={onChange}
               name="subType" placeholder="Sub-type"
            />
            <FormControlLabel control={<Checkbox onChange={onChange} name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
        </>
    )
}