import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function WarningBox({ showWarning, onClose }) {
  return (
    <Box>
      <Collapse in={showWarning}>
        <Alert
          severity="warning"
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 1, color: 'red' }}
        >
          WARNING: 100% Absent; Please verify !
        </Alert>
      </Collapse>
    </Box>
  );
}
