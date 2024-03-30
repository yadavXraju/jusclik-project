import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase , useMediaQuery , Grid , Popper ,  Fade , Paper } from '@mui/material';

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
import MoreVertIcon from '@mui/icons-material/MoreVert';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {

  // const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)')
  const smallMobile = useMediaQuery('(max-width:425px)')

  // check the url 
  // const isERP = location.pathname.includes('erp');




  return (
    <>   
    <Grid style={{width:'100%'}} sx={{display:'flex', justifyContent:'space-between', flexWrap: isMobile ? 'wrap' : null }}>
      <Grid sx={{display:'flex', width:'100%'}}>
        {/* brand logo & toggler button */}
        <Box
          sx={{
            width: 228,
            display: 'flex',
            [theme.breakpoints.down('md')]: {
              width: 'auto',
              marginLeft :'auto'
            }
          }}
        >
          <Box className='logo' component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
            <LogoSection />
          </Box>

          <ButtonBase  className='menuBtn' sx={{ borderRadius: '12px', overflow: 'hidden',  }}>
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

          {/* right side box */}
          <Box sx={{flex: isMobile ? '0 0 100%' : '0 0 100%', flexWrap:'wrap'}}>
          {/* school Name and logo*/}
          <SchoolName/>
          </Box>

        </Grid>

        <Grid sx={{
            width: isMobile ? '100%' : 'calc(100% - 228px)',
            display:'flex',
            flexDirection:'column',
            flexWrap:'wrap',
        }}>

                

              
        </Grid>


        {/* popper */}

        {/* Conditionally render Popper only in mobile view */}
        {isMobile
       // mobile view

        ? (
          <>
            <Grid sx={{display:'flex' , alignItems:'center' ,justifyContent: 'space-between', width:'100%'}}>
                <PopupState variant="popper" popupId="demo-popup-popper">
                  {(popupState) => (
                    <>
                    <Box>
                       <MoreVertIcon {...bindToggle(popupState)} />
                    </Box>

                      <Popper {...bindPopper(popupState)} transition>
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps} timeout={350}>
                            <Paper sx={{display:'flex' , padding:'2rem 1rem 1rem 1rem' , width:'100vw' , justifyContent:'end'}} >
                                  {/* help section */}
                                  <HelpSection/>

                                  {/* acadmic section */}
                                  <AcadmicYear/>

                                  {/* dashbaord */}
                                  <DashboardSwitch/>
                            </Paper>
                          </Fade>
                        )}
                      </Popper>
                    </>
                  )}
                </PopupState>

                <Box sx={{display:'flex', alignItems:'center' , flexWrap:'wrap', marginLeft: smallMobile ? '1rem' : null , }}>


                <ErpModule />

                {/* help section */}
                <HelpSection/>


                {/* notification */}
                <NotificationSection />

                {/* profile */}
                <ProfileSection />

         

                </Box>
            </Grid>
           </>
         )

        //  desktop view
        : (
          <Box sx={{display:'flex', alignItems:'center' , flex: isMobile ? '0 0 100%' : '0 0 40%',  justifyContent:  smallMobile ? 'flex-start' : 'end', flexWrap:'wrap', marginLeft: smallMobile ? '1rem' : null}}>

          {/* erp module  and sibling switch */}

          {/* { isERP ? <ErpModule />  : <SiblingSwitch />} */}
          {/* <SiblingSwitch /> */}
          
          <DashboardSwitch/>

          <ErpModule />
        
          {/* help section */}
          <HelpSection/>

          {/* acadmic section */}
          <AcadmicYear/>
      
          {/* notification */}
          <NotificationSection />

          {/* profile */}
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
