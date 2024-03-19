import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; // Corrected import
import schoollogo from 'assets/images/schoollogo.jpg';
import Typography from '@mui/material/Typography';

const Index = () => {
  return (
    <Box>
      <Paper elevation={2} square={true}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img
              src={schoollogo}
              alt="Logo"
              style={{ width: '140px', height: '115px', alignSelf: 'center', marginTop: '0px' }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h2" fontWeight="bold" style={{ textAlign: 'center', marginTop: '10px' }}>
              THE WISDOM TREE SCHOOL
            </Typography>
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              Sohna Road, Gurgaon - 122102
            </Typography>
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              Tel: 2267255, 2267140
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              <Typography variant='h4' fontWeight='bold' style={{marginTop:'15px'}}>School&lsquo;s Copy</Typography>
              <Typography variant='h4' fontWeight='bold' style={{marginTop:'10px'}}>Fee Invoice</Typography>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box style={{ border: '1px solid grey' }}>
              <Box style={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold'>Student Details </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px'}}>Admission No:</Typography>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px'}}>Student&lsquo;s Name:</Typography>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px'}}>Father&lsquo;s Name:</Typography>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px', marginBottom:'77px'}}>Address:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant='h5' style={{marginTop:'20px', fontWeight:'bold'}}>D11845</Typography>
                      <Typography variant='h5' style={{marginTop:'20px', fontWeight:'bold'}}>Ram Kumar</Typography>
                      <Typography variant='h5' style={{marginTop:'20px', fontWeight:'bold'}}>Sham Kumar</Typography>
                      <Typography variant='h5' style={{marginTop:'20px'}}>1234 Main Street, Suite 101, Cityville, State, Country, 12345-6789</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={2}>
                      <Typography variant='h5' style={{ marginTop:'20px'}}>Class:</Typography>
                      <Typography variant='h5' style={{ marginTop:'20px'}}>Tel(R):</Typography>
                      <Typography variant='h5' style={{ marginTop:'20px'}}>Tel(M):</Typography>
                      <Typography variant='h5' style={{ marginTop:'20px'}}>Email:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant='h5' style={{marginTop:'20px', fontWeight:'bold'}}>IX-D</Typography>
                      <Typography variant='h5' style={{marginTop:'20px'}}>9876543210</Typography>
                      <Typography variant='h5' style={{marginTop:'20px'}}>9876512345</Typography>
                      <Typography variant='h5' style={{marginTop:'20px'}}>dummyemail@example.com</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ border: '1px solid grey' }}>
              <Box style={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold'>Invoice Details  </Typography>
              </Box>
              <Grid container>
                    <Grid item xs={4}>
                      <Typography variant='h5' style={{ marginLeft:'20px', marginTop:'20px'}}>Invoice No:[SS*]:</Typography>
                      <Typography variant='h5' style={{ marginLeft:'20px', marginTop:'15px'}}>Invoice Date:</Typography>
                      <Typography variant='h5' style={{ marginLeft:'20px', marginTop:'15px'}}>Academic Year:</Typography>
                      <Typography variant='h5' style={{ marginLeft:'20px', marginTop:'15px'}}>Fee Period:</Typography>
                      <Typography variant='h5' style={{ marginLeft:'20px', marginTop:'15px'}}>Last Payment Date:</Typography>
                      <Typography variant='h5' style={{ marginLeft:'20px', marginTop:'15px'}}>Net Amount Payable:</Typography>
                    </Grid>
                    <Grid item xs={8} style={{textAlign:'right'}}>
                      <Typography variant='h5' style={{marginTop:'20px' ,fontWeight:'bold' , marginRight:'30px'}}>7765</Typography>
                      <Typography variant='h5' style={{marginTop:'15px' , marginRight:'20px'}}>25-Dec-2023</Typography>
                      <Typography variant='h5' style={{marginTop:'15px' , marginRight:'20px'}}>2023-2024</Typography>
                      <Typography variant='h5' style={{marginTop:'15px' , marginRight:'20px'}}>Jan 24 - Mar 24</Typography>
                      <Typography variant='h5' style={{marginTop:'15px' , marginRight:'20px'}}>15-Jan-2024</Typography>
                      <Typography variant='h5' style={{marginTop:'20px' ,fontWeight:'bold' , marginRight:'30px' , marginBottom:'20px'}}>Rs 27,270</Typography>
                    </Grid>
                  </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Index;
