import { Box } from '@mui/material';
import React from 'react';
import Board from 'react-trello';

const Kanban = ({ data }) => {


  return (
    <Box
      sx={{
        '& .lcvSVC': {
          // backgroundColor: 'transparent',
          // padding: '20px',
          // height:'auto'
        },
       
        '& .YtQpS ':{
          backgroundColor:'transparent'
        },
        '& .bjDsaI':{
          padding:'8px'
        },
        '& .eJNaHL':{
          marginBottom:'10px',
          borderBottom:'0px'
        },
        // hide heading
       '& .bjDsaI ':{
        display:'none'
       },
       '& .gJtTOa:hover':{
        backgroundColor:'#fff'
       },
       '& .kteVYK':{
        width:'100%'
       },
       
      }}

    >
      <Board data={data} draggable 
      style={{
        backgroundColor:'transparent',
          padding: '20px',
          height:'auto',
          width:'100%',}}
          
          laneStyle={{
        // backgroundColor:'#f9f9fb',
        backgroundColor:'#fff',
        // minWidth:'30%',
        borderRadius:'15px',
          }}

          cardStyle={{
            maxWidth:'none'
          }}
          
      laneDraggable={false}
      />
    </Box>
  );
};

export default Kanban;
