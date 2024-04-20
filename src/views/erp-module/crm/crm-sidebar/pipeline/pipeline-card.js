import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Button, Divider, Grid, Paper, Typography, alpha } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popper from '@mui/material/Popper';


import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const PipelineCard = (props) => {


  // Define the color you want to lighten
const iconColor = '#121926'; // For example, red color

// Use alpha function to lighten the color
const lightenedColor = alpha(iconColor, 0.5); // Adjust the opacity as needed
  const { data } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
// card color #eef2f773
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <>
      <Paper sx={{backgroundColor:'#eef2f773',padding:'8px', minWidth:'17rem' }}>
        <Grid container justifyContent={'space-between'} sx={{paddingBottom:'8px'}}>
          <Grid item rowSpacing={2} sx={{maxWidth:'70%'}}>
            <Box display="flex" alignItems="start" gap={2}>
              <Avatar display="flex" alt="User Avatar" src="/path/to/avatar.png"  alignItems='start'/>
              <Box>
                <Typography display="flex">{data._name}</Typography>
                <Button variant="outlined" color={'primary'} size="small" sx={{ lineHeight: '0.75', marginTop: '8px' }}>
                  {'status'}
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Button aria-describedby={id} type="button" onClick={handleClick}>
              <MoreHorizIcon />
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>The content of the Popper.</Box>
            </Popper>
          </Grid>
        </Grid>
        <Divider/>
        <Box>
          {/* CONTENT */}
          <Box display="flex" sx={{ marginTop: '8px' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', padding: '8px' }} variant="h4">
              <LocalPhoneOutlinedIcon  style={{ color: lightenedColor }}/>
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>{data.phone}</Typography>
          </Box>
          <Box display="flex">
            <Typography sx={{ display: 'flex', alignItems: 'center', padding: '8px' }} variant="h4">
              <EmailOutlinedIcon  style={{ color: lightenedColor }}/>
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>{data.email}</Typography>
          </Box>
          <Box display="flex">
            <Typography sx={{ display: 'flex', alignItems: 'center', padding: '8px' }} variant="h4">
              <InsertLinkOutlinedIcon  style={{ color: lightenedColor }}/>
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>{data.website}</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default PipelineCard;


// second component for lane heading



export const LaneHeading = ({title}) => {

  return (
    <>
   <Box >
    <Grid container display='flex' justifyContent='space-between' >
        <Grid item sx={{display:'flex',alignItems:'center'}}>

    <Typography variant='h4' display='flex'>{title}</Typography>
        </Grid>
        <Grid item sx={{display:'flex',alignItems:'center'}}  >
    <Button sx={{fontSize:'1rem' ,minWidth:'0px',width:'2rem',height:'2rem',padding:'8px'}} display='flex' variant='outlined'>+</Button>

        </Grid>
    </Grid>
      
   </Box>
   
    </>
  )
}



