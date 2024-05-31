// import React from 'react';
// import useDrawer from 'hooks/useDrawer';
// import Drawer from '@mui/material/Drawer';
// import { Button, Typography, Box  } from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
// import {groups } from './CountryData';

// const OnBoardDrawer = () => {

// //    ============================================ call custom hook for toggle drawer ============================================
// const { anchor, toggleDrawer } = useDrawer();

//   return (
//     <>
//       <Button onClick={toggleDrawer('right', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
//      InitiateOnBoard
//       </Button>
//       <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
//         <Box sx={{ width: '30vw', height:'100vh', padding: 2 }} role="presentation">
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
//             <Typography variant="h4">Initiate On Board</Typography>
//             <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
//               Close
//             </Button>
//           </Box>
//           <Box pt={3}>
// {/*     ================================================= Render Drawer Contant ================================================ */}
//            <ParameterizedAutoComplete   option={groups} customStyle={{width:"60vh !important"}} label={'Select Group Name'} />
//            <Button variant='contained' sx={{position:'fixed',bottom:'10px',right:'10px' }} >Initiate</Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </>

//   );
// };

// export default OnBoardDrawer;



//Code with Reusable Drawer

import React from 'react';
import useDrawer from 'hooks/useDrawer';
import { Button, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import { groups } from './CountryData';
import DrawerLayOut from 'layout/drawer-layout';

const OnBoardDrawer = () => {
  const DrawerBody = (
    <Box pt={3}>
      {/*     ================================================= Render Drawer Contant ================================================ */}
      <ParameterizedAutoComplete option={groups} customStyle={{ width: '60vh !important' }} label={'Select Group Name'} />
      <Button variant="contained" sx={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        Initiate
      </Button>
    </Box>
  );

  //    ============================================ call custom hook for toggle drawer ============================================
  const { anchor, toggleDrawer } = useDrawer();

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
        InitiateOnBoard
      </Button>
      <DrawerLayOut
        Title="InitiateOnBoard"
        Body={DrawerBody}
        anchor={anchor}
        toggleDrawer={toggleDrawer}
        direction="right"
        customStyles={{ width: { sm: '100vw', md: 600 } }}
      />
    </>
  );
};

export default OnBoardDrawer;
