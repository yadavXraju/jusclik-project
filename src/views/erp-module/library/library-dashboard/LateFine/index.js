import React from 'react'
import {Paper,Typography,Grid,Table, TableRow, TableCell, TableBody, Avatar,Box,TableHead} from '@mui/material'
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';
const LateFine  = () => {
  return (
    <>
       <Paper  elevation="3">
       <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Late Fine</Typography>
        </Grid>
        <Grid sx={{ padding: '0 20px' }} container spacing={gridSpacing}>
         <Table>
           <TableHead>
            <TableRow>
                <TableCell>Member Info</TableCell>
                <TableCell>Book Name</TableCell>
                <TableCell>Issue Date</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Return Date</TableCell>
                <TableCell>Fine</TableCell>
            </TableRow>
           </TableHead>
           <TableBody>
            <TableRow>
                <TableCell>
                   <Box sx={{display:"flex"}}>
                     <Box>
                         <Avatar variant="circular" src="" alt="" sx={{ width: '50px', height: '50px' }} />
                     </Box>
                     <Box> 
                        <Typography variant="body1" color="initial">Sangeeta</Typography>
                        <Typography variant="body1" color="initial">X -B</Typography>
                    </Box>

                   </Box>
                </TableCell>
                <TableCell>The world </TableCell>
                <TableCell>6-02-2024</TableCell>
                <TableCell>7-02-2024</TableCell>
                <TableCell>9-03-2024</TableCell>
                <TableCell>42 Rs</TableCell>
            </TableRow>
           </TableBody>
         </Table>
        </Grid>
       </Paper>
    </>
  )
}

export default LateFine
