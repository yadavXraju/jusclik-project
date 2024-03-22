import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';

const TableConfig = () => {
  return (
    <>
       <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Table Layout
        </AccordionSummary>
        <AccordionDetails>
         {/* Table Border (checkbox) with (color input)  */}
         {/* Table Header (Label) */}
         {/*  (font size) */}
         {/* background color  (checkbox) with (color input)*/}
         {/* (font color) */}
         {/* item row (label) */}
         {/* (font size) */}
         {/* background color (checkbox) eith (color input) */}
         {/* (font color) */}
        </AccordionDetails>
        </Accordion>
    </>
            );
};

export default TableConfig;