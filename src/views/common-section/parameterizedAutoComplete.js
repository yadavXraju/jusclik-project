import {FormControl,Autocomplete,TextField} from '@mui/material';

const ParameterizedAutoComplete = ({label,option,width="",height="",className="",onChange}) => {
    return (
        <FormControl >
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                height={height}
                width={width}
                sx={{ width: "200px" }}
                options={option}
                className={className}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </FormControl>
    )
}

export default ParameterizedAutoComplete;