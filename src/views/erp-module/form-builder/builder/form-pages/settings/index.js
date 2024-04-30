
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Tabs, Tab, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [
  {
    id: 1,
    title: 'Accordion Item 1',
    content: 'Content for Accordion Item 1',
    tabs: [
      { id: 1, label: 'Tab 1', content: 'Content for Tab 1' },
      { id: 2, label: 'Tab 2', content: 'Content for Tab 2' },
      { id: 3, label: 'Tab 3', content: 'Content for Tab 3' }
    ]
  },
  {
    id: 2,
    title: 'Accordion Item 2',
    content: 'Content for Accordion Item 2',
    tabs: [
      { id: 1, label: 'Tab 1', content: 'Content for Tab 1' },
      { id: 2, label: 'Tab 2', content: 'Content for Tab 2' }
    ]
  },
];


const AccordionWithTabs = ({ data }) => {
  const [expanded, setExpanded] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box display="flex">
      <Box flex={1}>
        <Accordion elevation={0} expanded={expanded === `panel-${data[0].id}`} onChange={handleChange(`panel-${data[0].id}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{data[0].title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data[0].content}</Typography>
          </AccordionDetails>
        </Accordion>
        {data.slice(1).map(item => (
          <Accordion key={item.id} elevation={0} expanded={expanded === `panel-${item.id}`} onChange={handleChange(`panel-${item.id}`)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box flex={1}>
        <Tabs value={activeTab} onChange={handleTabChange} orientation="vertical">
          {data.map((item) => (
            <Tab key={item.id} label={item.title} />
          ))}
        </Tabs>
        {data.map((item, index) => (
          <Box key={item.id} hidden={activeTab !== index}>
            <Typography>{item.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AccordionWithTabs;
