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














// import * as React from 'react';
// import { useState } from 'react';
// import { Box, Grid, Typography, IconButton, Tooltip } from '@mui/material';
// import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';

// const documentData = [
//   {
//     id: 1,
//     title: 'Aadhar Card'
//   },
//   {
//     id: 2,
//     title: 'Fitness'
//   },
//   {
//     id: 3,
//     title: 'License'
//   },
//   {
//     id: 4,
//     title: 'Permit'
//   },
//   {
//     id: 5,
//     title: 'RegCertificate'
//   },
//   {
//     id: 6,
//     title: 'SpeedGovernor'
//   },
//   {
//     id: 7,
//     title: 'Insurance'
//   },
//   {
//     id: 8,
//     title: 'GPS' 
//   }
// ];

// export default function DocumentTest() {
//   const [selectedFiles, setSelectedFiles] = useState({});

//   const handleFileChange = (event, documentId) => {
//     const file = event.target.files[0];
//     setSelectedFiles((prevSelectedFiles) => ({
//       ...prevSelectedFiles,
//       [documentId]: file
//     }));
//   };

//   const removeFile = (documentId) => {
//     setSelectedFiles((prevSelectedFiles) => {
//       const updatedFiles = { ...prevSelectedFiles };
//       delete updatedFiles[documentId];
//       return updatedFiles;
//     });
//   };

//   return (
//     <>
//       {documentData.map((document) => (
//         <Box key={document.id} p={0.5}>
//           <Grid container spacing={1}>
//             <Grid item xs={12} sm={12}>
//               <Box pb={1} sx={{ borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Box>
//                     <UploadFileOutlinedIcon sx={{ fontSize: '3rem', marginRight: '10px' }} />
//                   </Box>
//                   <Box>
//                     <Typography variant="h4" fontWeight={400}>{document.title}</Typography>
//                     {selectedFiles[document.id] && <Box>{selectedFiles[document.id].name}</Box>}
//                   </Box>
//                 </Box>
//                 <Box pt={1}>
//                   <Box>
//                   {selectedFiles[document.id] && (
//                     <Tooltip title='Remove'>
//                       <IconButton onClick={() => removeFile(document.id)}>
//                         <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
//                       </IconButton>
//                     </Tooltip>
//                   )}
//                   <label htmlFor={`file-upload-${document.id}`}>
//                       <input
//                         id={`file-upload-${document.id}`}
//                         type="file"
//                         accept=".jpg,.jpeg,.png,.pdf"
//                         style={{ display: 'none' }}
//                         onChange={(event) => handleFileChange(event, document.id)}
//                       />
//                       {/* <Button variant="contained" component="span">
//                         Choose
//                       </Button> */}
//                       <Tooltip title='Upload'>
//                       <IconButton>
//                         <CloudUploadTwoToneIcon  />
//                       </IconButton>
//                     </Tooltip>

//                     </label>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       ))}
//     </>
//   );
// }





import * as React from 'react';
import { useState } from 'react';
import { Box, Grid, Typography, IconButton, Tooltip, ButtonBase } from '@mui/material';
// import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import FileUploadTwoToneIcon from '@mui/icons-material/FileUploadTwoTone';

const documentData = [
  {
    id: 1,
    title: 'Aadhar Card'
  },
  {
    id: 2,
    title: 'Fitness'
  },
  {
    id: 3,
    title: 'License'
  },
  {
    id: 4,
    title: 'Permit'
  },
  {
    id: 5,
    title: 'RegCertificate'
  },
  {
    id: 6,
    title: 'SpeedGovernor'
  },
  {
    id: 7,
    title: 'Insurance'
  },
  {
    id: 8,
    title: 'GPS' 
  }
];

export default function DocumentTest() {
  const [selectedFiles, setSelectedFiles] = useState({});

  const handleFileChange = (event, documentId) => {
    const file = event.target.files[0];
    setSelectedFiles((prevSelectedFiles) => ({
      ...prevSelectedFiles,
      [documentId]: file
    }));
  };

  const removeFile = (documentId) => {
    setSelectedFiles((prevSelectedFiles) => {
      const updatedFiles = { ...prevSelectedFiles };
      delete updatedFiles[documentId];
      return updatedFiles;
    });
  };

  return (
    <>
      {documentData.map((document) => (
        <Box key={document.id} p={0.5}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Box pb={1} px={1} sx={{ borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box>
                    <FileUploadTwoToneIcon sx={{ fontSize: '3rem', marginRight: '10px' }} />
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight={400}>{document.title}</Typography>
                    {selectedFiles[document.id] && <Box>{selectedFiles[document.id].name}</Box>}
                  </Box>
                </Box>
                <Box pt={1}>
                  <Box>
                  {selectedFiles[document.id] && (
                    <Tooltip title='Remove'>
                      <IconButton onClick={() => removeFile(document.id)}>
                        <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                      </IconButton>
                    </Tooltip>
                  )}
                  <div style={{ display: 'inline-block' }}>
                    <Tooltip title='Upload'>
                      <ButtonBase component="label">
                        <CloudUploadTwoToneIcon sx={{color:'#2196f3'}} />
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          style={{ display: 'none' }}
                          onChange={(event) => handleFileChange(event, document.id)}
                        />
                      </ButtonBase>
                    </Tooltip>
                  </div>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
}
