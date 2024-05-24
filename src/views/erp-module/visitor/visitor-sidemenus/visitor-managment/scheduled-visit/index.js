import React from 'react';
import { useState, useRef } from 'react';
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import VisitorDrawer from '../RightDrawer';
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from 'react-to-print';
import AvatarImage from 'assets/images/Avatar-images/avatar.png';

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
  { label: 'Aamir Khan', year: 1994, id: '686712729', index: 0 },
  { label: 'Shah Rukh Khan', year: 1972, id: '446712729', index: 1 },
  { label: 'Salman Khan', year: 1974, id: '126712729', index: 2 },
  { label: 'Rajinikanth', year: 2008, id: '456712729', index: 3 },
  { label: 'Amitabh Bachchan', year: 1957, id: '906712729', index: 4 },
  { label: 'Priyanka Chopra', year: 1993, id: '766712729', index: 5 },
  { label: 'Deepika Padukone', year: 1994, id: '534712729', index: 6 },
  { label: 'Hrithik Roshan', year: 2003, id: '68673652729', index: 7 },
  { label: 'Kareena Kapoor Khan', year: 1966, id: '7626712729', index: 8 },
  { label: 'Akshay Kumar', year: 1999, id: '621812729', index: 9 },
  { label: 'Aishwarya', year: 2001, id: '123712729', index: 10 },
  { label: 'Ranbir Kapoor', year: 1980, id: '2762112729', index: 11 },
  { label: 'Alia Bhatt', year: 1994, id: '216112729', index: 12 },
  { label: 'Ranveer Singh', year: 2010, id: '261712729', index: 13 },
  { label: 'Katrina Kaif', year: 2002, id: '127712729', index: 14 },
  { label: 'Varun Dhawan', year: 1975, id: '7906712729', index: 15 }
];

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2>{props.school.name}</h2>
          <p>{props.school.address}</p>
          <p>{props.school.phone}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h4 style={{ textDecoration: 'underline' }}>Visitor Slip</h4>
        </div>
        <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ul style={{ listStyle: 'none' }}>
              <li style={{padding: '10px'}}>{`Visitor No: ${props.user.id}`}</li>
              <li style={{padding: '10px'}}>{`Visitor Name: ${props.user.label}`}</li>
              <li style={{padding: '10px'}}>{`Purpose: ${props.user.id}`}</li>
              <li style={{padding: '10px'}}>{`To meet: ${props.user.id}`}</li>
              <li style={{padding: '10px'}}>{`Address:  ${props.user.id}`}</li>
            </ul>
            <ul style={{ listStyle: 'none' }}>
              <li style={{padding: '10px'}}>{`Category: ${props.user.id}`}</li>
              <li style={{padding: '10px'}}>{`Remarks: ${props.user.id}`}</li>
              <li style={{padding: '10px'}}>{`Entry date: ${props.user.id}`}</li>
              <li style={{padding: '10px'}}>{`Phone: ${props.user.id}`}</li>
              <li style={{padding: '10px'}}>{`Time in: ${props.user.id}`}</li>
            </ul>
          </div>
          <div>
            <img src={AvatarImage} alt="avatar" style={{height: "90px", width: "auto"}}/>
          </div>
        </div>
      </div>
    </div>
  );
});

const ScheduledVisit = () => {
  const [template, setTemplate] = useState('');
  const [selectedID, setSelectedID] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const [value, setValue] = useState(hundredOptions[0]);
  const [inputValue, setInputValue] = useState('');

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
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

  const handleFirst = () => {
    setValue(hundredOptions[0]);
  };
  const handlePrevious = (index) => {
    const finalIndex = index == 0 ? hundredOptions.length - 1 : index - 1;
    setValue(hundredOptions[finalIndex]);
  };
  const handleNext = (index) => {
    const finalIndex = index == hundredOptions.length - 1 ? 0 : index + 1;
    setValue(hundredOptions[finalIndex]);
  };
  const handleLast = () => {
    setValue(hundredOptions[hundredOptions.length - 1]);
  };

  return (
    <>
      <Grid container spacing={4} sx={{ marginTop: '20px' }}>
        <Grid item xs={10}>
          <Paper>
            <Grid container spacing={3} sx={{ p: '25px' }}>
              <Grid item xs={6}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                  <Grid item xs={4}>
                    <Chip
                      label={value?.id}
                      onClick={() => {
                        console.log('doing something');
                      }}
                      sx={{ p: 1, width: '100%' }}
                      color="primary"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={hundredOptions}
                      renderInput={(params) => <TextField {...params} label="Visiters" />}
                      value={value}
                      onChange={(event, newValue) => {
                        // console.log(event.target.index)
                        console.log(newValue);
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newValue) => {
                        setInputValue(newValue);
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ marginLeft: '10px' }}>
                      <IconButton sx={{ p: 0 }} id="first" onClick={() => handleFirst()}>
                        <SkipPreviousIcon sx={{ fontSize: '25px' }} />
                      </IconButton>
                      <IconButton sx={{ p: 0 }} id="previous" onClick={() => handlePrevious(value.index)}>
                        <NavigateBeforeIcon sx={{ fontSize: '25px' }} />
                      </IconButton>
                      <IconButton sx={{ p: 0 }} id="next" onClick={() => handleNext(value.index)}>
                        <NavigateNextIcon sx={{ fontSize: '25px' }} />
                      </IconButton>
                      <IconButton sx={{ p: 0 }} id="last" onClick={() => handleLast()}>
                        <SkipNextIcon sx={{ fontSize: '25px' }} />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Grid item xs={8}>
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
                        sx={{ fontSize: '12px' }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2} sx={{display: 'flex', justifyContent: "space-around", alignItems: "center"}}>
                  <Grid item xs={8}>
                    <TextField id="outlined-basic" label="phone" variant="outlined" fullWidth inputProps={{ maxLength: 10 }} />
                  </Grid>
                  <Grid item xs={4}>
                    <Chip label="Security Code: 86865" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-select-option"
                      type="date"
                      fullWidth
                      label="Visit date"
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
                      label="Visit time"
                      sx={{}}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </Grid>
                </Grid>
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
          <Paper>
            <Grid container spacing={3} sx={{ p: '25px' }}>
              <Grid item xs={12}>
                <Box>
                  <Box style={{ display: 'none' }}>
                    <ComponentToPrint
                      ref={componentRef}
                      user={value}
                      school={{
                        name: 'SHAURYA INTERNATIONAL SCHOOL, GURUGRAM',
                        address: 'Shree Awaas Apartment-Dwarka',
                        phone: '011-45525909',
                        other: 'other props mention here'
                      }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<PrintIcon />}
                    fullWidth
                    sx={{ display: 'flex', justifyContent: 'center' }}
                    onClick={handlePrint}
                  >
                    Print
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<PeopleOutlineOutlinedIcon />}
                    onClick={toggleDrawer('right', true)}
                    fullWidth
                  >
                    Show Visitors
                  </Button>
                  <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                    <VisitorDrawer />
                  </Drawer>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ScheduledVisit;
