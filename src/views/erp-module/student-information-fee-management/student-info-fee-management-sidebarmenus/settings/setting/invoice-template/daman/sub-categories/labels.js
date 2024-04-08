import React from 'react'
import { Box,Typography ,Switch} from "@mui/material";
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import {  DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from 'react';
const Labels = () => {
const label = [
    'Admission No',
    'Student\'s Name',
    'Father\'s Name',
    'Address',
    'Class',
    'Tel(R)',
    'Tel(M)',
    'Email',
    'Invoice No:[SS*]',
    'Invoice Date',
    'Academic Year',
    'Fee Period',
    'Due Date',
    'Net Amount Payable'
  ];
  const [labels,setLabels]=useState(label)

 
//   all labels



    const newlabels = labels.map((text, index) => (
        <Draggable key={index} draggableId={`label-${index}`} index={index}>
          {(provided) => (
            <Box
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              display='flex'
              alignItems='center'
            >
              <DragIndicatorOutlinedIcon sx={{ color: "#b3b9c1" }} />
              <Box
                justifyContent='space-between'
                sx={{
                  border: "1px solid #eee",
                  height: "40px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  width: "85%",
                  paddingLeft: "10px"
                }}
              >
                <Typography>{text}</Typography>
                <Switch key={`label-${index}`} />
              </Box>
            </Box>
          )}
        </Draggable>
      ));

      const handleDragAndDrop = (results) => {
        const { source, destination } = results;
        if (!destination) return;
        if (source.index === destination.index) return;
    
        const newLabels = Array.from(labels);
            const [movedItem] = newLabels.splice(source.index, 1);
            newLabels.splice(destination.index, 0, movedItem);
            setLabels(newLabels);
       
      }
    
  return (
    <DragDropContext onDragEnd={handleDragAndDrop}>
    <Droppable droppableId="labels">
      {(provided) => (
        <Box
          {...provided.droppableProps}
          ref={provided.innerRef}
          display='flex'
          flexDirection='column'
          gap={2}
        >
          {newlabels}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
    </DragDropContext>
  );
}

export default Labels
