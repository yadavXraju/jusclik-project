// ConfigureGlobally.js
import React, { useState } from 'react';
import ConfigGloballyForm from './ConfigGloballyForm';
import { Grid } from '@mui/material';
// import ConfigGloballyPreview from './ConfigureGloballyPreview';
import ReusableTable from 'views/erp-common-component/ParamTable';
import { useSelector, useDispatch } from 'react-redux';
import { configGlobally } from 'store/student-info-and-fee/settings/FeeStructureConfigure';
import WarningDialog from 'views/common-section/WarningDialog';

const ConfigureGlobally = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null); 
  const [editedData, setEditedData] = useState(null); // State for edited row
  const dispatch = useDispatch();
  const configGloballyData = useSelector((state) => state.configGloballyFormSlice.configGlobally);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDeleteRow = (id) => {
    const row = configGloballyData.find(row => row.id === id); // Use configGloballyData instead of TableData
    setRowToDelete(row);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (rowToDelete) {
      const updatedData = configGloballyData.filter(row => row.id !== rowToDelete.id); // Use configGloballyData instead of TableData
      dispatch(configGlobally(updatedData));
    }
    setRowToDelete(null); 
    setModalOpen(false);
  };

  const handleEditClick = (id, rowData) => {
    // Set the editedData state with the row data to be edited
    setEditedData(rowData);
  };

  const handleSaveClick = () => {
    if (!editedData) return; // Check if editedData is null
    // Filter out the edited row from the existing data and add the edited row
    const updatedData = configGloballyData.filter(row => row.id !== editedData.id).concat(editedData);
    
    // Dispatch action to update globally configured data with the updated data
    dispatch(configGlobally(updatedData));
    
    setEditedData(null); // Reset editedData state after saving
  };

  const TableHeading = [
    {
      id: 1,
      tabHeading: 'Sr No.',
    },
    {
      id: 2,
      tabHeading: 'Fee Head',
    },
    {
      id: 3,
      tabHeading: 'Class',
    },
    {
      id: 4,
      tabHeading: 'Concession Type',
    },
    {
      id: 5,
      tabHeading: 'Amount',
    },
    {
      id: '6',
      tabHeading: 'Action',
    },
  ];

  return (
    <>
      <Grid container spacing={4} sx={{ marginTop: '1rem' }}>
        <ConfigGloballyForm />
        {/* <ConfigGloballyPreview /> */}
      </Grid>

      <Grid item xs={12} lg={12} sx={{ marginTop: '3rem' }}>
        <ReusableTable
          columns={TableHeading}
          data={configGloballyData} // Use configGloballyData directly
          action={true}
          tablePaper={{ border: '1px solid rgba(224, 224, 224, 1)', maxHeight: '400px' }}
          tableStyle={{ paddingBottom: '5rem' }}
          onDeleteRow={handleDeleteRow}
          handleEditClick={handleEditClick}
          handleSaveClick={handleSaveClick}
        />
      </Grid>

      <WarningDialog
        open={modalOpen}
        onClose={handleModalClose}
        contentText="Are you sure you want to delete?"
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default ConfigureGlobally;
