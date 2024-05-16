import React from 'react'
import ReusableCrudGrid from 'views/common-section/ReuseableCrudGrid'
import {  initialRows , columns} from './data'
import { Paper } from '@mui/material'
const Test = () => {
  return (
    <div>
      <Paper>
      <ReusableCrudGrid
      rowsData={initialRows}
      columns={columns}
    
      />
      </Paper>

    </div>
  )
}

export default Test
