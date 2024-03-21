import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Grid, Typography, IconButton, Popover, useMediaQuery } from '@mui/material';
import PriviewTabs from './PreviewTabs';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useLocation } from 'react-router-dom';
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails';
import {CardMedia} from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

function StudentPreview() {
  const location = useLocation();
  const { rowData } = location.state;

  const navigate = useNavigate();
  const BackClick = () => {
    navigate(`../admission`);
  };

  const isMobile = useMediaQuery('(max-width: 767px)')
  const issmallMobile = useMediaQuery('(max-width: 425px)')

  return (
    <>
      <MainCard>
        <Box>
          <Box pb={1} sx={{ display: 'flex', justifyContent: 'space-between',flexWrap: issmallMobile ? 'wrap' : 'nowrap', borderBottom: '1px solid #ccc', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width:'100%' }}>
              <Box><ArrowBackOutlinedIcon onClick={BackClick} sx={{cursor:'pointer'}}/></Box>
              <Box>
                <CardMedia
                  sx={{ height: '50px', width: '50px', borderRadius: '50%', m: '0px 15px' }}
                  image={studentProfileDetails.StudentImage}
                  title="Student image"
                />
              </Box>
              <Box>
                <Typography variant="h4">{rowData.StudentName}</Typography>
                <Box>Admission No - {rowData.AdmNo}</Box>
              </Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:'end', width:'100%', gap: issmallMobile ?'10px' : '0px'}}>
            <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
              <EditTwoToneIcon/>
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
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
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
                <Button sx={{padding:'5px'}}>
                  <ArrowBackIosOutlinedIcon />
                </Button>
                <Button sx={{padding:'5px'}}>
                  <ArrowForwardIosOutlinedIcon />
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box p={2} sx={{ borderRight: isMobile ? 'none' : '1px solid #ccc' }}>
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Basic Info
                  </Typography>
                  <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                    Name - {rowData.StudentName}
                  </Typography>
                  <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                    Class - {rowData.class}
                  </Typography>
                  <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                    D.O.B - {rowData.DOB}
                  </Typography>
                  <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                    Adm. Date - {rowData.AdmDate}
                  </Typography>
                  <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                    Category - {rowData.Studentcategory}
                  </Typography>
                </Box>

                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Description
                  </Typography>
                  <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                    This is a sample Contact.
                  </Typography>
                </Box>

                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Other Info
                  </Typography>
                  <Typography p={0.7} sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} variant="body2"></Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <PriviewTabs />
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </>
  );
}

export default StudentPreview;
