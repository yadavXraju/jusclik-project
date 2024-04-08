import React from 'react'
import { Box, Paper, Typography, Table, TableContainer, TableRow, TableHead, TableCell, TableBody ,Grid} from '@mui/material'
import { commonTemplateContent } from '../../common/common-states';
import Divider from '@mui/material/Divider';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { useSelector } from 'react-redux';

const CompactTemplate5= () => {

  // states
  const generalSettings= useSelector(state=>state.invoiceTemplate.general)
  const headerFooterSettings=useSelector(state=>state.invoiceTemplate.headerFooter)
  const tableSettings=useSelector(state=>state.invoiceTemplate.table)
  const templateLabels=useSelector(state=>state.invoiceTemplate.labels)
  const termsAndConditions=useSelector(state=>state.invoiceTemplate.termsAndConditions)
  let column1=[],column2=[]
  for(let i=0;i<14;i++)
  {
    if(i<7)
    column1.push( <Box display={'flex'} sx={{display:!templateLabels[i].enable?'none':'flex'}}>
    <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'110px', color:generalSettings.labelColor}}>{templateLabels[i].label}</Typography>
    <Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{templateLabels[i].value}</Typography>
  </Box>)
else
column2.push( <Box display={'flex'} sx={{display:!templateLabels[i].enable?'none':'flex'}}>
<Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'110px', color:generalSettings.labelColor}}>{templateLabels[i].label}</Typography>
<Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{templateLabels[i].value}</Typography>
</Box>)
  }
  return (

    <Box sx={{ height: '100%',
    width:'100%',
    margin: 'auto',
    '@media print and (min-width: 210mm) and (min-height: 297mm)': {
      // A4 potrait dimensions
      height: '297mm',
      width: '210mm',
    },}}>
      <Paper elevation={1} sx={{paddingTop:`${generalSettings.marginTop}rem`,
    paddingRight:`${generalSettings.marginRight}rem`,
    paddingBottom:`${generalSettings.marginBottom}rem`,
    paddingLeft:`${generalSettings.marginLeft}rem` , maxWidth:'max-content',borderRadius:'0'}}>

        <Box ml={6} mr={7} pt={5} display={'flex'} justifyContent={'end'} bgcolor={headerFooterSettings.headerBackgroundColor}>
          <Box>
            <Typography p={1} variant="h2" >{commonTemplateContent.schoolName}</Typography>
            <Typography p={1} variant='h4' sx={{ fontWeight: '500', textAlign: 'end' }}>Sohna Dhani Road  Ward No - 01 </Typography>
            <Typography p={1} variant='h4' sx={{ fontWeight: '500', textAlign: 'end' }}>Sohna Gurugram haryana Sohna - 122103</Typography>
            <Typography p={1} variant='h4' sx={{ fontWeight: '500', textAlign: 'end' }}>{commonTemplateContent.schoolTel}</Typography>
          </Box>
        </Box>
        <Box pt={5} ml={6} mr={7} pr={11}>
          <Divider textAlign="right"><Typography variant='h1'>INVOICE</Typography></Divider>
        </Box>
        <Box ml={6} mr={4} pt={6} bgcolor={generalSettings.backgroundColor} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box pl={4}>
            {/* <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '116px' , color:generalSettings.labelColor}}>Adm No:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' ,color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{commonTemplateContent.admissionNo}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '117px', color:generalSettings.labelColor }}>Class:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' ,color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{commonTemplateContent.className}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '110px', color:generalSettings.labelColor }}>Name:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{commonTemplateContent.name}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '110px', color:generalSettings.labelColor }}>Mobile:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{commonTemplateContent.mobile}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '110px' , color:generalSettings.labelColor}}>Father:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{commonTemplateContent.fatherName}</Typography>
            </Box> */}
            {column1}
          </Box>


          <Box pr={12.5} sx={{ width: '41%' }}>
            {/* <Box display={'flex'} >
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%', color:generalSettings.labelColor }} >Invoice No:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: 'bold', textAlign: 'end', width: '100%' ,color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`
            }}>{commonTemplateContent.invoiceNo}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%', color:generalSettings.labelColor }}>Invoice Date:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' ,color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`
            }}>{commonTemplateContent.invoiceDate}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%', color:generalSettings.labelColor }}>Academic Year:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' ,color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`
            }}>{commonTemplateContent.academicYear}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' , color:generalSettings.labelColor}}>Fee Period:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: 'bold', textAlign: 'end', width: '100%',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`
             }}>{commonTemplateContent.feePeriod}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' , color:generalSettings.labelColor}}>Due Date:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' ,color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`
            }}>{commonTemplateContent.dueDate}</Typography>
            </Box> */}
            {column2}
          </Box>
        </Box>

        <Box ml={4} mr={4} p={4} >
          <Box border={'1px solid'} borderColor={'#DEDEDE'}>
            <TableContainer >
              <Table sx={{border:`0px solid ${tableSettings.borderColor}`}} >
                <TableHead sx={{ bgcolor:tableSettings.headerBackgroundColor, fontFamily: 'sans-serif' }}>
                  <TableRow  sx={{borderBottom:`1px solid ${tableSettings.borderColor}`}}>
                    <TableCell sx={{ fontWeight: 'bold',color:tableSettings.headerFontColor,fontSize:`${tableSettings.headerFontSize}px` }}>#</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color:tableSettings.headerFontColor,fontSize:`${tableSettings.headerFontSize}px`}}>FEES HEADS</TableCell>

                    <TableCell sx={{ fontWeight: 'bold',color:tableSettings.headerFontColor,fontSize:`${tableSettings.headerFontSize}px`}} align="right">AMOUNT</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{bgcolor:tableSettings.itemRowBackgroundColor,borderBottom:`1px solid ${tableSettings.borderColor}`}}>
                    <TableCell width="100px" scope="row"  sx={{ fontWeight: 'bold',color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px` }}>1</TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold',color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px` }}>Tution Fees</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>{commonTemplateContent.tutionFee}</TableCell>
                  </TableRow>
                  <TableRow sx={{bgcolor:tableSettings.itemRowBackgroundColor, borderBottom:`1px solid ${tableSettings.borderColor}`}}>
                    <TableCell scope="row" sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>2</TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>Annual Function Fees</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}> 1000</TableCell>
                  </TableRow>
                  <TableRow sx={{bgcolor:tableSettings.itemRowBackgroundColor,borderBottom:`1px solid ${tableSettings.borderColor}`}}>
                    <TableCell scope="row" sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor,fontSize:`${tableSettings.itemRowFontSize}px`}}>3</TableCell>
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

              

           

<Box  pr={8}>
<Box display={"flex"} justifyContent={'flex-end'} sx={{flexDirection:'column', alignItems:"end"}}> 
    <Box display={'flex'} sx={{borderBottom:'1px solid lightgrey', width:'100%', justifyContent:'space-between' }}>
      <Typography p={2} variant="h4" sx={{ fontWeight: 'bold' }} >Invoice Total:</Typography>
      <Typography p={2} variant="body1" sx={{ fontWeight: 'bold', textAlign:'right'}}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small', }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.invoiceTotal}</Typography>
    </Box>
 
    <Box display={'flex'}  sx={{borderBottom:'1px solid lightgrey', width:'100%', justifyContent:'space-between'}} >
      <Typography p={2} variant="h4" sx={{ fontWeight: 'bold' }} >Previous Balance:</Typography>
      <Typography p={2} variant="body1" sx={{ fontWeight: 'bold', textAlign:'right'}}>{commonTemplateContent.previousBalance}</Typography>
    </Box>
    <Box display={'flex'} sx={{borderBottom:'1px solid lightgrey', width:'100%', justifyContent:'space-between'}} >
      <Typography p={2} variant="h4" sx={{ fontWeight: 'bold' }} >Net Payable Amount:</Typography>
      <Typography p={2} variant="body1" sx={{ fontWeight: 'bold', textAlign:'right'}}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small', }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.netAmountPayable}</Typography>
    </Box>
    <Box display={'flex'}  >
      <Typography p={2} variant="h5" sx={{ fontWeight: '400'}} >Total In Words:</Typography>
      <Typography p={2} variant="h4" sx={{ fontWeight: 'bold', textAlign:'right'}}>Four Thousand Nine Hundred Only</Typography>
    </Box>
</Box>
</Box>
</Grid>
<Box pt={4} p={6} bgcolor={headerFooterSettings.footerBackgroundColor}>
            <Box>
              <Typography p={2} variant="h4" sx={{ fontWeight: '600',color:headerFooterSettings.footerFontColor,fontSize:`${headerFooterSettings.footerFontSize}px`}} >Terms & Conditions</Typography>
              <Typography p={2} variant="h5" sx={{ fontWeight: '400',color:headerFooterSettings.footerFontColor,fontSize:`${headerFooterSettings.footerFontSize}px`}} ><div dangerouslySetInnerHTML={{ __html: termsAndConditions }}/></Typography>
            </Box>
            </Box>

    
      </Paper>
    
    </Box>
  )
}


export default CompactTemplate5;
// Your School&apos;s Terms and Conditions will be displayed here. You can add it in the Invoice Preferences page under Settings