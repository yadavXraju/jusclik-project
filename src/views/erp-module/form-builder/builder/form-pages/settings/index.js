// import React, { useState } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Typography, Tabs, Tab, Box } from '@mui/material';
// import { ArrowDownward as ArrowDownwardIcon } from '@mui/icons-material';

// // Dummy components for the content
// const Component1 = () => <Typography>Content for Tab 1</Typography>;
// const Component2 = () => <Typography>Content for Tab 2</Typography>;
// const Component3 = () => <Typography>Content for Tab 3</Typography>;
// const Component4 = () => <Typography>Content for Tab 4</Typography>;
// const Component5 = () => <Typography>Content for Tab 5</Typography>;

// // Dummy data for the accordions
// const accordionData = [
//   {
//     title: 'Accordion 1',
//     tabs: [
//       { label: 'Tab 1', component: <Component1 /> },
//       { label: 'Tab 2', component: <Component2 /> },
//       { label: 'Tab 3', component: <Component3 /> }
//     ]
//   },
//   {
//     title: 'Accordion 2',
//     tabs: [
//       { label: 'Tab 4', component: <Component4 /> },
//       { label: 'Tab 5', component: <Component5 /> }
//     ]
//   }
//   // Add more data as needed
// ];

// const MyAccordionWithTabs = () => {
//   const [expanded, setExpanded] = useState(Array(accordionData.length).fill(false));
//   const [selectedTab, setSelectedTab] = useState(0);

//   const handleChange = (index, tabValue) => {
//     setSelectedTab(tabValue);
//     setExpanded((prevExpanded) =>
//       prevExpanded.map((value, idx) => (idx === index ? !value : false))
//     );
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       {accordionData.map((accordion, index) => (
//         <Accordion
//           key={index}
//           expanded={expanded[index]}
//           onChange={() => setExpanded((prevExpanded) => prevExpanded.map((value, idx) => (idx === index ? !value : false)))}
//         >
//           <AccordionSummary
//             expandIcon={<ArrowDownwardIcon />}
//             aria-controls={`panel-${index}-content`}
//             id={`panel-${index}-header`}
//           >
//             <Typography>{accordion.title}</Typography>
//           </AccordionSummary>
//           <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
//             <Tabs
//               orientation="vertical"
//               variant="scrollable"
//               value={selectedTab}
//               onChange={(event, newValue) => handleChange(index, newValue)}
//               aria-label={`Vertical tabs for ${accordion.title}`}
//             >
//               {accordion.tabs.map((tab, tabIndex) => (
//                 <Tab key={tabIndex} label={tab.label} />
//               ))}
//             </Tabs>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//       <div style={{ flex: 1 }}>
//         {accordionData.map((accordion, index) => (
//           <TabPanel key={index} value={expanded[index] ? selectedTab : null}>
//             {accordion.tabs[selectedTab].component}
//           </TabPanel>
//         ))}
//       </div>
//     </div>
//   );
// };

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// };

// export default MyAccordionWithTabs;












import React, { useState } from 'react';
import { Box, Card, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails, Grid, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import columns from './data';

// Import your different components here
import DisplayComponent from './DisplayComponent';
import OtherComponent from './OtherComponent';
import FormAvailability from './FormAvailability';
import ThankYou from './ThankYou';

function MyAccordionWithTabs() {
  const [selectedAccordion, setSelectedAccordion] = useState(columns[0].id);
  const [selectedTab, setSelectedTab] = useState(0); // Default selected tab index is set to 0
  const [selectedLabel, setSelectedLabel] = useState('Display');

  const handleAccordionChange = (panel, column) => (event, isExpanded) => {
    // setSelectedAccordion(isExpanded ? panel : null);
    // setSelectedTab(isExpanded ? index : null);
    if (isExpanded) {
      setSelectedAccordion(panel);
      setSelectedTab(0); // Always set the selected tab to the first one when expanding the accordion
      const selectedDetail = column.details[0];
      setSelectedLabel(selectedDetail.label);
    } else {
      setSelectedAccordion(null);
    }
  };

  // Get the selected detail label
  //const selectedLabel = columns[selectedTab]?.details[selectedTab]?.label;
  const handleSelectLabel = (label) => {
    setSelectedLabel(label);
  };

  // console.log(selectedLabel);
  console.log(selectedTab)

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box className='scrollbar' sx={{height:'71vh'}}>
            {columns.map((column) => (
              <Accordion sx={{'&.Mui-expanded': { margin: 0 } }} key={column.id} expanded={selectedAccordion === column.id} onChange={handleAccordionChange(column.id, column)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h4">{column.accordionName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {column.details.map((detail, tabIndex) => (
                      <Button
                        sx={{
                          padding: '12px',
                          margin: '4px',
                          borderLeft: selectedTab === tabIndex ? '2px solid #2196f3' : 'none',
                          background: selectedTab === tabIndex ? '#48a4ed2e' : 'none',
                          justifyContent: 'start',
                          color: 'black'
                        }}
                        key={tabIndex}
                        fullWidth
                        role="button"
                        onClick={() => { setSelectedTab(tabIndex); handleSelectLabel(detail.label); }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setSelectedTab(tabIndex);
                          }
                        }}
                        tabIndex={0}
                      >
                        <Typography>{detail.label}</Typography>
                      </Button>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card>
            {columns.map((column) => (
              <>
                <Box
                  p={2}
                  mb={2}
                  key={column.id}
                  sx={{ display: selectedAccordion === column.id ? 'block' : 'none', borderBottom: '1px solid #ccc' }}
                >
                  {/* <Typography variant="h5">{column.accordionName}</Typography> */}
                  <Typography variant="h4">{column.details[selectedTab]?.label}</Typography>
                </Box>
              </>
            ))}

            <Box>
              {/* Conditional rendering based on the selected label */}
              {selectedLabel === 'Display' && <DisplayComponent />}
              {selectedLabel === 'Thank You Page & Redirection' && <ThankYou />}
              {selectedLabel === 'Other' && <OtherComponent />}
              {selectedLabel === 'Form Availability' && <FormAvailability />}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyAccordionWithTabs;
