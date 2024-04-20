import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Grid, Typography, IconButton, useMediaQuery, Divider, Button } from '@mui/material';
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';
import { CardMedia } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

function Preview() {
  // const location = useLocation();
  // const { rowData } = location.state;

  const navigate = useNavigate();
  const BackClick = () => {
    navigate(`/erp/crm/contact`);
  };

  const isMobile = useMediaQuery('(max-width: 767px)');
  const issmallMobile = useMediaQuery('(max-width: 425px)');

  return (
    <>
      <MainCard>
        <Box>
          <Box
            pb={1}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: issmallMobile ? 'wrap' : 'nowrap',
              borderBottom: '1px solid #ccc',
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
                <Box>Admission No - 837598437</Box>
                {/* <Box>Class - V</Box> */}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%', gap: issmallMobile ? '10px' : '0px' }}>
              <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                <SearchOutlinedIcon />
              </IconButton>
              <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                <EditTwoToneIcon />
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box p={2} sx={{ borderRight: isMobile ? 'none' : '1px solid #ccc' }}>
                {/* =============== Render Primary Details ===================== */}
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Primary Details
                  </Typography>
                  <Divider />

                  <Box p={2}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          ADMISSION DATE
                        </Box>
                        <Box fontSize={16}>09-05-2023</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          JOINING DATE
                        </Box>
                        <Box fontSize={16}>09-05-2023</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          D.O.B
                        </Box>
                        <Box fontSize={16}>09-05-2000F</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          GENDER
                        </Box>
                        <Box fontSize={16}>Male</Box>
                      </Grid>
                      {/* <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          MOBILE
                        </Box>
                        <Box fontSize={16}>8484937348</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          EMAIL
                        </Box>
                        <Box fontSize={16}>abc@gmail.com</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          AGE
                        </Box>
                        <Box fontSize={16}>18 Year</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          AADHAAR NO.
                        </Box>
                        <Box fontSize={16}>548548393832</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          PEN NO.
                        </Box>
                        <Box fontSize={16}>AZXPV458679</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          CATEGORY
                        </Box>
                        <Box fontSize={16}>General</Box>
                      </Grid> */}
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              {/* <PriviewTabs /> */}
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </>
  );
}

export default Preview;
