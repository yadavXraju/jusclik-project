// ======= Page Owner Vikash =========
// ========== Return Table For Admission Details =======

import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, IconButton, Button, Grid, TextField, InputAdornment} from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import AdmissionDrawer from './AdmissionDrawer';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import useDrawer from 'hooks/useDrawer';
import FilterStudents from 'views/erp-module/student-information-fee-management/reports/common-report-section/filter-and-sort/temp-Filter';
import WarningDialog from 'components/WarningDialog';
import CloseIcon from '@mui/icons-material/Close';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector } from 'react-redux';
import ChangeEnrolmentDrawer from './ChangeEnrolmentDrawer';

const Admission = () => {
  const { studentDetailsList } = useSelector((state) => state.admission);
  const navigate = useNavigate();
  const [tableRows, setTableRows] = React.useState(studentDetailsList);
  const [currEditItem, setCurrEditItem] = React.useState({});
  const { anchor, toggleDrawer } = useDrawer();
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);

  const handleSearchIconClick = () => {
    setExpanded(!expanded);
      // Clear search query when expanding the search bar
      setQuery('');
      filterRows('');
   };

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    filterRows(searchTerm);
  };

  const filterRows = (searchTerm) => {
    const filteredRows = studentDetailsList.filter(
      (row) =>
        row.AdmNo.toString().includes(searchTerm) ||
        row.StudentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.DOB.includes(searchTerm) ||
        row.Studentcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.House.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.Status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTableRows(filteredRows);
  };

  const Click = (rowData) => {
    navigate(`/erp/student-info-fee/student-master/admission/${rowData.id}`, { state: { rowData } });
    // navigate(`/erp/hr-payroll/employee-master/${rowData.id}`, { state: { rowData }});
  };

  // ========== function for handle Edit row ===========
  const handleEditClick = (editItem) => {
    setCurrEditItem(editItem);
  };

  // ========= render error model for duplicate date ==========
  const [modalOpen, setmodalOpen] = React.useState(false);
  const [deleteId, setdeleteId] = React.useState(null);

  const handleModalClose = () => {
    setmodalOpen(false);
  };

  const handleConfirmDelete = () => {
    const updatedRows = tableRows.filter((row) => row.id !== deleteId);
    setTableRows(updatedRows);
    setmodalOpen(false);
    setdeleteId(null);
  };

  // ========== function for handle delete row ===========
  const handleDeleteRow = (id) => {
    setdeleteId(id);
    setmodalOpen(true);
  };

  // ========= Data Grid Columns ==========
  const columns = [
    { field: 'AdmNo', headerName: 'Adm No.', type: 'number', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'AdmDate', headerName: 'Adm Date', flex: 1, minWidth: 130 },
    { field: 'StudentName', headerName: 'Name', flex: 1, minWidth: 130 },
    { field: 'class', headerName: 'Class', flex: 1, minWidth: 130 },
    { field: 'DOB', headerName: 'D.O.B', flex: 1, minWidth: 130 },
    { field: 'Studentcategory', headerName: 'Category', flex: 1, minWidth: 130 },
    { field: 'House', headerName: 'House', flex: 1, minWidth: 130 },
    { field: 'Status', headerName: 'Status', flex: 1, minWidth: 130 },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 130,
      renderCell: (params) => (
        <Box>
          <IconButton>
            <RemoveRedEyeTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
          </IconButton>
          <IconButton onClick={(event) => event.stopPropagation()}>
            {/* <EditTwoToneIcon onClick={handleEdit} /> */}
            <AdmissionDrawer editIcon={true} currEditItem={currEditItem} handleClick={() => handleEditClick(params.row)}/>
          </IconButton>
          <IconButton onClick={(event) => event.stopPropagation()}>
            <DeleteTwoToneIcon onClick={() => handleDeleteRow(params.row.id)} sx={{ color: '#f19e9e' }} />
          </IconButton>
        </Box>
      )
    }
  ];

  // =========== Custom style for filter ============
  const style = {
    customFilterContainerStyle: {
      position: 'relative',
      border: '1px solid #f0f5f8',
      width: '100%',
      height: 'calc(100vh - 112px)'
    },
    customSelectedFilter: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      top: '80px',
      width: '100%',
      height: 'calc(100vh - 200px)',
      overflowY: 'auto',
      backgroundColor: '#eef2f629',
      zIndex: '3'
    },
    customAvialbelFilter: {
      position: 'absolute',
      width: 'calc(100% - 20px)',
      overflowY: 'auto',
      zIndex: '5',
      backgroundColor: 'white',
      paddingLeft: '20px'
    },
    customClearFilter: {
      position: 'fixed',
      bottom: '0px',
      width: '600px',
      display: 'flex',
      justifyContent: 'flex-end',
      height: '60px',
      borderTop: '1px solid #f0f5f8',
      alignItems: 'center',
      gap: '20px',
      zIndex: '20'
    }
  };
  
  return (
    <>
      <Card>
       
        <Box sx={{ borderBottom: '1px solid #ccc'  }}>
          <Grid container spacing={2} p={2} sx={{ alignItems: 'end' }}>
            <Grid item xs={12} sm={6} lg={6}>
              <Box sx={{ paddingBottom: '0px' }}>
                <Typography variant="h4" sx={{ pb: '0px' }}>
                  Students List
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={6}>
              <Box style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                <AdmissionDrawer DrawerBtn={true} />

                <Box
                  sx={{
                    width: expanded ? '200px' : '60px',
                    marginRight: '10px',
                    display: 'flex',
                    justifyContent: 'end',
                    transition: 'width .8s'
                  }}
                >
                  <TextField
                    variant="outlined"
                    placeholder={expanded ? 'Search...' : null}
                    value={query}
                    onChange={handleSearchInputChange}
                    sx={{
                      '& div': {
                        height: '38px', // Set height to 50px for div inside TextField
                        background: '#ffffff'
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(33, 150, 243, 0.5)'
                        },
                        '&:hover fieldset': {
                          borderColor: '#429DF3' // Change outline color to blue on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#429DF3' // Change outline color to blue when focused
                        },

                        '& input': {
                          background: '#ffffff' // Set background color to red for input inside div
                        }
                      }
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleSearchIconClick} style={{ marginLeft: '-25px' }}>
                            {expanded ? (
                              <CloseIcon sx={{ color: '#429DF3', height: '20px' }} />
                            ) : (
                              <SearchOutlinedIcon sx={{ color: '#429DF3', height: '20px' }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Box>
                <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                  <FilterListRoundedIcon onClick={toggleDrawer('right', true)} />
                  <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
                    <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                        <Typography variant="h4">Filter</Typography>
                        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                          Close
                        </Button>
                      </Box>
                      <FilterStudents
                        customFilterContainerStyle={style?.customFilterContainerStyle}
                        customSelectedFilter={style?.customSelectedFilter}
                        customAvialbelFilter={style?.customAvialbelFilter}
                        customClearFilter={style?.customClearFilter}
                        applyFilter={1}
                      />
                    </Box>
                  </Drawer>
                </IconButton>

                <ChangeEnrolmentDrawer />
              </Box>
            </Grid>
          </Grid>
        </Box>
      
        <Box p={2} >
          <DataGrid
            rows={tableRows}
            columns={columns}
            onRowClick={(params) => Click(params.row)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 50 }
              }
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            checkboxSelection
          />
        </Box>
      </Card>
      {/* ========= import warning dialog ========== */}
      <WarningDialog
        open={modalOpen}
        onClose={handleModalClose}
        contentText="Are you sure you want to delete?"
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default Admission;

