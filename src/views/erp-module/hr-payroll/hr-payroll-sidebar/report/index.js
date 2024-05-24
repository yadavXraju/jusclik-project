import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
import ReportsHrPayroll from './ReportsHrPayroll';
import SearchBar from 'components/SearchBar';

const sections = [
  {
    title: 'Employee',
    icon: <CreditCardOutlinedIcon />,
    pages: [
      { name: 'Details', path: '/erp/hr-payroll/reports/details' },
      { name: 'Ledger', path: '/erp/hr-payroll/reports/ledger' },
      { name: 'Enrolment Review', path: '/erp/hr-payroll/reports/enrolment-review' },
      { name: 'Employee Master', path: '/erp/hr-payroll/reports/employee-master' },
      { name: ' Strength as on', path: '/erp/hr-payroll/reports/employees-strength-as-on' },
      { name: ' Attendance', path: '/erp/hr-payroll/reports/employee-attendance' },
      { name: ' Leave', path: '/erp/hr-payroll/reports/employee-leave' },
      { name: '  Macps/Promotion Report', path: '/erp/hr-payroll/reports/employee-macps/promotion-report' },
      
    ]
  },
  {
    title: 'Employee Documents',
    icon: <DirectionsBusFilledOutlinedIcon />,
    pages: [
      { name: ' I-Card', path: '/erp/hr-payroll/reports/employee-i-card' },
      { name: ' Document Report', path: '/erp/hr-payroll/reports/employee-document-report' },
      { name: ' Gate Pass ', path: '/erp/hr-payroll/reports/employee-gate-pass' },
      { name: ' Barcode ', path: '/erp/hr-payroll/reports/logs' },
      { name: ' Enrollment Review  ', path: '/erp/hr-payroll/reports/employee-enrollment-review-report' },
      { name: 'Education Details  ', path: '/erp/hr-payroll/reports/employee-education-details-report' },
      { name: ' Experience Details  ', path: '/erp/hr-payroll/reports/employee-experience-details-report' },
      { name: ' Salary Sheet ', path: '/erp/hr-payroll/reports/employee-salary-sheet-report' },
      
    ]
  },
  {
    title: 'Salary',
    icon: <FolderOpenOutlinedIcon />,
    pages: [
      { name: 'Salary Statement', path: '/erp/hr-payroll/reports/salary-statement' },
      { name: 'Salary Slip', path: '/erp/hr-payroll/reports/salary-slip' },
      { name: 'Bank Statement', path: '/erp/hr-payroll/reports/bank-statement' },
      { name: 'Salary Comparison Report', path: '/erp/hr-payroll/reports/salary-comparison-report' },
      { name: 'Salary Statement Summary', path: '/erp/hr-payroll/reports/salary-statement-summary' },
      { name: 'Salary Certificate', path: '/erp/hr-payroll/reports/salary-certificate' },
      { name: 'Bank Statement Text File', path: '/erp/hr-payroll/reports/bank-statement-text-file' },
      { name: 'Salary Transaction', path: '/erp/hr-payroll/reports/salary-transaction' },
    ]
  },
  {
    title: 'Leave ',
    icon: <ManageHistoryOutlinedIcon />,
    pages: [
      { name: 'Leave Application', path: '/erp/hr-payroll/reports/leave-application' },
      { name: 'LWP Reports', path: '/erp/hr-payroll/reports/lwp-reports' },
]
  },
  {
    title: 'Income Tax',
    icon: <ReceiptOutlinedIcon />,
    pages: [
      { name: 'Income Tax Computation Reports', path: '/erp/hr-payroll/reports/income-tax-computation-reports' },
      { name: 'Income Tax Calculation Reports', path: '/erp/hr-payroll/reports/income-tax-calculation-reports' },
      { name: 'Income Tax Final Form-16', path: '/erp/hr-payroll/reports/income-tax-final-form-16' },
      
    ]
  },
  {
    title: 'ESIC Reports',
    icon: <PeopleAltOutlinedIcon />,
    pages: [
      { name: 'ESIC Salary Reports', path: '/erp/hr-payroll/reports/esic-reports' },
      { name: 'ESIC Challan Form Separate', path: '/erp/hr-payroll/reports/esic-challan-form-separate' },
      { name: 'ESIC Challan Form Combined All Wing', path: '/erp/hr-payroll/reports/esic-challan-form-combined-all-wing' },
      { name: 'ESIC Contribution Separate Report', path: '/erp/hr-payroll/reports/esic-contribution-separate-report' },
      
    ]
  },
  {
    title: 'PF Reports',
    icon: <PolicyOutlinedIcon />,
    pages: [
      { name: 'PF Reports ', path: '/erp/hr-payroll/reports/pf-reports' },
      { name: 'PF Statement ', path: '/erp/hr-payroll/reports/pf-statement' },
      { name: 'PF Text File ', path: '/erp/hr-payroll/reports/pf-text-file' },
      { name: 'ECR Text File', path: '/erp/hr-payroll/reports/ecr-text-file' },
      
    ]
  },
  {
    title: 'Other Reports',
    icon: <ManageHistoryOutlinedIcon />,
    pages: [
      { name: 'Contact/Probation History ', path: '/erp/hr-payroll/reports/contact/probation-history-report' },
      { name: 'Contact/Probation Ending ', path: '/erp/hr-payroll/reports/contact/probation-ending-report' },
      { name: 'Superannuation/Retirement ', path: '/erp/hr-payroll/reports/superannuation/retirement-report' },     
]
},

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
        <ReportsHrPayroll sections={sections} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Custom Reports
      </CustomTabPanel>
    </Card>
  );
}

export default ReportTabs;
