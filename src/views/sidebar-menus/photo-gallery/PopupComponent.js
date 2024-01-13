// PopupComponent.jsx
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component

const PopupComponent = ({ isOpen, onClose, data }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{data?.title}</DialogTitle>
      <DialogContent>
        <ImageSlider images={data?.sliderImg} />
        <div>
          <p>{data?.description}</p>
          <p>Date: {data?.date}</p>
        </div>
      </DialogContent>
        <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupComponent;


