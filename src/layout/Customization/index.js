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
  Typography
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

  useEffect(() => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
  }, [dispatch, borderRadius]);

  // ==============================|| BACKGROUD COLOR ||============================== //

  // 2 state for 2 layout colors
  
  // Set initial background color to the value of the first radio button
  const [backgroundColor, setBackgroundColor] = useState('rgba(94, 53, 177 , 1)');
  const [backgroundColorV2, setBackgroundColorV2] = useState('rgba(30, 136, 229 , 1)');

  // function for first counter color
  const handleBackgroundColor = (event) => {
    const newBackgroundColor = event.target.value;
    setBackgroundColor(newBackgroundColor);
    dispatch({ type: SET_COLOR_THEME, backgroundColor: newBackgroundColor });
    // Synchronize the selection
    setBackgroundColorV2(newBackgroundColor === 'rgba(94, 53, 177, 1)' ? 'rgba(30, 136, 229, 1)' : 'rgba(84, 110, 122, 1)');
  };

  useEffect(() => {
    dispatch({ type: SET_COLOR_THEME, backgroundColor });
  }, [dispatch, backgroundColor]);

  // function for first second counter color
  const handleBackgroundColorV2 = (event) => {
    const newBackgroundColorV2 = event.target.value;
    setBackgroundColorV2(newBackgroundColorV2);
    dispatch({ type: SET_COLOR_THEME_V2, backgroundColor: newBackgroundColorV2 });
    // Synchronize the selection
    setBackgroundColor(newBackgroundColorV2 === 'rgba(30, 136, 229, 1)' ? 'rgba(94, 53, 177, 1)' : 'rgba(0, 137, 123, 1)');
  };

  useEffect(() => {
    dispatch({ type: SET_COLOR_THEME_V2, backgroundColorV2 });
  }, [dispatch, backgroundColorV2]);

  // ==============================|| fONT fAMILY||============================== //

  let initialFont;
  switch (customization.fontFamily) {
    case `'Inter', sans-serif`:
      initialFont = 'Inter';
      break;

    case `'Poppins', sans-serif`:
      initialFont = 'Poppins';
      break;

    case `'Roboto', sans-serif`:
      initialFont = 'Roboto';
      break;

    case `'Plus Jakarta Sans', sans-serif`:
      break;

    default:
      initialFont = 'Plus Jakarta Sans';
  }

  // state - font family
  const [fontFamily, setFontFamily] = useState(initialFont);

  useEffect(() => {
    let newFont;
    switch (fontFamily) {
      case 'Inter':
        newFont = `'Inter', sans-serif`;
        break;

      case 'Poppins':
        newFont = `'Poppins', sans-serif`;
        break;

      case 'Roboto':
        newFont = `'Roboto', sans-serif`;
        break;

      case 'Plus Jakarta Sans':
        newFont = `'Plus Jakarta Sans', sans-serif`;
        break;

      default:
        newFont = `'Plus Jakarta Sans', sans-serif`;
    }
    dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
  }, [dispatch, fontFamily]);
  
  console.log(handleBackgroundColorV2)

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
            zIndex: theme.zIndex.speedDial
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
                    value={backgroundColor}
                    onChange={handleBackgroundColor}
                    sx={{ flexDirection: 'row', gap: '10px' }}
                  >
                    <FormControlLabel
                      value="rgb(94, 53, 177, 1)"
                      control={<Radio sx={{ opacity: 0 }} checked={backgroundColor === 'rgba(94, 53, 177, 1)'} />}
                      label=""
                      sx={{
                        background: 'conic-gradient(rgba(94, 53, 177, 1) 0deg 180deg, rgba(30, 136, 229, 1) 180deg 360deg)',
                        borderRadius: '50%',
                        rotate: '208deg',
                      }}
                    />
                    <FormControlLabel
                      value="rgba(0, 137, 123, 1)"
                      control={<Radio sx={{ opacity: 0 }} checked={backgroundColor === 'rgba(0, 137, 123, 1)'} />}
                      sx={{
                        background: 'conic-gradient(rgba(0, 137, 123, 1) 0deg 180deg, rgba(84, 110, 122, 1) 180deg 360deg)',
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
