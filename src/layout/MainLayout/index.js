import { useDispatch, useSelector } from 'react-redux';
import { Outlet ,  useLocation } from 'react-router-dom';


// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline,  Toolbar, useMediaQuery } from '@mui/material';


// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
// import navigation from 'menu-items';
import { getMenuItems } from 'menu-items';

import { drawerWidth } from 'store/constant';
import { SET_MENU } from 'store/actions';

// assets
import { IconChevronRight } from '@tabler/icons';
import UrlPage from 'views/navigation-for-pages';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),

  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(140),  // for main  theme comp
    width: `calc(100% - ${drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // location for checking page url
  const location = useLocation();
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };



  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar sx={{  flexWrap: isMobile ? 'wrap' : 'nowrap',}}>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}

      {/*  if you want to open menu bar by default */}
      <Sidebar  drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* closed menu by default  */}
      {/* <Sidebar  drawerOpen={matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} /> */}

      {/* main content */}

      {/*  open drawer by default */}
      <Main theme={theme} open={leftDrawerOpened} sx={{minHeight:'calc(100vh - 111px)'}}>

      {/* menu closed by default */}
      
      {/* <Main theme={theme} open={!leftDrawerOpened}> */}

        {/* breadcrumb */}
        <Breadcrumbs separator={IconChevronRight} navigation={getMenuItems} icon title rightAlign />

        {/* url page */}
        {location.pathname !== '/parent/dashboard' && location.pathname !== '/class-teacher/dashboard'  && location.pathname !== '/subject-teacher/dashboard' && location.pathname !== '/erp/visitor/dashboard' && location.pathname !== '/erp/student-info-fee/dashboard' && location.pathname !== '/erp/inventory/dashboard' && location.pathname !== '/erp/library/dashboard' && <UrlPage />}


        {/* <UrlPage /> */}
        <Outlet />
      </Main>
      <Customization />
    </Box>
  );
};

export default MainLayout;
