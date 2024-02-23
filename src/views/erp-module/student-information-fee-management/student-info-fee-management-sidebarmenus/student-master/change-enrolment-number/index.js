import React, { useState } from 'react';
import { Box, Paper, TextField, Drawer, Button } from '@mui/material';
import ParameterizedAutoComplete from 'views/common-section/parameterizedAutoComplete';
import DateComponent from 'views/common-section/DateComponent';
import SearchBar from 'views/common-section/SearchBox';
import RightDrawer from 'views/common-section/RightDrawer'

const subjects = ["Delivered", "notdelivered", "yetto delivered"];

const ChangeEnrolmentNumber = () => {
  const [searchData, setsearchData] = useState({
    "startDate": null
  });
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleSearchClick = () => {
    const toggleRightDrawer = toggleDrawer('right', true);
    toggleRightDrawer({ type: 'click' });
  }

  const handleDrawerClose = () => {
    const toggleRightDrawer = toggleDrawer('right', false);
    toggleRightDrawer({ type: 'click' });
  }

  const style = {
    filter: {
      width: "400px"
    },
    buttonSx: {
      width: "50px"
    },
    inputSx: {
      width: "350px"
    }
  }
  const handleChange = (name, newValue) => {
    setsearchData({ ...searchData, [name]: newValue });
  }


  return (
    <>
      <Paper>
        <Box container spacing={1} sx={{ padding: "20px 0px 20px 60px", display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "40px" }}>
          <ParameterizedAutoComplete option={subjects} label="Entrolement Type" onChange={(event, newData) => handleChange("loginName", newData)} customStyle={style.filter} />
          <TextField id="outlined-basic" label="Admission No." variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("mobileNo", event.target.value)} />
          <TextField id="outlined-basic" label="Date of Admission" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("mobileNo", event.target.value)} />
          <SearchBar placeholder='       Student Name' inputSx={style.inputSx} buttonSx={style.buttonSx} onSearch={handleSearchClick} />
          <TextField id="outlined-basic" label="Class" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("mobileNo", event.target.value)} />
          <TextField id="outlined-basic" label="Contact Name" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("mobileNo", event.target.value)} />
          <ParameterizedAutoComplete option={subjects} label="Related Info" onChange={(event, newData) => handleChange("loginName", newData)} customStyle={style.filter} />
          <DateComponent option={subjects} label="Left Reason" value={searchData?.startDate} onChange={(newDate) => handleChange("startDate", newDate)} customStyle={style.filter} />
        </Box>
        <Box>
            <Button sx={{margin:"0px 0px 20px 60px",height: "40px", color: '#fff' }} variant="contained">Save</Button>
            <Button sx={{margin:"0px 0px 20px 60px",height: "40px", color: '#fff'}} variant="contained">Cancel</Button>
        </Box>
        <Drawer
          anchor="right"
          open={state.right}
        >
          <RightDrawer onClose={handleDrawerClose} />
        </Drawer>
      </Paper>
    </>
  )
}

export default ChangeEnrolmentNumber;