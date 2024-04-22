import React, { useState } from 'react'
import { Box, Typography, Paper, Drawer, TextField, Button } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ControlPointDuplicateOutlinedIcon from '@mui/icons-material/ControlPointDuplicateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ParamStepper from 'views/common-section/param-stepper';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from 'react-redux';
import { handleSelectField} from 'store/form-builder/custom-form-slice';
import Tooltip from '@mui/material/Tooltip';
import useDrawer from 'hooks/useDrawer';
import SingleLineDrawer from '../common/common-drawer/single-line-drawer';
import Divider from '@mui/material/Divider';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const BasicFields = () => {
  const [isHover, setIsHover] = useState(-1);
  const { basicFields } = useSelector((state) => state.customForm);
  return (
    <Droppable droppableId="unselectedfields">
      {(provided) => (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", minheight: "500px", overflowY: "auto", height: "calc(100vh - 300px)", backgroundColor: "white" }} {...provided.droppableProps} ref={provided.innerRef} className="scrollbar-3">
          {basicFields && basicFields.map((field) => (
            <Draggable draggableId={`label-${field?.id}`} index={field?.id} key={field?.id}>
              {(provided) => (
                <Box
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  sx={{
                    border: isHover != field.id ? "1px solid #eee" : "1.5px dotted blue", height: "40px", borderRadius: "4px", display: "flex",
                    alignItems: "center", width: "45%", paddingLeft: "5px", backgroundColor: "rgb(227 232 235 / 31%)"
                  }} key={field?.id}
                  onMouseEnter={() => setIsHover(field?.id)} onMouseLeave={() => setIsHover(-1)}>
                  {field.icon && <field.icon sx={{ height: "20px", width: "20px" }} />}
                  <Typography sx={{ marginLeft: "5px" }}>{field?.name}</Typography>
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
  const [isHover, setIsHover] = useState(-1);
  const { advancedFields } = useSelector((state) => state.customForm);
  return (
    <Droppable droppableId="unselectedfields">
      {(provided) => (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", backgroundColor: "white" }}
          {...provided.droppableProps} ref={provided.innerRef} className="scrollbar-3">
          {advancedFields && advancedFields.map((field) => (
            <Draggable draggableId={`label-${field?.id}`} index={field?.id} key={field?.id}>
              {(provided) => (
                <Box
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  sx={{
                    border: isHover != field.id ? "1px solid #eee" : "1px dotted blue", height: "40px", borderRadius: "4px", display: "flex",
                    alignItems: "center", width: "45%", paddingLeft: "5px", backgroundColor: "rgb(227 232 235 / 31%)"
                  }} key={field?.id}
                  onMouseEnter={() => setIsHover(field?.id)} onMouseLeave={() => setIsHover(-1)}>
                  {field.icon && <field.icon sx={{ height: "20px", width: "20px" }} />}
                  <Typography sx={{ marginLeft: "5px" }}>{field?.name}</Typography>
                </Box>
              )}
            </Draggable>
          ))}
        </Box>
      )}
    </Droppable>
  )
}


const SelectedFormFields = () => {
  const dispatch = useDispatch();
  const { anchor, toggleDrawer } = useDrawer();
  const [isHover, setIsHover] = useState(-1);
  const [recentlyDropped, setRencetlyDropped] = useState(-1);
  const [clickedField, setClickedFiled] = useState(-1);


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
        console.log("selected fields")
        return;
      }
    }

    else {
      if (source.droppableId == "unselectedfields" && destination.droppableId == "selectedFields") {
        const selectedId = result.source.index;
        if (!selectedId)
          return;
        setRencetlyDropped(selectedId);
        setClickedFiled(-1)
        dispatch(handleSelectField(selectedId))
      }
      else {
        return;
      }
    }
  }



  return (
    <>
      <DragDropContext onDragEnd={handleDragAndDrop} >
        <Box sx={{ overflow: "hidden", display: "flex", gap: "75px", width: "100%",minHeight: "700p"}}>
          <Box sx={{ width: "30%" }} className="scrollbar">
            <ParamStepper tabPage={tabPages} numberShow={false}
              iconShow={false} showBottomNav={false}
              customStyleTabs={{ backgroundColor: "white", paddingLeft: "20px" }}
              customtabPanelStyle={{
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
                overflow: "hidden",
                padding: "15px"
              }}
            />
          </Box>
          {/*Selected Fields */}
          <Paper sx={{ width: "75%", marginTop: "22px", padding: "20px 0px",overflow:'auto'}} className="scrollbar">
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
                            <Paper sx={{
                              border: isHover == field?.id || clickedField == field?.id ? "1.5px dotted blue" : "1px solid #80808021",
                              borderLeft: (recentlyDropped == field.id || clickedField == field?.id) && '2px solid blue',
                              backgroundColor: (recentlyDropped == field.id || clickedField == field?.id) && "#90caf91c",
                              width: "100%", height: "100px", display: "flex", alignItems: "center"
                            }}
                              onMouseEnter={() => setIsHover(field?.id)}
                              onMouseLeave={() => setIsHover(-1)}
                              onClick={() => { setClickedFiled(field?.id), setRencetlyDropped(-1) }}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                            >
                              <Box 
                                sx={{
                                  border: "1px solid rgb(0 0 0 / 32%)", height: "40px",
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

const FormRule = () => {
  return (
    <Paper sx={{ marginTop: "20px", width: "50%", padding: "20px"}}>
      <Typography>Rule Name</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined"
        helperText="Some important text"
        fullWidth
      />
      <Divider />
      <Box sx={{display: "flex",gap:"20px",alignItems:"center"}}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20px",marginLeft:"20px"}}>
          <Box>
            <Button variant="outlined">
              If
            </Button>
          </Box>
          <Box sx={{ width: "1px", height: "150px", background: "blue" }}></Box>
          <Button variant="outlined">
            Then
          </Button>
        </Box>
        <Box sx={{ backgroundColor: "#f3f5f7", width: "100%", height: "100%" }}>
          hello this is 
          hello this is 
          hello this is 
        </Box>
      </Box>
    </Paper>
  )
}

const FormBuilder = () => {
  const tabPages = [
    {
      id: 1,
      name: "Builder",
      component: SelectedFormFields
    },
    {
      id: 2,
      name: "Form Rule",
      component: FormRule
    }
  ]
  return (
    <ParamStepper tabPage={tabPages} numberShow={false}
      iconShow={false} showBottomNav={false}
      customtabSytle={{ backgroundColor: "white", marginRight: "0px", minWidth: "auto" }}
      customStyleTabs={{ backgroundColor: "white", paddingLeft: "20px", marginRight: "0px", minWidth: "auto", }}
      customtabPanelStyle={{
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        overflow: "hidden",
        background: "none",
        padding: "0px"
      }}
    />
  )
}
export default FormBuilder