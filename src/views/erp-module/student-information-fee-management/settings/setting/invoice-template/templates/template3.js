// simple
import React from 'react'
import { Box, Paper, Typography, Table, TableContainer, TableRow, TableHead, TableCell, TableBody ,Grid} from '@mui/material'
import { commonTemplateContent } from '../common/sample-dropdown-values';
import Divider from '@mui/material/Divider';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { useSelector } from 'react-redux';

export const Template3= () => {

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
    <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'50%', color:generalSettings.labelColor}}>{label.label}</Typography>
    <Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`,width:'50%'}}>{label.value}</Typography>
  </Box>)
  })
   // jsx for  lables that can be dragged and dropped
  enabledLabels.map((label,index)=>{
    labels.push(<Box  display='flex' width='100%' justifyContent={index%2!=0?'flex-start':'flex-end'}>
    <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'50%', color:generalSettings.labelColor}}>{label.label}</Typography>
    <Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`,width:'50%'}}>{label.value}</Typography>
  </Box>)
  })

  labels.map((ele,index)=>{
    if(index%2!==0)
    rows.push(<Box display='flex' justifyContent='space-between' width='100%' >
      <Box flex={1}>{labels[index-1]}</Box>
      <Box flex={1}>{labels[index]}</Box>
      </Box>)

    if(labels.length-1==index&&labels.length%2!=0)
      rows.push(<Box display='flex' width='100%'>
      <Box flex={1} >{labels[index]}</Box>
      <Box flex={1}></Box>
      </Box>)
  })

  
  return (

    <Box>
      <Paper elevation={1} sx={{paddingTop:`${generalSettings.marginTop}rem`,
    paddingRight:`${generalSettings.marginRight}rem`,
    paddingBottom:`${generalSettings.marginBottom}rem`,
    paddingLeft:`${generalSettings.marginLeft}rem` ,borderRadius:'0',  width: '100%',
    aspectRatio:'1/1.414'}}>

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
         <Box mx={4} p={4} bgcolor={generalSettings.backgroundColor} >
          {rows}
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



