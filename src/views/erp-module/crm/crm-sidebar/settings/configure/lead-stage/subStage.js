import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import * as React from 'react';
import { FormControl, TextField, Typography, Select, MenuItem, InputLabel, FormControlLabel, Switch, Box, Grid } from '@mui/material';

 const  SubStage = ({subIndex}) => {
  return (
    <Box sx={{ margin: '1rem 0rem ' }}>
      <Grid container spacing={2}>
        <Grid item xs={2} 
        sx={{display:'flex',justifyContent:'end',
        // paddingRight:'2%'
      }}
        >
          <Typography
            sx={{
              backgroundColor: '#EEF2F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              textAlign: 'center',
              borderRadius: '8px',
              width: '60%',
              height: '100%',
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
                <EditOutlinedIcon sx={{color:'grey'}} />
              </Box>
            </FormControl>
          </Box>
        </Grid>
        {/* follow up required select box yes/no */}

        <Grid item xs={2}>
          <Box>
            <FormControl fullWidth sx={{width:'97%'}}>
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
        {/* <Grid item xs={4}/> */}
        <Grid item container xs={5} justifyContent="end">
          <FormControlLabel
            fullWidth
            sx={{
              marginRight:'9%'
            }}
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
export default SubStage