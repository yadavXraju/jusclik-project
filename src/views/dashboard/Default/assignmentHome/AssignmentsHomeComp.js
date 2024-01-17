import React, { useState } from 'react';
import { Grid, Paper, Typography, styled ,  Box , IconButton , Tooltip , Button,} from '@mui/material';
import { gridSpacing } from 'store/constant';
import { data } from 'views/sidebar-menus/assignments/AssignmentData';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CreateIcon from '@mui/icons-material/Create';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { useNavigate } from 'react-router';
import { HeadingCss } from '../dashboard-css/CommonCss';



const StyledCheckbox = styled('input')(({ theme, checked }) => ({
  color: checked ? theme.palette.success.main : theme.palette.primary.main,
}));

const AssignmentsHomeComp = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  const handleCheckboxClick = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id)
        : [...prevSelectedItems, id]
    );

    setCompletedItems((prevCompletedItems) =>
      prevCompletedItems.includes(id)
        ? prevCompletedItems.filter((itemId) => itemId !== id)
        : [...prevCompletedItems, id]
    );
  };

  const navigate = useNavigate();
  // const IconStyle = {
  //   background :'#479eea',
  //   padding : '3px',
  //   borderRadius : '50%',
  //   border : '1px solid',
  //   color : '#fff'
  // }

  const AssignmentToShow = 5;

  return (
    <Grid spacing={gridSpacing}>
      <Grid item component={Paper} lg={12} md={12} sm={12} xs={12} sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: '24px' , border:'1px solid #80808026' }}>
        <Typography variant='h2' sx={{ textAlign: 'left', }} style={HeadingCss}>
         RECENT HOMEWORK & ASSIGNMENTS
        </Typography>


            {data.slice(0 , AssignmentToShow).map((item) => (
              <Grid container key={item.id} lg={12} sx={{ gap: '8px', borderBottom:'1px solid #80808040', paddingBottom:'10px'}}>
                  <Grid container lg={7} sx={{gap:'8px'}}>
                      <Grid item col={3} sx={{ display: 'flex', gap: '3px' }}>
                        <Grid
                          sx={{
                            background: completedItems.includes(item.id) ? theme => theme.palette.success.main : theme => theme.palette.primary.main,
                            width: '5px',
                            height: '100%',
                            borderRadius: '3px'
                          }}
                        ></Grid>

                        <StyledCheckbox
                          type='checkbox'
                          checked={selectedItems.includes(item.id)}
                          onClick={() => handleCheckboxClick(item.id)}
                        />
                      </Grid>

                        <Grid item col={9} sx={{display:'flex' , gap:'30px'}}>
                            <Box>
                                <Typography variant='body1' sx={{}}>
                                {item.description}
                              </Typography>

                              <Typography variant='body1' sx={{ color: '#99a1b7', fontWeight: '500', fontSize: '14px' }}>
                                {item.name}
                              </Typography>
                            </Box>

                            <Box>
                                <Typography variant='body1' sx={{ color: completedItems.includes(item.id) ? '#00e676' : '#99a1b7', fontWeight: '400', fontSize: '14px' , background : completedItems.includes(item.id) ? '#dfffea' : null}}>
                                {completedItems.includes(item.id) ? 'Complete' : 'In Process'}
                              </Typography>
                            </Box>

                      
                        </Grid>
                  </Grid>

                  <Grid container lg={4} sx={{gap:'14px' , alignItems:'center'}}>
                    {/* due date start*/}
                      <Box>
                        {/* <Typography variant='body1' sx={{}}>
                                  Due Date
                        </Typography> */}

                        <Typography variant='body1' sx={{}}>
                                      {item.dueDate}
                        </Typography>
                      </Box>

                      <Box>
                          <Tooltip title="Attachment" >
                                  <IconButton>
                                    <AttachmentIcon />
                                  </IconButton>
                          </Tooltip>


                          <Tooltip title="Edit">
                            <IconButton>
                              <CreateIcon />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Email" onClick={()=>navigate('../../communication/inbox')}>
                            <IconButton>
                              <MailOutlinedIcon  />
                            </IconButton>
                          </Tooltip>

                      </Box>

                    {/* due date end*/}
                  </Grid>


              </Grid>         
            ))}

            <Box sx={{px:3, textAlign:'right'}}>
                <Button variant="contained" onClick={() => navigate('/updates')}>
                  View More
                </Button>
            </Box>
      </Grid>
    </Grid>
  );
}

export default AssignmentsHomeComp;
