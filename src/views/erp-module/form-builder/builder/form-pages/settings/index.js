import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Tabs, Tab, Box } from '@mui/material';
import { ArrowDownward as ArrowDownwardIcon } from '@mui/icons-material';


// Dummy components for the content
const Component1 = () => <Typography>Content for Tab 1</Typography>;
const Component2 = () => <Typography>Content for Tab 2</Typography>;
const Component3 = () => <Typography>Content for Tab 3</Typography>;
const Component4 = () => <Typography>Content for Tab 4</Typography>;
const Component5 = () => <Typography>Content for Tab 5</Typography>;

// Dummy data for the accordions
const accordionData = [
  {
    title: 'Accordion 1',
    tabs: [
      { label: 'Tab 1', component: <Component1 /> },
      { label: 'Tab 2', component: <Component2 /> },
      { label: 'Tab 3', component: <Component3 /> }
    ]
  },
  {
    title: 'Accordion 2',
    tabs: [
      { label: 'Tab 4', component: <Component4 /> },
      { label: 'Tab 5', component: <Component5 /> }
    ]
  }
  // Add more data as needed
];

const MyAccordionWithTabs = () => {
  const [expanded, setExpanded] = useState(Array(accordionData.length).fill(false));
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (index, tabValue) => {
    setSelectedTab(tabValue);
    setExpanded((prevExpanded) =>
      prevExpanded.map((value, idx) => (idx === index ? !value : false))
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      {accordionData.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded[index]}
          onChange={() => setExpanded((prevExpanded) => prevExpanded.map((value, idx) => (idx === index ? !value : false)))}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls={`panel-${index}-content`}
            id={`panel-${index}-header`}
          >
            <Typography>{accordion.title}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={selectedTab}
              onChange={(event, newValue) => handleChange(index, newValue)}
              aria-label={`Vertical tabs for ${accordion.title}`}
            >
              {accordion.tabs.map((tab, tabIndex) => (
                <Tab key={tabIndex} label={tab.label} />
              ))}
            </Tabs>
          </AccordionDetails>
        </Accordion>
      ))}
      <div style={{ flex: 1 }}>
        {accordionData.map((accordion, index) => (
          <TabPanel key={index} value={expanded[index] ? selectedTab : null}>
            {accordion.tabs[selectedTab].component}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};


export default MyAccordionWithTabs;
