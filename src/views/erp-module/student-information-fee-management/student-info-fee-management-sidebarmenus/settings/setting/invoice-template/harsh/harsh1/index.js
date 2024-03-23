// template 2

import React from 'react';
import {Grid , Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Paper } from '@mui/material';

import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';
import { commonTemplateContent } from '../../common/common-states';

const InvoicePage = () => {
  return (

    <Box>
      <Paper elevation={4}>
        <Box p={2} bgcolor={'white'}>
          <Box p={4} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Box >
                <img src={schoollogo} alt='schoollogo' width="100" height="100">

                </img>
              </Box>
              <Box p={1} pt={3} >
                <Typography p={1} variant="h1">{commonTemplateContent.schoolName}</Typography>
                <Typography p={1} variant="h4" sx={{ fontWeight: '400' }}>{commonTemplateContent.bankName}</Typography>
                <Typography p={1} variant="h4" sx={{ fontWeight: '400' }}>{commonTemplateContent.bankIfscCode}</Typography>
                <Typography p={1} variant="h4" sx={{ fontWeight: '400' }}>{commonTemplateContent.address}</Typography>
              </Box>
            </Box>
            <Box >
              <Typography variant="h1" sx={{ fontFamily: "serif" ,fontSize:'54px' ,fontWeight:'500'}}>INVOICE </Typography>
              <Typography p={1} sx={{display:'flex',justifyContent:'end'}} variant="h4" >Invoice# INV-17</Typography>
              <Typography p={1} sx={{display:'flex',justifyContent:'end'}} variant="h4" >Bank Due </Typography>
              <Typography p={1} sx={{display:'flex',justifyContent:'end'}} variant="h4" ><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small', }}></CurrencyRupeeOutlinedIcon>562.5 </Typography>
            </Box>
          </Box>
          <Box pb={4} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box pl={4}> 
                           <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'116px'}}>Adm No:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.admissionNo}</Typography>
                          </Box>
                          <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,  width:'117px'}}>Class:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.className}</Typography>
                          </Box>
                          <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,width:'110px'}}>Name:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.name}</Typography>
                          </Box>
                          <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,width:'110px'}}>Mobile:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.mobile}</Typography>
                          </Box>
                          <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,width:'110px'}}>Father:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.fatherName}</Typography>
                          </Box>
                          </Box>
            

              <Box pr={4} sx={{width:'25%'}}>
                <Box display={'flex'} >
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }} >Invoice No:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: 'bold' ,textAlign:'end', width:'100%'}}>{commonTemplateContent.invoiceNo}</Typography>
                </Box>
                <Box display={'flex'}>
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>Invoice Date:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: '400',textAlign:'end', width:'100%'  }}>{commonTemplateContent.invoiceDate}</Typography>
                </Box>
                <Box display={'flex'}>
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>Academic Year:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>{commonTemplateContent.academicYear}</Typography>
                </Box>
                <Box display={'flex'}>
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>Fees Period:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: 'bold',textAlign:'end', width:'100%' }}>{commonTemplateContent.feePeriod}</Typography>
                </Box>
                <Box display={'flex'}>
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>Due Date:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>{commonTemplateContent.dueDate}</Typography>
                </Box>
              </Box>

            
          </Box>


          <Box p={4}>


            <Box >
              <TableContainer >
                <Table >
                  <TableHead>
                    <TableRow > 
                      <TableCell >#</TableCell>
                      <TableCell  sx={{ fontWeight: 'bold' }}>Fees Heads</TableCell>

                      <TableCell  sx={{ fontWeight: 'bold'  }}align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell width="100px" scope="row" sx={{fontWeight:'bold'}}>1</TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="h5" sx={{fontWeight:'bold'}}>Tution Fees</Typography> 
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{fontWeight:'bold'}}>{commonTemplateContent.tutionFee}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell scope="row" sx={{fontWeight:'bold'}}>2</TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="h5" sx={{fontWeight:'bold'}}>Annual Function Fees</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{fontWeight:'bold'}}> 1000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell scope="row" sx={{fontWeight:'bold'}}>3</TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="h5" ></Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right"> </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            </Box>

            <Grid sx={{display:'flex' ,justifyContent:'end' }}>

              

           

            <Box pr={4}>
            <Box display={"flex"} justifyContent={'flex-end'} sx={{flexDirection:'column', alignItems:"end"}}> 
                <Box display={'flex'} gap={'69px'}>
                  <Typography p={2} variant="h4" sx={{ fontWeight: 'bold' }} >Invoice Total:</Typography>
                  <Typography p={2} variant="body1" sx={{ fontWeight: 'bold', textAlign:'right'}}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small', }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.invoiceTotal}</Typography>
                </Box>
                <Box display={'flex'} gap={'112px'} >
                  <Typography p={2} variant="h4" sx={{ fontWeight: 'bold' }} >Previous Balance:</Typography>
                  <Typography p={2} variant="body1" sx={{ fontWeight: 'bold', textAlign:'right'}}>{commonTemplateContent.previousBalance}</Typography>
                </Box>
                <Box display={'flex'} gap={'72px'} >
                  <Typography p={2} variant="h4" sx={{ fontWeight: 'bold' }} >Net Payable Amount:</Typography>
                  <Typography p={2} variant="body1" sx={{ fontWeight: 'bold', textAlign:'right'}}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small', }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.netAmountPayable}</Typography>
                </Box>
                <Box display={'flex'} >
                  <Typography p={2} variant="h5" sx={{ fontWeight: '400'}} >Total In Words:</Typography>
                  <Typography p={2} variant="h4" sx={{ fontWeight: 'bold', textAlign:'right'}}>Four Thousand Nine Hundred Only</Typography>
                </Box>
            </Box>
            </Box>


            </Grid>
            <Box pt={4} p={6} >
            <Box>
              <Typography p={2} variant="h4" sx={{ fontWeight: '600'}} >Terms & Conditions</Typography>
              <Typography p={2} variant="h5" sx={{ fontWeight: '400'}} >Your School&apos;s Terms and Conditions will be displayed here. You can add it in the Invoice Preferences page under Settings.</Typography>
            </Box>
            </Box>
        </Box>


      </Paper>
    </Box>
  );
};

export default InvoicePage;
