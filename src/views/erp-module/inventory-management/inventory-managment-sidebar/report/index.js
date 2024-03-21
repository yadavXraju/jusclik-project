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
// import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
// import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
// import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import ReportsPayrollInv from './ReportsPayrollInv';
import SearchBar from 'views/common-section/ParamSearchBar';



const sections = [
  {
    title: 'Item/Stock',
    icon: <PolicyOutlinedIcon />,
    pages: [
      { name: 'List', path: '/erp/inventory/reports/list' },
      { name: 'Barcode', path: '/erp/inventory/reports/barcode' },
      { name: 'Issue', path: '/erp/inventory/reports/issue' },
      { name: 'Return', path: '/erp/inventory/reports/return' },
      { name: 'Valuation', path: '/erp/inventory/reports/valuation' },
      { name: 'Stock Movement', path: '/erp/inventory/reports/stock-movement' },
      { name: 'Stock As On...', path: '/erp/inventory/reports/stock-as-on' }
    ]
  },
  {
    title: 'Inventory',
    icon: <PeopleAltOutlinedIcon />,
    pages: [
      { name: 'Material Request', path: '/erp/inventory/reports/student-age' },
      { name: 'PO', path: '/erp/inventory/reports/student-strength' },
      { name: 'Material Receipt', path: '/erp/inventory/reports/student-strength' }
    ]
  },
  {
    title: 'Vendor',
    icon: <DirectionsBusFilledOutlinedIcon />,
    pages: [
      { name: 'List', path: '/erp/inventory/reports/user-list' },
      { name: 'Payment', path: '/erp/inventory/reports/attendance' },
      { name: 'Balances', path: '/erp/inventory/reports/transport-user' },
      { name: 'Comparison', path: '/erp/inventory/reports/logs' },
      
    ]
  },
  {
    title: 'Activity',
    icon: <ReceiptOutlinedIcon />,
    pages: [
      { name: 'Email History', path: '/erp/inventory/reports/ledger' },
      { name: 'Activity Logs', path: '/erp/inventory/reports/ledger' }
    ]
  },
 
  // {
  //   title: 'Student Records',
  //   icon: <FolderOpenOutlinedIcon />,
  //   pages: [
  //     { name: 'Tuition Fee Certificate', path: '/erp/inventory/reports/tuition-certificate' },
  //     { name: 'School Learning Certificate', path: '/erp/inventory/reports/learning-certificate' },
  //     { name: 'Gate Pass', path: '/erp/inventory/reports/gate-pass' },
  //     { name: 'Identity Card', path: '/erp/inventory/reports/identity-card' }
  //   ]
  // },
  // {
  //   title: 'Activity',
  //   icon: <ManageHistoryOutlinedIcon />,
  //   pages: [
  //     { name: 'Parent/Teacher Login List', path: '/erp/inventory/reports/login-list' },
  //     { name: 'User Logs', path: '/erp/inventory/reports/user-logs' },
  //     { name: 'Deleted Fee Invoices', path: '/erp/inventory/reports/deleted-invoices' },
  //     { name: 'Deleted Fee Transactions', path: '/erp/inventory/reports/deleted-transactions' }
  //   ]
  // }
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
          <Box sx={{width:'40%', borderBottom:'1px solid #cbcbcb85', paddingTop:'1px'}}>
            <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
            <Box>
              <Card className='scrollbar '
                sx={{
                  overflowY: 'scroll',
                  maxHeight: '200px',
                  margin: 'auto',
                  paddingLeft: '30px'
                }}>
                {
                  filterData.map((item) => {
                      return <>
                         <p key={item} style={{paddingBottom:'10px',paddingTop:'10px',fontWeight: 'bold' }}>{item?.title}</p>
                         {
                          item.pages.map((submenu)=>
                          <Typography key={submenu?.name}>
                             {submenu?.name}
                          </Typography>)
                         }
                       </>
                  })
                }
              </Card>
            </Box>
          </Box>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ReportsPayrollInv sections={sections} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Custom Reports
        </CustomTabPanel>
      </Card>
    );
  }


  export default ReportTabs;