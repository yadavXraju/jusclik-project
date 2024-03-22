import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, FormControlLabel, Grid } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageUploadAndPreview from '../../common/image-upload-and-preview';
import CommonSelect from '../../common/common-select';
import ColorPicker from '../../common/color-picker';
import FontSize from '../../common/font-size';
const HeaderFooter = ({ state, setState }) => {
  // state handler for headerFooter component
  const handleStateChange = (key, value) => {
    setState((state) => ({
      ...state,
      headerFooter: {
        ...state.headerFooter,
        [key]: value
      }
    }));
  };
  // constants for select menu
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
      {/* ====================================== HEADER SECTION ========================================= */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          Header
        </AccordionSummary>
        <AccordionDetails>
          <Grid container rowSpacing={2} spacing={1} >

            <Grid item md>
              {/* ========= Background Image ============ */}
              <ImageUploadAndPreview
                label={'Background Image'}
                image={state.headerFooter.headerImage}
                stateHandler={handleStateChange}
                updatekey={'headerImage'}
              />
            </Grid>
            
            <Grid item md>
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
                    checked={state.headerFooter.headerBackgroundColorEnable}
                    onChange={(e) => handleStateChange('headerBackgroundColorEnable', e.target.checked)}
                  />
                }
              />

                </Grid>
                <Grid md>
              <ColorPicker
                initialColor={state.headerFooter.headerBackgroundColor}
                onColorChange={handleStateChange}
                colorKey="headerBackgroundColor"
                label="Background Color"
                enable={state.headerFooter.headerBackgroundColorEnable}
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
          Footer
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} rowSpacing={2}>
            <Grid item md={12}>
              {/* ========= Font Size ============ */}
              <FontSize
                label={'Font Size'}
                value={state.headerFooter.footerFontSize}
                stateHandler={handleStateChange}
                updatekey={'footerFontSize'}
              />
            </Grid>
            <Grid item md={12}>
              {/* ========= Font Color ============== */}
              <ColorPicker
                initialColor={state.headerFooter.footerFontColor}
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
                image={state.headerFooter.footerImage}
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
                    checked={state.headerFooter.footerBackgroundColor}
                    onChange={(e) => handleStateChange('footerBackgroundColor', e.target.checked)}
                  />
                }
              />
                </Grid>
                <Grid item md>
              <ColorPicker
                initialColor={state.headerFooter.footerBackgroundColor}
                onColorChange={handleStateChange}
                colorKey="footerBackgroundColor"
                label="Background Color"
                enable={state.headerFooter.footerBackgroundColor}
              />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              {/* show page number */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.headerFooter.showPageNumber}
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
