
import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  IconButton,
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Chip,
  Grid
} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BackupTwoToneIcon from '@mui/icons-material/BackupTwoTone';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  },
  uploadButton: {
    marginTop: theme.spacing(2)
  },
  fileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1)
  }
}));

const steps = ['Enter Details', 'Upload Media', 'Review'];

// Dummy data: Mapping of classes to student names
const classToStudents = {
  'I': ['John', 'Alice', 'Bob'],
  'II': ['Sarah', 'David', 'Emma'],
  'III': ['Michael', 'Olivia', 'William'],
  'IV': ['Jhon', 'Alex', 'Maxwell'],
  'V': ['Jackson', 'Roman', 'Broke'],
};

const CreateNewDetails = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [albumName, setAlbumName] = useState('');
  const [className, setClassName] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };



  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChangeAlbumName = (event) => {
    setAlbumName(event.target.value);
  };

  const handleChangeClassName = (event) => {
    const selectedClass = event.target.value;
    setClassName(selectedClass);
    // Set all student names when a class is selected
    setSelectedStudents(classToStudents[selectedClass] || []);
  };

  const handleChangeStudent = (student) => () => {
    const selectedIndex = selectedStudents.indexOf(student);
    let newSelectedStudents = [];

    if (selectedIndex === -1) {
      newSelectedStudents = newSelectedStudents.concat(selectedStudents, student);
    } else if (selectedIndex === 0) {
      newSelectedStudents = newSelectedStudents.concat(selectedStudents.slice(1));
    } else if (selectedIndex === selectedStudents.length - 1) {
      newSelectedStudents = newSelectedStudents.concat(selectedStudents.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedStudents = newSelectedStudents.concat(selectedStudents.slice(0, selectedIndex), selectedStudents.slice(selectedIndex + 1));
    }

    setSelectedStudents(newSelectedStudents);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  const handleReview = () => {
    setActiveStep(2);
  };

  const handleFileDrop = (event) => {
    const droppedFiles = event.dataTransfer.files;
    const filesArray = Array.from(droppedFiles);
    setSelectedFiles([...selectedFiles, ...filesArray]);
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
    <div>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ paddingTop: '20px' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && (
          <div>
            <Box sx={{ width: { xs: '92vw', sm: '600px' }}}>
            <Box sx={{ paddingLeft: '12px', paddingRight: '20px', paddingTop: '20px' }}>
              <TextField
                label="Album Name"
                id="album-name"
                value={albumName}
                onChange={handleChangeAlbumName}
                fullWidth
                className={classes.formControl}
              />
            </Box>
            <Box sx={{ paddingBottom: '12px', paddingLeft: '12px', paddingRight: '20px', paddingTop: '6px' }}>
              <FormControl className={classes.formControl}>
                <InputLabel id="class-name-label" htmlFor="class-name-select">
                  Select Class
                </InputLabel>
                <Select
                  labelId="class-name-label"
                  id="class-name-select"
                  label="Select Class"
                  value={className}
                  onChange={handleChangeClassName}
                  fullWidth
                >
                  {Object.keys(classToStudents).map((className) => (
                    <MenuItem key={className} value={className}>
                      {className}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {classToStudents[className] && (
              <Box sx={{ paddingBottom: '15px', paddingLeft: '20px', paddingRight: '15px' }}>
                <Paper elevation={2} sx={{ border: '1px solid #ccc', p: '12px' }}>
                  <FormControl component="fieldset">
                    <Box sx={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedStudents.length === classToStudents[className].length}
                            onChange={(event) => {
                              const isChecked = event.target.checked;
                              if (isChecked) {
                                setSelectedStudents(classToStudents[className] || []);
                              } else {
                                setSelectedStudents([]);
                              }
                            }}
                          />
                        }
                        label="Select All"
                      />
                    </Box>
                    {classToStudents[className].map((student) => (
                      <FormControlLabel
                        key={student}
                        control={
                          <Checkbox
                            checked={selectedStudents.indexOf(student) !== -1}
                            onChange={handleChangeStudent(student)}
                            name={student}
                          />
                        }
                        label={student}
                      />
                    ))}
                  </FormControl>
                </Paper>
              </Box>
            )}
            <Box sx={{ paddingBottom: '12px', paddingLeft: '20px', paddingRight: '15px' }}>
              <TextField
                label="Description"
                id="description"
                multiline
                rows={4}
                value={description}
                onChange={handleChangeDescription}
                fullWidth
              />
            </Box>
            </Box>
            </div>
        )}
        {activeStep === 1 && (
          // Upload Files or media start
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
                    width: { xs: '92vw', sm: '600px' },
                    height: '200px'
                  }}
                >
                  <Grid>
                    <BackupTwoToneIcon sx={{ width: '50px', height: '50px', opacity: '0.5' }} />
                    <Typography variant="body1" sx={{ fontWeight: 'bold', paddingTop: '12px' }}>
                      Drag & Drop Files Here
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      className={classes.uploadButton}
                      onClick={() => document.getElementById('upload-media').click()}
                      style={{ marginTop: '25px' }}
                    >
                      Upload Files
                    </Button>
                  </Grid>
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
          // Upload Files or media End
        )}
        {activeStep === 2 && (
          // Review Last step start
          <div>
            <Box sx={{width: { xs: '92vw', sm: '600px' }}}>
            <Box sx={{ padding: '20px', border: '1px solid #ccc', marginTop: '30px' }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Album Name:</span>
                      </TableCell>
                      <TableCell>{albumName}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Class:</span>
                      </TableCell>
                      <TableCell>{className}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Student Names:</span>
                      </TableCell>
                      <TableCell>{selectedStudents.join(', ')}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Description:</span>
                      </TableCell>
                      <TableCell>{description}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <div style={{ overflowX: 'auto', padding: '20px', overflowY: 'hidden',  width: { xs: '92vw', sm: '600px' } }}>
              <div style={{ display: 'flex' }}>
                {selectedFiles.map((file, index) => (
                  <div key={index} style={{ flex: '0 0 auto', marginRight: '10px', width: '100%', maxWidth: '200px' }}>
                    <div className={classes.fileContainer} style={{ position: 'relative', width: '100%', height: '150px' }}>
                      <img src={URL.createObjectURL(file)} alt={file.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteFile(index)}
                        style={{ position: 'absolute', top: '4px', right: '4px' }}
                      >
                        <CloseIcon sx={{ color: 'white', backgroundColor: 'black', borderRadius: '18px', padding: '3px' }} />
                      </IconButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </Box>
            </div>
          // Review Last step start
        )}

        <div>
          {activeStep === steps.length - 1 ? (
            <>
              <Box sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'end' }}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Post
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'end' }}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                {activeStep === 1 ? (
                  <Button variant="contained" color="primary" onClick={handleReview}>
                    Review
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                  </Button>
                )}
              </Box>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateNewDetails;

