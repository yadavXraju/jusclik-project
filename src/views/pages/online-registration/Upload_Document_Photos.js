import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

function Upload_Document_Photos({handleClick}) {
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


  const handleSubmit =(tab)=>{
    handleClick(tab)
  }

  return (
    <>
      <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
        <Paper sx={{ height: '86vh' }}>
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 10 : UPLOAD DOCUMENTS / PHOTOS{' '}
            </Typography>

            <Divider />
          </Box>
          <Box sx={{ padding: '1rem 2rem' }}>
            <Box sx={{ height: '4rem', background: '#d9edf7' }}>
              <Typography varient="h6" sx={{ color: 'black', padding: '1rem 1rem' }}>
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
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
              <Divider />
              <Box sx={{ padding: '2rem 2rem' }}>
                <Typography variant="h4">Passport</Typography>

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
                  <VisuallyHiddenInput type="file" />
                </Button>
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
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </Box>
                  <Divider />
                 
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ padding: '2rem 2rem' }}>
                    <Typography variant="h4">Mother</Typography>

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
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </Box>
                  <Divider />
                </Grid>
              </Grid>

              <Box sx={{ padding: '2rem 2rem' }}>
                    <Typography variant="h4">Father</Typography>

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
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </Box>
                  <Divider />

            </Grid>
          </Grid>

          <Box sx={{ paddingBottom: '2rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
                    <Button onClick={() => handleSubmit('eleven')}variant="contained" sx={{ height: '38px', width: '148px', marginLeft: 'auto' }}>
                        Upload and Next
                    </Button>
                </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default Upload_Document_Photos;
