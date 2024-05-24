// ======= Page Owner Vikash =========
// ======= Transport Preview Component =========

import React, {useEffect} from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Grid, Typography, useMediaQuery, Divider } from '@mui/material';
import { studentProfileDetails } from 'layout/MainLayout/Header/Profile';
import { CardMedia } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import rows from '../../../student-master/admission/admission-form/Adm-form/AdmissionTableData';
import { useParams } from 'react-router';

function TransportPreview() {
  let { id } = useParams();

  const navigate = useNavigate();
  const BackClick = () => {
    navigate(`/erp/student-info-fee/transport/allocation`);
  };

  const [filteredIndex, setFilteredIndex] = React.useState(-1); // Initial state set to -1
  const [filteredRow, setFilteredRow] = React.useState(null);
  useEffect(() => {
    if (id !== -1) {
      setFilteredIndex(id);
      setFilteredRow(rows[id]);
    }
  }, [id]);

  // ======= Update filtered row when filteredIndex changes =======
  useEffect(() => {
    if (filteredIndex !== -1) {
      setFilteredRow(rows[filteredIndex]);
    }
  }, [filteredIndex]);
  

  const isMobile = useMediaQuery('(max-width: 767px)');
  const issmallMobile = useMediaQuery('(max-width: 425px)');

  return (
    <>
      
      {filteredRow && (
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
                <Typography variant="h4">{filteredRow.StudentName}</Typography>
                <Box>Admission No - {filteredRow.AdmNo}</Box>
                <Box>Class - {filteredRow.class}</Box>
              </Box>
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
                        <Box fontSize={16}>{filteredRow.AdmDate}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          JOINING DATE
                        </Box>
                        <Box fontSize={16}>{filteredRow.AdmDate}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          D.O.B
                        </Box>
                        <Box fontSize={16}>{filteredRow.DOB}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          GENDER
                        </Box>
                        <Box fontSize={16}>Male</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          MOBILE
                        </Box>
                        <Box fontSize={16}>8484937348, 5469354098</Box>
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
                        <Box fontSize={16}>{filteredRow.Studentcategory}</Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
           
                 {/* =============== Render Fee Details ===================== */}
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Fee Details
                  </Typography>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          PAY MODE
                        </Box>
                        <Box fontSize={16}>Bank</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          CONCESSION
                        </Box>
                        <Box fontSize={16}>Staff (Approval Based)</Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                 {/* =============== Render Sibling Details ===================== */}
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Sibling Details
                  </Typography>
                  <Divider />
                  <Box p={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <Box>
                        <CardMedia
                          sx={{ height: '60px', width: '60px', borderRadius: '50%', mr:'20px' }}
                          image={studentProfileDetails.StudentImage}
                          title="Student image"
                        />
                      </Box>
                      <Box>
                        <Typography variant="h4">Subham</Typography>
                        <Box>Admission No - 958504</Box>
                        <Box>Class/Section - VI</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              
            </Grid>
          </Grid>
        </Box>
      </MainCard>
      )}
    </>
  );
}

export default TransportPreview;