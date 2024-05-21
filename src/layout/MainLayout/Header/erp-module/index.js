// Page Owner Abhishek
// Description : erp modules popper

import { useState, useRef } from 'react';
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
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import { useSelector } from 'react-redux';
import ErpModuleLayout from './ErpModuleLayout';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';


const ErpModule = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

//   setting initial value false
  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);

  //   function for updating intial value and open the popper
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };


  //   function closing the popper

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // to store state in this varible
  const customization = useSelector((state) => state.customization);
  // Extract theme color and set opacity
  const themeColor = customization.themeColorV2 || 'rgb(30, 136, 229)';
  const opacity = 0.2;


  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 0,
          [theme.breakpoints.down('md')]: {
            mr: 0 ,
            ml: '10px',
          }
        }}
      >
        <ButtonBase sx={{ borderRadius: '12px' }}>
          <Avatar
            variant="rounded"
            className='themeColorV2'
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              backgroundColor: `${themeColor.slice(0, -1)}, ${opacity}) !important`, // Adding opacity
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
            <AppsTwoToneIcon className='themeColorV2' sx={{
             color:`${theme?.customization?.themeColor} ` ,
             width: '20px'
             }}/>
          </Avatar>
        </ButtonBase>
      </Box>
      
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
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{ pt: 2, px: 2 }}>
                        <Grid item>
                          <Stack direction="row" spacing={2}>
                            <Typography variant="subtitle1">ERP Modules </Typography>
                            
                          </Stack>
                        </Grid>
 
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 205px)', overflowX: 'hidden' }}>
                        <Grid container direction="column" spacing={2}>
                         
                          <Grid item xs={12} p={0}>
                            <Divider sx={{ my: 0 }} />
                          </Grid>
                        </Grid>

                        {/* erp modules  start */}
                            <ErpModuleLayout setOpen={setOpen} />
                         {/* erp modules  end */}

                      </PerfectScrollbar>
                    </Grid>
                  </Grid>
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

export default ErpModule;
