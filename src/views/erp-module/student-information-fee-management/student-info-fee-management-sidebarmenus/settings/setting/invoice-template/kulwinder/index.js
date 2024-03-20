import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; // Corrected import
import schoollogo from 'assets/images/schoollogo.jpg';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { styled } from '@mui/system';

const DottedDivider = styled('div')({
  width: '100%',
  borderBottom: '2px dotted black', // Apply dotted border style
  marginTop: '20px', // Adjust margin for spacing
});


const Index = () => {
  return (
    <Box>
      
      <Paper elevation={2} square={true}>
      <Box sx={{marginLeft:'20px' , marginRight:'20px' }}>
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
            <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:2}}>Student Details </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px'}}>Admission No:</Typography>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px'}}>Student&lsquo;s Name:</Typography>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px'}}>Father&lsquo;s Name:</Typography>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px', marginBottom:'78px'}}>Address:</Typography>
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
            

            <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
        
        
        <Grid item xs={3}> 

        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center'  }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Cheque/Draft No. </Typography>
              </Box>
        
        </Box>
        </Grid>
        

        <Grid item xs={3}>
        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Cheque/Draft Date</Typography>
              </Box>
        
        </Box>
          
           </Grid>

        <Grid item xs={6}> 
        
        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Bank and Branch Details</Typography>
              </Box>
        
        </Box>
         </Grid>
          
          
          </Grid> 

          </Grid>



          <Grid item xs={4}>
            <Box style={{ border: '1px solid grey' }}>
              <Box style={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight: 2}}>Invoice Details  </Typography>
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
                      <Typography variant='h5' style={{marginTop:'20px' ,fontWeight:'bold' , marginRight:'30px' , marginBottom:'20px'}}><CurrencyRupeeIcon sx={{fontSize: 'small'}}/>75244</Typography>
                    </Grid>
                  </Grid>
            </Box>


            <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
        
        
       
        

        <Grid item xs={6}>
        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>*Late Payment Charges(<CurrencyRupeeIcon sx={{fontSize: 'small'}}/>)</Typography>
              </Box>
        
        </Box>
          
           </Grid>

        <Grid item xs={6}> 
        
        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Amount Paid (<CurrencyRupeeIcon sx={{fontSize: 'small'}}/>)</Typography>
              </Box>
        
        </Box>
         </Grid>
          
          
          </Grid> 
          </Grid>
        </Grid>
         

        <Typography variant='body2'  sx={{ textAlign: 'right', marginTop: '10px' , marginRight:'10px' , marginBottom:'48px' }}>
  *Late payment charges to be calculated appropriately after the last payment date</Typography>

   <Grid>

   <DottedDivider />
   <Typography variant='body1' fontWeight='bold' sx={{ textAlign: 'center' }}>
      <ContentCutIcon sx={{ position: 'relative', top: '-14px' }} />
    </Typography>

   </Grid>
 

      {/*--------------------------- PARENT'S COPY  ----------------------------*/}
     
      <Grid container spacing={2} sx={{marginTop:2}}>
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
              <Typography variant='h4' fontWeight='bold' style={{marginTop:'15px'}}>Parent&lsquo;s Copy</Typography>
              <Typography variant='h4' fontWeight='bold' style={{marginTop:'10px'}}>Fee Invoice</Typography>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box style={{ border: '1px solid grey' }}>
            <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:2}}>Student Details </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px'}}>Admission No:</Typography>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px'}}>Student&lsquo;s Name:</Typography>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px'}}>Father&lsquo;s Name:</Typography>
                      <Typography variant='h5' style={{marginLeft:'20px' , marginTop:'20px', marginBottom:'78px'}}>Address:</Typography>
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
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight: 2}}>Invoice Details  </Typography>
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
                      <Typography variant='h5' style={{marginTop:'20px' ,fontWeight:'bold' , marginRight:'30px' , marginBottom:'20px'}}>Rs 75244</Typography>
                    </Grid>
                  </Grid>
            </Box>

            
           
          </Grid>
        </Grid>
        </Box>

          {/*--------------------------- PARENT'S COPY End  ----------------------------*/}

          {/* ----------------------------------- Fee Calculation Start--------------*/}

          <Box sx={{marginLeft:'20px' , marginRight:'20px'}}>
          <Grid container spacing={2} sx={{marginTop:'-5px'}}>
          <Grid item xs={8}>
          <Grid container spacing={2}>
         
          <Grid item xs={9}>
            <Box style={{ border: '1px solid grey'  }}>
            <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Fee Heads </Typography>
              </Box>
              
              </Box>

              <Typography variant='h5' sx={{  marginTop:'10px', textAlign:'left' , marginLeft:'20px'}}>Late Fee </Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'left',marginLeft:'20px'}}>Composite Fee:  </Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'right' , fontWeight:'bold',marginLeft:'20px'}}>Invoice Total:  </Typography>
              <Typography variant='h5' sx={{  marginTop:'10px', textAlign:'right' ,fontWeight:'bold' ,marginLeft:'20px'}}>Previous Balance: </Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'right', fontWeight:'bold' ,marginLeft:'20px'}}>Net Amount Payable:  </Typography>



              </Grid>


              <Grid item xs={3}>
              <Box style={{ border: '1px solid grey'  }}>
            <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Fee Due (<CurrencyRupeeIcon sx={{fontSize: 'small'}}/>) </Typography>
              </Box>
              </Box>
              <Typography variant='h5' sx={{  marginTop:'10px', textAlign:'center' , marginLeft:'20px' }}>100 </Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'center',marginLeft:'20px' }}>27,170  </Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'center' , fontWeight:'bold',marginLeft:'20px'}}>27,270  </Typography>
              <Typography variant='h5' sx={{  marginTop:'10px', textAlign:'' ,fontWeight:'bold' ,marginLeft:'20px'}}> </Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'', fontWeight:'bold' ,marginLeft:'20px'}}> </Typography>

              </Grid>

              

              </Grid>
         
          </Grid>
          <Grid item xs={4}>
          <Grid container spacing={2}>
         
         <Grid item xs={6}>
           <Box style={{ border: '1px solid grey'  }}>
           <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
               <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Concessions (<CurrencyRupeeIcon sx={{fontSize: 'small'}}/>) </Typography>
             </Box>
             </Box>
             <Typography variant='h5' sx={{  marginTop:'10px', textAlign:'right' , marginRight:'60px'}}>0</Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'right',marginRight:'60px'}}>0</Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'right' , fontWeight:'bold',marginRight:'60px'}}>0</Typography>
          
             </Grid>


             <Grid item xs={6}>
             <Box style={{ border: '1px solid grey'  }}>
           <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
               <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Amount  (<CurrencyRupeeIcon sx={{fontSize: 'small'}}/>) </Typography>
             </Box>
             </Box>

             <Typography variant='h5' sx={{  marginTop:'10px', textAlign:'right' , marginRight:'20px'}}>100</Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'right',marginRight:'20px'}}>27,170</Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'right' , fontWeight:'bold',marginRight:'20px'}}>27,170</Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'right',marginRight:'20px'}}>0</Typography>
              <Typography variant='h5' sx={{  marginTop:'10px' , textAlign:'right' , fontWeight:'bold',marginRight:'20px'}}><CurrencyRupeeIcon sx={{fontSize: 'small'}}/>27,170</Typography>

             </Grid>

             </Grid>

            

            
          </Grid>
          

        </Grid>
        </Box>

        {/* ----------------------------------- Fee Calculation Complete--------------*/}

        {/* ----------------------------------- Below Boxes and instructions starts --------------*/}
         
        <Box sx={{marginLeft:'20px' , marginRight:'20px'}}>
        <Grid container spacing={2}>

        <Grid item xs={8}>

        <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
        
        
        <Grid item xs={3}> 

        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center'  }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Cheque/Draft No. </Typography>
              </Box>
        
        </Box>
        </Grid>
        

        <Grid item xs={3}>
        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Cheque/Draft Date</Typography>
              </Box>
        
        </Box>
          
           </Grid>

        <Grid item xs={6}> 
        
        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Bank and Branch Details</Typography>
              </Box>
        
        </Box>
         </Grid>
          
          
          </Grid> 

          </Grid>


          <Grid item xs={4}>

          <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
        
        
       
        

        <Grid item xs={6}>
        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>*Late Payment Charges(<CurrencyRupeeIcon sx={{fontSize: 'small'}}/>)</Typography>
              </Box>
        
        </Box>
          
           </Grid>

        <Grid item xs={6}> 
        
        <Box style={{ border: '1px solid grey' , height:'62px' }}> 
        <Box sx={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                <Typography variant='h4' fontWeight='bold' sx={{lineHeight:1.5}}>Amount Paid (<CurrencyRupeeIcon sx={{fontSize: 'small'}}/>)</Typography>
              </Box>
        
        </Box>
         </Grid>
          
          
          </Grid> 

          </Grid>


        </Grid>
     
        </Box>






      </Paper>
      
    </Box>
  );
};

export default Index;
