import React from 'react';
import { Tabs, Tab, Grid} from '@mui/material';
import { Box } from '@mui/system';
import General from './sub-categories/general';
import HeaderFooter from './sub-categories/header-footer';
import TransactionDetails from './sub-categories/transcation-details';
import TableConfig from './sub-categories/table';
import Total from './sub-categories/total';
import OtherDetails from './sub-categories/other-details';
import statePropTypes from './statePropTypes';

const CommonConfig = ({state,setState}) => {
  // Sample tab data array
  const tabsData = [
    {
      label: 'General',
      content: <><General  state={state} setState={setState} /></>,
    },
    {
      label: 'Header And Footer',
      content: <><HeaderFooter  state={state} setState={setState} /> </>,
    },
    {
      label: 'Transaction Details',
      content: <><TransactionDetails  state={state} setState={setState} /> </>,
    },
    {
      label: 'Table',
      content: <><TableConfig  state={state} setState={setState} /> </>,
    },
    {
      label: 'Total',
      content: <><Total  state={state} setState={setState} /> </>,
    },
    {
      label: 'Other Details',
      content: <><OtherDetails  state={state} setState={setState} /> </>,
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