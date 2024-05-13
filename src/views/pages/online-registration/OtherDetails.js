import React from 'react';
import { Grid, Typography, Box, TextField ,InputLabel} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';


function OtherDetails({ handleClick }) {
  const [Formdata, Setformdata] = useState({
    sibling_adm_no: '',
    sibling_class_section: '',
    sibling_name: ''
  });

  const OtherDetailsChangeHandler = (e) => {
    const { name, value } = e.target;
  
    // Check if the input field is a text field and not email or Aadhar card
    if (e.target.nodeName === "INPUT" && e.target.type === "text" && name === "sibling_name") {
      // Capitalize the first letter
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      // Update the state with the capitalized value
      Setformdata({ ...Formdata, [name]: capitalizedValue });
    } else {
      // For other types of input fields, update the state directly
      Setformdata({ ...Formdata, [name]: value });
    }
  };

  //Error Validation
  const [Formerror, Setformerror] = useState({
    sibling_adm_no: false,
    sibling_class_section: false,
    sibling_name: false
  });

  const validateFields = (fields) => {
    const newErrors = {};
    Object.keys(fields).forEach((key) => {
      newErrors[key] = !fields[key].trim();
    });
    return newErrors;
  };

  const handleSubmit = (tab) => {
    const newErrors = validateFields(Formdata);
    Setformerror(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      handleClick(tab);
    }
  };

 //Below Function will use in button to validate validation
 console.log(() => handleSubmit(() => {}));

 const labelStyles = {
  marginBottom: '8px',
  fontWeight: '500',
  color: 'rgb(54, 65, 82)',
  marginTop: '20px',
  whiteSpace: 'pre-wrap'
  // fontFamily: 'Roboto, sans-serif'
};


  return (
    <>
     
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 2 :OTHER DETAILS{' '}
            </Typography>

            
            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>
            <InputLabel sx={{ ...labelStyles, marginTop: '0px' }} htmlFor="student-name">
            Sibling: Adm No
            </InputLabel>
              <TextField
             
                fullWidth
                name="sibling_adm_no"
                onChange={OtherDetailsChangeHandler}
                value={Formdata.sibling_adm_no}
                error={Formerror.sibling_adm_no}
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Sibling: Class & Section"
                name="sibling_class_section"
                onChange={OtherDetailsChangeHandler}
                value={Formdata.sibling_class_section}
                error={Formerror.sibling_class_section}
                required
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff', color: 'black !important' } }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Sibling: Name"
                name="sibling_name"
                onChange={OtherDetailsChangeHandler}
                value={Formdata.sibling_name}
                error={Formerror.sibling_name}
                required
                variant="outlined"
                fullWidth
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>


          </Grid>

          {/* <Box sx={{ paddingBottom: '2rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('three')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box> */}
     
    </>
  );
}

export default OtherDetails;
