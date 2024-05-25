// ======= Page Owner Vikash =========
// ======= Leave Application Table =========
import React, { useState, useEffect } from 'react';
import {
  Card,
  Box,
  IconButton,
  Tooltip,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Alert
} from '@mui/material';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CommonDataGrid from 'components/table-data-grid/commonDataGrid';
import CloseIcon from '@mui/icons-material/Close';
import rows from './LeaveTableData';

const LeaveTable = () => {
  const [tableRows, setTableRows] = useState(rows);
  const [selectedRows, setSelectedRows] = useState([]);
  const [action, setAction] = useState(null);
  const [warning, setWarning] = useState(false);

  const handleApproveLeave = (id) => {
    setSelectedRows([id]);
    setAction('approve');
  };

  const handleRejectLeave = (id) => {
    setSelectedRows([id]);
    setAction('reject');
  };

  const handleSelectionChange = (selectionModel) => {
    setSelectedRows(selectionModel);
    const selectedNames = selectionModel.map((id) => {
      const selectedRow = rows.find((row) => row.id === id);
      return `${selectedRow?.id || ''} ${selectedRow?.empName || ''}`;
    });
    console.log('Selected names:', selectedNames);
  };

  const handleConfirmAction = () => {
    if (action === 'approve') {
      setTableRows(tableRows.map((row) => (selectedRows.includes(row.id) ? { ...row, status: 'Approved' } : row)));
    } else if (action === 'reject') {
      setTableRows(tableRows.map((row) => (selectedRows.includes(row.id) ? { ...row, status: 'Rejected' } : row)));
    }
    setSelectedRows([]);
    setAction(null);
  };

  const handleCancel = () => {
    setSelectedRows([]);
    setAction(null);
  }

  // ========== Auto Remove Warning Alert ========
  useEffect(() => {
    let timer;
    if (warning) {
      timer = setTimeout(() => {
        setWarning(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [warning]);

  const columns = [
    { field: 'empCode', headerName: 'Emp. Code', flex: 1, minWidth: 130 },
    { field: 'empName', headerName: 'Emp. Name', flex: 1, minWidth: 130 },
    { field: 'department', headerName: 'Department', flex: 1, minWidth: 130 },
    { field: 'applicationNo', headerName: 'Application No', flex: 1, minWidth: 130 },
    { field: 'leaveType', headerName: 'Leave Type', flex: 1, minWidth: 130 },
    { field: 'applicationDate', headerName: 'App. Date', flex: 1, minWidth: 130 },
    { field: 'planned', headerName: 'Planned/Unplanned', flex: 1, minWidth: 130 },
    { field: 'applied', headerName: 'Applied', flex: 1, minWidth: 130 },
    { field: 'status', headerName: 'Status', flex: 1, minWidth: 130 },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 130,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box onClick={(event) => event.stopPropagation()}>
          <Tooltip title="Approve">
            <IconButton onClick={() => handleApproveLeave(params.row.id)}>
              <CheckCircleTwoToneIcon sx={{ color: '#70cf80a3' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reject">
            <IconButton onClick={() => handleRejectLeave(params.row.id)}>
              <CancelTwoToneIcon sx={{ color: '#e18b8b85' }} />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];

  return (
    <>
      <Card sx={{ padding: '16px' }}>
        <Box p={1} mb={2} sx={{ borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
              Pending Leaves For Approvals
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{ marginRight: '8px' }}
            variant="contained"
            onClick={() => {
              if (selectedRows.length === 0) {
                console.log('Please select rows first.');
                setWarning(true);
              } else {
                setAction('approve');
              }
            }}
          >
            Approve
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              if (selectedRows.length === 0) {
                console.log('Please select rows first.');
                setWarning(true);
              } else {
                setAction('reject');
              }
            }}
          >
            Reject
          </Button>
          {/* ========= Warning Alert box ========== */}
          {warning === true && (
            <Box mt={2}>
              <Alert
                severity="info"
                action={
                  <IconButton aria-label="close" color="inherit" size="small" onClick={() => setWarning(false)}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Please select rows first.
              </Alert>
            </Box>
          )}
        </Box>

        <Box mt={2}>
          <CommonDataGrid
            rows={tableRows}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 50 } }
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            checkboxSelection
            disableRowSelectionOnClick
            rowSelectionModel={selectedRows}
            onRowSelectionModelChange={handleSelectionChange}
          />
        </Box>
      </Card>

      <Dialog open={action === 'approve' || action === 'reject'} onClose={() => setAction(null)}>
        <DialogTitle>{action === 'approve' ? 'Confirm Approval' : 'Confirm Rejection'}</DialogTitle>
        <DialogContent>
          <Typography>
            {action === 'approve'
              ? 'Are you sure you want to approve selected leave applications?'
              : 'Are you sure you want to reject selected leave applications?'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmAction} color={action === 'approve' ? 'primary' : 'error'}>
            {action === 'approve' ? 'Approve' : 'Reject'}
          </Button>
          <Button onClick={handleCancel} color="inherit">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LeaveTable;
