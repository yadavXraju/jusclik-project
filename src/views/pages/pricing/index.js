import * as React from 'react';
import { Box, Card, CardActions, Button, Chip, Typography, Divider, List, ListItem, styled,Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';


const StyledCard = styled(Card)({
  width: '400px',
  margin: 'auto',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
 
});


const plansData = [
  {
    name: 'Basic',
    color:"#E9E9E9",
    backgroundColor: '#FFF',
    description: [
      { text: 'Virtual Credit Cards', checked: true },
      { text: 'Advanced Reporting', checked: true },
      { text: '24/7 Support', checked: true },
      { text: 'Premium Features', checked:false },
      { text: 'Dedicated Account Manager', checked: false },
      { text: 'Priority Support', checked: false },
    ],
    price: '2.990',
  },
  {
    name: 'Professional',
    backgroundColor: '#E9E9E9',
    color:"black",
    description: [
      { text: 'Virtual Credit Cards', checked: true },
      { text: 'Advanced Reporting', checked: true },
      { text: '24/7 Support', checked: true },
      { text: 'Premium Features', checked: true },
      { text: 'Dedicated Account Manager', checked: false },
      { text: 'Priority Support', checked: false },
    ],
    price: '5.990',
  },
  {
    name: 'Premium',
    backgroundColor: '#fff',
    color:"#E9E9E9",
    description: [
      { text: 'Virtual Credit Cards', checked: true },
      { text: 'Advanced Reporting', checked: true },
      { text: '24/7 Support', checked: true },
      { text: 'Premium Features', checked: true },
      { text: 'Dedicated Account Manager', checked: true },
      { text: 'Priority Support', checked: true },
    ],
    price: '9.990',
  },
];



const StyledChip = styled(Chip)({
  marginBottom: '10px',
  border:`${plansData.color} 1px solid`,

});

const Pricing = () => {


  const navigate = useNavigate(); 

  const handleRegisterClick = () => {
   
    navigate('/registration'); 
  };
 
  return (
    <Paper sx={{height:"80vh"}}>
{/* <Box sx={{background:"blue"}}>
<Typography variant='h1' sx={{color:""}}>
        Flexible Plans And Pricing
      </Typography>

</Box> */}
      
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: "row",
        gap: 2,

        paddingTop:"40px"
      }}
    >
      {plansData.map((plan, index) => (
        <StyledCard key={index} variant="outlined"  sx={{backgroundColor:plan.backgroundColor }}>
          <Box sx={{textAlign:"left"}}>
          <StyledChip label={plan.name} color="primary" variant="outlined" />
          <Typography variant="h2" sx={{  mb: 2 }}>
            {plan.name}
          </Typography>
          </Box>
        
          <Divider variant="fullWidth" sx={{ mb: 2 ,borderColor:plan.color}} />
          <Typography variant="h4" sx={{textAlign:"left"}}>Features</Typography>
          <List>
            {plan.description.map((item, i) => (
              <ListItem key={i} sx={{padding:"2px"}}>
                {item.checked ? (
                  <CheckIcon sx={{ color: 'green' }} />
                ) : (
                  <CheckIcon sx={{ color: '#8080807a' }} />
                )}
                <Typography variant="body1" sx={{ ml: 1, color: item.checked ? '#000' : '#8080807a' }}>{item.text}</Typography>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ mt: 2, mb: 2,borderColor:plan.color, }} />
          
          <CardActions sx={{ justifyContent: 'space-between',alignItem:"center" }}>
          <Typography variant="h4" sx={{ mb: 2 ,display:"flex",justifyItems:"center"}} >{plan.price} <CurrencyRupeeIcon sx={{fontSize:"1.2rem"}}/> /month</Typography>
            <Button variant="outlined" color="primary" onClick={handleRegisterClick}>
              Register Now
            </Button>
          </CardActions>
        </StyledCard>
      ))}
    </Box>
    </Paper>

  );
};

export default Pricing;
