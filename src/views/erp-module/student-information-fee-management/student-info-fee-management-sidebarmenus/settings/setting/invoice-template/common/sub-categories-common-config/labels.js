import React from 'react'
import { Box,Typography ,Switch,FormControl,} from "@mui/material";
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import {  DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLabels } from 'store/student-info-and-fee/setting/Invoice-Template-Slice';
const Labels = () => {
  const label=useSelector((state)=>state.invoiceTemplate.labels)
  const defaultLables=useSelector(state=>state.invoiceTemplate.defaultLables)
  const dispatch=useDispatch()
  const [labels,setLabels]=useState(label)
  
const handleEnable=(e,index)=>{
const checked=e.target.checked
setLabels(prevLabels => {
  const updatedLabels = [...prevLabels];
  updatedLabels[index] = { ...updatedLabels[index], enable: checked };
  return updatedLabels;
});
}

const defaultLablesContent=[]
defaultLables.map((item)=>{
  defaultLablesContent.push(<Box
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
  <Typography  color="textSecondary"  sx={{
            '&:hover': {
              '&[disabled]': {
                cursor: 'not-allowed',
              },
            },
          }} >{item.label}</Typography>
  <FormControl>
  <Switch  checked={false}  sx={{
            '&:hover': {
              '&[disabled]': {
                cursor: 'not-allowed',
              },
            },
          }}  disabled={true}/>
  </FormControl>
</Box>
</Box>
)})
//   all labels     
    const newlabels = labels.map((item, index) => (
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
                <Typography>{item.label}</Typography>
                <FormControl key={`label-${index}`}>
                <Switch key={`label-${index}`} checked={item.enable}  onChange={(e)=>handleEnable(e,index)}/>
                </FormControl>
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

      useEffect(()=>{
    dispatch(updateLabels(labels))
      },[labels])
  return (
    <>
       <Box
          display='flex'
          flexDirection='column'
          gap={2}
          pb={2}
        >
    {defaultLablesContent}</Box>
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
    </>
  );
}

export default Labels
