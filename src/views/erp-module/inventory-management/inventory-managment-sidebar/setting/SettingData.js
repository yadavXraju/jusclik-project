import React from 'react';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
// import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const SettingData = [
    {
      icon: <CorporateFareRoundedIcon sx={{ color: '#838195' }} />,
      title: 'Organisation',
      items: ['Profile', 'Branding',' Inventory Groups' ,'Users & Roles' ]
    },
    {
      icon: <SmsOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Taxes & Compliance Taxes',
      items: ['Sales', 'Invoice', 'Delivery Challans', 'Credit Note']
    },
    {
      icon: <PeopleAltOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Preference',
      items: ['General', 'Transaction Number Series']
    },
    {
      icon: <AddShoppingCartOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Item',
      items: ['Item']
    },
    {
      icon: <FolderOpenOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Purchase',
      items: ['Purchase Order']
    },
    {
      icon: <CreditCardOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Online Payments',
      items: ['Payment Gateway']
    },
    {
      icon: <WebhookRoundedIcon sx={{ color: '#838195' }} />,
      title: 'Developer Space',
      items: ['Data Backup']
    },
    {
      icon: <TuneOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Integrations',
      items: ['']
    }
  ];

  export default SettingData;