// import * as React from 'react';
// import { Box, Grid, Paper } from '@mui/material';
// import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';



// const documentData = [
//   {
//     id: 1,
//     title: ' Aadhar',
//     lastUpdated: '20-Jan-2029'
//   },

//   {
//     id: 2,
//     title: ' Fitness',
//     lastUpdated: '20-Jan-2022'
//   },

//   {
//     id: 3,
//     title: ' License',
//     lastUpdated: '20-Feb-2022'
//   },
//   {
//     id: 4,
//     title: ' Permit',
//     lastUpdated: '20-Jan-2027'
//   },

//   {
//     id: 5,
//     title: ' RegCertificate',
//     lastUpdated: '20-July-2021'
//   },

//   {
//     id: 6,
//     title: ' SpeedGovernor',
//     lastUpdated: '20-Feb-2026'
//   },

//   {
//     id: 7,
//     title: ' Insurance',
//     subtitle: ' Rudyard Kipling',
//     lastUpdated: '20-Jan-2023'
//   },

//   {
//     id: 8,
//     title: ' GPS',
//     subtitle: ' Rudyard Kipling',
//     lastUpdated: '20-Jan-2025'
//   }
// ];

// export default function DocumentTest() {
//   const [uploadedFiles, setUploadedFiles] = React.useState({});

//   const handleDropImage = (documentId, imagePath) => {
//     setUploadedFiles((prevUploadedFiles) => ({
//       ...prevUploadedFiles,
//       [documentId]: imagePath
//     }));
//   };

//   const UploadBox = ({ document }) => {
//     const inputRef = React.useRef(null);

//     const handleImageChange = (event) => {
//       if (event.target.files.length > 0) {
//         const imagePath = URL.createObjectURL(event.target.files[0]);
//         if (typeof document.id === 'number') {
//           handleDropImage(document.id, imagePath);
//         }
//       }
//     };

//     const handleDragOver = (event) => {
//       event.preventDefault();
//     };

//     const handleDrop = (event) => {
//       event.preventDefault();
//       const droppedFiles = event.dataTransfer.files;
//       if (droppedFiles.length > 0 && typeof document.id === 'number') {
//         const imagePath = URL.createObjectURL(droppedFiles[0]);
//         handleDropImage(document.id, imagePath);
//       }
//     };

//     const uploadedFile = uploadedFiles[document.id];

//     return (
//       <>
//         <Grid item xs={6} sm={4}  key={document.id}>
//         <Box component={Paper} elevation={2} sx={{display:'flex', justifyContent:'center'}}>
//           <Box
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//             sx={{
//               height: '115px',
//               width: '100%',
//               border: '1px dashed rgb(33, 150, 243)',
//               cursor: 'pointer',
//               borderRadius: '5px',
//               position: 'relative',
//               overflow: 'hidden',
//               display: 'flex',
//               justifyContent: 'center'
//             }}
//             onClick={() => inputRef.current.click()}
//           >
//             <Box sx={{}}>
//             <Box sx={{display:'flex', justifyContent:'center'}}><CloudUploadTwoToneIcon sx={{ fontSize: 40, mt: '20px', color: 'rgb(33, 150, 243)' }} /></Box>
//             <Box>{document.title}</Box>
//             </Box>
//             <input
//               ref={inputRef}
//               type="file"
//               accept="image/*"
//               style={{ display: 'none' }}
//               onChange={handleImageChange}
//             />
//             {uploadedFile && (
//               <img
//                 src={uploadedFile}
//                 alt="Uploaded File"
//                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//             )}
//           </Box>
//         </Box>
//       </Grid>      
//       </>
//     );
//   };

//   return (
//     <>
//       <Box p={2} sx={{ display: 'flex', justifyContent: 'center'}}>
//         <Grid container spacing={2}>
//           {documentData.map((document) => (
//             <UploadBox key={document.id} document={document} />
//           ))}
//         </Grid>
//       </Box>
//       <Box p={2}>
//         <Grid container spacing={2}>
//           <Grid item xs={6} sm={12} >
//              <Box>
//               <Box></Box>
//              </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }












import * as React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';


// const documentData = [
//   {
//     id: 1,
//     title: ' Aadhar',
//     lastUpdated: '20-Jan-2029'
//   },

//   {
//     id: 2,
//     title: ' Fitness',
//     lastUpdated: '20-Jan-2022'
//   },

//   {
//     id: 3,
//     title: ' License',
//     lastUpdated: '20-Feb-2022'
//   },
//   {
//     id: 4,
//     title: ' Permit',
//     lastUpdated: '20-Jan-2027'
//   },

//   {
//     id: 5,
//     title: ' RegCertificate',
//     lastUpdated: '20-July-2021'
//   },

//   {
//     id: 6,
//     title: ' SpeedGovernor',
//     lastUpdated: '20-Feb-2026'
//   },

//   {
//     id: 7,
//     title: ' Insurance',
//     subtitle: ' Rudyard Kipling',
//     lastUpdated: '20-Jan-2023'
//   },

//   {
//     id: 8,
//     title: ' GPS',
//     subtitle: ' Rudyard Kipling',
//     lastUpdated: '20-Jan-2025'
//   }
// ];

export default function DocumentTest() {

  return (
    <>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} >
            
            <Box pb={1} sx={{borderBottom:'1px solid #ccc', display:'flex', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
              <Box >
                <UploadFileOutlinedIcon sx={{fontSize:'3rem', marginRight:'10px'}} /> 
              </Box>
              <Box>
                <Typography variant='h4' >Aadhar Card</Typography>
                <Box>Aadharcard32435.jpg</Box>
              </Box>
             </Box>
             <Box>
              {/* <Button sx={{marginRight:'10px'}} variant='text'>Download template</Button> */}
              <Button variant='contained'>Choose</Button>
             </Box>
            </Box>

          </Grid>
        </Grid>
      </Box>
    </>
  );
}