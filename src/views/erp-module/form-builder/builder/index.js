import React from 'react'
import { Box, Typography, Paper } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ControlPointDuplicateOutlinedIcon from '@mui/icons-material/ControlPointDuplicateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ParamStepper from 'views/common-section/param-stepper';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from 'react-redux';
import { handleSelectField } from 'store/form-builder/custom-form-slice';

const BasicFields = () => {
  const { basicFields } = useSelector((state) => state.customForm);
  return (
    <Droppable droppableId="unselectedfields">
      {(provided) => (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }} {...provided.droppableProps} ref={provided.innerRef}>
          {basicFields && basicFields.map((field) => (
            <Draggable draggableId={`label-${field?.id}`} index={field?.id} key={field?.id}>
              {(provided) => (
                <Box 
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  sx={{ border: "1px solid #eee", height: "40px", borderRadius: "4px", display: "flex", alignItems: "center", width: "45%", paddingLeft: "10px" }} key={field?.id}>
                  <Typography sx={{ marginLeft: "10px" }}>{field?.name}</Typography>
                </Box>
              )}
            </Draggable>
          ))}
        </Box>
      )}
    </Droppable>
  );
}

const AdvancedFiedls = () => {
  const { advancedFields } = useSelector((state) => state.customForm);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px"}}>
      {advancedFields && advancedFields.map((field) => (
        <Box key={field.id} className="scrollbar">
          <Box sx={{ border: "1px solid #eee", height: "40px", borderRadius: "4px", display: "flex", alignItems: "center", width: "85%", paddingLeft: "10px" }}>
            <Typography sx={{ marginLeft: "10px" }}>{field?.name}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

const FormBuilder = () => {
  const dispatch = useDispatch();
  const { basicFields } = useSelector((state) => state.customForm);
  const tabPages = [
    {
      id: 1,
      name: "Basic Fields",
      component: BasicFields
    },
    {
      id: 2,
      name: "Advanced Fields",
      component: AdvancedFiedls
    }
  ]

  const handleDragAndDrop = (result) => {
    console.log(result)
    const { source, destination } = result;
    //if either source or destination is null
    if (!source?.droppableId || !destination?.droppableId)
      return;

    if (source.droppableId == destination.droppableId) {
      if (source.droppableId == "unselectedfields") {
        console.log("rearranging unselectedFields")
        return;
      }
      else {
        console.log("rearranging selected fields")
        return;
      }
    }

    else {
      if (source.droppableId == "unselectedfields" && destination.droppableId == "selectedFields") {
        const selectedId = result.source.index;
        if (!selectedId)
          return;
        dispatch(handleSelectField(selectedId))
      }
      else {
        return;
      }
    }
  }


  return (
    <DragDropContext onDragEnd={handleDragAndDrop}>
      <Box sx={{ overflow: "hidden", display: "flex", gap: "80px", width: "100%" }}>
        <Box sx={{ width: "30%" }} className="scrollbar">
          <ParamStepper tabPage={tabPages} numberShow={false}
            iconShow={false} showBottomNav={false}
            customStyleTabs={{ backgroundColor: "white", paddingLeft: "20px" }}
            customtabPanelStyle={{
              borderTopLeftRadius: "none",
              borderTopRightStyle: "none",
              overflow: "hidden"
            }}
          />
        </Box>
        <Paper sx={{ width: "68%", height: "400px", marginTop: "22px" }} >
          <Droppable droppableId="selectedFields">
            {(provided) => (
              <Box   {...provided.droppableProps} ref={provided.innerRef}>
                {basicFields && basicFields.map((field) => (
                  field.selected && <Draggable draggableId={`label-${field?.id}`} index={field?.id} key={field?.id}>
                    {(provided) => (
                      <Box sx={{display:"flex",flexDirection:"row",alginItems:"center"}}>
                        <Box sx={{ border: "1px dotted black", width: "100%", height: "100px", display: "flex", alignItems: "center" }}>
                          <Box  {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            sx={{
                              border: "1px solid #eee", height: "40px",
                              borderRadius: "4px", display: "flex", alignItems: "center",
                              width: "45%", paddingLeft: "10px"
                            }} key={field?.id}>
                            <Typography sx={{ marginLeft: "10px" }}>{field?.name}</Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column",alginItems:"center",gap:'10px'}}>
                          <SettingsOutlinedIcon />
                          <ControlPointDuplicateOutlinedIcon />
                          <DeleteOutlinedIcon />
                        </Box>
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </Paper>
      </Box>
    </DragDropContext>
  )
}

export default FormBuilder