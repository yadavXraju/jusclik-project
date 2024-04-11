import React,{useState} from 'react';
import { Grid, Box, Typography , Paper , TextField  ,Radio ,RadioGroup ,  FormControlLabel , FormControl , FormLabel , MenuItem, Select, FormHelperText      // ,Button
    } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useStyles } from '../authentication/visitor-registration/mobile-number';
import { withStyles } from '@mui/styles';
import { styles , css } from '../authentication/visitor-registration/css';
import SelectList from 'views/common-section/ParamSelectList';

const style = {
    formHeader:{
    marginBottom:'2rem',
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
  

const Registration = (setMobileNumber) => {
    const [userName, setUserName] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const  handleUserName = (event) => {
        setUserName(event.target.value);
    };
    
    const  handleSchoolName = (event) => {
    setSchoolName(event.target.value);
    };

    //   number
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
    

  return (
    <>
        <Grid container>

        <Grid lg={6} sx={{ minHeight:'100vh'}}>
   
        </Grid>

        <Grid lg={6} sx={{minHeight:'100vh', display:'flex' , alignItems:'center' , flexDirection:'column', background:'rgb(255, 236, 236)' , justifyContent:'center'}}>
        <Paper >
            <Grid sx={{maxWidth:'575px' , width:'575px' ,margin:'auto' ,padding:'30px' }}>
                    <Box sx={style.formHeader}>
                        <Typography variant='h1' sx={style.formHeading}>
                            Sign up 
                        </Typography> 
                   
                        <Typography variant='h4'>
                            Enter credentials to continue
                        </Typography>             
                    </Box>
 
                   <Grid sx={{marginBottom:'2rem'}}>
                      <TextField id="name" value={userName} label="Name" variant="outlined" onChange={handleUserName} fullWidth  />
                   </Grid>

                    {/* radio btns */}
                    <Grid sx={{marginBottom:'2rem'}}>
                        <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label"> Organisation Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Independent School" control={<Radio />} label="Independent School" />
                                <FormControlLabel value="Group of Schools" control={<Radio />} label="Group of Schools" />
                        </RadioGroup>
                        </FormControl>
                    </Grid>       

                    {/* school name */}
                    <Grid sx={{marginBottom:'2rem'}}>
                      <TextField id="school-name" value={schoolName} label="School Name" variant="outlined" onChange={handleSchoolName} fullWidth  />
                   </Grid>

                   
                     {/* role */}
                     <Grid sx={{marginBottom:'2rem'}}>
                      <SelectList 
                        label="Role"
                        options={RoleOptions}
                        value={role}
                        onChange={handleRole}
                      />
                    </Grid>


                   {/* password */}
                   <Grid sx={{marginBottom:'2rem'}}>
                    <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                fullWidth
                            />
                    </FormControl>
                    </Grid>

                    {/* mobile number */}

                    <Grid sx={{marginBottom:'2rem'}}>
                            <FormControl fullWidth>
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
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    error={state.mobileError} // Set error state
                                    id="Mobilenumber"
                                    // Error message
                                    helperText={
                                    <FormHelperText className={classes.helperText}>
                                        {state.mobileError ? 'Mobile number must be 10 digits' : ''}
                                    </FormHelperText>}
                                    placeholder="Mobile Number"
                                    name="Mobilenumber"
                                    autoComplete="Mobilenumber"
                                    value={state.mobileNumber}
                                    onChange={ (e) => {
                                        const input = e.target.value.replace(/\D/g, '').slice(0, 10); // Remove non-digit characters and limit to 10 digits        
                                        stateHandler('mobileNumber',input)
                                        setMobileNumber(input)
                                        stateHandler('mobileError',false)
                                    }}                
                                    sx={{...css.mobileNumber,'& .MuiInput-underline:before': {
                                    borderBottom: 'none',
                                    },
                                    '& .MuiInput-underline:after': {
                                    borderBottom: 'none',
                                    },}}
                                />              
                        </FormControl>
                    </Grid>
            </Grid>
        </Paper>

        </Grid>

        </Grid>
    </>
  )
}

export default Registration