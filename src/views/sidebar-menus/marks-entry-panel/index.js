import React from 'react';
import { Box, Paper, Grid, Typography, Stack, TextField } from '@mui/material';

const MarksEntryPanel = () => {
  return (
    <>
      <Box>
        <Paper>
          <Stack direction="row" spacing={2}>
            <Typography>
              Student Name:<br />
              Admission ID:
            </Typography>

            <Grid md={2}>English (50)</Grid>
            <Grid>Hindi (50)</Grid>
            <Grid>Punjabi (50)</Grid>
            <Grid>Punjabi (50)</Grid>
            <Grid>Punjabi (50)</Grid>
            <Grid>Punjabi (50)</Grid>
            <Grid>Punjabi (50)</Grid>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography>
              Sangeeta<br />
              131425
            </Typography>

            <Grid  md={2}>
              <TextField required id="outlined-required" label="English" />
            </Grid>
            <Grid>
              <TextField required id="outlined-required" label="Hindi" />
            </Grid>
            <Grid>
              <TextField required id="outlined-required" label="Punjabi" />
            </Grid>
            <Grid>
              <TextField required id="outlined-required" label="Punjabi" />
            </Grid>
            <Grid>
              <TextField required id="outlined-required" label="Punjabi" />
            </Grid>
            <Grid>
              <TextField required id="outlined-required" label="Punjabi" />
            </Grid>
            <Grid>
              <TextField required id="outlined-required" label="Punjabi" />
            </Grid>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default MarksEntryPanel;
