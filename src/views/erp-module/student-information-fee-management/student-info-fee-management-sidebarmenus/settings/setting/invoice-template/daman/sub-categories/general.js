import { Box, Checkbox, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Tab, Tabs, TextField, Typography } from '@mui/material';

import React, { useState } from 'react';
import ColorPicker from '../../common/color-picker';
import CommonSelect from '../../common/common-select';
import FontSize from '../../common/font-size';
// import ImageUploadAndPreview from '../../common/image-upload-and-preview';
import { fontFamily} from '../../common/common-states';
import { useDispatch } from 'react-redux';
import { updateGeneralProperty } from 'store/student-info-and-fee/setting/Invoice-Template-Slice';
import { useSelector } from 'react-redux';
import DragAndDropFile from '../../common/image-upload-and-preview';
// to view data this import not needed in general

const General = () => {
  const dispatch = useDispatch();
  const generalSettings = useSelector((state) => state.invoiceTemplate.general);

  // state handler for general component
  const handleStateChange = (key, value) => {
    dispatch(updateGeneralProperty({ key, value }));
  };

  const templateProperties = (
    <>
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
            <Typography variant="h5">Paper Size</Typography>
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
            <Typography variant="h5">Orientation</Typography>
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
        <Grid container item md={12} rowSpacing={2}>
          {/* ========== Marigns ==================== */}
          <Grid item md={12}>
            <Typography variant="h5">Margins</Typography>
          </Grid>
          <Grid container item rowSpacing={2} spacing={1}>
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
    </>
  );
  const font = (
    <>
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
            initialColor={generalSettings.labelColor}
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
              initialColor={generalSettings.fontColor}
              onColorChange={handleStateChange}
              colorKey="fontColor"
              label="Font Color"
              enable={true}
            />
          </Grid>
          <Grid item md={6}>
            {/* ========== Font Size =============== */}
            <FormControl fullWidth>
              <FontSize label={'Font Size'} value={generalSettings.fontSize} stateHandler={handleStateChange} updatekey={'fontSize'} />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
  const background = (
    <>
      <Grid container spacing={1} rowSpacing={3}>
        <Grid item md={12}>
          {/* =========== background image  =========== */}
          <DragAndDropFile stateHandler={handleStateChange}
            updatekey={'backgroundImage'} 
            selectedFile={generalSettings.backgroundImage}/>
        </Grid>
        <Grid item md={12}>
          {/* ================ Background Color ===============*/}
          <Grid container columnSpacing={2}>
            <Grid item md>
              <FormControl fullWidth>
                <ColorPicker
                  initialColor={generalSettings.backgroundColor}
                  onColorChange={handleStateChange}
                  colorKey="backgroundColor"
                  label="Background Color"
                  enable={generalSettings.backgroundColorEnable}
                />
              </FormControl>
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={generalSettings.backgroundColorEnable}
                    onChange={(e) => handleStateChange('backgroundColorEnable', e.target.checked)}
                    sx={{ marginRight: '0' }}
                  />
                }
                sx={{ marginRight: '0' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
  
  const tabs = [
    { label: 'Template Properties', content: templateProperties },
    { label: 'Background', content: background },
    { label: 'Font', content: font }
  ];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Tabs value={value} onChange={handleChange}  sx={{marginBottom:'1rem'}}>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
        {tabs.map((tab, index) => (
          <div key={index} role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
            {value === index && <div>{tab.content}</div>}
          </div>
        ))}
      </Box>
    </>
  );
};

export default General;
