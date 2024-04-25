import React from 'react';
import Avatar from '@mui/material/Avatar';
import {  Box, Button, Divider, Grid, Paper, Typography, alpha } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popper from '@mui/material/Popper';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

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
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <>
      <Paper sx={{ backgroundColor: '#eef2f773', padding: '8px', width: '17rem' }} 
      >
        <Grid container justifyContent={'space-between'} sx={{ paddingBottom: '8px' }}>
          <Grid item rowSpacing={2} sx={{ maxWidth: '70%' }}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar>{data._name.charAt(0).toUpperCase()}</Avatar>
              <Box>
                <Typography display="flex">{data._name}</Typography>
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
        <Divider />
        <Box>
          {/* CONTENT */}
          <Box display="flex" sx={{ marginTop: '8px' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', padding: '8px' }} variant="h4">
              <LocalPhoneOutlinedIcon style={{ color: lightenedColor }} />
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>{data.phone}</Typography>
          </Box>
          <Box display="flex">
            <Typography sx={{ display: 'flex', alignItems: 'center', padding: '8px' }} variant="h4">
              <EmailOutlinedIcon style={{ color: lightenedColor }} />
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>{data.email}</Typography>
          </Box>
          <Box display="flex">
            <Typography sx={{ display: 'flex', alignItems: 'center', padding: '8px' }} variant="h4">
              <LocalOfferOutlinedIcon style={{ color: lightenedColor }} />
            </Typography>
            <Button variant="outlined" color={'primary'} size="small" sx={{ lineHeight: '0.75', marginTop: '8px', height: '1.5rem' }}>
              {'status'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default PipelineCard;

