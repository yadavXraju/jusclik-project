import React from 'react';
import { Paper, Typography, Grid, Table, TableRow, TableCell, TableBody, Avatar, Box, TableHead, useMediaQuery } from '@mui/material';
import { HeadingCss } from 'component/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';

const RecentVisitors = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Updated dummy data for table rows (recent visitors) with purpose and type
  const recentVisitorsData = [
    {
      id: 1,
      visitorInfo: { name: 'Alice Smith', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
      entryTime: '10:30 AM',
      date:"03-04-2024",
      visitingPurpose: 'Meeting',
      visitorType: 'Employee',
    },
    {
      id: 2,
      visitorInfo: { name: 'Bob Johnson', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
      entryTime: '11:45 AM',
      date:"03-04-2024",
      visitingPurpose: 'Delivery',
      visitorType: 'Outsider',
    },
    {
      id: 3,
      visitorInfo: { name: 'Eve Williams', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
      entryTime: '2:15 PM',
      date:"02-04-2024",
      visitingPurpose: 'Interview',
      visitorType: 'Outsider',
    },
    {
      id: 4,
      visitorInfo: { name: 'Charlie Brown', avatarUrl: 'https://i.pravatar.cc/150?img=4' },
      entryTime: '4:00 PM',
      date:"01-04-2024",
      visitingPurpose: 'Consultation',
      visitorType: 'Outsider',
    },
    {
      id: 5,
      visitorInfo: { name: 'Grace Davis', avatarUrl: 'https://i.pravatar.cc/150?img=5' },
      entryTime: '5:30 PM',
      date:"01-04-2024",
      visitingPurpose: 'Maintenance',
      visitorType: 'Employee',
    },
  ];

  const sortedVisitorsData = [...recentVisitorsData]; // Sort by entry time, assuming latest entry is at the top

  return (
    <Paper spacing={gridSpacing} sx={{ display: 'flex', borderRadius: '12px', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)', boxShadow: '4px 4px 9px 2px #ddddddc2' }}>
      <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
        <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Recent Visitors</Typography>
      </Grid>
      <Grid container height="424px" className='scrollbar-2' sx={{ overflow: isMobile ? 'scroll' : 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Visitor Info</TableCell>
              <TableCell>Entry Time</TableCell>
              <TableCell>Visiting Date</TableCell>
              <TableCell>Visiting Purpose</TableCell>
              <TableCell>Visitor Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedVisitorsData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src={row.visitorInfo.avatarUrl} alt={row.visitorInfo.name} />
                    <Box ml={1}>
                      <Typography variant="h5">{row.visitorInfo.name}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <AccessTimeIcon fontSize='small' />
                    <Typography variant="body2" sx={{ ml: 1 , width: isMobile?"80px":"auto",}}>{row.entryTime}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <EventIcon fontSize='small' />
                    <Typography variant="body2" sx={{ ml: 1 , width: isMobile?"100px":"auto", }}>{row.date}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.visitingPurpose}</TableCell>
                <TableCell>{row.visitorType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Paper>
  );
}

export default RecentVisitors;
