import React from 'react'
import ContactTable from './LeadTable'
import { Card, Box, Typography } from '@mui/material'
import AddContactDrawer from './AddContactDrawer'

const Contact = () => {
  return (
    <>
    <Card sx={{padding:'16px'}}>
    <Box p={1} mb={2} sx={{ borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between' }}>
          <Box sx={{display:'flex', alignItems:'end'}}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
              Leads
            </Typography>
          </Box>
          <Box>
            <AddContactDrawer/>
          </Box>
        </Box>
    <ContactTable/>
    </Card>
    </>
  )
}

export default Contact