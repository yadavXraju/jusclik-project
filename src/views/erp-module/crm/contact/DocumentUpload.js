// // ======= Page Owner Vikash =========
// // ======= Add Contact Drawer And Tabs =========
// import * as React from 'react';
// import { useState } from 'react';
// import { Box, Grid, Typography, IconButton, Tooltip, ButtonBase } from '@mui/material';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
// import FileUploadTwoToneIcon from '@mui/icons-material/FileUploadTwoTone';

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
//               <Box pb={1} px={1} sx={{ borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Box>
//                     <FileUploadTwoToneIcon sx={{ fontSize: '45px', marginRight: '10px' }} />
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
//                         <DeleteTwoToneIcon sx={{ color: '#f19e9e', fontSize:'30px' }} />
//                       </IconButton>
//                     </Tooltip>
//                   )}
//                   <div style={{ display: 'inline-block' }}>
//                     <Tooltip title='Upload'>
//                       <ButtonBase component="label">
//                         <CloudUploadTwoToneIcon sx={{color:'#2196f3', fontSize:'35px'}} />
//                         <input
//                           type="file"
//                           accept=".jpg,.jpeg,.png,.pdf"
//                           style={{ display: 'none' }}
//                           onChange={(event) => handleFileChange(event, document.id)}
//                         />
//                       </ButtonBase>
//                     </Tooltip>
//                   </div>
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











import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton, Tooltip, ButtonBase } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import FileUploadTwoToneIcon from '@mui/icons-material/FileUploadTwoTone';

const DocumentUpload = ({ documentData, onFileChange, onRemoveFile }) => {
  const [selectedFiles, setSelectedFiles] = useState({});

  const handleFileChange = (event, documentId) => {
    const file = event.target.files[0];
    setSelectedFiles((prevSelectedFiles) => ({
      ...prevSelectedFiles,
      [documentId]: file
    }));
    onFileChange && onFileChange(file, documentId);
  };

  const removeFile = (documentId) => {
    setSelectedFiles((prevSelectedFiles) => {
      const updatedFiles = { ...prevSelectedFiles };
      delete updatedFiles[documentId];
      return updatedFiles;
    });
    onRemoveFile && onRemoveFile(documentId);
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
                    <FileUploadTwoToneIcon sx={{ fontSize: '45px', marginRight: '10px' }} />
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
                        <DeleteTwoToneIcon sx={{ color: '#f19e9e', fontSize:'30px' }} />
                      </IconButton>
                    </Tooltip>
                  )}
                  <div style={{ display: 'inline-block' }}>
                    <Tooltip title='Upload'>
                      <ButtonBase component="label">
                        <CloudUploadTwoToneIcon sx={{color:'#2196f3', fontSize:'35px'}} />
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
};

export default DocumentUpload;
