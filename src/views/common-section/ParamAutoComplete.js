import {FormControl,Autocomplete,TextField} from '@mui/material';

const ParameterizedAutoComplete = ({label,option,className="",onChange,customStyle,id="combo-box-demo"}) => {
    return (
        <FormControl sx={customStyle}>
            <Autocomplete
                disablePortal
                id={id}      
                options={option}
                className={className}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </FormControl>
    )
}

export default ParameterizedAutoComplete;