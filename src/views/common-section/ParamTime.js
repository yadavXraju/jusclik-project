import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const ParamTime = ({ label="", value=null, onChange,customStyle })=>{
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']} sx={customStyle}>
        <TimePicker
          label={label}
          value={value}
          onChange={onChange}
          sx={{width:"100%"}}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default ParamTime;
