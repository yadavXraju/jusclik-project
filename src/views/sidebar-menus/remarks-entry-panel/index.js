import React from 'react';
import { Box, Paper, Typography, TextField, Grid, Button } from '@mui/material';

const RemarksEntryPanel = () => {
  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Paper elevation={1} style={{ padding: 20, maxWidth: 500 }}>
        <Typography variant="h6" gutterBottom align="center">Remark Entry</Typography>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Grid key={index} item xs={12} sm={12}>
              <TextField fullWidth label={`Class ${index}`} variant="outlined" />
            </Grid>
          ))}
        </Grid>
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary">Submit</Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default RemarksEntryPanel;
