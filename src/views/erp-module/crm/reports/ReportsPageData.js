import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';

export const sections = [
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
  