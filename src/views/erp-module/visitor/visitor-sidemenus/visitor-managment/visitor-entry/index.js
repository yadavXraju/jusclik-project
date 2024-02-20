import React from 'react';
import { useState } from 'react';
import { Chip, Grid, IconButton, Paper, Box } from '@mui/material';
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

  const handleChange = (event) => {
    setTemplate(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Paper sx={{ marginTop: '50px' }}>
        <Grid container spacing={4} sx={{ p: '20px' }}>
          <Grid item xs={6}>
            <Grid container spacing={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Grid item xs={4}>
                <Chip
                  label="000186387"
                  onClick={() => {
                    console.log('doing something');
                  }}
                  sx={{ p: 1, width: '100%' }}
                />
              </Grid>
              <Grid item xs={8}>
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
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={8}>
                <TextField
                  id="outlined-select-option"
                  type="date"
                  fullWidth
                  label="Entry Date"
                  sx={{ margin: '10px' }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Chip icon={<CheckBoxOutlinedIcon sx={{ color: 'green !important' }} />} label="1874 Total visitors" variant="outlined" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={hundredOptions}
              renderInput={(params) => <TextField {...params} label="Visiters" />}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gate Pass</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={template} label="Gate Pass" onChange={handleChange}>
                <MenuItem value={1}>gate pass 1</MenuItem>
                <MenuItem value={2}>gate pass 2</MenuItem>
                <MenuItem value={3}>gate pass 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Disable OTP"
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="phone" variant="outlined" fullWidth  inputProps={{ maxLength: 10 }}  />
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
        </Grid>
      </Paper>
    </>
  );
};

export default VisitorEntry;
