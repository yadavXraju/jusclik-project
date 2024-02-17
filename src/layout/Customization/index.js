import { useState, useEffect } from 'react';
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
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { SET_BORDER_RADIUS, SET_FONT_FAMILY, SET_COLOR_THEME, SET_COLOR_THEME_V2 } from 'store/actions';
import { gridSpacing } from 'store/constant';

// concat 'px'
function valueText(value) {
  return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const isMobile = useMediaQuery('(max-width:767px)')

  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  // ==============================|| bORDER||============================== //

  // state - border radius
  const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
  const handleBorderRadius = (event, newValue) => {
    setBorderRadius(newValue);
  };

  // Effect to save border radius to local storage when it changes
  useEffect(() => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
    localStorage.setItem('borderRadius', JSON.stringify(borderRadius));
  }, [dispatch, borderRadius]);

  // Function to retrieve border radius from local storage or use default value
  useEffect(() => {
    const savedBorderRadius = JSON.parse(localStorage.getItem('borderRadius'));
    if (savedBorderRadius) {
      setBorderRadius(savedBorderRadius);
    }
  }, []);

  // ==============================|| BACKGROUD COLOR ||============================== //

  // 2 state for 2 layout colors
  
  // Retrieve theme color values from local storage or use defaults if not found
  const initialThemeColor = localStorage.getItem('themeColor') || 'rgb(94, 53, 177)';
  const initialThemeColorV2 = localStorage.getItem('themeColorV2') || 'rgb(30, 136, 229)';

  // Set initial background color to the retrieved values
  const [themeColor, setThemeColor] = useState(initialThemeColor);
  const [themeColorV2, setThemeColorV2] = useState(initialThemeColorV2);

  // function for changing theme color
  const handleThemeColor = (event) => {
    const newColor = event.target.value;
    
    setThemeColor(newColor);
    dispatch({ type: SET_COLOR_THEME, backgroundColor: newColor });
  
    const newBackgroundColor = newColor === 'rgb(94, 53, 177)' ? 'rgb(30, 136, 229)' : 'rgb(84, 110, 122)';
    setThemeColorV2(newBackgroundColor);
    dispatch({ type: SET_COLOR_THEME_V2, backgroundColor: newBackgroundColor });

    localStorage.setItem('themeColor', newColor);
    localStorage.setItem('themeColorV2', newBackgroundColor);
  };
  
  useEffect(() => {
    dispatch({ type: SET_COLOR_THEME, themeColor });
  }, [dispatch, themeColor]);
  
  useEffect(() => {
    dispatch({ type: SET_COLOR_THEME_V2, themeColorV2 });
  }, [dispatch, themeColorV2]);
  

  // ==============================|| fONT fAMILY||============================== //

  // Retrieve font family value from local storage or use default if not found
  const initialFontFamily = localStorage.getItem('fontFamily') || `'Plus Jakarta Sans', sans-serif'`;

  // State for font family
  const [fontFamily, setFontFamily] = useState(initialFontFamily);

  // Effect to save font family to local storage when it changes
  useEffect(() => {
    dispatch({ type: SET_FONT_FAMILY, fontFamily });
    localStorage.setItem('fontFamily', fontFamily);
  }, [dispatch, fontFamily]);

  // ==============================|| RENDER ||============================== //

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
            marginTop: isMobile  ?'5rem' : '0',
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
                    onChange={(e) => setFontFamily(e.target.value)}
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
                      control={<Radio sx={{ opacity: 0 }} checked={themeColor === 'rgb(94, 53, 177)'} /> }  // setting color by default
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
