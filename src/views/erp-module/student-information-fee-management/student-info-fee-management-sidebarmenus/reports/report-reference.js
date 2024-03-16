import React, { useState } from 'react'
import { Box, TextField, Typography} from '@mui/material';
import ParramPopover from 'views/common-section/ParamPopOverasDropDown';
import ParamWarningBox from 'views/common-section/ParamWarningBox';

const ReportReference = () => {
  const [value, setValue] = useState('');
  const [selectDropDown, setSelectDropDown] = useState("Only Me");
  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <Box sx={{ display: "flex", flexDirection: "column",overflowX:"hidden",overflowY:"auto"}}>
      <TextField
        label="Report Name"
        variant="outlined"
        value={value}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{ width: "50%" }}
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
        sx={{ width: "50%" }}
      />
      <ParamWarningBox cancelIcon={{display:"none"}} customStyle={{marginTop:"20px",width:"50%"}} label="You can use report descriptions to help you identify the details of the reports for your reference." severity="info" />
      <Typography variant="h4" sx={{ marginTop: "20px" }}>Configure Permission</Typography>
      <Box sx={{ display: "flex", gap: "60px", marginTop: "30px", alignItems: 'center' }}>
        <Typography>
          Share this with:
        </Typography>
        <ParramPopover selectDropDown={selectDropDown} setSelectDropDown={setSelectDropDown}/>
      </Box>
      <ParamWarningBox cancelIcon={{display:"none"}} customStyle={{marginTop:"20px",backgroundColor:'#fff4e5',width:"50%"}} label="Although you want to limit the access to this report to yourself, users who have full access to reports(Admins) will be able to access it." severity="warning" />
    </Box>
  )
}

export default ReportReference;
