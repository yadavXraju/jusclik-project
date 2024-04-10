import { Box,  Grid, Paper } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Drawer, Button, CardActionArea, CardActions } from '@mui/material';
import PortraitImage1 from '../../../../../../../assets/images/invoice-template/templatePortrait1.png';
import PortraitImage2 from '../../../../../../../assets/images/invoice-template/templatePortrait2.png';
import PortraitImage3 from '../../../../../../../assets/images/invoice-template/templatePortrait3.png';
import PortraitImage4 from '../../../../../../../assets/images/invoice-template/templatePortrait4.png';
import LandscapeImage1 from '../../../../../../../assets/images/invoice-template/templateLandscape1.png';
import {Badge} from '@mui/material'
import useDrawer from 'hooks/useDrawer';
import { useDispatch } from 'react-redux';
import { updateSelectedTemplate } from 'store/student-info-and-fee/setting/Invoice-Template-Slice';
import { useNavigate } from 'react-router';


// this is reuseable card component
export const CustomCard = ({ cardName, image, orientation, selectedTemplate,badge }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let imageWidth, imageHeight;
  if (orientation == 'landscape') {
    imageWidth = '425px';
    imageHeight = '300px';
  } else {
    imageWidth = '300px';
    imageHeight = '425px';
  }
  const [hovered, setHovered] = React.useState(false);
  return (
    <>
    <Badge badgeContent='Default' color='primary' invisible={!badge} sx={{'& .css-1c7npoy-MuiBadge-badge':{borderRadius:0,    top: '10px',right: '28px'},
  }}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  >
      <Card sx={{ border: '1px solid grey', borderRadius: '0px', minWidth: '300px' }}>
        <CardActionArea onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <CardMedia component="img" height={imageHeight} width={imageWidth} image={image} alt="" sx={{ aspectRatio: '1.414:1' }} />
          {hovered && (
            <CardActions
              sx={{
                position: 'absolute',
                justifyContent: 'center',
                bottom: 0,
                width: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Grey background with transparency
                zIndex: 1
              }}
            >
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => {
                  dispatch(updateSelectedTemplate(selectedTemplate));
                  navigate('/erp/student-info-fee/settings/invoice-template/template');
                }}
              >
                Edit
              </Button>
            </CardActions>
          )}
        </CardActionArea>
      </Card>
      </Badge>
      <Typography gutterBottom variant="h5" component="div" textAlign="center">
        {cardName}
      </Typography>
    </>
  );
};

// This is the landing page
const InvoiceTemplate = () => {
  const { anchor, toggleDrawer } = useDrawer();
  return (
    <>
      {/*  saved invoice template page */}
      <Paper sx={{padding:'2rem',minHeight:'90%'}} >
        <Grid container gap={4} justifyContent="space-between" sx={{paddingBottom:'1rem'}}>
          <Grid item>
            <Typography variant="h3">
              Invoice Templates{' '}
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={toggleDrawer('top', true)} variant="contained">
              +New
            </Button>
          </Grid>
        </Grid>
        {/* content of the page  */}

        <Grid container justifyContent="flex-start" gap={4}>
            <Grid container gap={4} >
              {/* cards for templates ================================== */}
              <Grid item>
                
                <CustomCard cardName={'Standard'} image={PortraitImage1} selectedTemplate={3} />
                
              </Grid>
            <Grid item>
                <CustomCard cardName={'Standard Lite'} image={PortraitImage2} selectedTemplate={4} badge={true} />
              </Grid>
              
              <Grid item>
                <CustomCard cardName={'Compact'} image={PortraitImage4} selectedTemplate={2} />
              </Grid>

              {/* new template card  */}
              <Grid item>
              <Card sx={{ width: '300px', height:'425px',borderRadius:'0px', border:'1px  dotted grey', display:'flex' }}>
      <CardActionArea>
          <Box p={2}>      
          <Typography gutterBottom variant="h5" component="div">
            New Template
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Click to add a template from our gallery. You can customize the template title, columns, and headers in line item table.
          </Typography>
          <Button onClick={toggleDrawer('top', true)} variant="contained" sx={{margin:'1rem 1rem 1rem 0'}}>
              +New
            </Button>
          </Box>
      </CardActionArea>
    </Card>

              </Grid>
            </Grid>
           
          </Grid>
        
      </Paper>





      {/*  invoice gallery drawer */}
      <Drawer anchor="top" open={anchor.top} onClose={toggleDrawer('top', false)} sx={{ minHeight: '100vh' }}>
        <Paper sx={{ minHeight: '100vh', padding: '2rem' }}>
          <Box sx={{ borderBottom: '1px solid #364152' }} display="flex" justifyContent='space-between'>
            <Typography variant="h3" pb={2} display="flex">
              Template Gallery
            </Typography>
            <Button onClick={toggleDrawer('top', false)}>Close</Button>
          </Box>
          {/* this is invoice gallery content==================================================================================== */}
          <Typography variant="h4" py={2}>
            Portrait Templates
          </Typography>
          <Grid container gap={4}>
            <Grid>
              {/* cards for templates ================================== */}
              <Grid item>
                <CustomCard cardName={'Standard'} image={PortraitImage1} selectedTemplate={3} />
              </Grid>
            </Grid>
              <Grid item>
                <CustomCard cardName={'Standard Lite'} image={PortraitImage2} selectedTemplate={4} />
              </Grid>
              <Grid item>
                <CustomCard cardName={'Simple'} image={PortraitImage3} selectedTemplate={5} />
              </Grid>
              <Grid item>
                <CustomCard cardName={'Compact'} image={PortraitImage4} selectedTemplate={2} />
              </Grid>
          </Grid>
          <Typography variant="h4" py={2}>
            Landscape Templates
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid>
              <Grid item>
                <CustomCard cardName={'Compact'} image={LandscapeImage1} orientation={'landscape'} selectedTemplate={1} />
              </Grid>
            </Grid>
          </Grid>
          {/*  drawer content over ============================================================================================ */}
        </Paper>
      </Drawer>
    </>
  );
};

export default InvoiceTemplate;
