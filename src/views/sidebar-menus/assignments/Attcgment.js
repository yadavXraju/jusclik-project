import React from 'react'
import{  Dialog,
    DialogActions,
    DialogContent,
    Button,
    DialogTitle,
Typography,
Snackbar}
from "@mui/material"


function Attcgment({isOpen, onClose,snackOpen,snackBarClose }) {
  return (
    <>
      <Dialog maxWidth="xs" open={isOpen} onClose={onClose} fullWidth>
        <DialogTitle>Submit Files</DialogTitle>
        <DialogContent maxWidth="md" fullWidth >
          <Typography>Upload files</Typography>
          {/* Add your file upload component or form here */}
          {/* Example: <FileUploadComponent /> */}
          {/* Ensure to handle file submission logic */}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000} 
        onClose={snackBarClose}
        message="Files submitted successfully!"
      />
    </>
  )
}

export default Attcgment