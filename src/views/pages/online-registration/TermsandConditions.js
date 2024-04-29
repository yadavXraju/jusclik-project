import React from 'react';
import { Grid , Box , Typography, Button} from '@mui/material';

function TermsAndConditions({continueHandler}) {


  


  return (
    <Grid >
      
     
       <Box sx={{padding:'2rem'}}>
       <Typography variant='h2' sx={{textDecoration:'underline', marginBottom:'20px'}}>Important Guidelines For Filling Up The Form</Typography>
       <Typography variant='h4' sx={{marginBottom:'10px'}}>1.  All fields marked with asterisk (*) are mandatory. In case any field is not applicable, mention NA.</Typography>
       <Typography variant='h4' sx={{marginBottom:'10px'}}>2.  The incomplete registration form and those with incorrect information will automatically stand rejected. </Typography>
       <Typography variant='h4' sx={{marginBottom:'10px'}}>3.  Fill all the particulars of the form accurately and carefully.</Typography>
       <Typography variant='h4' sx={{marginBottom:'10px'}}>4. The date of birth filled in the form must tally with the one recorded in the Date of Birth certificate issued by the Municipal Office.</Typography>
       <Typography variant='h4' sx={{marginBottom:'10px'}}>5.  You will receive confirmation email and SMS with online payment ID and Provisional Registration Number.</Typography>
       <Typography variant='h4' sx={{marginBottom:'10px'}}>6.  Keep the scanned copies of the original documents ready at the time of applying as these are mandatory for filling the form. </Typography>
       <Typography variant='h4' sx={{marginBottom:'10px'}}>7.  Upload the required documents using online payment ID and Provisional Registration Number. </Typography>
       <Typography variant='h4' sx={{marginBottom:'10px' , marginLeft:'4rem'}}>a. Latest photograph of the child and each parent (in Jpeg format). </Typography>
       <Typography variant='h4' sx={{marginBottom:'10px' , marginLeft:'4rem'}}>b. Birth Certificate/ Passport of the child. </Typography>
       <Typography variant='h4' sx={{marginBottom:'10px' , marginLeft:'4rem'}}>c. Proof of residence both permanent and current (Aadhaar card/passport/ voter id/ utility bill/ rent agreement/sales deed/ ration card).</Typography>
       <Typography variant='h4' sx={{marginBottom:'10px' , marginLeft:'4rem'}}>d. Photo id proof of both the parents (Aadhaar card/passport/ voter id / driving license).</Typography>
       <Typography variant='h4' sx={{marginBottom:'10px' , marginLeft:'4rem'}}>e. Academic transcript of last session and current session till date for admission in grade III and above.</Typography>
       <Typography variant='h4' sx={{marginBottom:'2rem'}}>8.  This application will be valid only for 2 months from the date of submission. </Typography>
       <Typography variant='h4' sx={{marginBottom:'2rem' , fontWeight:'bold'}}>Note: Submission of a complete application form is a request for admission and does not guarantee admission as the seats available are limited.  </Typography>
       <Typography  sx={{marginBottom:'2rem' , fontWeight:'bold' , fontSize:'18px' , color:'#006400'}}>For technical support, please write to techsupport@dpsgurgaon.in</Typography>
       
       <Box sx={{ textAlign: 'right' , paddingRight:'1rem' }}>
       <Button
                  // Call handleSubmit on button click
                  sx={{
                    backgroundColor: '#fff',
                    color: '#364152b5',
                    borderRadius: '10px',
                    marginTop: '20px',
                    border: '1px solid #c4c4c4',
                    label: 'Next',
                    fontSize: '15px',
                    fontFamily: 'plus Jakarta sans',
                    cursor: 'pointer',
                    width: '20%',
                    height: '50px',
                    '&:hover': { backgroundColor: '#e64b4c', color: '#fff' }
                  }}
                  onClick={continueHandler}
                >
                 Continue 
                </Button>
                </Box>
       
       </Box>

      

    

      
     
    </Grid>
  );
}

export default TermsAndConditions;