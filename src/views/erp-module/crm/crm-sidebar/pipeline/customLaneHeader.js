import { Badge, Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
function CustomLaneHeader({ title,length}) {
  return (
    <>
    <Box>
      <Grid container display="flex" justifyContent="space-between" >
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Badge
           badgeContent={length}
            >
            <Typography variant="h4" display="flex">
              {title}
            </Typography>
          </Badge>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{ fontSize: '1.5rem', minWidth: '0px', width: '2rem', height: '2rem', padding: '8px', fontWeight: 'bold' }}
            display="flex"
            variant="outlined"              
          >
            <AddOutlinedIcon  sx={{height:'1rem'}} />
          </Button >
        </Grid>
      </Grid>
    </Box>
  </>
  );
}

export default CustomLaneHeader;
