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
  Box,Paper,
  Checkbox,FormControlLabel, InputLabel,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Delete } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  uploadButton: {
    marginTop: theme.spacing(2),
  },
  fileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
}));

const steps = ['Enter Details', 'Upload Media', 'Review'];

// Dummy data: Mapping of classes to student names
const classToStudents = {
  'Class I': ['John', 'Alice', 'Bob'],
  'Class II': ['Sarah', 'David', 'Emma'],
  'Class III': ['Michael', 'Olivia', 'William'],
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
      newSelectedStudents = newSelectedStudents.concat(
        selectedStudents.slice(0, selectedIndex),
        selectedStudents.slice(selectedIndex + 1)
      );
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

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && (
          <div>
            <Box sx={{ paddingLeft: '8px', paddingRight: '12px' }}>
              <TextField
                label="Album Name"
                id="album-name"
                value={albumName}
                onChange={handleChangeAlbumName}
                fullWidth
                className={classes.formControl}
              />
            </Box>
            <Box sx={{ paddingBottom: '12px', paddingLeft:'12px', paddingRight:'12px' }}>
              <FormControl className={classes.formControl}>
                <InputLabel id="class-name-label">Select Class</InputLabel>
                <Select labelId="class-name-label" id="class-name-select" label="Select Class" value={className} onChange={handleChangeClassName} fullWidth>
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
            <Box sx={{ paddingBottom: '12px' }}>
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
          </div>
        )}
        {activeStep === 1 && (
          <div>
            <input
              type="file"
              accept="image/*, video/*"
              onChange={handleFileChange}
              id="upload-media"
              style={{ display: 'none' }}
              multiple // Enable multiple file selection
            />
            <label htmlFor="upload-media">
              <Button variant="outlined" component="span" className={classes.uploadButton}>
                Upload Media
              </Button>
            </label>
            {selectedFiles.map((file, index) => (
              <div key={index} className={classes.fileContainer}>
                <Typography variant="body1">{file.name}</Typography>
                <IconButton color="secondary" onClick={() => handleDeleteFile(index)}>
                  <Delete />
                </IconButton>
              </div>
            ))}
          </div>
        )}
        {activeStep === 2 && (
          <div>
            <Typography>Album Name: {albumName}</Typography>
            <Typography>Class: {className}</Typography>
            <Typography>Student Names: {selectedStudents.join(', ')}</Typography>
            <Typography>Description: {description}</Typography>
            {selectedFiles.map((file, index) => (
              <div key={index} className={classes.fileContainer}>
                <Typography variant="body1">{file.name}</Typography>
                <IconButton color="secondary" onClick={() => handleDeleteFile(index)}>
                  <Delete />
                </IconButton>
              </div>
            ))}
          </div>
        )}
        <div>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Post
            </Button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateNewDetails;
