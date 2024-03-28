import React, { useState } from 'react';
import { TextField, useMediaQuery, Typography, Box, Button, Drawer } from '@mui/material';
import useDrawer from 'hooks/useDrawer';
import InputAdornment from '@mui/material/InputAdornment';
import ParamSelectList from 'views/common-section/ParamSelectList';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';

const availableFieldType = [
  { value: "Picklist", label: "Picklist" },
  { value: "Text", label: "Text" },
  { value: "Numerical", label: "Numerical" },
  { value: "Date", label: "Date" },
  { value: "Currency", label: "Currency" },
  { value: "Email", label: "Email" },
  { value: "Phone", label: "Phone" },
  { value: "URL", label: "URL" }
];

// const availableFields=[
//       primaryDetails:{
//  admissionNo:{
//            fiedType:""
//         }

//       }
// ] 




const PermanentTextfield = () => {
  return (
    <TextField
      id="permanent-textfield"
      sx={{ width: "100%", marginTop: "20px" }}
      label="Enter text"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            Field Label
          </InputAdornment>
        ),
      }}
    />
  );
};


const CustomFieldDefine = () => {
  return (
    <>
      this is field for custom one
    </>
  )
}

const AddCustomField = ({ toggleDrawer }) => {
  const [value, setValue] = useState('');
  return (
    <Box sx={{ width: "400px", padding: "0px 20px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: "0px 20px 0px 20px" }}>
        <Typography variant="h4">Add Custom Field</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <Box sx={{ position: "fixed", bottom: "0px", display: "flex", height: "60px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", gap: "20px", alignItems: "center" }}>
        <Button variant="contained" sx={{ height: '40px' }} onClick={toggleDrawer("right", false)}>Cancel</Button>
        <Button variant="contained" sx={{ height: '40px' }}>Save & New</Button>
        <Button variant="contained" sx={{ height: '40px' }}>Save</Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <PermanentTextfield />
        <ParamSelectList label="Field Type" options={availableFieldType} value={value} setValue={setValue} />
      </Box>
      <CustomFieldDefine />
    </Box>
  )
}

const CustomFields = ({ customFieldDrawer }) => {
  const [hoverUnusedField, setHoverUnusedField] = useState(false);
  const { anchor, toggleDrawer } = useDrawer();
  const isMobile = useMediaQuery('(max-width: 767px)')
  return (
    <Box sx={{ width: "800px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: "0px 20px 0px 20px" }}>
        <Typography variant="h4">Custom Field</Typography>
        <Button onClick={customFieldDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "space-between", width: "100%" }}>
        {/* Used Fields*/}
        <Box sx={{ display: 'flex', flexDirection: "column", gap: "20px", height: '100%', padding: "20px 20px 20px 20px", width: "50%" }}>
          <Typography>Used Fields</Typography>
          <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Name" variant="outlined" />
          <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Admission No." variant="outlined" />
        </Box>
        {/*Unused Fields*/}
        <Box sx={{ display: 'flex', flexDirection: "column", gap: "20px", height: '100%', padding: "20px 20px 20px 20px", width: "50%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography>Unused Fields</Typography>
            <Typography variant="text" sx={{ color: "#2196f3", cursor: "pointer" }} onClick={toggleDrawer("right", true)}>Add Custom Field</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }} id="Unused Fields">
            <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Class" variant="outlined" />
            <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", gap: "5px" }} onMouseEnter={() => setHoverUnusedField(true)} onMouseLeave={() => setHoverUnusedField(false)}>
              <DragIndicatorOutlinedIcon sx={{ visibility: hoverUnusedField ? 'visible' : "hidden" }} />
              <Box sx={{ border: "1px solid #eee", height: "40px", alignItems: "center", borderRadius: "4px", verticalAlign: "center", width: "85%" }}>
                <Typography>Name</Typography>
              </Box>
              <EditOutlinedIcon sx={{ visibility: hoverUnusedField ? 'visible' : "hidden" }} />
              <DoDisturbOnOutlinedIcon sx={{ visibility: hoverUnusedField ? 'visible' : "hidden" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", position: "fixed", bottom: "0px", borderTop: "1px solid #eee", borderBotttom: "1px solid #eee", width: "800px", padding: "0px 20px" }}>
        <Typography variant="text" sx={{ padding: "20px 20px 20px 20px" }}>
          Used Custom Fields:2/50
        </Typography>
        <Box sx={{ display: "flex", gap: "20px", alignItems: 'center' }}>
          <Button variant="contained" sx={{ height: "40px" }}>Save</Button>
          <Button variant="contained" sx={{ height: "40px" }} onClick={customFieldDrawer("right", false)}>Cancel</Button>
        </Box>
      </Box>
      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer("right", true)}>
        <AddCustomField toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
}

export default CustomFields;