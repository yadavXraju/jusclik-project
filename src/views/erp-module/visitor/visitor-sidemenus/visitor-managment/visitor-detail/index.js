// ownedby sangeeta


import React,{useState} from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Grid, Typography, IconButton, Popover, useMediaQuery, Divider } from '@mui/material';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { CardMedia } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import RouteData from '../visitor-entry/VisitorData';




const VisitorDetails = ({index,rowDetails,setDetailVisible,setTableVisible}) => {
// for different screen

const isMobile = useMediaQuery('(max-width: 767px)');
const issmallMobile = useMediaQuery('(max-width: 425px)');

const rowData= rowDetails;
const visitorData=RouteData;

// const [currentIndex, setCurrentIndex] = useState(index);
const [filteredIndex, setFilteredIndex] = useState(index); // Initial state set to -1
const [updatedRow, setUpdatedRow] = useState(visitorData[index-1]);

// console.log(index,"index")
// console.log(updatedRow,"up")
// console.log(currentIndex,"xdds")

 
const nextVisitor=()=>{
  if (filteredIndex <= visitorData.length - 1 ) {
    setFilteredIndex(prevIndex => prevIndex + 1);
   if(filteredIndex ==  visitorData.length - 1){
    setFilteredIndex(prevIndex => prevIndex - 1);
   }
  }
  setUpdatedRow(visitorData[filteredIndex])
}

const prevVisitor=()=>{
  if (filteredIndex >0) {
    setFilteredIndex(prevIndex => prevIndex - 1);
   
  }
  setUpdatedRow(visitorData[filteredIndex])

}


// const currentVisitor = visitorData[currentIndex];


  if (! rowData ||  rowData.length === 0) {
    return <div>No visitor data found!</div>;
  }









// back function
const BackClick = () => {
  setDetailVisible(false);
  setTableVisible(true);
   };


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
                <ArrowBackOutlinedIcon onClick={BackClick}  sx={{ cursor: 'pointer' }} />
              </Box>
              <Box>
                <CardMedia
                  sx={{ height: '70px', width: '70px', borderRadius: '50%', m: '0px 15px' }}
                  image={updatedRow.avatarUrl}
                  title="Student image"
                />
              </Box>
              <Box>
                <Typography variant="h4">{updatedRow.VisitorName}</Typography>
                <Box></Box>
                <Box></Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%', gap: issmallMobile ? '10px' : '0px' }}>
              {/* <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
            
      
              </IconButton> */}
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
                  <ArrowBackIosOutlinedIcon  onClick={prevVisitor}  />
                </Button>
                <Button sx={{ padding: '5px' }}>
                  <ArrowForwardIosOutlinedIcon  onClick={nextVisitor}  />
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
  
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          VISITOR NUMBER
                        </Box>
                        <Box fontSize={16}>{updatedRow.id}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          VISTING DATE
                        </Box>
                        <Box fontSize={16}>{updatedRow.EntryDate}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                        STATUS
                        </Box>
                        <Box fontSize={16}>{updatedRow.status}</Box>
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
                        <Box fontSize={16}>{updatedRow.Phone}</Box>
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
                    </Grid>
                  </Box>

  
                </Box>
          

              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
            <Box p={2} sx={{ borderRight: isMobile ? 'none' : '1px solid #ccc' }}>
                {/* =============== Render Primary Details ===================== */}
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Other Details
                  </Typography>
                  <Divider />

                  <Box p={2}>
                    <Grid container spacing={3}>
  
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          VISITOR NAME
                        </Box>
                        <Box fontSize={16}>{updatedRow.VisitorName}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                        PURPOSE
                        </Box>
                        <Box fontSize={16}>{updatedRow.Purpose}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                        ACCOMPANY BY
                        </Box>
                        <Box fontSize={16}>{updatedRow.Accompaniedby}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                       ADDRESS
                        </Box>
                        <Box fontSize={16}>{updatedRow.Address}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                        TIME IN
                        </Box>
                        <Box fontSize={16}>{updatedRow.TimeIn}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                        TIME OUT
                        </Box>
                        <Box fontSize={16}>{updatedRow.TimeOut}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                            TO MEET
                        </Box>
                        <Box fontSize={16}>{updatedRow.ToMeet}</Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box pb={0.5} color={'#8b8989'}>
                          GATE PASS
                        </Box>
                        <Box fontSize={16}>{updatedRow.GatePass}</Box>
                      </Grid>

                    </Grid>
                  </Box>

  
                </Box>
          

              </Box>
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </>
  )
}

export default VisitorDetails
