import React from 'react';
import { Card, Box, IconButton, Tooltip, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import rows from './LeaveTableData';
import CommonDataGrid from 'views/common-section/commonDataGrid';

const LeaveTable = () => {
    const [tableRows, setTableRows] = React.useState(rows);
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [action, setAction] = React.useState(null);
  
    const handleApproveLeave = (id) => {
      setSelectedRow(id);
      setAction('approve');
    };
  
    const handleRejectLeave = (id) => {
      setSelectedRow(id);
      setAction('reject');
    };
  
    const handleConfirmAction = () => {
      if (action === 'approve') {
        setTableRows(tableRows.map((row) =>
          row.id === selectedRow ? { ...row, status: 'Approved' } : row
        ));
      } else if (action === 'reject') {
        setTableRows(tableRows.map((row) =>
          row.id === selectedRow ? { ...row, status: 'Rejected' } : row
        ));
      }
      setSelectedRow(null);
      setAction(null);
    };

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
              <CheckCircleTwoToneIcon sx={{ color: '#5ce975d1' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reject">
            <IconButton onClick={() => handleRejectLeave(params.row.id)}>
              <CancelTwoToneIcon sx={{ color: '#ff7070ad' }} />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];

  return (
    <>
      <Card sx={{ padding: '16px' }}>
        <Box mt={3}>
          <CommonDataGrid
            rows={tableRows}
            columns={columns}
            initialState={{
                pagination: { paginationModel: { page: 0, pageSize: 50 } }
              }}
              pageSizeOptions={[10, 25, 50, 100]}
              checkboxSelection
          />
        </Box>
      </Card>

      {/* Approve Confirmation Dialog */}
      <Dialog open={action === 'approve'} onClose={() => setAction(null)}>
        <DialogTitle>Confirm Approval</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to approve leave application with ID {selectedRow}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmAction} color="primary">Approve</Button>
          <Button onClick={() => setAction(null)} color="inherit">Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Reject Confirmation Dialog */}
      <Dialog open={action === 'reject'} onClose={() => setAction(null)}>
        <DialogTitle>Confirm Rejection</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to reject leave application with ID {selectedRow}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmAction} color="error">Reject</Button>
          <Button onClick={() => setAction(null)} color="inherit">Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LeaveTable;

