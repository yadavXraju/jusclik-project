import * as React from 'react';
import { Box, Card, CardActions, Button, Typography, Divider, List, ListItem, styled, Paper, Grid,useMediaQuery } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useLocation } from 'react-router-dom';

const StyledCard = styled(Card)({
  margin: 'auto',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
});


const plansData = [
  {
    name: 'Essential',
    icon: <TwoWheelerOutlinedIcon  mt="2" color="secondary" sx={{mt:2, background: "#5e35b12b", width: "80px", height: "80px", padding: "20px", borderRadius: "50%", fontSize: "2.5rem" }} />,
    color: "#E9E9E9",
    backgroundColor: '#FFF',
    chipfn: "white",
    chipColor: "#000",
    chipbg: "#000",
    btnColor:"primary",
    paperBorder:"#673ab7",
    borderWith:"1",
    description: [
      { text: 'Virtual Credit Cards', checked: true },
      { text: 'Advanced Reporting', checked: true },
      { text: '24/7 Support', checked: true },
      { text: 'Premium Features', checked: false },
      { text: 'Dedicated Account Manager', checked: false },
      { text: 'Priority Support', checked: false },
    ],
    rup: <CurrencyRupeeIcon sx={{ fontSize: "1.2rem" ,paddingTop:"2px"}} /> ,
    price: '5,000',
  },
  {
    name: 'Premium',
    icon: <DirectionsCarIcon  mt="2"  color="secondary" sx={{mt:2, background: "#5e35b12b", width: "80px", height: "80px", padding: "20px", borderRadius: "50%", fontSize: "2.5rem" }} />,
    backgroundColor: '#E9E9E9',
    color: "black",
    chipColor: "#000",
    chipfn: "black",
    chipbg: "transparent",
    btnColor:"secondary",
    paperBorder:"#673ab7",
    borderWith:"2",
    description: [
      { text: 'Virtual Credit Cards', checked: true },
      { text: 'Advanced Reporting', checked: true },
      { text: '24/7 Support', checked: true },
      { text: 'Premium Features', checked: true },
      { text: 'Dedicated Account Manager', checked: false },
      { text: 'Priority Support', checked: false },
    ],
    rup: <CurrencyRupeeIcon sx={{ fontSize: "1.2rem",paddingTop:"2px" }} /> ,
    price: '15,000',
  },
  {
    name: 'Enterprise',
    icon: <AirplanemodeActiveOutlinedIcon   color="secondary" sx={{ mt:2, background: "#5e35b12b", width: "80px", height: "80px", padding: "20px", borderRadius: "50%", fontSize: "2.5rem" }} />,
    backgroundColor: '#fff',
    color: "#E9E9E9",
    chipColor: "#000",
    chipbg: "#000",
    chipfn: "white",
    btnColor:"secondary",
    paperBorder:"#673ab7",
    borderWith:"1",
    description: [
      { text: 'Virtual Credit Cards', checked: true },
      { text: 'Advanced Reporting', checked: true },
      { text: '24/7 Support', checked: true },
      { text: 'Premium Features', checked: true },
      { text: 'Dedicated Account Manager', checked: true },
      { text: 'Priority Support', checked: true },
    ],
    rup: <CurrencyRupeeIcon sx={{ fontSize: "1.2rem" ,paddingTop:"2px"}} /> ,
    price: '30,000',
  },
];

const Pricing = () => {
  const navigate = useNavigate();


  const isTab=useMediaQuery('(max-width: 890px)');


  const handleRegisterClick = () => {
    navigate('/registration');
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedTier = searchParams.get('selectedTier');

  return (
    <Paper    sx={{minHeight:'100vh', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center' }} >
      {/* <Box sx={{ padding: "40px 20px 0px" }}>
        <Typography variant='h1' sx={{ textAlign: "center" }}>Flexible Plans And Pricing</Typography>
      </Box> */}

          { selectedTier && (
          <Typography  sx={{ textAlign: "center"}}  variant="h4">Selected Tier: {selectedTier}</Typography>
         )}

      <Grid container className='san'
       spacing={3}  
       justifyContent={isTab ? "stretch" : "center"} 
       sx={{padding:"20px 20px" ,  }} >
        {plansData.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} xl={2} lg={3} >
            <StyledCard variant="outlined" sx={{ padding:"20px", border:`${plan.borderWith}px solid ${plan.paperBorder}` }}>
              <Box sx={{ display: "flex", flexDirection: "column" ,alignItems:"center"}}>
                <Box sx={{display: "flex", flexDirection: "column" ,alignItems:"center" }}>
                  {plan.icon}
                  <Typography variant="h2" sx={{ my: 2 }}>{plan.name}</Typography>

                  <Divider  sx={{width:"80px", padding:"2px" , borderColor:"#673ab7",borderRadius:"20px",background:"#673ab7",margin:"auto" }} />

                  <Typography variant="body1"  sx={{my:2,color:"#364152"}}>Create one end product for a client, transfer that end product to your client, charge them for your services. The license is then transferred to the client.</Typography>

                  <Typography variant="h4" sx={{ my: 2, display: "flex", justifyItems: "center" }}> Starting {plan.rup} <Typography variant='text' sx={{fontWeight:"800",fontSize:"18px"}}>{plan.price} </Typography> /month</Typography>
                </Box>
              </Box>
          
              <Divider variant="fullWidth" sx={{ my: 2, borderColor:"#E9E9E9" }} />
              {/* <Typography variant="h4" sx={{ textAlign: "left" }}>Features</Typography> */}
               <Box sx={{padding:"0 20px 20px"}}>
               <List>
                {plan.description.map((item, i) => (
                  <ListItem key={i} sx={{ padding: "4px",borderBottom:"1px solid #E9E9E9" }}>
                    {item.checked ? (
                      <CheckIcon sx={{ color: '#00C853' }} />
                    ) : (
                      <CheckIcon sx={{ color: '#8080807a' }} />
                    )}
                    <Typography variant="body1" sx={{ ml: 1, color: item.checked ? '#000' : '#8080807a' }}>{item.text}</Typography>
                
                  </ListItem>
                  
                ))}
              </List>
              {/* <Divider sx={{ mt: 2, mb: 2, borderColor:"#E9E9E9" }} /> */}
               </Box>

              <CardActions sx={{ justifyContent: 'center', alignItems: "center" }}>
              
                <Button variant="outlined"  color="secondary"  onClick={handleRegisterClick}>
                  Register Now
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Pricing;
