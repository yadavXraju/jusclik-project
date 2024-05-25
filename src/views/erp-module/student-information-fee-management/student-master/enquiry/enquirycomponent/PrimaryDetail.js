import React,{useState} from 'react'
import { Box,Grid,FormControl,InputLabel,TextField,Paper,Select,MenuItem,Autocomplete } from '@mui/material'
import { countries } from './CounteryData';
import { useEffect } from 'react';

const PrimaryDetail = () => {

    const [gender, setGender] = useState('');
    const [house, setHouse] = useState('');
    const [section, setSection] = useState('');
    const [religion, setReligion] = useState('');
    const [paymentMode, setPaymentMode] = useState('');
    const [accomodation, setAccomodation] = useState('');
    const [dob, setDOB] = useState('');
    const [age, setAge] = useState('');


    const handleChangeGender = (event) => {
        setGender(event.target.value);
      };
    
    
      const handleChangeSection = (event) => {
        setSection(event.target.value);
      };
    
      const handleChangeHouse = (event) => {
        setHouse(event.target.value);
      };
    
      const handleChangeReligion = (event) => {
        setReligion(event.target.value);
      };
    
      const handleChangePayMode = (event) => {
        setPaymentMode(event.target.value);
      };
    
      const handleChangeAccomodation = (event) => {
        setAccomodation(event.target.value);
      };
      const handleChangeDOB = (event) => {
        setDOB(event.target.value);
    };
      useEffect(() => {
        if (dob) {
            const today = new Date();
            const birthDate = new Date(dob);
            let ageDiff = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                ageDiff--;
            }
            setAge(ageDiff);
        }
    }, [dob]);
  return (
    <div>
       <Grid item xs={12} sx={{ marginTop: '20px' }}>
              <Paper>
                <h3 style={{ padding: '20px 20px 0px 20px', fontSize: '1.14rem' }}>Primary Details</h3>
                <Grid container sx={{ padding: '25px' }} spacing={3}>
                  <Grid item xs={4}>
                    <Box>
                      <TextField
                        id="outlined-select-option"
                        type="date"
                        fullWidth
                        label="DOB"
                        sx={{}}
                        InputLabelProps={{
                          shrink: true
                      }}
                      onChange={handleChangeDOB}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" >Gender</InputLabel>
                      <Select
                      variant='outlined'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Gender"
                        onChange={handleChangeGender}
                      >
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                        <MenuItem value={'others'}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={section}
                        label="Blood Group"
                        onChange={handleChangeSection}
                      >
                        <MenuItem value={1}>A</MenuItem>
                        <MenuItem value={2}>B+</MenuItem>
                        <MenuItem value={3}>O+</MenuItem>
                        <MenuItem value={3}>AB-</MenuItem>
                        <MenuItem value={3}>B-</MenuItem>
                        <MenuItem value={3}>AB+</MenuItem>
                        <MenuItem value={3}>O-</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField id="outlined-basic" label="Age" variant="outlined"  value={age} fullWidth />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="address-textfield" label="Address" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <Autocomplete
                      id="country-select-demo"
                      options={countries}
                      autoHighlight
                      fullWidth
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password' // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">House</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={house}
                        label="Class"
                        onChange={handleChangeHouse}
                      >
                        <MenuItem value={1}>House A</MenuItem>
                        <MenuItem value={2}>House B</MenuItem>
                        <MenuItem value={3}>House C</MenuItem>
                        <MenuItem value={3}>House D</MenuItem>
                        <MenuItem value={3}>House E</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="address-textfield" label="Area" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="address-textfield" label="City" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField id="pincode-textfield" label="Pincode" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Religion</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={religion}
                        label="Religion"
                        onChange={handleChangeReligion}
                      >
                        <MenuItem value={1}>Religion A</MenuItem>
                        <MenuItem value={2}>Religion B</MenuItem>
                        <MenuItem value={3}>Religion C</MenuItem>
                        <MenuItem value={3}>Religion D</MenuItem>
                        <MenuItem value={3}>Religion E</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={religion}
                        label="Category"
                        onChange={handleChangeReligion}
                      >
                        <MenuItem value={1}>General</MenuItem>
                        <MenuItem value={2}>ST</MenuItem>
                        <MenuItem value={3}>OBC</MenuItem>
                        <MenuItem value={3}>SC</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="phone-textfield" label="Phone" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Pay mode</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={paymentMode}
                        label="Pay mode"
                        onChange={handleChangePayMode}
                      >
                        <MenuItem value={1}>General</MenuItem>
                        <MenuItem value={2}>ST</MenuItem>
                        <MenuItem value={3}>OBC</MenuItem>
                        <MenuItem value={3}>SC</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Accomodation</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={accomodation}
                        label="Accomodation"
                        onChange={handleChangeAccomodation}
                      >
                        <MenuItem value={1}>Hosteler</MenuItem>
                        <MenuItem value={2}>Non Hostler</MenuItem>
                        <MenuItem value={3}>Nearbuy</MenuItem>
                        <MenuItem value={3}>PG</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="email-textfield" label="Email" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Concession</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={accomodation}
                        label="Concession"
                        onChange={handleChangeAccomodation}
                      >
                        <MenuItem value={1}>None</MenuItem>
                        <MenuItem value={2}>100%</MenuItem>
                        <MenuItem value={3}>40%</MenuItem>
                        <MenuItem value={3}>20%</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={accomodation}
                        label="Category"
                        onChange={handleChangeAccomodation}
                      >
                        <MenuItem value={1}>None</MenuItem>
                        <MenuItem value={2}>Above</MenuItem>
                        <MenuItem value={3}>Below</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="aadhar-textfield" label="Aadhar No" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Single Parent</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={accomodation}
                        label="Single Parent"
                        onChange={handleChangeAccomodation}
                      >
                        <MenuItem value={1}>Yes</MenuItem>
                        <MenuItem value={2}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="srnno-textfield" label="SRN No" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField id="familyid-textfield" label="Family ID" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="panno-textfield" label="PAN No" variant="outlined" fullWidth />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
    </div>
  )
}

export default PrimaryDetail
