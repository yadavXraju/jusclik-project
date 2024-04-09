import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { LinkData } from './LinkData';
import Grid from '@mui/system/Unstable_Grid/Grid';


const Link = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ mt: 3 }}>
                    {LinkData.map((link, id) => (
                        <Grid lg={4} md={6} sm={12} key={id} sx={{ padding: '20px' }}>
                            <Card elevation={3}  sx={{ display: 'flex' , alignItems:'center'}}>
                                <CardMedia>
                                    {/* <img src={link.thumbnailUrl} alt={link.title} style={{ width: '78px', height: '65px', objectFit:'contain', padding:'10px', }} /> */}
                                    {link.thumbnailUrl}
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        {link.linkText}
                                    </Typography>
                    
                                    <a href={link.link} target='_blank' rel='noopener noreferrer' style={{color:'inherit',textDecoration:'#000',fontWeight:'500'}}>Click Here To View</a>                                
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
      </Grid>
    </>
  )
}

export default Link