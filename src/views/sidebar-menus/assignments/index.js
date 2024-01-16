// Assignments.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Tooltip,
  IconButton,

} from '@mui/material';


import DownloadIcon from '@mui/icons-material/Download';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreateIcon from '@mui/icons-material/Create';
import {
  // previous imports...
  previousAssignments,
  sortAssignmentsByDueDate,
  sortedUpcomingAssignments,  // <-- Commented out to resolve the warning
  getFormattedDate,  // <-- Commented out to resolve the warning
} from './UpcomingAndPrev';
import TabItem from './TabItem';
import Model from './Model';
import Attachment from './Attachment';
import useDialog from 'views/dashboard/Default/customHook/UseDialog';

const Assignments = () => {
  const [value, setValue] = useState('UPCOMING');
  const { open, handleOpen, handleClose } = useDialog();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleOpenDialog = () => {
  //   setOpenDialog(true);
  // };


  // const handleCloseDialog = () => {
  //   setOpenDialog(false);
  // };



  return (
    <Container maxWidth="xl" xs={12} style={{ marginTop: 20 }}>
      <Paper style={{ padding: 20 }}>
        <TabItem value={value} handleChange={handleChange} />
        <div className="tabs">
          {value === 'UPCOMING' && (
            <div className="panel">
              <Container maxWidth="xl" style={{ marginTop: 20 }}>
                <Paper elevation={2} style={{ marginBottom: 20, padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  <Grid container spacing={2} xs={12} alignItems="center">
                    <Grid item xs={4} md={3}>
                      <Typography variant="h5" color="primary">SUBJECT</Typography>
                    </Grid>
                    <Grid item xs={4} md={7}>
                      <Typography variant="h5" color="primary">TOPIC</Typography>
                    </Grid>
                    <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: "center" }}>
                      <Typography variant="h5" color="primary">ACTION</Typography>
                    </Grid>
                  </Grid>
                </Paper>
                {sortedUpcomingAssignments.map((item, index) => (
                  <Paper elevation={2} key={item.id} sx={{ padding: '0px 20px', marginBottom: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <Grid className='tab' container spacing={2} sx={{
                      borderLeft: `4px solid ${index % 2 == 0 ? 'rgb(237,231,246)' : 'rgb(144,202,249)'}`
                    }}>
                      <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <Typography variant="h4">{item.name}</Typography>
                        <Typography variant="subtitle2" color="textSecondary"> <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}><CalendarTodayIcon sx={{ width: "16px", height: "16px" }} />  {item.date && getFormattedDate(item.date)}</Grid> </Typography>
                        <Typography variant="subtitle2" color="textSecondary">Due Date: {item.dueDate && getFormattedDate(item.dueDate)}</Typography>
                      </Grid>
                      <Grid direction="row" alignItems="flex-start" justifyContent='flex-start' item xs={4} md={8} >
                        <Typography variant='h6'>{item.homework}</Typography>
                        <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}>
                          {/* <Tooltip title="Attachment">
                            <IconButton onClick={handleOpenDialog}>
                              <AttachmentIcon />
                            </IconButton>
                          </Tooltip> */}
                          <Attachment handleOpenDialog={handleOpen} />
                          <Tooltip title="Download">
                            <IconButton>
                              <DownloadIcon />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                      <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', mt: '10px' }}>

                        <Tooltip title="Download">
                          <IconButton>
                            <CreateIcon />
                          </IconButton>
                        </Tooltip>

                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </Container>
            </div>
          )}
          {value === 'PAST' && (
            <div className="panel">
              <Paper elevation={2} style={{ marginBottom: 20, padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5" color="primary">SUBJECT</Typography>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Typography variant="h5" color="primary">TOPIC</Typography>
                  </Grid>
                  <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h5" color="primary">ACTIONS</Typography>
                  </Grid>
                </Grid>
              </Paper>
              {sortAssignmentsByDueDate(previousAssignments).map((item, index) => (
                <Paper elevation={2} key={item.id} sx={{ padding: '0px 20px', marginBottom: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  <Grid container spacing={2} sx={{
                    borderLeft: `4px solid ${index % 2 === 0 ? 'rgb(237,231,246)' : 'rgb(144,202,249)'}`
                  }}
                  >
                    <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                      <Typography variant="h4">{item.name}</Typography>
                      <Typography variant="subtitle2" color="textSecondary"> <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}><CalendarTodayIcon sx={{ width: "16px", height: "16px" }} /> {item.date && getFormattedDate(item.date)}</Grid> </Typography>
                      <Typography variant="subtitle2" color="textSecondary">Due Date: {item.dueDate && getFormattedDate(item.dueDate)}</Typography>

                    </Grid>
                    <Grid direction="row" alignItems="flex-start" justifyContent='flex-start' item xs={12} md={8} >
                      <Typography variant='h6'>{item.homework}</Typography>
                      <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}>
                        {/* <Tooltip title="Attachment">
                          <IconButton onClick={handleOpenDialog}>
                            <AttachmentIcon />
                          </IconButton>
                        </Tooltip> */}
                      <Attachment handleOpenDialog={handleOpen} />
                        <Tooltip title="Download">
                          <IconButton>
                            <DownloadIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', mt: '10px' }}>

                      <Tooltip title="Edit">
                        <IconButton>
                          <CreateIcon />
                        </IconButton>
                      </Tooltip>

                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </div>
           )}
           </div>
         </Paper>
         <Model openDialog={open} handleCloseDialog={handleClose} />
       </Container>
     );
   };
   
   export default Assignments;