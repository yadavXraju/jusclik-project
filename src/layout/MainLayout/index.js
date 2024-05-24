// Page Owner Abhishek
// Description : This file contains The MainLayout like breadcrumbs , main section  , header 

import { useDispatch, useSelector } from 'react-redux';
import { Outlet ,  useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline,  Toolbar, useMediaQuery } from '@mui/material';
import Breadcrumbs from 'components/ui/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import { GetMenuItems } from 'menu-items';
import { drawerWidth } from 'store/constant';
import { setMenu , handleUserclickedtoggle} from 'store/customization-slice';
import { IconChevronRight } from '@tabler/icons';
import UrlPage from 'layout/breadcrumb';


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
    width: `calc(100% - ${drawerWidth}px)`,
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
  const location = useLocation();
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const userClicked = useSelector((state) => state.customization.userClicked);
  const handleLeftDrawerToggle = () => {
    dispatch(setMenu({ opened: !leftDrawerOpened }));
  };

  const handleUserClickToggle = () => {
    dispatch(handleUserclickedtoggle({ opened: !userClicked }));
  };

  const handleToggleButtonClick = () => {
    handleLeftDrawerToggle();
    handleUserClickToggle();
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
          <Header handleLeftDrawerToggle={handleToggleButtonClick} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar  drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* main content */}

      {/*  open drawer by default */}
      <Main theme={theme} open={leftDrawerOpened} >

        {/* breadcrumb */}
        <Breadcrumbs separator={IconChevronRight} navigation={GetMenuItems} icon title rightAlign />

        {/* url page */}
        { !location.pathname.match(/\/dashboard\b/)&& !location.pathname.match(/\/builder\b/) && <UrlPage />}

        {/* <UrlPage /> */}
        <Outlet />
      </Main>
      <Customization />
    </Box>
  );
};

export default MainLayout;