// sangeeta

import React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

export default function SwitchButton({ isVerticalSwitchOn, onSwitchChange }) {
  // const handleSwitchChange = (event) => {
  //   if (event && event.target && typeof event.target.checked !== 'undefined') {
  //     onSwitchChange(event.target.checked);
  //   }
  // };

  return (
    <FormGroup sx={{marginRight:"0"}}>
      <FormControlLabel sx={{marginRight:"0"}}
        control={<Switch checked={isVerticalSwitchOn} onChange={onSwitchChange}  />}
      />
    </FormGroup>
  );
}
