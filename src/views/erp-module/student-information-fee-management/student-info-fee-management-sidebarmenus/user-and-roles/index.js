import React from 'react'
import UserAndRole from './UserAndRole'
import { Card } from '@mui/material'
import InviteUserDrawer from './InviteUserDrawer'
import {Box}from '@mui/material'

const UserRole = () => {
  return (
    <>
    <Card sx={{padding:'10px'}}>
      <Box sx={{display:'flex', justifyContent:'end'}}>
      <InviteUserDrawer/>
      </Box>
      <UserAndRole/>
    </Card>
    </>
  )
}

export default UserRole