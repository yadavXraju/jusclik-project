// @Page Owner-Tarun Pandey
import React,{useState} from 'react';
import { Box, Paper, Button, useMediaQuery, TextField, Drawer } from '@mui/material';
import ParameterizedAutoComplete from 'views/common-section/ParamAutoComplete';
import SearchBox from 'views/common-section/SearchBox';
import  QuickSearchDrawer  from 'views/common-section/QuickSearchDrawer';

const subjects = ["Delivered", "notdelivered", "yetto delivered"];

const EditMasterDataField = () => {
  const [editFields,seteditFields]=useState({
     "field":"",
     "class":"",
     "section":"",
     "status":"",
     "admissionNo":"",
     "studentName":"",
  });
  const [state, setState]=useState({
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
   
  const handleDrawerClose=()=>{
    const toggleRightDrawer=toggleDrawer('right', false);
    toggleRightDrawer({type:'click'});
   }

  const handleChange=(name,newData)=>{
      seteditFields({...editFields,[name]:newData});
      console.log(editFields);
  }

  const matches = useMediaQuery('(max-width:500px)');
  const width = matches ? "90%" : "150px";
  const style = {
    filter: {
      width: width,
    },
    rootSx: {
      width: width,
    },
    buttonsx: {
      width: '50px',
      borderRadius: '0px 8px 8px 0px',
      border: '1px solid #a8adb1',
      height: '50px',
      onHover: '1px solid blue'
    },
    inputSx: {
      height: '50px',
      borderRadius: '8px 0px 0px 8px',
      onHover: '1px solid blue'
    }
  }
 


  return (
    <Paper>
      <Box container spacing={1} sx={{ padding: "20px 0px 20px 20px", display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "20px" }}>
        <ParameterizedAutoComplete option={subjects} label=" Field" onChange={(event, newData) => handleChange("field", newData)} customStyle={style.filter} />
        <ParameterizedAutoComplete option={subjects} label=" Class" onChange={(event, newData) => handleChange("class", newData)} customStyle={style.filter} />
        <ParameterizedAutoComplete option={subjects} label=" Section" onChange={(event, newData) => handleChange("section", newData)} customStyle={style.filter} />
        <ParameterizedAutoComplete option={subjects} label=" Status" onChange={(event, newData) => handleChange("status", newData)} customStyle={style.filter} />
        <TextField id="outlined-basic" label="" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("admissionNo", event.target.value)} />
        <SearchBox buttonSx={style.buttonsx} inputSx={style.inputSx} onSearch={handleSearchClick} placeholder="  Enter Adm No" />
        <ParameterizedAutoComplete option={subjects} label="Student Name" onChange={(event, newData) => handleChange("studentName", newData)} customStyle={style.filter} />
        <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained">
          Show Data
        </Button>
      </Box>
      <Drawer
        anchor="right"
        open={state.right}
      >
        <QuickSearchDrawer onClose={handleDrawerClose} />
      </Drawer>
    </Paper>
  )
}

export default EditMasterDataField;



