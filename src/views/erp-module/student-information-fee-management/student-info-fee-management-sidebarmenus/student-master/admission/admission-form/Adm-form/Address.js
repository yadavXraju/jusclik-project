import React, { useState } from 'react';
import { Grid, TextField, Card, Typography, Box, Checkbox } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';

function AddressForm() {
  const [formData, setFormData] = useState({
    currentAddress: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
    permanentAddress: '',
    permanentContry: '',
    permanentCity: '',
    permanentState: '',
    permanentZipcode: ''
  });

  // ============= handle state click on checkbox ============
  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        permanentAddress: formData.currentAddress,
        permanentContry: formData.country,
        permanentCity: formData.city,
        permanentState: formData.state,
        permanentZipcode: formData.zipCode
      });
    } else {
      setFormData({
        ...formData,
        permanentAddress: '',
        permanentContry: '',
        permanentCity: '',
        permanentState: '',
        permanentZipcode: ''
      });
    }
  };

  // ======== function for setFormData in usestate ============
  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(name, value);
  };

  return (
    <>
      {/* ============ Current Address ============= */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Current Address
        </Typography>
        <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} lg={12}>
            <Box pb={1}>
              <Box p={0.5}>Address</Box>
              <TextArea
                rows={4}
                placeholder="Enter your text here..."
                fullWidth
                variant="outlined"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleAddressChange}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField
              fullWidth
              label="Country/Region"
              variant="outlined"
              name="country"
              value={formData.country}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField fullWidth label="City" variant="outlined" name="city" value={formData.city} onChange={handleAddressChange} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField fullWidth label="State" variant="outlined" name="state" value={formData.state} onChange={handleAddressChange} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField
              fullWidth
              label="Zip Code"
              variant="outlined"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleAddressChange}
            />
          </Grid>
        </Grid>
      </Card>

      {/* ========= Permanent Address ============== */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Permanent Address ({' '}
          <Checkbox sx={{padding:'0px', marginRight:'5px'}} label="checkbox" size="small" checked={!!formData.permanentAddress} onChange={handleCheckboxChange} />
          <span style={{ fontSize: '12px', fontWeight: '500' }}>Same As Current Address</span> )
        </Typography>
        <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} lg={12}>
            <Box pb={1}>
              <Box p={0.5}>Address</Box>
              <TextArea
                rows={4}
                placeholder="Enter your text here..."
                fullWidth
                variant="outlined"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleAddressChange}
                disabled={!!formData.permanentAddress}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField
              fullWidth
              label="Country/Region"
              variant="outlined"
              name="country"
              value={formData.permanentContry}
              onChange={handleAddressChange}
              disabled={!!formData.permanentContry}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField
              fullWidth
              label="City"
              variant="outlined"
              name="city"
              value={formData.permanentCity}
              onChange={handleAddressChange}
              disabled={!!formData.permanentCity}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField
              fullWidth
              label="State"
              variant="outlined"
              name="state"
              value={formData.permanentState}
              onChange={handleAddressChange}
              disabled={!!formData.permanentState}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField
              fullWidth
              label="Zip Code"
              variant="outlined"
              name="zipCode"
              value={formData.permanentZipcode}
              onChange={handleAddressChange}
              disabled={!!formData.permanentZipcode}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default AddressForm;














// import React from 'react';
// import { Grid,  TextField, Card, useMediaQuery, Typography, Box, Checkbox } from '@mui/material';
// import TextArea from 'antd/es/input/TextArea';
// //import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

// function AddressForm() {

//   const isMobile = useMediaQuery('(max-width: 767px)')

//   return (
//     <>
//     {/* Other Details */}
//     <Card sx={{padding:'10px'}}>
//       <Typography variant={'h4'} p={1.4} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
//       Current Address
//       </Typography>
//     <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
//     <Grid item xs={12} sm={12} lg={12}>
//     <Box pb={1}>
//               <Box p={0.5}>Address</Box>
//               <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
//             </Box>
//             {/* <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" /> */}
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Countory/Region" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="City" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="State" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Zip Code" variant="outlined" />
//       </Grid>
//     </Grid>
//     </Card>

//     <Card sx={{padding:'10px'}}>
//     <Typography variant={'h4'} p={1} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
//       Parmanent Address <Box><Checkbox label='checkbox' size="small" />Same As Current Address</Box>
//       </Typography>
//     <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
//     <Grid item xs={12} sm={12} lg={12}>
//     <Box pb={1}>
//               <Box p={0.5}>Address</Box>
//               <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
//             </Box>
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Countory/Region" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="City" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="State" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Zip Code" variant="outlined" />
//       </Grid>
//     </Grid>
//     </Card>

//     </>
//   );
// }

// export default AddressForm;
