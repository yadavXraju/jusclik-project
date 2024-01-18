import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box, IconButton, Tooltip, Button, Badge } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { data } from 'views/sidebar-menus/assignments/AssignmentData';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router';
import { HeadingCss } from '../dashboard-css/CommonCss';
import Attachment from 'views/sidebar-menus/assignments/Attachment';
import Model from 'views/sidebar-menus/assignments/Model';
import useDialog from '../customHook/UseDialog';
import Checkbox from '@mui/material/Checkbox';
import { ListItemDecorator } from '@mui/joy';
import { commonStyles } from 'views/sidebar-menus/communication-message/Contact-list';

const AssignmentsHomeComp = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const navigate = useNavigate();

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

  // Load selected items from localStorage on component mount
  useEffect(() => {
    const storedSelectedItems = localStorage.getItem('selectedItems');
    const storedCompletedItems = localStorage.getItem('completedItems');

    if (storedSelectedItems) {
      setSelectedItems(JSON.parse(storedSelectedItems));
    }

    if (storedCompletedItems) {
      setCompletedItems(JSON.parse(storedCompletedItems));
    }
  }, []);

  // Save selected items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    localStorage.setItem('completedItems', JSON.stringify(completedItems));
  }, [selectedItems, completedItems]);


  const inputStyle = {
    borderRadius: '0',
    width: '0',
    height: '0',
  }

  // const navigate = useNavigate();


  const AssignmentToShow = 5;
  const { open, handleOpen, handleClose } = useDialog();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Grid spacing={gridSpacing}>
      <Grid item component={Paper} lg={12} md={12} sm={12} xs={12} sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: '24px' , border:'1px solid #80808026' }}>
        <Typography variant='h2' sx={{ textAlign: 'left', }} style={HeadingCss}>
         RECENT HOMEWORK & ASSIGNMENTS
        </Typography>


            {data.slice(0 , AssignmentToShow).map((item) => (
              <Grid container key={item.id} lg={12} sx={{ gap: '8px', borderBottom:'1px solid #80808040', paddingBottom:'10px'}}>
                  <Grid container lg={6} sx={{gap:'8px'}}>
                      <Grid item col={3} sx={{ display: 'flex', gap: '3px', alignItems:'center' }}   className="notchecked" >
                        <Grid
                          sx={{
                            background: completedItems.includes(item.id) ? theme => theme.palette.success.main : theme => theme.palette.primary.main,
                            width: '5px',
                            height: '100%',
                            borderRadius: '3px'
                          }}
                        ></Grid>

                         <Checkbox {...label} defaultChecked color="success"  style={inputStyle }
                          type='checkbox'
                          {...label} 
                          checked={selectedItems.includes(item.id)}
                          onClick={() => handleCheckboxClick(item.id)}
                          sx={{margin:'0 18px',transform:'scale(1.3) ',
                   
                          '&:not(.Mui-checked)': {
                            backgroundColor: '#f1f1f4',
                          },                
                          }}                           
                        />

                      </Grid>

                        <Grid item col={9} sx={{display:'flex' , gap:'30px'}}>
                            <Box>
                               <Typography variant='body1' sx={{}}>
                                  {item.name} -  {item.date}
                              </Typography>

                              <Typography variant='body1' sx={{ color: '#99a1b7', fontWeight: '500', fontSize: '14px' }}>
                              {item.description}  
                              </Typography>
                            </Box>

                            <Box>
                                <Typography variant='body1' sx={{ color: completedItems.includes(item.id) ? '#00e676' : '#2196f3', fontWeight: '400', fontSize: '14px' , background : completedItems.includes(item.id) ? '#ccffdd' : '#2196f32e' , padding:'0 4px'}}>
                                {completedItems.includes(item.id) ? 'Complete' : 'In Process'}
                              </Typography>
                            </Box>

                      
                        </Grid>
                  </Grid>

                  <Grid container lg={5} sx={{gap:'20px' , alignItems:'center', justifyContent:'end'}}>
            

                      <Box sx={{display:'flex', gap:'20px'}}>
                          
                           {/* <Badge badgeContent={item.attachmentNo} color="primary" >
                               <Attachment handleOpenDialog={handleOpen} />
                           </Badge> */}

                           <ListItemDecorator>
                              <Badge badgeContent={4} color="primary">
                                    <Box sx={{ ...commonStyles, borderColor: 'primary.main' }} onClick={()=>navigate('/communication/inbox')} >
                                        <Attachment handleOpenDialog={handleOpen}  />
                                    </Box>
                              </Badge>
                          </ListItemDecorator>


                          <Tooltip title="Edit">
                            <IconButton>
                              <CreateIcon />
                            </IconButton>
                          </Tooltip>

                          {/* <Tooltip title="Email" onClick={()=>navigate('../../communication/inbox')}>
                            <IconButton>
                              <MailOutlinedIcon  />
                            </IconButton>
                          </Tooltip> */}

                      </Box>

                    {/* due date end*/}
                  </Grid>
                  


              </Grid>         
            ))}

            <Box sx={{px:3, textAlign:'right'}}>
                <Button variant="contained" onClick={() => navigate('/assignments')}>
                  View More
                </Button>
            </Box>


      </Grid>
        <Model openDialog={open} handleCloseDialog={handleClose} />
    </Grid>
  );
}

export default AssignmentsHomeComp;
