import React, { useState } from 'react';
import { Box, Typography, Drawer, TextField, Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import ParamTabs from 'views/common-section/ParamSearchTabs';
import ParamSelectList from 'views/common-section/ParamSelectList';
import ParamTime from 'views/common-section/ParamTime';
import Divider from '@mui/material/Divider';
import useDrawer from 'hooks/useDrawer';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

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
  // o for and or 1 for and
  const [formLogic, setFormLogic] = useState(0);
  const [isHover, setIsHover] = useState(-1);
  // then container
  const [noThen, setNoThen] = useState(1);
  const [isHoverThen, setIsHoverThen] = useState(-1);

  const handleChange = () => {
    setOption("hello");
    setValidation("hello");
  }

  return (
    <>
      <Box sx={{ width: "1050px", padding: "20px", height: "100vh", overflowY: "auto" }} role="presentation" className="scrollbar">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Add Rule</Typography>
          <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
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
          <Box sx={{
            width: "100%", height: "80%", backgroundColor: "#f8fafccc",
            margin: "50px 50px 50px 100px", paddingLeft: "50px", padding: "10px 50px",
            position: "relative", borderRadius: "10px"
          }}>
            <Box sx={{
              borderLeft: formLogic == 0 ? "1px solid #2196f3" : "1px solid #697586", padding: "20px",
              '&:before': {
                position: 'absolute',
                content: '" "',
                width: '20px',
                height: "1px",
                background: formLogic == 0 ? " #2196f3" : "#697586",
                left: "50px",
                top: "10px"
              },
              '&:after': {
                position: 'absolute',
                content: '" "',
                width: '60px',
                height: "1px",
                background: formLogic == 0 ? "#2196f3" : "#697586",
                left: "50px",
                bottom: "10px"
              }
            }}>
              <Button sx={{
                position: "absolute", top: ruleno != 1 ? "47%" : "38%",
                left: "15px", borderRadius: "10px", padding: "5px 5px",
                backgroundColor: formLogic == 0 ? "#2196f3" : "#697586",
                '& span': {
                  marginLeft: '0',
                },
                "&:hover": {
                  backgroundColor: formLogic === 0 ? "#2196f3" : "#697586",
                }
              }}
                endIcon={<UnfoldMoreOutlinedIcon />}
                variant="contained" onClick={() => setFormLogic(!formLogic)}>
                {formLogic == 0 ? (<Typography>OR</Typography>) :
                  (<Typography>And</Typography>)}
              </Button>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {
                  Array.from({ length: ruleno }, (_, index) =>
                    <Box sx={{
                      display: "flex", gap: "20px",
                      alignItems: "center", width: "100%",
                      marginLeft: "40px"
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
          Array.from({ length: noThen }, (_, index) =>
            <Box sx={{ marginLeft: "88px", marginTop: "20px", display: "flex", gap: "20px" }}
              onMouseEnter={() => setIsHoverThen(index)}
              onMouseLeave={() => setIsHoverThen(-1)}
              key={index}
            >
              <ParamSelectList label="Rule" value={optionRule} options={option} onChange={handleChange} rootStyle={{ width: "30%" }} />
              <TextField id="outlined-basic" label="Outlined" variant="outlined"
                fullWidth
                sx={{ borderRadius: "8px" }}
              />
              <Box sx={{ visibility: isHoverThen == index ? "show" : "hidden", display: "flex", flexDirection: "row", alignItems: "center" }} >
                <AddCircleOutlinedIcon sx={{ color: "#24A68A" }} onClick={() => setNoThen(noThen + 1)} />
                <RemoveCircleOutlinedIcon sx={{ color: "#e83232" }} onClick={() => setNoThen(noThen - 1)} />
              </Box>
            </Box>
          )}
      </Box>
      <Box>
      </Box>
    </>
  )
}

const FieldRule = () => {
  const { anchor, toggleDrawer } = useDrawer();
  return (
    <Box>
      <Box sx={{
        display: "flex", flexDirection: "row",
        justifyContent: "space-between", height: "80px",
        alignItems: "center",backgroundColor:"red"
      }}>
        <Box sx={{ marginTop: "5px" }}>
          <Typography sx={{ marginLeft: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography variant="text"><DescriptionOutlinedIcon /></Typography>
            <Typography variant="h4">Field Rule</Typography>
          </Typography>
          <Typography sx={{ fontSize: "smaller" }}>
            Configure rules to show or hide fields based on the input of another field.
          </Typography>
        </Box>
        <Divider component="div" role="presentation" sx={{ marginTop: "20px" }}>
          <Typography></Typography>
        </Divider>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button variant="outlined" startIcon={<AddOutlinedIcon />}>Add Rule</Button>
        </Box>
      </Box>
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

const PageRule = () => {
  return (
    <>
      hello
    </>
  )
}


const DenySubmission = () => {
  return (
    <>
      hello
    </>
  )
}


const Rule = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const tabPage = [
    {
      id: 1,
      name: "Field Rule",
      component: FieldRule,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 2,
      name: "Form Rule",
      component: FieldRule,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    }, {
      id: 3,
      name: "Page Rule",
      component: PageRule,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 4,
      name: "Deny Submissions",
      component: DenySubmission,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
  ]

  return (
    <Box sx={{ marginTop: "20px" }}>
      <ParamTabs tabPage={tabPage} />
    </Box>
  )
}


export default Rule;