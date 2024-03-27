import React, {useEffect} from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Grid, Typography, IconButton, Popover, useMediaQuery, Divider } from '@mui/material';
import PriviewTabs from './PreviewTabs';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useLocation } from 'react-router-dom';
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';
import { CardMedia } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
//import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import EditDrawer from './EditDrawer';
import rows from './AdmissionTableData';

function StudentPreview() {
  const location = useLocation();
  const { rowData } = location.state;

  const navigate = useNavigate();
  const BackClick = () => {
    navigate(`../admission`);
  };

  //const filteredRows = rows.filter(row => row.id === rowData.id);
  const [filteredIndex, setFilteredIndex] = React.useState(-1); // Initial state set to -1
  const [filteredRow, setFilteredRow] = React.useState(null);
  useEffect(() => {
    // Find the index of the filtered row
    const index = rows.findIndex(row => row.id === rowData.id);

    // Set filtered index and row
    if (index !== -1) {
      setFilteredIndex(index);
      setFilteredRow(rows[index]);
    }
  }, [rowData]);

  // Function to handle moving to the next row
  const handleNext = () => {
    if (filteredIndex < rows.length - 1) {
      setFilteredIndex(prevIndex => prevIndex + 1);
    }
  };

  // Function to handle moving to the previous row
  const handlePrevious = () => {
    if (filteredIndex > 0) {
      setFilteredIndex(prevIndex => prevIndex - 1);
    }
  };

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
            <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%', gap: issmallMobile ? '10px' : '0px' }}>
              <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                {/* <EditTwoToneIcon /> */}
                {/* ============ import edit drawer ============ */}
                <EditDrawer currEditItem={filteredRow} handleClick={() => {}}/>
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
                        <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Import Contact</Button>
                        <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Download Contact</Button>
                      </Typography>
                    </Popover>
                  </div>
                )}
              </PopupState>
              <ButtonGroup color="primary" variant="outlined" aria-label="Basic button group">
                <Button sx={{ padding: '5px' }}>
                  <ArrowBackIosOutlinedIcon onClick={handlePrevious}/>
                </Button>
                <Button sx={{ padding: '5px' }}>
                  <ArrowForwardIosOutlinedIcon onClick={handleNext}/>
                </Button>
              </ButtonGroup>
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
                      {/* <Grid item xs={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          Name
                        </Box>
                        <Box fontSize={16}>{filteredRow.StudentName}</Box>
                      </Grid> */}
                      {/* <Grid item xs={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          CLASS
                        </Box>
                        <Box fontSize={16}>{filteredRow.class}</Box>
                      </Grid> */}
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

                  {/* <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                    Name - {rowData.StudentName}
                  </Typography> */}
                </Box>
           
                 {/* =============== Render Fee Details ===================== */}
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Fee Details
                  </Typography>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={3}>
                      {/* <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          CATEGORY
                        </Box>
                        <Box fontSize={16}>General</Box>
                      </Grid> */}
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
              <PriviewTabs />
            </Grid>
          </Grid>
        </Box>
      </MainCard>
      )}
    </>
  );
}

export default StudentPreview;
