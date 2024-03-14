// import * as React from 'react';
// import { Box, Button, Paper, Typography } from '@mui/material';
// import {TextField} from '@mui/material';





// const VisitorDetails = () => {

//    return (
//       <>
//          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
//             <Box>
//                <Box >
//                   <Box mb={2} variant="h3" >

//                      <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>Self Check-In
//                      </Typography>
//                      <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center'}}>Shaurya Software, Hermitage Plaza </Typography>
//                      <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>Managed by jusklik</Typography>
//                   </Box>
//                </Box>
//                <Box sx={{ display: 'flex' }}>
//                   <Paper elevation={4} sx={{p:'20px'}}>
//                      <Box p={1}>  
//                         <TextField id="outlined-basic" label="Name*" fullWidth variant="outlined" /></Box>
//                      <Box p={1}>
//                         <TextField id="outlined-basic" label="Address*" fullWidth variant="outlined" required
//                   error="/* Add your error condition here */"
//                   helperText="/* Add helper text for error */"/>
//                      </Box>
//                      <Box sx={{ py: '2px', px: '250px', textAlign: 'center', width: '100', height: '100 ' }}>

//                      </Box>



//                      <Box p={1}><Button variant="contained" size="large" color="primary" sx={{ mt: '15px', width: '100%' }}>SUBMIT</Button></Box>
//                   </Paper>
//                </Box>
//             </Box>
//          </Box>



//       </>
//    )
// }
// export default VisitorDetails;





// import React, { useState } from 'react';
// import { Box, Button, Paper, Typography, TextField } from '@mui/material';

// const VisitorDetails = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [nameError, setNameError] = useState(false);
//   const [addressError, setAddressError] = useState(false);

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
//       console.log('Form submitted:', { name, address });
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
//       <Box>
//         <Box>
//           <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>
//             Self Check-In
//           </Typography>
//           <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center' }}>Shaurya Software, Hermitage Plaza</Typography>
//           <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>
//             Managed by jusklik
//           </Typography>
//         </Box>
//         <Box sx={{ display: 'flex' }}>
//           <Paper elevation={4} sx={{ p: '20px', width: '100%' }}>
//             <form onSubmit={handleSubmit}>
//               <Box p={1}>
//                 <TextField
//                   id="outlined-basic-name"
//                   label="Name*"
//                   fullWidth
//                   variant="outlined"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                   error={nameError}
//                   helperText={nameError ? 'Name is required' : ''}
//                 />
//               </Box>
//               <Box p={1}>
//                 <TextField
//                   id="outlined-basic-address"
//                   label="Address*"
//                   fullWidth
//                   variant="outlined"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   required
//                   error={addressError}
//                   helperText={addressError ? 'Address is required' : ''}
//                 />
//               </Box>
//               <Box sx={{ textAlign: 'center' }}>
//                 <Button type="submit" variant="contained" size="large" color="primary" sx={{ mt: '15px', width: '100%' }}>
//                   SUBMIT
//                 </Button>
//               </Box>
//             </form>
//           </Paper>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default VisitorDetails;




// import React, { useState } from 'react';
// import { Box, Button, Paper, Typography, TextField, AppBar, Toolbar } from '@mui/material';
// import { useNavigate } from 'react-router';
// const VisitorDetails = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [nameError, setNameError] = useState(false);
//   const [addressError, setAddressError] = useState(false);

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
//       console.log('Form submitted:', { name, address });
//     }
//   };

//   const handleLogout = () => {
//     // Handle logout logic here
//     console.log('Logout clicked');
//   };

//   return (
//    <>
//      <AppBar position="static">
//        <Toolbar>
//          <Button color="inherit" onClick={()=>navigate('/selfie-verification')}>Back</Button>
//          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
//          <Button color="inherit" onClick={handleLogout}>Logout</Button>
//        </Toolbar>
//      </AppBar>
//      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
//        <Box>
//          <Box>
//            <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>
//              Self Check-In
//            </Typography>
//            <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center' }}>Shaurya Software, Hermitage Plaza</Typography>
//            <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>
//              Managed by jusklik
//            </Typography>
//          </Box>
//          <Box sx={{ display: 'flex' }}>
//            <Paper elevation={4} sx={{ p: '20px', width: '100%' }}>
//              <form onSubmit={handleSubmit}>
//                <Box p={1}>
//                  <TextField
//                    id="outlined-basic-name"
//                    label="Name"
//                    fullWidth
//                    variant="outlined"
//                    value={name}
//                    onChange={(e) => setName(e.target.value)}
//                    required
//                    error={nameError}
//                    helperText={nameError ? 'Name is required' : ''}
//                  />
//                </Box>
//                <Box p={1}>
//                  <TextField
//                    id="outlined-basic-address"
//                    label="Addresss"
//                    fullWidth
//                    variant="outlined"
//                    value={address}
//                    onChange={(e) => setAddress(e.target.value)}
//                    required
//                    error={addressError}
//                    helperText={addressError ? 'Address is required' : ''}
//                  />
//                </Box>
//                <Box sx={{ textAlign: 'center' }}>
//                  <Button type="submit" variant="contained" size="large" color="primary" sx={{ mt: '15px', width: '100%' }}>
//                    SUBMIT
//                  </Button>
//                </Box>
//              </form>
//            </Paper>
//          </Box>
//        </Box>
//      </Box>
//    </>
//  );
// }


// export default VisitorDetails;














import React, { useState } from 'react';
import { Box, Button, Paper, Typography, TextField, AppBar, Toolbar, InputAdornment, IconButton, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const VisitorDetails = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

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
      console.log('Form submitted:', { name, address, dropdown1, dropdown2 });
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <ArrowBackIosNewOutlinedIcon sx={{ "&:hover": { cursor: 'pointer' } }} onClick={() => navigate('/selfie-verification')}> </ArrowBackIosNewOutlinedIcon>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit" onClick={() => navigate('/visitor-registration')}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
        <Box>
          <Box>
            <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>
              Self Check-In
            </Typography>
            <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center' }}>Shaurya Software, Hermitage Plaza</Typography>
            <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>
              Managed by jusklik
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Paper elevation={4} sx={{ p: '20px', width: '100%' }}>
              <form onSubmit={handleSubmit}>
                <Box p={1}>
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
                  />
                </Box>
                <Box p={1}>
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
                  />
                </Box>
                <Box p={1}>
                  <Select
                    value={dropdown1}
                    onChange={(e) => setDropdown1(e.target.value)}
                    fullWidth
                    variant="outlined"
                    displayEmpty
                    placeholder="Select Option 1"
                  >
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                  </Select>
                </Box>
                <Box p={1}>
                  <Select
                    value={dropdown2}
                    onChange={(e) => setDropdown2(e.target.value)}
                    fullWidth
                    variant="outlined"
                    displayEmpty
                    placeholder="Select Option 2"
                    sx={{ borderRadius: '20px' }}
                  >
                    <MenuItem value="optionA">Option A</MenuItem>
                    <MenuItem value="optionB">Option B</MenuItem>
                    <MenuItem value="optionC">Option C</MenuItem>
                  </Select>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Button type="submit" variant="contained" size="large" color="primary" sx={{ mt: '15px', width: '100%', borderRadius: '50px' }}>
                    SUBMIT
                  </Button>
                </Box>
              </form>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default VisitorDetails;









