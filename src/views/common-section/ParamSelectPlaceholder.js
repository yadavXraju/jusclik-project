import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ParamSelectPlaceholder = ({options,placeholder="", value, onChange, name="",rootStyle={},customStyle={}}) => {
    return (
            <FormControl  sx={rootStyle}>
                <Select
                    displayEmpty
                    name={name}
                    value={value}
                    sx={customStyle}
                    onChange={onChange}
                    input={<OutlinedInput />}
                >
                    <MenuItem disabled value="">
                        <em>{placeholder}</em>
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem
                            key={option?.value}
                            value={option?.value}
                        >
                            {option?.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
    )
}

export default ParamSelectPlaceholder
