import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; // Corrected import
//import schoollogo from 'assets/images/schoollogo.jpg';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { styled } from '@mui/system';
import { List, ListItemText } from '@mui/material';
import { commonTemplateContent} from '../common/common-states';
import useMediaQuery from '@mui/material/useMediaQuery';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';

const DottedDivider = styled('div')({
    width: '100%',
    borderBottom: '2px dotted black', // Apply dotted border style
    marginTop: '20px' // Adjust margin for spacing
  });
  
const CompactTemplate2 = ({states}) => {
  const isSmScreen = useMediaQuery('(max-width:600px)');
  const [generalSettings, headerFooterSettings, tableSettings] = states;
  
  generalSettings
  headerFooterSettings
  tableSettings
  

  const style={
    width : '1157',
    height : '1839',
    
  }

  if (isSmScreen) {
    style.width = '100%'; // Adjust as needed for small screens
    style.height = '100%'; // Adjust as needed for small screens
    
  
  }

    const templateContent=[]
    for(let i=0;i<2;i++)
    { templateContent.push( <Grid  sx={{ marginBottom: '40px'  }}>
     <Grid  spacing={2} className='tetf' sx={{backgroundColor:headerFooterSettings.headerBackgroundColor , marginBottom:'20px'   , display:'flex'}} > {/*  Header */}
      <Grid item lg={2} xs={12} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' ,marginTop: '30px'  }}>
        <img src={schoollogo} alt="Logo" style={{ width: '97px', height: '90px', alignItems: 'center', marginTop: '0px' }} />
      </Grid>
      <Grid item lg={8} xs={12} >
        <Typography variant="h2" fontWeight="bold" style={{ textAlign: 'center', marginTop: '30px' }}>
          {commonTemplateContent.schoolName}
        </Typography>
        <Typography variant="h5" style={{ textAlign: 'center'  }}>
         {commonTemplateContent.SchoolAddress}
        </Typography>
        <Typography variant="h5" style={{ textAlign: 'center'   }}>
          {commonTemplateContent.mobile}
        </Typography>
      </Grid>
      <Grid item lg={2} xs={12} sx={{marginTop: '30px' }}>
        <Typography variant="body1" style={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight="bold" style={{ marginTop: '15px' }}>
             {commonTemplateContent.copyName[i]}
          </Typography>
          <Typography variant="h5" fontWeight="bold" style={{ marginTop: '10px' }}>
            Fee Invoice
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  
    <Grid  spacing={2} sx={{backgroundColor:tableSettings.itemRowBackgroundColor ,display:'flex'}}>
      <Grid item lg={7} xs={12}>
        <Box style={{ border: `1px solid ${tableSettings.borderColor}` , marginRight:'10px'}}>
          <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
            <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 2 , color:tableSettings.headerFontColor}}>
              Student Details
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item lg={7} xs={12}>
              <Grid container>
                <Grid item lg={6} xs={6}>
                  <Typography variant="h6" style={{ marginLeft: '10px', marginTop: '20px' }}>
                    Admission No:
                  </Typography>
                  <Typography variant="h6" style={{ marginLeft: '10px', marginTop: '20px' }}>
                    Student&lsquo;s Name:
                  </Typography>
                  <Typography variant="h6" style={{ marginLeft: '10px', marginTop: '20px' }}>
                    Father&lsquo;s Name:
                  </Typography>
                  <Typography variant="h6" style={{ marginLeft: '10px', marginTop: '20px' }}>
                    Address:
                  </Typography>
                </Grid>
                <Grid item lg={6} xs={6}>
                  <Typography variant="h6" style={{ marginTop: '20px', fontWeight: 'bold' }}>
                   {commonTemplateContent.admissionNo}
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '20px', fontWeight: 'bold' }}>
        
                  {commonTemplateContent.name}
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '20px', fontWeight: 'bold' }}>
                  {commonTemplateContent.fatherName}
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '20px' }}>
                  {commonTemplateContent.SchoolAddress}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} xs={12}>
              <Grid container>
                <Grid item lg={5} xs={6}>
                  <Typography variant="h6" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    Class:
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    Tel(R):
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    Tel(M):
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '20px', marginLeft: '20px', marginBottom: '78px' }}>
                    Email:
                  </Typography>
                </Grid>
                <Grid item lg={7} xs={6}>
                  <Typography variant="h6" style={{ marginTop: '20px', fontWeight: 'bold' }}>
                   {commonTemplateContent.className}
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '20px' }}>
                  {commonTemplateContent.mobile}
                    
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '20px' }}>
                  {commonTemplateContent.schoolTel}
                  
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '20px', wordWrap: 'break-word' }}>
                  {commonTemplateContent.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

       
  
        <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
          <Grid item lg={3} xs={12}>
            <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
              <Box sx={{  textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                  Cheque/Draft No.{' '}
                </Typography>
              </Box>
            </Box>
          </Grid>
  
          <Grid item lg={4} xs={12}>
            <Box style={{ border: `1px solid ${tableSettings.borderColor}` , height: '62px' }}>
              <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                  Cheque/Draft Date
                </Typography>
              </Box>
            </Box>
          </Grid>
  
          <Grid item lg={5} xs={12}>
            <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' , marginRight:'10px' }}>
              <Box sx={{backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                  Bank and Branch Details
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      
  
      <Grid item lg={5} xs={12}>
        <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
          <Box style={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center'  }}>
            <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 2 ,color:tableSettings.headerFontColor}}>
              Invoice Details
            </Typography>
          </Box>
          <Grid container>
            <Grid item lg={7} xs={7}>
              <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '20px' }}>
                Invoice No:[SS*]:
              </Typography>
              <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px' }}>
                Invoice Date:
              </Typography>
              <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px' }}>
                Academic Year:
              </Typography>
              <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px' }}>
                Fee Period:
              </Typography>
              <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px' }}>
                Due Date:
              </Typography>
              <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px' }}>
                Net Amount Payable:
              </Typography>
            </Grid>
            <Grid item lg={5} xs={5} style={{ textAlign: 'right' }}>
              <Typography variant="h6" style={{ marginTop: '20px', fontWeight: 'bold', marginRight: '30px' }}>
                {commonTemplateContent.invoiceNo}
              </Typography>
              <Typography variant="h6" style={{ marginTop: '15px', marginRight: '20px' }}>
                {commonTemplateContent.invoiceDate}
              </Typography>
              <Typography variant="h6" style={{ marginTop: '15px', marginRight: '20px' }}>
              {commonTemplateContent.academicYear}
              </Typography>
              <Typography variant="h6" style={{ marginTop: '15px', marginRight: '20px' }}>
              {commonTemplateContent.feePeriod}
              </Typography>
              <Typography variant="h6" style={{ marginTop: '15px', marginRight: '20px' }}>
               {commonTemplateContent.dueDate}
              </Typography>
              <Typography
                variant="h6"
                style={{ marginTop: '20px', fontWeight: 'bold', marginRight: '30px', marginBottom: '20px' }}
              >
                <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />
               {commonTemplateContent.netAmountPayable}
              </Typography>
            </Grid>
          </Grid>
        </Box>
  
        <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
          <Grid item lg={7} xs={12}>
            <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
              <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                  *Late Payment Charges(
                  <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />)
                </Typography>
              </Box>
            </Box>
          </Grid>
  
          <Grid item lg={5} xs={12}>
            <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
              <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                  Amount Paid (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />)
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
    {i !== 1 && (
      <Grid sx={{ marginTop: '5px' }}>
        <Typography variant="body2" sx={{ textAlign: 'right', marginTop: '0px', marginRight: '10px', marginBottom: '30px' }}>
          *Late payment charges to be calculated appropriately after the last payment date
        </Typography>
        <DottedDivider />
        <Typography variant="body1" fontWeight="bold" sx={{ textAlign: 'center' }}>
          <ContentCutIcon sx={{ position: 'relative', top: '-14px' }} />
        </Typography>
      </Grid>
        )}
   
  </Grid>)
  
    }
  0
    return (
      <Box sx={{ ...style, margin: 'auto' }}>
        <Paper elevation={2} square={true} sx={{backgroundColor:generalSettings.backgroundColor}} >
          <Box sx={{ marginLeft: '10px', marginRight: '10px' }}>
            
  
           {/* loop return */}
            
           {templateContent}
            
          </Box>
  
          {/* ----------------------------------- Fee Calculation Start--------------*/}
  
          <Box sx={{ marginLeft: '10px', marginRight: '10px' , backgroundColor:tableSettings.itemRowBackgroundColor}}>
            <Grid container spacing={2} sx={{ marginTop: '-5px' }}>
              <Grid item lg={8} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={9} xs={6}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                      <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 ,color:tableSettings.headerFontColor}}>
                          Fee Heads{' '}
                        </Typography>
                      </Box>
                    </Box>
  
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', marginLeft: '20px' }}>
                      Late Fee{' '}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', marginLeft: '20px' }}>
                      Composite Fee:{' '}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', fontWeight: 'bold', marginLeft: '20px' }}>
                      Invoice Total:{' '}
                    </Typography>
                  </Grid>
  
                  <Grid item lg={3} xs={6}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                      <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 ,color:tableSettings.headerFontColor}}>
                          Fee Due (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />){' '}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'center', marginLeft: '20px' }}>
                      {commonTemplateContent.lateFee}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'center', marginLeft: '20px' }}>
                      {commonTemplateContent.compositeFee}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'center', fontWeight: 'bold', marginLeft: '20px' }}>
                    {commonTemplateContent.invoiceTotal}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: '', fontWeight: 'bold', marginLeft: '20px' }}>
                      {' '}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: '', fontWeight: 'bold', marginLeft: '20px' }}>
                      {' '}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={6} xs={7}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                      <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 ,color:tableSettings.headerFontColor }}>
                          Concessions (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />){' '}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '60px' }}>
                      {commonTemplateContent.concession}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '60px' }}>
                    {commonTemplateContent.concession}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold', marginRight: '60px' }}>
                    {commonTemplateContent.concession}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', fontWeight: 'bold', marginLeft: '20px' }}>
                      Previous Balance:{' '}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', fontWeight: 'bold', marginLeft: '20px' }}>
                      Net Amount Payable:{' '}
                    </Typography>
                  </Grid>
  
                  <Grid item lg={6} xs={5}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                      <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 ,color:tableSettings.headerFontColor }}>
                          Amount (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />){' '}
                        </Typography>
                      </Box>
                    </Box>
  
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '20px' }}>
                      {commonTemplateContent.lateFee}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '20px' }}>
                      {commonTemplateContent.compositeFee}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold', marginRight: '20px' }}>
                      {commonTemplateContent.invoiceTotal}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '20px' }}>
                      {commonTemplateContent.previousBalance}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold', marginRight: '20px' }}>
                      <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />
                      {commonTemplateContent.netAmountPayable}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
  
          {/* ----------------------------------- Fee Calculation Complete--------------*/}
  
          {/* ----------------------------------- Below Boxes and instructions starts --------------*/}
  
          <Box sx={{ marginLeft: '10px', marginRight: '10px', marginBottom: '15px', marginTop: '15px' ,backgroundColor: tableSettings.itemRowBackgroundColor}}>
            <Grid container spacing={2}>
              <Grid item lg={8} xs={12}>
                <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
                  <Grid item lg={3} xs={12}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                      <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                          Cheque/Draft No.{' '}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
  
                  <Grid item lg={3} xs={12}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                      <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                          Cheque/Draft Date
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
  
                  <Grid item lg={6} xs={12}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                      <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                          Bank and Branch Details
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
  
              <Grid item lg={4} xs={12}>
                <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
                  <Grid item lg={6} xs={12}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                      <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                          *Late Payment Charges(
                          <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />)
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
  
                  <Grid item lg={6} xs={12}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                      <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 }}>
                          Amount Paid (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />)
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {/*  Footer */}
  
         <Grid sx={{backgroundColor:headerFooterSettings.footerBackgroundColor ,marginLeft:'10px' , marginRight:'10px'}}>

         

          <Box sx={{ marginLeft: '20px', '& .MuiTypography-root': { fontWeight: 'bold !important' , fontSize:'12px'  }}}> 
            <List>
              <ListItemText
                primary="1. We expect that all parents will remit the fee dues of their wards on time. Pl clear the dues latest by 15-Jan-2024. After
  the due date late payment charges will be applicable, as per the given schedule: Rs. 100/- from 16-Jan-2024 to 31-Jan2024; Rs. 500/- from 01-Feb-2024 to 15-Feb-2024; Rs.1000/- from 16-Feb-2024 to 29-Feb-2024; Rs.2500/- from 01-Mar2024.
  "
              />
              <ListItemText primary="2. Parents are requested to issue Cheque/DD in favour of School payable at Delhi/Gurugramonly and  please attach the copy of the fee slip with the Cheque/DD. Out station cheques payable at-par only will beaccepted." />
              <ListItemText
                primary="3. Please write your ward's Name, Admission No, Class, Section and Phone No. on the backside of the cheque/DD. If
  cheque is dishonoured for any reason, Rs. 500/- will be levied as re-processing charges."
              />
              <ListItemText primary="4. Please visit our website :- www.dpsmarutikunj.org for online payment" />
              <ListItemText
                primary="5. Please scan below Printed QR-Code for depositing fee via PayTm.
  "
              />
              <ListItemText
                primary="6. For the convenience of the parents monthly payment option is also available. Parents may pay fee dues in three equal
  monthly instalments during the first week of every month."
              />
              <ListItemText sx={{ marginBottom: '50px' }} primary="7. Parents are requested to make the payment via student portal." />
            </List>
          </Box>
          </Grid>
        </Paper>
      </Box>
    );
}

export default CompactTemplate2