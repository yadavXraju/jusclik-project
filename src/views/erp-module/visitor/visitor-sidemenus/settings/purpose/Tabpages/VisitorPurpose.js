import React from 'react';
// import ParamTable from 'views/erp-common-component/ParamTable';
// import Drawer from '@mui/material/Drawer';
// import DrawerContent from './DrawerContent';
// import CommonDataGrid from 'views/common-section/commonDataGrid';
import { initialRows,initialColumns } from '../../black-listed-visitor/common/VisitorData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {   GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {
  randomId,
} from '@mui/x-data-grid-generator';
import { useEffect } from 'react';

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}



const ParentsDiscussion = () => {
  const [rows, setRows] = React.useState(initialRows);
  const [columns,setColumns]=React.useState(initialColumns)
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
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
  useEffect(()=>{
    const updatedColumns=[...columns]
    
    updatedColumns.push( {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
  
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              key={`save-${id}`}
              label="Save"
              sx={{
                color: 'primary.main'
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              key={`cancel-${id}`}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          ];
        }
  
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            key={`edit-${id}`}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem icon={<DeleteIcon />} key={`delete-${id}`} label="Delete" onClick={handleDeleteClick(id)} color="inherit" />
        ];
      }
    })
    setColumns(updatedColumns)
  },[])
  return (
    <>
      {/* <ParamTable columns={tableHeadings} data={data} /> */}
      {/* <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent handleChange={handleChange} data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}"/>
      </Drawer> */}
      {/* <CommonDataGrid columns={columns} rows={rows} checkboxSelection={false} /> */}
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </>
  )
}

export default ParentsDiscussion;