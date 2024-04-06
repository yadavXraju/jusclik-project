import React from 'react';
import {  Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';

import General from './sub-categories/general';
import HeaderFooter from './sub-categories/header-footer';
import TableConfig from './sub-categories/table';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CommonConfig = () => {

  const accordionData=[ {
    title: 'General',
    content: <><General/></>,
  },
  {
    title: 'Header And Footer',
    content: <><HeaderFooter/></>,
  },
  {
    title: 'Table Layout',
    content: <><TableConfig /></>,
  },]

  return (
    <>
    {accordionData.map((item, index) => (
        <Accordion key={index} sx={{
          '&.MuiAccordion-root:before': {
            // To hide the default border
            display: 'none',
          },
          borderBottom: '5px solid #eef2f6',
        }}>
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

export default CommonConfig;