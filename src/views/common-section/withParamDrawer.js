import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const withParamDrawer = (WrappedComponent) => {
    const WithParamDrawer = (props) => {
        const { anchor, toggleDrawer, customStyle={} } = useDrawer();
        const { buttonLabel, drawerTitle } = props;

        return (
            <>
                <Button onClick={toggleDrawer('right', true)} variant="outlined" sx={customStyle} startIcon={<AddOutlinedIcon />}>
                    {buttonLabel}
                </Button>
                <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
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
            </>
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