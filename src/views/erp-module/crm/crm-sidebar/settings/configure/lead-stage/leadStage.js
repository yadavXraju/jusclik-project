import * as React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useEffect } from 'react';
import { useState } from 'react';
import Stage from './stages';
import { Box , useMediaQuery, useTheme} from '@mui/material';

export default function AccordionUsage() {
  // number of substages in each stage 
  const [indexes, setIndexes] = React.useState([2, 3, 5, 1]);
  const [stageNames, setStageNames] = React.useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//generate initial stage names  
  useEffect(() => {
    let initialStageName = [];
      indexes.map((item, index) => {
        initialStageName.push(`Stage${index + 1}`);
      });
      setStageNames(initialStageName);
    
  }, []);

  console.log(stageNames);
  const [stages, setStages] = useState([]);

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

  useEffect(() => {
    const newStages = indexes.map((noOfSubStages, index) => (
      <Draggable key={`draggable-${index}`} draggableId={`draggable-${index}`} index={index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {<Stage noOfSubStages={noOfSubStages} index={index} stageNames={stageNames[index]}/>}
          
          </div>
        )}
      </Draggable>
    ));
    (stageNames.length!==0)&&setStages(newStages);
  }, [indexes, stageNames]);

  return (
    <>
    <Box sx={{overflowX:isMobile?'auto':null}}>
      <Box sx={{width:isMobile?'1200px':null,maxWidth:'1920px'}}>        
      <DragDropContext onDragEnd={handleDragAndDrop}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {stages}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      </Box>
    </Box>
    </>
  );
}
