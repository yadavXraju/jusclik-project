import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Grid, Typography, IconButton, useMediaQuery, Divider } from '@mui/material';
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';
import { CardMedia } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useLocation } from 'react-router-dom';
import EmployeeDrawer from './AddEmployeeDrawer';
import PreviewTabs from './PreviewTabs';
import ExitEmployee from './exitProcess/ExitEmployee';


function EmployeePreview() {
  const location = useLocation();
  const { rowData } = location.state;

  const navigate = useNavigate();
  const BackClick = () => {
    navigate(`/erp/hr-payroll/employee-master`);
  };

  const isMobile = useMediaQuery('(max-width: 767px)');
  const issmallMobile = useMediaQuery('(max-width: 425px)');

  console.log(rowData);

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
                  <Typography variant="h4">Abhishek</Typography>
                  <Box>
                    {' '}
                    <span style={{ fontWeight: '500' }}>Email</span> : Abc@gmail.com
                  </Box>
                  <Box>
                    {' '}
                    <span style={{ fontWeight: '500' }}>Mobile</span> : 9864653743
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  marginTop: { xs: '16px' },
                  width: '100%',
                  gap: issmallMobile ? '10px' : '0px'
                }}
              >
                <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                  <SearchOutlinedIcon />
                </IconButton>

                <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                  {/* <EditLead currEditItem={rowData} handleClick={() => {}}/> */}
                  {/* <AddContactDrawer editIcon={true} currEditItem={rowData} /> */}
                  <EmployeeDrawer editIcon="true" />
                </IconButton>

                 {/* =========== Three dots popover =========== */}
                <ExitEmployee/>

              </Box>
            </Box>

             {/* ========== Progress steps component =========== */}
            {/* <ProgressSteps /> */}

          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ borderRight: isMobile ? 'none' : '1px solid #ccc', height: '100%' }}>
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Primary Details
                  </Typography>
                  <Divider />

                  <Box p={2}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Employee Id
                        </Box>
                        <Box fontSize={16} sx={{ fontWeight: '500' }}>
                          78
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Designation
                        </Box>
                        <Box fontSize={16}>Software Developer</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Joining Date
                        </Box>
                        <Box fontSize={16}>12 May 2018</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Department
                        </Box>
                        <Box fontSize={16}>development</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Gender
                        </Box>
                        <Box fontSize={16}>Male</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          D.O.B
                        </Box>
                        <Box fontSize={16}>22 June 1999</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Age
                        </Box>
                        <Box fontSize={16}>25</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Aadhaar No.
                        </Box>
                        <Box fontSize={16}>255365425555</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          PEN No.
                        </Box>
                        <Box fontSize={16}>AZSPV8648C</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Blood Group
                        </Box>
                        <Box fontSize={16}> O+ </Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Emp. Code
                        </Box>
                        <Box fontSize={16}>7878</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          UAN No.
                        </Box>
                        <Box fontSize={16}>7349573809587</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Education
                        </Box>
                        <Box fontSize={16}>B. Tach</Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ lineHeight: '22px' }}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Religion
                        </Box>
                        <Box fontSize={16}>Hindu</Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
                <PreviewTabs/>
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </>
  );
}

export default EmployeePreview;