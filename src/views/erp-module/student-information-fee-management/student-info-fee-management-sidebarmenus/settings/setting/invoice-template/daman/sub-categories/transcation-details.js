import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const TransactionDetails = () => {
  return (
    <>
       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Organization Details
        </AccordionSummary>
        <AccordionDetails>
         {/* show logo (checkbox) */}
         {/* show org name (checkbox) */}
         {/* color  */}
         {/* Font Size */}
         {/* show organization address (checkbox) */}

         

        </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Customer Details
        </AccordionSummary>
        <AccordionDetails>
        {/* label: customer name */}
        {/* font color */}
        {/* font size */}
        {/* bill to (checkbox) */}
        {/* bill to input feild */}
        {/* ship to (checkbox) */}
        {/* ship to input feild */}


        </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Document Details
        </AccordionSummary>
        <AccordionDetails>
        {/* show document title (checkbox)*/}
        {/* input document title */}
        {/* lable Document title */}
        {/* font size */}
        {/* font color */}
        {/* balance due (checkbox) */}
        {/* input phone */}
        {/* input fax */}

        {/* lable Document information */}
        {/* checkboxes and feilds */}
        

        </AccordionDetails>
        </Accordion>
    </>
            );
};

export default TransactionDetails;