import React from 'react';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ParamSetting from 'views/erp-common-component/commonSetting';

const SettingData = [
  {
    icon: <CorporateFareRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Organisation',
    items: [
      { name: 'Profile', path: '/erp/student-info-fee/settings/profile' },
      { name: 'Branding', path: '/erp/student-info-fee/settings/branding' },
      { name: 'Users & Roles', path: '/erp/student-info-fee/settings/users-roles' },
      { name: 'Student Portal', path: '/erp/student-info-fee/settings/student-portal' }
    ]
  },
  {
    icon: <SmsOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Communication Templates',
    items: [
      { name: 'SMS', path: '/erp/student-info-fee/settings/sms' },
      { name: 'E-mail', path: '/erp/student-info-fee/settings/email' },
      { name: 'Notification', path: '/erp/student-info-fee/settings/notification' },
      { name: 'WhatsApp', path: '/erp/student-info-fee/settings/whatsapp' }
    ]
  },
  {
    icon: <PeopleAltOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Students',
    items: [
      { name: 'Class Promotion', path: '/erp/student-info-fee/settings/class-promotion' },
      { name: 'Section Shuffling', path: '/erp/student-info-fee/settings/section-shuffling' },
      { name: 'House Shuffling', path: '/erp/student-info-fee/settings/house-shuffling' }
    ]
  },
  {
    icon: <CreditCardOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Fee',
    items: [
      { name: 'Fee Heads', path: '/erp/student-info-fee/settings/system-data' },
      { name: 'Fee Structure', path: '/erp/student-info-fee/settings/fee-structure' },
      { name: 'Concession', path: '/erp/student-info-fee/settings/concession' },
      { name: 'Discount', path: '/erp/student-info-fee/settings/discount' },
      { name: 'Fee Account', path: '/erp/student-info-fee/settings/fee-account' },
      { name: 'Invoice', path: '/erp/student-info-fee/settings/invoice-template' }
    ]
  },
  {
    icon: <FolderOpenOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Student Records',
    items: [
      { name: 'Tuition Fee Certificate', path: '/erp/student-info-fee/settings/tuition-fee-certificate' },
      { name: 'School Learning Certificate', path: '/erp/student-info-fee/settings/school-learning-certificate' },
      { name: 'Gate Pass', path: '/erp/student-info-fee/settings/gate-pass' },
      { name: 'Identity Card', path: '/erp/student-info-fee/settings/identity-card' },
      { name: 'Withdrawal Checklist', path: '/erp/student-info-fee/settings/withdrawal-checklist' }
    ]
  },
  {
    icon: <PermDataSettingOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Configure',
    items: [
      // { name: 'Blacklist Visitors', path: '/erp/student-info-fee/settings/blacklist-visitors' },
      { name: 'Admission Number Series', path: '/erp/student-info-fee/settings/admission-number-series' },
      { name: 'Lead Stage', path: '/erp/student-info-fee/settings/lead-stage' },
      { name: 'Lead Score', path: '/erp/student-info-fee/settings/lead-score' }
    ]
  }, 
  {
    icon: <TuneOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Integrations',
    items: [
      { name: 'Zoom', path: '/erp/student-info-fee/settings/zoom' },
      { name: 'Google Meet', path: '/erp/student-info-fee/settings/google-meet' },
      { name: 'WhatsApp', path: '/erp/student-info-fee/settings/whatsapp-integration' },
      { name: 'Payment Gateways', path: '/erp/student-info-fee/settings/payment-gateways' }
    ]
  },
  {
    icon: <WebhookRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Developer Space',
    items: [
      { name: 'Data Backup', path: '/erp/student-info-fee/settings/data-backup' }
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
