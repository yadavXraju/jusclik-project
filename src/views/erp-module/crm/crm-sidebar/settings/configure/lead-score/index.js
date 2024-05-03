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
import {
  updateLeadRegistrationAndVerification,
  updateApplicationActivities,
  updateEmailActivities,
  updateSmsActivities,
  updateWhatsappActivities,
  updateOtherApplicantActivities,
  updateTelephonyActivities
} from '../../../../../../../store/crm/settings/leadScoreSlice';
import { useEffect } from 'react';
const dispatchers = [
  updateLeadRegistrationAndVerification,
  updateApplicationActivities,
  updateEmailActivities,
  updateSmsActivities,
  updateWhatsappActivities,
  updateOtherApplicantActivities,
  updateTelephonyActivities
];

export default function LeadScore() {
  const leadScore = useSelector((state) => state.leadScoreSlice);
  const leadScoreKeys = Object.keys(leadScore);
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState(leadScoreKeys[0]);
  const [tabContent, setTabContent] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedTab(leadScoreKeys[newValue]);
  };
  const generateTabs = () => {
    let newContent = [];

    Object.keys(leadScore[selectedTab].steps).map((stepName, index) => {
      const stepData = leadScore[selectedTab].steps[stepName];
      newContent.push(
        <TabPanel key={index} value={value} index={value} stepData={stepData} stepName={stepName} selectedTab={selectedTab} />
      );
    });
    setTabContent(newContent);
  };

  useEffect(() => {
    generateTabs();
  }, [value, selectedTab]);
  return (
    <Paper elevation={2}>
      {/* tba heading */}
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
        {Object.keys(leadScore).map((item, index) => (
          <Tab key={index} label={leadScore[item].title} />
        ))}
      </Tabs>
      <>
        <Typography sx={{ padding: '1rem' }} variant="h4">
          {leadScore[leadScoreKeys[value]].description}
        </Typography>
        {tabContent}
      </>
    </Paper>
  );
}

function TabPanel(props) {
  const { children, value, index, stepData, stepName, selectedTab, description, ...other } = props;
  const dispatch = useDispatch();
  const leadScore = useSelector((state) => state.leadScoreSlice);
  const selectValue = leadScore[selectedTab].steps[stepName].value;
  const radio = leadScore[selectedTab].steps[stepName].radio;

  // Function to handle the change in select box
  const handleSelectChange = (e) => {
    // Your logic here to handle the change in select box value
    dispatch(dispatchers[value]({ key: 'value', subKey: stepName, value: e.target.value }));
  };
  const handleRadioChange = (e) => {
    dispatch(dispatchers[value]({ key: 'radio', subKey: stepName, value: e.target.value }));
  };

  return (
    <Box component="div" role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
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
                      value={selectValue && selectValue} // Initial value, change this according to your logic
                      onChange={handleSelectChange} // Call handleSelectChange on select change
                      style={{ margin: '0', width: radio?'19%':'16%', justifyContent: 'start' }} // Adjust style as needed
                    >
                      {[...Array(31).keys()].map((value) => (
                        <MenuItem key={value} value={value - 15}>
                          {value - 15}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                  {radio && (
                    <RadioGroup row defaultValue={radio} sx={{ justifyContent: 'center', width: '100%' }} onChange={handleRadioChange}>
                      <FormControlLabel
                        value="everytime"
                        control={<Radio />}
                        label="Everytime"
                        sx={{ margin: '0 0.5rem', width: '30%' }}
                        fullWidth
                      />

                      <FormControlLabel
                        value="firstTimeOnly"
                        control={<Radio />}
                        label="First Time Only"
                        sx={{ margin: '0 0.5rem', width: '30%' }}
                        fullWidth
                      />
                    </RadioGroup>
                  )}
                </Box>
              }
            </ListItem>
          </List>
        </Box>
      )}
    </Box>
  );
}
