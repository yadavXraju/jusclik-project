import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

export const sections = [
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
  