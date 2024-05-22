// page owner abhishek
// description : Component holds recent assignments and homework

import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box, IconButton, Tooltip, Button, Badge , useMediaQuery } from '@mui/material';
import { data } from 'views/erp-module/parent/parent-sidebar/assignments/AssignmentData';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router';
import { subTitle, subtitle2 } from 'views/common-section/dashboard-css/CommonCss';
import Checkbox from '@mui/material/Checkbox';
import Attachment from 'views/erp-module/parent/parent-sidebar/assignments/Attachment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { commonStyles } from 'views/erp-module/parent/parent-sidebar/communication-message/Contact-list';
import { boxHeight } from 'views/common-section/dashboard-css/CommonCss';
import useDialog from '../customHook/UseDialog';
import ParamWidgetHeader from 'views/common-section/ParamWidgetHeader';

const AssignmentsHomeComp = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
 
  // this function from assignment and  converted into custom hook 
  const { openDialog, snackbarOpen, handleOpenDialog , handleCloseDialog ,  handleSnackbarClose} = useDialog()

  const navigate = useNavigate();

  // checkbox id  for identify  which checkbox is  clicked
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
  

  // Sort the data array based on the 'date' property in descending order
  const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    < Paper>
      <ParamWidgetHeader title='Recent Homework & Assignments' />
      <Grid  sx={{ padding: '24px' }} style={boxHeight}>             {/* getting data and slicing */}
                  {sortedData.slice(0 , AssignmentToShow).map((item) => (
                    <Grid item container key={item.id} lg={12} sx={{ gap: '8px', borderBottom:'1px solid #80808024', paddingBottom:'10px',paddingTop:'24px'}}>
                      {/* left */}
                        <Grid container item lg={7} md={7} sx={{gap:'8px'}}>
                            <Grid item  sx={{ display: 'flex', flex: '0 0 10%' , gap: '3px', alignItems:'center' }}   className="notchecked" >

                              {/* blank div for verticle line */}
                              <Grid
                                sx={{
                                  background: completedItems.includes(item.id) ? theme => theme.palette.success.main : theme => theme.palette.primary.main,
                                  width: '5px',
                                  height: '100%',
                                  borderRadius: '3px'
                                }}
                              >

                              </Grid>

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
                            
                            {/* subject, date and status */}
                              <Grid item  sx={{display:'flex' ,  flex:  isMobile ? '0 0 100%'  :  '0 0 80%' , gap:'10%' , alignItems:'center'}}>

                            {/* this box is holding subject , date and description */}
                                  <Box sx={{flex : '0 0 60%'}}>
                                      {/* subject and date*/}
                                    <Typography variant='body1' style={subTitle}>
                                        {item.name} -  {item.date}
                                    </Typography>

                                    {/*description*/}

                                    <Typography variant='body1' style={subtitle2}>
                                    {item.description}  
                                    </Typography>
                                  </Box>

                            {/* this box is holding status */}

                                <Box sx={{flex : '0 0 30%'}}>
                                      <Typography variant='body1' sx={{ color: completedItems.includes(item.id) ? '#00e676' : '#2196f3', fontWeight: '400', display:'inline', fontSize: '14px' , background : completedItems.includes(item.id) ? '#ccffdd' : '#2196f32e' , padding:'0 4px'}}>
                                      {completedItems.includes(item.id) ? 'Complete' : 'In Process'}
                                    </Typography>
                                </Box>

                            
                              </Grid>
                        </Grid>

                        {/* right */}
                        <Grid container item lg={4} md={4} sx={{gap:'20px' , alignItems:'center', justifyContent:'end' , marginTop: isMobile ? '20px' : '0' }}>
                  

                            <Box sx={{display:'flex', gap:'20px'}}>                          

                      

                                <Badge badgeContent={item.attachmentNo} color="primary" >
                                  <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
                                        <Tooltip title="Attachment">
                                          <IconButton onClick={handleOpenDialog} sx={{p:0}}>
                                              <AttachmentIcon  color="primary"/>
                                          </IconButton>
                                      </Tooltip> 
                                  </Box>
                                </Badge>


                    

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

                  <Box sx={{px:3, textAlign:'right',paddingTop:'16px'}}>
                      <Button variant="contained" onClick={() => navigate('/parent/assignments')}>
                        View More
                      </Button>
                  </Box>

      </Grid>
      <Attachment isOpen={openDialog} onClose={handleCloseDialog} snackOpen={snackbarOpen} snackBarClose={handleSnackbarClose} />
    </Paper>
  );
}

export default AssignmentsHomeComp;
