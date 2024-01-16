// TabItem.js
import { Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';

const TabItem = ({ value, handleChange }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        centered={!isSmallScreen}
        variant={isSmallScreen ? 'scrollable' : 'standard'}
      >
        <Tab label="UPCOMING" value="UPCOMING" />
        <Tab label="PAST" value="PAST" />
      </Tabs>
    </div>
  );
};

export default TabItem;
