// ======= Page Owner Vikash =========
// ======= Student Profile Card Component =========
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { studentProfileDetails } from 'layout/MainLayout/Header/Profile';


export default function ProdileCard() {
  return (
    <Card sx={{ border: '1px solid #ccc' }}>
      <Typography sx={{ p: 2, mb: 3, borderBottom: '1px solid #ccc' }} variant='h5' component="div">
        Student Profile
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <CardMedia
          sx={{ height: 100, width: 100, m: 'auto', borderRadius: '50%' }}
          image={studentProfileDetails.StudentImage}
          title="Student image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {studentProfileDetails.StudentName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Class Teacher
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {studentProfileDetails.AdminNo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ m: 'auto' }} variant="contained">Upload Image</Button>
        </CardActions>
      </Box>
    </Card>
  );
}