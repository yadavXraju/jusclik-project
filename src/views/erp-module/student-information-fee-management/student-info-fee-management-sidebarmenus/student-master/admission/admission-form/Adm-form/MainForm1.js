import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Card } from '@mui/material';
import Profile from '../Forms.js/Profile';
import ProfileDetail from './ProfileDetail';
import AddressForm from './Address';
import ContactPerson from './ContactPerson';
import OtherDetails from './OtherDetails';
import MainCard from 'ui-component/cards/MainCard';
import Remarks from './Remarks';
import CustomFields from './CustomFields';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

const buttonsData = [
  { name: 'Button1', icon: <PersonAddAltTwoToneIcon />, label: 'Primary Details' },
  { name: 'Button2', icon: <DescriptionTwoToneIcon />, label: 'Other Details' },
  { name: 'Button3', icon: <HomeWorkTwoToneIcon />, label: 'Address' },
  { name: 'Button4', icon: <PeopleAltTwoToneIcon />, label: 'Contact Person' },
  { name: 'Button5', icon: <HandymanTwoToneIcon />, label: 'Custom Fields' },
  { name: 'Button6', icon: <TextsmsTwoToneIcon />, label: 'Remarks' },
];

const Mainform1 = () => {
  const [selectedButton, setSelectedButton] = useState('Button1');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  let cardComponent;
  switch (selectedButton) {
    case 'Button1':
      cardComponent = <ProfileDetail />;
      break;
    case 'Button2':
      cardComponent = <OtherDetails />;
      break;
    case 'Button3':
      cardComponent = <AddressForm />;
      break;
    case 'Button4':
      cardComponent = <ContactPerson />;
      break;
    case 'Button5':
      cardComponent = <CustomFields/>;
      break;
    case 'Button6':
      cardComponent = <Remarks/>;
      break;
    default:
      cardComponent = null;
  }

  return (
    <>
      <MainCard>
        <Grid container spacing={3} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} lg={3}>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '10px' }}>
              <Card>
                <Box sx={{ borderBottom: '1px solid #ccc' }}>
                  <Profile />
                </Box>

                <Box sx={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', padding: '20px' }}>
                  {buttonsData.map((button) => (
                    <Button
                      key={button.name}
                      sx={{
                        color: selectedButton === button.name ? '#2196f3' : 'black',
                        justifyContent: 'start',
                        fontSize: '14px'
                      }}
                      startIcon={button.icon}
                      size="large"
                      onClick={() => handleButtonClick(button.name)}
                    >
                      <Box>
                        <div style={{ justifyContent: 'start', display: 'flex' }}>{button.label}</div>
                      </Box>
                    </Button>
                  ))}
                </Box>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} lg={9}>
            <Box sx={{ flex: '1', overflow: 'auto', border: '1px solid #ccc', borderRadius: '10px' }}>
              <Box>{cardComponent}</Box>
            </Box>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default Mainform1;
