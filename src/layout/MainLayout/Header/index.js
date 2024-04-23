import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, useMediaQuery, Grid, Popper, Paper, ClickAwayListener } from '@mui/material';
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
import SchoolName from './SchoolNameAndLogoSection';
import NotificationSection from './NotificationSection';
import { IconMenu2 } from '@tabler/icons';
import AcadmicYear from './AcadmicYearSection';
import HelpSection from './HelpSection';
import ErpModule from './erp-module';
import DashboardSwitch from './dashboard-switch';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const anchorRef = useRef(null);
  // const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)')
  const smallMobile = useMediaQuery('(max-width:425px)')


  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleItemClick = () => {
    setOpen(false); // Close the popper when an item is clicked
  };

  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <Grid style={{ width: '100%' }} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : null, flexDirection: isMobile ? 'column-reverse' : null }}>

        {/* mobile view ================================= */}
        {/* brand logo & toggler button */}
        {isMobile ? (
          <>
            {/* school Name and logo*/}

            <Grid sx={{ display: 'flex', width: '100%', }}>

              <Box sx={{ flexWrap: 'wrap', paddingLeft: isMobile ? '6px' : null, }}>
                <SchoolName />
              </Box>
            </Grid>
          </>
        )

          //  desktop view ================================
          : (

            <>
              <Grid sx={{ display: 'flex', width: '100%', }}>

                <Box
                  sx={{
                    width: 228,
                    display: 'flex',
                    alignItems:'center',
                    [theme.breakpoints.down('md')]: {
                      width: 'auto',
                      marginLeft: '0'
                    }
                  }}
                >
                  <Box className='logo' component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 , flex:'0 0 78%'}}>
                    <LogoSection />
                  </Box>

                  <ButtonBase className='menuBtn' sx={{ borderRadius: '0px', overflow: 'hidden', }}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        transition: 'all .2s ease-in-out',
                        background: theme.palette.secondary.light,
                        color: theme.palette.secondary.dark,
                        '&:hover': {
                          background: theme.palette.secondary.dark,
                          color: theme.palette.secondary.light
                        }
                      }}
                      onClick={ handleLeftDrawerToggle}
                      color="inherit"
                      ref={anchorRef}
                    >
                      <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                  </ButtonBase>

                </Box>

                {/* school Name and logo*/}

                <Box sx={{ flexWrap: 'wrap', paddingLeft: isMobile ? '6px' : null }}>
                  <SchoolName />
                </Box>

              </Grid>
            </>

          )}

        {/* popper */}

        {/* Conditionally render Popper only in mobile view */}
        {isMobile
          // mobile view ============================================

          ? (
            <>
              <Grid sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
               
                    <>
                      {/* more icon ========================*/}
                      <Box sx={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ede7f6', borderRadius: '8px', marginLeft: isMobile ? 'auto' : null, }}>
                        <ExpandMoreTwoToneIcon aria-describedby={id} type="button" onClick={handleToggle}  />
                      </Box>

                      <Popper id={id} open={open} anchorEl={anchorRef.current} sx={{zIndex:'9999', width:'100%' , display:'flex' , justifyContent:'center' , }}>
                        <ClickAwayListener onClickAway={handleClose}>
                          <Paper elevation={6} sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '18px 3rem 1rem 3rem', justifyContent: 'end', marginTop: '80px' }} >
                            <HelpSection onClick={handleItemClick} setOpen={setOpen} />
                            <AcadmicYear onClick={handleItemClick} setOpen={setOpen} />
                            <DashboardSwitch onClick={handleItemClick} setOpen={setOpen} />
                          </Paper>
                        </ClickAwayListener>
                      </Popper>
                    </>
             
    

                {/* menu btn start ================================= */}
                <Box
                  sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                      width: 'auto',
                      marginLeft: '0'
                    },
                    order: isMobile ? '-1' : null
                  }}
                >
                  <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }} >
                    <LogoSection />
                  </Box>

                  <ButtonBase className='menuBtn' sx={{ borderRadius: '12px', overflow: 'hidden', }}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        transition: 'all .2s ease-in-out',
                        background: theme.palette.secondary.light,
                        color: theme.palette.secondary.dark,
                        '&:hover': {
                          background: theme.palette.secondary.dark,
                          color: theme.palette.secondary.light
                        }
                      }}
                      onClick={handleLeftDrawerToggle}
                      color="inherit"
                    >
                      <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                  </ButtonBase>

                </Box>
                {/* menu btn end ================================= */}

                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                  <ErpModule />
                  <NotificationSection />
                  <ProfileSection />
                </Box>
              </Grid>
            </>
          )

          //  desktop view =============================================
          : (
            <Box sx={{ display: 'flex', alignItems: 'center', flex: isMobile ? '0 0 100%' : '0 0 40%', justifyContent: smallMobile ? 'flex-start' : 'end', flexWrap: 'wrap', marginLeft: smallMobile ? '1rem' : null }}>
              {/* erp module  and sibling switch */}
              {/* { isERP ? <ErpModule />  : <SiblingSwitch />} */}
              <DashboardSwitch />
              <ErpModule />
              <HelpSection  />
              <AcadmicYear  />
              <NotificationSection />
              <ProfileSection />
            </Box>

          )
        }
      </Grid>
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;