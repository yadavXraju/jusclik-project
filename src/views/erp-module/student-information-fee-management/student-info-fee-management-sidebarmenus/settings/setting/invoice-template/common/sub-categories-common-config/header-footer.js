// OWNER : DAMANDEEP
import {  Box, Checkbox, FormControl, FormControlLabel, Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
import { CommonColorPicker } from 'components/CommonColorPicker'; 
import { CommonDropZone } from 'components/CommonDropZone';
import FontSize from '../../common/font-size';
import { useDispatch } from 'react-redux';
import { updateHeaderFooterProperty } from 'store/student-info-and-fee/settings/Invoice-Template-Slice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const HeaderFooter = () => {
  const dispatch = useDispatch();

  const headerFooterSettings = useSelector((state) => state.invoiceTemplate.headerFooter);

  const handleStateChange = (key, value) => {
    dispatch(updateHeaderFooterProperty({ key, value }));
  };

  const header=<>
   <Grid container rowSpacing={2} spacing={1}>
            <Grid item md={12}>
              {/* ========= Background Image ============ */}
                  <CommonDropZone stateHandler={handleStateChange}
            updatekey={'headerImage'} 
            selectedFile={headerFooterSettings.headerImage}/>
            </Grid>
            <Grid item md={12}>
              {/* ========= Background Color ============ */}
              <Grid container columnSpacing={2}>
                <Grid item md>
                  <FormControl fullWidth>
                    <CommonColorPicker
                      initialColor={headerFooterSettings.headerBackgroundColor}
                      onColorChange={handleStateChange}
                      colorKey="headerBackgroundColor"
                      label="Background Color"
                      enable={headerFooterSettings.headerBackgroundColorEnable}
                    />
                  </FormControl>
                </Grid>
                <Grid  item display="flex" justifyContent="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={headerFooterSettings.headerBackgroundColorEnable}
                        onChange={(e) => handleStateChange('headerBackgroundColorEnable', e.target.checked)}
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
  const footer=<>
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
              <CommonColorPicker
                initialColor={headerFooterSettings.footerFontColor}
                onColorChange={handleStateChange}
                colorKey="footerFontColor"
                label="Font Color"
                enable={true}
              />
            </Grid>
            <Grid item md={12}>
              {/* ========== Background Color ============ */}
              <Grid container columnSpacing={2}>
                <Grid item md>
                  <FormControl fullWidth>
                    <CommonColorPicker
                      initialColor={headerFooterSettings.footerBackgroundColor}
                      onColorChange={handleStateChange}
                      colorKey="footerBackgroundColor"
                      label="Background Color"
                      enable={headerFooterSettings.footerBackgroundColor}
                    />
                  </FormControl>
                </Grid>
                  <Grid item display="flex" justifyContent="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={headerFooterSettings.footerBackgroundColor}
                          onChange={(e) => handleStateChange('footerBackgroundColor', e.target.checked)}
                          sx={{ marginRight: '0' }}
                        />
                      }
                      sx={{ marginRight: '0' }}
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
  </>
  const tabs = [
    { label: 'Header', content: header },
    { label: 'Footer', content: footer },
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

export default HeaderFooter;
