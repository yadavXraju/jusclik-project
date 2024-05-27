// PAGE OWNER : DAMANDEEP
// THIS component i a simple list
import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  Paper,
   useMediaQuery, useTheme
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
} from 'store/crm/settings/leadScoreSlice';
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

 const LeadScore=React.memo(()=> {
  const leadScore = useSelector((state) => state.leadScoreSlice);
  const leadScoreKeys = Object.keys(leadScore);
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState(leadScoreKeys[0]);
  const [tabContent, setTabContent] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedTab(leadScoreKeys[newValue]);
  };
  const generateTabs = () => {
    let newContent = [];

    Object.keys(leadScore[selectedTab].steps).map((stepName, index) => {
      const stepData = leadScore[selectedTab].steps[stepName];
      newContent.push(
        <TabPanel key={index} value={value} index={value} stepData={stepData} stepName={stepName} selectedTab={selectedTab} isMobile={isMobile}/>
      );
    });
    setTabContent(newContent);
  }

  useEffect(() => {
    generateTabs();
          // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, selectedTab]);
  return (
    <Paper elevation={2}>
      {/* tba heading */}
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary"
        scrollButtons={isMobile ? 'true' : 'off'}
        variant={isMobile ? 'scrollable' : 'standard'}>
        {Object.keys(leadScore).map((item, index) => (
          <Tab key={index} label={leadScore[item].title} />
        ))}
      </Tabs>
      <>
        <Typography sx={{ padding: '1rem' }} variant="h4">
          {leadScore[leadScoreKeys[value]].description}
        </Typography>
        <Box sx={{overflowX: 'auto' }}>
        {tabContent}
        </Box>
      </>
    </Paper>
  );
}
)
const TabPanel = React.memo((props)=> {
  
  const { children, value, index, stepData, stepName, selectedTab, description,isMobile, ...other } = props; 

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
<Box component="div" role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other} sx={{minWidth:'800px'}}>
  {value === index && (
    <Box p={3}>
      <List>
        <ListItem>
          <Box display="flex" alignItems="center" minWidth={'250px'} width={'250px'} maxWidth={'250px'} marginRight={'40px'}>
            <ListItemText primary={stepData.title} />
          </Box>
          <Box display="flex" width={'500px'} >
            <Box width={'160px'}>
              {(stepData.value == 0 || stepData.value) && (
                <Select
                  value={selectValue && selectValue} // Initial value, change this according to your logic
                  onChange={handleSelectChange} // Call handleSelectChange on select change
                  style={{ margin: '0', width: '100%' }} // Adjust style as needed
                >
                  {[...Array(31).keys()].map((value) => (
                    <MenuItem key={value} value={value - 15}>
                      {value - 15}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </Box>
            {radio && (
              <Box width={'350px'} display="flex" justifyContent="flex-end" marginLeft={'20px'} >
                <RadioGroup row defaultValue={radio} sx={{ justifyContent: 'center', width: '100%' }} onChange={handleRadioChange}>
                  <FormControlLabel
                    value="everytime"
                    control={<Radio />}
                    label="Everytime"
                    sx={{ margin: '0 0.5rem', width: '50%', flex: '1' }}
                    fullWidth
                  />
                  <FormControlLabel
                    value="firstTimeOnly"
                    control={<Radio />}
                    label="First Time Only"
                    sx={{ margin: '0 0.5rem', width: '50%', flex: '1' }}
                    fullWidth
                  />
                </RadioGroup>
              </Box>
            )}
          </Box>
        </ListItem>
      </List>
    </Box>
  )}
</Box>

  
  );
}
)
LeadScore.propTypes = {
  // Define prop types for LeadScore component
  children: PropTypes.node,
  value: PropTypes.any,
  index: PropTypes.number,
  stepData: PropTypes.shape({
    title: PropTypes.string, // eslint-disable-line react/prop-types
    value: PropTypes.any,
  }),
  stepName: PropTypes.string,
  selectedTab: PropTypes.string,
  description: PropTypes.string,
};


export default LeadScore