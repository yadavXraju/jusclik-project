// @Page Owner-Tarun Pandey
import React, { useState } from 'react'
import { Box, TextField, Typography} from '@mui/material';
import ParramPopover from 'components/PopOverasDropDown';
import ParamWarningBox from 'components/WarningBox';

const dropDownOption=["Only Me","Only Select","Everyone"];
const ReportReference = () => {
  const [value, setValue] = useState('');
  const [selectDropDown, setSelectDropDown] = useState("Only Me");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const width=window.innerWidth<1200?"100%":"80%";

  return (
    <Box sx={{ display: "flex",width:width,flexDirection: "column",overflowX:"hidden",overflowY:"auto"}}>
      <TextField
        label="Report Name"
        variant="outlined"
        value={value}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{ width:width }}
      />
      <TextField
        label="Report Description"
        variant="outlined"
        value={value}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
        sx={{ width: width}}
      />
      <ParamWarningBox cancelIcon={{display:"none"}} customStyle={{marginTop:"20px",width:width}} label="You can use report descriptions to help you identify the details of the reports for your reference." severity="info" />
      <Typography variant="h4" sx={{ marginTop: "20px" }}>Configure Permission</Typography>
      <Box sx={{ display: "flex", gap: "60px", marginTop: "30px", alignItems: 'center' }}>
        <Typography>
          Share this with:
        </Typography>
        <ParramPopover selectDropDown={selectDropDown} setSelectDropDown={setSelectDropDown} dropDownOption={dropDownOption}/>
      </Box>
      <ParamWarningBox cancelIcon={{display:"none"}} customStyle={{marginTop:"20px",backgroundColor:'#fff4e5',width:width}} label="Although you want to limit the access to this report to yourself, users who have full access to reports(Admins) will be able to access it." severity="warning" />
    </Box>
  )
}

export default ReportReference;
