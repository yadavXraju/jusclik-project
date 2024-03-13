import React, { useState } from 'react';
import ParamStepper from 'views/common-section/ParamStepper';
import { Box, Typography, Button } from '@mui/material';
import GeneralReport from '../general-report';
import ShowHide from '../show-hide';
import ReportLayout from '../report-layout';
import ReportReference from '../report-reference';

const steps = [
    'General',
    'Show/Hide Columns',
    'Report Layout',
    'Report Preference'
];

const tabPage = [
    {
      id: 1,
      name: "GeneralReport",
      component:GeneralReport,
    },
    {
      id: 2,
      name: "Show / Hide Columns",
      component:ShowHide
    }, {
      id: 3,
      name: "Report Layout",
      component:ReportLayout 
    },
    {
      id: 4,
      name: "Report Reference",
      component:ReportReference ,
    },
  ]

const EnquiryDrawer = ({ name, setClickedCustomize }) => {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <>
            <Box className="enquiry-customize-report" sx={{ marginLeft: "5%", width: "80%", justifyContent: "space-around" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">{name}</Typography>
                    <Button sx={{ alignSelf: 'flex-end' }} onClick={() => setClickedCustomize(false)}>
                        Close
                    </Button>
                </Box>
            </Box>
            <ParamStepper tabPage={tabPage} steps={steps} acitveStep={activeStep} setActiveStep={setActiveStep} customStyle={{}}  />
        </>
    );
};
export default EnquiryDrawer;