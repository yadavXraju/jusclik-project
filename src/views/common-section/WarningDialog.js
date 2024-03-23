import React from 'react';
import { Dialog,  DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import { Box } from '@mui/system';

const WarningDialog = ({ open = {}, onClose = {}, contentText = {}, onConfirm = {} }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* <IconButton sx={{background:'#ffe4bd'}}>
          <WarningTwoToneIcon sx={{color:'#eeb058'}} />
        </IconButton> */}
      </Box>
      {/* <DialogTitle sx={{color:'#eeb058'}}>Warning</DialogTitle> */}
      <Box p={2} sx={{display:'flex', alignItems:'center', borderBottom:'1px solid #eeb058',background:'#ffe9c9'}}>
      <WarningTwoToneIcon sx={{color:'#eeb058', mr:'10px'}} />
        <Typography>Warning </Typography>
      </Box>
      <Box sx={{padding:{sx:'20px 20px 10px 20px', md:'20px 75px 10px 75px'}}}>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
      </DialogContent>
      </Box>
      
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WarningDialog;
