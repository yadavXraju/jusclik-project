// @Page Owner-Tarun Pandey
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

export default function OtherComponent() {
  const handleCheckboxClick = (event) => {
    event.stopPropagation(); // Stop propagation of the click event
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <FormControlLabel
            control={
              <Box onClick={handleCheckboxClick}>
                <Switch  defaultChecked size="small" />
              </Box>
            }
            label="Accordion 1"
          />
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
