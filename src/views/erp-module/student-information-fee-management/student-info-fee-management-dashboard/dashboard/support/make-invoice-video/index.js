import React from 'react';
import { Grid,  } from '@mui/material';
// getting sample data from video data
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


// this style for iframe
export const iFrameStyle = {
  height: '250px',
  width: '100%',
  border:'none'
};

const MakeInvoiceVideo = () => {

  return (
    <>
      <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid lg={12} md={6} sm={12} sx={{padding:'20px'}}>
            <Card elevation={3}>
              <CardMedia>
                  <iframe
                    src='https://www.youtube.com/embed/-jcgsn7l9xg?rel=0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='how to make invoice'
                    style={iFrameStyle}
                  />
                </CardMedia>
            </Card>
           
          </Grid>          
      </Grid>
    </>
  );
};

export default MakeInvoiceVideo;


