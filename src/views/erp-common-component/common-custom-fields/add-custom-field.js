import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import ParamSelectList from 'views/common-section/ParamSelectList';
import { Email, CustomCheckbox, Phone, CustomText, CustomNumber, Currency, URL, CustomDate } from './custom-field-options';
import Picklist from './Picklist';


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
    value: "Custom Fields",
    label: "Custom Fields"
  }
]

const intialCustomFields = {
  label: "this custom text",
  group:"Primary Details",
  subGroup: "Other Details",
  fieldType: "Text",
  picklist: {
    isMandatory: "",
    subType: "",
    PicklistOption: [],
    setDefaultValue: null,
  },
  customText: {
    subType: "Single Line",
    isMandatory: true,
    duplicates: true,
    encryptField: false
  },
  numerical: {
    isMandatory: "",
    subType: "",
    duplicates: "",
    encryptField: ""
  },
  date: {
    isMandatory: "",
    subType: "",
  },
  currencey: {
    isMandatory: "",
  },
  phone: {
    isMandatory: "",
    subType: "",
    encryptField: ""
  },
  url: {
    isMandatory: "",
    duplicates: ""
  }
}




const AddCustomField = ({ toggleDrawer, section ,handleAddField }) => {
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

  //Setting Custom Text
  const handleCustomText = (e) => {
    const { name, checked } = e.target;
    if (checked == true || checked == false) {
      setCustomFields((prevFields) => ({
        ...prevFields,
        customText: {
          ...prevFields.customText,
          [name]: checked,
        },
      }));
    }
    else {
      const { name, value } = e.target;
      setCustomFields((prevFields) => ({
        ...prevFields,
        customText: {
          ...prevFields.customText,
          [name]: value,
        },
      }));
    }
  }


  //Setting Picklist

  //Setting CustomDate

  //Setting CustomNumber


  //Setting CustomCheckbox


  // Phone

  const DynamicRender = ({ switchValue, onChange }) => {
    switch (switchValue) {
      case 'Picklist':
        return <Picklist option={customFields?.picklist} onChange={onChange} />;
      case 'Text':
        return <CustomText option={customFields?.customText} onChange={handleCustomText} />;
      case 'Date':
        return <CustomDate option={customFields?.date} onChange={onChange} />;
      case 'Numerical':
        return <CustomNumber option={customFields?.numerical} onChange={onChange} />;
      case 'Email':
        return <Email option={customFields?.email} onChange={onChange} />;
      case 'Checkbox':
        return <CustomCheckbox option={customFields?.customCheckbox} onChange={onChange} />;
      case 'Phone':
        return <Phone option={customFields?.phone} onChange={onChange} />;
      case 'Currency':
        return <Currency option={customFields?.currencey} onChnage={onChange} />;
      case 'URL':
        return <URL option={customFields?.url} onChange={onChange} />;
      default:
        return null;
    }
  }

  useEffect(() => {

  }, [customFields])


  return (
    <Box sx={{ width: "480px", padding: "0px 20px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: "0px 20px 0px 20px" }}>
        <Typography variant="h4">Add Custom Field</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <Box sx={{ height: "calc(100vh - 100px)", overflowY: "auto" }} className="scrollbar">
        <Box sx={{ position: "fixed", bottom: "0px", display: "flex", height: "60px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", gap: "20px", alignItems: "center" }}>
          <Button variant="contained" sx={{ height: '40px' }} onClick={toggleDrawer("right", false)}>Cancel</Button>
          <Button variant="contained" sx={{ height: '40px' }}>Save & New</Button>
          <Button variant="contained" sx={{ height: '40px' }} onClick={()=>handleSave()}>Save</Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px 20px 20px 20px" }}>
          <TextField
            id="permanent-textfield"
            sx={{ width: "100%" }}
            label="Enter Lable"
            name="label"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  Field Label
                </InputAdornment>
              ),
            }}
          />
          <ParamSelectList label="Add In Group" options={availableGroup} value={customFields?.group} onChange={handleChange}
            size="medium" name="group"
          />
          <ParamSelectList label="Add In SubGroup" options={section} value={customFields?.subGroup} onChange={handleChange}
            size="medium" name="subGroup"
          />
          <ParamSelectList label="Field Type" options={availableFieldType} value={customFields?.fieldType} onChange={handleChange}
            size="medium" name="fieldType"
          />
          <DynamicRender switchValue={customFields?.fieldType} />
        </Box>
      </Box>
    </Box>
  )
}

export default AddCustomField;