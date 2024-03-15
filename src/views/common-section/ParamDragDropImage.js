import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';

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
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        sx={{ height: '110px', width: '110px', border: '2px dotted #2196f3', borderRadius: '50%', cursor: 'pointer' }}
        onClick={() => document.getElementById('imageInput').click()}
      >
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
        ) : (
          <>
            <Box>
              <CloudUploadTwoToneIcon sx={{ fontSize: 40, mt: '25px', color: '#2196f3' }} />
              <Box sx={{ fontSize: '10px' }}> Drag & Drop</Box>
            </Box>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </>
        )}
      </Box>
      {/* Hidden file input field */}
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </Box>
  );
};

export default UploadBox;
