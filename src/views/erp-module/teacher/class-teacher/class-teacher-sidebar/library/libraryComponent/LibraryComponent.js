import React from 'react';
import { Box, Paper, TextField, Button, Grid } from '@mui/material';

const LibraryComponent = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box>
        <Paper elevation={3} sx={{ padding: '20px', backgroundColor: 'white' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Accession No" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Title" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Author" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Publisher" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Year" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Subject" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Medium" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Status" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Book Required Date" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} >
              <TextField label="Remarks" variant="outlined" multiline rows={4} fullWidth />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Submit
          </Button>
        </Paper>
      </Box>
    </div>
  );
};

export default LibraryComponent;
