
// const InvoiceTemplate = () => {
//   const [schoolDetails, setSchoolDetails] = useState({
//     schoolName: "harsh group institution",
//     bankName: "Bank of Baroda",
//     AccountNo: "91389835479985"
//   });

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';



const InvoiceTemplate = () => {

  return (
    <Box p={1}>
      <Box >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} className="Ist" sx={{ display: "flex" }}>
            <Box borderRight={'2px dotted'} sx={{ paddingRight: "12px" }}>

              <Box
                width={'100%'}
                sx={{ border: '2px solid grey' }}>
                <Box sx={{ borderBottom: '2px solid ', display: 'flex', justifyContent: 'center' }}>
                  <Box p={2} sx={{ width: '220px' }}>
                    <img src={schoollogo} alt='schoollogo' width="125" height="150">

                    </img>
                  </Box>
                  <Box p={1}>
                    <Typography p={1} variant='h2'>  ST XAVIER&apos;S HIGH SCHOOL</Typography>


                    <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}> Union Bank of India - 510101002874465 </Typography>


                    <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}> Union Bank of India IFSC -   UBIN0916366</Typography>


                    <Typography p={1} variant='h4' sx={{ fontWeight: '800', fontSize: '22px' }}> Fee Slip (Bank Copy)  </Typography>

                  </Box>
                </Box>
                <Box>
                  <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
                    <Box sx={{ display: "flex" }} >
                      <Box >
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Adm No</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>P00912</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Class</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>1-A</Typography>
                        </Box>

                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Name</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>Sharaya Kumari</Typography>
                        </Box>

                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Mobile</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>9648527642</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Father&apos;s Name</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>Krishan Yadav</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Inv No.[SS*]</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>13683</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Invoice Date</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>31-Jan-2024</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Academic Year</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>2023-2024</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Fee Period</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Feb`24-Mar`24</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Due Date</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>15-Feb-2024</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
                  <Box>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '340px' }}>Fees Heads</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Amount(<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>)</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '385px' }}>Tution Fee</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>4,900</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', opacity: '0.3' }}>
                      <img src={schoollogo} alt='schoollogo' width="350" height="350">

                      </img>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '385px' }}>Invoice Total:</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>4,900</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '425px' }}>Previous Balance:</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>0</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '367px' }}>Net Amount Payable:</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>4,900</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ borderBottom: '2px solid ' }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px 5px 10px 14px" }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Amount To Be Deposited:</Typography>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Four Thousand Nine Hundred <br /> Only
                    </Typography>

                  </Box>
                </Box>
                <Box >
                  <Grid lg={12} container sx={{ display: "flex", justifyContent: "space-between", padding: "0px 0px 0 14px" }}>
                    <Grid lg={6} item>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Cheque/Draft No.</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Cheque/Draft Date: </Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Bank and Branch Details :</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>*Fine to be calculated appropriately after the last
                        payment date.</Typography>
                    </Grid>
                    <Grid lg={6} item >
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>*Fine (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Amount Paid (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>

                    </Grid>
                  </Grid>

                </Box>
              </Box>


            </Box>
            <Box sx={{ position: "relative", top: "600px", left: "-12px" }}>
              <ContentCutOutlinedIcon sx={{ transform: "rotate(-90deg)" }} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ display: "flex" }}>
            <Box borderRight={'2px dotted'} sx={{ paddingRight: "12px" }}>
              <Box

                width={'100%'}
                sx={{ border: '2px solid grey' }}>
                <Box sx={{ borderBottom: '2px solid ', display: 'flex', justifyContent: 'center' }}>
                  <Box p={2} sx={{ width: '220px' }}>
                    <img src={schoollogo} alt='schoollogo' width="125" height="150">

                    </img>
                  </Box>
                  <Box p={1}>
                    <Typography p={1} variant='h2'>  ST XAVIER&apos;S HIGH SCHOOL</Typography>


                    <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}> Union Bank of India - 510101002874465 </Typography>


                    <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}> Union Bank of India IFSC -   UBIN0916366</Typography>


                    <Typography p={1} variant='h4' sx={{ fontWeight: '800', fontSize: '22px' }}> Fee Slip (Bank Copy)  </Typography>

                  </Box>
                </Box>
                <Box>
                  <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
                    <Box sx={{ display: "flex" }} >
                      <Box >
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Adm No</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>P00912</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Class</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>1-A</Typography>
                        </Box>

                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Name</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>Sharaya Kumari</Typography>
                        </Box>

                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Mobile</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>9648527642</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Father&apos;s Name</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>Krishan Yadav</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Inv No.[SS*]</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>13683</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Invoice Date</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>31-Jan-2024</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Academic Year</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>2023-2024</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Fee Period</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Feb`24-Mar`24</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Due Date</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>15-Feb-2024</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
                  <Box>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '340px' }}>Fees Heads</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Amount(<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>)</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '385px' }}>Tution Fee</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>4,900</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', opacity: '0.3' }}>
                      <img src={schoollogo} alt='schoollogo' width="350" height="350">

                      </img>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '385px' }}>Invoice Total:</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>4,900</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '425px' }}>Previous Balance:</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>0</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '367px' }}>Net Amount Payable:</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>4,900</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ borderBottom: '2px solid ' }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px 5px 10px 14px" }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Amount To Be Deposited:</Typography>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Four Thousand Nine Hundred <br /> Only
                    </Typography>

                  </Box>
                </Box>
                <Box >
                  <Grid lg={12} container sx={{ display: "flex", justifyContent: "space-between", padding: "0px 0px 0 14px" }}>
                    <Grid lg={6} item>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Cheque/Draft No.</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Cheque/Draft Date: </Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Bank and Branch Details :</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>*Fine to be calculated appropriately after the last
                        payment date.</Typography>
                    </Grid>
                    <Grid lg={6} item >
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>*Fine (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Amount Paid (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>

                    </Grid>
                  </Grid>

                </Box>
              </Box>

            </Box>
            <Box sx={{ position: "relative", top: "600px", left: "-12px" }}>
              <ContentCutOutlinedIcon sx={{ transform: "rotate(-90deg)" }} />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box
              width={'100%'}

              sx={{ border: '2px solid grey' }}>
              <Box sx={{ borderBottom: '2px solid ', display: 'flex', justifyContent: 'center' }}>
                <Box p={2} sx={{ width: '220px' }}>
                  <img src={schoollogo} alt='schoollogo' width="125" height="150">

                  </img>
                </Box>
                <Box p={1}>
                  <Typography p={1} variant='h2'>  ST XAVIER&apos;S HIGH SCHOOL</Typography>


                  <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}> Union Bank of India - 510101002874465 </Typography>


                  <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}> Union Bank of India IFSC -   UBIN0916366</Typography>


                  <Typography p={1} variant='h4' sx={{ fontWeight: '800', fontSize: '22px' }}> Fee Slip (Bank Copy)  </Typography>

                </Box>
              </Box>
              <Box>
                <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
                  <Box sx={{ display: "flex" }} >
                    <Box >
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Adm No</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>P00912</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Class</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>1-A</Typography>
                      </Box>

                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Name</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>Sharaya Kumari</Typography>
                      </Box>

                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Mobile</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>9648527642</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Father&apos;s Name</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>Krishan Yadav</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Inv No.[SS*]</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>13683</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Invoice Date</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>31-Jan-2024</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Academic Year</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>2023-2024</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Fee Period</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Feb`24-Mar`24</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Due Date</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>15-Feb-2024</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
                <Box>
                  <Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '340px' }}>Fees Heads</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Amount(<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>)</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '385px' }}>Tution Fee</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>4,900</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', opacity: '0.3' }}>
                    <img src={schoollogo} alt='schoollogo' width="350" height="350">

                    </img>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '385px' }}>Invoice Total:</Typography>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>4,900</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '425px' }}>Previous Balance:</Typography>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>0</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '367px' }}>Net Amount Payable:</Typography>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>4,900</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ borderBottom: '2px solid ' }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px 5px 10px 14px" }}>
                  <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Amount To Be Deposited:</Typography>
                  <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Four Thousand Nine Hundred <br /> Only
                  </Typography>

                </Box>
              </Box>
              <Box >
                <Grid lg={12} container sx={{ display: "flex", justifyContent: "space-between", padding: "0px 0px 0 14px" }}>
                  <Grid lg={6} item>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Cheque/Draft No.</Typography>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Cheque/Draft Date: </Typography>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Bank and Branch Details :</Typography>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>*Fine to be calculated appropriately after the last
                      payment date.</Typography>
                  </Grid>
                  <Grid lg={6} item >
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>*Fine (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>
                    <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Amount Paid (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>

                  </Grid>
                </Grid>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box >
  );
}








export default InvoiceTemplate;