import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const ParamTime=()=>{
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{width:"40px"}}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="Time picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default ParamTime;