import React from 'react';
import { Tabs, Tab, Grid} from '@mui/material';
import { Box } from '@mui/system';
import General from './sub-categories/general';
import HeaderFooter from './sub-categories/header-footer';
import TableConfig from './sub-categories/table';
import statePropTypes from './statePropTypes';

const CommonConfig = () => {

  const tabsData = [
    {
      label: 'General',
      content: <><General/></>,
    },
    {
      label: 'Header And Footer',
      content: <><HeaderFooter/></>,
    },
    {
      label: 'Table Layout',
      content: <><TableConfig /></>,
    },
  ];

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      {/* Vertical Tabs */}
      <Grid container spacing={1}>
      <Grid item md={3}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleTabChange}
      >
        {/* Dynamically generate tabs */}
        {tabsData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      </Grid>
      <Grid item md={8}>
        {tabsData[selectedTab].content}
      </Grid>
      </Grid>
      <Box sx={{display:'flex',}}>
      {/* Tab Content */}

        {/* Render content based on selected tab */}
      
      </Box>

      </>
  );
};

CommonConfig.propTypes = {
  state: statePropTypes.isRequired, // Use the defined PropTypes for the state prop
};

export default CommonConfig;