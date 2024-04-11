import React,{useState} from 'react';
import { Grid, Box, Typography , Paper , TextField  ,
    // Radio ,RadioGroup ,  FormControlLabel ,  FormLabel ,
     FormControl , MenuItem, Select, FormHelperText,Button
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
  

const Registration = (setMobileNumber) => {
    const [userName, setUserName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('');
    const [insitute, setInsitute] = useState('');
    const [insituteName, setInsituteName] = useState('');
    const [nubmerOfinsitute, setNubmerOfinsitute] = useState('');
    // const [organisationType, setOrganisationType] = useState('Independent Insitute');
    // const [NumberOfInsitute, setNumberOFInsitute] = useState(1);

    // password
  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

//   username
    const  handleUserName = (event) => {
        setUserName(event.target.value);
    };
    
//    // org type
//     const handleOrganisationTypeChange = (event) => {
//         setOrganisationType(event.target.value);
//       };
    
//     // school name
//     const  handleSchoolName = (event) => {
//     setSchoolName(event.target.value);
//     };

    // number of insitute
    // const  handleNumberOfInsitute = (event) => {
    //     setNumberOFInsitute(event.target.value);
    //     };

    // role option
    const RoleOptions = [
        { value: 'Teacher', label: 'Teacher' },
        { value: 'School Admin', label: 'School Admin' },
        { value: 'Principal', label: 'Principal' },
        { value: 'School Owner', label: 'School Owner' },
    
      ];

      const handleRole= (event) => {
        setRole(event.target.value);
      };

    //   insitute

    const InsituteOptions = [
        { value: 'School', label: 'School' },
        { value: 'Pre School', label: 'Pre School' },
        { value: 'College', label: 'College' },
        { value: 'Coaching Center', label: 'Coaching Center' },
    
      ];


          //   name of insitute
      
    const handleInsitute = (event) => {
        setInsitute(event.target.value);
      };

    //   number of insitute
      
    const handleNumberOfInsitute = (event) => {
        setNubmerOfinsitute(event.target.value);
      };
      

    //   insitute name

    const handleInsituteName= (event) => {
        setInsituteName(event.target.value);
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
 
                   <Grid sx={{marginBottom:'24px'}}>
                      <TextField id="name" value={userName} label="Your Name" variant="outlined" onChange={handleUserName} fullWidth  />
                   </Grid>

                      {/* insitute type */}
                      <Grid sx={{marginBottom:'24px'}}>
                        <SelectList 
                            label="Insitute Type"
                            options={InsituteOptions}
                            value={insitute}
                            onChange={handleInsitute}
                        />
                       </Grid>

                      {/* insitute name */}
                      <Grid container sx={{ marginBottom: '24px' , justifyContent:'space-between'}}>
                        <Grid sx={{ flex:'0 0 60%'}}>
                            <TextField id="insitute-name" value={insituteName} label="Insitute Name" variant="outlined" onChange= {handleInsituteName} fullWidth  />
                        </Grid>

                        <Grid sx={{flex:'0 0 35%'}}> 
                           <TextField id="number of branches" value={nubmerOfinsitute} label="Number of Branches" variant="outlined" onChange={handleNumberOfInsitute} fullWidth  />
                       </Grid>

                       </Grid>
                 
                     {/* role */}
                     <Grid sx={{marginBottom:'24px'}}>
                      <SelectList 
                        label="Role"
                        options={RoleOptions}
                        value={role}
                        onChange={handleRole}
                      />
                    </Grid>


                   {/* password */}
                   <Grid sx={{marginBottom:'24px'}}>
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

                    <Grid sx={{marginBottom:'24px'}}>
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

                    {/* btn  */}

                    <Button sx={{padding:'10px'}} variant="contained" fullWidth disableElevation>
                    Sign up </Button>

            </Grid>
        </Paper>

        </Grid>

        </Grid>
    </>
  )
}

export default Registration