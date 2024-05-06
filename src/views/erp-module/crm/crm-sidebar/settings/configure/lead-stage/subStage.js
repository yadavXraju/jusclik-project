import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import { FormControl, TextField, Typography, Select, MenuItem, InputLabel, FormControlLabel, Switch, Box, Grid } from '@mui/material';

export const subStage = (subIndex) => {
  return (
    <Box sx={{ margin: '1rem 0rem 1rem 1rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Typography
            sx={{
              backgroundColor: '#EEF2F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              textAlign: 'center',
              borderRadius: '8px',
              width: '100%',
              height: '100%'
            }}
          >
            Stage{subIndex + 1}
          </Typography>
        </Grid>

        <Grid item xs={2}>
          {/* stage status*/}
          <Box sx={{ display: 'flex', width: '100%' }}>
            <FormControl fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField placeholder="status" sx={{ marginRight: '10px', width: '100%' }} />
                <EditIcon />
              </Box>
            </FormControl>
          </Box>
        </Grid>
        {/* follow up required select box yes/no */}

        <Grid item xs={2}>
          <Box>
            <FormControl fullWidth>
              <InputLabel>Follow up Required</InputLabel>
              <Select
                //   value={value} onChange={handleChange}
                onChange={() => {}}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* toggle button */}

        <Grid item container xs={3} justifyContent="end">
          <FormControlLabel
            fullWidth
            control={
              <Switch
                //  checked={checked} onChange={handleChange}+
                onChange={(event) => {
                  event.stopPropagation(); // Stop event propagation to prevent opening the accordion
                  // Your other onChange logic here
                }}
              />
            }
            //   label="Toggle Switch"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
