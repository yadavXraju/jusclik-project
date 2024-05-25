// owned by sangeeta
import React from 'react';
import { Paper, Typography, Grid, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Chip, Avatar, 
  // useMediaQuery
 } from '@mui/material';
import { HeadingCss } from 'components/dashboard/CommonCss';

const UpcomingLeaves = () => {
  // const isMobile = useMediaQuery('(max-width: 767px)');

  // Dummy data for table rows
  const leavesData = [
    { img: "employee1.jpg", name: "John Doe", id: "001", department: "IT", date: "2024-04-20", days: 2, status: "Approved", reason: "Personal reasons for leave Per Per Per Per Per", type: "Casual" },
    { img: "employee2.jpg", name: "Jane Smith", id: "002", department: "HR", date: "2024-04-22", days: 3, status: "Pending", reason: "Family emergency", type: "Medical" },
    { img: "employee3.jpg", name: "Alice Johnson", id: "003", department: "Finance", date: "2024-04-25", days: 1, status: "Approved", reason: "Vacation", type: "Earn Leave" },
    { img: "employee3.jpg", name: "Alice Johnson", id: "004", department: "Finance", date: "2024-04-25", days: 1, status: "Approved", reason: "Medical appointment", type: "Medical" },
 
  ];

  return (
    <Paper elevation={3} sx={{ borderRadius: '12px', border: '1px solid rgb(227, 227, 227)', boxShadow: '4px 4px 9px 2px #ddddddc2' }}>
      <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
        <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Upcoming Leaves</Typography>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>No. of Days</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leavesData.map((leave, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <Avatar alt={leave.name} src={leave.img} />
                    </Grid>
                    <Grid item>
                      <div>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{leave.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{`ID: ${leave.id}`}</Typography>
                      </div>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>{leave.department}</TableCell>
                <TableCell>{formatDate(leave.date)}</TableCell>
                <TableCell>{leave.days}</TableCell>
                <TableCell>{truncateReason(leave.reason)}</TableCell>
                <TableCell>{leave.type}</TableCell>
                <TableCell>

                  
                  <Chip
                  
                    label={leave.status}
                    className={`status-${leave.status}`}
                    style={{
                      backgroundColor: getChipColor(leave.status),
                      fontWeight: 'bold',
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

// Function to format date as dd-mm-yyyy
const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}-${month}-${year}`;
};

// Function to get pastel light color for Chip based on status
const getChipColor = (status) => {
  switch (status) {
    case 'Approved':
      return '#DFFFEA'; // Light blue
    case 'Pending':
      return '#FFEEF3'; // Light orange
  
    default:
      return '#E0E0E0'; // Light grey
  }
};

// Function to truncate reason to a maximum of 30 words with an ellipsis if it exceeds that limit
const truncateReason = (reason) => {
  const words = reason.split(' ');
  if (words.length > 5) {
    return words.slice(0, 5).join(' ') + '...';
  }
  return reason;
};

export default UpcomingLeaves;
