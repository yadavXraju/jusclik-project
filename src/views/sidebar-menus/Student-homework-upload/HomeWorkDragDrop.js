import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Typography, IconButton } from '@mui/material';
import { AttachFile, Audiotrack, Description, PictureAsPdf, Theaters, Clear } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
  dropzone: {
    border: '2px dashed #d7d7d7',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    textAlign: 'center',
    cursor: 'pointer',
  },
  icon: {
    fontSize: 24,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
  buttonContainer: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
  },
  fileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1), // Add margin bottom for spacing between files
  },
  fileName: {
    fontSize: 14, // Decreased font size for selected file text
    marginRight: theme.spacing(1),
    flexGrow: 1, // Allow file name to grow and take remaining space
  },
  deleteButton: {
    marginLeft: theme.spacing(1),
  },
}));

const HomeWorkDragDrop = () => {
  const classes = useStyles();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setSelectedFiles(Array.from(files));
  };

  const handleUpload = () => {
    console.log("Uploading files:", selectedFiles);
    setSelectedFiles([]);
  };

  const handleCancel = () => {
    setSelectedFiles([]);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const renderPreviewIcon = (file) => {
    if (file.type.startsWith("video/")) return <Theaters className={classes.icon} />;
    if (file.type.startsWith("audio/")) return <Audiotrack className={classes.icon} />;
    if (file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
      return <Description className={classes.icon} />;
    if (file.type === "application/pdf") return <PictureAsPdf className={classes.icon} />;
    return <AttachFile className={classes.icon} />;
  };

  return (
    <div style={{ marginTop: '4rem', paddingLeft:'11px', paddingRight:'5px' }}>
      <div
        className={classes.dropzone}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          accept="image/*, audio/*, video/*, application/pdf, .doc, .docx"
          className={classes.input}
          id="file-input"
          type="file"
          onChange={handleFileChange}
          multiple
        />
        <label htmlFor="file-input">
          <h3>Drag and drop a file here</h3>
          <Button variant="contained" component="span">
            Select Files
          </Button>
        </label>
        {selectedFiles.map((file, index) => (
          <div key={index} className={classes.fileContainer}>
            <Typography variant="body1" className={classes.fileName}>
              {file.name}
            </Typography>
            {renderPreviewIcon(file)}
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteFile(index)}
              className={classes.deleteButton}
            >
              <Clear />
            </IconButton>
          </div>
        ))}
      </div>
      {selectedFiles.length > 0 && (
        <div className={classes.buttonContainer}>
          <Button variant="contained" onClick={handleUpload}>
            Upload
          </Button>
          <Button variant="contained" color="error" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomeWorkDragDrop;
