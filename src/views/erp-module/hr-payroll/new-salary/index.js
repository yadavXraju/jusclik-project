// owned by san
// using for tesing purpose of the reuseableCrudgrid

import React from 'react'
import ReusableCrudGrid from 'components/table-data-grid/DataGrid'
import { initialRows, columns } from './data'
import { Paper, Box } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';




const Action2 = () => {
  return (
    <Box>
      <VisibilityRoundedIcon />
    </Box>
  )
}

const DrawerContent = () => {
  return (
    <Box>This is very good drawer</Box>
  )
}

const Test = () => {
  const { anchor, toggleDrawer } = useDrawer();

  const Action1 = () => {
    const tkp = (e) => {
      const instancetoggle=toggleDrawer('right',true);
      instancetoggle(e);
    }
    return (
        <VisibilityRoundedIcon onClick={tkp}/>
    )
  }
  const CustomActions = [
    <Action1 key={1} />,
    <Action2 key={1} />
  ]

  return (
    <div>
      <Paper>
        <ReusableCrudGrid
          rowsData={initialRows}
          columns={columns}
          isAllowEdit={false}
          isAllowDelete={true}
          CustomActions={CustomActions}
        />
      </Paper>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right',false)}>
        <DrawerContent />
      </Drawer>
    </div>
  )
}

export default Test;
