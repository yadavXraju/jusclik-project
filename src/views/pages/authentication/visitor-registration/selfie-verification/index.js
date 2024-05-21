// OWNER : DAMANDEEP
import {
   Typography, Box, Paper,
   Button,
   Divider
} from '@mui/material';
import { css } from '../css'
import React, { useRef, useState } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useEffect } from 'react';

const SelfieVerification = ({ step, handleSteps, md,capturedImage,setCapturedImage}) => {

   const videoRef = useRef(null);
   const [stream, setStream] = useState(null);
   // const [capturedImage, setCapturedImage] = useState(null);
   const [showCamera, setShowCamera] = useState(true); // State to toggle between camera and captured photo
   const [showCameraIcon, setShowCameraIcon] = useState(true); // State to toggle camera icon visibility
   const [showTakePhotoButton, setShowTakePhotoButton] = useState(true);
   const [showSubmitButton, setShowSubmitButton] = useState(false);
// scroll behaviour
   const startCamera = () => {         
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
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
      }
   };

   useEffect(() => {
      if (videoRef.current && stream) {
         videoRef.current.srcObject = stream;
         setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
         }, 300);   
      }
   }, [stream]);

   const takePhoto = () => {
      const video = videoRef.current;
      const canvas = document.createElement('canvas'); // Create a new canvas element
      canvas.width=video.videoWidth
      canvas.height=video.videoHeight
      canvas.aspectRatio='3/4'
      canvas.objectFit='cover'
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
      // to scroll back to take photo
      setTimeout(() => {
         window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 300);
   };
   const resetCamera = () => {
         // Stop the video stream
   if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
   }
      setStream(null)
      setCapturedImage(null);
      setShowCamera(true);
      startCamera()
      // to scroll back to take photo
   };

   const cameraComponent = <>
      <Box sx={{ ...css.center }} >
         <Paper sx={{ ...css.mobilePaper, minWidth: md ? '20rem' : '25rem',maxWidth:'60%' }} elevation={2}>
            <Box display='flex' flexDirection='column'>
               <Box sx={{ ...css.horizontalCenter, }}>
                  <Typography variant="h6" sx={{ ...css.formTextColor, fontWeight: '400', sm: '14px' }}>Take a Selfie</Typography>
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
                              <img src={capturedImage} alt="Captured" style={{  
                              width:'100%' ,
                              height:'auto',
                              aspectRatio:'3/4',
                              objectFit:'cover',
                              borderRadius: '12px' }} />
                           </Box>
                        )}
                     </Box>
                     {stream && showCamera && (
                        <Box sx={{ ...css.horizontalCenter,flexDirection: 'column', mt: '1rem',width:'100%'}}>                          
                          
                          { /* eslint-disable react/no-unknown-property */}    
                          <Box sx={{width:'100%',...css.horizontalCenter,}}>
                           <video
                              ref={videoRef}
                              autoPlay
                              muted
                              style={{ 
                              width:'95%' ,
                              height:'auto',
                              objectFit: 'cover',
                              aspectRatio:'3/4',
                              borderRadius: '12px' ,
                             
                           }}
                              onClick={() => { }}
                              onError={(e) => { console.log(e.target.error) }}
                              playsInline                             
                           />

                          </Box>
                                               
                          { /* eslint-enable react/no-unknown-property */}

                           {showTakePhotoButton && (
                              <Box>
                                 <Button sx={{ ...css.center, ...css.marginAuto, ...css.submitButton, ...css.button }} onClick={takePhoto} disableElevation>
                                    Take Photo
                                 </Button>
                              </Box>)}
                        </Box>
                     )}
                  </>
               </Box>
               <Box p={2}>
                  {showSubmitButton && (
                     <Box  display='flex'>
                        <Button variant="contained" color="primary"  onClick={resetCamera} sx={{
                           ...css.center,
                           ...css.marginAuto,
                           ...css.submitButton,
                           ...css.button,
                           marginRight:'1rem'
                        }}
                        
                        disableElevation
                        >Retake</Button>

                        <Button variant="contained" color="primary" sx={{
                           ...css.center, ...css.marginAuto,
                           ...css.submitButton, ...css.button
                        }} 
                        disableElevation
                        onClick={() => handleSteps(step)}>
                           Submit
                        </Button>
                     </Box>
                  )}
               </Box>
            </Box>
         </Paper>
      </Box>
   </>
  
     return cameraComponent
 

};

export default SelfieVerification;

