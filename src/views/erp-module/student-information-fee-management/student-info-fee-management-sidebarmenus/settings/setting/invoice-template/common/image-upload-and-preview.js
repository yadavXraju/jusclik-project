import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ImageUploadAndPreview = ({ label, stateHandler, updatekey, image }) => {
  const handleFileChange = (e) => {
    stateHandler(updatekey, e.target.files[0]);
  };

  const handleRemoveFile = () => {
    stateHandler(updatekey, null);
  };

  return (
    <Grid container spacing={1} rowSpacing={2}>
        <Grid item xs={12} md='auto' >
        {!image&& <Typography variant="h5"  sx={{padding:'2rem',border:'1px solid'}}>{label}</Typography>}
        </Grid>
        <Grid item xs={12}>
          {image && (
            <Box>
                <img src={URL.createObjectURL(image)} alt="Preview" style={{ maxWidth: 200, marginLeft: '1rem' }} />
              </Box>
          )}
        </Grid>
        <Grid item >
          <Box>
            <Grid item>
            <input id="background-image-upload" type="file" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
            </Grid>
            <Grid container item spacing={2}>
              <Grid item>
            <Button variant="contained" component="label" >
              {image ? 'Change File' : 'Choose From Desktop'}
              <input type="file" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
            </Button>
                </Grid> 
            <Grid item>
            {image && (
              <Button variant="contained" component="label" onClick={handleRemoveFile} >
                Remove
              </Button>
            )}
            </Grid>
            </Grid>
          </Box>
        </Grid>
    </Grid>
  );
};

export default ImageUploadAndPreview;
