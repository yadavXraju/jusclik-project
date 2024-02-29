import React, { useState, useRef } from 'react';
import { Chip, Grid, Box, Paper, TextField, Typography, Button } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AvatarImage from 'assets/images/avatar.png';
import ParameterizedAutoComplete from 'views/common-section/ParamAutoComplete';
import SearchBar from 'views/common-section/SearchBox';
import DateComponent from 'views/common-section/DateComponent';
import ParamTime from 'views/common-section/ParamTime';
import ParamAttachement from 'views/common-section/ParamAttachement';
import ParamPrevAndNext from 'views/common-section/ParamPrevAndNext';
import PrintPdf from 'views/common-section/withPrintPdf';
import VisitorDetails from '../VisitorDetails';
import ShowVisitorButton from '../ShowVisitorButton';
import PrintVisitorButton from '../PrintVisitorButton';


//sample data
const visitorDetails = [
  { label: 'Aamir Khan', year: 1994, id: '686712729', index: 0 },
  { label: 'Shah Rukh Khan', year: 1972, id: '446712729', index: 1 },
  { label: 'Salman Khan', year: 1974, id: '126712729', index: 2 },
  { label: 'Rajinikanth', year: 2008, id: '456712729', index: 3 },
  { label: 'Amitabh Bachchan', year: 1957, id: '906712729', index: 4 },
  { label: 'Priyanka Chopra', year: 1993, id: '766712729', index: 5 },
  { label: 'Deepika Padukone', year: 1994, id: '534712729', index: 6 },
  { label: 'Hrithik Roshan', year: 2003, id: '68673652729', index: 7 },
  { label: 'Kareena Kapoor Khan', year: 1966, id: '7626712729', index: 8 },
  { label: 'Akshay Kumar', year: 1999, id: '621812729', index: 9 },
  { label: 'Aishwarya', year: 2001, id: '123712729', index: 10 },
  { label: 'Ranbir Kapoor', year: 1980, id: '2762112729', index: 11 },
  { label: 'Alia Bhatt', year: 1994, id: '216112729', index: 12 },
  { label: 'Ranveer Singh', year: 2010, id: '261712729', index: 13 },
  { label: 'Katrina Kaif', year: 2002, id: '127712729', index: 14 },
  { label: 'Varun Dhawan', year: 1975, id: '7906712729', index: 15 }
];

const VisitorEntry = () => {
  const printRef = useRef();
  const [currVisitor, setCurrVisitor] = useState(visitorDetails[0]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [visitorInfo,setVisitorInfo] = useState({
    "name": "",
    "address": "",
    "phone": "",
    "disableOtp": "",
    "search": "",
    "entryDate":null,
    "entryCode": "",
    "timeIn":null,
    "timeOut":null,
    "category":"",
    "accompaniedBy":"",
    "purpose":"",
    "toMeet":"",
    "temperature":"",
    "remarks":""
  });

  const handleChange = (name,value) => {
    setVisitorInfo({...visitorInfo,[name]:value});
    console.log(visitorInfo);
  };

  const style = {
    customStyle: {
      width: "280px"
    },
    timePickerStyle: {
      marginTop: "-10px",
      width: "280px"
    },
    remarksBoxStyle: {
      width: "280px",
    },
    AttachementStyle: {
      display: "flex",
      gap: "5px"
    }
  }

  return (
    <>
      <Grid container spacing={3} >
        {/*Visitor Entry */}
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Grid container spacing={3}>
            <Grid item xs={10} sm={10} md={10} lg={12} >
              <Paper sx={{ padding: "40px 40px 40px 40px" }}>
                <Typography variant="h5">Visitor Details</Typography>
                <Box>
                  <Box sx={{ display: "flex", gap: "100px", marginTop: "20px", flexWrap: "wrap" }}>
                    <img src={AvatarImage} alt="visitor-profile" width="60px" height="60px" />
                    <Chip
                      label={currVisitor?.id}
                      onClick={() => {
                        console.log('doing something');
                      }}
                      sx={{ p: 1, width: '140px', height: "50px" }}
                      color="primary"
                    />
                    <ParamPrevAndNext value={currVisitor} data={visitorDetails} setCurrValue={setCurrVisitor} customStyle={{ marginTop: "11px" }} />
                  </Box>
                  <Box sx={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
                    <SearchBar placeholder="Name ..." rootSx={style.customStyle} />
                    <TextField id="outlined-basic" label="Address" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("address", event.target.value)} sx={style.customStyle} />
                    <TextField id="outlined-basic" label="Phone" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("phone", event.target.value)} sx={style.customStyle} />
                    <TextField id="outlined-basic" label="Disable OTP" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("disableOtp", event.target.value)} sx={style.customStyle} />
                  </Box>
                </Box>
              </Paper>
            </Grid>
            {/* Visitor Dtails */}
            <Grid item xs={10} sm={10} md={10} lg={12}>
              <Paper sx={{ padding: "40px 40px 40px 40px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "60px" }}>
                  <Typography variant="h5" sx={{ lineHeight: "42px" }}>Visitor Entry</Typography>
                  <Chip icon={<CheckBoxOutlinedIcon sx={{ color: 'green !important' }} />}
                    label="1874 Total visitors"
                    variant="outlined"
                    sx={{ fontSize: '12px', width: "150px", height: "50px" }}
                  />
                </Box>
                <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
                  <DateComponent option={visitorDetails} label="Entry Date" value={visitorDetails} onChange={(newDate) => handleChange("entryDate", newDate)} customStyle={style.customStyle} />
                  <ParameterizedAutoComplete option={visitorDetails} label="Entry Code" onChange={(event, newData) => handleChange("entryCode", newData)} customStyle={style.customStyle} />
                  <ParamTime customStyle={style.timePickerStyle} label="Time In" onChange={(time)=>handleChange("timeIn",time)} />
                  <ParamTime customStyle={style.timePickerStyle} label="Time Out" onChange={(time)=>handleChange("timeOut",time)} />
                  <ParameterizedAutoComplete option={visitorDetails} label="Category" onChange={(event, newData) => handleChange("Category", newData)} customStyle={style.customStyle} />
                  <ParameterizedAutoComplete option={visitorDetails} label="Accompanied  By" onChange={(event, newData) => handleChange("AccompaniedBy", newData)} customStyle={style.customStyle} />
                  <TextField id="outlined-basic" label="Purpose" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("mobileNo", event.target.value)} sx={style.customStyle} />
                  <ParameterizedAutoComplete option={visitorDetails} label="To meet" onChange={(event, newData) => handleChange("toMeet", newData)} customStyle={style.customStyle} />
                  {/* Temperature */}
                  <TextField id="outlined-basic" label="Temperature" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("temperature", event.target.value)} sx={style.customStyle} />
                  {/* Remarks */}
                  {!commentOpen && <Box sx={{ color: "blue", cursor: "pointer", lineHeight: "50px" }} onClick={() => setCommentOpen(!commentOpen)}>+ Add Remarks</Box>}
                  {commentOpen && <TextField
                    id="comment"
                    label="Reamrks"
                    variant="outlined"
                    sx={style.remarksBoxStyle}
                    placeholder="Remarks ..."
                  />}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                  <Box sx={{ display: "flex", gap: "60px", marginTop: "8px" }}>
                    <ParamAttachement label="Photo" rootSx={style.AttachementStyle} />
                    <ParamAttachement label="ID Proof" rootSx={style.AttachementStyle} />
                  </Box>
                  <Box sx={{ display: "flex", wrap: "no-wrap", gap: "20px" }}>
                    <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained">
                      Add
                    </Button>
                    <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained">
                      Edit
                    </Button>
                    <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained" color="error">
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Action Buttons  */}
        < Grid item xs={10} sm={10} md={2} lg={2}>
          <Paper sx={{ padding: "20px 20px 20px 20px", textAlign: "center" }}>
            <PrintPdf ref={printRef} Children={<PrintVisitorButton />} />
            <ShowVisitorButton />
          </Paper>
          <Box sx={{ display: "none" }}>
            <VisitorDetails ref={printRef} />
          </Box>
        </Grid >
      </Grid >
    </>
  );
};

export default VisitorEntry;


