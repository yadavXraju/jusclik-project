import React,{useState} from 'react'
import { Box,TextField,InputLabel,Grid,Tabs,Tab,MenuItem, FormControl,FormControlLabel,Paper,Select,Switch,Fade,Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
// import { hundredOptions } from './StudentData';


const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5
        }
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff'
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500
      })
    }
  }));
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }
  
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Fade in={value === index}>
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      </Fade>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  };
  

function GardianComponent() {


    const [template, setTemplate] = useState('');
    // const [section, setSection] = useState('');



  const handleChange = (event) => {
    setTemplate(event.target.value);
  };

 




  const [valueOfTab, setValueOfTab] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValueOfTab(newValue);
  };


  
  return (
    <div>
                  <Paper>
                <Box sx={{ padding: '20px' }}>
                  <Tabs value={valueOfTab} onChange={handleChangeTabs} aria-label="basic tabs example">
                    <Tab label="Mother" {...a11yProps(0)} />
                    <Tab label="Father" {...a11yProps(1)} />
                    <Tab label="Guardian 1" {...a11yProps(2)} />
                    <Tab label="Guardian 2" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CustomTabPanel value={valueOfTab} index={0}>
                      <Grid container spacing={3} direction="row" alignItems="center">
                        <Grid item xs={4}>
                          <Box>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Title</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={template}
                                label="Class"
                                onChange={handleChange}
                              >
                                <MenuItem value={1}>Mr.</MenuItem>
                                <MenuItem value={2}>Ms.</MenuItem>
                                <MenuItem value={3}>Miss.</MenuItem>
                                <MenuItem value={3}>Dr.</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label="Active"
                            sx={{ marginLeft: '20px' }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Company</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={template}
                              label="Company"
                              onChange={handleChange}
                            >
                              <MenuItem value={1}>ShauryaSoft</MenuItem>
                              <MenuItem value={2}>Microrsoft</MenuItem>
                              <MenuItem value={3}>Google</MenuItem>
                              <MenuItem value={3}>Amazon </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="name-textfield" label="Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="name-textfield" label="Designation" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="name-textfield"
                            label="DOB"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="address-textfield-2" label="Address" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="occupation-textfield" label="Occupation" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="area-textfield" label="Area" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="eduation-textfield" label="Education" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="city-textfield" label="City" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="pin-textfield" label="Pin" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="aadhar-textfield" label="Aadhar No" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="pan-textfield" label="PAN No" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="email-textfield" label="Email" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="phone-textfield" label="Phone No" variant="outlined" fullWidth />
                        </Grid>
                      </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={valueOfTab} index={1}>
                      <Grid container spacing={3} direction="row" alignItems="center">
                        <Grid item xs={4}>
                          <Box>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Title</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={template}
                                label="Class"
                                onChange={handleChange}
                              >
                                <MenuItem value={1}>Mr.</MenuItem>
                                <MenuItem value={2}>Ms.</MenuItem>
                                <MenuItem value={3}>Miss.</MenuItem>
                                <MenuItem value={3}>Dr.</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label="Active"
                            sx={{ marginLeft: '20px' }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Company</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={template}
                              label="Class"
                              onChange={handleChange}
                            >
                              <MenuItem value={1}>ShauryaSoft</MenuItem>
                              <MenuItem value={2}>Microrsoft</MenuItem>
                              <MenuItem value={3}>Google</MenuItem>
                              <MenuItem value={3}>Amazon </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="name-textfield" label="Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="name-textfield" label="Designation" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="name-textfield"
                            label="DOB"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="address-textfield-2" label="Address" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="occupation-textfield" label="Occupation" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="area-textfield" label="Area" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="eduation-textfield" label="Education" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="city-textfield" label="City" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="pin-textfield" label="Pin" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="aadhar-textfield" label="Aadhar No" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="pan-textfield" label="PAN No" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="email-textfield" label="Email" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="phone-textfield" label="Phone No" variant="outlined" fullWidth />
                        </Grid>
                      </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={valueOfTab} index={2}>
                      <Grid container spacing={3} direction="row" alignItems="center">
                        <Grid item xs={4}>
                          <Box>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Title</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={template}
                                label="Class"
                                onChange={handleChange}
                              >
                                <MenuItem value={1}>Mr.</MenuItem>
                                <MenuItem value={2}>Ms.</MenuItem>
                                <MenuItem value={3}>Miss.</MenuItem>
                                <MenuItem value={3}>Dr.</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label="Active"
                            sx={{ marginLeft: '20px' }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Company</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={template}
                              label="Class"
                              onChange={handleChange}
                            >
                              <MenuItem value={1}>ShauryaSoft</MenuItem>
                              <MenuItem value={2}>Microrsoft</MenuItem>
                              <MenuItem value={3}>Google</MenuItem>
                              <MenuItem value={3}>Amazon </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="name-textfield" label="Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="name-textfield" label="Designation" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="name-textfield"
                            label="DOB"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="address-textfield-2" label="Address" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="occupation-textfield" label="Occupation" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="area-textfield" label="Area" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="eduation-textfield" label="Education" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="city-textfield" label="City" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="pin-textfield" label="Pin" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="aadhar-textfield" label="Aadhar No" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="pan-textfield" label="PAN No" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="email-textfield" label="Email" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="phone-textfield" label="Phone No" variant="outlined" fullWidth />
                        </Grid>
                      </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={valueOfTab} index={3}>
                      <Grid container spacing={3} direction="row" alignItems="center">
                        <Grid item xs={4}>
                          <Box>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Title</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={template}
                                label="Class"
                                onChange={handleChange}
                              >
                                <MenuItem value={1}>Mr.</MenuItem>
                                <MenuItem value={2}>Ms.</MenuItem>
                                <MenuItem value={3}>Miss.</MenuItem>
                                <MenuItem value={3}>Dr.</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label="Active"
                            sx={{ marginLeft: '20px' }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Company</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={template}
                              label="Class"
                              onChange={handleChange}
                            >
                              <MenuItem value={1}>ShauryaSoft</MenuItem>
                              <MenuItem value={2}>Microrsoft</MenuItem>
                              <MenuItem value={3}>Google</MenuItem>
                              <MenuItem value={3}>Amazon </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="name-textfield" label="Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="name-textfield" label="Designation" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="name-textfield"
                            label="DOB"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="address-textfield-2" label="Address" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="occupation-textfield" label="Occupation" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="area-textfield" label="Area" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="eduation-textfield" label="Education" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="city-textfield" label="City" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="pin-textfield" label="Pin" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="aadhar-textfield" label="Aadhar No" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="pan-textfield" label="PAN No" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField id="email-textfield" label="Email" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField id="phone-textfield" label="Phone No" variant="outlined" fullWidth />
                        </Grid>
                      </Grid>
                    </CustomTabPanel>
                  </Grid>
                </Grid>
              </Paper>
    </div>
  )
}

export default GardianComponent
