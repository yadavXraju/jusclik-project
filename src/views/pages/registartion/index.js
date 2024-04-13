import React,{useState} from 'react';
import { Grid, Box, Typography , Paper , TextField  ,
     FormControl , MenuItem, Select, FormHelperText,Button ,FormLabel , FormControlLabel , Radio , RadioGroup
    } from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';
import { useStyles } from '../authentication/visitor-registration/mobile-number';
import { withStyles } from '@mui/styles';
import { styles , css } from '../authentication/visitor-registration/css';
import SelectList from 'views/common-section/ParamSelectList';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useNavigate } from 'react-router';

const style = {
    formHeader:{
    marginBottom:'24px',
    },

    formHeading:{
      fontWeight:'500',  
      fontSize:'24px',  
      lineHeight:'40px'
    }
}

 function CountrySelect({state,stateHandler }) {
    return (
      <Select value={state.country} onChange={(e)=>stateHandler('country',e.target.value)} variant="standard" >
        <MenuItem selected value="India">
          IN (+91)
        </MenuItem>
        <MenuItem value="Dubai">UAE (+971)</MenuItem>
        <MenuItem value="USA">USA (+1)</MenuItem>
      </Select>
    );
  }
const Registration = () => {
     const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      role: '',
      organisationType: 'Independent Insitution',
      insitutionName: '',
      nameOfGroup:'',
      numberOfBranches: '',
      insitutionType: '',
      mobileError: false,
      country: 'India',
      email: '',
      selectedTier:''
    });


 // Generic handleChange function to update form data
 const handleChange = (e) => {
  const { name, value } = e.target;
  // Validate if the field is "chequeNo" or "micrNo" and the value is numeric
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};
    
    // role option
    const RoleOptions = [
        { value: 'Teacher', label: 'Teacher' },
        { value: 'School Admin', label: 'School Admin' },
        { value: 'Principal', label: 'Principal' },
        { value: 'School Owner', label: 'School Owner' },
    
      ];

    //   insitution Type OPTIONS
    const InsitutionTypeOptions = [
        { value: 'kindergarten', label: 'kindergarten' },
        { value: 'Pre School', label: 'Pre School' },
        { value: 'School', label: 'School' },
        { value: 'College', label: 'College' },
        { value: 'Coaching Center', label: 'Coaching Center' },
    
      ];


      // tier options
      const TierOptions = [
        { value: 'Essential (₹ 5,000/month)', label: 'Essential starting from (₹ 5,000/month)' },
        { value: 'Premium (₹ 15,000/month)', label: 'Premium starting from (₹ 15,000/month)' },
        { value: 'Enterprise (₹ 30,000/month)', label: 'Enterprise starting from (₹ 30,000/month)' },
    
      ];

    //   MOBILE number 
    const classes = useStyles();
    const [state,setState]=useState({
      mobileNumber:'',
      mobileError:false,
      country:'India'
    })
    const StyledCountrySelect = withStyles(styles)(CountrySelect)
    
    const stateHandler=(key,value)=>{
      setState((state)=>({
          ...state,
          [key]:value,
      }))}

      console.log(formData.selectedTier)

        // Function to handle registration
  const handleRegistration = () => {
    // Add your registration logic here

    // After registration, navigate to pricing page with selected tier value
    navigate('');
  };
    
  return (
    <>
        <Grid container>

        <Grid lg={6} sx={{ minHeight:'100vh'}}>
   
        </Grid>

        <Grid xs={12} lg={6} sx={{minHeight:'100vh', display:'flex' , alignItems:'center' , flexDirection:'column', background:'rgb(255, 236, 236)' , justifyContent:'center' , padding:'20px'}}>
          <Paper >
              <Grid  sx={{maxWidth:'575px' , width:{xs : '100%' , lg:'575px'} ,margin:'auto' ,padding:'30px' }}>
                      <Box sx={style.formHeader}>
                          <Typography variant='h1' sx={style.formHeading}>
                              Register Now 
                          </Typography> 
                    
                          <Typography variant='h4'>
                                Enter your details to register on Jusklik
                          </Typography>             
                      </Box>
  
                      {/* ==================== name */}
                      <Grid sx={{marginBottom:'24px'}}>
                          <TextField id="name" name='name' value={formData.name} label="Your Name" variant="outlined" onChange={handleChange} fullWidth  />
                      </Grid>

                      {/* ===========================  role */}
                      <Grid sx={{marginBottom:'24px'}}>
                        <SelectList 
                          label="Role"
                          options={RoleOptions}
                          value={formData.role}
                          onChange={handleChange}
                          name='role'
                        />
                      </Grid>

                       {/* ================ mobile number */}
                      <Grid sx={{marginBottom:'24px'}}>
                              <FormControl fullWidth sx={{
                              //    '& .MuiFormControl-marginNormal' :{
                              //   margin:'0',
                              // }
                              }}>
                                  {/* mobile number input box */}  
                                  <TextField
                                    InputProps={{
                                        disableUnderline: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <StyledCountrySelect state={state} stateHandler={stateHandler} />
                                            </InputAdornment>
                                        ),
                                        style: { borderRadius: '50px', fontSize: '15px', fontFamily: 'plus Jakarta sans', backgroundColor: '#ffffff' }
                                    }}
                                    // margin="normal"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    error={state.mobileError} // Set error state
                                    id="Mobilenumber"
                                    // Error message
                                    helperText={
                                        <FormHelperText className={classes.helperText}>
                                            {state.mobileError ? 'Mobile number must be 10 digits' : ''}
                                        </FormHelperText>
                                    }
                                    placeholder="Mobile Number"
                                    name="Mobilenumber"
                                    autoComplete="Mobilenumber"
                                    value={state.mobileNumber}
                                    onChange={(e) => setState({ ...state, mobileNumber: e.target.value })} // Handle input change
                                    sx={{
                                        ...css.mobileNumber,
                                        '& .MuiInput-underline:before': {
                                            borderBottom: 'none',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottom: 'none',
                                        },
                                    }}
                                />
            
                          </FormControl>
                      </Grid>

                      {/* ======================= email */}
                      <Grid sx={{marginBottom:'20px'}}>
                        <TextField id="email" name='email' value={formData.email} label="Email" variant="outlined" onChange={handleChange} fullWidth 
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <MailOutlineOutlinedIcon />
                                    </InputAdornment>
                                  ),
                                }}
                                // variant="standard"
                          />
                      </Grid>

                    {/* ============================== Organisation Type */}
                    <Grid sx={{marginBottom:'10px'}}>
                        <FormControl>
                          <FormLabel id="row-radio-buttons-group-label"> Organisation Type</FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="row-radio-buttons-group-label"
                              name="organisationType"
                              value={formData.organisationType}
                              onChange={handleChange}
                            >
                              <FormControlLabel value="Independent Insitution" control={<Radio />} label="Independent Insitution" />
                              <FormControlLabel value="Group of Insitutions" control={<Radio />} label="Group of Insitutions" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>       

                    {formData.organisationType === 'Independent Insitution' && (
                      <>
                        <Grid container  sx={{ marginBottom: '24px' , justifyContent:'space-between' , gap:{xs:'20px' , lg:null}}}>
                          <Grid sx={{flex: {xs : '0 0 100%' , lg:'0 0 60%'}  }}>
                            <TextField id="insitution-name" name='insitutionName' value={formData.insitutionName} label="Insitution Name" variant="outlined" onChange= {handleChange} fullWidth  />
                          </Grid>

                              <Grid sx={{ flex:{xs : '0 0 100%' , lg:'0 0 35%'}  }}>
                              <SelectList 
                                  label="Insitution Type"
                                  options={InsitutionTypeOptions}
                                  value={formData.insitutionType}
                                  onChange={handleChange}
                                  name='insitutionType'
                              />
                            </Grid>
                        </Grid>
                        </>
                      )}

                    {formData.organisationType === 'Group of Insitutions' && (
                    <Grid container  sx={{ marginBottom: '24px' , justifyContent:'space-between' , gap:{xs:'20px' , lg:null}}}>
                        <Grid sx={{ flex:{xs : '0 0 100%' , lg:'0 0 60%'} }} > 
                          <TextField id="name-of-group" name='nameOfGroup' value={formData.nameOfGroup} label="Name of Group" variant="outlined" onChange= {handleChange} fullWidth  />
                        </Grid>

                        <Grid sx={{flex:{xs : '0 0 100%' , lg:'0 0 35%'} , }}> 
                          <TextField id="number of branches" name='numberOfBranches' value={formData.numberOfBranches} label="Number of Branches" variant="outlined" onChange={handleChange} fullWidth  />
                        </Grid>

                    </Grid>
                    )}

                      {/* plans ====================== */}

                      <Grid sx={{marginBottom:'24px'}}>
                              <SelectList 
                                  label="Select Tier"
                                  options={TierOptions}
                                  value={formData.selectedTier}
                                  onChange={handleChange}
                                  name='selectedTier'
                              />
                      </Grid>

                    {/*====================== insitution type  drop down 
                      {/* btn  */}
                      <Button sx={{padding:'10px' , borderRadius:'12px'}} variant="contained" fullWidth disableElevation onClick={handleRegistration}>
                      Submit </Button>

              </Grid>
          </Paper>
        </Grid>

        </Grid>
    </>
  )
}

export default Registration