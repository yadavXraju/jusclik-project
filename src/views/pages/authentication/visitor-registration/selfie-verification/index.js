// import React from 'react'
// import { Typography, Box, Paper, Button } from '@mui/material';
// import UploadAvatar from './uploadAvatar';

// const selfieCheckin = () => {










//    return (
//       <>
//          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
//             <Box>
//                <Box >
//                   <Box mb={2} variant="h3" >

//                      <Typography variant='h4'  sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>Self Check-In
//                      </Typography>
//                      <Typography variant='h2'>Shaurya Software, Hermitage Plaza </Typography>
//                      <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>Managed by jusklik</Typography>
//                   </Box>
//                </Box>
//                <Box sx={{ display: 'flex' }}>
//                   <Paper elevation={4}>
//                      <Box p={2}>
//                         <Typography variant="h4" sx={{ fontWeight: '200' }}>please upload your selfie</Typography>
//                      </Box>

//                      <Box sx={{ py: '20px', px: '150px', textAlign: 'center', width: '100', height: '100 ' }}>
//                         <UploadAvatar />
//                      </Box>
//                      <Box>
//                         <Typography sx={{ display: 'flex', justifyContent: 'center' }}>Add a Selfie</Typography>
//                         {/* <Typography sx={{ display: 'flex', justifyContent: 'center' }}> Allowed&apos;image/*&apos; </Typography>
//                         <Typography sx={{ display: 'flex', justifyContent: 'center' }}>*.png, *.jpeg, *.jpg, *.gif</Typography> */}
//                      </Box>


//                      <Box p={2}><Button variant="contained" size="large" color="primary" sx={{ mt: '50px', width: '100%' }}>SUBMIT</Button></Box>
//                   </Paper>
//                </Box>
//             </Box>
//          </Box>



//       </>
//    )
// }
// export default selfieCheckin; 
import * as React from 'react';
import {Box,Button, Paper} from '@mui/material';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
   <>
   <Box  >
   <Paper sx={{ p:'100px', margin: 2}} elevation={4}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name*" variant="outlined" sx={{width:'100%' ,display:'block'}}/>
      <TextField id="outlined-basic" label="Address*" variant="outlined" />
      <Button variant="contained" size="large" color="primary" sx={{ mt: '50px', width: '100%' , display:'block'}}>SUBMIT</Button>
    </Box>
    </Paper>
    </Box>
    </>
  );
}