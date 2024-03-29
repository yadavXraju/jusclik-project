import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; 

import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { styled } from '@mui/system';
import { List, ListItemText } from '@mui/material';
import { commonTemplateContent } from '../common/common-states';
import useMediaQuery from '@mui/material/useMediaQuery';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';

const DottedDivider = styled('div')({
  width: '100%',
  borderBottom: '2px dotted black', // Apply dotted border style
  marginTop: '20px' // Adjust margin for spacing
});

const CompactTemplate2 = ({ states }) => {
 

  const isSmScreen = useMediaQuery('(max-width:600px)');
  const [generalSettings, headerFooterSettings, tableSettings] = states;
 
  generalSettings;
  headerFooterSettings;
  tableSettings;





  

  const style = {
    width: '900px'
  };

  if (isSmScreen) {
    style.width = '100%'; // Adjust as needed for small screens
    style.height = '100%'; // Adjust as needed for small screens
  }

  const templateContent = [];
  for (let i = 0; i < 2; i++) {
    templateContent.push(
      <Grid>
        <Grid
          spacing={2}
          className="tetf"
          sx={{ backgroundColor: headerFooterSettings.headerBackgroundColor, display: 'flex', padding: '15px 0px' }}
        >
          
          {/*  Header */}
          <Grid item lg={2} xs={12} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '30px' }}>
            <img src={schoollogo} alt="Logo" style={{ width: '97px', height: '90px', alignItems: 'center', marginTop: '0px' }} />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Typography variant="h2" fontWeight="bold" style={{ textAlign: 'center', marginTop: '30px' }}>
              {commonTemplateContent.schoolName}
            </Typography>
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              {commonTemplateContent.SchoolAddress}
            </Typography>
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              {commonTemplateContent.mobile}
            </Typography>
          </Grid>


          <Grid item lg={2} xs={12} sx={{ marginTop: '30px' }}>
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


        <Grid spacing={2} sx={{ backgroundColor: generalSettings.backgroundColor, display: 'flex' , backgroundImage:`url(${generalSettings.backgroundImage})` }} className='findme' >
          <Grid item lg={7} xs={12}>
            <Box style={{ border: `1px solid ${tableSettings.borderColor}`, marginRight: '10px' }}>
              <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 2, color: generalSettings.labelColor }}>
                  Student Details
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item lg={7} xs={12}>
                  <Grid container>
                    <Grid item lg={6} xs={6}>
                      <Typography variant="h6" style={{ marginLeft: '10px', marginTop: '20px', color: generalSettings.labelColor }}>
                        Admission No:
                      </Typography>
                      <Typography variant="h6" style={{ marginLeft: '10px', marginTop: '20px', color: generalSettings.labelColor }}>
                        Student&lsquo;s Name:
                      </Typography>
                      <Typography variant="h6" style={{ marginLeft: '10px', marginTop: '20px', color: generalSettings.labelColor }}>
                        Father&lsquo;s Name:
                      </Typography>
                      <Typography variant="h6" style={{ marginLeft: '10px', marginTop: '20px', color: generalSettings.labelColor }}>
                        Address:
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={6}>
                      <Typography variant="h6" style={{ marginTop: '20px', fontWeight: 'bold', color: generalSettings.fontColor }}>
                        {commonTemplateContent.admissionNo}
                      </Typography>
                      <Typography variant="h6" style={{ marginTop: '20px', fontWeight: 'bold', color: generalSettings.fontColor }}>
                        {commonTemplateContent.name}
                      </Typography>
                      <Typography variant="h6" style={{ marginTop: '20px', fontWeight: 'bold', color: generalSettings.fontColor }}>
                        {commonTemplateContent.fatherName}
                      </Typography>
                      <Typography variant="h6" style={{ marginTop: '20px', color: generalSettings.fontColor }}>
                        {commonTemplateContent.SchoolAddress}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={5} xs={12}>
                  <Grid container>
                    <Grid item lg={5} xs={6}>
                      <Typography variant="h6" style={{ marginTop: '20px', marginLeft: '20px', color: generalSettings.labelColor }}>
                        Class:
                      </Typography>
                      <Typography variant="h6" style={{ marginTop: '20px', marginLeft: '20px', color: generalSettings.labelColor }}>
                        Tel(R):
                      </Typography>
                      <Typography variant="h6" style={{ marginTop: '20px', marginLeft: '20px', color: generalSettings.labelColor }}>
                        Tel(M):
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ marginTop: '20px', marginLeft: '20px', marginBottom: '78px', color: generalSettings.labelColor }}
                      >
                        Email:
                      </Typography>
                    </Grid>
                    <Grid item lg={7} xs={6}>
                      <Typography variant="h6" style={{ marginTop: '20px', fontWeight: 'bold', color: generalSettings.fontColor }}>
                        {commonTemplateContent.className}
                      </Typography>
                      <Typography variant="h6" style={{ marginTop: '20px', color: generalSettings.fontColor }}>
                        {commonTemplateContent.mobile}
                      </Typography>
                      <Typography variant="h6" style={{ marginTop: '20px', color: generalSettings.fontColor }}>
                        {commonTemplateContent.schoolTel}
                      </Typography>
                      <Typography variant="h6" style={{ marginTop: '20px', wordWrap: 'break-word', color: generalSettings.fontColor }}>
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
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5, color: generalSettings.labelColor }}>
                      Cheque/Draft No.{' '}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={4} xs={12}>
                <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                  <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5, color: generalSettings.labelColor }}>
                      Cheque/Draft Date
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={5} xs={12}>
                <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px', marginRight: '10px' }}>
                  <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5, color: generalSettings.labelColor }}>
                      Bank and Branch Details
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={5} xs={12}>
            <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
              <Box style={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 2, color: generalSettings.labelColor }}>
                  Invoice Details
                </Typography>
              </Box>
              <Grid container>
                <Grid item lg={7} xs={7}>
                  <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '20px', color: generalSettings.labelColor }}>
                    Invoice No:[SS*]:
                  </Typography>
                  <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px', color: generalSettings.labelColor }}>
                    Invoice Date:
                  </Typography>
                  <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px', color: generalSettings.labelColor }}>
                    Academic Year:
                  </Typography>
                  <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px', color: generalSettings.labelColor }}>
                    Fee Period:
                  </Typography>
                  <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px', color: generalSettings.labelColor }}>
                    Due Date:
                  </Typography>
                  <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '15px', color: generalSettings.labelColor }}>
                    Net Amount Payable:
                  </Typography>
                </Grid>
                <Grid item lg={5} xs={5} style={{ textAlign: 'right' }}>
                  <Typography
                    variant="h6"
                    style={{ marginTop: '20px', fontWeight: 'bold', marginRight: '30px', color: generalSettings.fontColor }}
                  >
                    {commonTemplateContent.invoiceNo}
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '15px', marginRight: '20px', color: generalSettings.fontColor }}>
                    {commonTemplateContent.invoiceDate}
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '15px', marginRight: '20px', color: generalSettings.fontColor }}>
                    {commonTemplateContent.academicYear}
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '15px', marginRight: '20px', color: generalSettings.fontColor }}>
                    {commonTemplateContent.feePeriod}
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: '15px', marginRight: '20px', color: generalSettings.fontColor }}>
                    {commonTemplateContent.dueDate}
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      marginTop: '20px',
                      fontWeight: 'bold',
                      marginRight: '30px',
                      marginBottom: '20px',
                      color: generalSettings.fontColor
                    }}
                  >
                    <CurrencyRupeeIcon sx={{ fontSize: 'small', color: generalSettings.fontColor }} />
                    {commonTemplateContent.netAmountPayable}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
              <Grid item lg={7} xs={12}>
                <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                  <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5, color: generalSettings.labelColor }}>
                      *Late Payment Charges(
                      <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={5} xs={12}>
                <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                  <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5, color: generalSettings.labelColor }}>
                      Amount Paid (<CurrencyRupeeIcon sx={{ fontSize: 'small', color: generalSettings.labelColor }} />)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {i !== 1 && (
          <Grid sx={{ backgroundColor: generalSettings.backgroundColor }}>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'right',
                marginTop: '0px',
                marginRight: '10px',
                paddingBottom: '30px',
                paddingTop: '10px',
                color: generalSettings.fontColor
              }}
            >
              *Late payment charges to be calculated appropriately after the last payment date
            </Typography>
            <DottedDivider />
            <Typography variant="body1" fontWeight="bold" sx={{ textAlign: 'center' }}>
              <ContentCutIcon sx={{ position: 'relative', top: '-14px' }} />
            </Typography>
          </Grid>
        )}
{i !== 0 && (
<Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, paddingTop: '20px' }}>
          <Grid container>
            <Grid item lg={8} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={9} xs={6}>
                  <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                    <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.headerFontColor }}>
                        Fee Heads{' '}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', marginLeft: '20px' , color:tableSettings.itemRowFontColor }}>
                    Late Fee{' '}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', marginLeft: '20px' ,color:tableSettings.itemRowFontColor }}>
                    Composite Fee:{' '}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', fontWeight: 'bold', marginLeft: '20px' ,color:tableSettings.itemRowFontColor }}>
                    Invoice Total:{' '}
                  </Typography>
                </Grid>

                <Grid item lg={3} xs={6}>
                  <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                    <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.headerFontColor }}>
                        Fee Due (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />){' '}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'center', marginLeft: '20px' ,color:tableSettings.itemDescriptionFontColor}}>
                    {commonTemplateContent.lateFee}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'center', marginLeft: '20px',color:tableSettings.itemDescriptionFontColor }}>
                    {commonTemplateContent.compositeFee}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'center', fontWeight: 'bold', marginLeft: '20px',color:tableSettings.itemDescriptionFontColor }}>
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
                      <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.headerFontColor }}>
                        Concessions (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />){' '}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '60px' , color:tableSettings.itemRowFontColor}}>
                    {commonTemplateContent.concession}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '60px' ,color:tableSettings.itemRowFontColor }}>
                    {commonTemplateContent.concession}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold', marginRight: '60px' ,color:tableSettings.itemRowFontColor }}>
                    {commonTemplateContent.concession}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', fontWeight: 'bold', marginLeft: '20px' ,color:tableSettings.itemRowFontColor }}>
                    Previous Balance:{' '}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left', fontWeight: 'bold', marginLeft: '20px' ,color:tableSettings.itemRowFontColor }}>
                    Net Amount Payable:{' '}
                  </Typography>
                </Grid>

                <Grid item lg={6} xs={5}>
                  <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                    <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.headerFontColor }}>
                        Amount (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />){' '}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '20px' , color:tableSettings.itemDescriptionFontColor }}>
                    {commonTemplateContent.lateFee}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '20px' ,color:tableSettings.itemDescriptionFontColor }}>
                    {commonTemplateContent.compositeFee}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold', marginRight: '20px' ,color:tableSettings.itemDescriptionFontColor}}>
                    {commonTemplateContent.invoiceTotal}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', marginRight: '20px',color:tableSettings.itemDescriptionFontColor }}>
                    {commonTemplateContent.previousBalance}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold', marginRight: '20px' ,color:tableSettings.itemDescriptionFontColor }}>
                    <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />
                    {commonTemplateContent.netAmountPayable}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}


      </Grid>
    );
  }
  0;
  return (
    <Box sx={{ ...style, margin: 'auto' }}>
      <Paper
        elevation={2}
        square={true}
        sx={{
          ...style,
          mx: 'auto',
          paddingTop: `${generalSettings.marginTop}rem`,
          paddingRight: ` ${generalSettings.marginRight}rem`,
          paddingBottom: ` ${generalSettings.marginBottom}rem`,
          paddingLeft: ` ${generalSettings.marginLeft}rem`
        }}
      >
        <Box>
          {/* loop return */}

          {templateContent}
        </Box>

        {/* ----------------------------------- Fee Calculation Start--------------*/}

       
        {/* ----------------------------------- Fee Calculation Complete--------------*/}

        {/* ----------------------------------- Below Boxes and instructions starts --------------*/}

        <Box sx={{ marginBottom: '15px', backgroundColor: tableSettings.itemRowBackgroundColor }}>
          <Grid container spacing={2}>
            <Grid item lg={8} xs={12}>
              <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
                <Grid item lg={3} xs={12}>
                  <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                    <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 ,color:tableSettings.itemRowFontColor }}>
                        Cheque/Draft No.{' '}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={3} xs={12}>
                  <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                    <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 ,color:tableSettings.itemRowFontColor }}>
                        Cheque/Draft Date
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={6} xs={12}>
                  <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                    <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 ,color:tableSettings.itemRowFontColor }}>
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
                      <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 ,color:tableSettings.itemRowFontColor }}>
                        *Late Payment Charges(
                        <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />)
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={6} xs={12}>
                  <Box style={{ border: `1px solid ${tableSettings.borderColor}`, height: '62px' }}>
                    <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h5" fontWeight="bold" sx={{ lineHeight: 1.5 ,color:tableSettings.itemRowFontColor }}>
                        Amount Paid (<CurrencyRupeeIcon sx={{ fontSize: 'small' ,color:tableSettings.itemRowFontColor}} />)
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/*  Footer */}

        <Grid sx={{ backgroundColor: headerFooterSettings.footerBackgroundColor }}>
          <Box sx={{ marginLeft: '20px', '& .MuiTypography-root': { fontWeight: 'bold !important', fontSize: '12px', color: headerFooterSettings.footerFontColor } }}>
            <List>
              <ListItemText>
                <Typography>
                  1. We expect that all parents will remit the fee dues of their wards on time. Pl clear the dues latest by 15-Jan-2024.
                  After the due date late payment charges will be applicable, as per the given schedule: Rs. 100/- from 16-Jan-2024 to
                  31-Jan2024; Rs. 500/- from 01-Feb-2024 to 15-Feb-2024; Rs.1000/- from 16-Feb-2024 to 29-Feb-2024; Rs.2500/- from
                  01-Mar2024.
                </Typography>
              </ListItemText>

              <ListItemText>
                <Typography>
                  2. Parents are requested to issue Cheque/DD in favour of School payable at Delhi/Gurugramonly and please attach the copy
                  of the fee slip with the Cheque/DD. Out station cheques payable at-par only will beaccepted.
                </Typography>
              </ListItemText>

              <ListItemText>
                <Typography>
                  3. Please write your wards Name, Admission No, Class, Section and Phone No. on the backside of the cheque/DD. If cheque is
                  dishonoured for any reason, Rs. 500/- will be levied as re-processing charges.
                </Typography>
              </ListItemText>

              <ListItemText>
                <Typography>4. Please visit our website :- www.dpsmarutikunj.org for online payment</Typography>
              </ListItemText>

              <ListItemText>
                <Typography>5. Please scan below Printed QR-Code for depositing fee via PayTm.</Typography>
              </ListItemText>

              <ListItemText>
                <Typography>
                  6. For the convenience of the parents monthly payment option is also available. Parents may pay fee dues in three equal
                  monthly instalments during the first week of every month.
                </Typography>
              </ListItemText>
            </List>
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CompactTemplate2;
