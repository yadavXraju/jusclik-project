import React from 'react';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';

const  ParameterizedDateComponent=({label, value, onChange,className="",customStyle={}})=>{
    return (
        <>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={label}
              inputFormat="dd/mm/yyyy"
              value={value}
              sx={customStyle}
              onChange={onChange}
              className={className}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </>
  );
}

export default ParameterizedDateComponent;