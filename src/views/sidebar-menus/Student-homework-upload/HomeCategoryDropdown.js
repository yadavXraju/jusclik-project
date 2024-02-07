import * as React from 'react';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import HomeCategory from './HomeCategory'; // Assuming HomeCategory component is in a separate file
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  fullWidth: {
    width: '100%',
  },
});

export default function HomeCategoryDropdown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedClass, setSelectedClass] = React.useState('');

  const handleTextFieldClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (classSelected) => () => {
    setSelectedClass(classSelected);
    setAnchorEl(null);
  };

  const handleSelectAll = () => {
    setSelectedClass('Select All');
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <FormControl className={classes.fullWidth}>
      <InputLabel id="demo-multiple-name-label">HomeWork</InputLabel>
      <TextField
        id="home-category-textfield"
        aria-controls="home-category-menu"
        aria-haspopup="true"
        onClick={handleTextFieldClick}
        placeholder="Select Class"
        value={selectedClass}
        readOnly
        fullWidth
      />
      <Menu
        id="home-category-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSelectAll}>Select All</MenuItem>
        <MenuItem onClick={handleMenuItemClick('V-A')}>V-A</MenuItem>
        <MenuItem onClick={handleMenuItemClick('V-B')}>V-B</MenuItem>
        <MenuItem onClick={handleMenuItemClick('V-C')}>V-C</MenuItem>
        <MenuItem onClick={handleMenuItemClick('V-D')}>V-D</MenuItem>
        <MenuItem onClick={handleMenuItemClick('V-F')}>V-F</MenuItem>
      </Menu>
    </FormControl>
  );
}
