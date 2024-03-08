import { Grid, Box, Card,Typography , Container } from '@mui/material'
import React from 'react'
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


const Organisation = () => {
  
  return (
    <>
     <Container>
     <Box sx={{ }}>
     <Grid container spacing={5} sx={{}}>
     <Grid item xs={3} sx={{paddingBottom:'2rem'}}>
      <Card sx={{border:'1px solid #ebeaf2', padding:'36px', height:'110%', backgroundColor:'#f9f9fb'}}>
          <Box>
            <Box sx={{display:'flex',}}>
              <CorporateFareRoundedIcon sx={{ color:'#838195'}}/>
              <Typography variant='h5' sx={{ paddingLeft:'7px', paddingTop:'3px'}}>
            Organisation
            </Typography>
            </Box>
            <Box sx={{paddingTop:'14px'}}>
            <Typography sx={{paddingTop:'14px'}}>Profile</Typography>
           
            <Typography sx={{paddingTop:'14px'}}>Branding</Typography>
            <Typography sx={{paddingTop:'14px'}}>Users & Roles</Typography>
            <Typography sx={{paddingTop:'14px'}}>Student Portal</Typography>
            </Box>
            </Box>
      </Card>
              </Grid>
      <Grid item xs={3} sx={{paddingBottom:'2rem'}}>
      <Card sx={{border:'1px solid #ebeaf2', padding:'36px', height:'110%', backgroundColor:'#f9f9fb'}}>
          <Box>
            <Box sx={{display:'flex',}}>
              <SmsOutlinedIcon sx={{ color:'#838195'}}/>
              <Typography variant='h5' sx={{ paddingLeft:'7px', paddingTop:'3px'}}>
              Communication Templates
            </Typography>
            </Box>
            <Box sx={{paddingTop:'14px'}}>
            <Typography sx={{paddingTop:'14px'}}>SMS</Typography>
            <Typography sx={{paddingTop:'14px'}}>E-mail</Typography>
            <Typography sx={{paddingTop:'14px'}}>Notification</Typography>
            <Typography sx={{paddingTop:'14px'}}>WhatsApp</Typography>
            
            </Box>
            </Box>
      </Card>
      </Grid>
   
      <Grid item xs={3} sx={{paddingBottom:'2rem'}}>
      <Card sx={{border:'1px solid #ebeaf2', padding:'36px', height:'110%', backgroundColor:'#f9f9fb'}}>
          <Box>
            <Box sx={{display:'flex',}}>
              <PeopleAltOutlinedIcon sx={{ color:'#838195'}}/>
              <Typography variant='h5' sx={{ paddingLeft:'7px', paddingTop:'3px'}}>
             Students
            </Typography>
            </Box>
            <Box sx={{paddingTop:'14px'}}>
            <Typography sx={{paddingTop:'14px'}}>Class Promotion</Typography>
            <Typography sx={{paddingTop:'14px'}}>Section Shuffling</Typography>
            <Typography sx={{paddingTop:'14px'}}>House Shuffling</Typography>
          
            </Box>
            </Box>
      </Card>
      </Grid>
      <Grid item xs={3} sx={{paddingBottom:'2rem'}}>
      <Card sx={{border:'1px solid #ebeaf2', padding:'36px', height:'110%', backgroundColor:'#f9f9fb'}}>
          <Box>
            <Box sx={{display:'flex',}}>
              <CreditCardOutlinedIcon sx={{ color:'#838195'}}/>
              <Typography variant='h5' sx={{ paddingLeft:'7px', paddingTop:'3px'}}>
               Fee
            </Typography>
            </Box>
            <Box sx={{paddingTop:'14px'}}>
            <Typography sx={{paddingTop:'14px'}}>Fee Heads</Typography>
            <Typography sx={{paddingTop:'14px'}}>Fee Structure</Typography>
            <Typography sx={{paddingTop:'14px'}}>Concession</Typography>
            <Typography sx={{paddingTop:'14px'}}>Discount</Typography>
            <Typography sx={{paddingTop:'14px'}}>Fee Account</Typography> 
            <Typography sx={{paddingTop:'14px'}}>Invoice</Typography>
            </Box>
            </Box>
      </Card>
              </Grid>
      {/* </Grid> */}

      {/* 2nd row start*/}
   {/* <Box sx={{paddingTop:'4rem'}}>
   <Grid container spacing={5} > */}
    
   
      <Grid item xs={3} sx={{paddingBottom:'2rem'}}>
      <Card sx={{border:'1px solid #ebeaf2', padding:'36px', height:'110%', backgroundColor:'#f9f9fb'}}>
          <Box>
            <Box sx={{display:'flex',}}>
              <TipsAndUpdatesRoundedIcon sx={{ color:'#838195'}}/>
              <Typography variant='h5' sx={{ paddingLeft:'7px', paddingTop:'3px'}}>
              Customisation
            </Typography>
            </Box>
            <Box sx={{paddingTop:'14px'}}>
            <Typography sx={{paddingTop:'14px'}}>Reporting Tags</Typography>
            <Typography sx={{paddingTop:'14px'}}>Transaction Number Series</Typography>
          
            </Box>
            </Box>
      </Card>
      </Grid>
      <Grid item xs={3} sx={{paddingBottom:'2rem'}}>
      <Card sx={{border:'1px solid #ebeaf2', padding:'36px', height:'110%', backgroundColor:'#f9f9fb'}}>
          <Box>
            <Box sx={{display:'flex',}}>
              <TuneOutlinedIcon sx={{ color:'#838195'}}/>
              <Typography variant='h5' sx={{ paddingLeft:'7px', paddingTop:'3px'}}>
              Integrations
            </Typography>
            </Box>
            <Box sx={{paddingTop:'14px'}}>
            <Typography sx={{paddingTop:'14px'}}>Zoom </Typography>
            <Typography sx={{paddingTop:'14px'}}>Google Meet </Typography>
            <Typography sx={{paddingTop:'14px'}}>WhatsApp </Typography>
            <Typography sx={{paddingTop:'14px'}}>Payment Gateways</Typography>
            
            </Box>
            </Box>
      </Card>
      </Grid>
      <Grid item xs={3} sx={{paddingBottom:'2rem'}}>
      <Card sx={{border:'1px solid #ebeaf2', padding:'36px', height:'110%', backgroundColor:'#f9f9fb'}}>
          <Box>
            <Box sx={{display:'flex',}}>
              <WebhookRoundedIcon sx={{ color:'#838195'}}/>
              <Typography variant='h5' sx={{ paddingLeft:'7px', paddingTop:'3px'}}>
              Developer Space
            </Typography>
            </Box>
            <Box sx={{paddingTop:'14px'}}>
            <Typography sx={{paddingTop:'14px'}}>Data Backup</Typography>
          
           
            </Box>
            </Box>
      </Card>
      </Grid>
      </Grid>
   {/* </Box> */}
       {/* 3rd row start
       <Box sx={{paddingTop:'4rem', paddingBottom:'4rem'}}>
   <Grid container spacing={5} >
     
      </Grid>
   </Box> */}
    </Box>
     </Container>
      
    </>
  )
}

export default Organisation
