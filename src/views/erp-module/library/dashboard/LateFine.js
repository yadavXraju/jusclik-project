// Page Owner :  Sangeeta 
// Description : Late fine Widget

import React from 'react';
import { Paper, Typography, Grid, Table, TableRow, TableCell, TableBody, Avatar, Box, TableHead,useMediaQuery } from '@mui/material';

import { HeadingCss } from 'components/dashboard/CommonCss'
import { gridSpacing } from 'store/constant';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const LateFine = () => {


  const isMobile = useMediaQuery('(max-width: 767px)');

  // Dummy data for table rows
  const tableData = [
    {
      id: 1,
      memberInfo: { name: 'Sangeeta', class: 'X - B', avatarUrl: 'https://i.pinimg.com/564x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg' },
      bookName: 'The World',
      issueDate: '6-02-2024',
      dueDate: '7-02-2024',
      returnDate: '9-03-2024',
      fine: '54',
    },
    {
      id: 2,
      memberInfo: { name: 'John Doe', class: 'IX - A', avatarUrl: 'https://i.pinimg.com/564x/2c/bb/0e/2cbb0ee6c1c55b1041642128c902dadd.jpg' },
      bookName: 'Adventure Awaits',
      issueDate: '8-02-2024',
      dueDate: '9-02-2024',
      returnDate: '12-03-2024',
      fine: '45',
    },
    {
      id: 3,
      memberInfo: { name: 'Jane Smith', class: 'VIII - C', avatarUrl: 'https://i.pinimg.com/564x/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg' },
      bookName: 'Mystery of the Island',
      issueDate: '10-02-2024',
      dueDate: '11-02-2024',
      returnDate: '15-03-2024',
      fine: '32 ',
    },
    {
      id: 4,
      memberInfo: { name: 'Michael Johnson', class: 'VI - D', avatarUrl: 'https://i.pinimg.com/564x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg' },
      bookName: 'Coding Basics',
      issueDate: '12-02-2024',
      dueDate: '13-02-2024',
      returnDate: '17-03-2024',
      fine: '22',
    },
    {
      id: 5,
      memberInfo: { name: 'Emily Brown', class: 'XII - A', avatarUrl: 'https://i.pinimg.com/564x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg' },
      bookName: 'History Revisited',
      issueDate: '14-02-2024',
      dueDate: '15-02-2024',
      returnDate: '19-03-2024',
      fine: '38',
    },
   
  ];

  const sortedTableData = [...tableData].sort((a, b) => b.fine - a.fine);
  return (
    <Paper spacing={gridSpacing} sx={{ display: 'flex', borderRadius: '12px', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)', boxShadow: '4px 4px 9px 2px #ddddddc2' }} >
       <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Late Fine</Typography>
        </Grid>
        <Grid container height="424px" className='scrollbar-2' sx={{overflow: isMobile ? 'scroll' : 'hidden'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Member Info</TableCell>
                <TableCell>Book Name</TableCell>
                <TableCell >Issue Date</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Return Date</TableCell>
                <TableCell >Fine</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedTableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell >
                    <Box display="flex" alignItems="center">
                      <Avatar src={row.memberInfo.avatarUrl} alt={row.memberInfo.name} />
                      <Box ml={1}>
                        <Typography variant="h5">{row.memberInfo.name}</Typography>
                        <Typography variant="body2" sx={{color:"#36415296"}}>{row.memberInfo.class}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{row.bookName}</TableCell>
                  <TableCell>{row.issueDate}</TableCell>
                  <TableCell >{row.dueDate}</TableCell>
                  <TableCell>{row.returnDate}</TableCell>
                  <TableCell > <Box sx={{display:"flex",alignItems:"center"}}> <CurrencyRupeeIcon fontSize='12px'/> {row.fine} </Box></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </Grid>
    </Paper>
  );
}

export default LateFine;
