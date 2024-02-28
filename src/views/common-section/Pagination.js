import React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function Pagination({ count, page,rowsPerPage,setRowsPerPage, setPage}) {
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
