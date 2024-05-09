import React from 'react';
import PipelineCard from './pipelineCard'; // Assuming PipelineCard is a Material-UI component
import CustomLaneHeader from './customLaneHeader'; // Assuming LaneHeading is a Material-UI component
import { kanbanData } from './data';
import Board from 'react-trello';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

// board container style
const styles = {
  '& .lcvSVC': {},

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
  '& .fEEMxz ': {
    width: '100%'
  },
  '& .react-trello-lane::-webkit-scrollbar':{
    width: "5px"
  },
  
};
const boardStylyes = {
  backgroundColor: 'transparent',
  padding: '20px',
  height: 'auto',
  width: '100%',
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#c0c6cd4f #f0f0f0",
  
};
// #root > div > main > div.MuiBox-root.css-wqz5sn > div > div > div > section:nth-child(2) > div
// card styles
const cardStyles = {
  maxWidth: 'none'
};
const laneColors = {
  lane1: '#FF5733', // Lead Received
  lane2: '#EE9C21', // Tour Scheduled
  lane3: '#3366FF', // Application Received
  lane4: '#0F9FC4', // Application Approved
  lane5: '#59D5A0', // Leads Won
  lane6: '#CA171B' // Leads Lost
};

const CustomPipeline = () => {
  // lane heading and card
  const laneHeadingComponent = (title, length) => <CustomLaneHeader title={title} length={length} />;
  const pipelineCardComponent = (data) => <PipelineCard data={data} />;

  // JSX injection of data
  const modifyData = (data) => {
    const modifedData = data.lanes.map((lane) => ({
      ...lane,
      title: laneHeadingComponent(lane.title, lane.cards.length),
      cards: lane.cards.map((card) => ({
        ...card,
        description: pipelineCardComponent({
          _name: card.title,
          phone: card.details?.phone,
          email: card.details?.email,
          website: card.details?.website
        }),
        name: null,
        details: null
      })),
      //   style for lanes
      style: {
        borderTop: `3px solid ${laneColors[lane.id]}`,
        backgroundColor: '#fff',
        minHeight: '70vh',
        borderRadius: '15px',
        marginRight:'20px'
      }
    }));
    return modifedData;
  };

  const [data, setData] = useState([]);
  const handleDataChange = (newData) => {
    const updatedData = newData.lanes.map((lane) => ({
      ...lane,
      title: <CustomLaneHeader title={lane?.title?.props?.title} length={lane.cards.length} />
    }));
    setData(updatedData);
  };

  useEffect(() => {
    const boardData = modifyData(kanbanData);
    setData(boardData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={styles}>
      <Board
        data={{ lanes: data }}
        style={boardStylyes}
        //  laneStyle={laneStyles}
        cardStyle={cardStyles}
        onDataChange={handleDataChange}
      />
    </Box>
  );
};

export default CustomPipeline;
