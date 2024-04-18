import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import React from 'react';
import withParamDrawer from 'views/common-section/withParamDrawer';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from 'antd';

const SingleLineDrawer = () => {
  const drawerContent = () => (
    <>
      <Grid container padding='2rem' sx={{height:"calc(100vh - 100px)"}} className='scrollbar'>
        <Grid item md={12}>
          <TextField placeholder="Feild Label" fullWidth></TextField>
        </Grid>
        <Grid item md={12}>
          <FormControlLabel control={<Checkbox />} label="Hide Feild Label" />
        </Grid>
        <Grid item md={12}>
          <FormControl fullWidth>
            <TextField multiline minRows={10} placeholder="Instruction"></TextField>
          </FormControl>
        </Grid>
        <Grid item md={8} marginTop='2rem'>
          <Typography>Input Text Base</Typography>
          <ToggleButtonGroup exclusive aria-label="text alignment" sx={{marginTop:'0.5rem'}}>
            <ToggleButton value="left" aria-label="left aligned">
              Small
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              Medium
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              Large
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item md={12} sx={{marginTop:"2rem"}}>
          <FormControl fullWidth>
            <TextField placeholder="Placeholder Text"></TextField>
          </FormControl>
        </Grid>
        <Grid item md={12} sx={{marginTop:"2rem"}} display='flex' flexDirection='column'>
          <Typography sx={{flex:1}}>Character Limit</Typography>
          <Box flexDirection='row' display='flex' gap={2} marginTop='0.5rem'>
          <TextField placeholder="min"></TextField>
          <TextField placeholder="max"></TextField>
          </Box>
        </Grid>
        <Grid item md={12} sx={{marginTop:"2rem"}} display='flex' flexDirection='column'>
          <Typography sx={{flex:1}}>Validation</Typography>
          <FormGroup flexDirection='row' display='flex' gap={2}>
            <FormControlLabel control={<Checkbox name="checkbox1" />} label="Mandatory" />
            <FormControlLabel control={<Checkbox name="checkbox2" />} label="No Duplicates" />
          </FormGroup>
        </Grid>
        <Grid item md={12} sx={{marginTop:"2rem"}} display='flex' flexDirection='column'>
          <Typography sx={{flex:1}}>Visibilithy</Typography>
          <RadioGroup  flexDirection='row' display='flex' gap={2}>
            <FormControlLabel control={<Radio />} label="Hide Feild" />
            <FormControlLabel control={<Radio />} label="Disable Feild" />
          </RadioGroup>
        </Grid>
        <Grid item sx={{marginTop:"2rem"}} flexDirection='column' display='flex'>
          <Typography>Privacy</Typography>
          <FormGroup  flexDirection='row' display='flex' gap={2}>
            <FormControlLabel control={<Checkbox name="checkbox1" />} label="Mark as Personal" />
            <FormControlLabel control={<Checkbox name="checkbox2" />} label="Encrypt" />
          </FormGroup>
        </Grid>
        <Grid item md={12} sx={{marginTop:"2rem"}} flexDirection='column'  display='flex' gap={2}>
          <FormControl fullWidth>
            <Typography>Select Format</Typography>
            <Select labelId="format-selector-label" id="format-selector" sx={{marginTop:'1rem'}}>
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="">Letters Only</MenuItem>
              <MenuItem value="">Letters and Numbers</MenuItem>
              <MenuItem value="">Letters, Numbers, and Spaces</MenuItem>
              <MenuItem value="">Letters and Spaces</MenuItem>
              <MenuItem value="">Custom Entry Format</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={8} marginTop='2rem' >
        <Typography>Feild Size</Typography>
          <ToggleButtonGroup exclusive aria-label="text alignment" sx={{marginTop:'0.5rem'}}>
            <ToggleButton value="left" aria-label="left aligned">
              Small
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              Medium
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              Large
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </>
  );
  const SingleLineDrawer = withParamDrawer(drawerContent);
  return (
    <>
      <SingleLineDrawer buttonLabel="Open" drawerTitle="Properties" />
    </>
  );
};

export default SingleLineDrawer;
