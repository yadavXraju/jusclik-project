import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';

const Invoicedetails = [{
  school_name: 'ST XAVIER\'S HIGH SCHOOL',
  bank_name: 'Union Bank of India - 510101002874465',
  bank_ifsc_code: 'Union Bank of India IFSC -   UBIN0916366',
  admission_no: 'P00912',
  className: 'I-A',
  name: 'Shraya Kumari',
  mobile: '9845622785',
  father_name: 'krishna Kumar',
  invoice_no: 13683,
  invoice_date: '31-Jan-2024',
  academic_year: '2023-2024',
  fee_period: 'Feb`24-Mar`24',
  Due_Date: '15-Jan-2024',
  tution_fee: '4,900',
  invoice_total: '4,900',
  previous_balance: '0',
  net_amount_payable: '4,900',
  late_fee: 100,
  composite_fee: '4,900',
  invoicecopy: 'Bank Copy'

},

{
  school_name: 'ST XAVIER\'S HIGH SCHOOL',
  bank_name: 'Union Bank of India - 510101002874465',
  bank_ifsc_code: 'Union Bank of India IFSC -   UBIN0916366',
  admission_no: 'P00912',
  className: 'I-A',
  name: 'Shraya Kumari',
  mobile: '9845622785',
  father_name: 'krishna Kumar',
  invoice_no: 13683,
  invoice_date: '31-Jan-2024',
  academic_year: '2023-2024',
  fee_period: 'Feb`24-Mar`24',
  Due_Date: '15-Jan-2024',
  tution_fee: '4,900',
  invoice_total: '4,900',
  previous_balance: '0',
  net_amount_payable: '4,900',
  late_fee: 100,
  composite_fee: '4,900',
  invoicecopy: 'School Copy'

},
{
  school_name: 'ST XAVIER\'S HIGH SCHOOL',
  bank_name: 'Union Bank of India - 510101002874465',
  bank_ifsc_code: 'Union Bank of India IFSC -   UBIN0916366',
  admission_no: 'P00912',
  className: 'I-A',
  name: 'Shraya Kumari',
  mobile: '9845622785',
  father_name: 'krishna Kumar',
  invoice_no: 13683,
  invoice_date: '31-Jan-2024',
  academic_year: '2023-2024',
  fee_period: 'Feb`24-Mar`24',
  Due_Date: '15-Jan-2024',
  tution_fee: '4,900',
  invoice_total: '4,900',
  previous_balance: '0',
  net_amount_payable: '4,900',
  late_fee: 100,
  composite_fee: '4,900',
  invoicecopy: 'Parent Copy'

}
]
const InvoiceTemplate = () => {
  return (
    <Box p={1}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {Invoicedetails.map((item, index) => (
          <Grid container spacing={2} key={index}  >
            <Grid item xs={12} lg={4} classNameName="Ist" sx={{ display: "flex" }}>
              <Box borderRight={index !== Invoicedetails.length - 1 && '2px dotted'} classNameName="right-border" sx={{ paddingRight: "18px" }}>
                <Box
                  width={'100%'}
                  sx={{ border: '2px solid grey' }}>
                  <Box sx={{ borderBottom: '2px solid ', display: 'flex', textAlign: 'center' }}>
                    <Box pt={4} sx={{ width: '135px' }}>
                      <img src={schoollogo} alt='schoollogo' width="120" height="120">

                      </img>
                    </Box>
                    <Box p={1}>
                      <Typography p={1} variant='h2'> {item.school_name}</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}> {item.bank_name} </Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}> {item.bank_ifsc_code}</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: '800', fontSize: '18px' }}> Fee Slip ({item.invoicecopy})  </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
                      <Box sx={{ display: "flex" }} >
                        <Box >
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Adm No</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>{item.admission_no}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>className</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>{item.className}</Typography>
                          </Box>

                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Name</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>{item.name}</Typography>
                          </Box>

                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Mobile</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>{item.mobile}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '80px' }}>Father&apos;s Name</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>{item.father_name}</Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Inv No.[SS*]</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>{item.invoice_no}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Invoice Date</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>{item.invoice_date}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Academic Year</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>{item.academic_year}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Fee Period</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>{item.fee_period}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '85px' }}>Due Date</Typography>
                            <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>{item.Due_Date}</Typography>
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
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400', width: '385px' }}>Tution Fee</Typography>
                          <Typography p={1} variant='h4' sx={{ fontWeight: '400' }}>{item.tution_fee}</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', opacity: '0.3' }}>
                        <img src={schoollogo} alt='schoollogo' width="350" height="350">

                        </img>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '385px' }}>Invoice Total:</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>{item.invoice_total}</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '425px' }}>Previous Balance:</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>{item.previous_balance}</Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold', width: '375px' }}>Net Amount Payable:</Typography>
                        <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>{item.net_amount_payable}</Typography>
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
              {index !== Invoicedetails.length - 1 && (
                <Box sx={{ position: "relative", top: "600px", left: "-13px" }}>
                  <ContentCutOutlinedIcon sx={{ transform: "rotate(-90deg)" }} />
                </Box>
              )}
            </Grid>
          </Grid >))}
      </Box>
    </Box >
  );
}






export default InvoiceTemplate;






// template 2

    // import React from 'react';
    // import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
    // import PrintIcon from '@mui/icons-material/Print';
    // import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

    // const InvoicePage = () => {
    //   return (
        
              

    //       <Box >
    //           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <Box>
    //                   <Typography variant="h2">ShauryaSoft</Typography>
    //                   <Typography variant="h4" sx={{ fontWeight: '400' }}>Chandigarh</Typography>
    //                   <Typography variant="h4" sx={{ fontWeight: '400' }}>India</Typography>
    //                   <Typography variant="h4" sx={{ fontWeight: '400' }}>xyz@gmail.com</Typography>
    //               </Box>
    //               <Box >
    //                   <Typography variant="h1" >TAX INVOICE </Typography>
    //                   <Typography p={1} variant="h4" >Invoice INV-17</Typography>
    //                   <Typography p={1} variant="h4" >Bank Due </Typography>
    //                   <Typography variant="h4" ><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small', }}></CurrencyRupeeOutlinedIcon>562.5 </Typography>
    //               </Box>
    //               </Box>
    //               <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <Box>
    //                 <Typography variant="h5">Ship To:</Typography>
    //                       <Typography variant="h5" >Preston Miller</Typography>
    //                       <Typography variant="body1" >4068 Post Avenue Newfolden, MN 56738</Typography>
    //                       <Typography variant="body1" >PrestonMiller@armyspy.com</Typography>
    //                       <Typography variant="body1">001-234-5678</Typography>
    //                 </Box>
    //                 <Box>

    //                 <Box >
    //                       <Box>
    //                           <Typography variant="h5" >Invoice No:</Typography>
    //                           <Typography variant="body1">#DZ0112</Typography>
    //                       </Box>
    //                       <Box >
    //                           <Typography variant="h5" >Invoice Date:</Typography>
    //                           <Typography variant="body1">12 Oct, 2020</Typography>
    //                       </Box>
    //                       <Box >
    //                           <Typography variant="h5" >Order No:</Typography>
    //                           <Typography variant="body1">#1123456</Typography>
    //                       </Box>
    //                   </Box>
                 
    //                 </Box>
    //               </Box>
             

    //           <Box >
    //               <Typography variant="h5">Subject</Typography>
    //               <Typography variant="h5">Description:</Typography>

    //               <Box >
    //                   <TableContainer >
    //                       <Table >
    //                           <TableHead>
    //                               <TableRow>
    //                                   <TableCell>#</TableCell>
    //                                   <TableCell>Item & Description</TableCell>
    //                                   <TableCell>Qty</TableCell>
    //                                   <TableCell>Rate</TableCell>
    //                                   <TableCell align="right">Amount</TableCell>
    //                               </TableRow>
    //                           </TableHead>
    //                           <TableBody>
    //                               <TableRow>
    //                                   <TableCell scope="row">1</TableCell>
    //                                   <TableCell>
    //                                       <Box>
    //                                           <Typography variant="h5" >Black Strap A012</Typography>
    //                                           <Typography variant="body2" >Watch, Black</Typography>
    //                                       </Box>
    //                                   </TableCell>
    //                                   <TableCell>1</TableCell>
    //                                   <TableCell>$ 245.50</TableCell>
    //                                   <TableCell align="right">$ 245.50</TableCell>
    //                               </TableRow>
    //                               <TableRow>
    //                                   <TableCell scope="row">2</TableCell>
    //                                   <TableCell>
    //                                       <Box>
    //                                           <Typography variant="h5" c>Stainless Steel S010</Typography>
    //                                           <Typography variant="body2" >Watch, Gold</Typography>
    //                                       </Box>
    //                                   </TableCell>
    //                                   <TableCell>2</TableCell>
    //                                   <TableCell>$ 245.50</TableCell>
    //                                   <TableCell align="right">$491.00</TableCell>
    //                               </TableRow>
    //                               <TableRow>
    //                                   <TableCell colSpan="4" align="right">Sub Total</TableCell>
    //                                   <TableCell align="right">$732.50</TableCell>
    //                               </TableRow>
    //                               <TableRow>
    //                                   <TableCell colSpan="4" align="right">Discount :</TableCell>
    //                                   <TableCell align="right">- $25.50</TableCell>
    //                           </TableRow>
    //                           <TableRow>
    //                             <TableCell colSpan="4" align="right">Shipping Charge :</TableCell>
    //                             <TableCell align="right">$20.00</TableCell>
    //                           </TableRow>
    //                           <TableRow>
    //                             <TableCell colSpan="4" align="right">Tax</TableCell>
    //                             <TableCell align="right">$12.00</TableCell>
    //                           </TableRow>
    //                           <TableRow>
    //                             <TableCell colSpan="4" align="right">Total</TableCell>
    //                             <TableCell align="right"><Typography variant="h4">$739.00</Typography></TableCell>
    //                           </TableRow>
    //                         </TableBody>
    //                       </Table>
    //                     </TableContainer>
    //                   </Box>
    
    //                   <Box >
    //                     <Box>
    //                       <Button variant="outlined" color="success"startIcon={<PrintIcon />}>Print</Button>
    //                       <Button variant="contained" color="primary" href="#/">Send</Button>
    //                     </Box>
    //                   </Box>
    //                 </Box>
    //               </Box>
                  
               
        
    //   );
    // };
    
    // export default InvoicePage;
    