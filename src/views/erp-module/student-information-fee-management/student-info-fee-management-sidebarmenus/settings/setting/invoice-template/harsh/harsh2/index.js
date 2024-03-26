import React from 'react'
import { Box ,Paper,Typography } from '@mui/material'

import { commonTemplateContent } from '../../common/common-states';
import Divider from '@mui/material/Divider';


const InvoicePage1 = () => {
  return (
    
    <Box>
      <Paper elevation={4}>
        
    <Box ml={6} mr={4} pt={2} display={'flex'} justifyContent={'end'}>
    <Box>
      <Typography p={1} variant="h2" >{commonTemplateContent.schoolName}</Typography>
      <Typography p={1} variant='h4'sx={{fontWeight:'500',textAlign:'end'}}>Sohna Dhani Road  Ward No - 01 </Typography>
      <Typography p={1}variant='h4'sx={{fontWeight:'500',textAlign:'end'}}>Sohna Gurugram haryana Sohna - 122103</Typography>
      <Typography p={1}variant='h4' sx={{fontWeight:'500',textAlign:'end'}}>{commonTemplateContent.schoolTel}</Typography>
    </Box>
    </Box>
<Box pt={5}>
    <Divider textAlign="right"><Typography variant='h2'>INVOICE</Typography></Divider>
    </Box>
    <Box ml={6} mr={4} pt={4} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box pl={4}> 
                           <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'116px'}}>Adm No:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.admissionNo}</Typography>
                          </Box>
                          <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,  width:'117px'}}>Class:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.className}</Typography>
                          </Box>
                          <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,width:'110px'}}>Name:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.name}</Typography>
                          </Box>
                          <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,width:'110px'}}>Mobile:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.mobile}</Typography>
                          </Box>
                          <Box display={'flex'}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' ,width:'110px'}}>Father:</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.fatherName}</Typography>
                          </Box>
                          </Box>
            

              <Box pr={4} sx={{width:'25%'}}>
                <Box display={'flex'} >
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }} >Invoice No:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: 'bold' ,textAlign:'end', width:'100%'}}>{commonTemplateContent.invoiceNo}</Typography>
                </Box>
                <Box display={'flex'}>
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>Invoice Date:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: '400',textAlign:'end', width:'100%'  }}>{commonTemplateContent.invoiceDate}</Typography>
                </Box>
                <Box display={'flex'}>
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>Academic Year:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>{commonTemplateContent.academicYear}</Typography>
                </Box>
                <Box display={'flex'}>
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>Fees Period:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: 'bold',textAlign:'end', width:'100%' }}>{commonTemplateContent.feePeriod}</Typography>
                </Box>
                <Box display={'flex'}>
                  <Typography p={1} variant="h5" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>Due Date:</Typography>
                  <Typography p={1} variant="body1" sx={{ fontWeight: '400',textAlign:'end', width:'100%' }}>{commonTemplateContent.dueDate}</Typography>
                </Box>
              </Box>

            
          </Box>
          </Paper>
    </Box>
  )
}

export default InvoicePage1