import React, { useState } from 'react';
import { Box, Grid, Paper, TextField, Button, Typography } from '@mui/material';
import ParameterizedAutoComplete from 'views/common-section/parameterizedAutoComplete';
import DateComponent from 'views/common-section/DateComponent';
import SmsDeliveryTable from './smsDeliveryTable';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const subjects = ["Delivered", "notdelivered", "yetto delivered"];

const SmsDeliveryReport = () => {
  const [filterData, setfilterData] = useState({
    "startDate": null,
    "endDate": null,
    "mobileNo": "",
    "smsStatus": "",
    "loginName": "",
    "schoolName": ""
  });

  const handleChange = (name, newValue) => {
    setfilterData({ ...filterData, [name]: newValue });
  }

  return (
    <>
      <Paper>
        <Grid container spacing={1} sx={{ padding: "20px 0px 20px 20px",display:"flex",flexDirection:"row",gap:"20px"}}>
            <DateComponent option={subjects} label="SMS Date From" value={filterData?.startDate} onChange={(newDate) => handleChange("startDate", newDate)} width="200px" />
            <DateComponent option={subjects} name="endDate" label="SMS Date To" value={filterData?.endDate} onChange={(newDate) => handleChange("endDate", newDate)} width="200px" />
            <TextField id="outlined-basic" label="Mobile No." variant="outlined" inputProps={{ maxLength: 10 }} sx={{ width: '200px' }} onChange={(event) => handleChange("mobileNo", event.target.value)} />
            <ParameterizedAutoComplete option={subjects} label="SMS Status" onChange={(event, newData) => handleChange("smsStatus", newData)} />
            <ParameterizedAutoComplete option={subjects} label="Login Name" onChange={(event, newData) => handleChange("loginName", newData)} />
            <ParameterizedAutoComplete option={subjects} label="School Name" onChange={(event, newData) => handleChange("schoolName", newData)} />
            <Button sx={{height:"40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained">
              Show Data
            </Button>
        </Grid>
      </Paper>
      <Typography className="warning" sx={{ backgroundColor: "#d9edf7", height: "40px", borderRadius: "5px", paddingTop: "8px", marginTop: "20px",wordSpacing:"5px",paddingLeft:"20px" }} variant="h5">Note : SMS Delivery Report for more than 30 days will not be available on the server for best performance</Typography>
      <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
        <Typography className="info" sx={{wordSpacing:"3px"}} variant="h4">129 Records : Total SMS Count = 249</Typography>
        <Box className="print-icons" sx={{}}>
          <Button variant="outlined"><LocalPrintshopOutlinedIcon /></Button>
          <Button variant="outlined"><InsertDriveFileOutlinedIcon /></Button>
        </Box>
      </Box>
      < SmsDeliveryTable />
    </>
  )
}

export default SmsDeliveryReport