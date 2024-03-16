import React, { useState } from 'react';
import ParamStepper from 'views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/reports/ParamStepper';
import { Box, Typography, Button } from '@mui/material';
import GeneralReport from '../general-report';
import ShowHide from '../show-hide';
import ReportLayout from '../report-layout';
import ReportReference from '../report-reference';

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
    component: GeneralReport
  },
  {
    id: 4,
    name: "Report Layout",
    component: ReportLayout,
  },
]

const EnquiryDrawer = ({ name, setClickedCustomize }) => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <Box className="enquiry-customize-report" sx={{marginTop:"10px",marginLeft:"40px"}}>
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