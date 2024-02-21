import React from 'react';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';

const  ParameterizedDateComponent=({label, value, onChange,width="",height="",className=""})=>{
    return (
        <>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={label}
              width={width}
              height={height}
              sx={{width:"200px"}}
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={onChange}
              className={className}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </>
  );
}

export default ParameterizedDateComponent;