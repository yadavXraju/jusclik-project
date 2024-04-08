import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import UploadFileTwoToneIcon from '@mui/icons-material/UploadFileTwoTone';
import { InputLabel, IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';

const columns = [
  { id: 'documenttitle', label: 'Document Title', minWidth: 170 },
  { id: 'discription', label: 'Description', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 170, align: 'right' },
  { id: 'lastupdated', label: 'Last Updated', minWidth: 170, align: 'right' }
];

export default function CommonDocuments({ documentData }) {
  const [uploadedFile, setUploadedFile] = React.useState(null);

  const handleFileUpload = (event, rowIndex) => {
    const file = event.target.files[0];
    if (file) {
      const newRows = [...documentData];
      newRows[rowIndex].subtitle = file.name;
      setUploadedFile(file);
    }
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 0 }}>
        <TableContainer className="scrollbar" sx={{ height: 'calc(100vh - 188px)', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Table stickyHeader aria-label="sticky table" sx={{ border: '1px solid #ccc' }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, fontWeight: 'bold' }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {documentData.map((row, rowIndex) => (
                <TableRow hover key={rowIndex}>
                  <TableCell sx={{ fontWeight: 'bold' }}>{row.title}</TableCell>
                  <TableCell>{uploadedFile && rowIndex === -1 ? uploadedFile.name : row.subtitle}</TableCell>
                  <TableCell align="right">
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                      <InputLabel htmlFor={`file-upload-${rowIndex}`}>
                        <Tooltip title="Upload">
                          <IconButton onClick={() => document.getElementById(`file-upload-${rowIndex}`).click()}>
                            <UploadFileTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
                          </IconButton>
                        </Tooltip>
                        <input
                          id={`file-upload-${rowIndex}`}
                          type="file"
                          style={{ display: 'none' }}
                          onChange={(event) => handleFileUpload(event, rowIndex)}
                        />
                      </InputLabel>
                      <Tooltip title="Delete">
                        <IconButton>
                          <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                  <TableCell align="right">{row.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
