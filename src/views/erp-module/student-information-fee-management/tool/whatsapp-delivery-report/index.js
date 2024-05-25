
import React, { useState } from 'react';
import { Box, Paper, TextField,Button} from '@mui/material';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';

const whatsappStatus = ["All", "Pushed", "Sent","Delivered","Read","Failed"];
const subjects = ["Delivered", "notdelivered", "yetto delivered"];

const WhatsappDeliveryReport = () => {
  const [searchData, setsearchData] = useState({
    "whatsappDateFrom": "",
    "whatsappDateTo":"",
    "mobileNo":"",
    "whatsappStatus":"",
    "loginName":"",
    "schoolName":""
  });

  const style = {
    filter: {
      width: "200px"
    },
  }

  const handleChange = (name, newValue) => {
    setsearchData({ ...searchData, [name]: newValue });
  }

  return (
    <>
      <Paper>
        <Box container spacing={1} sx={{ padding: "20px 0px 20px 60px", display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "40px" }}>
          <ParameterizedDateComponent option={subjects} label="Whatsapp Date From" value={searchData?.startDate} onChange={(newDate) => handleChange("whatsappDateFrom", newDate)} customStyle={style.filter} />
          <ParameterizedDateComponent option={subjects} label="Whatsapp Date To" value={searchData?.startDate} onChange={(newDate) => handleChange("whatsappDateTo", newDate)} customStyle={style.filter} />
          <TextField id="outlined-basic" type="number " label="Mobile No." variant="outlined" inputProps={{ maxLength: 15 }} sx={style.filter} onChange={(event) => handleChange("mobileNo", event.target.value)} />
          <ParameterizedAutoComplete option={whatsappStatus} label="WhatsApp Status" onChange={(event, newData) => handleChange("whatsappStatus", newData)} customStyle={style.filter} />
          <ParameterizedAutoComplete option={subjects} label="Login Name" onChange={(event, newData) => handleChange("loginName", newData)} customStyle={style.filter} />
          <ParameterizedAutoComplete option={subjects} label="School Name" onChange={(event, newData) => handleChange("schoolName", newData)} customStyle={style.filter} />
          <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained">Show Data</Button>
        </Box>
      </Paper>
    </>
  )
}

export default WhatsappDeliveryReport;