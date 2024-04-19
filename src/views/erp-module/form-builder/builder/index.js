import React, { useState } from 'react'
import { Box, Typography, Paper, Drawer } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ControlPointDuplicateOutlinedIcon from '@mui/icons-material/ControlPointDuplicateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ParamStepper from 'views/common-section/param-stepper';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from 'react-redux';
import { handleSelectField } from 'store/form-builder/custom-form-slice';
import Tooltip from '@mui/material/Tooltip';
import useDrawer from 'hooks/useDrawer';
import SingleLineDrawer from '../common/common-drawer/single-line-drawer';
import Divider from '@mui/material/Divider';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const BasicFields = () => {
  const[isHover,setIsHover]=useState(-1);
  const { basicFields } = useSelector((state) => state.customForm);
  return (
    <Droppable droppableId="unselectedfields">
      {(provided) => (
        <Box  sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", minheight: "500px", overflowY: "auto", height: "calc(100vh - 300px)",backgroundColor:"white"}} {...provided.droppableProps} ref={provided.innerRef} className="scrollbar-3">
          {basicFields && basicFields.map((field) => (
            <Draggable draggableId={`label-${field?.id}`} index={field?.id} key={field?.id}>
              {(provided) => (
                <Box
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  sx={{border:isHover!=field.id?"1px solid #eee":"1px dotted black", height: "40px", borderRadius: "4px", display: "flex",
                   alignItems: "center", width: "45%", paddingLeft: "10px",backgroundColor:"rgb(227 232 235 / 31%)"}} key={field?.id} 
                  onMouseEnter={()=>setIsHover(field?.id)} onMouseLeave={()=>setIsHover(-1)}>
                  {field.icon&&<field.icon />}
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
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {advancedFields && advancedFields.map((field) => (
        <Box key={field.id} className="scrollbar">
          <Box sx={{ border: "1px solid #eee", height: "40px", borderRadius: "4px", display: "flex", alignItems: "center", width: "85%", paddingLeft: "10px",backgroundColor:"rgb(227 232 235 / 31%)"}}>
             {field.icon&&<field.icon />}
            <Typography sx={{ marginLeft: "10px" }} type="text"> {field?.name}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

const FormBuilder = () => {
  const dispatch = useDispatch();
  const { anchor, toggleDrawer } = useDrawer();
  const [isHover, setIsHover] = useState(-1);
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
    <>
      <DragDropContext onDragEnd={handleDragAndDrop}>
        <Box sx={{ overflow: "hidden", display: "flex", gap: "80px", width: "100%", height: "calc(100vh - 700p)" }}>
          <Box sx={{ width: "30%" }} className="scrollbar">
            <ParamStepper tabPage={tabPages} numberShow={false}
              iconShow={false} showBottomNav={false}
              customStyleTabs={{ backgroundColor: "white", paddingLeft: "20px" }}
              customtabPanelStyle={{
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
                overflow: "hidden",
              }}
            />
          </Box>
          {/*Selected Fields */}
          <Paper sx={{ width: "60%", marginTop: "22px", padding: "20px 0px" }} >
            <Typography sx={{ marginLeft: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography variant="text"><DescriptionOutlinedIcon /></Typography>
              <Typography variant="h4">Admission</Typography>
            </Typography>
            <Divider component="div" role="presentation" sx={{ marginTop: "20px" }}>
              <Typography></Typography>
            </Divider>
            <Droppable droppableId="selectedFields">
              {(provided) => (
                <Box   {...provided.droppableProps} ref={provided.innerRef} onClick={toggleDrawer("right", true)} sx={{ minHeight: "600px" }}>
                  {basicFields && basicFields.map((field) => (
                    field.selected && <Draggable draggableId={`label-${field?.id}`} index={field?.id} key={field?.id} >
                      {(provided) => (
                        <>
                          <Tooltip title={<Box sx={{ display: "flex", flexDirection: "column", gap: "10px", background: "none", color: "black" }}><SettingsOutlinedIcon onClick={toggleDrawer("right", true)} />
                            <ControlPointDuplicateOutlinedIcon />
                            <DeleteOutlinedIcon /></Box>} placement="right-end">
                            <Paper sx={{ border: isHover == field?.id ? "1px dotted black" : "1px solid #80808021", width: "100%", height: "100px", display: "flex", alignItems: "center" }} onMouseEnter={() => setIsHover(field?.id)} onMouseLeave={() => setIsHover(-1)}>
                              <Box  {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                                sx={{
                                  border: "1px solid #eee", height: "40px",
                                  borderRadius: "0px", display: "flex", alignItems: "center",
                                  width: "45%", paddingLeft: "10px",
                                  marginLeft: "20px"
                                }} key={field?.id}>
                                <Typography sx={{ marginLeft: "10px" }}>{field?.name}</Typography>
                              </Box>
                            </Paper>
                          </Tooltip>
                        </>
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
      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer("right", false)}>
        <SingleLineDrawer toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  )
}

export default FormBuilder