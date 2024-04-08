import React from 'react';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


const SettingData = [
  {
    icon: <CorporateFareRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Organisation',
    items: [
      { name: 'Profile', path: '/erp/visitor/settings/profile' },
      { name: 'Branding', path: '/erp/visitor/settings/branding' },
      { name: 'Users & Roles', path: '/erp/visitor/settings/users-roles' },
      { name: 'Student Portal', path: '/erp/visitor/settings/student-portal' }
    ]
  },
  {
    icon: <PermDataSettingOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Configure',
    items: [
      { name: 'Department', path: '/erp/visitor/settings/department' },
      { name: 'Blacklist Visitors', path: '/erp/visitor/settings/blacklist-visitors' },
      { name: 'Purpose', path: '/erp/visitor/settings/purpose' },
      { name: 'Host', path: '/erp/visitor/settings/host' },
      { name: 'Visitor Category', path: '/erp/visitor/settings/visitor-category' },
      { name: 'Location', path: '/erp/visitor/settings/location' }
    ]
  },
  {
    icon: <SmsOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Communication Templates',
    items: [
      { name: 'SMS', path: '/erp/visitor/settings/sms' },
      { name: 'E-mail', path: '/erp/visitor/settings/email' },
      { name: 'Notification', path: '/erp/visitor/settings/notification' },
      { name: 'WhatsApp', path: '/erp/visitor/settings/whatsapp' }
    ]
  },
 
  {
    icon: <DashboardCustomizeOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Customisation',
    items: [
      { name: 'Entry Form', path: '/erp/visitor/settings/entry-form' },
      { name: 'Satisfactory/Feedback Form', path: '/erp/visitor/settings/satisfactory/feedback-form' },
      { name: 'Gate Pass', path: '/erp/visitor/settings/gate-pass' },
      
    ]
  },
  {
    icon: <TuneOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Integrations',
    items: [
      { name: 'WhatsApp', path: '/erp/visitor/settings/whatsapp-integration' },
    ]
  },
  {
    icon: <WebhookRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Developer Space',
    items: [
      { name: 'Data Backup', path: '/erp/visitor/settings/data-backup' }
    ]
  }
];

export default SettingData;