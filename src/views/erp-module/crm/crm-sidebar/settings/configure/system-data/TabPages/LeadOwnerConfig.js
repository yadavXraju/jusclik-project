

// export default ParentsDiscussion;
import * as React from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  // randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
  randomEmail,
  randomDesk
} from '@mui/x-data-grid-generator';
import WarningDialog from 'views/common-section/WarningDialog';
const roles = ['Yes','No'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: randomId(),
    leadSource:randomEmail(),
    leadOwner: randomTraderName(),
    reminderMail:randomEmail(),
    Name: randomTraderName(),
    Signature:randomDesk(),
    phoneNumber: '9874523614',
    createdBy: 'Alice Johnson',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  {
    id: randomId(),
    leadSource:randomEmail(),
    leadOwner: randomTraderName(),
    reminderMail:randomEmail(),
    Name: randomTraderName(),
    Signature:randomDesk(),
    phoneNumber: '9874523614',
    createdBy: 'Alice Johnson',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  {
    id: randomId(),
    leadSource:randomEmail(),
    leadOwner: randomTraderName(),
    reminderMail:randomEmail(),
    Name: randomTraderName(),
    Signature:randomDesk(),
    phoneNumber: '9874523614',
    createdBy: 'Alice Johnson',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  {
    id: randomId(),
    leadSource:randomEmail(),
    leadOwner: randomTraderName(),
    reminderMail:randomEmail(),
    Name: randomTraderName(),
    Signature:randomDesk(),
    phoneNumber: '9874523614',
    createdBy: 'Alice Johnson',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  {
    id: randomId(),
    leadSource:randomEmail(),
    leadOwner: randomTraderName(),
    reminderMail:randomEmail(),
    Name: randomTraderName(),
    Signature:randomDesk(),
    phoneNumber: '9874523614',
    createdBy: 'Alice Johnson',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  {
    id: randomId(),
    leadSource:randomEmail(),
    leadOwner: randomTraderName(),
    reminderMail:randomEmail(),
    Name: randomTraderName(),
    Signature:randomDesk(),
    phoneNumber: '9874523614',
    createdBy: 'Alice Johnson',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  {
    id: randomId(),
    leadSource:randomEmail(),
    leadOwner: randomTraderName(),
    reminderMail:randomEmail(),
    Name: randomTraderName(),
    Signature:randomDesk(),
    phoneNumber: '9874523614',
    createdBy: 'Alice Johnson',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
];

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [modalOpen, setmodalOpen] =useState(false);
  const [isChangeEnable,setIsChangeEnable]=useState(-1);

  const handleModalClose = () => {
    setmodalOpen(false);
  };
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    if(isChangeEnable==-1){
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
      setIsChangeEnable(2);
    }
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    setIsChangeEnable(-1);
  };

  const handleDeleteClick = () => () => {
    // setRows(rows.filter((row) => row.id !== id));
    setmodalOpen(true);
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
  const handleConfirmDelete = () => {
    const updatedRows = tableRows.filter((row) => row.id !== deleteId);
    setTableRows(updatedRows);
    setmodalOpen(false);
    setdeleteId(null);
  };


  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
 
    {
      field: 'leadSource',
      headerName: 'Lead Owner Config',
      width: 180,
      editable: true,
      flex:1,
    },
    {
        field: 'leadOwner',
        headerName: 'Lead Owner',
        width: 180,
        editable: true,
        flex:1,
      },
      {
        field: 'reminderMail',
        headerName: 'Reminder Email',
        width: 180,
        editable: true,
        flex:1,
      },
     
      {
        field: 'Signature',
        headerName: 'Signature Designation',
        width: 180,
        editable: true,
        flex:1,
      },
      {
        field: 'phoneNumber',
        headerName: 'Signature Mobile',
        width: 180,
        editable: true,
        flex:1,
      },
   
    {
      field: 'createdBy',
      headerName: ' Created By',
      width: 180,
      editable: false,
      flex:1,
    },
    {
      field: 'createdOn',
      headerName: ' Created On',
      // type: 'date',
      // valueGetter: (params) => new Date(params.value),
      width: 180,
      editable: false,
      flex:1,
    },
    {
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
              key={`save-${id}`}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={`cancel-${id}`}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }
        
        return [
          <GridActionsCellItem
            key={`edit-${id}`}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={`delete-${id}`}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
    const handleClick = () => {
      setIsChangeEnable(2);
      const id = randomId();
      setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true,createdOn:'2023-04-07',createdBy:"Alice Johnson"}]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'leadSource' },
      }));

    };

  return (
    <GridToolbarContainer sx={{justifyContent:'end',paddingTop:'8px',paddingRight:'16px'}}>
    <Button  variant="outlined" color="primary" startIcon={<AddIcon />} onClick={handleClick}>
      Add record
    </Button>
  </GridToolbarContainer>
  );
}

  return (
    
   <>
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
       <WarningDialog
        open={modalOpen}
        onClose={handleModalClose}
        contentText="Are you sure you want to delete?"
        onConfirm={handleConfirmDelete}
        
       
      />
    </>
  );
}