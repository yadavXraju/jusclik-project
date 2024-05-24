// Page Owner Abhishek
// Description :  Profile Toggler Btn  name and picture setting  according to user 

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'components/ui/cards/MainCard';
import Transitions from 'components/ui/extended/Transitions';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons';
import { useLocation } from 'react-router-dom';
// for class teacher
import { ClassTeacherProfileDetails } from './TeacherProfile';

// ==============================|| PROFILE MENU ||============================== //
// =========== student profile imports
import user from 'assets/images/users/user.jpg'
export const studentProfileDetails = {
  StudentImage: user,
  StudentName : 'Abhishek Negi',
  Class : 'V A',
  AdminNo :'(Adm No : D00158)',
};


const ProfileSection = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  // logout function

  const handleLogout = () => {
    // Remove user role and token from local storage
    localStorage.removeItem('userRole');
    localStorage.removeItem('userToken');
  
    // Navigate to the login page
    navigate('/login');
  };





  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  // condtional rendring for profle sec in header

  const location = useLocation();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const { pathname } = location;
    let data;

    if (pathname.includes('/parent/')) {
      data = studentProfileDetails;
    } else if (pathname.includes('/class-teacher/')) {
      data = ClassTeacherProfileDetails;
    } 
    else {
      data = [];
    }

    setProfile(data);
  }, [location]);


  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            src={profile.StudentImage}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
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
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Box sx={{px:2, pt:2}}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="h4">Hello,</Typography>
                        <Typography component="span" variant="h4">
                        {profile.name} !
                        </Typography>
                      </Stack>
                      <Typography  variant="body2" sx={{pb:1}}>Last Login : 20-Jan-2024 2:23 PM </Typography>
                    </Stack>

                    <Divider />
                  </Box>
                  <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 250px)', overflowX: 'hidden' }}>
                    <Box>
                   
                      <List component="nav" sx={{
                          width: '100%',
                          maxWidth: 350,
                          minWidth: 300,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: '10px',
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%'
                          },
                          '& .MuiListItemButton-root': {
                            mt: 0.5
                          }
                        }}
                      >
                        {/* Profile */}

                        <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }} onClick={()=>navigate('parent/student-profile')}>
                            <ListItemIcon>
                              <IconUser stroke={1.5} size="1.3rem" />
                            </ListItemIcon>

                              <ListItemText
                                primary={
                                  <Grid container spacing={1} justifyContent="space-between">
                                    <Grid item>
                                      <Typography variant="body2">Profile</Typography>
                                    </Grid>
                                  </Grid>
                                }
                              />
                        </ListItemButton>

                        {/* Change Credentials */}

                        {/* this is set state of student profile tab Credentials */}
                       
                        <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }} onClick={() => {
                                    navigate('parent/student-profile', { state: { initialTab: 5 } });
                                  }}
                                >

                               
                              <ListItemIcon>
                                <IconSettings stroke={1.5} size="1.3rem" />
                              </ListItemIcon>

                              <ListItemText primary={<Typography variant="body2">Change Credentials</Typography>} />

                        </ListItemButton>
  
                        {/* Logout */}

                        <ListItemButton
                          sx={{ borderRadius: `${customization.borderRadius}px` }} onClick={handleLogout}>
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>

                          <ListItemText primary={<Typography variant="body2">Logout</Typography>} onClick={()=>navigate('/login')}/>
                        </ListItemButton>

                      </List>

                    </Box>
                  </PerfectScrollbar>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
      
    </>
  );
};

export default ProfileSection;
