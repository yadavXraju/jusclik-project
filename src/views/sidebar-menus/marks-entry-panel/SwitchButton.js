import React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

export default function SwitchButton({ isVerticalSwitchOn, onSwitchChange, autoFocusEnabled }) {
  const handleSwitchChange = (event) => {
    onSwitchChange(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked={isVerticalSwitchOn} onChange={handleSwitchChange} />}
      />
      {!autoFocusEnabled && (
        <input type="text" style={{ position: 'absolute', left: '-9999px' }} />
      )}
    </FormGroup>
  );
}
