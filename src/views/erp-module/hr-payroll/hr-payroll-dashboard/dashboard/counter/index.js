// owned by sangeeta

import React from "react";
import ParamCounters from "views/common-section/ParamCounters";
// icons


import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import PeopleIcon from '@mui/icons-material/People';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import TotalGender from "./TotalGender";
import Grid from '@mui/material/Grid'



const iconStyles = {
    fontSize: '30px',
    display: 'flex',
};

const CounterData = [
    {
        id: 1,
        icon: <WomanIcon sx={{ ...iconStyles, color: '#17C653' }} />,
        counterNumber: '56' ,
        counterTitle: 'Total Female',
        backgroundColor:'#17c6533b',
    },
    {
        id: 2,
        icon: <ManIcon sx={{ ...iconStyles, color: '#1B84FF' }} />,
        counterNumber: 83,       
        counterTitle: 'Total Male',
        backgroundColor:'rgb(42 101 191 / 15%)',
    },
   


];
const CounterData2 = [

    {
        id: 3,
        icon: <PeopleIcon sx={{ ...iconStyles, color: '#A8CD9F' }} />,
        counterNumber: "25",
        counterTitle: 'Avrage Age ',
        backgroundColor:'#a8cd9f59',
    },
    {
        id: 4,
        icon: <SentimentVeryDissatisfiedIcon sx={{ ...iconStyles, color: '#EC1605' }} />,
        counterNumber: "11%",
        counterTitle: 'Absentieeism per month',
        backgroundColor:'#F1C3BF',
    },


];

const Counters = () => {


    return (
        <>
        <Grid container lg={12} spacing={2}>
         <Grid item lg={5}>
         <TotalGender/>
         </Grid>
         <Grid item lg={7} >
           < Grid  sx={{mb:1}}>
           <ParamCounters CounterData={CounterData} />
           </Grid> 
           < Grid spacing={1}>
           <ParamCounters CounterData={CounterData2} />
           </Grid> 
        
         </Grid>
        </Grid>
      
       
        </>
    );
};

export default Counters;