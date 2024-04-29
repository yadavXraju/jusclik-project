import React, { useState } from 'react';
import { Box, Typography, Drawer, Button, Paper, TextField } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Divider from '@mui/material/Divider';
import useDrawer from 'hooks/useDrawer';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FormRuleDrawer from './form-rule-drawer';
import ParamSelectList from 'views/common-section/ParamSelectList';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';


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



const FiedRuleExample = () => {
  const [formLogic, setFormLogic] = useState(0);
  return (
    <Box sx={{
      display: "flex", alignItems: "center", gap: "10px",
      marginTop: "20px", height: "auto",
      position: "relative", borderRadius: "5px",
      marginLeft: "20px",
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
       <Typography>When All the condition met</Typography>
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
            position: "absolute", top: "38%",
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
            <>
             
              {
                Array.from({ length: 1 }, (_, index) =>
                  <Box sx={{
                    display: "flex", gap: "20px",
                    alignItems: "center", width: "100%",
                    marginLeft: "40px"
                  }}
                    key={index}
                  >
                    <Typography variant="h4">Decision Box <Typography varaint="text">True</Typography></Typography>
                  </Box>
                )}
            </>
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
  )
}


const FieldRule = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const [noThen, setNoThen] = useState(1);
  const [optionRule, setOption] = useState();
  const [isHoverThen, setIsHoverThen] = useState(-1);

  const handleChange = () => {
    setOption("hello");
  }

  return (
    <Paper sx={{ height: "calc(100vh - 300px)" }}>
      <Box sx={{
        display: "flex", flexDirection: "row",
        justifyContent: "space-between", height: "80px",
        alignItems: "center", backgroundColor: "#f8fafccc",
        padding: "0px 20px"
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
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button variant="outlined" startIcon={<AddOutlinedIcon />}
            onClick={toggleDrawer("right", true)}>
            Add Rule
          </Button>
        </Box>
      </Box>
      <Divider component="div" role="presentation" >
        <Typography></Typography>
      </Divider>
      <FiedRuleExample />
      {/* <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: '300px', gap: "10px" }}>
        <InfoOutlinedIcon />
        <Typography>No field rules are configured for this form.</Typography>
        <Button onClick={toggleDrawer("right", true)} variant="outlined">Configure Rule</Button>
      </Box> */}
      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer("right", false)}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "calc(100vh - 20px)" }} className="scrollbar">
          <FormRuleDrawer toggleDrawer={toggleDrawer} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
            {
              Array.from({ length: noThen }, (_, index) =>
                <Box sx={{ display: "flex", gap: "20px", marginLeft: "88px" }}
                  onMouseEnter={() => setIsHoverThen(index)}
                  onMouseLeave={() => setIsHoverThen(-1)}
                  key={index}
                >
                  <ParamSelectList label="Rule" value={optionRule}
                    rootStyle={{ width: "30%", borderRadius: "4px" }}
                    customStyle={{ borderRadius: "16px" }}
                    options={option} onChange={handleChange}
                  />
                  <TextField id="outlined-basic" label="Outlined" variant="outlined"
                    fullWidth
                    sx={{ borderRadius: "8px" }}
                  />
                  <Box sx={{ visibility: isHoverThen == index ? "show" : "hidden", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }} >
                    <AddCircleOutlinedIcon sx={{ color: "#24A68A" }} onClick={() => setNoThen(noThen + 1)} />
                    <RemoveCircleOutlinedIcon sx={{ visibility: noThen > 1 ? "show" : "hide", color: "#e83232" }}
                      onClick={() => {
                        if (noThen > 1)
                          setNoThen(noThen - 1)
                      }}
                    />
                  </Box>
                </Box>
              )
            }
          </Box>
        </Box>
      </Drawer>
    </Paper>
  )
}

export default FieldRule;