import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import FilterAndSort from '../common-report-section/filter-and-sort';
import ShowHide from '../common-report-section/selected-column';
import ReportLayout from '../common-report-section/report-layout';
import ReportReference from '../common-report-section/report-preference';
import ParamStepper from 'components/tabs/Stepper';

const steps = [
  'Report Preferences',
  'Selected  Columns',
  'Filter & Sort',
  'Report Layout'
];

const tabPage = [
  {
    id: 1,
    name: "Report Preferences",
    component: ReportReference,
  },
  {
    id: 2,
    name: "Selected  Columns",
    component: ShowHide
  }, {
    id: 3,
    name: "Filter & Sort",
    component: FilterAndSort
  },
  {
    id: 4,
    name: "Report Layout",
    component: ReportLayout,
  },
]

const EnquiryDrawer = ({ name, setClickedCustomize }) => {
  const [activeStep, setActiveStep] = useState(1);

  const windowWidth=window.innerWidth;
  const largeWidth=windowWidth>=900;

  return (
    <Box sx={{marginTop:"10px",marginLeft:"40px",overflowX:'hidden',
      width:largeWidth?'calc(100vw - 300px)':'100vw',paddingRight:largeWidth?'':'40px'}}>
      <Box sx={{ width: "100%"}}>
        <Box sx={{paddingRight:"40px",width: "100%",display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">{name}</Typography>
          <Button sx={{ alignSelf: 'flex-end' }} onClick={() => setClickedCustomize(false)}>
            Close
          </Button>
        </Box>
        <ParamStepper tabPage={tabPage} steps={steps} acitveStep={activeStep} setActiveStep={setActiveStep} customStyle={{}} />
      </Box>
    </Box>
  );
};
export default EnquiryDrawer;