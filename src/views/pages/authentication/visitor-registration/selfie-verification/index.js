import {
   Typography, Box, Paper,
   Button,
   Divider
} from '@mui/material';
import { css } from '../css'
import React, { useRef, useState } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useEffect } from 'react';

const SelfieVerification = ({ step, handleSteps, md }) => {
   const videoRef = useRef(null);
   const [stream, setStream] = useState(null);
   const [capturedImage, setCapturedImage] = useState(null);
   const [showCamera, setShowCamera] = useState(true); // State to toggle between camera and captured photo
   const [showCameraIcon, setShowCameraIcon] = useState(true); // State to toggle camera icon visibility
   const [showTakePhotoButton, setShowTakePhotoButton] = useState(true);
   const [showSubmitButton, setShowSubmitButton] = useState(false);
   const [mediaAvailable, setMediaAvailable] = useState(true)
   const [selectedFile, setSelectedFile] = useState(null);
   const startCamera = () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
         setMediaAvailable(true)
         navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
            .then(stream => {
               setStream(stream);
               setShowCameraIcon(false); // Hide the camera icon when video starts
               setShowTakePhotoButton(true);
               setShowSubmitButton(false);
            })
            .catch(err => console.error(err));
      }
      else {
         console.error('getUserMedia is not supported in this browser.');
         setMediaAvailable(false)
      }
   };
   useEffect(() => {
      if (videoRef.current && stream) {
         videoRef.current.srcObject = stream;
      }
   }, [stream]);
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

   const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
   };

   // getusermedia is not supported by all browsers
   // we can provide conditional checks
   // if getusermedia not supported then show file upload

   const cameraComponent = <>
      <Box sx={{ ...css.center }}>
         <Paper sx={{ ...css.mobilePaper, minWidth: md ? '20rem' : '25rem' }} elevation={2}>
            <Box>
               <Box sx={{ ...css.horizontalCenter, }}>
                  <Typography variant="h6" sx={{ ...css.formTextColor, fontWeight: '400', sm: '14px' }}>Please upload your selfie</Typography>
               </Box>
               <Divider />
               <Box sx={{ pt: '1rem' }}>
                  {/* selfie camera part */}
                  <>
                     <Box sx={{ ...css.horizontalCenter }}>
                        {showCamera ? showCameraIcon && (
                           <Box sx={{ width: '100px', height: '100px', backgroundColor: '#EDE6F6', borderRadius: '50%', border: '2px dotted #5E35B1', ...css.center }}>
                              <CameraAltOutlinedIcon color='secondary' sx={{ height: '55px', width: '35px' }} onClick={startCamera} />
                           </Box>
                        ) : (
                           <Box sx={{ position: 'relative' }}>
                              <img src={capturedImage} alt="Captured" style={{ maxWidth: md ? '100%' : '25rem', borderRadius: '12px' }} />
                           </Box>
                        )}
                     </Box>
                     {stream && showCamera && (
                        <Box sx={{ ...css.horizontalCenter, display: 'flex', flexDirection: 'column', mt: '1rem' }}>
                           <video
                              ref={videoRef}
                              autoPlay
                              muted
                              style={{ maxWidth: md ? '100%' : '25rem', height: 'auto', borderRadius: '12px' }}
                              onClick={() => { }}
                              onError={(e) => { console.log(e.target.error) }}
                              data-webkit-playsinline  // Use data- prefix for non-standard properties
                              data-playsinline          // Use data- prefix for non-standard properties
                           />
                           {showTakePhotoButton && (
                              <Box>
                                 <Button sx={{ ...css.center, ...css.marginAuto, ...css.submitButton, ...css.button }} onClick={takePhoto}>
                                    Take Photo
                                 </Button>
                              </Box>)}
                        </Box>
                     )}
                  </>
               </Box>
               <Box p={2}>
                  {showSubmitButton && (
                     <Box sx={{ display: 'flex' }}>
                        <Button variant="contained" color="primary" onClick={resetCamera} sx={{
                           ...css.center,
                           ...css.marginAuto,
                           ...css.submitButton,
                           ...css.button
                        }}>Retake</Button>

                        <Button variant="contained" color="primary" sx={{
                           ...css.center, ...css.marginAuto,
                           ...css.submitButton, ...css.button
                        }} onClick={() => handleSteps(step)}>
                           Submit
                        </Button>
                     </Box>
                  )}
               </Box>
            </Box>
         </Paper>
      </Box>
   </>

   const uploadComponent = <Box sx={{ ...css.center }}>
      <Paper sx={{ ...css.mobilePaper, minWidth: md ? '20rem' : '25rem' }} elevation={2}>
         <Box>
            <input
               type="file"
               id="fileInput"
               style={{ display: 'none' }}
               onChange={handleFileChange}
            />
            <label htmlFor="fileInput">
               <Button variant="contained" component="span"
                  sx={{
                     ...css.center,
                     ...css.marginAuto,
                     ...css.submitButton,
                     ...css.button,
                     textAlign:'center'
                  }}
               >
                  Choose File
               </Button>
            </label>
            {selectedFile && (
               <Typography variant="body1"
               sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
               >
                  Selected File: {selectedFile.name}
               </Typography>
            )}
            <Button
               variant="contained"
               color="primary"
               onClick={() => handleSteps(step)}
               disabled={!selectedFile}
               sx={{
                  ...css.center,
                  ...css.marginAuto,
                  ...css.submitButton,
                  ...css.button
               }}
            >
               Upload
            </Button>
         </Box>
      </Paper>
   </Box>

   if (mediaAvailable)
      return cameraComponent
   else
      return uploadComponent


};

export default SelfieVerification;

