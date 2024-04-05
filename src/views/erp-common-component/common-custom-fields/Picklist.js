import { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ParamSelectList from 'views/common-section/ParamSelectList';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';

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
  const [value, setValue] = useState('');
  const [hoverUnusedField, setHoverUnusedField] = useState(-1);

  const style = {
    SelectListStyle: {
      rootStyle: {
        height: "50px"
      }
    }
  }
  return (
    <>
      <ParamSelectList label="Sub Type" options={subType} value={value} setValue={setValue}
        rootStyle={style?.SelectListStyle?.rootStyle}
        customSytle={style?.SelectListStyle?.rootStyle}
      />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Mandatory Field" sx={{ marginTop: "-20px" }} />
      <Box sx={{ width: "90%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%"}}>
          <Typography sx={{ whiteSpace: "nowrap" }}>Picklist Options</Typography>
          <Typography sx={{ whiteSpace: "nowrap",Color:"blue",display:"flex",alingItems:"center"}}><AddOutlinedIcon sx={{marginTop:"-3px"}}/>Option in Bulk</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "5px",
              padding: "5px 10px 5px 0px",
            }}
            onMouseEnter={() => setHoverUnusedField(2)}
            onMouseLeave={() => setHoverUnusedField(-1)}
          >
            <DragIndicatorOutlinedIcon />
            <Box sx={{ border: "1px solid #eee", height: "40px", borderRadius: "4px", display: "flex", alignItems: "center", width: "85%", paddingLeft: "10px" }}>
              <Typography></Typography>
            </Box>
            <EditOutlinedIcon sx={{ visibility: hoverUnusedField == 2? 'visible' : "hidden", height: "20px", width: "20px" }} />
            <DoDisturbOnOutlinedIcon sx={{ visibility: hoverUnusedField == 2? 'visible' : "hidden", height: "20px", width: "20px" }} />
          </Box>
          <Box  
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "5px",
              padding: "5px 10px 5px 0px",
            }}
            onMouseEnter={() => setHoverUnusedField(1)}
            onMouseLeave={() => setHoverUnusedField(-1)}
          >
            <DragIndicatorOutlinedIcon />
            <Box sx={{ border: "1px solid #eee", height: "40px", borderRadius: "4px", display: "flex", alignItems: "center", width: "85%", paddingLeft: "10px" }}>
              <Typography></Typography>
            </Box>
            <EditOutlinedIcon sx={{ visibility: hoverUnusedField == 1 ? 'visible' : "hidden", height: "20px", width: "20px" }} />
            <DoDisturbOnOutlinedIcon sx={{ visibility: hoverUnusedField == 1 ? 'visible' : "hidden", height: "20px", width: "20px" }} />
          </Box>
        </Box>
      </Box>
      <Button variant="outline" startIcon={<AddOutlinedIcon />} sx={{ width: "75%",border:"1px dotted black" }}>Add More</Button>
      <ParamSelectList label="Set Default Value" options={availableFieldType} value={value} setValue={setValue}
        rootStyle={style?.SelectListStyle?.rootStyle}
        customSytle={style?.SelectListStyle?.rootStyle} />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Show picklist values in Ascending order" />
    </>
  )
}

export default Picklist;