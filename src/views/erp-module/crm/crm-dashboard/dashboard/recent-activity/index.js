import React from 'react';
import { Grid, Paper, Typography, useMediaQuery, Table, TableContainer, TableBody, TableRow, TableCell, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss';
// import EmailIcon from '@mui/icons-material/Email';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const RecentActivity = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Sample recent activity data
  const recentActivityData = [
    { id: 1, content: "You have a new email from John Doe", time: "8:30 AM",update:"response given", date: "April 20, 2024" ,by:"John"},
    { id: 2, content: "Meeting reminder for today", time: "10:00 AM",update:"verified", date: "April 20, 2024",by:"John" },
    { id: 3, content: "Your order has been shipped", time: "11:45 AM",update:"verified", date: "April 20, 2024",by:"John" },
    { id: 4, content: "Check out our latest offers", time: "1:30 PM",update:"approced", date: "April 20, 2024" ,by:"John"},
    { id: 5, content: "New message from Jane Smith", time: "3:20 PM",update:"update", date: "April 20, 2024",by:"John" },
  ];

  return (
    <Paper
      spacing={gridSpacing}
      sx={{
        display: 'flex',
        borderRadius: '12px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid rgb(227, 227, 227)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
      }}
    >
      {/* Heading */}
      <Grid
        sx={{
          padding: '24px 24px 0 24px',
          background: '#f9f9fb',
          borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
          borderRadius: '12px 12px 0px 0',
        }}
      >
        <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
          Recent Activity
        </Typography>
      </Grid>


      {/* Content */}
      <Grid
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          paddingBottom: isMobile ? '10px' : '0px',
        }}
      >
        <TableContainer className='scrollbar' component={Paper} sx={{height:"305px"}}>
          <Table>
            <TableBody>
              {recentActivityData.map((mailData) => (
                <TableRow key={mailData.id}>
                  <TableCell>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Box sx={{border:"1px solid #57AFF4",borderRadius:"10px",padding:"4px",display:"flex",alignItem:"center",justifyContent:"center"}}>
                        < MailOutlineIcon sx={{color:"#57AFF4"}}/>
                        </Box>
                        
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Box display="" mx="" my="" sx="">
                      <Typography variant="body1"  color="initial" sx={{display:"flex"}}>{mailData.content} ,<Typography sx={{fontSize:"14px",fontWeight:"600",margingLeft:"15px"}}>{mailData.update}</Typography></Typography>
                    </Box>
                    </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="body1" color="initial">{mailData.time}</Typography>
                      <Typography variant="body1" color="initial">{mailData.date}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Paper>
  );
}

export default RecentActivity;
