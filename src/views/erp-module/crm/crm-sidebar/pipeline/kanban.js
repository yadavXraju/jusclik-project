import { Box } from '@mui/material';
import React from 'react';
import Board from 'react-trello';

const Kanban = ({ data }) => {
  // const customStyles = {
  //   boardBackground: 'transparent', // Set the board's background color to transparent
  //   laneHeaderBackground: '#ffffff', // Example: Set lane header background color to white
  //   cardBackground: '#ffffff', // Example: Set card background color to white
  //   laneBackground: '#f0f0f0', // Example: Set lane background color to a light gray
  // };
  const customStyles = {
    board: {
      background: 'transparent' // Set the board's background color to transparent
    }
  };
  return (
    <Box
      sx={{
        '& .lcvSVC': {
          backgroundColor: 'transparent',
          padding: '20px',
          height:'auto'
        },
        width:'fit-content',
        '& .YtQpS ':{
          backgroundColor:'transparent'
        },
        '& .bjDsaI':{
          padding:'8px'
        },
        '& .eJNaHL':{
          marginBottom:'10px'
        }
      }}

    >
      <Board data={data} draggable style={customStyles} />
    </Box>
  );
};

export default Kanban;
