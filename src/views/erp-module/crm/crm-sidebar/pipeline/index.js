import React from 'react';
import Kanban from './kanban';
import { Box, Typography } from '@mui/material';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
const kanbanData = {
  lanes: [
    {
      id: 'lane1',
      title: 'Lead Received',
      cards: [
        {
          id: 'card1',
          title: 'Esther Howard',
          description: [
            'Phone:',
            '(252)555-0106',
            'Email:',
            'tim.jennings@example.com',
            'Website:',
            'Zillow.com',
          ],
        },
        {
          id: 'card2',
          title: 'Jacob Jones',
          description: [
            'Phone:',
            '(861)555-0111',
            'Email:',
            'tim.jennings@example.com',
            'Website:',
            'Zillow.com',
          ],
        },
        {
          id: 'card9',
          title: 'Jerome Belli',
          description: [
            'Phone:',
            '(629)555-0129',
            'Email:',
            'tim.jennings@zexample.co',
            'Website:',
            'Zillow.co',
          ],
        },
      ],
    },
    {
      id: 'lane2',
      title: 'Tour Scheduled',
      cards: [
        {
          id: 'card3',
          title: 'Albert Flores',
          description: [
            'Phone:',
            '(305)555-0121',
            'Email:',
            'tim.jennings@example.com',
            'Website:',
            'Airbnb.com',
          ],
        },
        {
          id: 'card4',
          title: 'Jane Cooper',
          description: [
            'Phone:',
            '(302)555-0107',
            'Email:',
            'tim.jennings@example.com',
            'Website:',
            'Redfin.com',
          ],
        },
        {
          id: 'card10',
          title: 'Albert Flores',
          description: [
            'Phone:',
            '(300)555-0121',
            'Email:',
            'timjennigs@xample.c',
            'Website:',
            'Zillow.c',
          ],
        },
      ],
    },
    {
      id: 'lane3',
      title: 'Application Received',
      cards: [
        {
          id: 'card5',
          title: 'Kristin Watson',
          description: [
            'Phone:',
            '(319)555-0115',
            'Email:',
            'tim.jennings@example.com',
            'Website:',
            'Redfin.com',
          ],
        },
        {
          id: 'card6',
          title: 'Royal Parvej',
          description: [
            'Phone:',
            '(307)555-0133',
            'Email:',
            'tim.jennings@example.com',
            'Website:',
            'Redfin.com',
          ],
        },
      ],
    },
    {
      id: 'lane4',
      title: 'Application Approved',
      cards: [
        {
          id: 'card7',
          title: 'Brooklyn Simmons',
          description: [
            'Phone:',
            '(603)555-0123',
            'Email:',
            'tim.jennings@example.com',
            'Website:',
            'None',
          ],
        },
        {
          id: 'card8',
          title: 'Wade Warren',
          description: [
            'Phone:',
            '(303)555-0105',
            'Email:',
            'tim.jennings@example.co',
            'Website:',
            'Zillow.co',
          ],
        },
      ],
    },
  ],
};


// Iterate through lanes
kanbanData.lanes.forEach((lane) => {
  // Iterate through cards
  lane.cards.forEach((card) => {
    // Iterate through description
    card.description.forEach((item, index) => {
        if (item.startsWith('Phone:')) 
          card.description[index]=<Typography sx={{display:'flex',alignItems:'center',padding:'8px'}} key={index} variant='h4'><LocalPhoneTwoToneIcon/></Typography>
          else if (item.startsWith('Email:')) 
        card.description[index]=<Typography sx={{display:'flex',alignItems:'center',padding:'8px'}} key={index} variant='h4'><EmailTwoToneIcon/></Typography>
        else if (item.startsWith('Website:')) 
        card.description[index]=<Typography sx={{display:'flex',alignItems:'center',padding:'8px'}} key={index} variant='h4'><LinkTwoToneIcon/></Typography>
        else
        card.description[index]=<Typography sx={{display:'flex',alignItems:'center'}} key={index} variant='h6'>{item}</Typography>
        
    });
  });
});

// Iterate through lanes
kanbanData.lanes.forEach((lane) => {
  // Iterate through cards
  lane.cards.forEach((card) => {
    // Iterate through description
    const modifiedDescription=[]  
    card.description.forEach((item, index) => {
      if(index==card.description.length-1)
        return

        if(index%2==0)
        modifiedDescription.push(<Box sx={{display:'flex'}}> {card.description[index]} {card.description[index+1]} </Box>)
        
    });
       // Update card description with modified description
       card.description = modifiedDescription;
  });
});


const Pipeline = () => {
  return (
    <div>
      <Kanban data={kanbanData} />
    </div>
  );
};

export default Pipeline;
