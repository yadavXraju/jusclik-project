import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import ReportsPayroll from './ReportsPayroll';
import SearchBar from 'views/common-section/ParamSearchBar';



const sections = [
  {
    title: 'Overview',
    icon: <PolicyOutlinedIcon />,
    pages: [
      { name: 'Enquiry', path: '/erp/student-info-fee/reports/enquiry' },
      { name: 'Register', path: '/erp/student-info-fee/reports/register' },
      { name: 'Admission', path: '/erp/student-info-fee/reports/admission' },
      { name: 'Enrolment Review', path: '/erp/student-info-fee/reports/enrolment-review' },
      { name: 'Withdraw review', path: '/erp/student-info-fee/reports/withdraw-review' }
    ]
  },
  {
    title: 'Student',
    icon: <PeopleAltOutlinedIcon />,
    pages: [
      { name: 'Student Age As On', path: '/erp/student-info-fee/reports/student-age' },
      { name: 'Student Strength', path: '/erp/student-info-fee/reports/student-strength' }
    ]
  },
  {
    title: 'Transport',
    icon: <DirectionsBusFilledOutlinedIcon />,
    pages: [
      { name: 'User List', path: '/erp/student-info-fee/reports/user-list' },
      { name: 'Attendance', path: '/erp/student-info-fee/reports/attendance' },
      { name: 'Transport user as on', path: '/erp/student-info-fee/reports/transport-user' },
      { name: 'Logs', path: '/erp/student-info-fee/reports/logs' },
      { name: 'Routes & Stops', path: '/erp/student-info-fee/reports/routes-stops' }
    ]
  },
  {
    title: 'Invoices',
    icon: <ReceiptOutlinedIcon />,
    pages: [
      { name: 'Ledger', path: '/erp/student-info-fee/reports/ledger' }
    ]
  },
  {
    title: 'Fee Management',
    icon: <CreditCardOutlinedIcon />,
    pages: [
      { name: 'Transaction', path: '/erp/student-info-fee/reports/transaction' },
      { name: 'Concession', path: '/erp/student-info-fee/reports/concession' },
      { name: 'Adjustment', path: '/erp/student-info-fee/reports/adjustment' },
      { name: 'PG Settlement Report', path: '/erp/student-info-fee/reports/pg-settlement' },
      { name: 'Fee Structure', path: '/erp/student-info-fee/reports/fee-structure' }
    ]
  },
  {
    title: 'Student Records',
    icon: <FolderOpenOutlinedIcon />,
    pages: [
      { name: 'Tuition Fee Certificate', path: '/erp/student-info-fee/reports/tuition-certificate' },
      { name: 'School Learning Certificate', path: '/erp/student-info-fee/reports/learning-certificate' },
      { name: 'Gate Pass', path: '/erp/student-info-fee/reports/gate-pass' },
      { name: 'Identity Card', path: '/erp/student-info-fee/reports/identity-card' }
    ]
  },
  {
    title: 'Activity',
    icon: <ManageHistoryOutlinedIcon />,
    pages: [
      { name: 'Parent/Teacher Login List', path: '/erp/student-info-fee/reports/login-list' },
      { name: 'User Logs', path: '/erp/student-info-fee/reports/user-logs' },
      { name: 'Deleted Fee Invoices', path: '/erp/student-info-fee/reports/deleted-invoices' },
      { name: 'Deleted Fee Transactions', path: '/erp/student-info-fee/reports/deleted-transactions' }
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
          submenu.name.toLowerCase().includes(searchTerm)
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
          <Box>
            <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
            <Box>
              {/* <Card className='scrollbar '
                sx={{
                  overflowY: 'scroll',
                  maxHeight: '300px',
                  width: '75%',
                  margin: 'auto',
                  paddingLeft: '30px'
                }}> */}
                {
                  filterData.map((item) => {
                      return <>
                         <p key={item}>{item?.title}</p>
                         {
                          item.pages.map((submenu)=><Typography key={submenu?.name}>
                             {submenu?.name}
                          </Typography>)
                         }
                       </>
                  })
                }
              {/* </Card> */}
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