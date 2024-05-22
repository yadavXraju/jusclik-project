// Page owner - Kulwinder Singh
// Invoice Template

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import {  styled } from '@mui/system';
import { List, ListItemText } from '@mui/material';
import { commonTemplateContent } from '../common/sample-dropdown-values';
import useMediaQuery from '@mui/material/useMediaQuery';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';
import { useSelector } from 'react-redux';

const DottedDivider = styled('div')({
  width: '100%',
  borderBottom: '2px dotted black', // Apply dotted border style
  marginTop: '20px' // Adjust margin for spacing
});

export const Template2 = () => {
  const isSmScreen = useMediaQuery('(max-width:600px)');
  const isLargeScreen = useMediaQuery('(max-width:1500px)');
  const responsiveText = isLargeScreen ? '12px' : '12px';
  
  // states
  const generalSettings= useSelector(state=>state.invoiceTemplate.general)
  const headerFooterSettings=useSelector(state=>state.invoiceTemplate.headerFooter)
  const tableSettings=useSelector(state=>state.invoiceTemplate.table)
  const templateLabels=useSelector(state=>state.invoiceTemplate.labels)
  const termsAndConditions=useSelector(state=>state.invoiceTemplate.termsAndConditions)

  let column1=[],column2=[] , column3=[]


  for(let i=0;i<templateLabels.length;i++)
  {
    if(i<4)
    column1.push(   <Grid container sx={{display:templateLabels[i].enable?'flex':'none'}}>
      <Grid item lg={6} xs={6}>
        <Typography variant="h6" style={{ marginLeft: '10px', marginTop: '10px', color: generalSettings.labelColor }}>
        {templateLabels[i].label}
        </Typography>
       
      </Grid>
      <Grid item lg={6} xs={6}>
        <Typography variant="h6" style={{ marginTop: '5px', fontWeight: 'bold', color: generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>
        {templateLabels[i].value}
        </Typography>
        
      </Grid>
    </Grid>

    )
else if (i<9)
column2.push( <Grid container sx={{display:templateLabels[i].enable?'flex':'none'}}>
  <Grid item lg={5} xs={6}>
    <Typography variant="h6" style={{ marginTop: '5px', marginLeft: '20px', color: generalSettings.labelColor }}>
    {templateLabels[i].label}
    </Typography>
    
  </Grid>
  <Grid item lg={7} xs={6}>
    <Typography variant="h6" style={{ marginTop: '5px', fontWeight: 'bold', color: generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>
    {templateLabels[i].value}
    </Typography>
   
  </Grid>
</Grid>
)

else
column3.push (
<Grid container sx={{display:templateLabels[i].enable?'flex':'none'}}>
                <Grid item lg={7} xs={7}>
                  
                  <Typography variant="h6" style={{ marginLeft: '20px', marginTop: '5px', color: generalSettings.labelColor }}>
                  {templateLabels[i].label}
                  </Typography>
                </Grid>
                <Grid item lg={5} xs={5} style={{ textAlign: 'right' }}>
                  <Typography
                    variant="h6"
                    style={{ marginTop: '5px', fontWeight: 'bold', marginRight: '30px', color: generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}
                  >
                    {templateLabels[i].value}
                  </Typography>
                  
                </Grid>
              </Grid>

)

  }
  

  const style = {
    width:'240mm',
    height:'100%'
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
          sx={{ backgroundColor: headerFooterSettings.headerBackgroundColor, display: 'flex', padding: '0px 0px' }}
        >
          {/*  Header */}
          <Grid item lg={2} xs={12} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '30px' }}>
            <img src={schoollogo} alt="Logo" style={{ width: '80px', height: '75px', alignItems: 'center', marginTop: '0px' }} />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Typography variant="h3" fontWeight="bold" style={{ textAlign: 'center', marginTop: '0px' }}>
              {commonTemplateContent.schoolName}
            </Typography>
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              {commonTemplateContent.SchoolAddress}
            </Typography>
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              {commonTemplateContent.mobile}
            </Typography>
          </Grid>

          <Grid item lg={2} xs={12} sx={{ marginTop: '30px' }}>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight="bold" style={{ marginTop: '15px' }}>
                {commonTemplateContent.copyName[i]}
              </Typography>
              <Typography variant="h6" fontWeight="bold" style={{ marginTop: '10px' }}>
                Fee Invoice
              </Typography>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          spacing={2}
          sx={{
            backgroundColor: generalSettings.backgroundColor,
            display: 'flex',
            backgroundImage: `url(${generalSettings.backgroundImage})`
          }}
          className="findme"
        >
          <Grid item lg={7} xs={12} >
            <Box style={{ border: `1px solid ${tableSettings.borderColor}`, marginRight: '10px'}} sx={{minHeight:'14rem'}}>
              <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 2, color: generalSettings.labelColor }}>
                  Student Details
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item lg={7} xs={12}>
                {column1}
                </Grid>
                <Grid item lg={5} xs={12}>
                  {column2}
                </Grid>
              </Grid>
            </Box>

            <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
              <Grid item lg={3} xs={12}>
                <Box
                  style={{
                    border: `1px solid ${tableSettings.borderColor}`,
                    height: '42px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                  <Typography 
  sx={{
    lineHeight: 1.5,
    fontWeight:'bold',
    color: generalSettings.labelColor,
    textAlign: 'center',
    fontSize: responsiveText,
    '@media (max-width: 1500px)': {
      fontSize: '12px', // Define the font size for smaller screens
    },
  }}
>
                      Cheque/Draft No.{' '}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={4} xs={12}>
                <Box
                  style={{
                    border: `1px solid ${tableSettings.borderColor}`,
                    height: '42px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: generalSettings.labelColor }}>
                      Cheque/Draft Date
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={5} xs={12}>
                <Box
                  style={{
                    border: `1px solid ${tableSettings.borderColor}`,
                    height: '42px',
                    marginRight: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                  }}
                >
                  <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: generalSettings.labelColor }}>
                      Bank and Branch Details
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={5} xs={12}>
            <Box style={{ border: `1px solid ${tableSettings.borderColor}` }} sx={{minHeight:'14rem'}}>
              <Box style={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 2, color: generalSettings.labelColor }}>
                  Invoice Details
                </Typography>
              </Box>
              {column3}
            </Box>

            <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
              <Grid item lg={7} xs={12}>
                <Box
                  style={{
                    border: `1px solid ${tableSettings.borderColor}`,
                    height: '42px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                  }}
                >
                  <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: generalSettings.labelColor }}>
                      *Late Payment Charges(
                      <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={5} xs={12}>
                <Box
                  style={{
                    border: `1px solid ${tableSettings.borderColor}`,
                    height: '42px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ backgroundColor: generalSettings.backgroundColor, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: generalSettings.labelColor }}>
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
                paddingBottom: '0px',
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
          <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, paddingTop: '5px' }}>
            <Grid container>
              <Grid item lg={8} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={9} xs={6}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                      <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 2, color: tableSettings.headerFontColor ,fontSize:`${tableSettings.headerFontSize}px`}}>
                          Fee Heads{' '}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ marginTop: '5px', textAlign: 'left', marginLeft: '20px', color: tableSettings.itemRowFontColor }}
                    >
                      Late Fee{' '}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: '5px', textAlign: 'left', marginLeft: '20px', color: tableSettings.itemRowFontColor }}
                    >
                      Composite Fee:{' '}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: '5px',
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        color: tableSettings.itemRowFontColor
                      }}
                    >
                      Invoice Total:{' '}
                    </Typography>
                  </Grid>

                  <Grid item lg={3} xs={6} sx={{paddingRight:'5px'}}>
                    <Box style={{  border: `1px solid ${tableSettings.borderColor}` }}>
                      <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.headerFontColor,fontSize:`${tableSettings.headerFontSize}px` }}>
                          Fee Due (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />){' '}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: '5px', textAlign: 'center', marginLeft: '20px',color:tableSettings.itemRowFontColor }}
                    >
                      {commonTemplateContent.lateFee}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: '5px', textAlign: 'center', marginLeft: '20px', color:tableSettings.itemRowFontColor }}
                    >
                      {commonTemplateContent.compositeFee}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: '5px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        color:tableSettings.itemRowFontColor
                      }}
                    >
                      {commonTemplateContent.invoiceTotal}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '5px', textAlign: '', fontWeight: 'bold', marginLeft: '20px' }}>
                      {' '}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '5px', textAlign: '', fontWeight: 'bold', marginLeft: '20px' }}>
                      {' '}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={8} xs={7}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                      <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.headerFontColor,fontSize:`${tableSettings.headerFontSize}px` }}>
                          Concessions (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />){' '}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: '5px', textAlign: 'right', marginRight: '60px', color: tableSettings.itemRowFontColor }}
                    >
                      {commonTemplateContent.concession}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: '5px', textAlign: 'right', marginRight: '60px', color: tableSettings.itemRowFontColor }}
                    >
                      {commonTemplateContent.concession}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: '5px',
                        textAlign: 'right',
                        fontWeight: 'bold',
                        marginRight: '60px',
                        color: tableSettings.itemRowFontColor
                      }}
                    >
                      {commonTemplateContent.concession}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: '5px',
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        color: tableSettings.itemRowFontColor
                      }}
                    >
                      Previous Balance:{' '}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: '5px',
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        color: tableSettings.itemRowFontColor
                      }}
                    >
                      Net Amount Payable:{' '}
                    </Typography>
                  </Grid>

                  <Grid item lg={4} xs={5}>
                    <Box style={{ border: `1px solid ${tableSettings.borderColor}` }}>
                      <Box sx={{ backgroundColor: tableSettings.headerBackgroundColor, textAlign: 'center' }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.headerFontColor ,fontSize:`${tableSettings.headerFontSize}px`}}>
                          Amount (<CurrencyRupeeIcon sx={{ fontSize: 'small' }} />){' '}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ marginTop: '5px', textAlign: 'right', marginRight: '20px',color:tableSettings.itemRowFontColor }}
                    >
                      {commonTemplateContent.lateFee}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: '5px', textAlign: 'right', marginRight: '20px', color:tableSettings.itemRowFontColor }}
                    >
                      {commonTemplateContent.compositeFee}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: '5px',
                        textAlign: 'right',
                        fontWeight: 'bold',
                        marginRight: '20px',
                      color:tableSettings.itemRowFontColor
                      }}
                    >
                      {commonTemplateContent.invoiceTotal}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: '5px', textAlign: 'right', marginRight: '20px', color:tableSettings.itemRowFontColor }}
                    >
                      {commonTemplateContent.previousBalance}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: '5px',
                        textAlign: 'right',
                        fontWeight: 'bold',
                        marginRight: '20px',
                        color:tableSettings.itemRowFontColor
                      }}
                    >
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

        <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor }}>
          <Grid container spacing={2}>
            <Grid item lg={8} xs={12}>
              <Grid container spacing={2} sx={{ marginTop: '-7px' }}>
                <Grid item lg={3} xs={12}>
                  <Box
                    style={{
                      border: `1px solid ${tableSettings.borderColor}`,
                      height: '42px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.itemRowFontColor }}>
                        Cheque/Draft No.{' '}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={3} xs={12}>
                  <Box
                    style={{
                      border: `1px solid ${tableSettings.borderColor}`,
                      height: '42px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.itemRowFontColor }}>
                        Cheque/Draft Date
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={6} xs={12}>
                  <Box
                    style={{
                      border: `1px solid ${tableSettings.borderColor}`,
                      height: '42px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                      <Typography fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.itemRowFontColor }}>
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
                  <Box
                    style={{
                      border: `1px solid ${tableSettings.borderColor}`,
                      height: '42px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.itemRowFontColor }}>
                        *Late Payment Charges(
                        <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />)
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={6} xs={12}>
                  <Box
                    style={{
                      border: `1px solid ${tableSettings.borderColor}`,
                      height: '42px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ backgroundColor: tableSettings.itemRowBackgroundColor, textAlign: 'center' }}>
                      <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.5, color: tableSettings.itemRowFontColor }}>
                        Amount Paid (<CurrencyRupeeIcon sx={{ fontSize: 'small', color: tableSettings.itemRowFontColor }} />)
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
          <Box
            sx={{
              marginLeft: '20px',
              '& .MuiTypography-root': {  fontSize:`${headerFooterSettings.footerFontSize}px`, color: headerFooterSettings.footerFontColor }
            }}
          >
            <List>
              <ListItemText>
              <Typography variant="body2" sx={{ marginBottom: '0.4rem', marginLeft: '20px',fontSize:`${headerFooterSettings.footerFontSize}px` }}>
            <div dangerouslySetInnerHTML={{ __html: termsAndConditions }}/>
            </Typography>
              </ListItemText>

             
            </List>
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
};
