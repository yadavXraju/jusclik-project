import React from "react";
import ParamCounters from "components/dashboard/Counters";
// icons
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PeopleIcon from '@mui/icons-material/People';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const iconStyles = {
    fontSize: '30px',
    display: 'flex',
};

const CounterData = [
    {
        id: 1,
        icon: <AccessAlarmIcon sx={{ ...iconStyles, color: 'rgb(16 185 129)' }} />,
        counterNumber: '11 A.M.' ,
        counterTitle: 'Busiest hour',
        backgroundColor:'rgb(204 245 232)',
    },
    {
        id: 2,
        icon: <PeopleIcon sx={{ ...iconStyles, color: 'rgb(42, 101, 191)' }} />,
        counterNumber: 83,       
        counterTitle: 'Visitor in last 30 days',
        backgroundColor:'rgb(42 101 191 / 15%)',
    },
    {
        id: 3,
        icon: <SentimentSatisfiedAltIcon sx={{ ...iconStyles, color: '#F3DB3F' }} />,
        counterNumber: "98%",
        counterTitle: 'visitor Satisfactory Score',
        backgroundColor:'rgb(245 238 215)',
    },

];


const Counters = () => {


    return (
        <>
        <ParamCounters CounterData={CounterData} />
        </>
    );
};

export default Counters;