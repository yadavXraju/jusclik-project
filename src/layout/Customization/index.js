import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';
import { IconSettings } from '@tabler/icons';


// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from 'components/ui/cards/SubCard';
import AnimateButton from 'components/ui/extended/AnimateButton';
import { setBorderRadius, setFontFamily, setColorTheme, setColorThemeV2 } from 'store/customization-slice';
import { gridSpacing } from 'store/constant';

// concat 'px'
function valueText(value) {
  return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {fontFamily,borderRadius,themeColor} = useSelector((state) => state.customization);
  const isMobile = useMediaQuery('(max-width:767px)')
  // console.log(fontFamily)
  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  //set Theme color
  const handleThemeColor = (event) => {
    const newColor = event.target.value;
    dispatch(setColorTheme({themeColor:newColor}));
    const newBackgroundColor = newColor === 'rgb(94, 53, 177)' ? 'rgb(30, 136, 229)' : 'rgb(84, 110, 122)';
    dispatch(setColorThemeV2({themeColorV2:newBackgroundColor}));
  };

  //Set Font Family
  const handleFontFamily=(event)=>{
    const newFontFamily=event.target.value;
    dispatch(setFontFamily({fontFamily:newFontFamily}));
  }

  const handleBorderRadius=(e)=>{
    const newBorderRadius=e.target.value;
    dispatch(setBorderRadius({borderRadius:newBorderRadius}))
  }
  return (
    <>
      {/* toggle button */}
      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '4px',
            top: '25%',
            position: 'fixed',
            right: 10,
            zIndex: theme.zIndex.speedDial,
            marginTop: isMobile ? '5rem' : '0',
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280
          }
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            {/* font family */}
            <Grid item xs={12}>
              <SubCard title="Font Family">
                <FormControl>
                  <RadioGroup
                    aria-label="font-family"
                    value={fontFamily}
                    onChange={(e) => handleFontFamily(e)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Plus Jakarta Sans"
                      control={<Radio />}
                      label="Plus Jakarta Sans"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />

                    <FormControlLabel
                      value="Roboto"
                      control={<Radio />}
                      label="Roboto"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />
                    <FormControlLabel
                      value="Poppins"
                      control={<Radio />}
                      label="Poppins"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />
                    <FormControlLabel
                      value="Inter"
                      control={<Radio />}
                      label="Inter"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </SubCard>
            </Grid>

            {/* border radius */}
            <Grid item xs={12}>
              <SubCard title="Border Radius">
                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      4px
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      size="small"
                      value={borderRadius}
                      onChange={handleBorderRadius}
                      getAriaValueText={valueText}
                      valueLabelDisplay="on"
                      aria-labelledby="discrete-slider-small-steps"
                      marks
                      step={2}
                      min={4}
                      max={24}
                      color="secondary"
                      sx={{
                        '& .MuiSlider-valueLabel': {
                          color: 'secondary.light'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      24px
                    </Typography>
                  </Grid>
                </Grid>
              </SubCard>
            </Grid>

            {/* =================== BACKGROUND COLOR =================== */}
            <Grid item xs={12}>
              <SubCard title="Color theme">
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="color-theme"
                    name="color-theme"
                    value={themeColor}
                    onChange={handleThemeColor}
                    sx={{ flexDirection: 'row', gap: '10px' }}
                  >
                    <FormControlLabel
                      value="rgb(94, 53, 177)"
                      control={<Radio sx={{ opacity: 0 }} checked={themeColor === 'rgb(94, 53, 177)'} />}  // setting color by default
                      label=""
                      sx={{
                        background: 'conic-gradient(rgb(94, 53, 177) 0deg 180deg, rgb(30, 136, 229) 180deg 360deg)',   // 
                        borderRadius: '50%',
                        rotate: '208deg',
                      }}
                    />
                    <FormControlLabel
                      value="rgb(0, 137, 123)"
                      control={<Radio sx={{ opacity: 0 }} checked={themeColor === 'rgb(0, 137, 123)'} />}  // setting color by default
                      sx={{
                        background: 'conic-gradient(rgb(0, 137, 123) 0deg 180deg, rgb(84, 110, 122) 180deg 360deg)',
                        borderRadius: '50%',
                        rotate: '208deg',
                      }}
                      label=""
                    />
                  </RadioGroup>
                </FormControl>
              </SubCard>
            </Grid>

          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Customization;
