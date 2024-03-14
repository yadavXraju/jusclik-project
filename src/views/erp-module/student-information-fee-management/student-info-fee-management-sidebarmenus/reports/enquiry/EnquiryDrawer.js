import React, { useState } from 'react';
import ParamStepper from 'views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/reports/ParamStepper';
import { Box, Typography, Button } from '@mui/material';
import GeneralReport from '../general-report';
import ShowHide from '../show-hide';
import ReportLayout from '../report-layout';
import ReportReference from '../report-reference';

const steps = [
    'General',
    'Show/Hide Columns',
    'Report Layout',
    'Report Preferences'
];

const tabPage = [
    {
      id: 1,
      name: "General Report",
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
      name: "Report Preferences",
      component:ReportReference ,
    },
  ]

const EnquiryDrawer = ({ name, setClickedCustomize }) => {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <Box sx={{marginLeft:"5%",height:"500px"}} className="enquiry-customize-report">
            <Box  sx={{width: "80%", justifyContent: "space-around",marginTop:"20px"}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">{name}</Typography>
                    <Button sx={{ alignSelf: 'flex-end' }} onClick={() => setClickedCustomize(false)}>
                        Close
                    </Button>
                </Box>
            </Box>
            <ParamStepper tabPage={tabPage} steps={steps} acitveStep={activeStep} setActiveStep={setActiveStep} customStyle={{}}  />
        </Box>
    );
};
export default EnquiryDrawer;