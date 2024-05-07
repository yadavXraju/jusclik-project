import React from 'react';
import { Grid, Typography, Box, Paper, Button, TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';



function PreviewAndSubmit() {
  const [checked, setChecked] = React.useState(false);
  const [checkboxError, setCheckboxError] = useState('');
  const [FormCaptcha , SetFormCaptcha] = useState('');
  const [FormCaptchaError , SetFormCaptchaError ]= useState('')
  const [captcha, setCaptcha] = useState(generateCaptcha());


  const ChangeHandler=(e)=>{
    
    SetFormCaptcha(e.target.value) 
  }



 console.log(FormCaptcha)
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  const handleSubmit = () => {
    if (!checked) {
      setCheckboxError('Please check the Declaration Checkbox');
    } else {
      setCheckboxError('');
    }
  
    if (captcha !== FormCaptcha) {
      SetFormCaptchaError('INCORRECT CAPTCHA');
    } else {
      SetFormCaptchaError('');
    }
  
    if (checked && captcha === FormCaptcha) {
      alert('Yes');
    }
  };

  // Function to generate random captcha
  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  console.log(captcha)
console.log(FormCaptcha)


  // Function to handle refresh button click
  function handleRefresh() {
    setCaptcha(generateCaptcha());
  }

  return (
    <>
      <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
        <Paper sx={{ height: '86vh', overflowY: 'auto' }}>
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 11 : PREVIEW AND SUBMIT{' '}
            </Typography>

            <Divider />
          </Box>

          <Grid sx={{ padding: '0rem 4rem' }}>
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

            <Box sx={{ border: '1px solid lightgrey' }}>
              <Box sx={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '1rem' }}>
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
              </Box>
            </Box>
          </Grid>

          <Box sx={{ paddingBottom: '2rem', paddingTop: '2rem', paddingLeft: '3.8rem' }}>
            
            
            
            {/* <Typography variant="h5" sx={{ fontWeight: 'bold', marginLeft: '5px' }}>
              ENTER CAPTCHA
            </Typography> */}

<Typography
  variant="h5"
  sx={{
    fontWeight: 'bold',
    marginLeft: '5px',
    color: captcha !== FormCaptcha ? 'black': 'red' , // Set color based on captcha validation
  }}
>
   {FormCaptcha.length!==6 &&'ENTER CAPTCHA'} 
  {captcha !== FormCaptcha ? FormCaptchaError : null}
</Typography>


            <Grid sx={{ paddingBottom: '0.2rem', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
              <TextField
                variant="outlined"
                onChange={ChangeHandler}
                inputProps={{ style: { backgroundColor: '#ffffff', height: '8px', width: '3.5rem' } }}
              />

              <Button
                variant="contained"
                sx={{ marginLeft: '10px', background: 'white', color: 'black', borderRadius: '10px', border: '1px solid #d3d3d3' }}
                onClick={handleRefresh}
              >
                Refresh
              </Button>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#4caf50', marginLeft: '10px' }}>
                {captcha}
              </Typography>
            </Grid>
            <Grid sx={{ paddingTop: '1rem' }}>
            <Typography variant='h5' sx={{color:'red', marginBottom:'10px' }} className='Find' >{checkboxError}</Typography>
              <Button onClick={()=>handleSubmit()} variant="contained" sx={{ height: '38px', width: 'auto' }}>
                Click Here To Submit Your Registration
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default PreviewAndSubmit;
