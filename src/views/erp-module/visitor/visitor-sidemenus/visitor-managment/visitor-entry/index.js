import React, { useState, useRef } from 'react';
import { Chip, Grid, Box, Paper, TextField} from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AvatarImage from 'assets/images/avatar.png';
import ParameterizedAutoComplete from 'views/common-section/ParamAutoComplete';
import SearchBar from 'views/common-section/SearchBox';
import DateComponent from 'views/common-section/DateComponent';
import ParamTime from 'views/common-section/ParamTime';
import ParamAttachement from 'views/common-section/ParamAttachement';
import ParamPrevAndNext from 'views/common-section/ParamPrevAndNext';
import PrintPdf from 'views/common-section/PrintPdf';
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
  const handleChange = (event) => {
    setTemplate(event.target.value);
  };

  const style = {
    customStyle: {
      width: "90%"
    },
    timePickerStyle: {
      width: "90%"
    },
    remarksBoxStyle: {
      width: "90%"
    }
  }

  return (
    <>
      <Grid container spacing={3} >
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Paper>
            <Grid container spacing={4} sx={{ padding: "50px 0px 50px 50px", marginTop: "20px" }}>
              <Grid item xs={10} sm={10} md={10} lg={4}>
                <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                  <img src={AvatarImage} alt="visitor-profile" width="60px" height="60px" />
                  <Chip
                    label={currVisitor?.id}
                    onClick={() => {
                      console.log('doing something');
                    }}
                    sx={{ p: 1, width: '140px', height: "50px" }}
                    color="primary"
                  />
                  <ParamPrevAndNext value={currVisitor} data={visitorDetails} setCurrValue={setCurrVisitor} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                  <SearchBar label="John Doe Uuy" rootSx={style.customStyle} />
                  <TextField id="outlined-basic" label="Address" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("mobileNo", event.target.value)} sx={style.customStyle} />
                  <TextField id="outlined-basic" label="Phone" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("mobileNo", event.target.value)} sx={style.customStyle} />
                  <TextField id="outlined-basic" label="Disable OTP" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("mobileNo", event.target.value)} sx={style.customStyle} />
                </Box>
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={8}>
                <Grid container spacing={4} >
                  <Grid item xs={10} sm={10} md={10} lg={6}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <Chip icon={<CheckBoxOutlinedIcon sx={{ color: 'green !important' }} />}
                        label="1874 Total visitors"
                        variant="outlined"
                        sx={{ fontSize: '12px', width: "150px", height: "50px" }}
                      />
                      <DateComponent option={visitorDetails} label="Entry Date" value={visitorDetails} onChange={(newDate) => handleChange("startDate", newDate)} customStyle={style.customStyle} />
                      <ParameterizedAutoComplete option={visitorDetails} label="Entry Code" onChange={(event, newData) => handleChange("smsStatus", newData)} customStyle={style.customStyle} />
                      <ParamTime customStyle={style.timePickerStyle} label="Time In" onChange={handleChange} />
                      <ParamTime customStyle={style.timePickerStyle} label="Time Out" onChange={handleChange} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10} md={10} lg={6} sx={{ marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "45px" }}>
                      <ParameterizedAutoComplete option={visitorDetails} label="Category" onChange={(event, newData) => handleChange("smsStatus", newData)} customStyle={style.customStyle} />
                      <ParameterizedAutoComplete option={visitorDetails} label="Acampanied By" onChange={(event, newData) => handleChange("smsStatus", newData)} customStyle={style.customStyle} />
                      <TextField id="outlined-basic" label="Purpose" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("mobileNo", event.target.value)} sx={style.customStyle} />
                      <ParameterizedAutoComplete option={visitorDetails} label="To meet" onChange={(event, newData) => handleChange("smsStatus", newData)} customStyle={style.customStyle} />
                      {/* Temperature */}
                      <TextField id="outlined-basic" label="Temperature" variant="outlined" inputProps={{ maxLength: 10 }} onChange={(event) => handleChange("mobileNo", event.target.value)} sx={style.customStyle} />
                      {/* Remarks */}
                      <Box sx={{ color: "blue", cursor: "pointer" }} onClick={() => setCommentOpen(!commentOpen)}>+ Add Remarks</Box>
                      {commentOpen && <TextField
                        id="comment"
                        label="Your Comment"
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={style.remarksBoxStyle}
                        placeholder="Type your comment here..."
                      />}
                      <Box sx={{ display: "flex", gap: "40px" }}>
                        <ParamAttachement label="Photo" />
                        <ParamAttachement label="ID Proof" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid >

        {/* Buttons  */}
        < Grid item xs={10} sm={10} md={2} lg={2} sx={{ marginTop: "50px" }
        }>
          <Box sx={{ display: "none" }}>
            <VisitorDetails ref={printRef} />
          </Box>
          <Paper sx={{ padding: "20px 20px 20px 20px" }}>
            <PrintPdf ref={printRef} Children={<PrintVisitorButton />} />
            <ShowVisitorButton  />
          </Paper>
        </Grid >
      </Grid >
    </>
  );
};

export default VisitorEntry;


