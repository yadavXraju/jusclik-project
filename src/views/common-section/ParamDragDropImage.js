import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import { Typography } from '@mui/material';
///import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';

const UploadBox = ({ onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // =========== Function to handle image change ============
  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      const imagePath = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(imagePath);
      // Check if onImageChange is a function before calling it
      if (typeof onImageChange === 'function') {
        onImageChange(imagePath);
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const imagePath = URL.createObjectURL(droppedFiles[0]);
      setSelectedImage(imagePath);
      // Check if onImageChange is a function before calling it
      if (typeof onImageChange === 'function') {
        onImageChange(imagePath);
      }
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          sx={{
            height: '110px',
            width: '110px',
            //background: '#EDE6F6',
            border: '2px dotted rgb(33, 150, 243)',
            borderRadius: '50%',
            cursor: 'pointer'
          }}
          onClick={() => document.getElementById('imageInput').click()}
        >
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
          ) : (
            <>
              <Box>
                {/* <LocalSeeOutlinedIcon sx={{ fontSize: 40, mt: '30px', color: '#5E35B1' }}/>
                <Box sx={{ fontSize: '14px' }}> Upload</Box> */}
                <CloudUploadTwoToneIcon sx={{ fontSize: 40, mt: '20px', color: 'rgb(33, 150, 243)' }} />
                <Box sx={{ fontSize: '14px' }}> Upload</Box>
              </Box>
              <input id="imageInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
            </>
          )}
        </Box>
        {/* Hidden file input field */}
        <input id="imageInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
      </Box>
       <Box pt={1.5}>
       <Typography variant="caption" align="center">
        Allowed &lsquo;image/*&rsquo; *.png, *.jpeg, *.jpg, 
      </Typography>
       </Box>
    </>
  );
};

export default UploadBox;
