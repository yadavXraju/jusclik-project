import { Box } from '@mui/material';
import React from 'react';
// import { useEffect } from 'react';
import Board from 'react-trello';

const Kanban = ({ data, setLaneCount }) => {

  const handleCard = (fromLaneId, toLaneId) => {
    setLaneCount(prevLaneCount => ({
      ...prevLaneCount,
      [fromLaneId]: prevLaneCount[fromLaneId] - 1,
      [toLaneId]: prevLaneCount[toLaneId] + 1
    }));
  
  };

const handleDataChange=(newData)=>{
  console.log(newData);
}

  return (
    <Box
      sx={{
        '& .lcvSVC': {   
        },

        '& .YtQpS ': {
          backgroundColor: 'transparent'
        },
        '& .bjDsaI': {
          padding: '8px'
        },
        '& .eJNaHL': {
          marginBottom: '10px',
          borderBottom: '0px'
        },
        // hide heading
        '& .bjDsaI ': {
          display: 'none'
        },
        '& .gJtTOa:hover': {
          backgroundColor: '#fff'
        },
        '& .kteVYK': {
          width: '100%'
        },
       
       
      }}
    >
      <Board
        data={data}
        draggable
        style={{
          backgroundColor: 'transparent',
          padding: '20px',
          height: 'auto',
          width: '100%'
        }}
        laneStyle={{
          // backgroundColor:'#f9f9fb',
          backgroundColor: '#fff',
          // minWidth:'30%',
          borderRadius: '15px',
          overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: '#c0c6cd4f #f0f0f0',

        }}
        cardStyle={{
          maxWidth: 'none'
        }}
        laneDraggable={false}
        onCardMoveAcrossLanes={handleCard}
        onDataChange={handleDataChange}
      />
    </Box>
  );
};

export default Kanban;
