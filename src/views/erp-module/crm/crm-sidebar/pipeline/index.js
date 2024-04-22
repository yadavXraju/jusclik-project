import React from 'react';
import Kanban from './kanban';
import PipelineCard, { LaneHeading } from './pipeline-card';
import { kanbanData } from './data';
import { useState } from 'react';
import { useEffect } from 'react';
// import { Typography } from '@mui/material';

const Pipeline = () => {
  const [laneCount, setLaneCount] = useState({
    lane1: kanbanData.lanes[0].cards.length,
    lane2: kanbanData.lanes[1].cards.length,
    lane3: kanbanData.lanes[2].cards.length,
    lane4: kanbanData.lanes[3].cards.length
  });

  useEffect(() => {
    modifyData();
  }, []);


  // modifing the kanban data to inject custom react components
  const modifyData = () =>{
    kanbanData.lanes.forEach((lanes) => {
      lanes.title = <LaneHeading title={lanes.title} laneCount={laneCount} id={lanes.id} key={lanes.id}  />;
      // lanes.title = <Typography variant='h4'>{lanes.title}</Typography>; // Wrap lane title with Typography component
      lanes.cards.forEach((card) => {
        const cardcomp = (
          <PipelineCard
            data={{ _name: card.title, phone: card.details?.phone, email: card.details?.email, website: card.details?.website }}
          />
        );
        card.name = null;
        card.description = cardcomp;
        card.details = null;
      });
    });}
    
  return (
    <div>
      <Kanban data={kanbanData} laneCount={laneCount} setLaneCount={setLaneCount} />
    </div>
  );
};

export default Pipeline;
