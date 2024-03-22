import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
// import { useState } from 'react';
import ColorPicker from '../../common/color-picker';
import CommonSelect from '../../common/common-select';
import FontSize from '../../common/font-size';
import ImageUploadAndPreview from '../../common/image-upload-and-preview';

const General = ({ state, setState }) => {
  // state handler for general component
  const handleStateChange = (key, value) => {
    setState((state) => ({
      ...state,
      general: {
        ...state.general,
        [key]: value
      }
    }));
  };
  // objects for dropdowns
  const fontFamily = {
    ubuntu: 'Ubuntu',
    openSans: 'Open Sans',
    dejaVuSans: 'DejaVu Sans',
    hind: 'Hind',
    hindMadurai: 'Hind Madurai'
  };
  const imagePosition = {
    topLeft: 'Top Left',
    topCenter: 'Top Center',
    topRight: 'Top Right',
    centerLeft: 'Center Left',
    centerCenter: 'Center Center',
    centerRight: 'Center Right',
    bottomLeft: 'Bottom Left',
    bottomCenter: 'Bottom Center',
    bottomRight: 'Bottom Right'
  };

  return (
    <>
      <Box>
        {/* ============================================ template properties ======================================================== */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Template Properties</AccordionSummary>
          <AccordionDetails>
            {/* ============ Template name ================= */}
            <Grid container spacing={2} rowSpacing={2}>
              <Grid item md={12}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="Template Name"
                    variant="outlined"
                    onChange={(e) => handleStateChange('templateName', e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item md={12}>
                {/* =========== paper size  =============== */}
                <FormControl>
                  <Typography>Paper Size</Typography>
                  <RadioGroup aria-labelledby="" defaultValue="a4" name="" onChange={(e) => handleStateChange('paperSize', e.target.value)}>
                    <Grid container>
                      <FormControlLabel value="a4" control={<Radio />} label="A4" />
                      <FormControlLabel value="a5" control={<Radio />} label="A5" />
                      <FormControlLabel value="letter" control={<Radio />} label="Letter" />
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                {/* =========  Orientation =================  */}
                <FormControl>
                  <Typography>Orientation</Typography>
                  <RadioGroup
                    aria-labelledby=""
                    defaultValue="portrait"
                    name=""
                    onChange={(e) => handleStateChange('orientation', e.target.value)}
                  >
                    <Grid container>
                      <FormControlLabel value="portrait" control={<Radio />} label="Portrait" />
                      <FormControlLabel value="landscape" control={<Radio />} label="Landscape" />
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid container item md={12}>
                {/* ========== Marigns ==================== */}
                <Grid container md={12} rowSpacing={2} spacing={1}>
                  <Typography>Margins</Typography>
                </Grid>
                <Grid container rowSpacing={2} spacing={1}>
                  <Grid item>
                    <TextField
                      id="outlined-basic"
                      label="top"
                      variant="outlined"
                      onChange={(e) => handleStateChange('marginTop', e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="outlined-basic"
                      label="bottom"
                      variant="outlined"
                      onChange={(e) => handleStateChange('marginBottom', e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="outlined-basic"
                      label="left"
                      variant="outlined"
                      onChange={(e) => handleStateChange('marginLeft', e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="outlined-basic"
                      label="right"
                      variant="outlined"
                      onChange={(e) => handleStateChange('marginRight', e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* ===================================================== Font section ========================================================*/}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Font</AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} rowSpacing={2}>
              <Grid item md={12}>
                {/* ========== Font selector =========== */}
                <FormControl fullWidth>
                  <CommonSelect
                    label={'Font Family'}
                    stateHandler={handleStateChange}
                    updatekey={'pdfFont'}
                    defaultValue={'ubuntu'}
                    options={fontFamily}
                  />
                </FormControl>
              </Grid>
              <Grid item md={12}>
                {/*=========== Label Color ============== */}
                <ColorPicker
                  initialColor={state.general.labelColor}
                  onColorChange={handleStateChange}
                  colorKey="labelColor"
                  label="Label Color"
                  enable={true}
                />
              </Grid>
              <Grid item container md={12} spacing={2}>
                <Grid item md={6}>
                  {/* ========== Font Color =============== */}
                  <ColorPicker
                    initialColor={state.general.fontColor}
                    onColorChange={handleStateChange}
                    colorKey="fontColor"
                    label="Font Color"
                    enable={true}
                  />
                </Grid>
                <Grid item md={6}>
                  {/* ========== Font Size =============== */}
                  <FormControl fullWidth>
                    <FontSize label={'Font Size'} value={state.general.fontSize} stateHandler={handleStateChange} updatekey={'fontSize'} />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* ==================================================== Background Section =============================================== */}

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Background</AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1} rowSpacing={3}>
              <Grid item md={12} >
                {/* =========== background image  =========== */}
                <ImageUploadAndPreview
                  label={'Background Image'}
                  stateHandler={handleStateChange}
                  updatekey={'backgroundImage'}
                  image={state.general.backgroundImage}
                />
              </Grid>
              <Grid item xs>
                {/* ================ Image Position ===============*/}
                
                  <FormControl fullWidth>
                    <CommonSelect
                      label={'Image Position'}
                      stateHandler={handleStateChange}
                      updatekey="imagePosition"
                      defaultValue={'centerCenter'}
                      options={imagePosition}
                    />
                  </FormControl>
                
              </Grid>
              <Grid item md={12}>
                {/* ================ Background Color ===============*/}               
                  <Grid container>
                    <Grid item xs='auto'>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.general.backgroundColorEnable}
                            onChange={(e) => handleStateChange('backgroundColorEnable', e.target.checked)}
                          />
                        }
                      />
                    </Grid>

                    <Grid item md>
                      <FormControl fullWidth>
                        <ColorPicker
                          initialColor={state.general.backgroundColor}
                          onColorChange={handleStateChange}
                          colorKey="backgroundColor"
                          label="Background Color"
                          enable={state.general.backgroundColorEnable}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
               
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default General;
