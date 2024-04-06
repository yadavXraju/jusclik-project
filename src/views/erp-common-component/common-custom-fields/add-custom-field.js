import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, TextField,FormControl } from '@mui/material';
import ParamSelectPlaceholder from 'views/common-section/ParamSelectPlaceholder';
import { Email, CustomCheckbox, Phone, CustomText, CustomNumber, Currency, URL, CustomDate } from './custom-field-options';
import Picklist from './Picklist';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';


const availableFieldType = [
  { value: "Picklist", label: "Picklist",icon:<ListAltOutlinedIcon /> },
  { value: "Text", label: "Text" ,icon:<AssignmentOutlinedIcon />},
  { value: "Numerical", label: "Numerical",icon:<LooksOneOutlinedIcon /> },
  { value: "Date", label: "Date",icon:<CalendarMonthTwoToneIcon /> },
  { value: "Currency", label: "Currency",icon:<SavingsOutlinedIcon /> },
  { value: "Email", label: "Email",icon:<EmailOutlinedIcon /> },
  { value: "Phone", label: "Phone",icon:<PhoneAndroidOutlinedIcon /> },
  { value: "URL", label: "URL",icon:<PublicOutlinedIcon />},
  {value:"CheckBox",label:"CheckBox",icon:<CheckBoxOutlinedIcon />}
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

  //HandlePiclist
  const handlePicklist=(e)=>{
    // const { name, checked } = e.target;
    //console.log(name,checked)
    // if (checked == true || checked == false) {
    //   setCustomFields((prevFields) => ({
    //     ...prevFields,
    //     picklist: {
    //       ...prevFields.picklist,
    //       [name]: checked,
    //     },
    //   }));
    // }
    // else {
      const { name, value } = e.target;
      console.log(name,value)
      setCustomFields((prevFields) => ({
        ...prevFields,
        picklist: {
          ...prevFields.picklist,
          [name]: value,
        },
      }));
    // }
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
  const handleCustomDate = (e) => {
    const { name, checked } = e.target;
    if (checked == true || checked == false) {
      setCustomFields((prevFields) => ({
        ...prevFields,
        date: {
          ...prevFields.date,
          [name]: checked,
        },
      }));
    }
    else {
      const { name, value } = e.target;
      setCustomFields((prevFields) => ({
        ...prevFields,
        date: {
          ...prevFields.date,
          [name]: value,
        },
      }));
    }
  }

  //Setting CustomNumber
  const handleCustomNumber = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked)
    if (checked == true || checked == false) {
      setCustomFields((prevFields) => ({
        ...prevFields,
        numerical: {
          ...prevFields.numerical,
          [name]: checked,
        },
      }));
    }
    else {
      const { name, value } = e.target;
      setCustomFields((prevFields) => ({
        ...prevFields,
        numerical: {
          ...prevFields.numerical,
          [name]: value,
        },
      }));
    }
  }

  // Email
  const handleURL=(e)=>{
    const { name, checked } = e.target;
    if (checked == true || checked == false) {
      setCustomFields((prevFields) => ({
        ...prevFields,
        url: {
          ...prevFields.url,
          [name]: checked,
        },
      }));
    }
    else {
      const { name, value } = e.target;
      setCustomFields((prevFields) => ({
        ...prevFields,
        url: {
          ...prevFields.url,
          [name]: value,
        },
      }));
    }
  }

  // Phone
   const handlePhoneChange=(e)=>{ 
    const { name, checked } = e.target;
    if (checked == true || checked == false) {
      setCustomFields((prevFields) => ({
        ...prevFields,
        phone: {
          ...prevFields.phone,
          [name]: checked,
        },
      }));
    }
    else {
      const { name, value } = e.target;
      setCustomFields((prevFields) => ({
        ...prevFields,
        phone: {
          ...prevFields.phone,
          [name]: value,
        },
      }));
    }
   }

  const handleCurrency = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked)
    if (checked == true || checked == false) {
      setCustomFields((prevFields) => ({
        ...prevFields,
        currencey: {
          ...prevFields.currencey,
          [name]: checked,
        },
      }));
    }
    else {
      const { name, value } = e.target;
      setCustomFields((prevFields) => ({
        ...prevFields,
        currencey: {
          ...prevFields.currencey,
          [name]: value,
        },
      }));
    }
  }

  const handleCheckbox=(e)=>{
    const { name, checked } = e.target;
    if (checked == true || checked == false) {
      setCustomFields((prevFields) => ({
        ...prevFields,
        customCheckbox:{
          ...prevFields.customCheckbox,
          [name]:!customFields.customCheckbox.checked,
        },
      }));
    }
  }



  const DynamicRender = ({ switchValue, onChange }) => {
    switch (switchValue) {
      case 'Picklist':
        return <Picklist option={customFields?.picklist} onChange={handlePicklist} />;
      case 'Text':
        return <CustomText option={customFields?.customText} onChange={handleCustomText} />;
      case 'Date':
        return <CustomDate option={customFields?.date} onChange={handleCustomDate} />;
      case 'Numerical':
        return <CustomNumber option={customFields?.numerical} onChange={handleCustomNumber} />;
      case 'Email':
        return <Email option={customFields?.email} onChange={onChange} />;
      case 'CheckBox':
        return <CustomCheckbox option={customFields?.customCheckbox} onChange={handleCheckbox} />;
      case 'Phone':
        return <Phone option={customFields?.phone} onChange={handlePhoneChange} />;
      case 'Currency':
        return <Currency option={customFields?.currencey} onChnage={handleCurrency} />;
      case 'URL':
        return <URL option={customFields?.url} onChange={handleURL} />;
      default:
        return null;
    }
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
          <ParamSelectPlaceholder options={availableFieldType} value={customFields?.fieldType} onChange={handleChange}
            size="medium" name="fieldType" placeholder="Field Type"
          />
          <DynamicRender switchValue={customFields?.fieldType} />
        </Box>
      </Box>
    </Box>
  )
}

export default AddCustomField;