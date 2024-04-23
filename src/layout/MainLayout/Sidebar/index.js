





// import React, {  useRef } from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import { Box, Drawer, useMediaQuery } from '@mui/material';
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import { BrowserView, MobileView } from 'react-device-detect';
// import MenuList from './MenuList';
// import LogoSection from '../LogoSection';
// import { drawerWidth } from 'store/constant';
// import classnames from 'classnames';
// import { useDispatch,useSelector } from 'react-redux';
// import { setMenu } from 'store/customization-slice';

// const Sidebar = ({ drawerOpen, drawerToggle, window}) => {
//   const theme = useTheme();
//   const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
//   const customization = useSelector((state) => state.customization);
//   const dispatch = useDispatch();
//   const timerRef = useRef(null);

//   const handleMouseEnter = () => {
//     clearTimeout(timerRef.current); // Clear any existing timer
//     if (customization.userClicked) {
//       dispatch(setMenu({ opened: true }));
//     }
//   };
  
//   const handleMouseLeave = () => {
//     clearTimeout(timerRef.current); // Clear any existing timer
//     if (customization.userClicked) {
//       timerRef.current = setTimeout(() => {
//         dispatch(setMenu({ opened: false }));
//       }, 200); // Delay execution of handleMouseLeave
//     }
//   };
  

//   const drawer = (
//     <>
//       <Box sx={{ display: { xs: 'block', md: 'none' } }}>
//         <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
//           <LogoSection />
//         </Box>
//       </Box>
//       <BrowserView>
//         <PerfectScrollbar
//                onMouseEnter={handleMouseEnter}
//                onMouseLeave={handleMouseLeave}
//           component="div"
//           style={{
//             height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
//             paddingLeft: '16px',
//             paddingRight: '16px'
//           }}
//         >
//           <MenuList />
//         </PerfectScrollbar>
//       </BrowserView>
//       <MobileView>
//         <Box sx={{ px: 2 }}>
//           <MenuList />
//         </Box>
//       </MobileView>
//     </>
//   );

//   const container = window !== undefined ? () => window.document.body : undefined;

//   return (
//     <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
//       <Drawer
//         container={container}
//         variant={matchUpMd ? 'persistent' : 'temporary'}
//         anchor="left"
//         open={drawerOpen}
//         className={classnames({
//           drawerOpen: drawerOpen,
//           drawerClose: !drawerOpen,
//         })}
//         onClose={drawerToggle}
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             background: theme.palette.background.default,
//             color: theme.palette.text.primary,
//             borderRight: 'none',
//             [theme.breakpoints.up('md')]: {
//               top: '124px',
//             },
//           },
//         }}
//         ModalProps={{ keepMounted: true }}
//         color="inherit"
//       >
//         {drawer}
//       </Drawer>
//     </Box>
//   );
// };

// Sidebar.propTypes = {
//   drawerOpen: PropTypes.bool,
//   drawerToggle: PropTypes.func,
//   window: PropTypes.object
// };

// export default Sidebar;




import React, {  useRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import { drawerWidth } from 'store/constant';
import classnames from 'classnames';
import { useDispatch,useSelector } from 'react-redux';
import { setMenu } from 'store/customization-slice';

const Sidebar = ({ drawerOpen, drawerToggle, window}) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const customization = useSelector((state) => state.customization);
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current); // Clear any existing timer
    if (!customization.userClicked) {
      dispatch(setMenu({ opened: true }));
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current); // Clear any existing timer
    if (!customization.userClicked) {
      timerRef.current = setTimeout(() => {
        dispatch(setMenu({ opened: false }));
      }, 200); // Delay execution of handleMouseLeave
    }
  };


  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
          component="div"
          style={{
            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
            paddingLeft: '16px',
            paddingRight: '16px'
          }}
        >
          <MenuList />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
        </Box>
      </MobileView>
    </>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        className={classnames({
          drawerOpen: drawerOpen,
          drawerClose: !drawerOpen,
        })}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '124px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object
};

export default Sidebar;