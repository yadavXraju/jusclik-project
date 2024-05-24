// Page Owner Abhishek
// Description : popper for parent and teacher dashboard 

import React, { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ButtonBase,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MainCard from 'components/ui/cards/MainCard'; 
import Transitions from 'components/ui/extended/Transitions'; 
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { useSelector } from 'react-redux'; 
import DashboardSwitchLayout from './DashboardSwitchLayout'; 

const DashboardSwitch = () => {
  const theme = useTheme(); // Access the MUI theme
  const matchesXs = useMediaQuery(theme.breakpoints.down('md')); 
  const [open, setOpen] = useState(false); // State for controlling Popper open/close
  const anchorRef = useRef(null); // Ref for the Popper anchor
  const customization = useSelector((state) => state.customization); 
  const themeColor = customization.themeColor || ''; // Extract theme color from state (or default to empty string)
  const opacity = 0.2; // Define opacity value for background color transition

  // Toggle Popper open/close state
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Close Popper when clicking away from anchor element
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      {/* Button to toggle Popper */}
      <Box
        sx={{
          ml: 2,
          mr: 0,
          [theme.breakpoints.down('md')]: {
            mr: 0,
            ml:0,
          }
        }}
      >
        <ButtonBase sx={{ borderRadius: '12px' }}>
          {/* Avatar button */}
          <Avatar
            variant="rounded"
            className='themeColorV2'
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              backgroundColor: `${themeColor.slice(0, -1)}, ${opacity}) !important`, // Background color with opacity
              color: theme.palette.secondary.dark,
              '&[aria-controls="menu-list-grow"],&:hover': {
                color: theme.palette.secondary.light
              }
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            color="inherit"
          >
            {/* Icon inside the Avatar */}
            <GridViewOutlinedIcon className='themeColor' sx={{ color: themeColor, width: '20px' }} />
          </Avatar>
        </ButtonBase>
      </Box>
      
      {/* Popper component for dropdown menu */}
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 5 : 0, 20]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions position={matchesXs ? 'top' : 'top-right'} in={open} {...TransitionProps}>
            {/* Paper container for Popper contents */}
            <Paper>
              {/* ClickAwayListener to handle click outside Popper */}
              <ClickAwayListener onClickAway={handleClose}>
                {/* MainCard to style the Popper content */}
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Grid container direction="column" spacing={2}>
                    {/* Header section */}
                    <Grid item xs={12}>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{ pt: 2, px: 2 }}>
                        <Grid item>
                          <Stack direction="row" spacing={2}>
                            <Typography variant="subtitle1"> Dashboard </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* Content section with scrollbar */}
                    <Grid item xs={12}>
                      <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 205px)', overflowX: 'hidden' }}>
                        <Grid container direction="column" spacing={2}>
                          {/* Divider */}
                          <Grid item xs={12} p={0}>
                            <Divider sx={{ my: 0 }} />
                          </Grid>
                        </Grid>
                        {/* Render DashboardSwitchLayout component inside scrollbar */}
                        <DashboardSwitchLayout setOpen={setOpen} />
                      </PerfectScrollbar>
                    </Grid>
                  </Grid>
                  {/* Divider at the end of MainCard */}
                  <Divider />
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default DashboardSwitch; // Export the DashboardSwitch component
