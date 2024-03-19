// // import * as React from 'react';
// // import { Box, Button, Paper, Typography } from '@mui/material';
// // import {TextField} from '@mui/material';





// // const VisitorDetails = () => {

// //    return (
// //       <>
// //          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
// //             <Box>
// //                <Box >
// //                   <Box mb={2} variant="h3" >

// //                      <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>Self Check-In
// //                      </Typography>
// //                      <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center'}}>Shaurya Software, Hermitage Plaza </Typography>
// //                      <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>Managed by jusklik</Typography>
// //                   </Box>
// //                </Box>
// //                <Box sx={{ display: 'flex' }}>
// //                   <Paper elevation={4} sx={{p:'20px'}}>
// //                      <Box p={1}>  
// //                         <TextField id="outlined-basic" label="Name*" fullWidth variant="outlined" /></Box>
// //                      <Box p={1}>
// //                         <TextField id="outlined-basic" label="Address*" fullWidth variant="outlined" required
// //                   error="/* Add your error condition here */"
// //                   helperText="/* Add helper text for error */"/>
// //                      </Box>
// //                      <Box sx={{ py: '2px', px: '250px', textAlign: 'center', width: '100', height: '100 ' }}>

// //                      </Box>



// //                      <Box p={1}><Button variant="contained" size="large" color="primary" sx={{ mt: '15px', width: '100%' }}>SUBMIT</Button></Box>
// //                   </Paper>
// //                </Box>
// //             </Box>
// //          </Box>



// //       </>
// //    )
// // }
// // export default VisitorDetails;





// // import React, { useState } from 'react';
// // import { Box, Button, Paper, Typography, TextField } from '@mui/material';

// // const VisitorDetails = () => {
// //   const [name, setName] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [nameError, setNameError] = useState(false);
// //   const [addressError, setAddressError] = useState(false);

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     // Check if fields are not empty
// //     if (name.trim() === '') {
// //       setNameError(true);
// //     } else {
// //       setNameError(false);
// //     }

// //     if (address.trim() === '') {
// //       setAddressError(true);
// //     } else {
// //       setAddressError(false);
// //     }

// //     // Handle form submission logic if all fields are valid
// //     if (name.trim() !== '' && address.trim() !== '') {
// //       // Perform your form submission logic here
// //       console.log('Form submitted:', { name, address });
// //     }
// //   };

// //   return (
// //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
// //       <Box>
// //         <Box>
// //           <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>
// //             Self Check-In
// //           </Typography>
// //           <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center' }}>Shaurya Software, Hermitage Plaza</Typography>
// //           <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>
// //             Managed by jusklik
// //           </Typography>
// //         </Box>
// //         <Box sx={{ display: 'flex' }}>
// //           <Paper elevation={4} sx={{ p: '20px', width: '100%' }}>
// //             <form onSubmit={handleSubmit}>
// //               <Box p={1}>
// //                 <TextField
// //                   id="outlined-basic-name"
// //                   label="Name*"
// //                   fullWidth
// //                   variant="outlined"
// //                   value={name}
// //                   onChange={(e) => setName(e.target.value)}
// //                   required
// //                   error={nameError}
// //                   helperText={nameError ? 'Name is required' : ''}
// //                 />
// //               </Box>
// //               <Box p={1}>
// //                 <TextField
// //                   id="outlined-basic-address"
// //                   label="Address*"
// //                   fullWidth
// //                   variant="outlined"
// //                   value={address}
// //                   onChange={(e) => setAddress(e.target.value)}
// //                   required
// //                   error={addressError}
// //                   helperText={addressError ? 'Address is required' : ''}
// //                 />
// //               </Box>
// //               <Box sx={{ textAlign: 'center' }}>
// //                 <Button type="submit" variant="contained" size="large" color="primary" sx={{ mt: '15px', width: '100%' }}>
// //                   SUBMIT
// //                 </Button>
// //               </Box>
// //             </form>
// //           </Paper>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default VisitorDetails;


// import React, { useState } from 'react';
// import { Box, Button, Paper, Typography, TextField,  Toolbar, InputAdornment ,IconButton,AppBar} from '@mui/material';
// import { useNavigate } from 'react-router';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';




// const VisitorDetails = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [nameError, setNameError] = useState(false);
//   const [addressError, setAddressError] = useState(false);
//   const [purpose, setPurpose] = useState('');
//   const [meet, setMeet] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();


//     // Check if fields are not empty
//     if (name.trim() === '') {
//       setNameError(true);
//     } else {
//       setNameError(false);
//     }

//     if (address.trim() === '') {
//       setAddressError(true);
//     } else {
//       setAddressError(false);
//     }

//     // Handle form submission logic if all fields are valid
//     if (name.trim() !== '' && address.trim() !== '') {
//       // Perform your form submission logic here
//       console.log('Form submitted:', { name, address, purpose , meet });
//       // You can navigate or perform other actions here after form submission
//     }
//   };

//   // const handleLogout = () => {
//   //   // Handle logout logic here
//   //   console.log('Logout clicked');
//   // };

//   return (
//     <>
//      <AppBar position="static">
//         <Toolbar>
//           <ArrowBackIosNewOutlinedIcon sx={{ "&:hover": { cursor: 'pointer' } }} onClick={() => navigate('/selfie-verification')}> </ArrowBackIosNewOutlinedIcon>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
//           <Button color="inherit" onClick={() => navigate('/visitor-registration')}>Logout</Button>
//         </Toolbar>
//         </AppBar>
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
//         <Box>
//           <Box>
//             <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>
//               Self Check-In
//             </Typography>
//             <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center' }}>Shaurya Software, Hermitage Plaza</Typography>
//             <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>
//               Managed by jusklik
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex' }}>
//             <Paper elevation={4} sx={{ p: '20px', width: '100%' }}>
//               <form onSubmit={handleSubmit}>
//                 <Box p={1}>
//                   <TextField
//                     id="outlined-basic-name"
//                     label="Name"
//                     fullWidth
//                     variant="outlined"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     error={nameError}
//                     helperText={nameError ? 'Name is required' : ''}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <IconButton>
//                             <PersonOutlineOutlinedIcon />
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                     sx={{
//                       '& .MuiOutlinedInput-notchedOutline': {
//                         borderRadius: '50px'
//                       }
//                     }}
//                   />
//                 </Box>
//                 <Box p={1}>
//                   <TextField
//                     id="outlined-basic-address"
//                     label="Address"
//                     fullWidth
//                     variant="outlined"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     required
//                     error={addressError}
//                     helperText={addressError ? 'Address is required' : ''}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <IconButton>
//                             <LocationOnOutlinedIcon />
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                     sx={{
//                       '& .MuiOutlinedInput-notchedOutline': {
//                         borderRadius: '50px'
//                       }
//                     }}
//                   />
//                 </Box>
//                 <Box p={1} >
//                   <FormControl fullWidth variant="outlined" >
//                     <InputLabel id="purpose-label">Purpose*</InputLabel>
//                     <Select
//                       labelId="purpose-label"
//                       id="demo-simple-select"
//                       value={purpose}
//                       onChange={(e) => setPurpose(e.target.value)}
//                       label="Purpose"
//                       required
//                       sx={{
//                         '& .MuiOutlinedInput-notchedOutline': {
//                           borderRadius: '50px'
//                         }
//                       }}
//                     >
//                       <MenuItem value="I Work Here">I Work Here</MenuItem>
//                       <MenuItem value="Meeting Appointment">Meeting Appointment</MenuItem>
//                       <MenuItem value="Delivery">Delivery</MenuItem>
//                       <MenuItem value="Service">Service</MenuItem>
//                       <MenuItem value="Other">Other</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Box>
//                 <Box p={1}>
//                   <FormControl fullWidth variant="outlined">
//                     <InputLabel id="want-to-meet-label">Want to Meet*</InputLabel>
//                     <Select
//                       labelId="want-to-meet-label"
//                       id="demo-simple-select-want-to-meet"
//                       value={meet}
//                       onChange={(e) => setMeet(e.target.value)}
//                       label="Want to Meet"
//                       required
//                       // InputProps={{
//                       //   startAdornment: (
//                       //     <InputAdornment position="start">
//                       //       <IconButton>

//                       //       </IconButton>
//                       //     </InputAdornment>
//                       //   ),
//                       // }}
//                       sx={{
//                         '& .MuiOutlinedInput-notchedOutline': {
//                           borderRadius: '50px'
//                         }
//                       }}
//                     >
//                       <MenuItem value="John Doe">John Doe</MenuItem>
//                       <MenuItem value="Jane Smith">Jane Smith</MenuItem>
//                       <MenuItem value="Alex Johnson">Alex Johnson</MenuItem>
//                       {/* Add more options as needed */}
//                     </Select>
//                   </FormControl>
//                 </Box>
//                 <Box sx={{ textAlign: 'center' }}>
//                   <Button type="submit" variant="contained" size="large" color="primary" sx={{
//                     mt: '15px', width: '100%', backgroundColor: '#fff',
//                     color: '#364152b5',
//                     borderRadius: '50px',
//                     border: '1px solid #c4c4c4',
//                    fontSize: '15px',
//                     fontFamily: 'plus Jakarta sans',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       backgroundColor: '#e64b4c',
//                       color: '#fff'
//                     }
//                   }}>
//                     SUBMIT
//                   </Button>
//                 </Box>
//               </form>
//             </Paper>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default VisitorDetails;


import React, { useState } from 'react';
import { Box, Button, Paper,
  //  Typography,
    TextField,
    // Toolbar,
     InputAdornment ,IconButton
    //  ,AppBar
    } from '@mui/material';
// import { useNavigate } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {css} from '../css'

const VisitorDetails = ({step,handleSteps}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [purpose, setPurpose] = useState('');
  const [meet, setMeet] = useState('');

  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (name.trim() === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (address.trim() === '') {
      setAddressError(true);
    } else {
      setAddressError(false);
    }

    // Handle form submission logic if all fields are valid
    if (name.trim() !== '' && address.trim() !== '') {
      // Perform your form submission logic here
      console.log('Form submitted:', { name, address, purpose, meet });
      // You can navigate or perform other actions here after form submission
    }
  };

  return (
    <>
      <Box sx={{ ...css.center,maxWidth:'25rem'}}>                  
            <Paper elevation={2} sx={{ ...css.mobilePaper,}}>
              <form onSubmit={handleSubmit}>
                <Box sx={{padding:'1rem 0'}}>
                  <TextField
                    id="outlined-basic-name"
                    label="Name"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    error={nameError}
                    helperText={nameError ? 'Name is required' : ''}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <PersonOutlineOutlinedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '50px'
                      },
                      mt:'1rem'
                    }}
                  />                           
                  <TextField
                    id="outlined-basic-address"
                    label="Address"
                    fullWidth
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    error={addressError}
                    helperText={addressError ? 'Address is required' : ''}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <LocationOnOutlinedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '50px'
                      },
                      mt:'1rem'
                    }}
                  />              
                  <FormControl fullWidth variant="outlined" sx={{ mt: '1rem' }}>
                    <InputLabel id="purpose-label">Purpose*</InputLabel>
                    <Select
                      labelId="purpose-label"
                      id="demo-simple-select"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      label="Purpose" 
                      required
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderRadius: '50px'
                        }                        
                      }}
                    >
                      <MenuItem value="I Work Here">I Work Here</MenuItem>
                      <MenuItem value="Meeting Appointment">Meeting Appointment</MenuItem>
                      <MenuItem value="Delivery">Delivery</MenuItem>
                      <MenuItem value="Service">Service</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>                            
                  <FormControl fullWidth variant="outlined" sx={{mt:'1rem'}}>
                    <InputLabel id="want-to-meet-label">Want to Meet*</InputLabel>
                    <Select
                      labelId="want-to-meet-label"
                      id="demo-simple-select-want-to-meet"
                      value={meet}
                      onChange={(e) => setMeet(e.target.value)}
                      label="Want to Meet"
                      required
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderRadius: '50px'
                        },
                        
                      }}
                    >
                      <MenuItem value="John Doe">John Doe</MenuItem>
                      <MenuItem value="Jane Smith">Jane Smith</MenuItem>
                      <MenuItem value="Alex Johnson">Alex Johnson</MenuItem>
                      {/* Add more options as needed */}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Button type="submit" variant="contained" size="large" color="primary" sx={{
                   ...css.center, ...css.marginAuto,
                   ...css.submitButton,...css.button
                  }}
                  onClick={()=>handleSteps(step)}>
                    SUBMIT
                  </Button>
                </Box>
              </form>
            </Paper>                  
      </Box>
    </>
  );
}

export default VisitorDetails;
