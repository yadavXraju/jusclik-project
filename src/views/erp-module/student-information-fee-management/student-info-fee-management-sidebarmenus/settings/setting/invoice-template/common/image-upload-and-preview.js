// OWNER : DAMANDEEP
import React from 'react';
import { Button, Typography, Box, Chip, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import BackupTwoToneIcon from '@mui/icons-material/BackupTwoTone';

const useStyles = makeStyles((theme) => ({
  uploadButton: {
    marginTop: theme.spacing(2)
  },
  fileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1)
  }
}));

const DragAndDropFile = ({stateHandler, updatekey,selectedFile}) => {
  const classes = useStyles();

  const handleFileChange = (event) => {
    stateHandler(updatekey,event.target.files[0])
  };
  
  const handleDeleteFile = () => {
  stateHandler(updatekey,null)
  };

  const handleFileDrop = (event) => {
    const droppedFile = event.dataTransfer.files[0];   
    stateHandler(updatekey,droppedFile)
  };

  const truncateFileName = (fileName) => {
    const words = fileName.split(' ');
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + '...';
    } else {
      return fileName;
    }
  };

  return (
    <Grid container item display="flex" flexDirection="column">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
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
          sx={{width:'100%'}}
        >
          <input type="file" accept="image/*, video/*" onChange={handleFileChange} id="upload-media" style={{ display: 'none' }} />
          <Box
            sx={{
              border: '2px dashed #ccc',
              borderRadius: '8px',
              padding: '20px'
            }}
          >
            <Grid>
              <BackupTwoToneIcon sx={{ width: '50px', height: '50px', opacity: '0.5' }} />
              <Typography variant="body1" sx={{ fontWeight: 'bold', paddingTop: '12px' }}>
                Drag & Drop a File Here
              </Typography>

              <Button
                variant="contained"
                color="primary"
                component="span"
                className={classes.uploadButton}
                onClick={() => document.getElementById('upload-media').click()}
                style={{ marginTop: '25px' }}
              >
                Upload File
              </Button>
            </Grid>
          </Box>
        </Box>

        {selectedFile && (
          <Box className={classes.fileContainer} style={{ width: '100px', marginTop: '20px' }}>
            <Chip label={truncateFileName(selectedFile.name)} variant="outlined" onDelete={handleDeleteFile}>
              <Typography variant="body1">{selectedFile.name}</Typography>
              <IconButton color="secondary" onClick={handleDeleteFile}>
                <CloseIcon />
              </IconButton>
            </Chip>
          </Box>
        )}
      </Box>
    </Grid>

    //   </div>
    // </div>
  );
};

export default DragAndDropFile;
