import React from 'react';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


const SettingData = [
    {
      icon: <CorporateFareRoundedIcon sx={{ color: '#838195' }} />,
      title: 'Organisation',
      items: ['Profile', 'Branding', 'Users & Roles', 'Student Portal']
    },
    {
      icon: <SmsOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Communication Templates',
      items: ['SMS', 'E-mail', 'Notification', 'WhatsApp']
    },
    {
      icon: <PeopleAltOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Students',
      items: ['Class Promotion', 'Section Shuffling', 'House Shuffling']
    },
    {
      icon: <CreditCardOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Fee',
      items: ['Fee Heads', 'Fee Structure', 'Concession', 'Discount', 'Fee Account', 'Invoice']
    },
    {
      icon: <TipsAndUpdatesRoundedIcon sx={{ color: '#838195' }} />,
      title: 'Customisation',
      items: ['Reporting Tags', 'Transaction Number Series']
    },
    {
      icon: <TuneOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Integrations',
      items: ['Zoom', 'Google Meet', 'WhatsApp', 'Payment Gateways']
    },
    {
      icon: <WebhookRoundedIcon sx={{ color: '#838195' }} />,
      title: 'Developer Space',
      items: ['Data Backup']
    }
  ];

  export default SettingData;