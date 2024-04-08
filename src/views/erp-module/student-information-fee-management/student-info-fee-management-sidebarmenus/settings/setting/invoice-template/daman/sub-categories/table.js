import { Checkbox, FormControl, FormControlLabel, Grid, Typography } from '@mui/material';
import React from 'react';
import ColorPicker from '../../common/color-picker';
import FontSize from '../../common/font-size';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { updateTableProperty } from 'store/student-info-and-fee/setting/Invoice-Template-Slice';
import { useSelector } from 'react-redux';

const TableConfig = ({ settings }) => {
  settings;
  const dispatch = useDispatch();
  const tableSettings = useSelector((state) => state.invoiceTemplate.table);
  const handleStateChange = (key, value) => {
    dispatch(updateTableProperty({ key, value }));
  };

  return (
    <>
      <Grid container spacing={2} rowSpacing={2}>
        {/* Table Border (checkbox) with (color input)  */}
        <Grid item md={12}>
          <Grid container columnSpacing={2}>
            <Grid item md>
              <FormControl fullWidth>
                <ColorPicker
                  initialColor={tableSettings.borderColor}
                  onColorChange={handleStateChange}
                  colorKey="borderColor"
                  label="Border Color"
                  enable={tableSettings.borderEnable}
                />
              </FormControl>
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tableSettings.borderEnable}
                    onChange={(e) => handleStateChange('borderEnable', e.target.checked)}
                    sx={{ marginRight: '0' }}
                  />
                }
                sx={{ marginRight: '0' }}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Table Header ============================================== (Label) */}
        <Grid container item rowSpacing={3} spacing={2}>
          <Grid item md={12}>
            <Divider textAlign="left">
              {' '}
              <Typography variant="h5"  >
                Table Header
              </Typography>
            </Divider>
          </Grid>
          {/*  (font size) */}
          <Grid item md>
            <FormControl fullWidth>
              <FontSize
                label={'Font Size'}
                value={tableSettings.headerFontSize}
                stateHandler={handleStateChange}
                updatekey={'headerFontSize'}
              />
            </FormControl>
          </Grid>
          {/* (font color) */}
          <Grid item md>
            <FormControl fullWidth>
              <ColorPicker
                initialColor={tableSettings.headerFontColor}
                onColorChange={handleStateChange}
                colorKey="headerFontColor"
                label="Font Color"
                enable={true}
              />
            </FormControl>
          </Grid>
          {/* background color  (checkbox) with (color input)*/}
          <Grid item container columnSpacing={2}>
            <Grid item md>
              <FormControl fullWidth>
                <ColorPicker
                  initialColor={tableSettings.headerBackgroundColor}
                  onColorChange={handleStateChange}
                  colorKey="headerBackgroundColor"
                  label="Background Color"
                  enable={tableSettings.headerBackgroundColorEnable}
                />
              </FormControl>
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tableSettings.headerBackgroundColorEnable}
                    onChange={(e) => handleStateChange('headerBackgroundColorEnable', e.target.checked)}
                    sx={{ marginRight: '0' }}
                  />
                }
                sx={{ marginRight: '0' }}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* item row (label)================================================================================== */}
        <Grid container item spacing={2} rowSpacing={3}>
          <Grid item md={12}>
            <Divider textAlign="left">
              {' '}
              <Typography variant="h5" >
                Item Row
              </Typography>
            </Divider>
          </Grid>
          {/* (font size) */}
          <Grid item md>
            <FormControl fullWidth>
              <FontSize
                label={'Font Size'}
                value={tableSettings.itemRowFontSize}
                stateHandler={handleStateChange}
                updatekey={'itemRowFontSize'}
              />
            </FormControl>
          </Grid>
          {/* (font color) */}
          <Grid item md>
            <FormControl fullWidth>
              <ColorPicker
                initialColor={tableSettings.itemRowFontColor}
                onColorChange={handleStateChange}
                colorKey="itemRowFontColor"
                label="Font Color"
                enable={true}
              />
            </FormControl>
          </Grid>
          {/* background color (checkbox) eith (color input) */}
          <Grid item md={12}>
            <Grid container columnSpacing={2}>
              <Grid item md>
                <FormControl fullWidth>
                  <ColorPicker
                    initialColor={tableSettings.itemRowBackgroundColor}
                    onColorChange={handleStateChange}
                    colorKey="itemRowBackgroundColor"
                    label="Background Color"
                    enable={tableSettings.itemRowBackgroundColorEnable}
                  />
                </FormControl>
              </Grid>
              <Grid item display="flex" justifyContent="center">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={tableSettings.itemRowBackgroundColorEnable}
                      onChange={(e) => handleStateChange('itemRowBackgroundColorEnable', e.target.checked)}
                      sx={{ marginRight: '0' }}
                    />
                  }
                  sx={{ marginRight: '0' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TableConfig;
