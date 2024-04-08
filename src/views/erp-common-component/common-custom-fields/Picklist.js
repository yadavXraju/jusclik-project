import { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import ParamSelectPlaceholder from 'views/common-section/ParamSelectPlaceholder';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const subType = [
  { value: "SingleSelect", label: "Single Select" },
  { value: "MultiSelect", label: "Multi-Select" },
];

const availableFieldType = [
  { value: "Picklist", label: "Picklist" },
  { value: "Text", label: "Text" },
  { value: "Numerical", label: "Numerical" },
  { value: "Date", label: "Date" }
];

const Picklist = ({ option, onChange }) => {
  const [hoverUnusedField, setHoverUnusedField] = useState(-1);
  const [value, setValue] = useState(2);

  const style = {
    SelectListStyle: {
      rootStyle: {
        height: "50px"
      }
    }
  }

  const AddMore = () => {
    setValue(value + 1)
  }

  const handleRemove=()=>{
    setValue(value-1);
  }

  return (
    <>
      <ParamSelectPlaceholder options={subType} value={option?.subType} onChange={onChange}
        name="subType" placeholder="Sub-type"
        rootStyle={style?.SelectListStyle?.rootStyle}
        customSytle={style?.SelectListStyle?.rootStyle}
      />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Mandatory Field" sx={{ marginTop: "-10px" }} />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography sx={{ whiteSpace: "nowrap" }}>Picklist Options</Typography>
          <Typography sx={{ whiteSpace: "nowrap", Color: "blue", display: "flex", alingItems: "center", color: '#1980d8' }}><AddOutlinedIcon sx={{ marginTop: "-3px", marginRight: "6px" }} />Options in Bulk</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "10px", width: "100%" }}>
          {/*select option */}
          {
            Array.from({length:value}, (_, index) =>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px 10px 0px 0px",
                  marginTop: "10px",
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '2'
                  }
                }}
                key={index}
                className='findcomp'
                onMouseEnter={() => setHoverUnusedField(index)}
                onMouseLeave={() => setHoverUnusedField(-1)}
              >
                <DragIndicatorOutlinedIcon sx={{color: "#b3b9c1"}} />
                <TextField
                  id="permanent-textfield"
                  sx={{
                    borderRadius: "4px", display: "flex", alignItems: "center", width: "307px", paddingLeft: "10px", '& input': {
                      height: "15px !important",
                    }
                  }}
                  value={option?.defaultValue}
                  placeholder="Specify option name"
                  name="defaultValue"
                  fullWidth
                  onChange={onChange}
                />
                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", marginLeft: "10px" }}>
                  <AddCircleIcon sx={{ visibility: hoverUnusedField == index ? 'visible' : "hidden", height: "20px", width: "20px", color: "#00bf7c" }} onClick={()=>AddMore()}/>
                  <RemoveCircleIcon sx={{ visibility: hoverUnusedField == index ? 'visible' : "hidden", height: "20px", width: "20px", color: "#ff7c80" }} onClick={()=>handleRemove( )}/>
                </Box>
              </Box>
            )
          }
        </Box>
      </Box>
      <Button variant="outline" startIcon={<AddOutlinedIcon />} sx={{ width: "299px", border: "1px dotted black", marginTop: "10px",marginLeft:"41px",borderRadius:"8px" }} onClick={AddMore}>Add More</Button>
      <ParamSelectPlaceholder placeholder="Select Default Value" name="defaultValue" options={availableFieldType} value={option?.defaultValue} onChange={onChange}
        rootStyle={style?.SelectListStyle?.rootStyle}
        customSytle={style?.SelectListStyle?.rootStyle} />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Show picklist values in Ascending order" />
    </>
  )
}

export default Picklist;