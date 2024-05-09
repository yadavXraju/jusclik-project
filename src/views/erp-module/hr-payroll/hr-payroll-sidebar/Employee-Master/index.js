import React from 'react'
import { Card, Box, Typography } from '@mui/material'
import EmployeeTable from './EmployeeTable'
// import EmployeeDrawer from './AddEmployeeDrawer'

const EmployeeMaster = () => {
  return (
    <>
    <Card sx={{padding:'16px'}}>
    <Box p={1} mb={2} sx={{ borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between' }}>
          <Box sx={{display:'flex', alignItems:'end'}}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
              Employee Master
            </Typography>
          </Box>
          <Box>
            {/* <EmployeeDrawer/> */}
          </Box>
        </Box>
        <EmployeeTable/>
    </Card>
    </>
  )
}

export default EmployeeMaster