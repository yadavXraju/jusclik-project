import * as React from 'react';
import { Box, Button } from '@mui/material';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';

export default function DocumentTest() {
  const [uploadedFile, setUploadedFile] = React.useState(null);
  const [savedImages, setSavedImages] = React.useState([]);

  const handleDropImage = (imagePath) => {
    setUploadedFile(imagePath);
  };

  const handleSaveImage = () => {
    if (uploadedFile) {
      setSavedImages([...savedImages, uploadedFile]);
      setUploadedFile(null); // Clear the uploaded file after saving
    }
  };

  const UploadBox = ({ onDropImage }) => {
    const handleImageChange = (event) => {
      if (event.target.files.length > 0) {
        const imagePath = URL.createObjectURL(event.target.files[0]);
        if (typeof onDropImage === 'function') {
          onDropImage(imagePath);
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
        if (typeof onDropImage === 'function') {
          onDropImage(imagePath);
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
              width: '210px',
              border: '2px dotted rgb(33, 150, 243)',
              cursor: 'pointer',
              borderRadius: '5px',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={() => document.getElementById('imageInput').click()}
          >
            <CloudUploadTwoToneIcon sx={{ fontSize: 40, mt: '20px', color: 'rgb(33, 150, 243)' }} />
            <input id="imageInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
            {uploadedFile && (
              <img src={uploadedFile} alt="Uploaded File" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            )}
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <UploadBox onDropImage={handleDropImage} />
      </Box>
      {savedImages.map((image, index) => (
  <img key={index} src={image} alt="" style={{ maxWidth: '100%', maxHeight: '100px', margin: '0 5px' }} />
))}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant='outlined' onClick={handleSaveImage}>Save</Button>
      </Box>
    </>
  );
}
