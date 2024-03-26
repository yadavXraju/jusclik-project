import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { commonTemplateContent } from '../common/common-states';
import useMediaQuery from '@mui/material/useMediaQuery';



function Template3() {

const isSmScreen = useMediaQuery('(max-width:600px)');
let width = '210mm';
let height = '297mm';



if (isSmScreen) {
  width = '100%'; // Adjust as needed for small screens
  height = '100%'; // Adjust as needed for small screens
 
}
 


  return (
    <Box >
      <Paper elevation={2} square={true} sx={{ width, height, padding: '50px 30px' , mx:'auto'}} >
      <Grid sx={{ border: '1px solid grey' }} >
        <Grid  >
          <Grid container spacing={2} sx={{ padding: '10px' }}>
            {/* First Grid item */}
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item lg={4}>
                  <img src={schoollogo} alt="schoollogo" width="100" height="100" ></img>
                </Grid>

                <Grid item lg={8}>
                  <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: '5px'}}>
                    {commonTemplateContent.schoolName}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                   {commonTemplateContent.bankName}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                    {commonTemplateContent.bankIfscCode}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* Second Grid item */}
            <Grid item lg={6} sx={{ alignItems: 'right' }}>
              <Typography variant="h2" sx={{ marginBottom: '20px', textAlign: 'right' }}>
                INVOICE
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '5px', textAlign: 'right' }}>
                Invoice# INV-17
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid sx={{ borderTop: '1px solid grey' , borderBottom:'1px solid grey' }} >
          <Grid container spacing={2} sx={{ padding:'15px 20px' }} >
            {/* First Grid item */}

            <Grid item lg={6} sx={{ borderRight: '1px solid grey' , marginBottom:'-15px' }} >
              <Grid container>
                <Grid item lg={4} >
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                    Adm No:
                  </Typography>

                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                    Class:
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                    Name:
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                    Mobile:
                  </Typography>
                  <Typography variant="body2">Father:</Typography>
                </Grid>

                <Grid item lg={8} >
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                    {commonTemplateContent.admissionNo}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                    {commonTemplateContent.className}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                    {commonTemplateContent.name}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                   {commonTemplateContent.mobile}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {commonTemplateContent.fatherName}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* Second Grid item */}
            <Grid item lg={6} sx={{ paddingLeft: '5px' }} >
              <Grid container>
                <Grid item lg={5} >
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                    Invoice No:
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                    Invoice Date:
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                    Academic Year:
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                    Fees Period:
                  </Typography>
                  <Typography variant="body2">Due Date:</Typography>
                </Grid>

                <Grid item lg={7}>
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                   {commonTemplateContent.invoiceNo}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                    {commonTemplateContent.invoiceDate}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                    {commonTemplateContent.academicYear}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                    {commonTemplateContent.feePeriod}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {commonTemplateContent.dueDate}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid sx={{ borderTop: '1px solid grey' , borderBottom:'1px solid grey' , marginTop:'50px'}} >
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ borderBottom: '1px solid grey', width: '25px', borderRight: '1px solid grey' }}>#</TableCell>
            <TableCell style={{ width: '313px', borderRight: '1px solid grey', borderBottom: '1px solid grey', textAlign: 'center', fontWeight: 'bold' }}>
              Fees Heads
            </TableCell>
            <TableCell style={{ borderBottom: '1px solid grey', flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
              Amount (<CurrencyRupeeIcon sx={{ fontSize: 'small', verticalAlign: 'middle' }} />)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" style={{ width: '25px', borderRight: '1px solid grey' }}>
              1
            </TableCell>
            <TableCell style={{ borderRight: '1px solid grey', borderBottom: '1px solid grey', textAlign: 'center' }}>
              Tution Fees
            </TableCell>
            <TableCell style={{ borderBottom: '1px solid grey', textAlign: 'center' }}>{commonTemplateContent.tutionFee}</TableCell>
          </TableRow>
          {/* Add more rows here */}
          <TableRow>
            <TableCell component="th" scope="row" style={{ width: '25px', borderRight: '1px solid grey' }}>
              2
            </TableCell>
            <TableCell style={{ borderRight: '1px solid grey', textAlign: 'center' }}>Annual Function Fees</TableCell>
            <TableCell style={{ textAlign: 'center' }}>1000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>



        
        <Grid sx={{ borderTop: '1px solid grey' , borderBottom:'1px solid grey'  , marginTop:'50px'  }}>
          <Grid container spacing={2} sx={{ padding: '15px' }} >
            {/* First Grid item */}

            <Grid item lg={6} sx={{ borderRight: '1px solid grey', alignItems:'center'  , marginBottom:'-15px' }} >

            <Typography variant="body2" sx={{ marginBottom: '5px' ,fontWeight:'bold' , textAlign:'center' }}>
            Total In Words : </Typography>

            <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: '5px' , textAlign:'center', marginTop:'12px' }}>
            Four Thousand Nine Hundred Only
                  </Typography>
              
            </Grid>

            {/* Second Grid item */}
            <Grid item lg={6} sx={{textAlign:'right'}} >
              <Grid container>
                <Grid item lg={9} >
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                  Invoice Total:
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                  Previous Balance:
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                  Net Payable Amount:
                  </Typography>
                  
                </Grid>

                <Grid item lg={3} sx={{textAlign:'right'}} >
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                  <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />{commonTemplateContent.invoiceTotal}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                   {commonTemplateContent.previousBalance}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>
                   <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />{commonTemplateContent.netAmountPayable}
                  </Typography>
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>











        <Grid sx={{ borderTop: '1px solid grey' , marginTop:'50px' }}>
        
          
        <Typography variant="body2" sx={{ marginBottom: '5px', marginLeft:'20px' , marginTop:'20px' , fontWeight:'bold' }}>Terms & Conditions </Typography>

        <Typography variant="body2" sx={{ marginBottom: '5px' ,marginLeft:'20px'  }}>1. Payment is due within 30 days from the date of invoice, late payments may incur penalties. </Typography>
        <Typography variant="body2" sx={{ marginBottom: '5px' ,marginLeft:'20px'   }}>2. Late payments exceeding [number of days] days from the due date may result in suspension of services until payment is received. </Typography>
        <Typography variant="body2" sx={{ marginBottom: '5px' ,marginLeft:'20px'   }}>3. All payments must be made in the currency specified on the invoice and should include any applicable taxes or fees.</Typography>
        <Typography variant="body2" sx={{ marginBottom: '20px' ,marginLeft:'20px'  }}>4. The client is responsible for any bank charges or transaction fees incurred during the payment process.</Typography>
       </Grid>


       

       <Box>
           <Typography variant="body2" sx={{ marginBottom:'10px' , marginRight:'20px' , fontWeight:'bold' , textAlign:'right' , marginTop:'70px' }}>Authorized Signature</Typography>
            </Box> 
        
           </Grid>

                  

      </Paper>
    </Box>
  );
}

export default Template3;
