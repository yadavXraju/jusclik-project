// owned by sangeeta

import React from 'react';
import { Paper, Grid, Typography, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Chip } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'components/dashboard-css/CommonCss';


const LeadInProcess = () => {
  // Sample leads data
  const leadsData = [
    { leadNo: 1, name: 'John Doe', company: 'Company A', status: 'In Progress', phone: '123-456-7890', followUp: '25-04-2024', source: "Website" },
    { leadNo: 2, name: 'Jane Smith', company: 'Company B', status: 'Pending', phone: '987-654-3210', followUp: '27-04-2024', source:"LinkedIn" },
    { leadNo: 3, name: 'Alice Johnson', company: 'Company C', status: 'Completed', phone: '555-555-5555', followUp: '30-04-2024', source: "Google"},
    { leadNo: 4, name: 'Michael Brown', company: 'Company D', status: 'In Progress', phone: '123-456-7890', followUp: '26-04-2024', source: "Advertisement" },
    { leadNo: 5, name: 'Sarah Wilson', company: 'Company E', status: 'Pending', phone: '987-654-3210', followUp: '28-04-2024', source: "Website" },
    { leadNo: 6, name: 'David Lee', company: 'Company F', status: 'Completed', phone: '555-555-5555', followUp: '01-05-2024', source: "Referral"},
    { leadNo: 7, name: 'Emily Miller', company: 'Company G', status: 'In Progress', phone: '123-456-7890', followUp: '27-04-2024', source: "LinkedIn" },
    { leadNo: 8, name: 'Daniel Garcia', company: 'Company H', status: 'Pending', phone: '987-654-3210', followUp: '29-04-2024', source: "Advertisement" },
    { leadNo: 9, name: 'Olivia Martinez', company: 'Company I', status: 'Completed', phone: '555-555-5555', followUp: '02-05-2024', source: "Website"},
    { leadNo: 10, name: 'James Brown', company: 'Company J', status: 'In Progress', phone: '123-456-7890', followUp: '28-04-2024', source: "Referral" },
    { leadNo: 11, name: 'Ava Taylor', company: 'Company K', status: 'Pending', phone: '987-654-3210', followUp: '30-04-2024', source: "Google" },
    { leadNo: 12, name: 'Ethan Clark', company: 'Company L', status: 'Completed', phone: '555-555-5555', followUp: '03-05-2024', source: "Advertisement" },
    { leadNo: 13, name: 'Mia Perez', company: 'Company M', status: 'In Progress', phone: '123-456-7890', followUp: '29-04-2024', source: "Website" },
    { leadNo: 14, name: 'Noah King', company: 'Company N', status: 'Pending', phone: '987-654-3210', followUp: '01-05-2024', source: "LinkedIn" },
    { leadNo: 15, name: 'Isabella Scott', company: 'Company O', status: 'Completed', phone: '555-555-5555', followUp: '04-05-2024', source: "Referral" }
    // Add more leads data as needed
  ];


  // Function to render status chip with different colors
  const renderStatusChip = (status) => {
    let backgroundColor, color;

    switch (status) {
      case 'In Progress':
        backgroundColor = '#90caf94a';
        color = '#90CAF9';
        break;
      case 'Pending':
        backgroundColor = '#FFF8E1';
        color = '#FFC107';
        break;
      case 'Completed':
        backgroundColor = '#D5FADF';
        color = '#5EC853';
        break;
      default:
        backgroundColor = '#D5FADF';
        color = '#000';
        break;
    }

    return <Chip label={status} color="default" style={{ backgroundColor, color }} />;
  };

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
      <Grid
        sx={{
          padding: '24px 24px 0 24px',
          background: '#f9f9fb',
          borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
          borderRadius: '12px 12px 0px 0',
        }}
      >
        <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
          Leads In Process
        </Typography>
      </Grid>

      {/* process-lead table */}
      <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
        <TableContainer  className='scrollbar' component={Paper}  sx={{height:"425px",overflow: 'hidden'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Lead No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell >Company</TableCell>
                <TableCell >Status</TableCell>
                <TableCell >Phone No.</TableCell>
                <TableCell>Next Follow Up</TableCell>
                <TableCell>Source</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leadsData.map((lead) => (
                <TableRow key={lead.leadNo}>
                  <TableCell component="th" scope="row">{lead.leadNo}</TableCell>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>{lead.company}</TableCell>
                  <TableCell>{renderStatusChip(lead.status)}</TableCell>
                  <TableCell>{lead.phone}</TableCell>
                  <TableCell>{lead.followUp}</TableCell>
                  <TableCell>{lead.source}</TableCell> {/* Add icon before source */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  );
}

export default LeadInProcess;
