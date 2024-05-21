// OWNER : DAMANDEEP
import SubStage from './subStage';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { FormControl, TextField, Typography, Select, MenuItem, InputLabel, FormControlLabel, Switch, Box, Grid } from '@mui/material';
import { useState } from 'react';

 const Stage = ({noOfSubStages, index, stageNames}) => {
  const handleBoxClick=(e)=>{
    e.stopPropagation()
  }
  const [open,setOpen]=useState(false)
  const toggleAccordion = () => {
    setOpen(!open);
  };
  const MemorizedSubStage=React.memo(SubStage)

  const substages= open&&(<AccordionDetails>
  {[...Array(noOfSubStages).keys()].map((subIndex) => (
    <div key={`stage=${index}-subStage-${subIndex}`}>{<MemorizedSubStage subIndex={subIndex} />}</div>
  ))}
</AccordionDetails>)

  return (
    <>
      <Box
        sx={{
          '& .Mui-expanded:last-of-type': {
            marginBottom: '1rem !important'
          },
        }}
      >
        <Accordion
          sx={{ margin: '1rem 0' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ width: '100%', flex: '1',
            marginLeft:'6px'
             }}
            onClick={toggleAccordion}
            
          >
            {/* stage name  */}

            <Grid container spacing={2}>

              <Grid item xs={2} sx={{ display: 'flex' }}>
                <Box sx={{ alignItems: 'center', display: 'flex' }}>
                  <DragIndicatorOutlinedIcon sx={{color:'grey'}}/>
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
                    width: '100%',
                    height: '100%'
                  }}
                >
                  {stageNames}
                </Typography>
              </Grid>

              <Grid item xs={2}>
                {/* stage status*/}
                <Box onClick={handleBoxClick} sx={{ display: 'flex', width: '100%' }}>
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
                <Box onClick={handleBoxClick}>
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
                <Box onClick={handleBoxClick}>
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
                <Box onClick={handleBoxClick}>
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
                </Box>
              </Grid>
              {/* toggle button */}

              <Grid item container xs={1} justifyContent="center">
                <Box onClick={handleBoxClick}>
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

                  {open&&substages}
         

          <AccordionActions>
            <Button>Add Subfeild</Button>
          </AccordionActions>
        </Accordion>
      </Box>
    </>
  );
}
export default Stage