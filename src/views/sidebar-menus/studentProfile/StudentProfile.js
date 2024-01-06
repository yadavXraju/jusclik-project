import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import logo from '../../../assets/images/brand.png';


export default function ProdileCard() {
  return (
    <Card sx={{ border: '1px solid #ccc' }}>
    <Typography sx={{p:2, mb : 3, borderBottom: '1px solid #ccc'}} variant='h5'  component="div">
          Student Profile
        </Typography>
        <Box sx={{textAlign: 'center'}}>
        <CardMedia
        
        sx={{ height: 100, width: 100, m: 'auto',borderRadius: '50%' }}
        image={logo}
        title="Student image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Student Name
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Class Teacher
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Adm. No. - D00158
        </Typography>
      </CardContent>
      <CardActions>
      <Button sx={{ m : 'auto'}} variant="contained">Upload Image</Button>
      </CardActions>
        </Box>
    </Card>
  );
}