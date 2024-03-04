import React from 'react'
import SetupTabs from './Setup'
import { Card } from '@mui/material'
import SystemDataActionbar from './SystemDataActionbar'


const SystemData = () => {
  return (
    <>
    <Card>
      <SystemDataActionbar/>
      <SetupTabs/>
    </Card>
    </>
  )
}

export default SystemData