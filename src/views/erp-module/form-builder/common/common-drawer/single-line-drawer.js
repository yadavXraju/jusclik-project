import { Checkbox,FormControl,FormControlLabel, FormGroup, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React from 'react'
import withParamDrawer from 'views/common-section/withParamDrawer'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from 'antd';

const SingleLineDrawer = () => {
   
    const drawerContent=()=>(<>
<Grid container>

<Grid item md={12}>
<TextField placeholder='Feild Label'></TextField>
</Grid>
<Grid item md={12}>
<FormControlLabel
      control={<Checkbox />}
      label="Hide Feild Label"
    />
</Grid>
<Grid item md={12}>
    <FormControl fullWidth>
<TextField multiline minRows={10} placeholder='Instruction'></TextField></FormControl>
</Grid>
<Grid item md={12}>
<ToggleButtonGroup 
        exclusive
        aria-label="text alignment"
      >
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
<Grid item md={12}>
<FormControl fullWidth>
    <TextField placeholder='Placeholder Text'></TextField>
</FormControl>
</Grid>
<Grid item md={12}>
    <Typography>Character Limit</Typography>
    <TextField placeholder='min'></TextField>
    <TextField placeholder='max'></TextField>
</Grid>
<Grid item md={12} >
    <Typography>Validation</Typography>
<FormGroup>
      <FormControlLabel
        control={<Checkbox  name="checkbox1" />}
        label="Mandatory"
      />
      <FormControlLabel
        control={<Checkbox  name="checkbox2" />}
        label="No Duplicates"
      />     
    </FormGroup>
</Grid>
<Grid item md={12}>
    <Typography>Visibilithy</Typography>
<RadioGroup >
      <FormControlLabel control={<Radio />} label="Hide Feild" />
      <FormControlLabel control={<Radio />} label="Disable Feild" />
    </RadioGroup>    
</Grid>
<Grid item>
<Typography>Privacy</Typography>
<FormGroup>
      <FormControlLabel
        control={<Checkbox  name="checkbox1" />}
        label="Mark as Personal"
      />
      <FormControlLabel
        control={<Checkbox  name="checkbox2" />}
        label="Encrypt"
      />     
    </FormGroup>
</Grid>
<Grid item md={12}>
<FormControl fullWidth>
      <Typography>Select Format</Typography>
      <Select
        labelId="format-selector-label"
        id="format-selector"
       
      >
        <MenuItem value="">Select an option</MenuItem>
        <MenuItem value="">Letters Only</MenuItem>
        <MenuItem value="">Letters and Numbers</MenuItem>
        <MenuItem value="">Letters, Numbers, and Spaces</MenuItem>
        <MenuItem value="">Letters and Spaces</MenuItem>
        <MenuItem value="">Custom Entry Format</MenuItem>
      </Select>
    </FormControl>
</Grid>
<Grid item md={12}>
<ToggleButtonGroup 
        exclusive
        aria-label="text alignment"
      >
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
    </>)
    const SingleLineDrawer = withParamDrawer(drawerContent)
  return (
<>
<SingleLineDrawer buttonLabel='Open' drawerTitle='Properties' />
</>
  )
}

export default SingleLineDrawer