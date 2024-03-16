// import React from 'react'
// import { Typography, Box, Paper, Button } from '@mui/material';
// import UploadAvatar from './uploadAvatar';

// const SelfieVerification = () => {


//    return (
//       <>
//          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
//             <Box>
//                <Box >
//                   <Box mb={2} variant="h3" >

//                      <Typography variant='h4'  sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>Self Check-In
//                      </Typography>
//                      <Typography variant='h2' ml={2}>Shaurya Software, Hermitage Plaza </Typography>
//                      <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>Managed by jusklik</Typography>
//                   </Box>
//                </Box>
//                <Box sx={{ display: 'flex' }}>
//                   <Paper elevation={4}>
//                      <Box p={2}>
//                         <Typography variant="h4" sx={{ fontWeight: '200' }}>please upload your selfie</Typography>
//                      </Box>

//                      <Box sx={{ py: '20px', px: '140px', textAlign: 'center', width: '100', height: '100 ' }}>
//                         <UploadAvatar />
//                      </Box>
//                      <Box>
//                         <Typography sx={{ display: 'flex', justifyContent: 'center' }}>Add a Selfie</Typography>
//                         {/* <Typography sx={{ display: 'flex', justifyContent: 'center' }}> Allowed&apos;image/*&apos; </Typography>
//                         <Typography sx={{ display: 'flex', justifyContent: 'center' }}>*.png, *.jpeg, *.jpg, *.gif</Typography> */}
//                      </Box>


//                      <Box p={2}><Button variant="contained" size="large" color="primary"
//                         sx={{
//                            mt: '50px', width: '100%',
//                            backgroundColor: '#fff',
//                            color: '#364152b5',
//                            borderRadius: '50px',
//                            border: '1px solid #c4c4c4',
//                            fontSize: '15px',
//                            fontFamily: 'plus Jakarta sans',
//                            cursor: 'pointer',
//                            '&:hover': {
//                               backgroundColor: '#e64b4c',
//                               color: '#fff'
//                            }
//                         }}>SUBMIT</Button></Box>
//                   </Paper>
//                </Box>
//             </Box>
//          </Box>



//       </>
//    )
// }
// export default SelfieVerification; 



import React from 'react';

import { Typography, Box, Paper, Button, Grid ,Toolbar} from '@mui/material';
import UploadAvatar from './uploadAvatar';
import { useNavigate } from 'react-router';




const SelfieVerification = () => {

   
const navigate = useNavigate();



   return (
      <>
      <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
      <Button color="inherit" onClick={() => navigate('/visitor-registration')}>Logout</Button>
    </Toolbar>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
              
                  <Box p={2} mb={4}> 
                     <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>Self Check-In</Typography>
                     <Typography variant='h2' sx={{ textAlign: 'center' }}>Shaurya Software, Hermitage Plaza</Typography>
                     <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>Managed by jusklik</Typography>
                  </Box>
                  <Paper elevation={4}>
                  <Box p={2}>
                    <Typography variant="h4" sx={{ fontWeight: '200' }}>please upload your selfie</Typography>
                     </Box>
                  <Box sx={{ py: '20px', textAlign: 'center' }}>
                     <UploadAvatar />
                     <Typography variant="body2" sx={{ mt: 1 }}>Add a Selfie</Typography>
                     {/* Additional information about allowed image types */}
                     {/* <Typography variant="body2">Allowed image types: *.png, *.jpeg, *.jpg, *.gif</Typography> */}
                  </Box>

                  <Box p={2}>
                     <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        sx={{
                           mt: 3,
                           width: '100%',
                           backgroundColor: '#fff',
                           color: '#364152b5',
                           borderRadius: '50px',
                           border: '1px solid #c4c4c4',
                           fontSize: '15px',
                           fontFamily: 'plus Jakarta sans',
                           cursor: 'pointer',
                           '&:hover': {
                              backgroundColor: '#e64b4c',
                              color: '#fff'
                           }
                        }}
                     >
                        SUBMIT
                     </Button>
                  </Box>
               </Paper>
            </Grid>
         </Grid>
      </Box>
      </>
   );
};

export default SelfieVerification;

                                                