import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {updateLeadRegistrationAndVerification,updateApplicationActivities,updateEmailActivities,updateSmsActivities,updateWhatsappActivities,updateOtherApplicantActivities,updateTelephonyActivities} from '../../../../../../../store/crm/settings/leadScoreSlice'
const dispatchers=[updateLeadRegistrationAndVerification,updateApplicationActivities,updateEmailActivities,updateSmsActivities,updateWhatsappActivities,updateOtherApplicantActivities,updateTelephonyActivities]

export default function LeadScore() {
  const leadScore = useSelector((state) => state.leadScoreSlice);
const leadScoreKeys=Object.keys(leadScore)
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper elevation={2}>
      {/* tba heading */}
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
        {Object.keys(leadScore).map((item, index) => (
          <Tab key={index} label={leadScore[item].title} />
        ))}
      </Tabs>
      <>
      <Typography sx={{padding:'1rem'}} variant='h4'>{leadScore[leadScoreKeys[value]].description}</Typography>
      {Object.keys(leadScore).map((tabName) => {
        return (
          <>
          {Object.keys(leadScore[tabName].steps).map((stepName, index) => {
            const stepData = leadScore[tabName].steps[stepName];
            return <TabPanel key={index} value={value} index={index} stepData={stepData} stepName={stepName}  />
          })}
          </>
      )
    })}
    </>
    </Paper>
  );
}

function TabPanel(props) {
  const { children, value, index, stepData,stepName, description, ...other } = props;
  const dispatch=useDispatch()

  // Function to handle the change in select box
  const handleSelectChange = (e) => {      
    // Your logic here to handle the change in select box value
    console.log(stepName);
    dispatch(dispatchers[value]({key:'value',subKey:stepName,value:e.target.value}))
  };

  return (
    <Box component="div" role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      <Box p={3}>
        <Typography></Typography>
        <List>
          <ListItem>
            <ListItemText primary={stepData.title} sx={{ width: '30%' }} />
            {
              <Box sx={{ display: 'flex', width: '100%' }}>
                {(stepData.value == 0 || stepData.value) && (
                  <Select
                    // labelId={`select-label-${stepIndex}`}
                    // id={`select-${stepIndex}`}
                    value={stepData?.value} // Initial value, change this according to your logic
                    onChange={handleSelectChange} // Call handleSelectChange on select change
                    style={{ margin: '0 1rem', width: '20%', justifyContent: 'start' }} // Adjust style as needed
                  >
                    {[...Array(31).keys()].map((value) => (
                      <MenuItem key={value} value={value - 15}>
                        {value - 15}
                      </MenuItem>
                    ))}
                  </Select>
                )}
                <RadioGroup row defaultValue="A" sx={{ justifyContent: 'center', width: '100%' }}>
                  {(stepData?.everytime == false || stepData?.everytime == true) && (
                    <FormControlLabel value="A" control={<Radio />} label="Everytime" sx={{ margin: '0 0.5rem', width: '30%' }} fullWidth />
                  )}
                  {(stepData?.firstTimeOnly == false || stepData?.firstTimeOnly == true) && (
                    <FormControlLabel
                      value="B"
                      control={<Radio />}
                      label="First Time Only"
                      sx={{ margin: '0 0.5rem', width: '30%' }}
                      fullWidth
                    />
                  )}
                </RadioGroup>
              </Box>
            }
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
