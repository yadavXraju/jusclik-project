import React from 'react';
import {Grid , Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Paper } from '@mui/material';
import { useSelector } from 'react-redux';

import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import schoollogo from 'assets/images/school-logos/Xaviers.png';
import { commonTemplateContent } from '../common/sample-dropdown-values';

export const Template4 = () => {
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
  defaultLables.map((label,index)=>{
    labels.push(<Box  display='flex' width='100%' justifyContent={index%2!=0?'flex-end':'flex-start'}>
    <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'110px', color:generalSettings.labelColor}}>{label.label}</Typography>
    <Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{label.value}</Typography>
  </Box>)
  })
   // jsx for  lables that can be dragged and dropped
  enabledLabels.map((label,index)=>{
    labels.push(<Box  display='flex' width='100%' justifyContent={index%2!=0?'flex-start':'flex-end'}>
    <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'110px', color:generalSettings.labelColor}}>{label.label}</Typography>
    <Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{label.value}</Typography>
  </Box>)
  })

  labels.map((ele,index)=>{
    if(index%2!==0)
    rows.push(<Box display='flex' justifyContent='space-between' width='100%'>
      {labels[index-1]}
      {labels[index]}
      </Box>)

    if(labels.length-1==index&&labels.length%2!=0)
      rows.push(<Box display='block' width='50%' >
      {labels[index]}
      </Box>)
  })
    
  
  return (

    <Box sx={{  height: '100%',
    width:'100%',
    margin: 'auto',
    '@media print and (min-width: 210mm) and (min-height: 297mm)': {
      // A4 potrait dimensions
      height: '297mm',
      width: '210mm',
    },
    }}>
      <Paper elevation={1}  sx={{paddingTop:`${generalSettings.marginTop}rem`,
    paddingRight:`${generalSettings.marginRight}rem`,
    paddingBottom:`${generalSettings.marginBottom}rem`,
    paddingLeft:`${generalSettings.marginLeft}rem`, maxWidth:'max-content',borderRadius:'0'}}>
        <Box p={2} bgcolor={'white'} >
          <Box p={4} ml={6} mr={4} sx={{ display: "flex", justifyContent: "space-between" }} bgcolor={headerFooterSettings.headerBackgroundColor}>
            <Box>
              <Box pl={1} >
                <img src={schoollogo} alt='schoollogo' width="100" height="100">

                </img>
              </Box>
              <Box p={2} >
                <Typography p={1} variant="h1" >{commonTemplateContent.schoolName}</Typography>
                <Typography pl={1} variant='h3'sx={{fontWeight:'500'}}>Sohna Dhani Road  Ward No - 01 </Typography>
                <Typography p={1}variant='h3'sx={{fontWeight:'500'}}>Sohna Gurugram haryana Sohna - 122103</Typography>
                <Typography pl={1}variant='h3' sx={{fontWeight:'500'}}>{commonTemplateContent.schoolTel}</Typography>
              </Box>
            </Box>
            <Box >
              <Typography variant="h1" sx={{ fontFamily: "serif" ,fontSize:'54px' ,fontWeight:'500'}}>INVOICE </Typography>
              <Typography p={1} sx={{display:'flex',justifyContent:'end'}} variant="h4" >Invoice# INV-17</Typography>
              <Typography p={1} sx={{display:'flex',justifyContent:'end'}} variant="h4" >Net Payable Amount </Typography>
              <Typography p={1} sx={{display:'flex',justifyContent:'end'}} variant="h3" ><CurrencyRupeeOutlinedIcon sx={{ fontSize: '24px' }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.netAmountPayable} </Typography>
            </Box>
          
          </Box>
          {/* labels */}
          <Box mx={4} p={4} bgcolor={generalSettings.backgroundColor} >
          {rows}
          </Box>

          <Box ml={4} mr={4} p={4}>


            <Box >
              <TableContainer >
                <Table >
                  <TableHead sx={{bgcolor:tableSettings.headerBackgroundColor, fontFamily:'sans-serif' }}>
                    <TableRow > 
                      <TableCell  sx={{ fontWeight: 'bold', color:tableSettings.headerFontColor,fontSize:`${tableSettings.headerFontSize}px` }}>#</TableCell>
                      <TableCell  sx={{ fontWeight: 'bold', color:tableSettings.headerFontColor,fontSize:`${tableSettings.headerFontSize}px`}}>FEES HEADS</TableCell>

                      <TableCell  sx={{ fontWeight: 'bold' , color:tableSettings.headerFontColor ,fontSize:`${tableSettings.headerFontSize}px`}}align="right">AMOUNT</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{bgcolor:tableSettings.itemRowBackgroundColor , borderBottom:`1px solid ${tableSettings.borderColor}`}}> 
                      <TableCell width="100px" scope="row" sx={{fontWeight:'bold',color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>1</TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="h5" sx={{fontWeight:'bold',color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>Tution Fees</Typography> 
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{fontWeight:'bold',color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>{commonTemplateContent.tutionFee}</TableCell>
                    </TableRow>
                    <TableRow sx={{bgcolor:tableSettings.itemRowBackgroundColor, borderBottom:`1px solid ${tableSettings.borderColor}`}}>
                      <TableCell scope="row" sx={{fontWeight:'bold',color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>2</TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="h5" sx={{fontWeight:'bold',color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>Annual Function Fees</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{fontWeight:'bold',color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}> 1000</TableCell>
                    </TableRow>
                    <TableRow sx={{bgcolor:tableSettings.itemRowBackgroundColor, borderBottom:`1px solid ${tableSettings.borderColor}`}}>
                      <TableCell scope="row" sx={{fontWeight:'bold',color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>3</TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="h5" color={tableSettings.itemRowFontColor } fontSize={tableSettings.itemRowFontSize}></Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{fontWeight:'bold',color:tableSettings.itemRowFontColor}}> </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            </Box>

            <Grid sx={{display:'flex' ,justifyContent:'end' }}>

            <Box  pr={8}>
            <Box display={"flex"} justifyContent={'flex-end'} sx={{flexDirection:'column', alignItems:"end"}}> 
                <Box display={'flex'} gap={'69px'}>
                  <Typography p={2} variant="h4" sx={{ fontWeight: 'bold' }} >Invoice Total:</Typography>
                  <Typography p={2} variant="body1" sx={{ fontWeight: 'bold', textAlign:'right'}}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small', }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.invoiceTotal}</Typography>
                </Box>
                <Box display={'flex'} gap={'112px'} >
                  <Typography p={2} variant="h4" sx={{ fontWeight: 'bold' }} >Previous Balance:</Typography>
                  <Typography p={2} variant="body1" sx={{ fontWeight: 'bold', textAlign:'right'}}>{commonTemplateContent.previousBalance}</Typography>
                </Box>
                <Box display={'flex'} gap={'72px'} sx={{bgcolor:tableSettings.headerBackgroundColor}} >
                  <Typography p={2} variant="h4" sx={{ fontWeight: 'bold' ,color:tableSettings.headerFontColor}} >Net Payable Amount:</Typography>
                  <Typography p={2} variant="body1" sx={{ fontWeight: 'bold', textAlign:'right',color:tableSettings.headerFontColor}}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small', }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.netAmountPayable}</Typography>
                </Box>
                <Box display={'flex'} >
                  <Typography p={2} variant="h5" sx={{ fontWeight: '400'}} >Total In Words:</Typography>
                  <Typography p={2} variant="h4" sx={{ fontWeight: 'bold', textAlign:'right'}}>Four Thousand Nine Hundred Only</Typography>
                </Box>
            </Box>
            </Box>


            </Grid>
            <Box pt={4} p={6} bgcolor={headerFooterSettings.footerBackgroundColor}>
            <Box>
              <Typography p={2} variant="h4" sx={{ fontWeight: '600',color:generalSettings.labelColor,fontSize:`${headerFooterSettings.footerFontSize}px`}} >Terms & Conditions</Typography>
              {/* <Typography p={2} variant="h5" sx={{ fontWeight: '400',color:headerFooterSettings.footerFontColor,fontSize:`${headerFooterSettings.footerFontSize}px`}} >Your School&apos;s Terms and Conditions will be displayed here. You can add it in the Invoice Preferences page under Settings.</Typography> */}
              <Typography p={2} variant="h5" sx={{ fontWeight: '400',color: headerFooterSettings.footerFontColor,fontSize:`${headerFooterSettings.footerFontSize}px`}} ><div dangerouslySetInnerHTML={{ __html: termsAndConditions }}/></Typography>
             
            </Box>
            </Box>
        </Box>
       

      </Paper>
    </Box>
     
  );
};


