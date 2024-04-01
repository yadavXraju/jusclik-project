// import PropTypes from 'prop-types';
// import { useState, useRef } from 'react';
// import { useTheme } from '@mui/material/styles';
// import { 
//   Avatar, 
//   Box, 
//   ButtonBase, 
//   Grid, 
//   Popper, 
//   Paper, 
//   Divider, 
//   ClickAwayListener, 
//   useMediaQuery 
// } from '@mui/material';
// import { IconMenu2 } from '@tabler/icons';
// import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import MainCard from 'ui-component/cards/MainCard'; // Assuming this is a custom component
// import Transitions from 'ui-component/extended/Transitions'; // Assuming this is a custom component

// // Import components from your project
// import LogoSection from '../LogoSection';
// import ProfileSection from './ProfileSection';
// import SchoolName from './SchoolNameAndLogoSection';
// import NotificationSection from './NotificationSection';
// import AcademicYear from './AcadmicYearSection';
// import HelpSection from './HelpSection';
// import ErpModule from './erp-module';
// import DashboardSwitch from './dashboard-switch';

// const Header = ({ handleLeftDrawerToggle }) => {
//   const [open, setOpen] = useState(false);
//   const anchorRef = useRef(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery('(max-width:900px)');
//   const smallMobile = useMediaQuery('(max-width:425px)');
//   const matchesXs = useMediaQuery(theme.breakpoints.down('md')); // Moved inside component

//   // Toggle the popper menu
//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   // Close the popper menu when clicking away
//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <>
//       {/* Main container */}
//       <Grid style={{ width: '100%' }} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : null, flexDirection: isMobile ? 'column-reverse' : null }}>
//         {/* Brand logo & toggler button */}
//         {isMobile ? (
//           // Render differently on mobile
//           <Grid sx={{ display: 'flex', width: '100%' }}>
//             <Box sx={{ flexWrap: 'wrap', paddingLeft: isMobile ? '6px' : null }}>
//               <SchoolName />
//             </Box>
//           </Grid>
//         ) : (
//           // Render differently on desktop
//           <Grid sx={{ display: 'flex', width: '100%' }}>
//             <Box
//               sx={{
//                 width: 228,
//                 display: 'flex',
//                 [theme.breakpoints.down('md')]: {
//                   width: 'auto',
//                   marginLeft: '0'
//                 }
//               }}
//             >
//               <Box className='logo' component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
//                 <LogoSection />
//               </Box>
//               {/* Avatar button for toggling sidebar */}
//               <ButtonBase className='menuBtn' sx={{ borderRadius: '12px', overflow: 'hidden' }}>
//                 <Avatar
//                   variant="rounded"
//                   sx={{
//                     ...theme.typography.commonAvatar,
//                     ...theme.typography.mediumAvatar,
//                     transition: 'all .2s ease-in-out',
//                     background: theme.palette.secondary.light,
//                     color: theme.palette.secondary.dark,
//                     '&:hover': {
//                       background: theme.palette.secondary.dark,
//                       color: theme.palette.secondary.light
//                     }
//                   }}
//                   onClick={handleLeftDrawerToggle}
//                   color="inherit"
//                 >
//                   <IconMenu2 stroke={1.5} size="1.3rem" />
//                 </Avatar>
//               </ButtonBase>
//             </Box>
//             <Box sx={{ flexWrap: 'wrap', paddingLeft: isMobile ? '6px' : null }}>
//               <SchoolName />
//             </Box>
//           </Grid>
//         )}

//         {/* Popper menu */}
//         {isMobile ? (
//           // Render differently on mobile
//           <Grid sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
//             {/* Button to toggle popper */}
//             <Box sx={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ede7f6', borderRadius: '8px', marginLeft: isMobile ? 'auto' : null }} ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>
//               <ExpandMoreTwoToneIcon sx={{ color: '#5e35b1' }} />
//             </Box>
//             {/* Popper menu */}
//             <Popper
//               placement={matchesXs ? 'bottom' : 'bottom-end'}
//               open={open}
//               anchorEl={anchorRef.current}
//               role={undefined}
//               transition
//               disablePortal
//               popperOptions={{
//                 modifiers: [
//                   {
//                     name: 'offset',
//                     options: {
//                       offset: [matchesXs ? 5 : 0, 20]
//                     }
//                   }
//                 ]
//               }}
//             >
//               {({ TransitionProps }) => (
//                 <Transitions position={matchesXs ? 'top' : 'top-right'} in={open} {...TransitionProps}>
//                   <Paper >
//                     <ClickAwayListener onClickAway={handleClose}>
//                       {/* Content of the popper menu */}
//                       <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]} sx={{padding:'2rem'}}>
//                         <Grid container direction="column" spacing={2}>
//                           <Grid item xs={12}>
//                             <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 205px)', overflowX: 'hidden' , display:'flex' , gap:'20px' , flexDirection:'column'}}>
//                               <HelpSection />
//                               <AcademicYear /> 
//                               <DashboardSwitch />
//                             </PerfectScrollbar>
//                           </Grid>
//                         </Grid>
//                         <Divider />
//                       </MainCard>
//                     </ClickAwayListener>
//                   </Paper>
//                 </Transitions>
//               )}
//             </Popper>
//             {/* Avatar button for toggling sidebar */}
//             <Box sx={{ width: 228, display: 'flex', [theme.breakpoints.down('md')]: { width: 'auto', marginLeft: '0' }, order: isMobile ? '-1' : null }}>
//               <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
//                 <LogoSection />
//               </Box>
//               <ButtonBase className='menuBtn' sx={{ borderRadius: '12px', overflow: 'hidden' }}>
//                 <Avatar
//                   variant="rounded"
//                   sx={{
//                     ...theme.typography.commonAvatar,
//                     ...theme.typography.mediumAvatar,
//                     transition: 'all .2s ease-in-out',
//                     background: theme.palette.secondary.light,
//                     color: theme.palette.secondary.dark,
//                     '&:hover': {
//                       background: theme.palette.secondary.dark,
//                       color: theme.palette.secondary.light
//                     }
//                   }}
//                   onClick={handleLeftDrawerToggle}
//                   color="inherit"
//                 >
//                   <IconMenu2 stroke={1.5} size="1.3rem" />
//                 </Avatar>
//               </ButtonBase>
//             </Box>
//             {/* Other sections */}
//             <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
//               <ErpModule />
//               <NotificationSection />
//               <ProfileSection />
//             </Box>
//           </Grid>
//         ) : (
//           // Render differently on desktop
//           <Box sx={{ display: 'flex', alignItems: 'center', flex: isMobile ? '0 0 100%' : '0 0 40%', justifyContent: smallMobile ? 'flex-start' : 'end', flexWrap: 'wrap', marginLeft: smallMobile ? '1rem' : null }}>
//             <DashboardSwitch />
//             <ErpModule />
//             <HelpSection />
//             <AcademicYear /> {/* Corrected spelling */}
//             <NotificationSection />
//             <ProfileSection />
//           </Box>
//         )}
//       </Grid>
//     </>
//   );
// };

// // PropTypes validation for handleLeftDrawerToggle prop
// Header.propTypes = {
//   handleLeftDrawerToggle: PropTypes.func
// };

// export default Header;




import PropTypes from 'prop-types';
// material-ui
import { useTheme  } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, useMediaQuery, Grid, Popper, Fade, Paper } from '@mui/material';
// project imports
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
import SchoolName from './SchoolNameAndLogoSection';
import NotificationSection from './NotificationSection';
// import { useLocation } from 'react-router';
// assets
import { IconMenu2 } from '@tabler/icons';
// import SiblingSwitch from './SiblingSwitchSection';
import AcadmicYear from './AcadmicYearSection';
import HelpSection from './HelpSection';
import ErpModule from './erp-module';
import DashboardSwitch from './dashboard-switch';
// popper imports
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';





// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {

  // const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)')
  const smallMobile = useMediaQuery('(max-width:425px)')

  
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popper' : undefined;


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
                    [theme.breakpoints.down('md')]: {
                      width: 'auto',
                      marginLeft: '0'
                    }
                  }}
                >
                  <Box className='logo' component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
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
                <PopupState variant="popper" popupId="demo-popup-popper">
                  {(popupState) => (
                    <>
                      {/* more icon ========================*/}
                      <Box sx={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ede7f6', borderRadius: '8px', marginLeft: isMobile ? 'auto' : null, }}>
                        <ExpandMoreTwoToneIcon {...bindToggle(popupState)} sx={{ color: '#5e35b1' }}  />
                      </Box>

                      <Popper {...bindPopper(popupState)} transition sx={{ zIndex: '99999' }} >
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps} timeout={350}>
                            <Paper elevation={6} sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '18px 3rem 1rem 3rem', justifyContent: 'end', marginTop: '20px' }} >

                              <HelpSection  />
                              <AcadmicYear  />
                              <DashboardSwitch />

                            </Paper>
                          </Fade>
                        )}
                      </Popper>
                    </>
                  )}
                </PopupState>

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
              <HelpSection />
              <AcadmicYear />
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