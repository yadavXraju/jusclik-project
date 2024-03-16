import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Box, Checkbox} from '@mui/material'; // Import Box from @mui/material
import ParamDragDropImage from 'views/common-section/ParamDragDropImage';

// Assuming studentProfileDetails is defined elsewhere
const studentProfileDetails = {
  StudentName: 'Student Name',
  
};

export default function Profile() {

  return (
    <Card>
      <Typography sx={{ p: 2, mb: 3, borderBottom: '1px solid #ccc' }} variant="h4" component="div">
        Student Profile
      </Typography>
      <Box mt={3} sx={{ textAlign: 'center' }}>
        {/* ========= import image drag & drop box ============ */}
        <ParamDragDropImage />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {studentProfileDetails.StudentName}
          </Typography>
          <Box sx={{display:'flex' , alignItems:'center', justifyContent:'center'}} color="text.secondary">
          <Checkbox label="checkbox" size="small"  />
          <span>Activate Parent Portal</span> 
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}












// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
// import Box from '@mui/material/Box';

// // Assuming studentProfileDetails is defined elsewhere
// const studentProfileDetails = {
//   StudentName: 'John Doe',
//   AdminNo: '12345',
// };

// export default function Profile() {
//   const [hovered, setHovered] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (event) => {
//     if (event.target.files.length > 0) {
//       setSelectedImage(URL.createObjectURL(event.target.files[0]));
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     setHovered(true);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setHovered(false);

//     const droppedFiles = event.dataTransfer.files;
//     if (droppedFiles.length > 0) {
//       setSelectedImage(URL.createObjectURL(droppedFiles[0]));
//     }
//   };

//   return (
//     <Card>
//       <Typography sx={{ p: 2, mb: 3, borderBottom: '1px solid #ccc' }} variant="h4" component="div">
//         Student Profile
//       </Typography>
//       <Box mt={3} sx={{ textAlign: 'center' }}>
//         <Box
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             position: 'relative',
//             height: '100px',
//             width: '100px',
//             border: '2px dotted #2196f3',
//             borderRadius: '50%',
//           }}
//         >
//           {selectedImage ? (
//             <img src={selectedImage} alt="Selected" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
//           ) : (
//             <>
//               <AddAPhotoOutlinedIcon sx={{ fontSize: 40, visibility: hovered ? 'visible' : 'hidden' }} />
//               <input
//                 type="file"
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleImageChange}
//               />
//             </>
//           )}
//         </Box>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {studentProfileDetails.StudentName}
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Admin No: {studentProfileDetails.AdminNo}
//           </Typography>
//         </CardContent>
//       </Box>
//     </Card>
//   );
// }
























// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
// import Avatar from '@mui/material/Avatar';
// import { Box } from '@mui/system';
// import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';

// export default function Profile() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [hovered, setHovered] = useState(false);

//   const handleImageChange = (event) => {
//     if (event.target.files.length > 0) {
//       const imageFile = event.target.files[0];
//       setSelectedImage(URL.createObjectURL(imageFile));
//     }
//   };

//   return (
//     <Card>
//       <Typography sx={{ p: 2, mb: 3, borderBottom: '1px solid #ccc' }} variant="h4" component="div">
//         Student Profile
//       </Typography>
//       <Box mt={3} sx={{ textAlign: 'center' }}>
//         <div
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//           style={{ position: 'relative', display: 'inline-block' }}
//         >
//           {selectedImage || studentProfileDetails.StudentImage ? (
//             <CardMedia
//               sx={{ height: 100, width: 100, m: 'auto', borderRadius: '50%', cursor: 'pointer' }}
//               image={selectedImage || studentProfileDetails.StudentImage}
//               title="Student image"
//               onClick={() => document.getElementById('imageInput').click()} // Trigger file input click
//             >
//                 <AddAPhotoOutlinedIcon sx={{ color:'white',mt:'30px', fontSize: 40, visibility: hovered ? 'visible' : 'hidden' }} />
//             </CardMedia>
//           ) : (
//             <Avatar
//               sx={{ width: 100, height: 100, backgroundColor: '#f0f0f0', cursor: 'pointer' }}
//               onClick={() => document.getElementById('imageInput').click()} // Trigger file input click
//             >
//               <AddAPhotoOutlinedIcon sx={{ fontSize: 40, visibility: hovered ? 'visible' : 'hidden' }} />
//             </Avatar>
//           )}
//           {/* Hidden file input field */}
//           <input
//             id="imageInput"
//             type="file"
//             accept="image/*"
//             style={{ display: 'none' }}
//             onChange={handleImageChange}
//           />
//         </div>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//            {studentProfileDetails.StudentName}
//           </Typography>
//           {/* <Typography variant="body1" color="text.secondary">
//             Class Teacher
//           </Typography> */}
//           <Typography variant="body1" color="text.secondary">
//             Admin No
//           </Typography>
//         </CardContent>
//       </Box>
//     </Card>
//   );
// }





















// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
// import Avatar from '@mui/material/Avatar';
// import { Box } from '@mui/system';
// import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';

// export default function Profile() {
//   const [selectedImage, setSelectedImage] = useState(studentProfileDetails.image); // Initialize with default image
//   const [hovered, setHovered] = useState(false);

//   const handleImageChange = (event) => {
//     if (event.target.files.length > 0) {
//       const imageFile = event.target.files[0];
//       setSelectedImage(URL.createObjectURL(imageFile));
//     }
//   };

//   return (
//     <Card sx={{ border: '1px solid #ccc' }}>
//       <Typography sx={{ p: 2, mb: 3, borderBottom: '1px solid #ccc' }} variant="h5" component="div">
//         Profile
//       </Typography>
//       <Box sx={{ textAlign: 'center' }}>
//         <div
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//           style={{ position: 'relative', display: 'inline-block' }}
//         >
//           {selectedImage ? (
//             <CardMedia
//               sx={{ height: 100, width: 100, m: 'auto', borderRadius: '50%' }}
//               image={selectedImage}
//               title="Student image"
//             />
//           ) : (
//             <Avatar
//               sx={{ width: 100, height: 100, backgroundColor: '#f0f0f0', cursor: 'pointer' }}
//               onClick={() => document.getElementById('imageInput').click()} // Trigger file input click
//             >
//               <AddAPhotoOutlinedIcon sx={{ fontSize: 40, visibility: hovered ? 'visible' : 'hidden' }} />
//             </Avatar>
//           )}
//           {/* Hidden file input field */}
//           <input
//             id="imageInput"
//             type="file"
//             accept="image/*"
//             style={{ display: 'none' }}
//             onChange={handleImageChange}
//           />
//         </div>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {studentProfileDetails.name} {/* Display student name from studentProfileDetails */}
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Class Teacher
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Admin No
//           </Typography>
//         </CardContent>
//       </Box>
//     </Card>
//   );
// }