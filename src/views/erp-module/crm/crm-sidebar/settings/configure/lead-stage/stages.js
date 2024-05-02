import { subStage } from './subStage';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { FormControl, TextField, Typography, Select, MenuItem, InputLabel, FormControlLabel, Switch, Box, Grid } from '@mui/material';

export const stage = (noOfSubStages, index, stageName) => {
    const handleBoxClick=(e)=>{
        e.stopPropagation()
    }
  return (
    <>
      <Box
        sx={{
          '& .Mui-expanded:last-of-type': {
            marginBottom: '1rem !important'
          }
        }}
      >
        <Accordion
          className="findcomp"
          sx={{ margin: '1rem 0' }}
          expanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ width: '100%', flex: '1' }}
          >
            {/* stage name  */}

            <Grid container spacing={2}>
              <Grid item xs={2} sx={{ display: 'flex' }}>
                <Box sx={{ alignItems: 'center', display: 'flex' }}>
                  <DragIndicatorOutlinedIcon />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: '#EEF2F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    width: '80%',
                    height: '100%'
                  }}
                >
                  {stageName}
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
                      //   value={value}
                      label="Follow up Required"
                      onChange={() => {}}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              {/* sub stage required select box yes/no*/}

              <Grid item xs={2}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel>Sub Stage Required</InputLabel>
                    <Select
                      // value={value}
                      label="Sub Stage Required"
                      onChange={() => {}}
                      style={{ width: '100%' }}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              {/* select score -10 to 10 */}

              <Grid item xs={2}>
                <FormControl fullWidth>
                  <InputLabel>Select Score</InputLabel>
                  <Select
                    //   value={value} onChange={handleChange}
                    onChange={() => {}}
                    label="Select Score"
                  >
                    {[...Array(21).keys()].map((num) => (
                      <MenuItem key={num} value={num - 10}>
                        {num - 10}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* toggle button */}

              <Grid item container xs={2} justifyContent="end">
                <Box  onClick={handleBoxClick}>
                <FormControlLabel
                  fullWidth
                  control={
                    <Switch
                      //  checked={checked} onChange={handleChange}+
                    />
                  }
                  //   label="Toggle Switch"
                />
                </Box>
              </Grid>
            </Grid>
            {/* expand icon  it is already provided */}
          </AccordionSummary>

          <AccordionDetails>
            {[...Array(noOfSubStages).keys()].map((subIndex) => (
              <div key={`stage=${index}-subStage-${subIndex}`}>{subStage(subIndex)}</div>
            ))}
          </AccordionDetails>

          <AccordionActions>
            <Button>Add Subfeild</Button>
          </AccordionActions>
        </Accordion>
      </Box>
    </>
  );
};
