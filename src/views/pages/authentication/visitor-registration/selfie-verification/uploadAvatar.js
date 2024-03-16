import React, { useRef, useState } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { Box } from '@mui/system';
import {css} from '../css'
const SelfieCamera = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        setStream(stream);
        videoRef.current.srcObject = stream;
      })
      .catch(err => console.error(err));
  };

  const takePhoto = () => {
    const width = photoRef.current.width;
    const height = photoRef.current.height;
    photoRef.current.getContext('2d').drawImage(videoRef.current, 0, 0, width, height);
  };

  return (
    <>
      {/* <button onClick={startCamera}>Upload</button> */}
      <Box sx={{ ...css.horizontalCenter }}>
        <Box sx={{
          width: '100px',
          height: '100px',
          backgroundColor: '#EDE6F6',
          borderRadius: '50%',
          border: '2px dotted #5E35B1',...css.center,
        }}>

          <CameraAltOutlinedIcon color='secondary'
            sx={{
              height: '55px',
              width: '35px'
            }}
            onClick={startCamera}></CameraAltOutlinedIcon>
        </Box>
      </Box>
      {stream && (
        <>
          <video ref={videoRef} autoPlay muted />
          <canvas ref={photoRef} style={{ position: 'absolute', top: -10000, left: -10000 }} />
          <button onClick={takePhoto}>Take Photo</button>
        </>
      )}
    </>
  );
};

export default SelfieCamera;