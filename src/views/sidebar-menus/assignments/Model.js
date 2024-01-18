// // Model.jsx

// import React, { useState } from 'react';
// import {
//   Typography,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   Button,
//   DialogTitle,
//   Snackbar,
// } from '@mui/material';

// const Model = ({ openDialog, setOpenDialog }) => {
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   const handleCloseDialog = () => {
//     // Handle submission logic here
//     setSnackbarOpen(true); // Show a Snackbar notification

//     // Close the dialog
//     setOpenDialog(false);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <>
//       <Dialog maxWidth="xs" open={openDialog} onClose={handleCloseDialog} fullWidth>
//         <DialogTitle>Submit Files</DialogTitle>
//         <DialogContent maxWidth="md" fullWidth>
//           <Typography>Upload files</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={() => setSnackbarOpen(false)}
//         message="Files submitted successfully!"
//       />
//     </>
//   );
// };

// export default Model;
