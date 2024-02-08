import * as React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

export default function SwitchButton({ isVerticalSwitchOn, onSwitchChange }) {
  const handleSwitchChange = (event) => {
    onSwitchChange(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked={isVerticalSwitchOn} onChange={handleSwitchChange} />}
        label="Vertically"
      />
    </FormGroup>
  );
}
