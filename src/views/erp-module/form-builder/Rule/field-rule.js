import React from 'react';
import { Box, Typography, Drawer, Button ,Paper} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Divider from '@mui/material/Divider';
import useDrawer from 'hooks/useDrawer';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FormRuleDrawer from './form-rule-drawer';

const FieldRule = () => {
    const { anchor, toggleDrawer } = useDrawer();
    return (
      <Paper sx={{height:"calc(100vh - 300px)"}}>
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
            <Button variant="outlined" startIcon={<AddOutlinedIcon />}>Add Rule</Button>
          </Box>
        </Box>
        <Divider component="div" role="presentation" >
          <Typography></Typography>
        </Divider>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop:'300px', gap: "10px" }}>
          <InfoOutlinedIcon />
          <Typography>No field rules are configured for this form.</Typography>
          <Button onClick={toggleDrawer("right", true)} variant="outlined">Configure Rule</Button>
        </Box>
        <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer("right", false)}>
          <FormRuleDrawer toggleDrawer={toggleDrawer} />
        </Drawer>
      </Paper>
    )
  }

export default FieldRule;