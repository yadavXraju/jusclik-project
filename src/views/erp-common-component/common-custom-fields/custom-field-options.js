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

const availableSubtype = [
    { value: "singleline", label: "Single Line" },
    { value: "multiline", label: "Mulit Line" },
];

export const Email = ({ option, onChange }) => {
    return (
        <>
            <FormControlLabel control={<Checkbox name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox onChange={onChange} name="duplicates" checked={option?.duplicates} />} label="Do not allow duplicate values" />
            <FormControlLabel control={<Checkbox  onChange={onChange} name="encryptField" checked={option?.encryptField} />} label="Encrypt field" />
        </>
    )
}

export const CustomCheckbox = ({ option, onChange }) => {
    return (
        <>
            <FormControlLabel control={<Checkbox onChange={onChange} checked={option?.isMandatory} />} label="Checked" />
            <FormControlLabel control={<Checkbox onChange={onChange} checked={option?.isMandatory} />} label="Unchecked" />
        </>
    )
}

export const Phone = ({ option, onChange }) => {
    const [value, setValue] = useState();
    return (
        <>
            <ParamSelectList label="Sub Type" options={availableFieldType} value={value} setValue={setValue}
                size="medium" onChange={onChange}
            />
            <FormControlLabel control={<Checkbox onChange={onChange} checked={option?.isMandatory} />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox onChange={onChange} />} label="Do not allow duplicate values" />
            <FormControlLabel control={<Checkbox onChange={onChange} />} label="Encrypt field" />
        </>
    )
}

export const CustomText = ({ option, onChange }) => {
    return (
        <>
            <ParamSelectList label="Sub Type" options={availableSubtype} value={option?.subType} 
                size="medium" name="subType" onChange={onChange}
            />
            <FormControlLabel control={<Checkbox onChange={onChange} name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox onChange={onChange} name="duplicates" checked={option?.duplicates}/>} label="Do not allow duplicate values" />
            <FormControlLabel control={<Checkbox onChange={onChange} name="encryptField" checked={option?.encryptField}/>} label="Encrypt field" />
        </>
    )
}

export const CustomNumber = ({ option, onChange }) => {
    return (
        <>
            <FormControlLabel control={<Checkbox onChange={onChange} name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox onChange={onChange} name="duplicates" checked={option?.duplicates} />} label="Do not allow duplicate values" />
            <FormControlLabel control={<Checkbox onChange={onChange} name="encryptField" checked={option?.encryptField}/>} label="Encrypt field" />
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
        <>
            <FormControlLabel control={<Checkbox onChange={onChange}  name="isMandatory" checked={option?.isMandatory} />} label="Mandatory Field" />
            <FormControlLabel control={<Checkbox onChange={onChange} name="duplicates" checked={option?.duplicates} />} label="Do not allow duplicate values" />
        </>
    )
}

export const CustomDate = ({ option, onChange }) => {
    return (
        <>
            <ParamSelectList label="Sub Type" options={availableFieldType} value={value} setValue={setValue}
                size="medium" onChange={onChange}
            />
            <FormControlLabel control={<Checkbox onChange={onChange} option={option} />} label="Mandatory Field" />
        </>
    )
}