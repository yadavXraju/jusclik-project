// @Page Owner-Tarun Pandey
import { Box, RadioGroup, FormControlLabel, Typography, FormControl, Checkbox, FormGroup, Button } from '@mui/material';
import React from 'react';
import Radio from '@mui/material/Radio';
import TextArea from 'antd/es/input/TextArea';

function ThankYou() {
  return (
    <>
      <Box className='scrollbar' sx={{height:'63vh', overflowY:'scroll',}}>
        <Box sx={{ borderBottom: '1px solid #ccc' }}>
          <Box m={2} sx={{ border: '1px solid #2196f363', padding: '8px 16px', background: '#94b9d714' }}>
            <Box>
              <RadioGroup name="use-radio-group" defaultValue="first">
                <FormControlLabel value="" label="Thank You Page" control={<Radio size="small" />} />
              </RadioGroup>
              <Typography sx={{ color: '#ccc', marginLeft: '25px' }} variant="h5">
                Customize your Thank You page message.
              </Typography>
            </Box>

            <Box px={2} py={1} sx={{ border: '1px dashed #ccc', margin: '16px 0px', background: '#ffffff' }}>
              <RadioGroup row name="use-radio-group" defaultValue="Plain Text">
                <FormControlLabel value="Plain Text" label="Plain Text" control={<Radio size="small" />} />
                <FormControlLabel value="Rich Text" label="Rich Text" control={<Radio size="small" />} />
              </RadioGroup>

              <Box>
                <TextArea rows={3} placeholder="Enter your response here..." fullWidth variant="outlined" />
              </Box>

              <Box py={1}>
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value=""
                      control={<Checkbox />}
                      label="Include a link to allow respondents to add another response."
                      labelPlacement="end"
                    />
                  </FormGroup>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value=""
                      control={<Checkbox />}
                      label="Include a link to download PDF of submitted response in the thank you page."
                      labelPlacement="end"
                    />
                  </FormGroup>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value=""
                      control={<Checkbox />}
                      label="Add Google Analytics or Facebook Pixel tracking code"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>
              </Box>
            </Box>
          </Box>

          <Box m={2} sx={{ border: '1px solid #ccc', padding: '8px 16px' }}>
            <Box>
              <RadioGroup name="use-radio-group" defaultValue="Redirect To">
                <FormControlLabel value="" label="Redirect To" control={<Radio size="small" />} />
              </RadioGroup>
              <Typography sx={{ color: '#ccc', marginLeft: '25px' }} variant="h5">
                Choose where you want to redirect respondents on form submission.
              </Typography>
            </Box>
          </Box>

          <Box m={2} sx={{width:{md:'100%', lg:'50%'}}}>
            <Box p={0.5}>Splash Message</Box>
            <TextArea rows={2} placeholder="Enter The Splash Message..." fullWidth variant="outlined" />
          </Box>
        </Box>

        <Box p={2}>
          <Button variant="contained">Save</Button>
        </Box>
      </Box>
    </>
  );
}

export default ThankYou;
