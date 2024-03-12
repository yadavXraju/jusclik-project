// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Box } from '@mui/system';
// // import logo from '../../../assets/images/brand.png';
// import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';


// export default function Profile() {
//   return (
//     <Card sx={{ border: '1px solid #ccc' }}>
//     <Typography sx={{p:2, mb : 3, borderBottom: '1px solid #ccc'}} variant='h5'  component="div">
//            Profile
//         </Typography>
//         <Box sx={{textAlign: 'center'}}>
//         <CardMedia
        
//         sx={{ height: 100, width: 100, m: 'auto',borderRadius: '50%' }}
//         image={studentProfileDetails.StudentImage}
//         title="Student image"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//             {studentProfileDetails.StudentName}
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           Class Teacher
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           {studentProfileDetails.AdminNo}
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Button sx={{ m : 'auto'}} variant="contained">Upload Image</Button>
//       </CardActions>
//         </Box>
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











import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      const imageFile = event.target.files[0];
      setSelectedImage(URL.createObjectURL(imageFile));
    }
  };

  return (
    <Card sx={{ border: '1px solid #ccc' }}>
      {/* <Typography sx={{ p: 2, mb: 3, borderBottom: '1px solid #ccc' }} variant="h5" component="div">
        Profile
      </Typography> */}
      <Box mt={3} sx={{ textAlign: 'center' }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ position: 'relative', display: 'inline-block' }}
        >
          {selectedImage || studentProfileDetails.StudentImage ? (
            <CardMedia
              sx={{ height: 100, width: 100, m: 'auto', borderRadius: '50%', cursor: 'pointer' }}
              image={selectedImage || studentProfileDetails.StudentImage}
              title="Student image"
              onClick={() => document.getElementById('imageInput').click()} // Trigger file input click
            >
                <AddAPhotoOutlinedIcon sx={{ color:'white',mt:'30px', fontSize: 40, visibility: hovered ? 'visible' : 'hidden' }} />
            </CardMedia>
          ) : (
            <Avatar
              sx={{ width: 100, height: 100, backgroundColor: '#f0f0f0', cursor: 'pointer' }}
              onClick={() => document.getElementById('imageInput').click()} // Trigger file input click
            >
              <AddAPhotoOutlinedIcon sx={{ fontSize: 40, visibility: hovered ? 'visible' : 'hidden' }} />
            </Avatar>
          )}
          {/* Hidden file input field */}
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {studentProfileDetails.StudentName}
          </Typography>
          {/* <Typography variant="body1" color="text.secondary">
            Class Teacher
          </Typography> */}
          <Typography variant="body1" color="text.secondary">
            Admin No
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
