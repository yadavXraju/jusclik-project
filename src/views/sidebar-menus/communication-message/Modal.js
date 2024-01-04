// BasicModal.js
import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <TextField sx={style} fullWidth label="fullWidth" id="fullWidth" />
    </Modal>
  );
}
