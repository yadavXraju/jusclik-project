import React, { useState } from 'react';
import { Box, Tab, Tabs, Grid, Typography, Divider } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import LeadTimeline from './LeadTimeline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CommunicationLogs from './CommunicationLogs';
import CommonDocuments from 'components/Documents';
import documentData from './Sample-DocumentData';
import FollowUpAndNotes from './FollowUpAndNotes';

const PreviewTabs = () => {
  const [tabValue, setTabValue] = useState(0); // State for controlling tabs

  const tabs = [
    { name: 'Basic Info', icon: <InfoOutlinedIcon /> },
    { name: 'Timeline', icon: <AccessTimeOutlinedIcon /> },
    { name: 'Communication Logs', icon: <EmailOutlinedIcon /> },
    { name: 'Follow Up & Notes', icon: <NoteAltOutlinedIcon /> },
    { name: 'Documents', icon: <FolderOutlinedIcon /> }
  ];
  //const tabLength = tabs.length;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      {/* Tabs for switching between tabs */}
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: '1px solid #ccc' }} variant="scrollable" aria-label="Tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '5px' }}>{tab.icon}</span>
                {tab.name}
              </Box>
            }
          />
        ))}
      </Tabs>
      {/* Tab panels based on selected tab */}
      <Box>
        {tabValue === 0 && (
          <>
            {/* ================ Render Basic Info tab content ============== */}
            <Box>
              <Box p={2}>
                <Typography p={0.7} variant="h4">
                  Primary Details
                </Typography>
                <Divider />

                <Box p={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        Name
                      </Box>
                      <Box fontSize={16}>Suraj</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        Email
                      </Box>
                      <Box fontSize={16}>Abc@gmail.com</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        D.O.B
                      </Box>
                      <Box fontSize={16}>09-May-2000</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        Mobile
                      </Box>
                      <Box fontSize={16}>9864737474</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        State
                      </Box>
                      <Box fontSize={16}>Hisar</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        City
                      </Box>
                      <Box fontSize={16}>Haryana</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        Class Looking for
                      </Box>
                      <Box fontSize={16}>Class 5</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        Academic Session
                      </Box>
                      <Box fontSize={16}>2024-25</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        Previous School
                      </Box>
                      <Box fontSize={16}>NA</Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </>
        )}
        {tabValue === 1 && <LeadTimeline/>}
        {tabValue === 2 && <CommunicationLogs/>}
        {tabValue === 3 && <FollowUpAndNotes/>}
        {tabValue === 4 && <Box px={4} mt={2}><CommonDocuments documentData={documentData} customStyle={{height:'100%'}}/></Box>}
      </Box>
    </Box>
  );
};

export default PreviewTabs;
