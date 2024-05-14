import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'views/common-section/WarningDialog';


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

  const [openWarning, setOpenWarning] = useState(false); 
  const [warningContent, setWarningContent] = useState("");
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

  console.log(()=>{
    handleSubmit()
  })

  const DeleteUploadFiles = () => {
    if (DeleteWarning) {
      setSelectedFiles((prevState) => ({ ...prevState, dateOfBirthProof: null }));
      setDeleteWarning(false); 
    }
  };
  return (
    <>
      <Box sx={{ padding: '2rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
          STEP 10 : UPLOAD DOCUMENTS / PHOTOS
        </Typography>
        <Divider />
      </Box>
      <Box sx={{ padding: '1rem 2rem' }}>
        <Box sx={{ height: '4rem', background: '#d9edf7' }}>
          <Typography variant="h5" sx={{ color: 'black', padding: '1rem 1rem' }}>
            All documents and photos are compulsory to upload except (optional). Kindly upload appropriate documents and photos (jpg, png
            and pdf). Once all documents are uploaded, then you can proceed to the final submission.
          </Typography>
        </Box>
      </Box>

      <Grid sx={{ padding: '1rem 4rem' }} container spacing={0}>
        <Grid item xs={5}>
          <Typography variant="h3" sx={{ paddingLeft: '1.9rem', paddingBottom: '0.5rem' }}>
            Documents
          </Typography>
          <Divider />

          <Box sx={{ padding: '2rem 2rem' }}>
            <Typography variant="h4">Date Of Birth Proof</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
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
                <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <Typography variant="body1">{selectedFiles.dateOfBirthProof.name}</Typography>
                  <Tooltip title="Delete">
                  <IconButton onClick={() => setDeleteWarning(true)} size="small">
  <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
</IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
          </Box>
          <Divider />

          <Box sx={{ padding: '2rem 2rem' }}>
            <Typography variant="h4">Passport</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
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
                <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <Typography variant="body1">{selectedFiles.passport.name}</Typography>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => setSelectedFiles((prevState) => ({ ...prevState, passport: null }))} size="small">
                      <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
          </Box>
          <Divider />
        </Grid>

        <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Divider orientation="vertical" />
        </Grid>

        <Grid item xs={5}>
          <Typography variant="h3" sx={{ paddingLeft: '1.9rem', paddingBottom: '0.5rem' }}>
            Photos
          </Typography>
          <Divider />
          <Box sx={{ padding: '2rem 2rem' }}>
            <Typography variant="h4">Student</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
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
                <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <Typography variant="body1">{selectedFiles.studentPhoto.name}</Typography>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => setSelectedFiles((prevState) => ({ ...prevState, studentPhoto: null }))} size="small">
                      <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
          </Box>
          <Divider />
          <Box sx={{ padding: '2rem 2rem' }}>
            <Typography variant="h4">Mother</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
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
                <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <Typography variant="body1">{selectedFiles.motherPhoto.name}</Typography>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => setSelectedFiles((prevState) => ({ ...prevState, motherPhoto: null }))} size="small">
                      <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
          </Box>
          <Divider />
          <Box sx={{ padding: '2rem 2rem' }}>
            <Typography variant="h4">Father</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
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
                <Box sx={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <Typography variant="body1">{selectedFiles.fatherPhoto.name}</Typography>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => setSelectedFiles((prevState) => ({ ...prevState, fatherPhoto: null }))} size="small">
                      <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
          </Box>
          <Divider />
        </Grid>

        <Grid item xs={1}></Grid>

        {/* Warning Dialog Used for File Type */}
      <WarningDialog 
        open={openWarning} 
        onClose={() => setOpenWarning(false)} 
        contentText={warningContent} 
        onConfirm={() => setOpenWarning(false)} 
        hideCancel ={true}
      />

 {/* Warning Dialog Used for Delete File */}
   <WarningDialog 
  open={DeleteWarning} 
  onClose={() => setDeleteWarning(false)}
  contentText="Are you sure you want to delete this file?"
  onConfirm={DeleteUploadFiles} // Remove the parentheses here
/>
      </Grid>
    </>
  );
}

export default Upload_Document_Photos;


