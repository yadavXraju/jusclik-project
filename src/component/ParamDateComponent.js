// @Page Owner-Tarun Pandey
import React from 'react';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const  ParameterizedDateComponent=({label, name="",value, onChange,className="",customStyle={},id="", inputRef = null, disabled})=>{

  // ======== Convert value to a valid Date object using dayjs ==========
  const selectedDate = value ? dayjs(value) : null;

    return (
        <>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id={id}
              label={label}
              format="DD-MM-YYYY"
              value={selectedDate}
              disabled={disabled}
              sx={customStyle}
              onChange={onChange}
              className={className}
              slotProps={{ textField: { variant: 'outlined',name:name, inputRef: inputRef} }}
            />
          </LocalizationProvider>
          </>
  );
}

export default ParameterizedDateComponent; 