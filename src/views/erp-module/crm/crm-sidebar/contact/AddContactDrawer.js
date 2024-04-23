import React, { useState, useEffect } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, Grid } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BottomNavbar from 'views/common-section/BottomNavbar';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import AddLeadForm from './AddLeadForm';

const buttonsData = [
  { name: 0, icon: <InfoOutlinedIcon />, label: 'Basic Info' },
  { name: 1, icon: <DescriptionTwoToneIcon />, label: 'Other Details' },
  { name: 2, icon: <EmailOutlinedIcon />, label: 'Communication Logs' },
  { name: 3, icon: <NoteAltOutlinedIcon />, label: 'Follow up & Notes' },
  { name: 4, icon: <FolderOutlinedIcon />, label: 'Documents' },
  { name: 5, icon: <TextsmsTwoToneIcon />, label: 'Remarks' }
];

const AddContactDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const [selectedButton, setSelectedButton] = useState(0);
  const [section, setSection] = useState([]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  useEffect(() => {
    getSectionName();
  }, []);

  const getSectionName = () => {
    const updatedSections = [];
    setSection(updatedSections);
  };

  let cardComponent;
  switch (selectedButton) {
    case 0:
      cardComponent = <AddLeadForm/>;
      break;
    case 1:
      cardComponent = '2';
      break;
    case 2:
      cardComponent = '3';
      break;
    case 3:
      cardComponent = '4';
      break;
    case 4:
      cardComponent = '5';
      break;
    case 5:
      cardComponent = '6';
      break;
    default:
      cardComponent = null;
  }

  return (
    <>
      <Button onClick={toggleDrawer('top', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Add Contact
      </Button>
      <Drawer anchor={'top'} open={anchor.top} onClose={toggleDrawer('top', false)}>
        <Box sx={{ width: '100%', height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Contact</Typography>
            <Button onClick={toggleDrawer('top', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box pt={2}>
            <Box>
              <Grid container spacing={3} mb={8} sx={{ display: 'flex', height: '100%' }}>
                <Grid item xs={12} sm={12} lg={3}>
                  <Box sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
                    <Box>
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
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={9}>
                  <Box sx={{ flex: '1', overflow: 'auto'}}>
                    <Box>{cardComponent}</Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <BottomNavbar
              tabPageLength={buttonsData.length}
              value={selectedButton}
              setValue={setSelectedButton}
              customStyle={{ width: '100%', bottom: '0', borderRadius: '1px' }}
              section={section}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AddContactDrawer;
