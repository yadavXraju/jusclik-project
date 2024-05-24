// ======= Page Owner Vikash =========
// ======= Asset Request Details Table =========
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { IconButton } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Pagination from 'components/Pagination';
//import useMediaQuery from '@mui/material/useMediaQuery';

// ============= Assets data ===========
const Assetsdata = [
  { Asset: 'Book', AssetCategory: 'NA', RequestType: 'New Asset Request', status: 'Pending' },
  { Asset: 'NA', AssetCategory: 'NA', RequestType: 'Replacement Request', status: 'Approved' },
  { Asset: 'NA', AssetCategory: 'Book', RequestType: 'New Asset Request', status: 'Pending' },
  { Asset: 'NA', AssetCategory: 'NA', RequestType: 'Replacement Request', status: 'Approved' },
  { Asset: 'Book', AssetCategory: 'NA', RequestType: 'Replacement Request', status: 'Pending' },
  { Asset: 'Asset', AssetCategory: 'Book', RequestType: 'New Asset Request', status: 'Approved' },
  { Asset: 'Asset', AssetCategory: 'NA', RequestType: 'Replacement Request', status: 'Pending' },
];
export default function AssetsDataTable() {
  const [page, setPage] = useState(0); // Page state for TablePagination
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page state for TablePagination

  //const ismobile = useMediaQuery('(min-width:767px)');

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 2, borderTop:'1px solid #ccc' }}>

      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h4">
                Asset
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                Asset Category & Type
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                Request Type
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                Request Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Assetsdata
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="h5">{item.Asset}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.AssetCategory}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" sx={{minWidth:'200px'}}>{item.RequestType}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">
                    <Box
                      sx={{
                        color: item.status === 'Approved' ? 'rgb(0, 200, 83)' : (item.status === 'overdue' ? '#433e1a' : 'rgb(216, 67, 21)'),
                        borderRadius: '16px',
                        background: item.status === 'Approved' ? 'rgba(147, 213, 166, 0.38)' : (item.status === 'overdue' ? '#ffff003b' : 'rgb(251, 233, 231)'),
                        '&:hover': {
                          background: item.status === 'Approved' ? 'rgb(0, 200, 83)' : (item.status === 'overdue' ? '#b4aa10' : 'rgb(216, 67, 21)'),
                          color: 'white',
                        },
                        width: 'fit-content',
                        padding: '2px',
                        paddingRight: '10px',
                        paddingLeft: '10px',
                        textAlign: 'center'
                      }}
                    >
                      {item.status}
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <div>
                          <IconButton {...bindTrigger(popupState)}>
                            <MoreHorizIcon />
                          </IconButton>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'center',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center',
                            }}
                          >
                            <Typography sx={{ p: 1, display: 'Grid' }}>
                              <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                              <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                              <Button sx={{ color: 'black' }}>Cancel</Button>
                            </Typography>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </Typography>
                </TableCell> 
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>

      {/* ======== Render TablePagination component  ========== */}
      <Pagination
        count={Assetsdata.length}
        page={page}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
      />
    </Box>
  );
}
