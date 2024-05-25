// Page Owner: Suraj
// Description: Attendance Warning Alert

import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

export default function WarningBox({ showWarning, onClose, totalStudents, absentCount }) {
  // Calculate the percentage of absent students
  const absentPercentage = (absentCount / totalStudents) * 100;

  return (
    <Box>
      <Collapse in={showWarning}>
        <Alert
          iconMapping={{
            warning: <WarningAmberOutlinedIcon fontSize="inherit" sx={{ color: '#ef7918' }} />,
          }}
          severity="warning"
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
          sx={{ mb: 1, backgroundColor: '#fff4e5', fontWeight: '600' }}
        >
          WARNING: {absentPercentage}% students have been marked ABSENT. Please verify!
        </Alert>
      </Collapse>
    </Box>
  );
}
