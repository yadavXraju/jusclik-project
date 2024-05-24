// ======= Page Owner Vikash =========
// ======= Student Profile =========
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Box, Checkbox} from '@mui/material'; // Import Box from @mui/material
import ParamDragDropImage from 'components/ParamDragDropImage';

// Assuming studentProfileDetails is defined elsewhere
// const studentProfileDetails = {
//   StudentName: 'Student Name',
  
// };

export default function Profile({profileDetails }) {

  return (
    <Card>
      <Typography sx={{ p: 2, mb: 3, borderBottom: '1px solid #ccc' }} variant="h4" component="div">
        Student Profile
      </Typography>
      <Box mt={2} sx={{ textAlign: 'center' }}>
        {/* =========== import image drag & drop box ============ */}
        <ParamDragDropImage />

        <CardContent>
          <Typography variant="h4" component="div">
           {profileDetails?.firstName} {profileDetails?.middleName} {profileDetails?.lastName}
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