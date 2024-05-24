import React,{useState} from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
const subjects = ["Delivered", "notdelivered", "yetto delivered"];


const QuickSearchDrawer= ({onClose}) => {
    const [quickSearch,setQuickSearch]=useState({
        "student":"",
        "left":"",
        "class":"",
        "section":""
    });

    const handleChange=async(name,newData)=>{
       await setQuickSearch({...quickSearch,[quickSearch]:newData})
    }

    const isMobile = window.innerWidth < 900;
    const style = {
        filter: {
            width: "150px",
        }
    }
    return (
        <Box
            sx={{ width: isMobile ? '100%' : 850, padding: 2 }}
            role="presentation"
        >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Quick Search</Typography>
                <Button sx={{marginTop:"-6px"}} onClick={onClose}>Close</Button>
            </Box>
            <Box container spacing={1} sx={{ padding: "20px 0px 20px 20px", display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "20px" }}>
                <TextField id="outlined-basic" label="Search Student name from" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("student", event.target.value)} />
                <ParameterizedAutoComplete option={subjects} label="Anywhere" onChange={(event, newData) => handleChange("left", newData)} customStyle={style.filter} />
                <ParameterizedAutoComplete option={subjects} label="Class" onChange={(event, newData) => handleChange("class", newData)} customStyle={style.filter} />
                <ParameterizedAutoComplete option={subjects} label="Section" onChange={(event, newData) => handleChange("section", newData)} customStyle={style.filter} />
                <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained">
                    Show
                </Button>
            </Box>
        </Box>
    );
}

export default QuickSearchDrawer;