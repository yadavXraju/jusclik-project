// owned by san
// using for tesing purpose of the reuseableCrudgrid

import React, { useState } from 'react'
import ReusableCrudGrid from 'components/table-data-grid/DataGrid'
import { initialRows, columns } from './data'
import { Paper, Box } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import {
  GridRowModes,
} from '@mui/x-data-grid';



const Action2 = ({ id }) => {
  console.log(id);
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
  const [modalOpen, setmodalOpen] = useState(false);
  const [rows, setRows] = useState(initialRows);
  const [isChangeEnable, setIsChangeEnable] = useState(-1);
  const [rowModesModel, setRowModesModel] = useState({});
  
  const Action1 = ({ id }) => {
    console.log("hello", id)
    const tkp = (e) => {
      const instancetoggle = toggleDrawer('right', true);
      instancetoggle(e);
    }
    return (
      <VisibilityRoundedIcon onClick={tkp} />
    )
  }

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    setIsChangeEnable(-1);
  };

  const handleDeleteClick = (id) => () => {
    setIdToDelete(id);
    setmodalOpen(true);
  };
  const CustomActions = [
    Action1,
    Action2
  ]

  return (
    <div>
      <Paper>
        <ReusableCrudGrid
          rowsData={initialRows}
          columns={columns}
          isAllowEdit={true}
          isAllowDelete={true}
          modalOpen={modalOpen}
          setmodalOpen={setmodalOpen}
          rows={rows}
          setRows={setRows}
          isChangeEnable={isChangeEnable}
          setIsChangeEnable={setIsChangeEnable}
          handleDeleteClick={handleDeleteClick}
          handleSaveClick={handleSaveClick}
          rowModesModel={rowModesModel}
          setRowModesModel={setRowModesModel}
        />
      </Paper>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent />
      </Drawer>
    </div>
  )
}

export default Test;