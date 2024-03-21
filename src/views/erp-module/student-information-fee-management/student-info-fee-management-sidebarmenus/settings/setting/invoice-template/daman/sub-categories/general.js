import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useState } from 'react';
import ColorPicker from '../../common/color-picker';

const General = ({state,setState}) => {

  const [color, setColor] = useState({
    labelColor: '#ffffff',
    fontColor:'#000000',
    backgroundColor:'#ffffff',
  });
(()=>setState(state))
  const handleColorChange = (key, newColor) => {
    setColor({
      ...color,
      [key]: newColor,
    });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); // Store the selected file in state
  };
  console.log(selectedFile);
  const handleRemoveFile = () => {
    setSelectedFile(null); // Remove the selected file from state
  };
(()=>state)

  return (
    <>
      <Box>
        {/* template properties */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
            Template Properties
          </AccordionSummary>
          <AccordionDetails>
            {/* Template name ============================== ROW 1 */}
            <TextField id="outlined-basic" label="Template Name" variant="outlined" onChange={()=>{}}/>
            {/* paper size radio group ====================== ROW 2 */}
            <FormControl>
              <Typography>Paper Size</Typography>
              <RadioGroup
                aria-labelledby=""
                defaultValue="a4"
                name=""
                onChange={() =>{}} >
                <Grid container>
                  <FormControlLabel value="a4" control={<Radio />} label="A4" />
                  <FormControlLabel value="letter" control={<Radio />} label="Letter" />
                </Grid>
              </RadioGroup>
            </FormControl>

            {/*  Orientation    radio group =================  ROW 3 */}
            <FormControl>
              <Typography>Orientation</Typography>
              <RadioGroup
                aria-labelledby=""
                defaultValue="portrait"
                name=""
                onChange={() => {}}
              >
                <Grid container>
                  <FormControlLabel value="portrait" control={<Radio />} label="Portrait" />
                  <FormControlLabel value="pandscape" control={<Radio />} label="Landscape" />
                </Grid>
              </RadioGroup>
            </FormControl>

            {/* Marigns--- 4*input ======================== ROW 4 */}
            <Typography>Margins</Typography>
            <TextField id="outlined-basic" label="top" variant="outlined" />
            <TextField id="outlined-basic" label="bottom" variant="outlined" />
            <TextField id="outlined-basic" label="left" variant="outlined" />
            <TextField id="outlined-basic" label="right" variant="outlined" />

          </AccordionDetails>
        </Accordion>
{/* font section */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} >
            Font
          </AccordionSummary>
          <AccordionDetails>
            {/* Font selector ================ ROW 1 */}
          <FormControl fullWidth>
                                <InputLabel>Font Family</InputLabel>
                                <Select
                                    label='Font Family'
                                    onChange={(e) => (handleState('pageFontFamily', e.target.value))}
                                    defaultValue={'ubuntu'}>
                                    <MenuItem value={'ubuntu'}>Ubuntu</MenuItem>
                                    <MenuItem value={'openSans'}>Open Sans</MenuItem>
                                    <MenuItem value={'dejaVuSans'}>DejaVu Sans</MenuItem>
                                    <MenuItem value={'hind'}>Hind</MenuItem>
                                    <MenuItem value={'hindMadurai'}>Hind Madurai</MenuItem>
                                </Select>
                            </FormControl>
           {/* Label Color ================= Row 2 */}
           <ColorPicker
        initialColor={color.labelColor}
        onColorChange={handleColorChange}
        colorKey="labelColor"
        label='Label Color'
      />
      {/* Font Color ===================== Row 3 */}
      <ColorPicker
        initialColor={color.fontColor}
        onColorChange={handleColorChange}
        colorKey="fontColor"
        label='Font Color'
      />
       <TextField
      type="number"
      label="Font Size"
      // value={value}
      InputProps={{
        endAdornment: <InputAdornment position="end">pt</InputAdornment>,
      }}
    />
          </AccordionDetails>
        </Accordion>


{/* background section */}

<Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} >
            Background
          </AccordionSummary>
          <AccordionDetails>
 {/* background image upload */}
     
  <FormControl fullWidth>
{/*     
      <InputLabel>Background Image</InputLabel>
      <Button variant="contained" component="label">
        Upload File
        <input
          id="background-image-upload"
          type="file"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button> */}
    </FormControl>
    <FormControl fullWidth>
      <InputLabel>Background Image</InputLabel>
      <input
        id="background-image-upload"
        type="file"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <Button variant="contained" component="label">
        {selectedFile ? 'Change File' : 'Upload File'}
        <input
          type="file"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>
      {selectedFile && (
        <div style={{ marginTop: 10 }}>
          <img src={URL.createObjectURL(selectedFile)} alt="Preview" style={{ maxWidth: 200 }} />
          <Button variant="outlined" color="secondary" onClick={handleRemoveFile} style={{ marginLeft: 10 }}>
            Remove
          </Button>
        </div>
      )}
    </FormControl>

    {/* image position =====================*/}
    <FormControl fullWidth>
                                <InputLabel>Image Position</InputLabel>
                                <Select
                                    label='Font Family'
                                    onChange={(e) => (handleState('pageFontFamily', e.target.value))}
                                    defaultValue={'centerCenter'}>
                                    <MenuItem value={'topLeft'}>Top Left</MenuItem>
                                    <MenuItem value={'topCenter'}>Top Center</MenuItem>
                                    <MenuItem value={'topRight'}>Top Right</MenuItem>
                                    <MenuItem value={'centerLeft'}>Center Left</MenuItem>
                                    <MenuItem value={'centerCenter'}>Center Center</MenuItem>
                                    <MenuItem value={'centerRight'}>Center Right</MenuItem>
                                    <MenuItem value={'bottomLeft'}>Bottom Left</MenuItem>
                                    <MenuItem value={'bottomCenter'}>Bottom Center</MenuItem>
                                    <MenuItem value={'bottomRight'}>Bottom Right</MenuItem>

                                </Select>
                            </FormControl>

                            <ColorPicker
        initialColor={color.backgroundColor}
        onColorChange={handleColorChange}
        colorKey="backgroundColor"
        label='Background Color'
      />
          </AccordionDetails>
        </Accordion>

      </Box>
    </>
  );
};

export default General;