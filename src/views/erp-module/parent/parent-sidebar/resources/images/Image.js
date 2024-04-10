import React from 'react';
import { Grid,  } from '@mui/material';
// getting sample data from video data
import { ImageData } from './ImageData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Image = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {ImageData.map((image, index) => (
          <Grid lg={4} md={6} sm={12} key={index} sx={{padding:'20px'}}>
            <Card elevation={3}>
            <CardMedia
                component="img" 
                image={image.src}
                title={image.title}
                sx={{height:'300px', objectFit:'cover', width:'100%'}}
             />
                

                <CardContent>
                  {/* title */}
                    <Typography gutterBottom variant="h3" component="div">
                         {image.title}
                    </Typography>
                </CardContent>
            </Card>
           
          </Grid>          
        ))}

      </Grid>
    </>
  )
}

export default Image


