// owned by san
// using for tesing purpose of the reuseableCrudgrid
import React, { useState } from 'react'
import CommonDataGrid from 'components/table-data-grid/DataGrid'
import { initialRows, columns } from './data'
import { Paper} from '@mui/material';
import {
  GridRowModes,
} from '@mui/x-data-grid';

const Test = () => {
  const [rows, setRows] = useState(initialRows);
  const [idToDelete, setIdToDelete] = useState(null);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleSaveClick = (id) => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => {
    setIdToDelete(id);
  };
  
  return (
    <div>
      <Paper>
        <CommonDataGrid
          rows={rows}
          setRows={setRows}
          columns={columns}
          allowEdit={true}
          allowDelete={true}
          rowModesModel={rowModesModel}
          setRowModesModel={setRowModesModel}
          idToDelete={idToDelete}
          setIdToDelete={setIdToDelete}
          customHandleDeleteClick={handleDeleteClick}
          customHandleSaveClick={handleSaveClick}   
          customAction={false}
          checkboxSelection={true}
        />
      </Paper>
    </div>
  )
}

export default Test;