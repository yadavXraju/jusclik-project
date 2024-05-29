// Page owner - Kulwinder Singh
// online Registration 

import React, { useState } from 'react';
import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'components/WarningDialog';

const UploadDocumentPhotos = ({ handleClick }) => {
  const [selectedFiles, setSelectedFiles] = useState({
    dateOfBirthProof: null,
    passport: null,
    studentPhoto: null,
    motherPhoto: null,
    fatherPhoto: null
  });
  const [itemtoDelte, setItemtoDelete] = useState();

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

  const [openWarning, setOpenWarning] = useState(false);
  const [warningContent, setWarningContent] = useState('');
  const [DeleteWarning, setDeleteWarning] = useState(false);

  const handleFileChange = (fieldName) => (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];

    // Check if the selected file type is allowed
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFiles((prevState) => ({
        ...prevState,
        [fieldName]: file
      }));
    } else {
      // Display an error message or handle invalid file type here
      setWarningContent('Invalid file type. Please select a PNG, JPG, JPEG, or PDF file.');
      setOpenWarning(true);
      // Optionally, you can clear the input field
      event.target.value = null;
    }
  };

  const handleSubmit = (tab) => {
    handleClick(tab);
  };

  console.log(() => {
    handleSubmit();
  });

  const DeleteUploadFiles = () => {
    if (DeleteWarning) {
      setSelectedFiles((prevState) => ({ ...prevState, [itemtoDelte]: null }));
      setDeleteWarning(false);
    }
  };

  const Res1300 = useMediaQuery('(max-width:1300px)');

  const Res500 = useMediaQuery('(max-width:500px)')

 let heightTypo = "4rem"

 if (Res1300) {
  heightTypo = "6rem"
 }

 if (Res500) {
  heightTypo = "8rem"
 }

  return (
    <>
      <Box sx={{ padding: '2rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: Res500?'17px':'20px' }}>
          STEP 10 : UPLOAD DOCUMENTS / PHOTOS
        </Typography>
        <Divider />
      </Box>
      <Box  sx={{ paddingTop:'1rem' , paddingBottom:'1rem' , paddingLeft:Res500?'1rem':'4rem' , paddingRight:Res500?'1rem':'4rem' }} container spacing={2}>
        <Box sx={{ height: heightTypo, background: '#d9edf7' }}>
          <Typography variant="h5" sx={{ color: 'black', padding: '1rem 1rem' ,fontSize: Res500?'12px':'14px'}}>
            All documents and photos are compulsory to upload except (optional). Kindly upload appropriate documents and photos (jpg, png
            and pdf). Once all documents are uploaded, then you can proceed to the final submission.
          </Typography>
        </Box>
      </Box>

      <Grid sx={{ overflowY: 'auto', height: '51vh' }}>
        <Grid  sx={{ paddingTop:'1rem' , paddingBottom:'1rem' , paddingLeft:Res500?'1rem':'4rem' , paddingRight:Res500?'1rem':'4rem' }} container spacing={0}>
          <Grid item md={12} lg={5} sm={12} xs={12}>
            <Typography variant="h3" sx={{ paddingLeft: '1.9rem', paddingBottom: '0.5rem' }}>
              Documents
            </Typography>
            <Divider />

            <Grid container spacing={1}>
              <Grid item lg={12} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    padding: '2rem 2rem',
                    textAlign: 'center',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                    Date Of Birth Proof
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      width="50%"
                      sx={{ marginTop: 'auto', marginBottom: 'auto' }} // Adjusted margin to center vertically
                      startIcon={<CloudUploadIcon />}
                    >
                      Choose File
                      <VisuallyHiddenInput type="file" onChange={handleFileChange('dateOfBirthProof')} />
                    </Button>
                    {selectedFiles.dateOfBirthProof && (
                      <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="body1">{selectedFiles.dateOfBirthProof.name}</Typography>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => {
                              setDeleteWarning(true), setItemtoDelete('dateOfBirthProof');
                            }}
                            size="small"
                          >
                            <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Divider />
              </Grid>

              <Grid item lg={12} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    padding: '2rem 2rem',
                    textAlign: 'center',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                    Passport
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      width="50%"
                      sx={{ marginTop: 'auto', marginBottom: 'auto' }} // Adjusted margin to center vertically
                      startIcon={<CloudUploadIcon />}
                    >
                      Choose File
                      <VisuallyHiddenInput type="file" onChange={handleFileChange('passport')} />
                    </Button>
                    {selectedFiles.passport && (
                      <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="body1">{selectedFiles.passport.name}</Typography>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => {
                              setDeleteWarning(true), setItemtoDelete('passport');
                            }}
                            size="small"
                          >
                            <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Divider />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Divider orientation="vertical" />
          </Grid>

          <Grid item  md={12} lg={5} sm={12} xs={12}>
            <Typography variant="h3" sx={{ paddingLeft: '1.9rem', paddingBottom: '0.5rem' }}>
              Photos
            </Typography>
            <Divider />

            <Grid container spacing={1}>
              <Grid item lg={12} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    padding: '2rem 2rem',
                    textAlign: 'center',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                    Student
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      width="50%"
                      sx={{ marginTop: 'auto', marginBottom: 'auto' }} // Adjusted margin to center vertically
                      startIcon={<CloudUploadIcon />}
                    >
                      Choose File
                      <VisuallyHiddenInput type="file" onChange={handleFileChange('studentPhoto')} />
                    </Button>
                    {selectedFiles.studentPhoto && (
                      <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="body1">{selectedFiles.studentPhoto.name}</Typography>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => {
                              setDeleteWarning(true), setItemtoDelete('studentPhoto');
                            }}
                            size="small"
                          >
                            <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Divider />
              </Grid>

              <Grid item lg={12} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    padding: '2rem 2rem',
                    textAlign: 'center',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                    Mother
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      width="50%"
                      sx={{ marginTop: 'auto', marginBottom: 'auto' }} // Adjusted margin to center vertically
                      startIcon={<CloudUploadIcon />}
                    >
                      Choose File
                      <VisuallyHiddenInput type="file" onChange={handleFileChange('motherPhoto')} />
                    </Button>
                    {selectedFiles.motherPhoto && (
                      <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="body1">{selectedFiles.motherPhoto.name}</Typography>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => {
                              setDeleteWarning(true), setItemtoDelete('motherPhoto');
                            }}
                            size="small"
                          >
                            <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Divider />
              </Grid>

              <Grid item lg={12} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    padding: '2rem 2rem',
                    textAlign: 'center',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                    Father
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      width="50%"
                      sx={{ marginTop: 'auto', marginBottom: 'auto' }} // Adjusted margin to center vertically
                      startIcon={<CloudUploadIcon />}
                    >
                      Choose File
                      <VisuallyHiddenInput type="file" onChange={handleFileChange('fatherPhoto')} />
                    </Button>
                    {selectedFiles.fatherPhoto && (
                      <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="body1">{selectedFiles.fatherPhoto.name}</Typography>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => {
                              setDeleteWarning(true), setItemtoDelete('fatherPhoto');
                            }}
                            size="small"
                          >
                            <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Divider />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={1}></Grid>

          {/* Warning Dialog Used for File Type */}
          <WarningDialog
            open={openWarning}
            onClose={() => setOpenWarning(false)}
            contentText={warningContent}
            onConfirm={() => setOpenWarning(false)}
            hideCancel={true}
          />

          {/* Warning Dialog Used for Delete File */}
          <WarningDialog
            open={DeleteWarning}
            onClose={() => setDeleteWarning(false)}
            contentText="Are you sure you want to delete this file?"
            onConfirm={() => DeleteUploadFiles(itemtoDelte)} // Remove the parentheses here
          />
        </Grid>
      </Grid>
    </>
  );
}

export default UploadDocumentPhotos;
