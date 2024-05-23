import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import ReportsPayroll from './ReportsPayroll';
import SearchBar from 'component/ParamSearchBar';

const sections = [
  {
    title: 'Visitors',
    icon: <GroupsOutlinedIcon />,
    pages: [
      { name: 'Visitor Details', path: '/erp/visitor/reports/visitor-details' },
      { name: 'Blacklisted', path: '/erp/visitor/reports/blacklisted' },
      { name: 'Pre-Schedule Visits', path: '/erp/visitor/reports/pre-schedule-visits' },
      { name: 'Feedback / Satifaction Score ', path: '/erp/visitor/reports/feedback/satifaction-score' },
     
    ]
  },
  {
    title: 'Gate Pass',
    icon: <BadgeOutlinedIcon />,
    pages: [
      { name: 'Generated Gate Pass', path: '/erp/visitor/reports/generated-gate-pas' },
     
    ]
  },
  
  {
    title: 'Activity',
    icon: <ManageHistoryOutlinedIcon />,
    pages: [
     
      { name: 'Logs', path: '/erp/visitor/reports/logs' },
]
}
];


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ReportTabs = () => {
  const [value, setValue] = React.useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterData = searchTerm.trim() !== '' ? sections.filter(item => {
    if (item.title.toLowerCase().includes(searchTerm)) {
      return true;
    } else {
      return item?.pages.some(submenu =>
        submenu.name.toLowerCase().includes(searchTerm) && submenu.path
      );
    }
  }) : [];

  return (
    <Card>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="General Reports" {...a11yProps(0)} />
              <Tab label="Custom Reports" {...a11yProps(1)} />
            </Tabs>
          </Box>
        </Box>
        <Box sx={{width:'40%', borderBottom:'1px solid #cbcbcb85'}}>
          <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
          <Box>
            <Card className='scrollbar'
              sx={{
                overflowY: 'scroll',
                maxHeight: '200px',
                margin: 'auto',
                paddingLeft: '30px'
              }}>
              {filterData.map((item) => (
                <React.Fragment key={item.title}>
                  <p style={{paddingBottom:'10px',paddingTop:'10px',fontWeight: 'bold' }}>{item?.title}</p>
                  {item.pages.map((submenu) => (
                    <Link key={submenu.name} to={submenu.path} style={{ textDecoration: 'none' }}>
                      <Typography key={submenu.name} style={{padding:'4px 0',color:'#000'}}>{submenu.name}</Typography>
                    </Link>
                  ))}
                </React.Fragment>
              ))}
            </Card>
          </Box>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ReportsPayroll sections={sections} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Custom Reports
      </CustomTabPanel>
    </Card>
  );
}

export default ReportTabs;
