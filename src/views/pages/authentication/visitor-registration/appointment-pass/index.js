import React from 'react'
import Box from '@mui/material/Box';
import logo from 'assets/images/WhatsApp_Image_2020-03-21_at_8_04_53_PM__1-removebg-preview 1.png'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DP from 'assets/images/pro-3.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Divider from '@mui/material/Divider';
import QRCODE from 'assets/images/Demo_QR.jpg'



const VisitorAppointmentPass = () => {
  return (
    
    <Box  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'50px' }}
  >
    <Box  width={390}  my={2} display="flex"  justifyContent="center" gap={2} p={2}   sx={{ border: '1px solid grey', marginTop:'0px' }}
    >
      
      <Box width={350}
      sx={{
        backgroundColor: '#00924a',
        justifyContent: 'center',
        marginTop: '30px',
        borderRadius: '10px',
        border: '2px solid grey',
        padding: '20px',
        textAlign: 'center', // Center content horizontally,
        
      }}
    >
    <img src={logo} alt="Logo" style={{ width: '90px', height: '90px', alignSelf: 'center!important', marginTop:'20px'}}/>
   
    <Typography variant='h4' color='white' >  Meeting Appointment Pass  </Typography>

    <Avatar alt="DP" src={DP} sx={{width: 100, height: 100, marginTop: 2, marginBottom:2, marginLeft: '100px'}} />

    <Typography variant='h4' color='white'  > Visitor Name  </Typography>

    <Typography variant='h5' color='white' marginTop={3} > 12 mar,2024 <FiberManualRecordIcon style={{ verticalAlign: 'middle', lineHeight: 0 ,fontSize: 'small' }}/>  10:10am(IST) <FiberManualRecordIcon style={{ verticalAlign: 'middle', lineHeight: 0 ,fontSize: 'small' }}/>  ID:abcd123  </Typography>

    <Divider style={{ backgroundColor: 'white', height: '2px' }} />

    <Typography variant='h4' color='white' marginTop={2}  > Arwachin Public School , Ghaziabad  </Typography>

    <Typography variant='h5' color='white' marginTop={1}  > <strong> Address:</strong> Abc Delhi</Typography>
    <Typography variant='h5' color='white'  ><strong>Visitor&apos;s Company:</strong> Abc Tech  </Typography>
    <Typography variant='h5' color='white' marginTop={5} ><strong>POC Details</strong></Typography>
    <Typography variant='h6' color='white'  ><strong>Name: Visior Name , Number: Visitor Number</strong></Typography>
    <img src={QRCODE} alt="QRCODE" style={{ width: '90px', height: '90px', alignSelf: 'center!important', marginTop:'20px'}}/>




    </Box>
   
    </Box>
  </Box>
  )
}

export default VisitorAppointmentPass