import { Checkbox, FormControl, FormControlLabel, Grid, Typography } from '@mui/material';
import React from 'react';
import ColorPicker from '../../common/color-picker';
import FontSize from '../../common/font-size';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { updateTableProperty } from 'store/student-info-and-fee/setting/Invoice-Template-Slice';
import { useSelector } from 'react-redux';

const TableConfig = ({settings}) => {
  settings
  const dispatch=useDispatch()
  const tableSettings=useSelector(state=>state.invoiceTemplate.table)
  const handleStateChange = (key, value) => {
    dispatch(updateTableProperty({key,value}))
  };
  return (
    <>
      <Grid container spacing={2} rowSpacing={2}>
        {/* Table Border (checkbox) with (color input)  */}
        <Grid container item>
          <Grid item xs="auto">
            <FormControlLabel
              control={
                <Checkbox checked={tableSettings.borderEnable} onChange={(e) => handleStateChange('borderEnable', e.target.checked)} />
              }
            />
          </Grid>
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
        </Grid>
        {/* Table Header ============================================== (Label) */}
        <Grid container item rowSpacing={3} spacing={2}>
          <Grid item md={12}>
           <Divider textAlign='left'> <Typography variant="h5" mt={'1rem'}>Table Header</Typography></Divider>
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
          <Grid item container>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tableSettings.headerBackgroundColorEnable}
                    onChange={(e) => handleStateChange('headerBackgroundColorEnable', e.target.checked)}
                  />
                }
              />
            </Grid>

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
          </Grid>
        </Grid>
        {/* item row (label)================================================================================== */}
        <Grid container item spacing={2} rowSpacing={3}>
        <Grid item md={12}>
        <Divider textAlign='left'>  <Typography variant="h5" mt={'1rem'}>Item Row</Typography></Divider>
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
        <Grid container item>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={tableSettings.itemRowBackgroundColorEnable}
                  onChange={(e) => handleStateChange('itemRowBackgroundColorEnable', e.target.checked)}
                />
              }
            />
          </Grid>

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
        </Grid>
        </Grid>
        {/* item Description (label) =============================== */}
        <Grid container item spacing={2} rowSpacing={3}>
        <Grid item md={12}>
        <Divider textAlign='left'>  <Typography variant="h5" mt={'1rem'}>Item Description </Typography></Divider>
        </Grid>
        {/* font size */}
        <Grid item md>
          <FormControl fullWidth>
            <FontSize
              label={'Font Size'}
              value={tableSettings.itemDescriptionFontSize}
              stateHandler={handleStateChange}
              updatekey={'itemDescriptionFontSize'}
            />
          </FormControl>
        </Grid>
        {/* font Color */}
        <Grid item md>
          <FormControl fullWidth>
            <ColorPicker
              initialColor={tableSettings.itemDescriptionFontColor}
              onColorChange={handleStateChange}
              colorKey="itemDescriptionFontColor"
              label="Font Color"
              enable={true}
            />
          </FormControl>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TableConfig;
