import React, { useState } from 'react'
import { Box, Typography, Paper, Drawer, TextField, Button } from '@mui/material';
import ParamStepper from 'views/common-section/param-stepper';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from 'react-redux';
import { handleSelectField } from 'store/form-builder/custom-form-slice';
import Tooltip from '@mui/material/Tooltip';
import useDrawer from 'hooks/useDrawer';
import SingleLineDrawer from '../common/common-drawer/single-line-drawer';
import Divider from '@mui/material/Divider';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ParamSelectList from 'views/common-section/ParamSelectList';
import ParamTime from 'views/common-section/ParamTime';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ControlPointDuplicateOutlinedIcon from '@mui/icons-material/ControlPointDuplicateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

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
        <Box sx={{ overflow: "hidden", display: "flex", gap: "75px", width: "100%", minHeight: "700p" }}>
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
          <Paper sx={{ width: "75%", marginTop: "22px", padding: "20px 0px", overflow: 'auto' }} className="scrollbar">
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


const option = [
  {
    id: 1,
    label: 'Time',
    value: 'time'
  },
  {
    id: 2,
    label: 'Decision Box',
    value: 'decision_box'
  },
  {
    id: 3,
    label: 'Multi Line',
    value: 'multi_line'
  },
  {
    id: 4,
    label: 'Website',
    value: 'website'
  },
  {
    id: 5,
    label: 'Single Line',
    value: 'single_line'
  }
];


const validation = [
  {
    id: 1,
    label: 'Is',
    value: 'is'
  },
  {
    id: 2,
    label: 'Is Not',
    value: 'is_not'
  },
  {
    id: 3,
    label: 'Is Empty',
    value: 'is_empty'
  },
  {
    id: 4,
    label: 'Is Not Empty',
    value: 'is_not_empty'
  },
  {
    id: 5,
    label: 'Is Less Than',
    value: 'is_less_than'
  },
  {
    id: 6,
    label: 'Is Greater Than',
    value: 'is_greater_than'
  },
  {
    id: 7,
    label: 'Is Between',
    value: 'is_between'
  },
  {
    id: 8,
    label: 'Is Any Of',
    value: 'is_any_of'
  },
  {
    id: 9,
    label: 'Is None Of',
    value: 'is_none_of'
  }
];

const FormRuleDrawer = ({ toggleDrawer }) => {
  const [optionRule, setOption] = useState();
  const [validationRule, setValidation] = useState(1);
  const [ruleno, setRuleNo] = useState(1);
  const [isHover, setIsHover] = useState(-1);

  const handleChange = () => {
    setOption("hello");
    setValidation("hello");
  }

  return (
    <>
      <Box sx={{ width: "950px", padding: "20px", height: "100vh", overflowY: "auto" }} role="presentation" className="scrollbar">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Add Rule</Typography>
          <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "20px" }}>
          <Typography>Rule Name</Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"
            helperText="(Maximum 100 characters)"
            fullWidth
            sx={{ borderRadius: "8px" }}
          />
        </Box>
        <Divider sx={{ marginTop: '20px' }} />
        <Box sx={{
          display: "flex", alignItems: "center", gap: "10px",
          marginTop: "20px", height: "auto",
          position: "relative", borderRadius: "5px",
          '&:before': {
            position: 'absolute',
            content: '" "',
            width: '1px',
            height: 'calc(100% - 82px)',
            left: '3.7%',
            top: '47px',
            background: '#ccc',
          }
        }}>
          <Box sx={{ width: "100%", height: "80%", backgroundColor: "#afafaf2e", margin: "50px 50px 50px 100px", paddingLeft: "50px",position:"relative" }}>
            <Box sx={{
              borderLeft: "1px solid red", padding: "20px",
              '&:before': {
                position: 'absolute',
                content: '" "',
                width: '20px',
                height:"1px",
                background: 'red',
                left:"50px",
                top:"10px"
              },
              '&:after': {
                position: 'absolute',
                content: '" "',
                width: '80px',
                height:"1px",
                background: 'red',
                left:"50px",
                bottom:"10px"
              }
            }} className="test">
              {
                Array.from({ length: ruleno }, (_, index) =>
                  <Box sx={{
                    display: "flex", gap: "20px",
                    alignItems: "center", width: "100%",
                  }} onMouseEnter={() => setIsHover(index)} onMouseLeave={() => setIsHover(-1)} key={index}>
                    <ParamSelectList label="Rule" value={optionRule} options={option} onChange={handleChange} rootStyle={{ width: "30%" }} />
                    <ParamSelectList label="Is" value={validationRule} options={validation} onChange={handleChange} rootStyle={{ width: "30%" }} />
                    <ParamTime customStyle={{ width: "30%", paddingTop: '-8px', borderRadius: "5px" }} />
                    <Box sx={{ visibility: isHover == index ? "show" : "hidden", display: "flex", flexDirection: "row", gap: "10px" }} >
                      <AddCircleOutlinedIcon sx={{ color: "#24A68A" }} onClick={() => setRuleNo(ruleno + 1)} />
                      <RemoveCircleOutlinedIcon sx={{ color: "#e83232" }} onClick={() => setRuleNo(ruleno - 1)} />
                    </Box>
                  </Box>
                )}
            </Box>
          </Box>
          <Box sx={{ position: "absolute", top: "10px" }}>
            <Button variant="outlined" >
              If
            </Button>
          </Box>
          <Box sx={{ position: "absolute", bottom: "0px", display: "flex" }}>
            <Button variant="outlined">
              Then
            </Button>
            <Typography sx={{ marginTop: "10px", marginLeft: "20px" }}>Perform the following actions</Typography>
          </Box>
        </Box>
        {
          Array.from({ length: ruleno }, (_, index) =>
            <Box sx={{ marginLeft: "88px", marginTop: "20px", display: "flex", gap: "20px" }}
              onMouseEnter={() => setIsHover(index)}
              onMouseLeave={() => setIsHover(-1)}
              key={index}
            >
              <ParamSelectList label="Rule" value={optionRule} options={option} onChange={handleChange} rootStyle={{ width: "30%" }} />
              <TextField id="outlined-basic" label="Outlined" variant="outlined"
                fullWidth
                sx={{ borderRadius: "8px" }}
              />
              <Box sx={{ visibility: isHover == index ? "show" : "hidden", display: "flex", flexDirection: "row", alignItems: "center" }} >
                <AddCircleOutlinedIcon sx={{ color: "#24A68A" }} onClick={() => setRuleNo(ruleno + 1)} />
                <RemoveCircleOutlinedIcon sx={{ color: "#e83232" }} onClick={() => setRuleNo(ruleno - 1)} />
              </Box>
            </Box>
          )}
      </Box>
      <Box>
      </Box>
    </>
  )
}

const FormRule = () => {
  const { anchor, toggleDrawer } = useDrawer();
  return (
    <Box>
      <Paper sx={{
        display: "flex", flexDirection: "row",
        justifyContent: "space-between", height: "80px",
        marginTop: "20px", padding: "20px", alignItems: "center"
      }}>
        <Box sx={{ marginTop: "5px" }}>
          <Typography variant="h5">Field Rule</Typography>
          <Typography sx={{ fontSize: "smaller" }}>
            Configure rules to show or hide fields based on the input of another field.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button sx={{ textDecoration: 'underlined' }}>Switch to Advanced Rules</Button>
          <Button variant="outlined" startIcon={<AddOutlinedIcon />}>Add Rule</Button>
        </Box>
      </Paper>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "150px", gap: "10px" }}>
        <InfoOutlinedIcon />
        <Typography>No field rules are configured for this form.</Typography>
        <Button onClick={toggleDrawer("right", true)} variant="outlined">Configure Rule</Button>
      </Box>
      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer("right", false)}>
        <FormRuleDrawer toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
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