// ======= Page Owner Vikash =========
// =======  Employee profile ==========
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Box, Checkbox} from '@mui/material';
import ParamDragDropImage from 'components/ParamDragDropImage';



export default function EmployeeProfile({profileDetails }) {

  return (
    <Card>
      <Typography sx={{ p: 2, mb: 3, borderBottom: '1px solid #ccc' }} variant="h4" component="div">
        Employee Profile
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
