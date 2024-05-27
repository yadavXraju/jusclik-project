import React from 'react';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CommonSettings from 'pages/Settings';
import { handleConfigure } from 'store/visitor/Visitor-management-slice';

const SettingData = [
  {
    icon: <CorporateFareRoundedIcon sx={{ color: '#838195' }} />,
    title: 'Organisation',
    items: [
      { name: 'Profile', path: '/erp/visitor/settings/profile' },
      { name: 'Branding', path: '/erp/visitor/settings/branding' },
      { name: 'Users & Roles', path: '/erp/student-info-fee/user-and-roles' },
      { name: 'Student Portal', path: '/erp/visitor/settings/student-portal' }
    ]
  },
  {
    icon: <PermDataSettingOutlinedIcon sx={{ color: '#838195' }} />,
    title: 'Configure',
    reducer:handleConfigure,
    items: [
      // { name: 'Department', path: '/erp/visitor/settings/department' },
      
      { name: 'Purpose', path: '/erp/visitor/settings/purpose/',property:0,} ,
      { name: 'To Meet', path: '/erp/visitor/settings/purpose/' ,property:1,},
      { name: 'Visitor Category', path:  '/erp/visitor/settings/purpose/',property:3  },
      { name: 'Blacklist Visitors', path:  '/erp/visitor/settings/purpose',property:2},
      { name: 'Gate Pass Series', path:  '/erp/visitor/settings/gatepass',},
      { name: 'Location', path: '/erp/visitor/settings/location' },
   
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

const SettingVisitor= () =>{

  return(
    <>
    <CommonSettings SettingData={SettingData} />
    </>
  )

}
export { SettingData, SettingVisitor as default };
