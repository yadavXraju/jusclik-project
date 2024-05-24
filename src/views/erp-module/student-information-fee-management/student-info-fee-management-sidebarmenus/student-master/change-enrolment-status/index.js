// @Page Owner-Tarun Pandey
import React, { useState } from 'react';
import { Box, Paper, TextField, Drawer, Button,useMediaQuery} from '@mui/material';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import DateComponent from 'components/ui/custom-input/DateComponent';
import SearchBar from 'components/temp-SearchBox';
import QuickSearchDrawer from 'components/QuickSearchDrawer'

const subjects = ["Delivered", "notdelivered", "yetto delivered"];

const ChangeEnrolmentStatus = () => {
  const [searchData, setsearchData] = useState({
    "enrolltype": "",
    "admissionNo": "",
    "dos": "",
    "class": "",
    "contactName": "",
    "relatedInfo": "",
    "leftReason": ""
  });

  const [state, setState] = useState({
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    console.log(event);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleSearchClick = () => {
    const toggleRightDrawer = toggleDrawer('right', true);
    toggleRightDrawer({ type: 'click' });
  }

  const matches = useMediaQuery('(max-width:600px)');
  const width = matches ? "80%" : "400px";
  const searbarButtonWidth= matches? "10%" : "50px";
  const searbarInputWidth= matches? "80%" : "350px";
  const searbarRootWidth= matches? "80%" : "400px";

  const style = {
    filter: {
      width: width,
    },
    rootSx:{
     width:searbarRootWidth,
    },
    buttonSx: {
      width: searbarButtonWidth
    },
    inputSx: {
      width:searbarInputWidth
    }
  }
  const handleChange = (name, newValue) => {
    setsearchData({ ...searchData, [name]: newValue });
  }


  return (
    <>
      <Paper>
        <Box container spacing={1} sx={{ padding: "20px 0px 20px 60px", display: "flex",
         flexWrap: "wrap", flexDirection: "row", gap: "40px" }}>
          <ParameterizedAutoComplete option={subjects} label="Entrolement Type" onChange={(event, newData) => handleChange("enrolltype", newData)} customStyle={style.filter} />
          <TextField id="outlined-basic" label="Admission No." variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("admissionNo", event.target.value)} />
          <TextField id="outlined-basic" label="Date of Admission" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("dos", event.target.value)} />
          <SearchBar placeholder=' Student Name' rootSx={style.rootSx} inputSx={style.inputSx} buttonSx={style.buttonSx} onSearch={handleSearchClick} />
          <TextField id="outlined-basic" label="Class" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("class", event.target.value)} />
          <TextField id="outlined-basic" label="Contact Name" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("contactName", event.target.value)} />
          <ParameterizedAutoComplete option={subjects} label="Related Info" onChange={(event, newData) => handleChange("relatedInfo", newData)} customStyle={style.filter} />
          <DateComponent option={subjects} label="Left Reason" value={searchData?.startDate} onChange={(newDate) => handleChange("leftReason", newDate)} customStyle={style.filter} />
        </Box>
        <Box sx={{ display: "flex",width:"80%",justifyContent: "space-between" }}>
          <Box>
            <Button sx={{ margin: "0px 0px 20px 60px", height: "40px", color: '#fff' }} variant="contained">Save</Button>
            <Button sx={{ margin: "0px 0px 20px 60px", height: "40px", color: '#fff' }} variant="contained">Cancel</Button>
          </Box>
          <Button sx={{ margin: "0px 0px 20px 60px", height: "40px", color: '#fff' }} variant="contained">Chnage EnrolNo Series</Button>
        </Box>
        <Drawer
          anchor="right"
          open={state.right}
        >
          <QuickSearchDrawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)} />
        </Drawer>
      </Paper>
    </>
  )
}

export default ChangeEnrolmentStatus;



