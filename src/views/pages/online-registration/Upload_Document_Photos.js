import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

function Upload_Document_Photos({ handleClick }) {
  const [selectedFiles, setSelectedFiles] = useState({
    dateOfBirthProof: null,
    passport: null,
    studentPhoto: null,
    motherPhoto: null,
    fatherPhoto: null
  });

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  });

  const handleFileChange = (fieldName) => (event) => {
    const file = event.target.files[0];
    setSelectedFiles(prevState => ({
      ...prevState,
      [fieldName]: file
    }));
  };

  const handleSubmit = (tab) => {
    handleClick(tab);
  };

  console.log(() => handleSubmit(() => {}));

  return (
    <>
      <Box sx={{ padding: '2rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
          {' '}
          STEP 10 : UPLOAD DOCUMENTS / PHOTOS{' '}
        </Typography>

        <Divider />
      </Box>
      <Box sx={{ padding: '1rem 2rem' }}>
        <Box sx={{ height: '4rem', background: '#d9edf7' }}>
          <Typography variant="h6" sx={{ color: 'black', padding: '1rem 1rem' }}>
            All documents and photos are compulsory to upload except (optional). Kindly upload appropriate documents and photos (jpg,
            png and pdf). Once all documents are uploaded, then you can proceed to the final submission.
          </Typography>
        </Box>
      </Box>

      <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
        <Grid item xs={4}>
          <Typography variant="h3">Documents</Typography>
          <Divider />

          <Box sx={{ padding: '2rem 2rem' }}>
            <Typography variant="h4">Date Of Birth Proof</Typography>

            <Box sx={{ position: 'relative' }}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                width="50%"
                sx={{ marginTop: '15px' }}
                startIcon={<CloudUploadIcon />}
              >
                Choose File
                <VisuallyHiddenInput type="file" onChange={handleFileChange('dateOfBirthProof')} />
              </Button>
              {selectedFiles.dateOfBirthProof && (
                <Box sx={{ position: 'absolute', top: '100%', left: 0 }}>
                  <Typography variant="body1">{selectedFiles.dateOfBirthProof.name}</Typography>
                </Box>
              )}
            </Box>
          </Box>
          <Divider />
          
          <Box sx={{ padding: '2rem 2rem' }}>
            <Typography variant="h4">Passport</Typography>

            <Box sx={{ position: 'relative' }}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                width="50%"
                sx={{ marginTop: '15px' }}
                startIcon={<CloudUploadIcon />}
              >
                Choose File
                <VisuallyHiddenInput type="file" onChange={handleFileChange('passport')} />
              </Button>
              {selectedFiles.passport && (
                <Box sx={{ position: 'absolute', top: '100%', left: 0 }}>
                  <Typography variant="body1">{selectedFiles.passport.name}</Typography>
                </Box>
              )}
            </Box>
          </Box>
          <Divider />
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h3">Photos</Typography>
          <Divider />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ padding: '2rem 2rem' }}>
                <Typography variant="h4">Student</Typography>

                <Box sx={{ position: 'relative' }}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    width="50%"
                    sx={{ marginTop: '15px' }}
                    startIcon={<CloudUploadIcon />}
                  >
                    Choose File
                    <VisuallyHiddenInput type="file" onChange={handleFileChange('studentPhoto')} />
                  </Button>
                  {selectedFiles.studentPhoto && (
                    <Box sx={{ position: 'absolute', top: '100%', left: 0 }}>
                      <Typography variant="body1">{selectedFiles.studentPhoto.name}</Typography>
                    </Box>
                  )}
                </Box>
              </Box>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ padding: '2rem 2rem' }}>
                <Typography variant="h4">Mother</Typography>

                <Box sx={{ position: 'relative' }}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    width="50%"
                    sx={{ marginTop: '15px' }}
                    startIcon={<CloudUploadIcon />}
                  >
                    Choose File
                    <VisuallyHiddenInput type="file" onChange={handleFileChange('motherPhoto')} />
                  </Button>
                  {selectedFiles.motherPhoto && (
                    <Box sx={{ position: 'absolute', top: '100%', left: 0 }}>
                      <Typography variant="body1">{selectedFiles.motherPhoto.name}</Typography>
                    </Box>
                  )}
                </Box>
              </Box>
              <Divider />
            </Grid>
          </Grid>

          <Box sx={{ padding: '2rem 2rem' }}>
            <Typography variant="h4">Father</Typography>

            <Box sx={{ position: 'relative' }}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                width="50%"
                sx={{ marginTop: '15px' }}
                startIcon={<CloudUploadIcon />}
              >
                Choose File
                <VisuallyHiddenInput type="file" onChange={handleFileChange('fatherPhoto')} />
              </Button>
              {selectedFiles.fatherPhoto && (
                <Box sx={{ position: 'absolute', top: '100%', left: 0 }}>
                  <Typography variant="body1">{selectedFiles.fatherPhoto.name}</Typography>
                </Box>
              )}
            </Box>
          </Box>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
}

export default Upload_Document_Photos;
