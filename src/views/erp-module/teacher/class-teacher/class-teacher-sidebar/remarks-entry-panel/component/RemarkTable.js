import { Box, Paper, Table, TableHead, TableRow,TableCell, TableBody,Grid,Typography,TableContainer} from '@mui/material'
import React from 'react'
import RemarkDrawer from '../RemarkDrawer/RemarkDrawer'

function RemarkTable() {
  return (
    <div>
      <Paper>
      <Grid container spacing={2} p={2} alignItems="end">
          <Grid item xs={12} sm={8} lg={8} >
            <div>
              <Typography variant="h3">Remark Entry</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} lg={4} >
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <RemarkDrawer/>
            </div>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <TableContainer component={Paper} className='scrollbar-2'>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Class</TableCell>
                  <TableCell>Exam</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </div>
  )
}

export default RemarkTable
