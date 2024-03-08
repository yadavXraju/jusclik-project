import React from 'react';
import Button from '@mui/material/Button';
import BootstrapDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Typography, ListItem, Divider, Avatar, ListItemAvatar, List, ListItemText, ListItemIcon } from '@mui/material';

const SelectAccount = ({ open, onClose }) => {
  const handleClose = () => {
    onClose(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Select your account
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
            {[
              { id: 1, name: 'Hrm Global School' },
              { id: 2, name: 'Green Crescent Public School' },
              { id: 3, name: 'DPS Knowledge Park - V' }
            ].map((item) => (
              <React.Fragment key={item.id}>
                <ListItem sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                          SSPL
                        </Typography>{' '}
                        <br />
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                          Login ID: Shau1819
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <ListItemIcon sx={{ flexDirection: 'row-reverse' }}>
                    <KeyboardArrowRightOutlinedIcon />
                  </ListItemIcon>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Select
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default SelectAccount;
