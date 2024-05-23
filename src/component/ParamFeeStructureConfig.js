// Page Owner : Abhishek
// Description : fee structure in stufee 

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Paper, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import WarningDialog from 'component/WarningDialog';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

const ParamFeeStructureConfig = ({
  data,
  tableHeadings,
  onSaveRow,
  onDeleteRow,
  children,
  tablColumnWidth
}) => {
  // State variables
  const [modalOpen, setModalOpen] = useState(false); 
  const [rowToDelete, setRowToDelete] = useState(null); 
  const [editingRow, setEditingRow] = useState(null); 

  // Event Handlers
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDeleteRow = (row) => {
    setRowToDelete(row); // Set the row to be deleted
    setModalOpen(true); // Open confirmation modal
    setEditingRow(null); // Reset  editing state
  };

  const handleConfirmDelete = () => {
    if (rowToDelete) {
      onDeleteRow(rowToDelete); // Call the onDeleteRow function with the row to be deleted
      setEditingRow(null); // Reset the editing state
    }
    setRowToDelete(null); // Reset the row to be deleted
    setModalOpen(false); // Close the deletion confirmation modal
  };

  const handleEditRow = (rowData) => {
    setEditingRow({ ...rowData }); // Set the row being edited
  };

  const handleSaveRow = () => {
    if (editingRow) {
      onSaveRow(editingRow); // Call the onSaveRow function with the edited row
      setEditingRow(null); // Reset the  state
    }
  };

  const handleFieldChange = (field, value) => {
    // Update the value of the field being edited in the editingRow state
    setEditingRow((prevRow) => ({
      ...prevRow,
      [field]: value,
    }));
  };

  // Rendering
  return (
    <>
      {/* Container for children */}
      <Grid container spacing={4} sx={{ marginTop: '1rem' }}>
         {children}
      </Grid>

      {/* Table Container */}
      <Grid item xs={12} lg={12} sx={{ marginTop: '3rem' }}>
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
          <Table sx={{ width: '100%' }} aria-label="simple table">
            {/* Table Head */}
            <TableHead>
              <TableRow sx={{ display: 'flex' }}>
                {tableHeadings.map((field) => (
                  <TableCell sx={{ flex: '0 0 16.67%' ,...tablColumnWidth}} key={field.id}>
                    {field.tabHeading}
                  </TableCell>
                ))}
                <TableCell  sx={{ flex: '0 0 16.67%',...tablColumnWidth }}>Action</TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody className="scrollbar" sx={{ display: 'flex', maxHeight: '300px', flexDirection: 'column', overflowY: 'auto', paddingBottom: '20px', minHeight: '120px' }}>
              {data.map((rowData) => (
                <TableRow key={rowData.id} sx={{ display: 'flex', '&:last-child td, &:last-child th': { border: 0 } }}>
                  {tableHeadings.map((field) => (
                    <TableCell sx={{ flex: '0 0 16.67%',...tablColumnWidth }} key={field.id}>
                      {/* Render text field if editing, otherwise display original data */}
                      {editingRow && editingRow.id === rowData.id && field.id !== 'action' ? (
                        <TextField
                          fullWidth
                          value={editingRow[field.id]}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                        />
                      ) : (
                        rowData[field.id]
                      )}
                    </TableCell>
                  ))}
                  {/* Actions */}
                  <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '15px', flex: '0 0 16.67%',...tablColumnWidth }}>
                    {/* Edit icon or Save button */}
                    {!editingRow || editingRow.id !== rowData.id ? (
                      <EditTwoToneIcon sx={{ cursor: 'pointer' }} onClick={() => handleEditRow(rowData)} />
                    ) : (
                      <Button onClick={handleSaveRow}>Save</Button>
                    )}
                    {/* Delete icon */}
                    <DeleteTwoToneIcon
                      sx={{ color: '#f19e9e', cursor: 'pointer' }}
                      onClick={() => handleDeleteRow(rowData)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* Warning Dialog for delete confirmation */}
      <WarningDialog
        open={modalOpen}
        onClose={handleModalClose}
        contentText="Are you sure you want to delete?"
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

// PropTypes
ParamFeeStructureConfig.propTypes = {
  data: PropTypes.array.isRequired,
  tableHeadings: PropTypes.array.isRequired,
  onSaveRow: PropTypes.func.isRequired,
  onDeleteRow: PropTypes.func.isRequired,
};

export default ParamFeeStructureConfig;


// how to use

{/* <ParamFeeStructureConfig
      data={data}
      tableHeadings={tableHeadings}
      onSaveRow={handleSaveRow}
      onDeleteRow={handleDeleteRow}
    >
      <ConfigGloballyForm />    ===   children comp
    </ParamFeeStructureConfig> */}