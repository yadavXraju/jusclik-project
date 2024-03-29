import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, FormControlLabel, Grid, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageUploadAndPreview from '../../common/image-upload-and-preview';
import CommonSelect from '../../common/common-select';
import ColorPicker from '../../common/color-picker';
import FontSize from '../../common/font-size';
import { imagePosition } from '../../common/common-states';
const HeaderFooter = ({settings}) => {
  const headerFooterSettings=settings[0]
  const setHeaderFooterSettings=settings[1]
  // state handler for headerFooter component
  const handleStateChange = (key, value) => {
    setHeaderFooterSettings((headerFooterSettings) => ({
        ...headerFooterSettings,
        [key]: value
      
    }));
  };
  return (
    <>
      {/* ====================================== HEADER SECTION ========================================= */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography variant='h5'>
          Header
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container rowSpacing={2} spacing={1} >

            <Grid item md={12}>
              {/* ========= Background Image ============ */}
              <ImageUploadAndPreview
                label={'Background Image'}
                image={headerFooterSettings.headerImage}
                stateHandler={handleStateChange}
                updatekey={'headerImage'}
              />
            </Grid>
            
            <Grid item md={12}>
              {/* ========= Image Position ============== */}
              <FormControl fullWidth>
                <CommonSelect
                  label={'Image Position'}
                  stateHandler={handleStateChange}
                  updatekey="headerImagePosition"
                  defaultValue={'centerCenter'}
                  options={imagePosition}
                />
              </FormControl>
            </Grid>

            <Grid item md={12}>
              {/* ========= Background Color ============ */}
              <Grid container>
                <Grid xs='auto'>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={headerFooterSettings.headerBackgroundColorEnable}
                    onChange={(e) => handleStateChange('headerBackgroundColorEnable', e.target.checked)}
                  />
                }
              />

                </Grid>
                <Grid md>
              <ColorPicker
                initialColor={headerFooterSettings.headerBackgroundColor}
                onColorChange={handleStateChange}
                colorKey="headerBackgroundColor"
                label="Background Color"
                enable={headerFooterSettings.headerBackgroundColorEnable}
              />

                </Grid>
              </Grid>
            </Grid>

          </Grid>

        </AccordionDetails>
      </Accordion>

      {/* ====================================== FOOTER SECTION ========================================= */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography variant='h5'>
          Footer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item md>
              {/* ========= Font Size ============ */}
              <FontSize
                label={'Font Size'}
                value={headerFooterSettings.footerFontSize}
                stateHandler={handleStateChange}
                updatekey={'footerFontSize'}
              />
            </Grid>
            <Grid item md>
              {/* ========= Font Color ============== */}
              <ColorPicker
                initialColor={headerFooterSettings.footerFontColor}
                onColorChange={handleStateChange}
                colorKey="footerFontColor"
                label="Font Color"
                enable={true}
              />
            </Grid>
            <Grid item md={12}>
              {/* ========= Background Image ============ */}
              <ImageUploadAndPreview
                label={'Background Image'}
                image={headerFooterSettings.footerImage}
                stateHandler={handleStateChange}
                updatekey={'footerImage'}
              />
            </Grid>
            <Grid item md={12}>
              {/* ========= Image Position ============== */}
              <FormControl fullWidth>
                <CommonSelect
                  label={'Image Position'}
                  stateHandler={handleStateChange}
                  updatekey="footerImagePosition"
                  defaultValue={'centerCenter'}
                  options={imagePosition}
                />
              </FormControl>
            </Grid>
            <Grid item md={12}>
              {/* ========== Background Color ============ */}
              <Grid container>
                <Grid item xs='auto'>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={headerFooterSettings.footerBackgroundColor}
                    onChange={(e) => handleStateChange('footerBackgroundColor', e.target.checked)}
                  />
                }
              />
                </Grid>
                <Grid item md>
              <ColorPicker
                initialColor={headerFooterSettings.footerBackgroundColor}
                onColorChange={handleStateChange}
                colorKey="footerBackgroundColor"
                label="Background Color"
                enable={headerFooterSettings.footerBackgroundColor}
              />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              {/* show page number */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={headerFooterSettings.showPageNumber}
                    onChange={(e) => handleStateChange('showPageNumber', e.target.checked)}
                  />
                }
                label="Show Page Number"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default HeaderFooter;