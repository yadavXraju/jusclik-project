// OWNER : DAMANDEEP
import React from 'react';
import {  Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import General from './sub-categories-common-config/general';
import HeaderFooter from './sub-categories-common-config/header-footer';
import TableConfig from './sub-categories-common-config/table';
import TermsAndConditions from './sub-categories-common-config/terms-and-conditions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Labels from './sub-categories-common-config/labels';
import { useState } from 'react';

export const CommonConfigSidebar = () => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };


  const accordionData=[ {
    title: 'General',
    content: <><General/></>,
  },
  {
    title: 'Header & Footer',
    content: <><HeaderFooter/></>,
  },
  {
    title: 'Table Layout',
    content: <><TableConfig /></>,
  },
  {
    title:'Labels',
    content:<><Labels/></>
  },
  {
    title: 'Terms & Conditions',
    content: <><TermsAndConditions /></>,
  },
  ]

  return (
    <>
    {accordionData.map((item, index) => (
        <Accordion key={index} sx={{
          '&.MuiAccordion-root:before': {
            // To hide the default border
            display: 'none',
          },
          borderBottom: '5px solid #eef2f6',
        }}
        expanded={expandedPanel === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </>
  );
};
