import React from 'react';
import { Box, Grid, useMediaQuery, MenuItem, FormControl, Select, InputLabel, Button,InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import TextArea from 'antd/es/input/TextArea';
import PostUploadFile from './PostUploadFile';
import PostDate from './PostDate';
import PhoneIcon from '@mui/icons-material/Phone';

function RequestACall() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  //   Phone No. validation

  const [mobile, setMobile] = React.useState('');
  const [mobileError, setMobileError] = React.useState(false);

  const validateMobile = () => {
    const mobileRegex = /^[0-9]{10}$/;
    setMobileError(!mobileRegex.test(mobile));
  };

  const handleMobileChange = (event) => {
    const inputMobile = event.target.value.replace(/\D/g, '');
    if (inputMobile.length <= 10) {
      setMobile(inputMobile);
      setMobileError(false);
    } else {
      setMobileError(true);
    }
  };
  //   Dropdown enquiry
  const [enquiry, setEnquiry] = React.useState('');

  const handleChange = (event) => {
    setEnquiry(event.target.value);
  };

  return (
    <Box>
      <Grid
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '55ch' }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Subject" variant="outlined" />
      </Grid>
      <Grid sx={{ width: '56ch', paddingLeft: '8px', paddingTop: '10px' }}>
        <TextArea rows={6} placeholder="How can we help you today?" label="Message" variant="outlined" />
      </Grid>

      <Grid item sm={6} xs={12} sx={{ width: '56ch', paddingLeft: '7px', paddingTop: '18px' }}>
        <TextField
          onChange={handleMobileChange}
          onBlur={validateMobile}
          value={mobile}
          error={mobileError}
          helperText={mobileError ? 'Mobile number must be 10 digits' : ''}
          id="outlined-basic"
          size={isMobile ? 'small' : 'normal'}
          fullWidth
          label="Contact No."
          type="number"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            )
          }}
        />
      </Grid>

      <Grid>
        <PostUploadFile />
      </Grid>
      <Grid sx={{ paddingLeft: '8px', width: '56ch', paddingTop: '16px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Request</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={enquiry} label="Enquiry" onChange={handleChange}>
            <MenuItem value={1}>None</MenuItem>
            <MenuItem value={2}>Just FYI</MenuItem>
            <MenuItem value={3}>Nothing urgent, can wait</MenuItem>
            <MenuItem value={4}>I am stuck, need assistance</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid sx={{ paddingTop: '15px', width: '56ch', paddingLeft: '10px' }}>
        <PostDate />
      </Grid>
      <Grid sx={{ paddingTop: '25px', paddingLeft: '7px' }}>
        <Button variant="contained">Sumbit Request</Button>
      </Grid>
    </Box>
  );
}

export default RequestACall;
