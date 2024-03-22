// template 2

import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';

const InvoicePage = () => {
  return (
    
          <Box>
      <Paper elevation={4}>
      <Box p={2} bgcolor={'white'}>
          <Box p={1} sx={{ display: "flex", justifyContent: "space-between" }}>
             <Box>
              <Box>
             <img src={schoollogo} alt='schoollogo' width="100" height="100">

                   </img>
                   </Box>
              <Box p={1} >
                  <Typography p={1} variant="h2">S.T XAVIER&apos;S HIGH SCHOOL</Typography>
                  <Typography p={1} variant="h4" sx={{ fontWeight: '400' }}>Union Bank of India - 510101002874465</Typography>
                  <Typography p={1} variant="h4" sx={{ fontWeight: '400' }}>Union Bank of India IFSC - UBIN0916366</Typography>
                  <Typography p={1} variant="h4" sx={{ fontWeight: '400' }}>Chandigarh</Typography>
              </Box>
              </Box>
              <Box >
                  <Typography variant="h1" sx={{fontFamily: "serif"}}>TAX INVOICE </Typography>
                  <Typography p={1} variant="h4" >Invoice INV-17</Typography>
                  <Typography p={1} variant="h4" >Bank Due </Typography>
                  <Typography variant="h4" ><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small', }}></CurrencyRupeeOutlinedIcon>562.5 </Typography>
              </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                <Typography variant="h5"></Typography>
                      <Typography variant="h5" ></Typography>
                      <Typography variant="body1" ></Typography>
                      <Typography variant="body1" ></Typography>
                      <Typography variant="body1"></Typography>
                </Box>
                <Box>

                <Box >
                      <Box>
                          <Typography variant="h5" >Invoice No:</Typography>
                          <Typography variant="body1">#DZ0112</Typography>
                      </Box>
                      <Box >
                          <Typography variant="h5" >Invoice Date:</Typography>
                          <Typography variant="body1">12 Oct, 2020</Typography>
                      </Box>
                      <Box >
                          <Typography variant="h5" >Order No:</Typography>
                          <Typography variant="body1">#1123456</Typography>
                      </Box>
                  </Box>
             
                </Box>
              </Box>
         

          <Box >
              

              <Box >
                  <TableContainer >
                      <Table >
                          <TableHead>
                              <TableRow>
                                  <TableCell>#</TableCell>
                                  <TableCell sx={{fontWeight:'bold'}}>Fees Heads</TableCell>
                                  <TableCell>Qty</TableCell>
                                  <TableCell>Rate</TableCell>
                                  <TableCell align="right">Amount</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              <TableRow>
                                  <TableCell scope="row">1</TableCell>
                                  <TableCell>
                                      <Box>
                                          <Typography variant="h5" >Black Strap A012</Typography>
                                          <Typography variant="body2" >Watch, Black</Typography>
                                      </Box>
                                  </TableCell>
                                  <TableCell>1</TableCell>
                                  <TableCell>$ 245.50</TableCell>
                                  <TableCell align="right">$ 245.50</TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell scope="row">2</TableCell>
                                  <TableCell>
                                      <Box>
                                          <Typography variant="h5" c>Stainless Steel S010</Typography>
                                          <Typography variant="body2" >Watch, Gold</Typography>
                                      </Box>
                                  </TableCell>
                                  <TableCell>2</TableCell>
                                  <TableCell>$ 245.50</TableCell>
                                  <TableCell align="right">$491.00</TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell colSpan="4" align="right">Sub Total</TableCell>
                                  <TableCell align="right">$732.50</TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell colSpan="4" align="right">Discount :</TableCell>
                                  <TableCell align="right">- $25.50</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan="4" align="right">Shipping Charge :</TableCell>
                            <TableCell align="right">$20.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan="4" align="right">Tax</TableCell>
                            <TableCell align="right">$12.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan="4" align="right">Total</TableCell>
                            <TableCell align="right"><Typography variant="h4">$739.00</Typography></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>

                  <Box >
                    <Box>
                      <Button variant="outlined" color="success"startIcon={<PrintIcon />}>Print</Button>                   
                    </Box>
                  </Box>
                </Box>
              </Box>
              
           
              </Paper>
              </Box>    
  );
};

export default InvoicePage;
