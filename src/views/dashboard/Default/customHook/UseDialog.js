import { useState } from 'react';

const useDialog = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSnackbarOpen(true); // Show a Snackbar notification
    setOpenDialog(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return { snackbarOpen, openDialog, handleOpenDialog, handleOpen, handleClose, handleCloseDialog, handleSnackbarClose };
};

export default useDialog;
