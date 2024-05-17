// ConfigureGlobally.js
import React, { useState } from 'react';
import ConfigGloballyForm from './ConfigGloballyForm';
import { Grid, Button , Paper,TextField ,Table,TableBody , TableCell , TableContainer , TableHead , TableRow} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { configGlobally } from 'store/student-info-and-fee/settings/FeeStructureConfigure';
import WarningDialog from 'views/common-section/WarningDialog';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';


const ConfigureGlobally = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [editingRow, setEditingRow] = useState(null);
  const dispatch = useDispatch();
  const configGloballyData = useSelector((state) => state.configGloballyFormSlice.configGlobally);

  // Function to handle closing modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Function to handle deleting row
  const handleDeleteRow = (id) => {
    const row = configGloballyData.find((row) => row.id === id);
    setRowToDelete(row);
    setModalOpen(true);
    setEditingRow(null);
  };

  // Function to confirm row deletion
  const handleConfirmDelete = () => {
    if (rowToDelete) {
      const updatedData = configGloballyData.filter((row) => row.id !== rowToDelete.id);
      dispatch(configGlobally(updatedData));
      setEditingRow(null);
    }
    setRowToDelete(null);
    setModalOpen(false);
  };

  // Function to handle editing row
  const handleEditRow = (rowData) => {
    setEditingRow({ ...rowData });
  };

  // Function to save edited row
  const handleSaveRow = () => {
    if (editingRow) {
      const updatedData = configGloballyData.map((row) =>
        row.id === editingRow.id ? editingRow : row
      );
      dispatch(configGlobally(updatedData));
      setEditingRow(null);
    }
  };

// Function to handle changes in editable field
const handleFieldChange = (field, value) => {
  setEditingRow(prevRow => {
    if (field && !Array.isArray(value)) {
      // If the field is 'classes' and the new value is not an array, assign the current value
      return { ...prevRow, [field]: value };
    } else {
      // For other fields or if the value is an array, update normally
      return { ...prevRow, [field]: value };
    }
  });
};


  // Define table headings
  const TableHeading = [
    {
      id: 'srNo',
      tabHeading: 'Sr No.',
    },
    {
      id: 'feeHead',
      tabHeading: 'Fee Head',
    },
    {
      id: 'classes',
      tabHeading: 'Class',
    },
    {
      id: 'concessionType',
      tabHeading: 'Concession Type',
    },
    {
      id: 'amount',
      tabHeading: 'Amount',
    },
    // {
    //   id: 'action',
    //   tabHeading: 'Action',
    // },
  ];

  // Map data to render table rows
  const data = configGloballyData.map((item, index) => ({
    id: item.id,
    srNo: index + 1,
    feeHead: item.feeHead,
    classes: Array.isArray(item.classes) ? item.classes.join(', ') : item.classes,
    concessionType: item.concessionType,
    amount: item.amount,
  }));

  return (
    <>

    
      <Grid container spacing={4} sx={{ marginTop: '1rem' }}>
        <ConfigGloballyForm />
      </Grid>

      <Grid item xs={12} lg={12} sx={{ marginTop: '3rem' }}>
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
          <Table sx={{ width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ display: 'flex' }}>
                {TableHeading.map((field) => (
                  <>
                      <TableCell sx={{ flex: '0 0 16.67%' }} key={field.id}>
                        {field.tabHeading}
                      </TableCell>
                </>
                ))}
                
                <TableCell sx={{ flex: '0 0 16.67%' }}>
                     Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody className="scrollbar" sx={{ display: 'flex', maxHeight: '300px', flexDirection: 'column', overflowY: 'auto', paddingBottom: '20px', minHeight: '120px' }}>
              {data.map((rowData) => (
                <TableRow key={rowData.id} sx={{ display: 'flex', '&:last-child td, &:last-child th': { border: 0 } }}>
                  {TableHeading.map((field) => (
                    <TableCell sx={{ flex: '0 0 16.67%' }} key={field.id}>
                      {editingRow && editingRow.id === rowData.id && field.id !== 'action' ? ( // Check if the row is being edited and exclude action column
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
                  <TableCell sx={{ display: 'flex', alignItems:'center', gap: '15px', flex: '0 0 16.67%' }}>
                    {!editingRow || editingRow.id !== rowData.id ? (
                      <EditTwoToneIcon sx={{ cursor: 'pointer' }} onClick={() => handleEditRow(rowData)} />
                    ) : (
                      <Button  onClick={handleSaveRow}>
                        Save
                        </Button>
                    )}
                    <DeleteTwoToneIcon
                      sx={{ color: '#f19e9e', cursor: 'pointer' }}
                      onClick={() => handleDeleteRow(rowData.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
