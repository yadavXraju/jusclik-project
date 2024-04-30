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
import {  DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect } from 'react';
import { useState } from 'react';


export default function AccordionUsage() {
  const [indexes, setIndexes] = React.useState([0, 1, 3, 2]);
  const [stageNames, setStageNames] = React.useState([
    // "Stage0", "Stage1", "Stage2", "Stage3"
  ]);
  useEffect(()=>{
    let initialStageName=[]
    indexes.map((item,index)=>{
      initialStageName.push(`Stage${index+1}`)
    })
    setStageNames(initialStageName)
  },[])
  const [stages,setStages]=useState([])

  const handleDragAndDrop = (result) => {
    const { source, destination } = result;

    if (!destination) return; // No destination, nothing to do
    if (source.index === destination.index) return; // Same index, no reordering needed
     // Update stage names array along with indexes
     const newStageNames = Array.from(stageNames);
     const movedStageName = newStageNames.splice(source.index, 1)[0];
     newStageNames.splice(destination.index, 0, movedStageName);

    const newIndexes = Array.from(indexes);
    const movedItem = newIndexes.splice(source.index, 1)[0]; // Remove item from source index
    newIndexes.splice(destination.index, 0, movedItem); // Insert item at destination index
    setIndexes(newIndexes); // Update state with new order
    setStageNames(newStageNames); // Update stage names array
  };

  


 
useEffect(()=>{
  const newStages=indexes.map((noOfSubStages,index) => (
      <Draggable key={`draggable-${index}`} draggableId={`draggable-${index}`}index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            {stage(noOfSubStages,index, stageNames[index])}
                          </div>
                        )}
                      </Draggable>        
      ))
  setStages(newStages)
},[indexes,stageNames])  

  return (
    <>
      <DragDropContext onDragEnd={handleDragAndDrop}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {stages}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

const subStage=(subIndex)=>{
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
        Stage{subIndex+1}
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
          onChange={()=>{}}

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
    )
} 


const stage=(noOfSubStages,index,stageName)=>{
  return(
<>
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

              <Grid item  xs={2} sx={{display:'flex'}} >
                <Box sx={{alignItems:'center',display:'flex'}}>
            <DragIndicatorOutlinedIcon/>
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
                width:'80%',
                height:'100%'
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
                label='Follow up Required'
                onChange={()=>{}}
                
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
                  label='Sub Stage Required'
                  onChange={()=>{}}
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
              onChange={()=>{}}
              label='Select Score'
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
  
            <Grid item container xs={2} justifyContent='end'>
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
            {/* expand icon  it is already provided */}
  
          </AccordionSummary>
  
          <AccordionDetails>
          {[...Array(noOfSubStages).keys()].map((subIndex)=>
            <div key={`stage=${index}-subStage-${subIndex}`}>
              {subStage(subIndex)}
            </div>
          )}
          </AccordionDetails>
  
  
          <AccordionActions>
            <Button>Add Subfeild</Button>
          </AccordionActions>
        </Accordion>
      </div>
</>)
}