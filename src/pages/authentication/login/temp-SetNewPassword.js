// // Page Owner: Suraj
// // Description: Sen New Password page of Login

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import LeftLogo from './LeftLogo';
// import PoweredBySection from './PoweredBy';
// import { useNavigate } from 'react-router-dom';

// const defaultTheme = createTheme({
//   palette: {
//     secondary: {
//       main: '#e64b4c'
//     }
//   }
// });

// export default function LogInPage() {
//   const navigate = useNavigate();
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordMatchError, setPasswordMatchError] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password && confirmPassword && password !== confirmPassword) {
//       setPasswordMatchError(true);
//       return;
//     }

//     setPasswordMatchError(false);

//     // Proceed with submission logic
//     console.log('Passwords match:', password);
//     navigate('/login');
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ minHeight: '100vh' }}>
//         <LeftLogo />
//         <Grid
//           item
//           xs={12}
//           sm={8}
//           md={7}
//           component={Paper}
//           elevation={6}
//           square
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: '#ffecec'
//           }}
//         >
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center'
//             }}
//           >
//             <Typography component="h1" variant="h4" sx={{ color: '#6b6666', fontSize: '40px' }}>
//               Set New Password
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <Grid>
//                 <TextField
//                   InputProps={{
//                     style: { borderRadius: '50px' },
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={() => setShowPassword(!showPassword)}
//                           edge="end"
//                           sx={{ color: '#364152b5', marginRight: '2px' }}
//                         >
//                           {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                         </IconButton>
//                       </InputAdornment>
//                     )
//                   }}
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="password"
//                   label="Enter New Password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   value={password}
//                   onChange={handlePasswordChange}
//                   sx={{ backgroundColor: '#fff', borderRadius: '50px' }}
//                 />
//                 <TextField
//                   InputProps={{
//                     style: {
//                       borderRadius: '50px'
//                     },
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle confirm password visibility"
//                           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                           edge="end"
//                           sx={{ color: '#364152b5', marginRight: '2px' }}
//                         >
//                           {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                         </IconButton>
//                       </InputAdornment>
//                     )
//                   }}
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="confirmPassword"
//                   label="Confirm New Password"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   value={confirmPassword}
//                   onChange={handleConfirmPasswordChange}
//                   error={passwordMatchError}
//                   sx={{ backgroundColor: '#fff', borderRadius: '50px' }}
//                 />
//               </Grid>
//               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     mt: 3,
//                     mb: 2,
//                     backgroundColor: '#fff',
//                     color: '#364152b5',
//                     borderRadius: '50px',
//                     width: '150px',
//                     margin: '20px',
//                     display: 'flex',
//                     height: '50px',
//                     '&:hover': {
//                       backgroundColor: '#e64b4c', // Change color on hover
//                       color: '#fff' // Change text color on hover
//                     }
//                   }}
//                 >
//                   Submit
//                 </Button>
//               </Box>
//               {passwordMatchError && (
//                 <Typography
//                   sx={{
//                     color: '#ff0000', // Change color of error message
//                     textAlign: 'center', // Align center
//                   }}
//                 >
//                   Passwords don&apos;t match
//                 </Typography>
//               )}
//             </Box>
//             <PoweredBySection />
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
