import { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import ParamSelectList from 'views/common-section/ParamSelectList';
import { Email, CustomCheckbox, Phone, CustomText, CustomNumber, Currency, URL,CustomDate } from '../../dashboard/custom-field-options';
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

const PermanentTextfield = () => {
  return (
    <TextField
      id="permanent-textfield"
      sx={{ width: "100%" }}
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

const DynamicRender = ({ switchValue }) => {
  console.log(switchValue)
  switch (switchValue) {
    case 'Picklist':
      return <Picklist />;
    case 'Text':
      return <CustomText />;
    case 'Date':
      return <CustomDate />;
    case 'Numerical':
      return <CustomNumber />;
    case 'Email':
      return <Email />;
    case 'Checkbox':
      return <CustomCheckbox />;
    case 'Phone':
      return <Phone />;
    case 'Currency':
      return <Currency />;
    case 'URL':
      return <URL />;
    default:
      return null;
  }
};


const AddCustomField = ({ toggleDrawer }) => {
  const [value, setValue] = useState('');

  return (
    <Box sx={{ width: "480px", padding: "0px 20px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: "0px 20px 0px 20px" }}>
        <Typography variant="h4">Add Custom Field</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <Box sx={{ height: "calc(100vh - 100px)", verflowY: "auto" }} className="scrollbar">
        <Box sx={{ position: "fixed", bottom: "0px", display: "flex", height: "60px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", gap: "20px", alignItems: "center" }}>
          <Button variant="contained" sx={{ height: '40px' }} onClick={toggleDrawer("right", false)}>Cancel</Button>
          <Button variant="contained" sx={{ height: '40px' }}>Save & New</Button>
          <Button variant="contained" sx={{ height: '40px' }}>Save</Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px 20px 20px 20px" }}>
          <PermanentTextfield />
          <ParamSelectList label="Add In Group" options={availableFieldType} value={value} setValue={setValue}
            size="medium"
          />
          <ParamSelectList label="Add In SubGroup" options={availableFieldType} value={value} setValue={setValue}
            size="medium"
          />
          <ParamSelectList label="Field Type" options={availableFieldType} value={value} setValue={setValue}
            size="medium"
          />
          <DynamicRender switchValue={value} />
        </Box>
      </Box>
    </Box>
  )
}

export default AddCustomField;