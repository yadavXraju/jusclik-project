import React,{useState} from 'react';
import {Box,Paper,TextField,Button,useMediaQuery} from '@mui/material';
import ParameterizedAutoComplete from 'views/common-section/ParamAutoComplete';
import DateComponent from 'views/common-section/DateComponent';

const subjects = ["Delivered", "notdelivered", "yetto delivered"];

const SearchStudentMaster = () => {
    const [searchData,setSearchData]=useState({
        "startDate":null,
        "endDate":null,
        "class":"",
        "registrationNo":""
    })
 
    const matches = useMediaQuery('(max-width:500px)');
    const inputWidth  = matches ? "90%" : "260px";

    const style = {
        filter: {
          width:inputWidth
        }
      }

      const handleChange = (name, newValue) => {
          setSearchData({...searchData,[name]:newValue});
          console.log(searchData);
      }
      
  return (
    <Paper>
        <Box sx={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
          <DateComponent option={subjects} label="From" value={searchData?.startDate} onChange={(newDate) => handleChange("startDate", newDate)} customStyle={style.filter} />
          <DateComponent option={subjects} label="To" value={searchData?.startDate} onChange={(newDate) => handleChange("endDate", newDate)} customStyle={style.filter} />
          <ParameterizedAutoComplete option={subjects} label="Class" onChange={(event, newData) => handleChange("class", newData)} customStyle={style.filter} />
          <TextField id="outlined-basic" label="Reg No" variant="outlined" inputProps={{ maxLength: 10 }} sx={style.filter} onChange={(event) => handleChange("registrationNo", event.target.value)} />
          <Button sx={{ height: "40px", color: '#fff', margin: "auto 0px auto 0px" }} variant="contained">Show Data</Button>
        </Box>
    </Paper>
  )
}

export default SearchStudentMaster;


