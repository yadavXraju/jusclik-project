// import React,{useState} from 'react';
import user from '../../../../../../assets/images/users/user.jpg';
import { Grid, Typography , Box , TextField, Select, MenuItem , InputLabel , FormControl , IconButton
  //  FormControl, , InputLabel,  
} 
  from '@mui/material';

  // icons
import MarkunreadTwoToneIcon from '@mui/icons-material/MarkunreadTwoTone';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { useState } from 'react';
const LedgerDetails = () => {

    const [formData, setFormData] = useState({
        admNo: '',
        enrolmentType: 'Admission',

      });
    
      // Generic handleChange function to update form data
      const handleChange = (e) => {
        const { name, value } = e.target;
        // Validate if the field is "chequeNo" or "micrNo" and the value is numeric
        if ((name === 'admNo' || name === 'chqMicrNo' || name === 'ddNo' || name === 'ddMicrNo') && isNaN(value)) {
          return; // If not numeric, do not update state
        }
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };


  return (
    <>
        <Grid container  alignItems={'start'} sx={{border:'1px solid rgba(224, 224, 224, 1)' , borderRadius:'12px' , padding:'2rem'}}>
            <Grid  lg={2} sx={{borderRight:'1px solid rgba(224, 224, 224, 1)' ,display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:'column'}}  >
                <Box sx={{}}>
                  <img src={user} alt='student' style={{borderRadius:'50%' , width:'100px'}}/>
                </Box>

              <Grid>
                  {/* name */}
                <Box sx={{textAlign:'center' , mb:1}}>
                  <Typography variant="h5" sx={{color:'#8b8989' , }}> Student Name  </Typography>
                  <Typography variant="h5">  Anupam Rawat </Typography>
               </Box>

                  {/* Adm No */}
                  <Box sx={{textAlign:'center'}}>
                      <Typography variant="h5" sx={{color:'#8b8989' , }}> Admission No </Typography>
                      <Typography variant="h5">  35463 </Typography>
                  </Box>
              </Grid>
            </Grid>  

            <Grid lg={10} sx={{paddingLeft:'2rem'}}>

                <Grid container sx={{gap:'40px' , }} alignItems={'center'}>
                          <Box sx={{display:'flex' , gap:'10px' , paddingTop:'5px'}}> 
                            <IconButton sx={{background:'rgba(204, 204, 204, 0.33)'}}>
                              <MarkunreadTwoToneIcon />
                            </IconButton>
                           
                              <Typography> anupamrawat12@gmail.com  </Typography>
                          </Box>

                          <Box sx={{display:'flex' , gap:'10px' , paddingTop:'5px'}}> 
                              <PhoneTwoToneIcon />
                              <Typography> 7895086891  </Typography>
                          </Box>

                      {/* Class */}
                      <Box sx={{display:'flex' , gap:'10px' , paddingTop:'5px'}}> 
                            <SchoolTwoToneIcon />
                            <Typography > IX-A </Typography>
                        </Box>
                          
                </Grid>
        
                <Grid container sx={{columnGap:'80px' , rowGap:'20px' , paddingTop:'2rem'}}>

          
                    {/* Adm Date */}
                    <Box >
                      <Typography variant="h5" sx={{color:'#8b8989' , }}> Adm Date  </Typography>
                      <Typography variant="h5"> 05-Jun-2024 </Typography>
                    </Box>
                    {/* doj */}
                    <Box >
                      <Typography variant="h5" sx={{color:'#8b8989' , }}> DOJ  </Typography>
                      <Typography variant="h5"> 01-Jul-2024 </Typography>
                    </Box>
                    {/* Concession Category */}
                    <Box >
                        <Typography variant="h5" sx={{color:'#8b8989' , }}> Concession Category  </Typography>
                        <Typography variant="h5"> My Cat</Typography>
                    </Box>
                    {/* Other Category */}
                    <Box >
                      <Typography variant="h5" sx={{color:'#8b8989' , }}>Other Category  </Typography>
                      <Typography variant="h5"> General</Typography>
                    </Box>
                     {/* adm number */}

                      {/* sibling details */}
                      <Box >
                      <Typography variant="h5" sx={{color:'#8b8989' , }}>Sibling Details </Typography>
                      <Typography variant="h5"> </Typography>
                    </Box>

               <Grid lg={2} >
                <TextField
                id="outlined-basic"
                        label="Admission No"
                        name="admNo"
                        value={formData.admNo}
                        variant="outlined"
                        onChange={handleChange}
                        fullWidth
                />
              </Grid>

                {/* Enrolment Type */}
                <Grid lg={2}>
                  <FormControl fullWidth>
                  <InputLabel id="payment-mode">Enrolment Type</InputLabel>
                  <Select
                    labelId="enrolment-type"
                    id="enrolment-type"
                    name="enrolmentType"
                    value={formData.enrolmentType}
                    label="Enrolment Type"
                    onChange={handleChange}
                  >
                    <MenuItem value="Enquiry">Enquiry</MenuItem>
                      <MenuItem value="Registration">Registration</MenuItem>
                      <MenuItem value="Provisional">Provisional</MenuItem>
                      <MenuItem value="Admission">Admission</MenuItem>
                      
                  </Select>
                </FormControl>
                </Grid>

                </Grid>

            </Grid>
  
        </Grid>  

        {/* <Grid container  alignItems={'start'} 
        sx={{border:'1px solid rgba(224, 224, 224, 1)' , borderTop:'0' ,  borderRadius:'0 0 12px 12px' , padding:'2rem' , gap:'20px'}}>

          </Grid> */}
    </>
  )
}

export default LedgerDetails