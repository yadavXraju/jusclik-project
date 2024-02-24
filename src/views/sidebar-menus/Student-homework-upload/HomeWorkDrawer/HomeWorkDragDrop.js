import React, { useState } from 'react';
import { Button, Typography, Box, Chip, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import BackupTwoToneIcon from '@mui/icons-material/BackupTwoTone';

const useStyles = makeStyles((theme) => ({
  uploadButton: {
    marginTop: theme.spacing(2),
   
  },
  fileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
}));

const HomeWorkDragDrop = () => {
  const classes = useStyles();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const handleFileDrop = (event) => {
    const droppedFiles = event.dataTransfer.files;
    const filesArray = Array.from(droppedFiles);
    setSelectedFiles([...selectedFiles, ...filesArray]);
  };

  const truncateFileName = (fileName) => {
    const words = fileName.split(' ');
    if (words.length > 2) {
      return words.slice(0, 2).join(' ') + '...';
    } else {
      return fileName;
    }
  };

  return (
    <div style={{ paddingLeft: '11px', paddingRight: '5px' }}>
      <div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            paddingTop: '40px'
          }}
        >
          <Box
            htmlFor="upload-media"
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDragEnter={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleFileDrop(e);
            }}
          >
            <input
              type="file"
              accept="image/*, video/*"
              onChange={handleFileChange}
              id="upload-media"
              style={{ display: 'none' }}
              multiple // Enable multiple file selection
            />
            <Box
              sx={{
                border: '2px dashed #ccc',
                borderRadius: '8px',
                padding: '20px',
                width: { xs: '95vw', sm: '600px' },
                height: '200px'
              }}
            >
             <Grid>
             <BackupTwoToneIcon sx={{width:'50px', height:'50px', opacity:'0.5'}}/>
             <Typography variant="body1" sx={{ fontWeight: 'bold',paddingTop:'12px' }}>Drag & Drop Files Here</Typography>
             
              <Button
                 variant="contained"
                 color="primary"
                component="span"
                className={classes.uploadButton}
                onClick={() => document.getElementById('upload-media').click()}
                style={{ marginTop: '25px' }}
              >
                Upload Files
              </Button></Grid>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {selectedFiles.map((file, index) => (
              <Box key={index} className={classes.fileContainer} style={{ width: '100px', marginTop: '20px' }}>
                <Chip label={truncateFileName(file.name)} variant="outlined" onDelete={() => handleDeleteFile(index)}>
                  <Typography variant="body1">{file.name}</Typography>
                  <IconButton color="secondary" onClick={() => handleDeleteFile(index)}>
                    <CloseIcon />
                  </IconButton>
                </Chip>
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default HomeWorkDragDrop;
