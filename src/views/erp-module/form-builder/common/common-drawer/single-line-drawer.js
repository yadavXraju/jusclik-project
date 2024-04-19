import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, MenuItem, Radio, RadioGroup, Select, TextField, Typography, Button } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const DrawerContent = ({ toggleDrawer }) => (
  <>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: "0px 20px" }}>
      <Typography variant="h4">Properties</Typography>
      <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
        Close
      </Button>
    </Box>
    <Grid container padding='2rem' sx={{ height: "calc(100vh - 50px)", width: "600px" }} className='scrollbar'>
      <Grid item md={12}>
        <TextField placeholder="Feild Label" fullWidth sx={{borderRadius:"4px"}}></TextField>
      </Grid>
      <Grid item md={12}>
        <FormControlLabel control={<Checkbox />} label="Hide Feild Label" />
      </Grid>
      <Grid item md={12}>
        <FormControl fullWidth>
          <TextField multiline minRows={10} placeholder="Instruction" sx={{borderRadius:"4px"}}></TextField>
        </FormControl>
      </Grid>
      <Grid item md={8} marginTop='2rem'>
        <Typography>Input Text Base</Typography>
        <ToggleButtonGroup exclusive aria-label="text alignment" sx={{ marginTop: '0.5rem' }}>
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
      <Grid item md={12} sx={{ marginTop: "2rem" }}>
        <FormControl fullWidth>
          <TextField placeholder="Placeholder Text" sx={{borderRadius:"4px"}}></TextField>
        </FormControl>
      </Grid>
      <Grid item md={12} sx={{ marginTop: "2rem" }} display='flex' flexDirection='column'>
        <Typography sx={{ flex: 1 }}>Character Limit</Typography>
        <Box flexDirection='row' display='flex' gap={2} marginTop='0.5rem'>
          <TextField placeholder="min" sx={{borderRadius:"4px"}}></TextField>
          <TextField placeholder="max" sx={{borderRadius:"4px"}}></TextField>
        </Box>
      </Grid>
      <Grid item md={12} sx={{ marginTop: "2rem" }} display='flex' flexDirection='column'>
        <Typography sx={{ flex: 1 }}>Validation</Typography>
        <FormGroup flexDirection='row' display='flex' gap={2}>
          <FormControlLabel control={<Checkbox name="checkbox1" />} label="Mandatory" />
          <FormControlLabel control={<Checkbox name="checkbox2" />} label="No Duplicates" />
        </FormGroup>
      </Grid>
      <Grid item md={12} sx={{ marginTop: "2rem" }} display='flex' flexDirection='column'>
        <Typography sx={{ flex: 1 }}>Visibilithy</Typography>
        <RadioGroup flexDirection='row' display='flex' gap={2}>
          <FormControlLabel control={<Radio />} label="Hide Feild" />
          <FormControlLabel control={<Radio />} label="Disable Feild" />
        </RadioGroup>
      </Grid>
      <Grid item sx={{ marginTop: "2rem" }} flexDirection='column' display='flex'>
        <Typography>Privacy</Typography>
        <FormGroup flexDirection='row' display='flex' gap={2}>
          <FormControlLabel control={<Checkbox name="checkbox1" />} label="Mark as Personal" />
          <FormControlLabel control={<Checkbox name="checkbox2" />} label="Encrypt" />
        </FormGroup>
      </Grid>
      <Grid item md={12} sx={{ marginTop: "2rem" }} flexDirection='column' display='flex' gap={2}>
        <FormControl fullWidth>
          <Typography>Select Format</Typography>
          <Select labelId="format-selector-label" id="format-selector" sx={{ marginTop: '1rem' }}>
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
        <ToggleButtonGroup exclusive aria-label="text alignment" sx={{ marginTop: '0.5rem' }}>
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

export default DrawerContent;


