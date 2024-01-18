import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

const AlertData = [
  {
    id: 1,
    icon: <CurrencyRupeeOutlinedIcon />,
    title: 'Fee Payment Due',
    showButton: true,  // optional
    buttonText : 'Pay',
    description: 'Fee Payment Due',
    uploadedTime:'17-Jan-24  - 10:15 AM',
  },

  {
    id: 2,
    icon: <BookOutlinedIcon  />,

    title: 'New Book Issued',
    showButton: false,
    description: 'New Book Issued',
    uploadedTime: '13-Jan-2024 - 05:55 PM',
  },

  {
    id: 3,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Leave Application Approved',
    showButton: false,
    description: 'Application No: 9',
    uploadedTime: '17-Aug-2023 01:34 PM',
  },

  {
    id: 4,
    icon: <CurrencyRupeeOutlinedIcon />,
    title: 'Fee Payment Due',
    showButton: true,
    buttonText : 'Pay',
    description: 'Fee Payment Due',
    uploadedTime:'17-Jan-24  - 10:15 AM',
  },

  {
    id: 5,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'New Book Issued',
    showButton: false,
    description: 'New Book Issued',
    uploadedTime: '13-Jan-2024 - 05:55 PM',
  },

  {
    id: 6,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Leave Application Approved',
    showButton: false,
    description: 'Application No: 9',
    uploadedTime: '17-Aug-2023 01:34 PM',
  },
 
];

export default AlertData;
