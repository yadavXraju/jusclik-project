// owned by san
// using for tesing purpose of the reuseableCrudgrid

import React from 'react'
import ReusableCrudGrid from 'component/ReuseableCrudGrid'
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
