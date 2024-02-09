import * as React from 'react';
import { FormGroup, FormControlLabel, Switch, Tooltip, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function SwitchButton({ isVerticalSwitchOn, onSwitchChange }) {
  const handleSwitchChange = (event) => {
    onSwitchChange(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        label={
          <React.Fragment>
            <Tooltip title="Enter Data verically">
              <IconButton size="small" color='primary'>
                <InfoOutlinedIcon />
              </IconButton>
            </Tooltip>
            
          </React.Fragment>
        }
        control={<Switch defaultChecked={isVerticalSwitchOn} onChange={handleSwitchChange} />}
      />
    </FormGroup>
  );
}
