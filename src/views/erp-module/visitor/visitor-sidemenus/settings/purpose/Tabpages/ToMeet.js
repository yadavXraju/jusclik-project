// import React from 'react';
// // import ParamTable from 'views/erp-common-component/ParamTable';
// // import Drawer from '@mui/material/Drawer';
// // import DrawerContent from './DrawerContent';
// // import CommonDataGrid from 'components/commonDataGrid';
// import { initialRows,initialColumns } from '../../black-listed-visitor/common/VisitorData';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import {   GridRowModes,
//   DataGrid,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridRowEditStopReasons,} from '@mui/x-data-grid';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import {
//   randomId,
// } from '@mui/x-data-grid-generator';
// import { useEffect , useState} from 'react';
// import WarningDialog from 'components/WarningDialog';

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//     }));
//   };

//   return (
//     <GridToolbarContainer sx={{justifyContent:'end',paddingTop:'8px',paddingRight:'16px'}}>
//       <Button  variant="outlined" color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }



// const ParentsDiscussion = () => {
//   const [rows, setRows] = React.useState(initialRows);
//   const [columns,setColumns]=React.useState(initialColumns)
//   const [rowModesModel, setRowModesModel] = React.useState({});
//   const [modalOpen, setmodalOpen] =useState(false);
 
  

  

//   const handleRowEditStop = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };
// const handleModalClose = () => {
//     setmodalOpen(false);
//   };
//   // const handleEditClick = (id) => () => {
//   //   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   // };

//   const handleSaveClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = () => () => {
//     // setRows(rows.filter((row) => row.id !== id));
//     setmodalOpen(true);
//   };

//   const handleCancelClick = (id) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };
//   useEffect(()=>{
//     const updatedColumns=[...columns]
    
//     updatedColumns.push( {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       width: 100,
//       cellClassName: 'actions',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
  
//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               key={`save-${id}`}
//               label="Save"
//               sx={{
//                 color: 'primary.main'
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               key={`cancel-${id}`}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />
//           ];
//         }
  
//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             key={`edit-${id}`}
//             label="Edit"
//             className="textPrimary"
//             // onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem icon={<DeleteIcon />} key={`delete-${id}`} label="Delete" onClick={handleDeleteClick(id)} color="inherit" />
//         ];
//       }
//     })
//     setColumns(updatedColumns)
//   },[])
//   return (
//     <>
//       {/* <ParamTable columns={tableHeadings} data={data} /> */}
//       {/* <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
//         <DrawerContent handleChange={handleChange} data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}"/>
//       </Drawer> */}
//       {/* <CommonDataGrid columns={columns} rows={rows} checkboxSelection={false} /> */}
//       <DataGrid
//         className='findcomp'
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowModesModelChange={handleRowModesModelChange}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         slots={{
//           toolbar: EditToolbar,
//         }}
//         slotProps={{
//           toolbar: { setRows, setRowModesModel },
//         }}
//         sx={{
//           '& .MuiInputBase-fullWidth fieldset':{
//             borderRadius: '0 !important'
//           }
//         }}
//       />

//         <WarningDialog
//         open={modalOpen}
//         onClose={handleModalClose}
//         contentText="Are you sure you want to delete?"
//         onConfirm={handleDeleteClick}
     
       
//       />
//     </>
//   )
// }

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
  // randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import WarningDialog from 'components/WarningDialog';
const roles = ['Head Master', 'Principal', 'Class Teacher'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: randomId(),
    Name: 'Saurabh Sharma',
  
    PhoneNumber: '9568471235',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  {
    id: randomId(),
    Name: 'Jane Smith',

    PhoneNumber: '9568471235',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  
  {
    id: randomId(),
    Name: 'Alice Johnson',
 
    PhoneNumber: '9568471235',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  {
    id: randomId(),
    Name: 'Bob Brown',

    PhoneNumber: '9568471235',
    createdOn: '2024-03-07',
    role: randomRole(),
  },
  {
    id: randomId(),
    Name: 'Rahul Yadav',
  
    PhoneNumber: '9568471235',
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
      field: 'Name',
      headerName: 'Name',
      width: 80,
      flex:1,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'role',
      headerName: 'To Meet',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Head Master', 'Principal', 'Class Teacher'],
      flex:1,
    },
    {
      field: 'PhoneNumber',
      headerName: ' Phone Number',
      // type: 'number',
      width: 180,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      flex:1,
      valueParser: (value) => {
        // Remove non-digit characters
        const newValue = value.replace(/\D/g, '');
        // Ensure only maximum of 10 digits
        return newValue.slice(0, 10);
      }
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
      setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true,createdOn:'2023-04-07'}]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
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