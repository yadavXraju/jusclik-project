//@Page Onwer:-Tarun Pandey
import React, { useState, useEffect } from 'react';
import {
    DataGrid,
    GridActionsCellItem,
    GridRowModes,
    GridRowEditStopReasons,
    GridToolbarContainer,
} from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { randomId } from '@mui/x-data-grid-generator';
import WarningDialog from '../WarningDialog';



const CustomDataGrid = ({ 
    modalOpen, setmodalOpen,
    isChangeEnable,handleDeleteClick,setIsChangeEnable,handleSaveClick,
    rows, setRows, columns, CustomActions,
    isAllowEdit, isAllowDelete,rowModesModel,setRowModesModel }) => {
   
    const [confirm, setConfirm] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const handleModalClose = () => {
        setmodalOpen(false);
    };

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        if (isChangeEnable == -1) {
            setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
            setIsChangeEnable(2);
        }
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
                {!CustomActions && (
                    <>
                        {isAllowEdit && (
                            <GridActionsCellItem
                                icon={<EditIcon />}
                                label="Edit"
                                className="textPrimary"
                                onClick={handleEditClick(id)}
                                color="inherit"
                            />
                        )}
                        {isAllowDelete && (
                            <GridActionsCellItem
                                icon={<DeleteIcon />}
                                label="Delete"
                                onClick={handleDeleteClick(id)}
                                color="inherit"
                            />
                        )}
                    </>
                )}
                {CustomActions && CustomActions.map((Action, index) =>
                    <Action key={index} id={id} />
                )}
            </Box>
        );
    };


    const gridColumns = [...columns,
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
                        sx={{ color: 'primary.main' }}
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
            return [<ActionsFields key={id} id={id} />]
        }
    },
    ];


    const firstHeader = Object.keys(columns[0])[0];
    const fieldName = columns[0][firstHeader];
    const newRowObj = {};
    columns.forEach((item) => {
        const { field } = item;
        console.log(field);
        newRowObj[field] = '';
    })


    function EditToolbar(props) {
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
                <Button variant="outlined" color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                    Add record
                </Button>
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <DataGrid
                rows={rows}
                columns={gridColumns}
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
                onConfirm={() => { handleSetconfirm() }}
            />
        </>
    );
};

export default CustomDataGrid;
