import React from 'react';
import { Button, FormControl, Grid, InputLabel } from '@mui/material';
import { Box } from '@mui/system';

const ImageUploadAndPreview = ({ label,stateHandler,updatekey,image }) => {
  const handleFileChange = (e) => {
    stateHandler(updatekey, e.target.files[0]);
  };

  const handleRemoveFile = () => {
    stateHandler(updatekey, null);
  };

  return (
      <Grid container spacing={1}rowSpacing={2} >
    <FormControl fullWidth>
        <Grid item md={12}>
          <Box  >
      <InputLabel>{label}</InputLabel>
          </Box>
        </Grid>
        <Grid item sx={{marginTop:'3rem'}}>
      {image && (
        <>
        <Box>
          <img src={URL.createObjectURL(image)} alt="Preview" style={{ maxWidth: 200,marginLeft:'1rem' }} />
        </Box>
            </>
        
      )}
        </Grid>
        <Grid item>
          <Box>
      <input
        id="background-image-upload"
        type="file"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <Button variant="contained" component="label" 
            sx={{ml:'1rem'}}
      
      >
        {image ? 'Change File' : 'Choose From Desktop'}
        <input
          type="file"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChange}
          
        />
      </Button>
      {image &&  <Button
            variant="contained"
            component='label'
            onClick={handleRemoveFile}
            sx={{ml:'1rem'}}
            >
            Remove
          </Button>}
          </Box>
        </Grid>
     
    
  
    </FormControl>
    </Grid>

  );
};

export default ImageUploadAndPreview;
