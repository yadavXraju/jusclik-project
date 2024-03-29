import {useState} from 'react';
import {Typography, Box, Button,TextField} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ParamSelectList from 'views/common-section/ParamSelectList';

const subType = [
    { value: "SingleSelect", label: "Single Select" },
    { value: "MultiSelect", label: "Multi-Select" },
  ];

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

const Picklist = () => {
    const [value, setValue] = useState();
    return (
      <>
        <ParamSelectList label="Sub Type" options={subType} value={value} setValue={setValue} />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Mandatory Field" />
        <Box sx={{ display: "flex", justifyContent: "space-around", width: "200px" }}>
          <Typography>Picklist Options</Typography>
          <Typography><span><AddOutlinedIcon /></span>Option in Bulk</Typography>
        </Box>
        <TextField label="Specify Option Name" value={value} onChange={(e) => onChange(e.target.value)}
          variant="outlined"
          fullWidth
        />
         <TextField label="Specify Option Name" value={value} onChange={(e) => onChange(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" startIcon={<AddOutlinedIcon />}>Add More</Button>
        <ParamSelectList label="Set Default Value" options={availableFieldType} value={value} setValue={setValue} />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Show picklist values in Ascending order" />
      </>
    )
  }

  export default Picklist;