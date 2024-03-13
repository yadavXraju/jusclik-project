import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Card } from 'antd';
import Profile from '../Forms.js/Profile';
import ProfileDetail from './ProfileDetail';
import DetailsTwoToneIcon from '@mui/icons-material/DetailsTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import NfcTwoToneIcon from '@mui/icons-material/NfcTwoTone';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import AddressForm from './Address';
import ContactPerson from './ContactPerson';
import OtherDetails from './OtherDetails';


export default function Mainform1() {
  const [selectedButton, setSelectedButton] = useState('Button1');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      {/* // ============= buttons tab for View Policies and Upload Documents ============= */}
      <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
        <Grid item xs={12} sm={12} lg={3}>
          <Box sx={{ border: '1px solid #ccc', borderRadius: '10px' }}>
            <Card>
              <Box mb={3}>
                <Profile />
              </Box>

              <Box sx={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', paddingRight: '15px' }}>
                <Button
                  sx={{
                    color: selectedButton === 'Button1' ? '#2196f3' : 'black',
                    justifyContent: 'start',
                    fontSize: '14px'
                  }}
                  startIcon={<DetailsTwoToneIcon />}
                  size="large"
                  onClick={() => handleButtonClick('Button1')}
                >
                  <Box>
                    <div style={{ justifyContent: 'start', display: 'flex' }}>Primary Details</div>
                    {/* <p style={{fontSize:'12px', color:'rgb(105, 117, 134)', justifyContent:'start',
    display:'flex', margin:'0px'}}>
    Add & Upload File
    </p> */}
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: selectedButton === 'Button2' ? '#2196f3' : 'black',
                    justifyContent: 'start',
                    fontSize: '14px'
                  }}
                  startIcon={<InfoTwoToneIcon />}
                  size="large"
                  onClick={() => handleButtonClick('Button2')}
                >
                  <Box>
                    <div style={{ justifyContent: 'start', display: 'flex' }}>Other Details</div>
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: selectedButton === 'Button3' ? '#2196f3' : 'black',
                    justifyContent: 'start',
                    fontSize: '14px'
                  }}
                  startIcon={<DnsTwoToneIcon />}
                  size="large"
                  onClick={() => handleButtonClick('Button3')}
                >
                  <Box>
                    <div style={{ justifyContent: 'start', display: 'flex' }}>Address</div>
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: selectedButton === 'Button4' ? '#2196f3' : 'black',
                    justifyContent: 'start',
                    fontSize: '14px'
                  }}
                  startIcon={<ContactSupportTwoToneIcon />}
                  size="large"
                  onClick={() => handleButtonClick('Button4')}
                >
                  <Box>
                    <div style={{ justifyContent: 'start', display: 'flex' }}>Contact Person</div>
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: selectedButton === 'Button5' ? '#2196f3' : 'black',
                    justifyContent: 'start',
                    fontSize: '14px'
                  }}
                  startIcon={<NfcTwoToneIcon />}
                  size="large"
                  onClick={() => handleButtonClick('Button5')}
                >
                  <Box>
                    <div style={{ justifyContent: 'start', display: 'flex' }}>Custom Feilds</div>
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: selectedButton === 'Button6' ? '#2196f3' : 'black',
                    justifyContent: 'start',
                    fontSize: '14px'
                  }}
                  startIcon={<EditNoteTwoToneIcon />}
                  size="large"
                  onClick={() => handleButtonClick('Button6')}
                >
                  <Box>
                    <div style={{ justifyContent: 'start', display: 'flex' }}>Remark</div>
                  </Box>
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} lg={9}>
          <Box sx={{ flex: '1', overflow: 'auto', border: '1px solid #ccc', borderRadius: '10px' }}>
            {selectedButton === 'Button1' && (
              <Card sx={{ padding: '20px' }}>
                <ProfileDetail />
              </Card>
            )}
            {selectedButton === 'Button2' && (
              <Card sx={{ padding: '20px' }}>
                <OtherDetails/>
              </Card>
            )}
            {selectedButton === 'Button3' && (
              <Card sx={{ padding: '20px' }}>
                <AddressForm/>
              </Card>
            )}
            {selectedButton === 'Button4' && (
              <Card sx={{ padding: '20px' }}>
                <ContactPerson/>
              </Card>
            )}
            {selectedButton === 'Button5' && <Card sx={{ padding: '20px' }}>5</Card>}
            {selectedButton === 'Button6' && <Card sx={{ padding: '20px' }}>6</Card>}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
