// Page owner - Kulwinder Singh
// Invoice Template
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
import { useSelector } from 'react-redux';

export const  Template5 =()=> {
  const isSmScreen = useMediaQuery('(max-width:600px)');
  // states
  const generalSettings= useSelector(state=>state.invoiceTemplate.general)
  const headerFooterSettings=useSelector(state=>state.invoiceTemplate.headerFooter)
  const tableSettings=useSelector(state=>state.invoiceTemplate.table)
  const templateLabels=useSelector(state=>state.invoiceTemplate.labels)
  const termsAndConditions=useSelector(state=>state.invoiceTemplate.termsAndConditions)
  const defaultLables=useSelector(state=>state.invoiceTemplate.defaultLables)

// the array which has enabled lables (data format)
const enabledLabels=templateLabels.filter((label)=>label.enable==true)
const labels=[],rows=[]
// default lables which can't be dragged/dropped/disabled
defaultLables.map((label)=>{
  labels.push(<Box  display='flex' width='100%' justifyContent='flex-start'>
  <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'110px', color:generalSettings.labelColor}}>{label.label}</Typography>
  <Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{label.value}</Typography>
</Box>)
})
 // jsx for  lables that can be dragged and dropped
enabledLabels.map((label)=>{
  labels.push(<Box  display='flex' width='100%' justifyContent='flex-start'>
  <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'110px', color:generalSettings.labelColor}}>{label.label}</Typography>
  <Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{label.value}</Typography>
</Box>)
})

labels.map((ele,index)=>{
  if(index%2!==0)
  rows.push(<Box display='flex' justifyContent='space-between' width='100%'>
    <Box sx={{borderRight:'1px solid black'}} flex={1}>{labels[index-1]}</Box>
    <Box flex={1}>{labels[index]}</Box>
    </Box>)

  if(labels.length-1==index&&labels.length%2!=0)
    rows.push(<Box display='flex' width='50%' >
    <Box sx={{borderRight:'1px solid black'}} flex={1} >{labels[index]}</Box>
    </Box>)
})
  const style = {
    // width: '210mm',
    // height: '297mm',
    textAlign: ''
  };
  const style2 = {
    textAlign: 'right'
  };
  
  const style3 = {
    marginRight: '0px'
  };
  
  const style4 = {
    borderRight: `1px solid ${tableSettings.borderColor}`
  };
  if (isSmScreen) {
    style.width = '100%'; // Adjust as needed for small screens
    style.height = '100%'; // Adjust as needed for small screens
    style.textAlign = 'center';
    style2.textAlign = 'center';
    style3.marginRight = '15px';
    style4.borderRight = '';
  }
  return (
    <Box>
      <Paper
        elevation={2}
        square={true}
        sx={{
          ...style,
          mx: 'auto',
          paddingTop: `${generalSettings.marginTop}rem`,
          paddingRight: ` ${generalSettings.marginRight}rem`,
          paddingBottom: ` ${generalSettings.marginBottom}rem`,
          paddingLeft: ` ${generalSettings.marginLeft}rem`, width: '100%',
          aspectRatio:'1/1.414',
          maxWidth:'300mm'}}>

        <Grid sx={{ border: `1px solid ${tableSettings.borderColor}`, paddingTop: '2.1%' }}>
        {/* HEADER SECTION ========================================================================== */}
          <Grid sx={{ backgroundColor: headerFooterSettings.headerBackgroundColor }}>
            <Grid container spacing={2} sx={{ padding: '10px' }}>
              {/* First Grid item */}
              <Grid item lg={6} xs={12} >
                <Grid container spacing={2}>
                  <Grid item lg={4} xs={12} sx={{ alignItems: 'center' }}>
                    <img src={schoollogo} alt="schoollogo" width="100" height="100"></img>
                  </Grid>

                  <Grid item lg={8} xs={12}>
                    <Typography variant="h3" fontWeight="bold" sx={{ paddingBottom: '0.4rem' }}>
                      {commonTemplateContent.schoolName}
                    </Typography>
                    <Typography variant="body2" sx={{ paddingBottom: '0.4rem' }}>
                      {commonTemplateContent.bankName}
                    </Typography>
                    <Typography variant="body2" sx={{ paddingBottom: '0.4rem' }}>
                      {commonTemplateContent.bankIfscCode}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* Second Grid item */}
              <Grid item lg={6} xs={12} sx={{ alignItems: 'right' }}>
                <Typography variant="h2" sx={{ paddingBottom: '20px', ...style2 }}>
                  INVOICE
                </Typography>
                <Typography variant="body2" sx={{ paddingBottom: '0.4rem', ...style2 }}>
                  Invoice# INV-17
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* BODY SECTION ========================================================================= */}
          <Grid sx={{ backgroundColor: generalSettings.backgroundColor }}>
            <Grid sx={{ borderTop: `1px solid ${tableSettings.borderColor}`, borderBottom: `1px solid ${tableSettings.borderColor}` }}>
              <Grid container spacing={2} sx={{ padding: '1rem 1.5rem', paddingBottom: '0' , paddingRight:'10px'}}>
              {/* First Grid item */}                
              {rows}
              </Grid>
            </Grid>

          {/* TABLE SECTION ================================================================================ */}
            <Grid
              sx={{
                borderTop: `1px solid ${tableSettings.borderColor}`,
                borderBottom: `1px solid ${tableSettings.borderColor}`,
                marginTop: '50px'
              }}
            >
              <TableContainer component={Paper} sx={{ borderColor: tableSettings.borderColor, borderRadius: '0px' }}>
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: tableSettings.headerBackgroundColor }}>
                    <TableRow>
                      <TableCell style={{ borderBottom: `1px solid ${tableSettings.borderColor}`, width: '5%', ...style4 }}
                      sx={{fontSize:`${tableSettings.headerFontSize}px`}}>#</TableCell>
                      <TableCell
                        style={{
                          width: '44.5%',
                          ...style4,
                          borderBottom: `1px solid ${tableSettings.borderColor}`,
                          textAlign: 'center',
                          fontWeight: 'bold',
                         
                        }}
                        sx={{fontSize:`${tableSettings.headerFontSize}px` , }}
                      >
                        Fees Heads
                      </TableCell>
                      <TableCell
                        style={{ borderBottom: `1px solid ${tableSettings.borderColor}`, textAlign: 'center', fontWeight: 'bold' }}
                        sx={{fontSize:`${tableSettings.headerFontSize}px`}}
                      >
                        Amount (<CurrencyRupeeIcon sx={{ fontSize:`${tableSettings.headerFontSize}px`, verticalAlign: 'middle' }} />)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ backgroundColor: tableSettings.itemRowBackgroundColor }}>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ width: '5%', ...style4, color:tableSettings.itemRowFontColor,borderBottom: `1px solid ${tableSettings.borderColor}` }}
                        sx={{fontSize:`${tableSettings.itemRowFontSize}px`}}
                      >
                        1
                      </TableCell>
                      <TableCell style={{ ...style4, color:tableSettings.itemRowFontColor,borderBottom: `1px solid ${tableSettings.borderColor}`, textAlign: 'center' }}
                        sx={{fontSize:`${tableSettings.itemRowFontSize}px`}}>
                        Tution Fees
                      </TableCell>
                      <TableCell style={{ color:tableSettings.itemRowFontColor,borderBottom: `1px solid ${tableSettings.borderColor}`, textAlign: 'center' }}
                      sx={{fontSize:`${tableSettings.itemRowFontSize}px`}}>
                        {commonTemplateContent.tutionFee}
                      </TableCell>
                    </TableRow>
                    {/* Add more rows here */}
                    <TableRow>
                      <TableCell component="th" scope="row" style={{ width: '5%', color:tableSettings.itemRowFontColor,...style4 }}
                      sx={{fontSize:`${tableSettings.itemRowFontSize}px`}}>
                        2
                        
                      </TableCell>
                      <TableCell style={{ color:tableSettings.itemRowFontColor,...style4, textAlign: 'center' }}
                      sx={{fontSize:`${tableSettings.itemRowFontSize}px`}}>Annual Function Fees</TableCell>
                      <TableCell style={{ color:tableSettings.itemRowFontColor,textAlign: 'center' }}
                    sx={{fontSize:`${tableSettings.itemRowFontSize}px`}}>1000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

{/* SECOND TABLE LIKE SECTION ============================================================================= */}

            <Grid
              sx={{
                borderTop: `1px solid ${tableSettings.borderColor}`,
                borderBottom: `1px solid ${tableSettings.borderColor}`,
                marginTop: '50px',
              }}
            >
              <Grid container sx={{ padding: '0rem', paddingBottom: '0' }}>
                {/* First Grid item */}

                <Grid item lg={6} xs={12} sx={{ ...style4, alignItems: 'center' ,backgroundColor:tableSettings.itemRowBackgroundColor,}}> 
                  <Typography variant="body2" sx={{  color:tableSettings.headerFontColor,paddingBottom: '0.4rem',paddingTop:'1rem',fontWeight: 'bold', textAlign: 'center'   ,fontSize:`${tableSettings.headerFontSize}px` }}>
                    Total In Words :{' '}
                  </Typography>

                  <Typography variant="h4" fontWeight="bold" sx={{  color:tableSettings.headerFontColor,paddingBottom: '0.4rem', textAlign: 'center', marginTop: '12px'  ,  fontSize:`${tableSettings.headerFontSize}px`}}>
                    Four Thousand Nine Hundred Only
                  </Typography>
                </Grid>

                {/* Second Grid item */}
                <Grid item lg={6} xs={12} sx={{ ...style2,backgroundColor:tableSettings.itemRowBackgroundColor }}>
                      
                  <Grid container sx={{padding:'10px'}}>
                    <Grid item lg={9} xs={8}>
                      <Typography variant="body2" sx={{color:tableSettings.itemRowFontColor ,paddingBottom: '0.4rem' ,fontSize:`${tableSettings.itemRowFontSize}px`}}>
                        Invoice Total:
                      </Typography>
                      <Typography variant="body2" sx={{color:tableSettings.itemRowFontColor ,paddingBottom: '0.4rem',fontSize:`${tableSettings.itemRowFontSize}px` }}>
                        Previous Balance:
                      </Typography>
                      <Typography variant="body2" sx={{color:tableSettings.itemRowFontColor ,paddingBottom: '1rem',fontSize:`${tableSettings.itemRowFontSize}px` }}>
                        Net Payable Amount:
                      </Typography>
                    </Grid>

                    <Grid item lg={3} xs={4} sx={{ ...style2 }}>
                      <Typography variant="body2" fontWeight="bold" sx={{ color:tableSettings.itemRowFontColor ,marginBottom: '0.4rem',fontSize:`${tableSettings.itemRowFontSize}px` }}>
                        <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />
                        {commonTemplateContent.invoiceTotal}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" sx={{ color:tableSettings.itemRowFontColor ,marginBottom: '0.4rem' ,fontSize:`${tableSettings.itemRowFontSize}px`}}>
                        {commonTemplateContent.previousBalance}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" sx={{ color:tableSettings.itemRowFontColor ,marginBottom: '0.4rem' ,fontSize:`${tableSettings.itemRowFontSize}px`}}>
                        <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />
                        {commonTemplateContent.netAmountPayable}
                      </Typography>
                    </Grid>
                  </Grid>
                      
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* FOOTER SECTION ======================================================================= */}
          <Grid
            sx={{
              borderTop: `1px solid ${tableSettings.borderColor}`,
              paddingTop: '50px',
              ...style3,
              backgroundColor: headerFooterSettings.footerBackgroundColor
            }}
          >
            <Typography variant="body2" sx={{ marginBottom: '0.4rem', marginLeft: '20px', marginTop: '20px', fontWeight: 'bold' ,fontSize:`${headerFooterSettings.footerFontSize}px`}}>
              Terms & Conditions{' '}
            </Typography>

            <Typography variant="body2" sx={{ marginBottom: '-0.7rem', marginLeft: '20px',fontSize:`${headerFooterSettings.footerFontSize}px` }}>
            <div dangerouslySetInnerHTML={{ __html: termsAndConditions }}/>
            </Typography>
            
          </Grid>

          <Box sx={{ backgroundColor: headerFooterSettings.footerBackgroundColor }}>
            <Typography
              variant="body2"
              sx={{ paddingBottom: '10px', paddingRight: '20px', fontWeight: 'bold', textAlign: 'right', paddingTop: '20px' ,fontSize:`${headerFooterSettings.footerFontSize}px`}}
            >
              Authorized Signature
            </Typography>
          </Box>
        </Grid>
      </Paper>
     </Box>
  );
}

