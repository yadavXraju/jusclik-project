import React from 'react';
import { Paper, Typography, Grid, Table, TableRow, TableCell, TableBody, Avatar, Box, TableHead, useMediaQuery, Stack } from '@mui/material';
import { HeadingCss } from 'components/dashboard/CommonCss'
import { gridSpacing } from 'store/constant';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const VendorContacts = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  // Dummy data for table rows
  const tableData = [
    {
      id: 1,
      company: { companyname: 'Radheshyam Enterprises' },
      personname: 'Shyam Singh',
      phone: '15874 89574',
    },
    {
      id: 2,
      company: { companyname: 'R.G. Foods Pvt. Ltd.' },
      personname: 'Rahul Gupta',
      phone: '58745 25684',
    },
    {
      id: 3,
      company: { companyname: 'PCPL, Chandigarh' },
      personname: 'Sundar Lal',
      phone: '98547 58740',
    },
    {
      id: 4,
      company: { companyname: 'Bansal Books Store' },
      personname: 'Prag Bansal',
      phone: '58749 58745',
    },
    {
      id: 5,
      company: { companyname: 'Sharma Utility Store' },
      personname: 'Gaurav Sharma',
      phone: '93147 56019',
    }
  ];

  const sortedTableData = [...tableData].sort((a, b) => b.fine - a.fine);
  return (
    <Paper
      spacing={gridSpacing}
      sx={{
        display: 'flex',
        borderRadius: '12px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid rgb(227, 227, 227)',
        boxShadow: '4px 4px 9px 2px #ddddddc2'
      }}
    >
      <Grid
        sx={{
          padding: '24px 24px 0 24px',
          background: '#f9f9fb',
          borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
          borderRadius: '12px 12px 0px 0'
        }}
      >
        <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
          Vendor Contacts
        </Typography>
      </Grid>
      <Grid container height="425px" className="scrollbar-2" sx={{ overflow: isMobile ? 'scroll' : 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Contact Person</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedTableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src={row.company.avatarUrl} alt={row.company.companyname} />
                    <Box ml={1}>
                      <Typography variant="h5">{row.company.companyname}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{row.personname}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <EmailOutlinedIcon color="primary" />
                    <ShoppingCartOutlinedIcon sx={{ color: '#2d324a' }} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Paper>
  );
};

export default VendorContacts;
