// ======= Page Owner Vikash =========
// ======= School Fee Entry Page =========
import React, {useState} from 'react'
import MainCard from 'components/ui/cards/MainCard';
import PoliciesCounter from './policiesCounter';
import { useTheme, useMediaQuery, Box, Typography , Tab, Tabs} from '@mui/material';
import FeeDataTable from './Fee_table';
import Summary from './Summary';
import ReceiptDetails from './ReceiptDetails';


// ====== Custom component for rendering the content of each tab panel ========
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: isSmallScreen ? 1 : 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Function to generate accessibility props for each tab
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Index = () => {

  const [value, setValue] = useState(0);

  // Event handler for tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    
    <MainCard title="Fee Ledger" >
    <Box >
      <Box pb={3}><PoliciesCounter/></Box>
      
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', '@media (max-width:600px)': { marginBottom: '15px' } }}>
        {/* Tabs for navigation */}
        <Tabs value={value} variant="scrollable" onChange={handleChange}>
          <Tab aria-label="basic tabs example" label="Summary" {...a11yProps(0)} />
          <Tab aria-label="basic tabs example" label="School Fee" {...a11yProps(1)} />
          <Tab aria-label="basic tabs example" label="Transport" {...a11yProps(2)} />
          <Tab aria-label="basic tabs example" label="Donation" {...a11yProps(3)} />
          <Tab aria-label="basic tabs example" label="Activity" {...a11yProps(4)} />
        </Tabs>
      </Box>

      {/* Content of each tab panel */}
      <CustomTabPanel value={value} index={0}>
       <Summary/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <FeeDataTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ReceiptDetails/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       3
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       4
      </CustomTabPanel>
    </Box>
      </Box>
    </MainCard>
    
    
    </>
  )
};

export default Index
