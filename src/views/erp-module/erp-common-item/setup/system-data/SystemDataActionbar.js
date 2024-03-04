import { Box } from '@mui/system';
import React from 'react';
import {ButtonGroup, Button} from '@mui/material';
// import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
//import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import ReOrderDrawer from './Re-OrderDrawer';
import MargeDrawer from './MargeButton';

function SystemDataActionbar() {
  return (
    <>
      <Box p={1} sx={{display:'flex', justifyContent:'end'}}>
        <ReOrderDrawer/>
        {/* <Button variant="outlined" endIcon={<ImportExportOutlinedIcon/>}>Re-Order</Button> */}
        <ButtonGroup sx={{marginX:'10px'}} variant="outlined" aria-label="Basic button group">
          <Button> <PictureAsPdfOutlinedIcon/> </Button>
          <Button> <NoteAddOutlinedIcon/> </Button>
        </ButtonGroup>
        {/* <Button variant="contained" endIcon={<CloseFullscreenIcon/>}>Marge</Button> */}
         <MargeDrawer/>  
      </Box>
    </>
  );
}

export default SystemDataActionbar;
