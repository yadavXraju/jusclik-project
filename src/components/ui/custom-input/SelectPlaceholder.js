import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

const ParamSelectPlaceholder = ({options,placeholder="", value, onChange, name="",rootStyle={},customStyle={}}) => {
    return (
            <FormControl  sx={rootStyle}>
                <Select
                    displayEmpty
                    name={name}
                    value={value}
                    sx={{...customStyle, '& .MuiSelect-select':{
                        display:'flex',
                        alignItems:'center',
                    } }}
                    onChange={onChange}
                    input={<OutlinedInput
                    />}
                >
                    <MenuItem disabled value="">
                        <em>{placeholder}</em>
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem
                            key={option?.value}
                            value={option?.value}
                            sx={{dispaly:"flex",alingItems:"center"}}
                         
                        >
                        {option.icon&&<Typography variant="text" sx={{marginRight:"5px", display:'flex'}}>{option.icon}</Typography>}
                        {option?.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
    )
}

export default ParamSelectPlaceholder
