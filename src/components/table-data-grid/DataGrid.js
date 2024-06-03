//@Page Owner:-Tarun Pandey

import React, { useState, useEffect } from 'react';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons,
  GridToolbarContainer,
} from '@mui/x-data-grid';
import { Button, Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { randomId } from '@mui/x-data-grid-generator';
import WarningDialog from '../WarningDialog';



const CommonDataGrid=({ rows, setRows, columns, onRowClick,onRowSelectionModelChange,rowSelectionModel,
  allowEdit = true, allowDelete = true, customAction=true,
  setIdToDelete, idToDelete,rowModesModel,setRowModesModel,
  checkboxSelection=true,customHandleDeleteClick,customHandleSaveClick }) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [isChangeEnable, setIsChangeEnable] = useState(-1);
  const [confirm, setConfirm] = useState(false);


  const handleModalClose = () => {
    setmodalOpen(false);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id)=> {
    if (isChangeEnable == -1) {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
      setIsChangeEnable(2);
    }
  };

  const handleCancelClick = (id) => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleSaveClick = (id) => {
    setIsChangeEnable(-1);
    customHandleSaveClick(id);
  }

  const handleDeleteClick = (id) => {
    setmodalOpen(true);
    customHandleDeleteClick(id);
  }


  const handleSetconfirm = () => {
    setConfirm(true);
    setmodalOpen(false);
  }

  useEffect(() => {
    if (confirm && idToDelete !== null) {
      // Filter out the row with the specified id
      setRows(prevRows => prevRows.filter(row => row.id !== idToDelete));
      // Reset idToDelete
      setIdToDelete(null);
      // Reset confirm
      setConfirm(false);
    }
  }, [confirm, idToDelete])


  const ActionsFields = ({ id }) => {
    return (
      <Box>
        {allowEdit && <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={()=>handleEditClick(id)}
          color="inherit" />}
        {allowDelete && <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={()=>handleDeleteClick(id)}
          color="inherit"
        />}
      </Box>
    )
  }


  let gridColumns = columns;
  if (!customAction&&(allowEdit||allowDelete)) {
    gridColumns = [
      ...gridColumns,
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: ({ id }) => {
          const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
          console.log(isInEditMode)
          if (isInEditMode) {
            return [
              <GridActionsCellItem
                key={`save-${id}`}
                icon={<SaveIcon />}
                label="Save"
                sx={{ color: 'primary.main' }}
                onClick={()=>handleSaveClick(id)}
              />,
              <GridActionsCellItem
                key={`cancel-${id}`}
                icon={<CancelIcon />}
                label="Cancel"
                className="textPrimary"
                onClick={()=>handleCancelClick(id)}
                color="inherit"
              />,
            ];
          }
          return [<ActionsFields key={`edit-${id}`} id={id} />]
        },
      },
    ];
  }

  const firstHeader = Object.keys(columns[0])[0];
  const fieldName = columns[0][firstHeader];
  const newRowObj = {};
  columns.forEach((item) => {
    const { field } = item;
    newRowObj[field] = '';
  })


  const EditToolbar = (props) => {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = randomId();
      newRowObj.id = id;
      setRows((oldRows) => [...oldRows, newRowObj]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: fieldName },
      }));
    };

    return (
      <GridToolbarContainer sx={{ justifyContent: 'end', paddingTop: '8px', paddingRight: '16px' }}>
        <Button variant="outlined" color="primary" startIcon={<AddIcon />} onClick={()=>handleClick()}>
          Add record
        </Button>
      </GridToolbarContainer>
    );
  }

  const toolbarComponent = customAction ? null : EditToolbar;

  return (
    <>
      <DataGrid
        rows={rows}
        columns={gridColumns}
        editMode="row"
        onRowClick={onRowClick}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        checkboxSelection={checkboxSelection}
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={onRowSelectionModelChange}
        slots={{
          toolbar: toolbarComponent
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
      <WarningDialog
        open={modalOpen}
        onClose={handleModalClose}
        contentText="Are you sure you want to delete?"
        onConfirm={() => { handleSetconfirm() }}
      />
    </>
  );
};

export default CommonDataGrid
