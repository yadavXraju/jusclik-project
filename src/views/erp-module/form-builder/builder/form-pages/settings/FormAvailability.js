import { Box, ButtonGroup, Button, Typography, Radio, Grid, FormControlLabel, FormLabel, RadioGroup, TextField } from '@mui/material';
import React, { useState } from 'react';
import LensOutlinedIcon from '@mui/icons-material/LensOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TextArea from 'antd/es/input/TextArea';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

function FormAvailability() {
  const [activeButton, setActiveButton] = useState('always');

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  const [value, setValue] = React.useState('No');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [value1, setValue1] = React.useState('No');

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const [value2, setValue2] = React.useState('No');

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  // Render different content based on the activeButton state
  const renderContent = () => {
    switch (activeButton) {
      case 'always':
        return (
          <>
            <Box sx={{ padding: '0 16px 16px 16px', borderBottom: '1px solid #ccc' }}>
              <Box pb={2}>
                <Typography pb={1} color="#ccc" variant="h5">
                  The form will be accessible anytime.
                </Typography>
                <Typography variant="h5">Set Additional Restrictions</Typography>
              </Box>
            </Box>
          </>
        );
      case 'between-dates':
        return (
          <>
            <Box p={2} sx={{ borderBottom: '1px solid #ccc' }}>
              <Typography pb={1} color="#ccc" variant="h5">
                The form will be accessible only between the specified dates.
              </Typography>
              <Box pt={1}>
                <Box sx={{ width: { md: '70%', lg: '40%' } }}>
                  <Box pb={2}>
                    <ParameterizedDateComponent label="Start Date" />
                  </Box>
                  <Box pb={1}>
                    <ParameterizedDateComponent label="End Date" />
                  </Box>
                  <Box>
                    <Box p={0.5}>Message on form expiry</Box>
                    <TextArea rows={3} placeholder="Enter your text here..." fullWidth variant="outlined" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        );
      case 'between-dates-time':
        return (
          <>
            <Box p={2} sx={{ borderBottom: '1px solid #ccc' }}>
              <Typography pb={1} color="#ccc" variant="h5">
                The form will be accessible only between the specified dates.
              </Typography>
              <Box pt={1}>
                <Box sx={{ width: { md: '70%', lg: '40%' } }}>
                  <Box pb={2}>
                    <ParameterizedDateComponent label="Start Date" />
                  </Box>
                  <Box pb={1}>
                    <ParameterizedDateComponent label="End Date" />
                  </Box>
                  <Box>
                    <Box p={0.5}>Message on form expiry</Box>
                    <TextArea rows={3} placeholder="Enter your text here..." fullWidth variant="outlined" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Box p={2}>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button
            startIcon={activeButton === 'always' ? <RadioButtonCheckedIcon /> : <LensOutlinedIcon />}
            value="always"
            onClick={() => handleButtonClick('always')}
          >
            Always
          </Button>
          <Button
            startIcon={activeButton === 'between-dates' ? <RadioButtonCheckedIcon /> : <LensOutlinedIcon />}
            value="between-dates"
            onClick={() => handleButtonClick('between-dates')}
          >
            Between Dates
          </Button>
          <Button
            startIcon={activeButton === 'between-dates-time' ? <RadioButtonCheckedIcon /> : <LensOutlinedIcon />}
            value="between-dates-time"
            onClick={() => handleButtonClick('between-dates-time')}
          >
            Between Dates & Time
          </Button>
        </ButtonGroup>
      </Box>

      {/* Render different content based on the activeButton state */}
      {renderContent()}

      <Box sx={{ padding: '0 16px 16px 16px', borderBottom: '1px solid #ccc' }}>
        <Box p={2}>
          <Typography variant="h4">Restrict by Submission</Typography>
        </Box>
        <Box marginLeft={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FormLabel sx={{ marginRight: '45px', width: '220px' }} id="demo-controlled-radio-buttons-group">
                    Restrict Number of Submissions
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Yes" control={<Radio size="small" />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio size="small" />} label="No" />
                  </RadioGroup>
                </Box>
                {value === 'Yes' && (
                  <>
                    <Box pt={1}>
                      <Box sx={{ width: { md: '70%', lg: '30%' } }}>
                        <TextField size="small" fullWidth label="Maximum submission limit" />

                        <Box>
                          <Box p={0.5}>Message on reaching limit</Box>
                          <TextArea rows={3} placeholder="Enter your text here..." fullWidth variant="outlined" />
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FormLabel sx={{ marginRight: '45px', width: '220px' }} id="demo-controlled-radio-buttons-group">
                    Restrict to One Submission per IP
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value1}
                    onChange={handleChange1}
                  >
                    <FormControlLabel value="Yes" control={<Radio size="small" />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio size="small" />} label="No" />
                  </RadioGroup>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FormLabel sx={{ marginRight: '45px', width: '220px' }} id="demo-controlled-radio-buttons-group">
                    Restrict to One Submission per Respondent
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value2}
                    onChange={handleChange2}
                  >
                    <FormControlLabel value="Yes" control={<Radio size="small" />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio size="small" />} label="No" />
                  </RadioGroup>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box p={2}>
        <Button variant="contained">Save</Button>
      </Box>
    </>
  );
}

export default FormAvailability;
