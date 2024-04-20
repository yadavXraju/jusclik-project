import React from 'react';
import Kanban from './kanban';
import PipelineCard, { LaneHeading } from './pipeline-card';
// import { Typography } from '@mui/material';


const kanbanData = {
  lanes: [
    {
      id: 'lane1',
      title: 'Lead Received', // Changed name to title
      cards: [
        {
          id: 'card1',
          title: 'Esther Howard', // Changed name to title
          details: {
            phone: '(252)555-0106',
            email: 'tim.jennings@example.com',
            website: 'Zillow.com',
          },
        },
        {
          id: 'card2',
          title: 'Jacob Jones', // Changed name to title
          details: {
            phone: '(861)555-0111',
            email: 'tim.jennings@example.com',
            website: 'Zillow.com',
          },
        },
        {
          id: 'card9',
          title: 'Jerome Belli', // Changed name to title
          details: {
            phone: '(629)555-0129',
            email: 'tim.jennings@zexample.co',
            website: 'Zillow.co',
          },
        },
      ],
    },
    {
      id: 'lane2',
      title: 'Tour Scheduled', // Changed name to title
      cards: [
        {
          id: 'card3',
          title: 'Albert Flores', // Changed name to title
          details: {
            phone: '(305)555-0121',
            email: 'tim.jennings@example.com',
            website: 'Airbnb.com',
          },
        },
        {
          id: 'card4',
          title: 'Jane Cooper', // Changed name to title
          details: {
            phone: '(302)555-0107',
            email: 'tim.jennings@example.com',
            website: 'Redfin.com',
          },
        },
        {
          id: 'card10',
          title: 'Albert Flores', // Changed name to title
          details: {
            phone: '(300)555-0121',
            email: 'timjennigs@xample.c',
            website: 'Zillow.c',
          },
        },
      ],
    },
    {
      id: 'lane3',
      title: 'Application Received', // Changed name to title
      cards: [
        {
          id: 'card5',
          title: 'Kristin Watson', // Changed name to title
          details: {
            phone: '(319)555-0115',
            email: 'tim.jennings@example.com',
            website: 'Redfin.com',
          },
        },
        {
          id: 'card6',
          title: 'Royal Parvej', // Changed name to title
          details: {
            phone: '(307)555-0133',
            email: 'tim.jennings@example.com',
            website: 'Redfin.com',
          },
        },
      ],
    },
    {
      id: 'lane4',
      title: 'Application Approved', // Changed name to title
      cards: [
        {
          id: 'card7',
          title: 'Brooklyn Simmons', // Changed name to title
          details: {
            phone: '(603)555-0123',
            email: 'tim.jennings@example.com',
            website: 'None',
          },
        },
        {
          id: 'card8',
          title: 'Wade Warren', // Changed name to title
          details: {
            phone: '(303)555-0105',
            email: 'tim.jennings@example.co',
            website: 'Zillow.co',
          },
        },
      ],
    },
  ],
};


// modifing the kanban data to inject custom react components 
kanbanData.lanes.forEach((lanes)=>
{ 
  lanes.title= <LaneHeading title={lanes.title}/>
  // lanes.title = <Typography variant='h4'>{lanes.title}</Typography>; // Wrap lane title with Typography component
  lanes.cards.forEach((card)=>{
  const cardcomp=<PipelineCard data={{_name:card.title,phone:card.details.phone ,email:card.details.email,website:card.details.website}} />
  card.name=null
  card.description=cardcomp
  card.details=null
})}  
)

const Pipeline = () => {
  return (
    <div>
      <Kanban data={kanbanData} />
    </div>
  );
};

export default Pipeline;
