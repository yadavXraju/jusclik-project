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
        icon: <WomanIcon sx={{ ...iconStyles, color: ' #F6A6BB' }} />,
        counterNumber: '56' ,
        counterTitle: 'Total Female',
        backgroundColor:'rgb(246 166 187 / 36%)',
    },
    {
        id: 2,
        icon: <ManIcon sx={{ ...iconStyles, color: 'rgb(42, 101, 191)' }} />,
        counterNumber: 83,       
        counterTitle: 'Total Male',
        backgroundColor:'rgb(42 101 191 / 15%)',
    },
    {
        id: 3,
        icon: <PeopleIcon sx={{ ...iconStyles, color: '#F3DB3F' }} />,
        counterNumber: "25",
        counterTitle: 'Avrage Age ',
        backgroundColor:'rgb(245 238 215)',
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
        <Grid container lg={12}>
         <Grid item lg={4}>
         <TotalGender/>
         </Grid>
         <Grid item lg={8}>
         <ParamCounters CounterData={CounterData} />
         </Grid>
        </Grid>
      
       
        </>
    );
};

export default Counters;