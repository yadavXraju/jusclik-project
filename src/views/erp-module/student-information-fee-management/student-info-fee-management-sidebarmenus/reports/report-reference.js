import React, { useState } from 'react'
import { Box, TextField, Typography} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InfoIcon from '@mui/icons-material/Info';
import ParamDropDown from 'views/common-section/ParamDropDown';

const selectedOption = ["Only Me", "Only Selected Users& Roles", "Every One"];

const ReportReference = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
      <Box sx={{ display: "flex", flexDirection: "row", backgroundColor: "#f8f9fa !important", height: "30px", alignItems: "center", borderRadius: "10px" }}>
        <span><LightbulbIcon sx={{ color: "yellow", alignItem: "center" }} /></span>
        <Typography sx={{ marginLeft: "10px" }}>
          You can use report descriptions to help you identify the details of the reports for your reference.
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ marginTop: "20px" }}>Configure Permission</Typography>
      <Box sx={{ display: "flex", gap: "60px", marginTop: "30px" }}>
        <Typography>
          Share this with:
        </Typography>
        <ParamDropDown dropDownData={selectedOption}/>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", backgroundColor: "#ffe9d6 !important", height: "30px", alignItems: "center", borderRadius: "10px", marginTop: "30px" }}>
        <InfoIcon sx={{ color: "#ffa500" }} />
        <Typography>Although you want to limit the access to this report to yourself, users who have full access to reports(Admins) will be able to access it.</Typography>
      </Box>
    </Box>
  )
}

export default ReportReference