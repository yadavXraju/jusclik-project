import React from 'react';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ParamSetting from 'pages/Settings';
import { handleConfigure } from 'store/crm/settings/SystemTap-slice';


const SettingData = [
  {
    icon: <CorporateFareRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Organisation',
    items: [
      { name: 'Profile', path: '/erp/hr-payroll/settings/profile' },
      { name: 'Branding', path: '/erp/hr-payroll/settings/branding' },
      { name: 'Users & Roles', path: '/erp/hr-payroll/settings/users-roles' },
      { name: 'Student Portal', path: '/erp/hr-payroll/settings/student-portal' }
    ]
  },
  {
    icon: <SmsOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Communication Templates',
    items: [
      { name: 'SMS', path: '/erp/hr-payroll/settings/sms' },
      { name: 'E-mail', path: '/erp/hr-payroll/settings/email' },
      { name: 'Notification', path: '/erp/hr-payroll/settings/notification' },
      { name: 'WhatsApp', path: '/erp/hr-payroll/settings/whatsapp' }
    ]
  },
  {
    icon: <PeopleAltOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Employee',
    items: [
      { name: 'Class Promotion', path: '/erp/hr-payroll/settings/class-promotion' },
      { name: 'Section Shuffling', path: '/erp/hr-payroll/settings/section-shuffling' },
      { name: 'House Shuffling', path: '/erp/hr-payroll/settings/house-shuffling' }
    ]
  },
  {
    icon: <CreditCardOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Salary',
    items: [
      // { name: 'Fee Heads', path: '/erp/hr-payroll/settings/system-data' },
      // { name: 'Fee Structure', path: '/erp/hr-payroll/settings/fee-structure' },
      // { name: 'Concession', path: '/erp/hr-payroll/settings/concession' },
      // { name: 'Discount', path: '/erp/hr-payroll/settings/discount' },
      // { name: 'Fee Account', path: '/erp/hr-payroll/settings/fee-account' },
      { name: 'Invoice', path: '/erp/hr-payroll/settings/invoice-template' }
    ]
  },
  {
    icon: <FolderOpenOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Employee Records',
    items: [
      { name: 'Tuition Fee Certificate', path: '/erp/hr-payroll/settings/tuition-fee-certificate' },
      { name: 'School Learning Certificate', path: '/erp/hr-payroll/settings/school-learning-certificate' },
      { name: 'Gate Pass', path: '/erp/hr-payroll/settings/gate-pass' },
      { name: 'Identity Card', path: '/erp/hr-payroll/settings/identity-card' },
      { name: 'Withdrawal Checklist', path: '/erp/hr-payroll/settings/withdrawal-checklist' }
    ]
  },
  {
    icon: <FolderOpenOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Biometric ',
    items: [
      // { name: 'Tuition Fee Certificate', path: '/erp/hr-payroll/settings/tuition-fee-certificate' },
      // { name: 'School Learning Certificate', path: '/erp/hr-payroll/settings/school-learning-certificate' },
      // { name: 'Gate Pass', path: '/erp/hr-payroll/settings/gate-pass' },
      // { name: 'Identity Card', path: '/erp/hr-payroll/settings/identity-card' },
      // { name: 'Withdrawal Checklist', path: '/erp/hr-payroll/settings/withdrawal-checklist' }
    ]
  },
  {
    icon: <FolderOpenOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Income Tax ',
    items: [
      // { name: 'Tuition Fee Certificate', path: '/erp/hr-payroll/settings/tuition-fee-certificate' },
      // { name: 'School Learning Certificate', path: '/erp/hr-payroll/settings/school-learning-certificate' },
      // { name: 'Gate Pass', path: '/erp/hr-payroll/settings/gate-pass' },
      // { name: 'Identity Card', path: '/erp/hr-payroll/settings/identity-card' },
      // { name: 'Withdrawal Checklist', path: '/erp/hr-payroll/settings/withdrawal-checklist' }
    ]
  },
  {
    icon: <FolderOpenOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Leave',
    items: [
      // { name: 'Tuition Fee Certificate', path: '/erp/hr-payroll/settings/tuition-fee-certificate' },
      // { name: 'School Learning Certificate', path: '/erp/hr-payroll/settings/school-learning-certificate' },
      // { name: 'Gate Pass', path: '/erp/hr-payroll/settings/gate-pass' },
      // { name: 'Identity Card', path: '/erp/hr-payroll/settings/identity-card' },
      // { name: 'Withdrawal Checklist', path: '/erp/hr-payroll/settings/withdrawal-checklist' }
    ]
  },
  {
    icon: <PermDataSettingOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Configure',
    reducer:handleConfigure,
    items: [
      // { name: 'Blacklist Visitors', path: '/erp/hr-payroll/settings/blacklist-visitors' },
      { name: 'Admission Number Series', path: '/erp/hr-payroll/settings/admission-number-series' },
    //   { name: 'Lead Stage', path: '/erp/hr-payroll/settings/lead-stage' },
    //   { name: 'Lead Score', path: '/erp/hr-payroll/settings/lead-score' },
    //   { name: 'Lead Owner', path: '/erp/hr-payroll/settings/system-data-enter',property:0 },
    //   { name: 'Lead Source', path: '/erp/hr-payroll/settings/system-data-enter',property:2 },
    //   { name: 'Lead Classification', path: '/erp/hr-payroll/settings/system-data-enter',property:1 },
      { name: 'Employee On Boarding', path: '/erp/hr-payroll/settings/employee-on-boarding',property:1 },
      { name: 'On Boarding Task List', path: '/erp/hr-payroll/settings/on-boarding-task-list'}
    ]
  }, 
  {
    icon: <TuneOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Integrations',
    items: [
      { name: 'Zoom', path: '/erp/hr-payroll/settings/zoom' },
      { name: 'Google Meet', path: '/erp/hr-payroll/settings/google-meet' },
      { name: 'WhatsApp', path: '/erp/hr-payroll/settings/whatsapp-integration' },
      { name: 'Payment Gateways', path: '/erp/hr-payroll/settings/payment-gateways' }
    ]
  },
  {
    icon: <WebhookRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Developer Space',
    items: [
      { name: 'Data Backup', path: '/erp/hr-payroll/settings/data-backup' }
    ]
  }
];

const SettingDataCrm= () =>{
  return(
    <>
    <ParamSetting SettingData={SettingData} />
    </>
  )
}

export { SettingData, SettingDataCrm as default };
