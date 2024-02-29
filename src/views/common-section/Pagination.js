import React from 'react';
import TablePagination from '@mui/material/TablePagination';

// ============== Component for Table pagination ============
export default function Pagination({ count, page,rowsPerPage,setRowsPerPage, setPage}) {
  
   // ========== Handle change in page ============
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // =========== Handle change in tab ===============
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      SelectProps={{
        inputProps: { 'aria-label': 'rows per page' },
        native: true,
      }}
      rowsPerPageOptions={[5, 10, 25, 50]}
    />
  );
}
