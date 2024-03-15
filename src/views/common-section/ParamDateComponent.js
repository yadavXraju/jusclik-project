import React from 'react';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
// import TextField from '@mui/material/TextField';

const  ParameterizedDateComponent=({label, value, onChange,className="",customStyle={},id=""})=>{
    return (
        <>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id={id}
              label={label}
              inputFormat="dd/mm/yyyy"
              value={value}
              sx={customStyle}
              onChange={onChange}
              className={className}
              slotProps={{ textField: { variant: 'outlined' } }}
            />
          </LocalizationProvider>
          </>
  );
}

export default ParameterizedDateComponent;