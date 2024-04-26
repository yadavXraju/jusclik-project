import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Grid, Typography, IconButton, useMediaQuery, Button, Divider } from '@mui/material';
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';
import { CardMedia } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import PreviewTabs from './PreviewTabs';
import ProgressSteps from './ProgressSteps';
import { useLocation } from 'react-router-dom';
// import EditLead from './EditLead';

function Preview() {
  const location = useLocation();
  const { rowData } = location.state;

  const navigate = useNavigate();
  const BackClick = () => {
    navigate(`/erp/crm/contact`);
  };

  const isMobile = useMediaQuery('(max-width: 767px)');
  const issmallMobile = useMediaQuery('(max-width: 425px)');

  console.log(rowData)

  return (
    <>
      <MainCard>
        <Box>
          <Box sx={{ borderBottom: '1px solid #ccc' }}>
            <Box
              pb={1}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: issmallMobile ? 'wrap' : 'nowrap',
                alignItems: 'center'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Box>
                  <ArrowBackOutlinedIcon onClick={BackClick} sx={{ cursor: 'pointer' }} />
                </Box>
                <Box>
                  <CardMedia
                    sx={{ height: '70px', width: '70px', borderRadius: '50%', m: '0px 15px' }}
                    image={studentProfileDetails.StudentImage}
                    title="Student image"
                  />
                </Box>
                <Box>
                  <Typography variant="h4">Suraj</Typography>
                  <Box> <span style={{fontWeight:'500'}}>Email</span> :  Abc@gmail.com</Box>
                  <Box> <span style={{fontWeight:'500'}}>Mobile</span> :  9864653743</Box>
                  <Box> <span style={{fontWeight:'500'}}>Added On</span> :  10-Mar-2024</Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'end', marginTop:{xs:'16px'}, width: '100%', gap: issmallMobile ? '10px' : '0px' }}>
                <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                  <SearchOutlinedIcon />
                </IconButton>
                <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                  <EditTwoToneIcon />
                  {/* <EditLead currEditItem={rowData} handleClick={() => {}}/> */}
                </IconButton>

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }} {...bindTrigger(popupState)}>
                        <MoreVertTwoToneIcon />
                      </IconButton>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center'
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center'
                        }}
                      >
                        <Typography sx={{ p: 1, display: 'Grid' }}>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Upload</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Bulk Editing</Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </Box>
            </Box>

            <ProgressSteps/>

            {/* <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box p={2} sx={{ display: 'flex' }}>
                  <Box p={3} py={1} mx={1} sx={{ border: '1px solid #ccc', textAlign: 'center', borderRadius: '4px' }}>
                    <Typography variant="h4" color={'#8b8989'}>
                      Last Contacted
                    </Typography>
                    <Typography variant="h4">10-May-2020</Typography>
                  </Box>

                  <Box px={3} py={1} mx={1} sx={{ border: '1px solid #ccc', textAlign: 'center', borderRadius: '4px' }}>
                    <Typography variant="h4" color={'#8b8989'}>
                      Next Appointment
                    </Typography>
                    <Typography variant="h4">20-May-2020</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box p={2} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                  <Button sx={{ marginRight: '5px' }} variant="outlined">
                    Send Mail
                  </Button>
                  <Button variant="contained">Convert Lead</Button>
                </Box>
              </Grid>
            </Grid> */}
          </Box>


          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ borderRight: isMobile ? 'none' : '1px solid #ccc', height: '100%' }}>
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Lead Details
                  </Typography>
                  <Divider />

                  <Box p={2}>
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                        Lead Score
                        </Box>
                        <Box fontSize={16} sx={{fontWeight:'500'}}>50</Box>
                        
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Assigned Counsellor
                        </Box>
                        <Box fontSize={16}>Muskaan Sharma</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Communication Status
                        </Box>
                        <Box fontSize={16}>Email Sent - 1</Box>
                        <Box fontSize={16}>SMS Sent - 0</Box>
                        <Box fontSize={16}>Whatsapp Sent - 0</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Telephony Status
                        </Box>
                        <Box fontSize={16}>Inbound Call - 0</Box>
                        <Box fontSize={16}>Outbound Call - 0</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Lead Source
                        </Box>
                        <Box fontSize={16}>Publisher Campaign: Walk_in</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Upcoming Followup
                        </Box>
                        <Box fontSize={16}>NA</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                        Last Contacted
                        </Box>
                        <Box fontSize={16}>10-May-2020</Box>
                      </Grid>
                    </Grid>

                    
                    



                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <PreviewTabs />
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </>
  );
}

export default Preview;
