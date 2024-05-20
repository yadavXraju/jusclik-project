import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import { useEffect } from 'react';

const withParamDrawer = (WrappedComponent, WrappedButton) => {
  const WithParamDrawer = (props) => {
    const { anchor, toggleDrawer, customStyle = {} } = useDrawer();
    const { buttonLabel, drawerTitle } = props;
    // console.log(popupState);
    const trigger = (e) => {
        const toggleDrawerEventHandle = toggleDrawer('right', true);
        toggleDrawerEventHandle(e); 
        
    };
    const closeDrawer=(e)=>{
      console.log('e.target',e.target,'e.currentTarget',e.currentTarget);
      const closeDrawerEventHandle=toggleDrawer('right',false)
      closeDrawerEventHandle(e)
    }

    return (
      <Box>
        {!WrappedButton && (
          <Button onClick={(e) => trigger(e)} variant="outlined" sx={customStyle} startIcon={<AddOutlinedIcon />}>
            {buttonLabel}
          </Button>
        )}

        {WrappedButton && <WrappedButton onClick={(e) => trigger(e)}  />}

        <Drawer anchor={'right'} open={anchor.right} onClose={(e)=>closeDrawer(e)}>
          <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
              <Typography variant="h4">{drawerTitle}</Typography>
              <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                Close
              </Button>
            </Box>
            <WrappedComponent {...props} />
          </Box>
        </Drawer>
      </Box>
    );
  };
  return WithParamDrawer;
};

export default withParamDrawer;

// import React from 'react';
// import useDrawer from 'hooks/useDrawer';
// import Drawer from '@mui/material/Drawer';
// import { Button, Typography, Box } from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// const ParamDrawer = ({ buttonLabel, drawerTitle, drawerContent }) => {
//   const { anchor, toggleDrawer } = useDrawer();

//   return (
//     <>
//       <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={AddOutlinedIcon}>
//         {buttonLabel}
//       </Button>
//       <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
//         <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
//             <Typography variant="h4">{drawerTitle}</Typography>
//             <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
//               Close
//             </Button>
//           </Box>
//           {drawerContent}
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default ParamDrawer;
