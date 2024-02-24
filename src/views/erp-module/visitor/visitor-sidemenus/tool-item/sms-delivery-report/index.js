import { useState, useRef } from 'react';
import {  Box, Paper, TextField, Button, Typography, useMediaQuery } from '@mui/material';
import ParameterizedAutoComplete from 'views/common-section/parameterizedAutoComplete';
import DateComponent from 'views/common-section/DateComponent';
import SmsDeliveryTable from './smsDeliveryTable';
import Report from './Report';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ReactToPrint from "react-to-print";
const subjects = ["Delivered", "notdelivered", "yetto delivered"];


const SmsDeliveryReport = () => {
  const ref = useRef();
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

  const matches=useMediaQuery('(max-width:500px)');
  const width=matches?"90%":"200px";

  const style={
    filter:{
          width:width,
    }
  }


  return (
    <>
      <Paper>
        <Box container spacing={1} sx={{ padding: "20px 0px 20px 20px", display: "flex",flexWrap:"wrap", flexDirection: "row", gap: "20px"}}>
          <DateComponent option={subjects} label="SMS Date From" value={filterData?.startDate} onChange={(newDate) => handleChange("startDate", newDate)}  customStyle={style.filter} />
          <DateComponent option={subjects} name="endDate" label="SMS Date To" value={filterData?.endDate} onChange={(newDate) => handleChange("endDate", newDate)}  customStyle={style.filter} />
          <TextField id="outlined-basic" label="Mobile No." variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("mobileNo", event.target.value)} />
          <ParameterizedAutoComplete option={subjects} label="SMS Status" onChange={(event, newData) => handleChange("smsStatus", newData)}  customStyle={style.filter}/>
          <ParameterizedAutoComplete option={subjects} label="Login Name" onChange={(event, newData) => handleChange("loginName", newData)}  customStyle={style.filter}/>
          <ParameterizedAutoComplete option={subjects} label="School Name" onChange={(event, newData) => handleChange("schoolName", newData)}  customStyle={style.filter}/>
          <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained">
            Show Data
          </Button>
        </Box>
      </Paper>
      <Box  sx={{ backgroundColor: "#d9edf7", height: "auto", borderRadius: "5px", padding: "10px  0px 10px 20px", marginTop: "20px", wordSpacing: "5px" }}>
        <Typography className="warning" variant="h5">Note : SMS Delivery Report for more than 30 days will not be available on the server for best performance</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <Typography className="info" sx={{ wordSpacing: "3px" }} variant="h4">129 Records : Total SMS Count = 249</Typography>
        <Box className="print-icons" sx={{dispaly:"flex !important "}}>
          <ReactToPrint variant="outlined" trigger={() => <Button><LocalPrintshopOutlinedIcon /></Button>}
            content={() => ref.current}  />
          <Button variant="outlined"><InsertDriveFileOutlinedIcon /></Button>
        </Box>
      </Box>
      < SmsDeliveryTable />
      <Box sx={{ display: "none"}}>
        <Report ref={ref} />
      </Box>
    </>
  )
}

export default SmsDeliveryReport