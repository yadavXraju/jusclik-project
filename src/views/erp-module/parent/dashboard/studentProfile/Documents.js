// ======= Page Owner Vikash =========
// ======= Document Table In Student Profile =========
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Pagination from 'components/table-data-grid/TablePagination';

const columns = [
  { id: 'documenttitle', label: 'Document Title', minWidth: 170 },
  { id: 'discription', label: 'Description', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 170, align: 'right' },
  { id: 'lastupdated', label: 'LastUpdated', minWidth: 170, align: 'right' },
  { id: 'status', label: 'Verification Status', minWidth: 170, align: 'right' },
];

function createData(documenttitle, discription, lastupdated, status) {
  return { documenttitle, discription, lastupdated, status };
}

const rows = [
  createData('Code of Conduct', 'Organization Code of Conduct...', '13 Jan, 2020', 'true'),
  createData('Code of Conduct', 'Organization Code of Conduct...', '13 Jan, 2020', 'false'),
  createData('Code of Conduct', 'Organization Code of Conduct...', '13 Jan, 2020', 'true'),
  createData('Code of Conduct', 'Organization Code of Conduct...', '13 Jan, 2020', 'false'),
];

export default function Documents() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isAttachmentDialogOpen, setAttachmentDialogOpen] = React.useState(false);
  //const [selectedRow, setSelectedRow] = React.useState(null);

  const handleAttachmentButtonClick = () => {
    setAttachmentDialogOpen(true);
    //setSelectedRow(row);
  };

  const handleAttachmentDialogClose = () => {
    setAttachmentDialogOpen(false);
    //setSelectedRow(null);
  };

  const handleAttachmentUpload = () => {
    setAttachmentDialogOpen(false);
    //setSelectedRow(null);
  };
  // ============== code for handle upload attachment end ==============

  return (
    <React.Fragment>
      <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 0 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table" sx={{ border: '1px solid #ccc' }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight:'bold' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    <TableCell sx={{ fontWeight: 'bold' }}>
                      {row.documenttitle}
                    </TableCell>
                    <TableCell>
                      {row.discription}
                    </TableCell>
                    <TableCell align="right">
                      <Button size='small' sx={{ mr: '2px' ,background: 'rgb(0, 200, 83 , .5)', color: 'black' }} onClick={() => handleAttachmentButtonClick(row)}>Upload</Button>
                      <Button size='small' sx={{ background: 'rgb(216, 67, 21, .5)', color: 'black' }} onClick={() => handleButtonClick('deleteClick')}>Delete</Button>
                    </TableCell>
                    <TableCell align="right">
                      {row.lastupdated}
                    </TableCell>
                    <TableCell align="right" sx={{ color: row.status === 'true' ? 'rgb(0, 200, 83)' : 'rgb(216, 67, 21)' }}>
                      {<CheckCircleOutlineOutlinedIcon />}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
      />
      </Paper>

      <Dialog open={isAttachmentDialogOpen} onClose={handleAttachmentDialogClose}>
        <DialogTitle>Attachment Options</DialogTitle>
        <DialogContent>
          {/* Add your attachment options/content here */}
          {/* For example, you can add a file input for uploading attachments */}
          <input type="file" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAttachmentUpload} sx={{ background: 'rgb(0, 200, 83)', color: 'black' }}>Upload</Button>
          <Button onClick={handleAttachmentDialogClose} sx={{ background: 'rgb(216, 67, 21)', color: 'black' }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
