import { Box, Paper, Table, TableHead, TableRow } from '@mui/material'
import React from 'react'

function RemarkTable() {
  return (
    <div>
      <Paper>
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                         Class
                        </TableCell>
                        <TableCell>
                         Exam
                        </TableCell>
                        <TableCell>
                         Status   
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </Box>
      </Paper>
    </div>
  )
}

export default RemarkTable
