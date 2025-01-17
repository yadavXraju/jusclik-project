import React from 'react';
import useDrawer from 'hooks/useDrawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import RoleAccess from './RoleAccess';
import RoleAuthorisation from './RoleAuthorisation';
import { makeStyles } from '@mui/styles';
import DrawerLayOut from 'layout/drawer-layout';

const steps = ['MODULES', 'AUTHORISATION'];
const component = [RoleAccess, RoleAuthorisation];

// =========== Style for Decrease font size for mobile responsive ==========
const useStyles = makeStyles((theme) => ({
  customLabelStyle: {
    fontSize: '11px',
    [theme.breakpoints.up('md')]: {
      fontSize: '14px'
    }
  }
}));

const AddRoleDrawer = () => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const classes = useStyles();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  // ============= handle Next button ===========
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  // ============= handle Back button ===========
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // ============= handle Reset button ===========
  const handleReset = () => {
    setActiveStep(0);
  };

  // ============= handle Finish button ===========
  const handleFinish = () => {
    setActiveStep(steps.length);
  };

  const ActiveComponent = component[activeStep];

  const DrawerBody = () => {
    return (
      <>
        <Box mt={1} sx={{ width: '100%', p: '0px' }}>
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Stepper sx={{ width: { xs: '100%', md: '50%' } }} activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <Box sx={{ fontSize: '10px' }}>
                      <StepLabel classes={{ label: classes.customLabelStyle }}>{label}</StepLabel>
                      {/* <StepLabel {...labelProps}>{label}</StepLabel>  */}
                    </Box>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
              <Box sx={{ marginTop: '20px' }} padding={{ xs: '0', md: '3' }}>
                <ActiveComponent />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>

                <Button variant="contained" onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </>
    );
  };

  return (
    <>
      <Button onClick={toggleDrawer('top', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Add Role
      </Button>
      <DrawerLayOut
        anchor={anchor}
        direction={'top'}
        toggleDrawer={toggleDrawer}
        Title={'Add Role'}
        Body={<DrawerBody />}
        customStyles={{ width: '100%' }}
      />
    </>
  );
};

export default AddRoleDrawer;
