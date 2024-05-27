// page owner : abhishek negi
// description : image tab on resources page

import React from 'react';
import { Grid,  } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// sample data
export const ImageData = [
  {
     id:1,
     src:'https://cloud9.shauryasoft.com/media/wcp-2403291522-1783153503-1.png',
     title:'Wisdom Tree',
     postDate:'20-Jan-2024',
  },
  {
      id:2,
      src:'https://cloud9.shauryasoft.com/media/wcp-2403291522-1783153503-1.png',
      title:'Wisdom Tree',
      postDate:'20-Jan-2023',
   },
   {
      id:3,
      src:'https://cloud9.shauryasoft.com/media/wcp-2403291522-1783153503-1.png',
      title:'Wisdom Tree',
      postDate:'10-Jan-2024',
   },
   {
    id:4,
    src:'https://cloud9.shauryasoft.com/media/wcp-2403291522-1783153503-1.png',
    title:'Wisdom Tree',
    postDate:'20-Feb-2024',
 },
 {
     id:5,
     src:'https://cloud9.shauryasoft.com/media/wcp-2403291522-1783153503-1.png',
     title:'Wisdom Tree',
     postDate:'20-Jun-2024',
  },
  {
     id:6,
     src:'https://cloud9.shauryasoft.com/media/wcp-2403291522-1783153503-1.png',
     title:'Wisdom Tree',
     postDate:'20-Dec-2024',
  },
   {
      id:7,
      src:'https://cloud9.shauryasoft.com/media/wcp-2403291522-1783153503-1.png',
      title:'Wisdom Tree',
      postDate:'20-Jan-2022',
   },
   {
      id:8,
      src:'https://cloud9.shauryasoft.com/media/wcp-2403291522-1783153503-1.png',
      title:'Wisdom Tree',
      postDate:'20-Jan-2021',
   },
]

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


