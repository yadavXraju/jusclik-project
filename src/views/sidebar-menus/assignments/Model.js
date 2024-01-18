// Model.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
  Snackbar,
} from '@mui/material';

const Model = ({ openDialog, handleCloseDialog }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Container maxWidth="xl" xs={12} style={{ marginTop: 20 }}>
        <Dialog maxWidth="xs" open={openDialog} onClose={handleCloseDialog} fullWidth>
          <DialogTitle>Submit Files</DialogTitle>
          <DialogContent maxWidth="md" fullWidth>
            <Typography>Upload files</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Files submitted successfully!"
        />
      </Container>
    </>
  );
};

export default Model;
