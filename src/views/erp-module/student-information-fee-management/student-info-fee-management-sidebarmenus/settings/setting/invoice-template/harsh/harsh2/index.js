import React from 'react'
import { Box, Paper, Typography, Table, TableContainer, TableRow, TableHead, TableCell, TableBody ,Grid} from '@mui/material'
import { commonTemplateContent } from '../../common/common-states';
import Divider from '@mui/material/Divider';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const CompactTemplate5= () => {
  return (

    <Box sx={{ eight: '100%',
    width:'100%',
    margin: 'auto',
    '@media print and (min-width: 210mm) and (min-height: 297mm)': {
      // A4 potrait dimensions
      height: '297mm',
      width: '210mm',
    },}}>
      <Paper elevation={4}>

        <Box ml={6} mr={7} pt={6} display={'flex'} justifyContent={'end'}>
          <Box>
            <Typography p={1} variant="h2" >{commonTemplateContent.schoolName}</Typography>
            <Typography p={1} variant='h4' sx={{ fontWeight: '500', textAlign: 'end' }}>Sohna Dhani Road  Ward No - 01 </Typography>
            <Typography p={1} variant='h4' sx={{ fontWeight: '500', textAlign: 'end' }}>Sohna Gurugram haryana Sohna - 122103</Typography>
            <Typography p={1} variant='h4' sx={{ fontWeight: '500', textAlign: 'end' }}>{commonTemplateContent.schoolTel}</Typography>
          </Box>
        </Box>
        <Box pt={5} ml={6} mr={7}>
          <Divider textAlign="right"><Typography variant='h1'>INVOICE</Typography></Divider>
        </Box>
        <Box ml={6} mr={4} pt={6} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box pl={4}>
            <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '116px' }}>Adm No:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.admissionNo}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '117px' }}>Class:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.className}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '110px' }}>Name:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.name}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '110px' }}>Mobile:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.mobile}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400', width: '110px' }}>Father:</Typography>
              <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.fatherName}</Typography>
            </Box>
          </Box>


          <Box pr={12.5} sx={{ width: '25%' }}>
            <Box display={'flex'} >
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' }} >Invoice No:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: 'bold', textAlign: 'end', width: '100%' }}>{commonTemplateContent.invoiceNo}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' }}>Invoice Date:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' }}>{commonTemplateContent.invoiceDate}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' }}>Academic Year:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' }}>{commonTemplateContent.academicYear}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' }}>Fee Period:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: 'bold', textAlign: 'end', width: '100%' }}>{commonTemplateContent.feePeriod}</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography p={1} variant="h5" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' }}>Due Date:</Typography>
              <Typography p={1} variant="body1" sx={{ fontWeight: '400', textAlign: 'end', width: '100%' }}>{commonTemplateContent.dueDate}</Typography>
            </Box>
          </Box>
        </Box>

        <Box ml={4} mr={4} p={4} >
          <Box border={'1px solid'} borderColor={'#DEDEDE'}>
            <TableContainer >
              <Table >
                <TableHead sx={{ bgcolor: '#3c3d3a', fontFamily: 'sans-serif' }}>
                  <TableRow >
                    <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>#</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>FEES HEADS</TableCell>

                    <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="right">AMOUNT</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell width="100px" scope="row"  sx={{ fontWeight: 'bold' }}>1</TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Tution Fees</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>{commonTemplateContent.tutionFee}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row" sx={{ fontWeight: 'bold' }}>2</TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Annual Function Fees</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}> 1000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row" sx={{ fontWeight: 'bold' }}>3</TableCell>
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
<Box pt={4} p={6} >
            <Box>
              <Typography p={2} variant="h4" sx={{ fontWeight: '600'}} >Terms & Conditions</Typography>
              <Typography p={2} variant="h5" sx={{ fontWeight: '400'}} >Your School&apos;s Terms and Conditions will be displayed here. You can add it in the Invoice Preferences page under Settings.</Typography>
            </Box>
            </Box>

    
      </Paper>
    
    </Box>
  )
}

export default CompactTemplate5;