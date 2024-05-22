// ======= Page Owner Vikash =========
// ======= Render Bus Details Preview =========
import React, { useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Grid, Typography, useMediaQuery, Divider } from '@mui/material';
import { CardMedia } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import BusDetailsData from './Sample-BusDetailsData';
import { useParams } from 'react-router';
import documentData from './Sample-DocumentData';


function Preview() {
  let { id } = useParams();
  id = parseInt(id);

  const navigate = useNavigate();
  const BackClick = () => {
    navigate(`/erp/student-info-fee/transport/bus-details`);
  };

  const [filteredRow, setFilteredRow] = React.useState(null);
  useEffect(() => {
    const filteredBus = BusDetailsData.find((bus) => bus.id === id);
    if (filteredBus) {
      setFilteredRow(filteredBus);
    }
  }, [id]);

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
                <Typography variant="h4" sx={{ ml: '10px' }}>
                  Bus Details
                </Typography>

              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ borderRight: isMobile ? 'none' : '1px solid #ccc' }}>
                  {/* =============== Render Primary Details ===================== */}
                  <Box p={2}>
                    <Typography p={0.7} variant="h4">
                      Vehicle Details
                    </Typography>
                    <Divider />

                    <Box p={2}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            REGISTRATION NO.
                          </Box>
                          <Box fontSize={16}>{filteredRow.registrationNo}</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            CHASSIS NO
                          </Box>
                          <Box fontSize={16}></Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            REGISTRATION DATE
                          </Box>
                          <Box fontSize={16}>{filteredRow.registrationDate}</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            REGISTRATION VALIDITY
                          </Box>
                          <Box fontSize={16}></Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            ENGINE NO.
                          </Box>
                          <Box fontSize={16}>{filteredRow.engineNo}</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            SEATING CAPACITY
                          </Box>
                          <Box fontSize={16}>{filteredRow.seatingCapacity}</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            MFG DATE
                          </Box>
                          <Box fontSize={16}>{filteredRow.mgfDate} </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            EMI START DATE
                          </Box>
                          <Box fontSize={16}>{filteredRow.emiStartDate}</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            EMI END DATE
                          </Box>
                          <Box fontSize={16}>{filteredRow.emiEndDate}</Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>

                  {/* =============== Render Fee Details ===================== */}
                  <Box p={2}>
                    <Typography p={0.7} variant="h4">
                      Valid Upto
                    </Typography>
                    <Divider />
                    <Box p={2}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            POLLUTION
                          </Box>
                          <Box fontSize={16}>734957</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            FITNESS
                          </Box>
                          <Box fontSize={16}>5484456</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            INSURANCE
                          </Box>
                          <Box fontSize={16}>86943215</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            TRANSPORT
                          </Box>
                          <Box fontSize={16}>Bus</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            TEX RCT
                          </Box>
                          <Box fontSize={16}>4654558</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            NON TRANS
                          </Box>
                          <Box fontSize={16}>Non Trans</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Box pb={0.5} color={'#8b8989'}>
                            PERMIT
                          </Box>
                          <Box fontSize={16}>Permit</Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>

                  <Box p={2}>
                    <Typography p={0.7} variant="h4">
                      Documents
                    </Typography>
                    <Divider />
                    <Box p={2}>
                      <Grid container spacing={1}>
                        {documentData.map((document, id) => (
                          <Grid xs={12} sm={6} md={12} lg={6} key={id} sx={{ padding: '5px' }}>
                            <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', width:'100%' }}>
                              <CardMedia>
                                <img
                                  src={document.thumbnailUrl}
                                  alt={document.title}
                                  style={{ width: '60px', height: '60px', objectFit: 'contain', padding: '10px' }}
                                />
                              </CardMedia>
                              <Box>
                                <Typography gutterBottom variant="h4" component="div" color={'#8b8989'}>
                                  {document.title}
                                </Typography>

                                <a
                                  href={document.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ color: '#2196f3', textDecoration: '#000', fontWeight: '500' }}
                                >
                                  download
                                </a>
                              </Box>
                            </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>

                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    OWNER DEATILS
                  </Typography>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          NAME
                        </Box>
                        <Box fontSize={16}>{filteredRow.ownerName}</Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          BANK
                        </Box>
                        <Box fontSize={16}>{filteredRow.ownerBank}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          CONTACT
                        </Box>
                        <Box fontSize={16}>{filteredRow.ownerMobile}</Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          ACC NO.
                        </Box>
                        <Box fontSize={16}>{filteredRow.ownerAccNo}</Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    DRIVER DEATILS
                  </Typography>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          NAME
                        </Box>
                        <Box fontSize={16}>{filteredRow.driverName}</Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          AADHAR
                        </Box>
                        <Box fontSize={16}>{filteredRow.driverAadhar}</Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          MOBILE
                        </Box>
                        <Box fontSize={16}>{filteredRow.driverMobile}</Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          LICENSE
                        </Box>
                        <Box fontSize={16}>{filteredRow.driverLicense}</Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    CONDUCTOR DEATILS
                  </Typography>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          NAME
                        </Box>
                        <Box fontSize={16}>{filteredRow.conductorName}</Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          MOBILE
                        </Box>
                        <Box fontSize={16}>{filteredRow.conductorMobile}</Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    ATTENDANT DEATILS
                  </Typography>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          NAME
                        </Box>
                        <Box fontSize={16}>{filteredRow.attendantName}</Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          MOBILE
                        </Box>
                        <Box fontSize={16}>{filteredRow.attendantMobile}</Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    INCHARGE DEATILS
                  </Typography>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          NAME
                        </Box>
                        <Box fontSize={16}>{filteredRow.inchargeName}</Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          MOBILE
                        </Box>
                        <Box fontSize={16}>{filteredRow.inchargeMobile}</Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
}

export default Preview;
