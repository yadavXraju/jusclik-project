// Page Owner :  Sangeeta 
// Description : Counters


import React from 'react';
import ParamCounters from 'components/dashboard/Counters';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

const iconStyles = {
    fontSize: '30px',
    display: 'flex',
};

const CounterData = [
    {
        id: 1,
        icon: <LibraryBooksOutlinedIcon sx={{ ...iconStyles, color: 'rgb(16 185 129)' }} />,
        counterNumber: '99' ,
        counterTitle: 'Total Books',
        backgroundColor:'rgb(204 245 232)',
    },
    {
        id: 2,
        icon: <TaskAltOutlinedIcon sx={{ ...iconStyles, color: '#F3DB3F' }} />,
        counterNumber: 83,       
        counterTitle: 'Available Books',
        backgroundColor:'rgb(245 238 215)',
    },
    {
        id: 3,
        icon:<MenuBookIcon sx={{ ...iconStyles, color: 'rgb(42, 101, 191)' }} />,
        counterNumber: "16",
        counterTitle: 'Issued Books',
        backgroundColor:'rgb(42 101 191 / 15%)',
    },
    {
      id: 4,
      icon:<WatchLaterOutlinedIcon sx={{ ...iconStyles, color: '#EC1605' }} />,
      counterNumber: "16",
      counterTitle: 'Overdue Books',
      backgroundColor:'#F1C3BF',
  },

];

const Counter = () => {
  return (
    <>
    <ParamCounters  CounterData={CounterData} />
    </>
  )
}

export default Counter