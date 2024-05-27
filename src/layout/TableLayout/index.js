//Page Owner : Kulwinder Singh
// Description : reusable Layout for Table with Data Grid

import React from 'react';
import { Card, Box, Grid } from '@mui/material';

const TableLayout = ({ Header, DataGrid}) => {
  return (
    <Card>
      <Grid container spacing={2} p={2} sx={{ alignItems: 'end', borderBottom: '1px solid #ccc' }}>
        <Grid item xs={12} sm={6} lg={12}>
          {Header}
        </Grid>
      </Grid>
      <Box p={2}>{DataGrid}</Box>
    </Card>
  );
};

export default TableLayout;
