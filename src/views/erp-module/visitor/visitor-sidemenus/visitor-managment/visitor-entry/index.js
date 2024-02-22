import React from 'react';
import { useState } from 'react';
import { Chip, Grid, IconButton, Paper, Box, Button, Typography, Drawer } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import VisitorDrawer from './rightDrawer';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

//sample data
const hundredOptions = [
  { label: 'Aamir Khan', year: 1994 },
  { label: 'Shah Rukh Khan', year: 1972 },
  { label: 'Salman Khan', year: 1974 },
  { label: 'Rajinikanth', year: 2008 },
  { label: 'Amitabh Bachchan', year: 1957 },
  { label: 'Priyanka Chopra', year: 1993 },
  { label: 'Deepika Padukone', year: 1994 },
  { label: 'Hrithik Roshan', year: 2003 },
  { label: 'Kareena Kapoor Khan', year: 1966 },
  { label: 'Akshay Kumar', year: 1999 },
  { label: 'Aishwarya Rai Bachchan', year: 2001 },
  { label: 'Ranbir Kapoor', year: 1980 },
  { label: 'Alia Bhatt', year: 1994 },
  { label: 'Ranveer Singh', year: 2010 },
  { label: 'Katrina Kaif', year: 2002 },
  { label: 'Varun Dhawan', year: 1975 }
];

const VisitorEntry = () => {
  const [template, setTemplate] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleChange = (event) => {
    setTemplate(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleIDChange = (event) => {
    setSelectedID(event.target.files[0]);
  };
  const handlePhotoChange = (event) => {
    setSelectedPhoto(event.target.files[0]);
  };

  const handleDeleteFileID = () => {
    setSelectedID(null);
  };
  const handleDeletePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <Grid container spacing={4} sx={{marginTop: '20px'}}>
        <Grid item xs={10}>
          <Paper>
            <Grid container spacing={4} sx={{ p: '30px' }}>
              <Grid item xs={6}>
                <Grid container spacing={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                  <Grid item xs={4}>
                    <Chip
                      label="000186387"
                      onClick={() => {
                        console.log('doing something');
                      }}
                      sx={{ p: 1, width: '100%' }}
                      color="primary"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={hundredOptions}
                      renderInput={(params) => <TextField {...params} label="Visiters" />}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Box>
                      <IconButton sx={{ p: 1 }}>
                        <SkipPreviousIcon sx={{ fontSize: '35px' }} />
                      </IconButton>
                      <IconButton sx={{ p: 1 }}>
                        <NavigateBeforeIcon sx={{ fontSize: '35px' }} />
                      </IconButton>
                      <IconButton sx={{ p: 1 }}>
                        <NavigateNextIcon sx={{ fontSize: '35px' }} />
                      </IconButton>
                      <IconButton sx={{ p: 1 }}>
                        <SkipNextIcon sx={{ fontSize: '35px' }} />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Grid item xs={4}>
                    <Box>
                      <TextField
                        id="outlined-select-option"
                        type="date"
                        fullWidth
                        label="Entry Date"
                        sx={{}}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box>
                      <Chip
                        icon={<CheckBoxOutlinedIcon sx={{ color: 'green !important' }} />}
                        label="1874 Total visitors"
                        variant="outlined"
                        sx={{ padding: '10px', fontSize: '16px' }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box>
                      <Button variant="contained" endIcon={<PeopleOutlineOutlinedIcon />} onClick={toggleDrawer('right', true)}>
                        Show Visitors
                      </Button>
                      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                        <VisitorDrawer />
                      </Drawer>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gate Pass</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={template}
                    label="Gate Pass"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>gate pass 1</MenuItem>
                    <MenuItem value={2}>gate pass 2</MenuItem>
                    <MenuItem value={3}>gate pass 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField id="outlined-basic" label="phone" variant="outlined" fullWidth inputProps={{ maxLength: 10 }} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-select-option"
                  type="time"
                  fullWidth
                  label="Time in"
                  sx={{}}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-select-option"
                  type="time"
                  fullWidth
                  label="Time out"
                  sx={{}}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={template}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Interview</MenuItem>
                    <MenuItem value={2}>Meeting</MenuItem>
                    <MenuItem value={3}>Parents Meeting</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Accompanied by</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={template}
                    label="Accompanied by"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={3}>None</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Temprature"
                  id="outlined-start-adornment"
                  sx={{}}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          <ThermostatOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField id="outlined-basic" label="Addresss (R)" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField id="outlined-basic" label="Remarks" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={template}
                    label="Purpose"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Interview</MenuItem>
                    <MenuItem value={2}>Meeting</MenuItem>
                    <MenuItem value={3}>Parents Meetingh</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Box>
                  <Box>
                    <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                      Upload Photo
                      <VisuallyHiddenInput type="file" accept="image/*" onChange={handlePhotoChange} />
                    </Button>
                  </Box>
                  {selectedPhoto != null ? (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography
                        variant="body1"
                        sx={{ width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
                        {selectedPhoto?.name}
                      </Typography>
                      <IconButton color="primary" onClick={handleDeletePhoto}>
                        <Delete />
                      </IconButton>
                    </Box>
                  ) : null}
                </Box>
                <Box>
                  <Box>
                    <Button
                      component="label"
                      color="secondary"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload ID proof
                      <VisuallyHiddenInput type="file" accept="image/*" onChange={handleIDChange} />
                    </Button>
                  </Box>
                  {selectedID != null ? (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography
                        variant="body1"
                        sx={{ width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
                        {selectedID?.name}
                      </Typography>
                      <IconButton color="primary" onClick={handleDeleteFileID}>
                        <Delete />
                      </IconButton>
                    </Box>
                  ) : null}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">To Meet</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={template}
                    label="Purpose"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>Teacher</MenuItem>
                    <MenuItem value={3}>Principal</MenuItem>
                    <MenuItem value={4}>Peon</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper >
            <Grid container spacing={2} sx={{p: '30px'}}>
              <Grid item xs={12}>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default VisitorEntry;
