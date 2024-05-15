import React from 'react';
import { Grid, Typography, Box,Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Captcha from './Captcha';



function PreviewAndSubmit() {
  const [checked, setChecked] =useState(false);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


   //Below Function will use in button to validate validation
   console.log(() => handleSubmit(() => {}));

  return (
    <>
   
       
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 11 : PREVIEW AND SUBMIT{' '}
            </Typography>

            <Divider />
          </Box>

          <Grid sx={{ padding: '0rem 4rem' ,overflowY:'auto' , height:'67vh' }}>
            <Box>
              <Button variant="contained" sx={{ background: '#4caf50' }}>
                PREVIEW FORM
              </Button>
              <Typography sx={{ marginTop: '10px', fontSize: '12px' }}>
                <span style={{ fontWeight: 'bold' }}>Note:</span> Click above to verify complete filled registration form.
              </Typography>
            </Box>

            <Box sx={{ paddingBottom: '2rem' }}>
              <Typography sx={{ paddingTop: '2rem', paddingBottom: '1rem' }} variant="body1">
                Please read all points before proceeding to final submission.
              </Typography>
              <Typography variant="body1" component="ul">
                <li>Complete the form with all mandatory details.</li>
                <li>You will receive a confirmation email and SMS with a provisional registration number.</li>
                <li>Upload the required documents if applicable.</li>
                <li>
                  Please ensure mobile number and email addresses are correctly entered as all communication will be via email or call.
                </li>
                <li>For any technical assistance, please contact the school admission team or reception.</li>
              </Typography>
            </Box>

            <Box sx={{ }}>
              <Box sx={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
                  {' '}
                  Declaration *{' '}
                </Typography>
                <Divider />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', padding: '0rem 1.3rem', paddingBottom: '0.5rem' }}>
                <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  I agree that,
                </Typography>
              </Box>
              <Box sx={{ padding: '0rem 2rem' }}>
                <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                  1. I, fully understand, that the school, upon accepting the application of my ward, is not any way bound to grant
                  admission, as the admission is purely based upon the availability of seats and upon qualifying the pre-admission
                  test/interview. I also understand that the decision of the Principal regarding admission will be final and binding on me.
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                  2. I, undertake that I will not compel the school to change or amend the existing facilities such as timings/ bus
                  routes/fee structure and the schedule to suit our individual requirements. I also believe that the school has a child
                  centered approach and all the policies and decision are made for the benefit of all the students studying in the school.
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                  3. I further undertake that by admitting our child to the school, we are entering into a collaborative binding to work
                  towards the well-being of the child. And, in case, if there is any concern that will be first shared with the school
                  authorities, in the interest of the child.
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                  4. In the event of my ward being selected for admission, I shall have NO objection to the School Medical Officer giving
                  inoculation against Typhoid A, b & Cholera to my child from year to year. I further undertake to abide by the rules and
                  regulations laid down by the school.
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                  5. Registration fees is non-refundable. Only shortlisted students will be called for the interaction /admission test.
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                  6. I understand that the admission process is thorough and competitive, and each application is reviewed carefully by the
                  Admission Committee. I also understand that the decision of not granting admission to a particular student is result of a
                  holistic assessment that takes into consideration various factors, including the number of available seats, the specific
                  needs of the school. Hence, the school is not bound to provide any specific reasons for the non- admission of any
                  individual applicant.
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                  7. I, hereby acknowledge and agree that I will refrain from using the name of Delhi Public School, Greater Noida in any
                  form of public media, including social media platforms, websites and other public communications, for any purposes that
                  could potentially damage the reputation of the school, disclose sensitive information, or disrupt the positive and
                  respectful environment within the school community. I understand that the school’s name and image are valuable assets, and
                  I commit to upholding the integrity and values associated with Delhi Public School, Greater Noida.
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                  8. I have noted the instructions and agree to the same.
                </Typography>
                
                <Box sx={{paddingBottom:'1.5rem' , paddingTop:'1rem'}}>
                <Captcha/>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* <Box sx={{ paddingBottom: '0rem', paddingTop: '1rem', paddingLeft: '3.8rem' }}>
            
            
            
           <Typography variant="h5" sx={{ fontWeight: 'bold', marginLeft: '5px' }}>
              ENTER CAPTCHA
            </Typography> 




         
           
           
               <Button onClick={()=>handleSubmit()} variant="contained" sx={{ height: '38px', width: 'auto' }}>
                Click Here To Submit Your Registration
              </Button> 
           
          </Box> */}
       
   
    </>
  );
}

export default PreviewAndSubmit;
