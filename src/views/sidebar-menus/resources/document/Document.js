import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { documentData } from './DocumentData';
import Grid from '@mui/system/Unstable_Grid/Grid';


export default function MediaControlCard() {


  return (
        <>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {documentData.map((document, id) => (
          <Grid lg={4} md={6} sm={12} key={id} sx={{padding:'20px'}}>
            <Card sx={{boxShadow:'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px' , display:'flex'}}>
              <CardMedia>
                  <iframe
                    src={document.url}
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title={document.title}
                  />
                </CardMedia>

                <CardContent>
                  {/* title */}
                    <Typography gutterBottom variant="h3" component="div">
                         {document.title}
                    </Typography>
                    {/* subtitle */}
                    <Typography variant="body2" color="text.secondary">
                        {document.subtitle}
                    </Typography>
                </CardContent>
            </Card>
           
          </Grid>          
        ))}

      </Grid>
        </>
  );
}