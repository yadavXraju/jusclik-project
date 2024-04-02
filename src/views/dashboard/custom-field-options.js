import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ParamSelectList from 'views/common-section/ParamSelectList';

const availableFieldType = [
    { value: "Picklist", label: "Picklist" },
    { value: "Text", label: "Text" },
    { value: "Numerical", label: "Numerical" },
    { value: "Date", label: "Date" },
    { value: "Currency", label: "Currency" },
    { value: "Email", label: "Email" },
    { value: "Phone", label: "Phone" },
    { value: "URL", label: "URL" }
];

export const Email = () => {
    return (
        <>
            <FormControlLabel control={<Checkbox  />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox  />} label="Do not allow duplicate values" />
            <FormControlLabel control={<Checkbox  />} label="Encrypt field" />
        </>
    )
}

export const CustomCheckbox = () => {
    return (
        <>
            <FormControlLabel control={<Checkbox  />} label="Checked" />
            <FormControlLabel control={<Checkbox  />} label="Unchecked" />
        </>
    )
}

export const Phone = () => {
    const [value, setValue] = useState();
    return (
        <>
            <ParamSelectList label="Sub Type" options={availableFieldType} value={value} setValue={setValue}
                size="medium"
            />
            <FormControlLabel control={<Checkbox  />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox  />} label="Do not allow duplicate values" />
            <FormControlLabel control={<Checkbox  />} label="Encrypt field" />
        </>
    )
}

export const CustomText = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <ParamSelectList label="Sub Type" options={availableFieldType} value={value} setValue={setValue}
                size="medium"
            />
            <FormControlLabel control={<Checkbox  />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox  />} label="Do not allow duplicate values" />
            <FormControlLabel control={<Checkbox  />} label="Encrypt field" />
        </>
    )
}

export const CustomNumber = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <ParamSelectList label="Sub Type" options={availableFieldType} value={value} setValue={setValue}
                size="medium"
            />
            <FormControlLabel control={<Checkbox  />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox  />} label="Do not allow duplicate values" />
            <FormControlLabel control={<Checkbox  />} label="Encrypt field" />
        </>
    )
}

export const Currency = () => {
    return (
        <>
            <FormControlLabel control={<Checkbox  />} label="Mandatory Field" />
        </>
    )
}

export const URL = () => {
    return (
        <>
            <FormControlLabel control={<Checkbox  />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox  />} label="Do not allow duplicate values" />
        </>
    )
}

export const CustomDate = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <ParamSelectList label="Sub Type" options={availableFieldType} value={value} setValue={setValue}
                size="medium"
            />
            <FormControlLabel control={<Checkbox  />} label="Mandatory Field" />
        </>
    )
}