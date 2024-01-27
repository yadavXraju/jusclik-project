import { useState } from 'react';

const useDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSnackbarOpen(true);
    setOpenDialog(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  // return all functions
  return {
    openDialog,
    snackbarOpen,
    handleOpenDialog,
    handleCloseDialog,
    handleSnackbarClose,
  };
};

export default useDialog;



