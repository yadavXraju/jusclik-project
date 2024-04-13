import React from 'react';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ParamSetting from 'views/erp-common-component/commonSetting';

export const SettingData = [
  {
    icon: <CorporateFareRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Organisation',
    items: [
      { name: 'Profile', path: '/profile' },
      { name: 'Branding', path: '/branding' },
      { name: 'Users & Roles', path: '/users-roles' },
      { name: 'Student Portal', path: '/student-portal' }
    ]
  },
  {
    icon: <SmsOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Communication Templates',
    items: [
      { name: 'SMS', path: '/sms' },
      { name: 'E-mail', path: '/email' },
      { name: 'Notification', path: '/notification' },
      { name: 'WhatsApp', path: '/whatsapp' }
    ]
  },
  {
    icon: <PeopleAltOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Students',
    items: [
      { name: 'Class Promotion', path: '/class-promotion' },
      { name: 'Section Shuffling', path: '/section-shuffling' },
      { name: 'House Shuffling', path: '/house-shuffling' }
    ]
  },
  {
    icon: <CreditCardOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Fee',
    items: [
      { name: 'Fee Heads', path: '/fee-heads' },
      { name: 'Fee Structure', path: '/erp/student-info-fee/settings/system-data' },
      { name: 'Concession', path: '/concession' },
      { name: 'Discount', path: '/discount' },
      { name: 'Fee Account', path: '/fee-account' },
      { name: 'Invoice', path: '/erp/student-info-fee/settings/daman' }
    ]
  },
  {
    icon: <FolderOpenOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Student Records',
    items: [
      { name: 'Tuition Fee Certificate', path: '/tuition-fee-certificate' },
      { name: 'School Learning Certificate', path: '/school-learning-certificate' },
      { name: 'Gate Pass', path: '/gate-pass' },
      { name: 'Identity Card', path: '/identity-card' }
    ]
  },
  {
    icon: <TipsAndUpdatesRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Customisation',
    items: [
      { name: 'Reporting Tags', path: '/reporting-tags' },
      { name: 'Transaction Number Series', path: '/transaction-number-series' }
    ]
  },
  {
    icon: <TuneOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Integrations',
    items: [
      { name: 'Zoom', path: '/zoom' },
      { name: 'Google Meet', path: '/google-meet' },
      { name: 'WhatsApp', path: '/whatsapp-integration' },
      { name: 'Payment Gateways', path: '/payment-gateways' }
    ]
  },
  {
    icon: <WebhookRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Developer Space',
    items: [
      { name: 'Data Backup', path: '/data-backup' }
    ]
  }
];

const Organisation= () =>{
  return(
    <>
    <ParamSetting SettingData={SettingData} />
    </>
  )
}

export default Organisation;
