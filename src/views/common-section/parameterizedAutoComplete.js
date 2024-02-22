import {FormControl,Autocomplete,TextField} from '@mui/material';

const ParameterizedAutoComplete = ({label,option,className="",onChange,customStyle}) => {
    console.log(customStyle);
    return (
        <FormControl sx={customStyle}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"       
                options={option}
                className={className}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </FormControl>
    )
}

export default ParameterizedAutoComplete;