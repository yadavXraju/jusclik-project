import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
// import book from './book.png'
import poery from "./img/poetry (1).png"
import history from './img/history.png'
import Math from './img/Math.png'
import geo from './img/geo.png'
import chem from './img/chemistry (1).png'
import PHY from './img/atom.png'
import BIO from './img/dna.png'
import eng from './img/eng.png'
import music from './img/music.png'

function SubjectCard() {

    const cardsData = [
        { title: 'HINDI', imageUrl: poery },
        { title: 'HISTORY', imageUrl: history },
        { title: 'MATH', imageUrl: Math },
        {title:'GEOGRAPHY', imageUrl:geo},
        {title:'CHEMISTRY', imageUrl:chem},
        {title:'PHYSICS', imageUrl:PHY},
        {title:'BIOLOGY', imageUrl:BIO},
        {title:'ENGLISH', imageUrl:eng},
        {title:'MUSIC', imageUrl:music},
      ];
      
  return (
    <Grid container spacing={2} width="60%" mx="auto">
    {cardsData.map((card, index) => (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card  sx={{ maxWidth: 245 , height:200}} >
          <CardMedia
          sx={{height:70,width:70 ,mx:"auto",py:4}}
            component="img"
            alt={card.title}
            image={card.imageUrl}

          />
          <CardContent>
            <Typography variant="h5" component="div" textAlign='center'>
              {card.title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);
    
}

export default SubjectCard

