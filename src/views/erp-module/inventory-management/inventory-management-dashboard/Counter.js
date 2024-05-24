import React from "react";
import ParamCounters from "components/dashboard/Counters";
// icons
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';


const iconStyles = {
    fontSize: '30px',
    display: 'flex',
};

const CounterData = [
    {
        id: 1,
        icon: <PeopleOutlineIcon sx={{ ...iconStyles, color: 'rgb(16 185 129)' }} />,
        counterNumber: '90' ,
        counterTitle: 'MATERIAL REQUESTED',
        backgroundColor:'rgb(204 245 232)',
    },
    {
        id: 2,
        icon: <PermIdentityOutlinedIcon sx={{ ...iconStyles, color: 'rgb(247, 144, 9)' }} />,
        counterNumber: 83,       
        counterTitle: 'ORDER GENERATED',
        backgroundColor:'rgb(245 238 215)',
    },
    {
        id: 3,
        icon:<Person2OutlinedIcon sx={{ ...iconStyles, color: 'rgb(42, 101, 191)' }} />,
        counterNumber: "65",
        counterTitle: 'MATERIAL RECEIVED',
        backgroundColor:'rgb(42 101 191 / 15%)',
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