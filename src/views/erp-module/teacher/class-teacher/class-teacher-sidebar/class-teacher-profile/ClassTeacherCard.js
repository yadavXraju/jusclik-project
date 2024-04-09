import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { ClassTeacherProfileDetails } from 'layout/MainLayout/Header/class-teacher/teacher-profile-section/TeacherProfile';


export default function ClassTeacherCard() {
  return (
    <Card sx={{ border: '1px solid #ccc' }}>
    <Typography sx={{p:2, mb : 3, borderBottom: '1px solid #ccc'}} variant='h5'  component="div">
          Class Teacher Profile
        </Typography>
        <Box sx={{textAlign: 'center'}}>
        <CardMedia
        
        sx={{ height: 100, width: 100, m: 'auto',borderRadius: '50%' }}
        image={ClassTeacherProfileDetails.image}
        title="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {ClassTeacherProfileDetails.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <span style={{fontWeight:'bold'}}>Subject:</span> {ClassTeacherProfileDetails.subject}
        </Typography>
        <Typography variant="body1" color="text.secondary">
        <span style={{fontWeight:'bold'}}>Class:</span> {ClassTeacherProfileDetails.class}
        </Typography>
      </CardContent>
      <CardActions>
      <Button sx={{ m : 'auto'}} variant="contained">Upload Image</Button>
      </CardActions>
        </Box>
    </Card>
  );
}