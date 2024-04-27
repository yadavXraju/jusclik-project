// import React from 'react';
// // import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Select, MenuItem, ToggleButton, ToggleButtonGroup } from '@mui/material';
// // import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
// // import DeleteIcon from '@mui/icons-material/Delete';

// const LeadStage = () => {
//   return(<></>)
// };

// export default LeadStage;
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { FormControl, TextField, Typography, Select, MenuItem, InputLabel, FormControlLabel, Switch, Box, Grid } from '@mui/material';

export default function AccordionUsage() {
  return (<>
    {[...Array(10).keys()].map((item,index)=>stage(index))}
  </>
  );
}
const stage=(index)=>{
    return (
        <div>
        <Accordion sx={{margin:'1rem 0'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ width: '100%', flex: '1' }}
          >
            {/* stage name  */}
  
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
                width:'100%',
                height:'100%'
              }}
            >
              Stage{index+1}
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
                  //value={value} onChange={handleChange}
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
  
            <Grid item container xs={3} justifyContent='end'>
            <FormControlLabel
              fullWidth
              control={
                <Switch
                //  checked={checked} onChange={handleChange}+
                />
              }
              //   label="Toggle Switch"
            />
            </Grid>
            </Grid>
            {/* expand icon  it is already provided */}
  
          </AccordionSummary>
  
          <AccordionDetails>
          {[...Array(20).keys()].map((item,index)=>subStage(index))}
          </AccordionDetails>
  
  
          <AccordionActions>
            <Button>Add Subfeild</Button>
          </AccordionActions>
        </Accordion>
      </div>
    )
}

const subStage=(index)=>{
    return (
        <Box sx={{margin:'1rem 0rem 1rem 1rem'}}>

        
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
          width:'100%',
          height:'100%'
        }}
      >
        Stage{index+1}
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
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </Box>

      </Grid>
     
      {/* toggle button */}

      <Grid item container xs={3} justifyContent='end'>
      <FormControlLabel
        fullWidth
        control={
          <Switch
          //  checked={checked} onChange={handleChange}+
          />
        }
        //   label="Toggle Switch"
      />
      </Grid>
      </Grid>
      </Box>
    )
} 
