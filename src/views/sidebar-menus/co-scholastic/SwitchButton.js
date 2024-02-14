import React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

export default function SwitchButton({ isVerticalSwitchOn, onSwitchChange }) {
  // const handleSwitchChange = (event) => {
  //   if (event && event.target && typeof event.target.checked !== 'undefined') {
  //     onSwitchChange(event.target.checked);
  //   }
  // };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={isVerticalSwitchOn} onChange={onSwitchChange} />}
      />
    </FormGroup>
  );
}
