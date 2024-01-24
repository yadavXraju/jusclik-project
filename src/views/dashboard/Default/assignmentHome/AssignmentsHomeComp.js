import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box, IconButton, Tooltip, Button, Badge , useMediaQuery } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { data } from 'views/sidebar-menus/assignments/AssignmentData';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router';
import { HeadingCss, subTitle, subtitle2 } from '../dashboard-css/CommonCss';
import Checkbox from '@mui/material/Checkbox';
import Attcgment from 'views/sidebar-menus/assignments/Attcgment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { commonStyles } from 'views/sidebar-menus/communication-message/Contact-list';

const AssignmentsHomeComp = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const navigate = useNavigate();

  // checkbox id this is for identify 

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


  const AssignmentToShow = 5;

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const isMobile = useMediaQuery('(max-width: 767px)');


  // function from assignments

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {

    setSnackbarOpen(true); // Show a Snackbar notification
    setOpenDialog(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  
  return (
    <Grid spacing={gridSpacing}>
      <Grid item component={Paper} lg={12} md={12} sm={12} xs={12} sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: '24px' , border:'1px solid #80808026' }}>
        <Typography variant='h2' sx={{ textAlign: 'left', }} style={HeadingCss}>
          recent homework & assignments
        </Typography>

             {/* getting data and slicing */}
            {data.slice(0 , AssignmentToShow).map((item) => (
              <Grid container key={item.id} lg={12} sx={{ gap: '8px', borderBottom:'1px solid #80808024', paddingBottom:'10px'}}>
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

                         {/* checkbox */}

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
                      
                       {/* sub, date, title */}
                        <Grid item col={9} sx={{display:'flex' , gap:'30px' , alignItems:'center'}}>

                            <Box>
                                {/* subject and date*/}
                               <Typography variant='body1' style={subTitle}>
                                  {item.name} -  {item.date}
                              </Typography>

                               {/*description*/}

                              <Typography variant='body1' style={subtitle2}>
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

                  <Grid container lg={5} sx={{gap:'20px' , alignItems:'center', justifyContent:'end' , marginTop: isMobile ? '20px' : '0' }}>
            

                      <Box sx={{display:'flex', gap:'20px'}}>                          

                          {/* <Tooltip title="Attachment">
                            <IconButton onClick={handleOpenDialog}>
                                  <AttachmentIcon />
                             </IconButton>
                          </Tooltip> */}

                          <Badge badgeContent={item.attachmentNo} color="primary" >
                             <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
                                  <Tooltip title="Attachment">
                                    <IconButton onClick={handleOpenDialog} sx={{p:0}}>
                                        <AttachmentIcon  color="primary"/>
                                    </IconButton>
                                </Tooltip> 
                             </Box>
                          </Badge>


                          {/* <Tooltip title="Edit">
                            <IconButton>
                              <CreateIcon />
                            </IconButton>
                          </Tooltip> */}

                          <Badge color="primary" >
                             <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
                                  <Tooltip  title="Edit">
                                    <IconButton  sx={{p:0}}>
                                       <CreateIcon  color="primary" sx={{fontSize:'20px'}}/>
                                    </IconButton>
                                </Tooltip> 
                             </Box>
                          </Badge>

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
        <Attcgment isOpen={openDialog} onClose={handleCloseDialog} snackOpen={snackbarOpen} snackBarClose={handleSnackbarClose} />
    </Grid>
  );
}

export default AssignmentsHomeComp;
