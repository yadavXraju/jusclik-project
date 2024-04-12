import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, TextField,FormControl } from '@mui/material';
import ParamSelectPlaceholder from 'views/common-section/ParamSelectPlaceholder';




const availableGroup = [
  {
    value: "Primary Details",
    label: "Primary Details"
  },
  {
    value: "Other Details",
    label: "Other Details"
  },
  {
    value:"Address",
    label:"Address"
  },
  {
    value:"Contact Person",
    label:"Contact Person"
  },
  {
    value: "Custom Fields",
    label: "Custom Fields"
  },
]

const intialCustomFields = {
  label: "this custom text",
  group: "",
  subGroup: "",
  fieldType: "",
  picklist: {
    PicklistOption: [],
    isMandatory: "",
    subType:"",
    defaultValue:"",
  },
  customText: {
    subType: "",
    isMandatory: true,
    duplicates: true,
    encryptField: false
  },
  numerical: {
    isMandatory: true,
    duplicates: true,
    encryptField: true
  },
  date: {
    isMandatory: true,
    subType: "",
  },
  currency: {
    isMandatory: true,
  },
  phone: {
    isMandatory:true,
    subType:"",
    encryptField:true
  },
  url: {
    isMandatory:true,
    duplicates:true
  },
  customCheckbox:{
    checked:true,
  }
}




const AddCustomField = ({ toggleDrawer, handleAddField,handleSubGroup,subGroups}) => {
  const [customFields, setCustomFields] = useState(intialCustomFields);

  const handleSave = () => {
    handleAddField(customFields)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  }

 




  useEffect(() => {
    handleSubGroup(customFields?.group);
  }, [customFields])

  
  return (
    <Box sx={{ width: "500px", padding: "0px 20px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: "0px 20px 0px 20px" }}>
        <Typography variant="h4">Add Custom Field</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <Box sx={{ height: "calc(100vh - 100px)", overflowY: "auto" }} className="scrollbar">
        <Box sx={{ position: "fixed", bottom: "0px", display: "flex", height: "60px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", gap: "20px", alignItems: "center" }}>
          <Button variant="contained" sx={{ height: '40px' }} onClick={() => handleSave()}>Save</Button>
          <Button variant="contained" sx={{ height: '40px' }}>Save & New</Button>
          <Button variant="contained" sx={{ height: '40px' }} onClick={toggleDrawer("right", false)}>Cancel</Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px 20px 20px 20px" }}>
          <FormControl>
            <TextField
              id="permanent-textfield"
              sx={{ width: "100%" }}
              placeholder="Enter Label"
              name="label"
              onChange={handleChange}
            />
          </FormControl>
          <ParamSelectPlaceholder options={availableGroup} value={customFields?.group} onChange={handleChange}
            size="medium" name="group" placeholder="Select Group" 
          />
          <ParamSelectPlaceholder options={subGroups} value={customFields?.subGroup} onChange={handleChange}
            size="medium" name="subGroup" placeholder="Select Sub-group"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default AddCustomField;