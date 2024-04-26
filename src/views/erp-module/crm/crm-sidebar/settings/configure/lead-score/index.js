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
  Radio
} from '@mui/material';
import { leadScoreData } from './leadScoreData';

export default function LeadScore() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box variant='paper' >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {leadScoreData.map((item, index) => (
          <Tab key={index} label={item.title} />
        ))}
      </Tabs>
      {leadScoreData.map((item, index) => (
        <TabPanel key={index} value={value} index={index} item={item} />
      ))}
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, item, ...other } = props;

  // Function to handle the change in select box
  const handleSelectChange = (event) => {
    // Your logic here to handle the change in select box value
    console.log('Selected value:', event.target.value);
  };

  return (
    <Box component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography variant="h6" gutterBottom>{item.description}</Typography>
          <List>
            {item.steps.map((step, stepIndex) => (
              <ListItem key={stepIndex}>
                  <ListItemText primary={step} />
                {/* Material-UI Radio buttons */}
                <RadioGroup row defaultValue="A">
                  <FormControlLabel
                    value="A"
                    control={<Radio />}
                    label="Everytime"
                  />
                  <FormControlLabel
                    value="B"
                    control={<Radio />}
                    label="First Time Only"
                  />
                </RadioGroup>
                {/* Material-UI Select box */}
                <Select
                  labelId={`select-label-${stepIndex}`}
                  id={`select-${stepIndex}`}
                  value={0} // Initial value, change this according to your logic
                  onChange={handleSelectChange} // Call handleSelectChange on select change
                  style={{ marginRight: '10px' }} // Adjust style as needed
                >
                  {[...Array(31).keys()].map(value => (
                    <MenuItem key={value} value={value - 15}>{value - 15}</MenuItem>
                  ))}
                </Select>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}