
import React, { useState } from 'react';
import { Box, Paper, TextField, Drawer, Button } from '@mui/material';
import ParameterizedAutoComplete from 'views/common-section/parameterizedAutoComplete';
import SearchBar from 'views/common-section/SearchBox';
import QuickSearchDrawer from 'views/common-section/QuickSearchDrawer'

const subjects = ["Delivered", "notdelivered", "yetto delivered"];

const ChangeEnrolmentNumber = () => {
  const [searchData, setsearchData] = useState({
    "enrolltype": "",
    "admissionNo":"",
    "dos":"",
    "class":"",
    "contactName":"",
    "changeIn":""
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
          <ParameterizedAutoComplete option={subjects} label="Entrolement Type" onChange={(event, newData) => handleChange("enrolltype", newData)} customStyle={style.filter} />
          <TextField id="outlined-basic" label="Admission No." variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("admissionNo", event.target.value)} />
          <TextField id="outlined-basic" label="Date of Admission" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("dos", event.target.value)} />
          <SearchBar placeholder=' Student Name' inputSx={style.inputSx} buttonSx={style.buttonSx} onSearch={handleSearchClick} />
          <TextField id="outlined-basic" label="Class" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("class", event.target.value)} />
          <TextField id="outlined-basic" label="Contact Name" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("contactName", event.target.value)} />
          <TextField id="outlined-basic" label="Change Adm No. to" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("admissionNo", event.target.value)} />
          <ParameterizedAutoComplete option={subjects} label="None" onChange={(event, newData) => handleChange("changeIn", newData)} customStyle={style.filter} />
        </Box>
        <Box>
            <Button sx={{margin:"0px 0px 20px 60px",height: "40px", color: '#fff' }} variant="contained">Save</Button>
            <Button sx={{margin:"0px 0px 20px 60px",height: "40px", color: '#fff'}} variant="contained">Cancel</Button>
        </Box>
        <Drawer
          anchor="right"
          open={state.right}
        >
          <QuickSearchDrawer   anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)} />
        </Drawer>
      </Paper>
    </>
  )
}

export default ChangeEnrolmentNumber;