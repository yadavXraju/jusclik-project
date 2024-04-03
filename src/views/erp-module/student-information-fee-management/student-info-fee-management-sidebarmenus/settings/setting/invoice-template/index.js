import { Grid, Paper } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// this will be the reuseable card component
  
  export const CustomCard = ({cardName,image}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <>
      <Card sx={{ border:'1px solid grey',borderRadius:'0px',minWidth:'300px' }}>
      <CardActionArea  onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <CardMedia
          component="img"
          // height={imageHeight}
          // width={imageWidth}
          image={image}
          alt=""
          sx={{aspectRatio:'1.414:1'}}
        />
          {hovered && (
          <CardActions
            sx={{
              position: 'absolute',
              // top: '50%',
              // left: '50%',
              // transform: 'translate(-50%, -50%)',
              justifyContent:'center',
              bottom: 0,
              width: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Grey background with transparency
              zIndex: 1,
            }}
          >
            <Button size="small" color="primary" variant='contained'>
              Edit
            </Button>
          </CardActions>
        )}
       
      </CardActionArea >
    </Card>
     <Typography gutterBottom variant="h5" component="div" textAlign='center'>
     {cardName}
   </Typography>
   </>
    )
  }
  
// This is the landing page 
const InvoiceTemplate = () => {   
  return (
    <Paper sx={{minHeight:'50%',paddingTop:'2rem',paddingBottom:'2rem'}}>
      <Grid container  justifyContent='space-evenly' >
      {/* cards for templates ================================== */}
        <Grid item>
      <CustomCard cardName={'Standard'} image={'https://picsum.photos/210/297'}/>
        </Grid>
        <Grid item>          
      <CustomCard cardName={'Standard'} image={'https://picsum.photos/210/297'}/>
        </Grid>
        <Grid item>          
      <CustomCard cardName={'Standard'} image={'https://picsum.photos/210/297'}/>
        </Grid>
       
      </Grid>
      <Grid container justifyContent='space-evenly' marginTop='2rem'>
      <Grid item>          
      <CustomCard cardName={'Standard'} image={'https://picsum.photos/210/297'}/>
        </Grid>
        <Grid item>          
      <CustomCard cardName={'Standard'} image={'https://picsum.photos/210/297'}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default InvoiceTemplate