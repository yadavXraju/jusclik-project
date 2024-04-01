import React, {useState} from 'react';
import user from '../../../../../../assets/images/users/user.jpg';
import { Grid,
    //  Select, FormControl, MenuItem, InputLabel,
      TextField } from '@mui/material';

const LedgerDetails = () => {

    const [formData, setFormData] = useState({
        stduentName: '',
      });
    
      // Generic handleChange function to update form data
      const handleChange = (e) => {
        const { name, value } = e.target;
        // Validate if the field is "chequeNo" or "micrNo" and the value is numeric
        if ((name === 'chequeNo' || name === 'chqMicrNo' || name === 'ddNo' || name === 'ddMicrNo') && isNaN(value)) {
          return; // If not numeric, do not update state
        }
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };


  return (
    <>
        <Grid container gap={3} alignItems={'center'} padding={'2rem'}>
            <Grid sx={{borderRadius:'50%', width:'100px'}}>
                 <img src={user} alt='student' style={{borderRadius:'50%' , width:'100%'}}/>
            </Grid>  

            <Grid item xs={12} md={6}>
              {/* Cheque No */}
              <TextField
                id="outlined-basic"
                label="Student Name"
                name="studentName"
                value={formData.stduentName}
                variant="outlined"
                onChange={handleChange}
                fullWidth
              />
            </Grid>

             
        </Grid>  
    </>
  )
}

export default LedgerDetails