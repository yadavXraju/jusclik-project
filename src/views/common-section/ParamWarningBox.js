import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

const Alerts = ({ label, severity,customStyle={}}) => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        } sx={customStyle}>{label}</Alert>
    </Collapse>
  );
}

export default Alerts;

