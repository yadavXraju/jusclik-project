import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export const SettingData = [
    {
      icon: <CorporateFareRoundedIcon sx={{ color: '#838195' }} />,
      title: 'Organisation',
      items: [
        { name: 'Profile', path: '/organisation/profile' },
        { name: 'Branding', path: '/organisation/branding' },
        { name: 'Inventory Groups', path: '/organisation/inventory-groups' },
        { name: 'Users & Roles', path: '/organisation/users-roles' }
      ]
    },
    {
      icon: <SmsOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Taxes & Compliance Taxes',
      items: [
        { name: 'Sales', path: '/taxes/sales' },
        { name: 'Invoice', path: '/taxes/invoice' },
        { name: 'Delivery Challans', path: '/taxes/delivery-challans' },
        { name: 'Credit Note', path: '/taxes/credit-note' }
      ]
    },
    {
      icon: <PeopleAltOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Preference',
      items: [
        { name: 'General', path: '/preference/general' },
        { name: 'Transaction Number Series', path: '/preference/transaction-number-series' }
      ]
    },
    {
      icon: <AddShoppingCartOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Item',
      items: [
        { name: 'Item', path: '/item' }
      ]
    },
    {
      icon: <FolderOpenOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Purchase',
      items: [
        { name: 'Purchase Order', path: '/purchase-order' }
      ]
    },
    {
      icon: <CreditCardOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Online Payments',
      items: [
        { name: 'Payment Gateway', path: '/payments-gateway' }
      ]
    },
    {
      icon: <WebhookRoundedIcon sx={{ color: '#838195' }} />,
      title: 'Developer Space',
      items: [
        { name: 'Data Backup', path: '/developer/data-backup' }
      ]
    },
    {
      icon: <TuneOutlinedIcon sx={{ color: '#838195' }} />,
      title: 'Integrations',
      items: [
        { name: 'Integration', path: '/integrations' }
      ]
    }
  ];
  