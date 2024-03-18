import React from 'react'
import { Typography, Box, Paper, Button, Divider } from '@mui/material';
import UploadAvatar from './uploadAvatar';
import {css} from '../css'

const SelfieVerification = () => {
   return (
      <>
         <Box sx={{ ...css.center}}>
            <Paper sx={{ ...css.mobilePaper,width:'100%'}} elevation={4}>            
               <Box>                  
                     <Box sx={{...css.horizontalCenter,py:'1rem'}}>
                        <Typography variant="h6" sx={{ fontWeight: '200',sm:'14px' }}>Please upload your selfie</Typography>
                     </Box>
                     <Divider/>

                     <Box sx={{pt:'1rem'}}>
                        <UploadAvatar />
                     </Box>
                     <Box>
                        <Typography sx={{ ...css.horizontalCenter,pt:'1rem' }}>Add a Selfie</Typography>
                     </Box>
                     <Box p={2}><Button variant="contained" 
                        sx={{
                           ...css.center, ...css.marginAuto,
                           ...css.submitButton,...css.button
                        }}>SUBMIT</Button></Box>
            </Box>
            </Paper>
         </Box>
      </>
   );
};

export default SelfieVerification;

                                                