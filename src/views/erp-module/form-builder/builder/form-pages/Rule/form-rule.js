import React, { useState } from 'react';
import { Box, Typography, Drawer, Button, Paper, TextField } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Divider from '@mui/material/Divider';
import useDrawer from 'hooks/useDrawer';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FormRuleDrawer from './form-rule-drawer';
import ParamSelectList from 'views/common-section/ParamSelectList';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';


const option = [
  {
    id: 1,
    label: 'Redirect To',
    value: 'redirect to'
  },
  {
    id: 2,
    label: 'Assign Task',
    value: 'assing task'
  },
  {
    id: 3,
    label: 'Send Email',
    value: 'send email'
  },
  {
    id: 4,
    label: 'Send Sms',
    value: 'send sms'
  },
  {
    id: 5,
    label: 'Push Notification to Mobile',
    value: 'push notification'
  }
];


const FieldRule = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const [noThen, setNoThen] = useState(2);
  const [isHoverThen, setIsHoverThen] = useState(-1);
  const [optionRule, setOption] = useState();
  const handleChange = (e) => {
    console.log(e.target.value)
    setOption("hello");
    setValidation("hello");
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
            <Typography variant="h4">Form Rule</Typography>
          </Typography>
          <Typography sx={{ fontSize: "smaller" }}>
            Configure rules to show or hide fields based on the input of another field.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button variant="outlined" startIcon={<AddOutlinedIcon />}>Add Rule</Button>
        </Box>
      </Box>
      <Divider component="div" role="presentation" >
        <Typography></Typography>
      </Divider>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: '300px', gap: "10px" }}>
        <InfoOutlinedIcon />
        <Typography>No field rules are configured for this form.</Typography>
        <Button onClick={toggleDrawer("right", true)} variant="outlined">Configure Rule</Button>
      </Box>
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
                  <Box sx={{ visibility: isHoverThen == index ? "show" : "hidden", display: "flex", flexDirection: "row", alignItems: "center" }} >
                    <AddCircleOutlinedIcon sx={{ color: "#24A68A" }} onClick={() => setNoThen(noThen + 1)} />
                    <RemoveCircleOutlinedIcon sx={{ visibility: noThen > 1 ? "show" : "hide", color: "#e83232" }} onClick={() => { if (noThen > 1) setNoThen(noThen - 1) }} />
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