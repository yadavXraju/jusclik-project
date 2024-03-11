import React from 'react';
import Button from '@mui/material/Button';
import BootstrapDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import DefaultAvatar from '../../../assets/images/defaultAvatar.jpeg';
import {
  Typography,
  ListItem,
  Divider,
  ListItemAvatar,
  List,
  ListItemText,
  ListItemIcon,
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router';

const SelectAccount = ({ open, onClose }) => {
  const theme = useTheme(); // Accessing theme object using useTheme hook

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const handleClose = () => {
    onClose(false);
  };

  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
    handleClose();
  };

  // Define common styles
  const styles = {
    dialogTitle: {
      textAlign: 'center',
      backgroundColor: '#E64B4C',
      borderRadius: '50px',
      color: '#ffffff',
      fontFamily: 'plus Jakarta sans',
      fontSize: isMobile ? '18px' : '25px',
      fontWeight: 500
    },
    closeButton: {
      position: 'absolute',
      right: '5px',
      top: '15px',
      color: (theme) => theme.palette.common.white
    },
    listItemText: {
      color: '#9c9c9c',
      fontSize: '13px',
      fontFamily: 'plus Jakarta sans'
    },
    button: {
      color: '#E64B4C',
      fontFamily: 'plus Jakarta sans',
      fontSize: '12px',
      fontWeight: 500,
      padding: '10px',
      justifyContent: 'end'
    },
    listItem: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            borderRadius: '35px'
          }
        }}
      >
        <DialogTitle sx={styles.dialogTitle} id="customized-dialog-title">
          Choose Profile
        </DialogTitle>
        <IconButton aria-label="close" onClick={handleClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <List sx={{ width: '100%', minWidth: isMobile ? 310 : 350, bgcolor: 'background.paper' }}>
            {[
              { id: 1, name: 'Anurag Singh', description: 'SSPL', loginId: 'Shau1819', path: '/parent/dashboard' },
              { id: 2, name: 'Tamanna Bhatia', description: 'SSPL', loginId: 'Shau1819', path: '/class-teacher/dashboard' },
              { id: 3, name: 'Jaspreet Singh', description: 'SSPL', loginId: 'Shau1819', path: '/erp/visitor/dashboard' }
            ].map((item) => (
              <React.Fragment key={item.id}>
                <ListItem sx={styles.listItem} onClick={() => handleItemClick(item.path)}>
                  <ListItemAvatar>
                    <Avatar src={DefaultAvatar} sx={{ height: '50px', width: '50px' }} />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ paddingLeft: '10px' }}
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <Typography variant="body2" sx={styles.listItemText}>
                          {item.description}
                        </Typography>
                        <Typography variant="body2" sx={styles.listItemText}>
                          Login ID: {item.loginId}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" sx={{ borderStyle: 'dashed' }} />
              </React.Fragment>
            ))}
          </List>
        </DialogContent>
        <Button autoFocus onClick={handleClose} sx={styles.button}>
          Done
          <ListItemIcon sx={styles.button}>
            <ArrowRightAltOutlinedIcon />
          </ListItemIcon>
        </Button>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default SelectAccount;
