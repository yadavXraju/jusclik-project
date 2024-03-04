import React, { useState } from 'react';
import { Chip, Grid, Box, Paper, TextField, Typography } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AvatarImage from 'assets/images/avatar.png';
import ParameterizedAutoComplete from 'views/common-section/ParamAutoComplete';
import SearchBar from 'views/common-section/SearchBox';
import DateComponent from 'views/common-section/ParamDateComponent';
import ParamTime from 'views/common-section/ParamTime';
import ParamAttachement from 'views/common-section/ParamAttachement';
import ParamPrevAndNext from 'views/common-section/ParamPrevAndNext';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import PrintPdf from 'views/common-section/withPrintPdf';
// import VisitorDetails from '../VisitorDetails';
// import ShowVisitorButton from '../ShowVisitorButton';
// import PrintVisitorButton from '../PrintVisitorButton';


//sample data
const visitorDetails = [
  { label: 'Aamir Khan', year: 1994, id: '686712729' },
  { label: 'Shah Rukh Khan', year: 1972, id: '446712729' },
  { label: 'Salman Khan', year: 1974, id: '126712729' },
  { label: 'Rajinikanth', year: 2008, id: '456712729' },
  { label: 'Amitabh Bachchan', year: 1957, id: '906712729' },
  { label: 'Priyanka Chopra', year: 1993, id: '766712729' },
  { label: 'Deepika Padukone', year: 1994, id: '534712729' },
  { label: 'Hrithik Roshan', year: 2003, id: '68673652729' },
  { label: 'Kareena Kapoor Khan', year: 1966, id: '7626712729' },
  { label: 'Akshay Kumar', year: 1999, id: '621812729' },
  { label: 'Aishwarya', year: 2001, id: '123712729' },
  { label: 'Ranbir Kapoor', year: 1980, id: '2762112729' },
  { label: 'Alia Bhatt', year: 1994, id: '216112729' },
  { label: 'Ranveer Singh', year: 2010, id: '261712729' },
  { label: 'Katrina Kaif', year: 2002, id: '127712729' },
  { label: 'Varun Dhawan', year: 1975, id: '7906712729' }
];

const VisitorEntry = () => {
  // const printRef = useRef();
  const [currVisitor, setCurrVisitor] = useState(visitorDetails[0]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [visitorInfo, setVisitorInfo] = useState({
    "name": "",
    "address": "",
    "phone": "",
    "disableOtp": "",
    "entryDate": null,
    "entryCode": "",
    "timeIn": null,
    "timeOut": null,
    "category": "",
    "accompaniedBy": "",
    "purpose": "",
    "toMeet": "",
    "temperature": "",
    "remarks": ""
  });

  const handleChange = (name, value) => {
    console.log(name, value);
    setVisitorInfo({ ...visitorInfo, [name]: value });
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
      flexDirection: "column",
      textAlign: "flex-start"
    }
  }

  return (
    <>
      <Grid container spacing={3} >
        {/*Visitor Entry */}
        <Grid item xs={10} sm={10} md={10} lg={12} >
          <Paper sx={{ padding: "40px 40px 40px 40px" }}>
            <Typography variant="h5">Visitor Details</Typography>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                <Box sx={{ display: "flex", wrap: "no-wrap", gap: "20px",marginTop:"20px" }}>
                  {/* <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained"> */}
                    <AddOutlinedIcon />
                  {/* </Button> */}
                  {/* <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained"> */}
                    <ModeEditOutlinedIcon />
                  {/* </Button> */}
                  {/* <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained" color="error"> */}
                    <DeleteOutlinedIcon />
                  {/* </Button> */}
                  {/* <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained"> */}
                     <MoreVertOutlinedIcon />
                  {/* </Button> */}
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
                <SearchBar id="name" placeholder="Name ..." rootSx={style.customStyle} autocomplete="off" onChange={(event) => handleChange("name", event.target.value)} />
                <TextField id="address" label="Address" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("address", event.target.value)} autoComplete="off" sx={style.customStyle} />
                <TextField id="phone" label="Phone" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("phone", event.target.value)} autoComplete="off" sx={style.customStyle} />
                <TextField id="disable otp" label="Disable OTP" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("disableOtp", event.target.value)} autoComplete="off" sx={style.customStyle} />
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
              <DateComponent option={visitorInfo?.entryDate} label="Entry Date" value={visitorInfo?.entryDate} onChange={(newDate) => handleChange("entryDate", newDate)} customStyle={style.customStyle} />
              <ParameterizedAutoComplete option={visitorDetails} id="entryCode" label="Entry Code" onChange={(event, newData) => handleChange("entryCode", newData)} customStyle={style.customStyle} />
              <ParamTime customStyle={style.timePickerStyle} label="Time In" onChange={(time) => handleChange("timeIn", time)} />
              <ParamTime customStyle={style.timePickerStyle} label="Time Out" onChange={(time) => handleChange("timeOut", time)} />
              <ParameterizedAutoComplete option={visitorDetails} id="category" label="Category" onChange={(event, newData) => handleChange("category", newData)} customStyle={style.customStyle} />
              <ParameterizedAutoComplete option={visitorDetails} id="accompaniedby" label="Accompanied  By" onChange={(event, newData) => handleChange("accompaniedBy", newData)} customStyle={style.customStyle} />
              <TextField label="Purpose" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("purpose", event.target.value)} sx={style.customStyle} />
              <ParameterizedAutoComplete option={visitorDetails} label="To meet" onChange={(event, newData) => handleChange("toMeet", newData)} customStyle={style.customStyle} />
              {/* Temperature */}
              <TextField label="Temperature" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("temperature", event.target.value)} sx={style.customStyle} />
              {/* Remarks */}
              {!commentOpen && <Box sx={{ color: "blue", cursor: "pointer", lineHeight: "50px" }} onClick={() => setCommentOpen(!commentOpen)}>+ Add Remarks</Box>}
              {commentOpen && <TextField
                id="comment"
                label="Reamrks"
                variant="outlined"
                sx={style.remarksBoxStyle}
                onChange={(event) => handleChange("remarks", event.target.value)}
                placeholder="Remarks ..."
              />}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              <Box sx={{ display: "flex", gap: "60px", marginTop: "8px" }}>
                <ParamAttachement label="Photo" rootSx={style.AttachementStyle} />
                <ParamAttachement label="ID Proof" rootSx={style.AttachementStyle} />
              </Box>

            </Box>
          </Paper>
        </Grid>
      </Grid>


      {/* Action Buttons  */}
      {/* < Grid item xs={10} sm={10} md={2} lg={2}>
          <Paper sx={{ padding: "20px 20px 20px 20px", textAlign: "center" }}>
            <PrintPdf ref={printRef} Children={<PrintVisitorButton />} />
            <ShowVisitorButton />
          </Paper>
          <Box sx={{ display: "none" }}>
            <VisitorDetails ref={printRef} />
          </Box>
        </Grid > */}
      {/* </Grid > */}
    </>
  );
};

export default VisitorEntry;


