import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Card } from '@mui/material';
import Profile from './Profile';
import ProfileDetail from './ProfileDetail';
import AddressForm from './Address';
import ContactPerson from './ContactPerson';
import OtherDetails from './OtherDetails';
//import MainCard from 'ui-component/cards/MainCard';
import Remarks from './Remarks';
import CustomFields from './CustomFields';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
//import BottomNavbar from 'views/common-section/BottomNavbar';
import BottomNavbar from '../../admission-common-section/BottomNavbar';

const buttonsData = [
  { name: 0, icon: <PersonAddAltTwoToneIcon />, label: 'Primary Details' },
  { name: 1, icon: <DescriptionTwoToneIcon />, label: 'Other Details' },
  { name: 2, icon: <HomeWorkTwoToneIcon />, label: 'Address' },
  { name: 3, icon: <PeopleAltTwoToneIcon />, label: 'Contact Person' },
  { name: 4, icon: <HandymanTwoToneIcon />, label: 'Custom Fields' },
  { name: 5, icon: <TextsmsTwoToneIcon />, label: 'Remarks' }
];

const Mainform1 = ({ currEditItem }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  // const [value, setValue] = useState(0);
  //console.log(currEditItem);
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const [student, setStudentDetails] = useState('');

  const handleChange = (name,newValue) => {
    setStudentDetails({...student,[name]:newValue});
  };

  let cardComponent;
  switch (selectedButton) {
    case 0:
      cardComponent = <ProfileDetail setStudentDetail={handleChange} setEditItem={currEditItem} />;
      break;
    case 1:
      cardComponent = <OtherDetails />;
      break;
    case 2:
      cardComponent = <AddressForm />;
      break;
    case 3:
      cardComponent = <ContactPerson />;
      break;
    case 4:
      cardComponent = <CustomFields />;
      break;
    case 5:
      cardComponent = <Remarks />;
      break;
    default:
      cardComponent = null;
  }

  return (
    <>
      <Card>
        <Grid container spacing={3} mb={8} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} lg={3}>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '10px' }}>
              <Card>
                <Box sx={{ borderBottom: '1px solid #ccc' }}>
                  <Profile profileDetails={student} />
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
      </Card>
      <BottomNavbar
        tabPageLength={buttonsData.length}
        value={selectedButton}
        setValue={setSelectedButton}
        customStyle={{ width: '100%', bottom: '0', borderRadius: '1px' }}
      />
    </>
  );
};

export default Mainform1;
