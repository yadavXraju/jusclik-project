import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import StudentDetailsForm from './StudentDetails';

const FromPopUp = ({handleClose,open}) => {
  return (
    <div>
        <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle>Edit Student</DialogTitle>
        <DialogContent>
          <StudentDetailsForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FromPopUp
