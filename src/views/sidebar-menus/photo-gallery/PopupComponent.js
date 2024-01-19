// PopupComponent.jsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid } from '@mui/material';
import ImageSlider from './ImageSlider';


const PopupComponent = ({ isOpen, onClose, data }) => {
  

  return (
    <Dialog open={isOpen} onClose={onClose} height="400px" >
      <DialogTitle>{data?.title}</DialogTitle>
      <DialogContent style={{ overflow: 'hidden',background:"rgba(0,0,0,0.2)", margin:'10px', paddingTop:'20px' }}>
        {data && (
          <>
            <ImageSlider images={data.sliderImg} />
            <Grid container sx={{display:'flex',justifyContent:'flex-start'}}>
              <Typography sx={{color:'black'}}>{data?.description}</Typography>
              <Typography sx={{color:'black'}}>Date: {data?.date}</Typography>
            </Grid>
          </>
        )}
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




