import React from 'react';
import { Box, Grid, useMediaQuery, MenuItem, FormControl, Select, InputLabel, Button, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import TextArea from 'antd/es/input/TextArea';
import PostUploadFile from './PostUploadFile';
import PhoneIcon from '@mui/icons-material/Phone';

function PostSupportContent() {
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

  // ERP Module dropdown
  const [module, setModule] = React.useState('');

  const handleModuleChange = (event) => {
    setModule(event.target.value);
  };

  // Request criticality dropdown
  const [requestCriticality, setRequestCriticality] = React.useState('');

  const handleRequestCriticalityChange = (event) => {
    setRequestCriticality(event.target.value);
  };

  return (
    <Box  >
      <Grid
        component="form"
        sx={{
          '& > :not(style)': { m: 1,  width: isMobile ? '100%' : '55ch', paddingRight:'5px'}
        }}
        noValidate
        autoComplete="off"
      >
        <Grid>
      <FormControl fullWidth>
        <InputLabel id="outlined-basic">ERP Module</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={module} label="ERP Module" onChange={handleModuleChange}>
          
          <MenuItem value={1}>Student info & Fee</MenuItem>
          <MenuItem value={2}>Progress & Result</MenuItem>
          <MenuItem value={3}>Library</MenuItem>
          <MenuItem value={4}>Inventory</MenuItem>
          <MenuItem value={5}>Financial Accounting</MenuItem>
          <MenuItem value={6}>Website</MenuItem>
          <MenuItem value={7}>HR & Payroll</MenuItem>
          <MenuItem value={8}>Visitor</MenuItem>
          <MenuItem value={9}>Medical Examination</MenuItem>
          <MenuItem value={10}>Admission</MenuItem>
          
        </Select>
      </FormControl>
    </Grid>
      </Grid>
      <Grid sx={{  width: isMobile ? '100%' : '55ch', paddingLeft: '8px', paddingTop: '10px' }}>
        <TextArea rows={6} placeholder="How can we help you today?" label="Message" variant="outlined" />
      </Grid>
      <Grid item sm={6} xs={12} sx={{  width: isMobile ? '100%' : '55ch', paddingLeft: '7px', paddingTop: '18px' }}>
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
      <Grid >
        <PostUploadFile/>
      </Grid>
      <Grid sx={{ paddingLeft: '8px', width: isMobile ? '100%' : '55ch', paddingTop: '16px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">How critical is your request?</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={requestCriticality} label="How critical is your request?" onChange={handleRequestCriticalityChange}>
            <MenuItem value={1}>Not critical</MenuItem>
            <MenuItem value={2}>For informational purposes only</MenuItem>
            <MenuItem value={3}>Low priority</MenuItem>
            <MenuItem value={4}>Urgent assistance required</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid sx={{ paddingTop: '25px', paddingLeft: '7px' }}>
        <Button variant="contained">Sumbit Request</Button>
      </Grid>
    </Box>
  );
}

export default PostSupportContent;
