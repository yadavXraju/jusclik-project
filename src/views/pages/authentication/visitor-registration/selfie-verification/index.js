// import React from 'react'
import {
   Typography, Box, Paper,
   Button,
   Divider
} from '@mui/material';
// import UploadAvatar from './uploadAvatar';
import { css } from '../css'
import React, { useRef, useState } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
// import { Box } from '@mui/system';
// import {css} from '../css'
// import { Button } from '@mui/material';

const SelfieVerification = ({ step, handleSteps }) => {
   const videoRef = useRef(null);
   // const photoRef = useRef(null);
   const [stream, setStream] = useState(null);
   const [capturedImage, setCapturedImage] = useState(null);
   const [showCamera, setShowCamera] = useState(true); // State to toggle between camera and captured photo
   const [showCameraIcon, setShowCameraIcon] = useState(true); // State to toggle camera icon visibility
   const [showTakePhotoButton, setShowTakePhotoButton] = useState(true);
   const [showSubmitButton, setShowSubmitButton] = useState(false);


   const startCamera = () => {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
         .then(stream => {
            setStream(stream);
            videoRef.current.srcObject = stream;
            setShowCameraIcon(false); // Hide the camera icon when video starts
            setShowTakePhotoButton(true);
            setShowSubmitButton(false);
         })
         .catch(err => console.error(err));
   };

   const takePhoto = () => {

      const video = videoRef.current;
      const canvas = document.createElement('canvas'); // Create a new canvas element
      canvas.width = video.videoWidth; // Set canvas dimensions to video dimensions
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get the image data from canvas and set it in state
      const imageData = canvas.toDataURL('image/png');
      setCapturedImage(imageData);

      // Clean up: remove the temporary canvas element
      canvas.remove();
      // Hide the camera and show the captured photo
      setShowCamera(false);
      setShowTakePhotoButton(false);
      setShowSubmitButton(true);
   };
   const resetCamera = () => {
      setCapturedImage(null);
      setShowCamera(true);
      startCamera()
   };
   return (
      <>
         <Box sx={{ ...css.center }}>
            <Paper sx={{ ...css.mobilePaper, width: '100%' }} elevation={4}>
               <Box>
                  <Box sx={{ ...css.horizontalCenter, py: '1rem' }}>
                     <Typography variant="h6" sx={{ ...css.formTextColor, fontWeight: '400', sm: '14px' }}>Please upload your selfie</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ pt: '1rem' }}>
                     {/* selfie camera part */}
                     {/* <UploadAvatar step={step} handleSteps={handleSteps} /> */}
                     <>
                        <Box sx={{ ...css.horizontalCenter }}>
                           {showCamera ? showCameraIcon && (
                              <Box sx={{ width: '100px', height: '100px', backgroundColor: '#EDE6F6', borderRadius: '50%', border: '2px dotted #5E35B1', ...css.center }}>
                                 <CameraAltOutlinedIcon color='secondary' sx={{ height: '55px', width: '35px' }} onClick={startCamera} />
                              </Box>
                           ) : (
                              <Box sx={{ position: 'relative' }}>
                                 <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%', borderRadius: '12px' }} />
                                 {/* <Button variant="contained" color="primary" onClick={resetCamera} sx={{ position: 'absolute', bottom: '10px', right: '10px' }}>Retake Photo</Button> */}
                              </Box>
                           )}
                        </Box>
                        {stream && showCamera && (
                           <Box sx={{ ...css.horizontalCenter, display: 'flex', flexDirection: 'column', mt: '1rem' }}>
                              <video
                                 ref={videoRef}
                                 autoPlay
                                 muted
                                 style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
                              />
                              {showTakePhotoButton && (
                                 <Box>
                                    <Button sx={{ ...css.center, ...css.marginAuto, ...css.submitButton, ...css.button }} onClick={takePhoto}>
                                       Take Photo
                                    </Button>
                                 </Box>)}

                              {capturedImage && (
                                 <Box sx={{ ...css.horizontalCenter, mt: '1rem' }}>
                                    <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%', borderRadius: '12px' }} />
                                    <Button variant="contained" color="primary" onClick={resetCamera} sx={{ mt: '1rem' }}>Retake Photo</Button>
                                 </Box>
                              )}
                           </Box>
                        )}
                     </>
                  </Box>
                  <Box p={2}>
                     {showSubmitButton && (
                        <Box>
                           <Button variant="contained" color="primary" onClick={resetCamera} sx={{
                              ...css.center, ...css.marginAuto,
                              ...css.submitButton, ...css.button
                           }}>Retake Photo</Button>

                           <Button variant="contained" color="primary" sx={{
                              ...css.center, ...css.marginAuto,
                              ...css.submitButton, ...css.button
                           }} onClick={() => handleSteps(step)}>
                              Submit
                           </Button>
                           {/* <Box sx={{ position: 'relative' }}> */}
                           {/* <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%', borderRadius: '12px' }} /> */}

                           {/* </Box>   */}
                        </Box>
                     )}
                  </Box>
               </Box>
            </Paper>
         </Box>
      </>
   );
};

export default SelfieVerification;

