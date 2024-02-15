import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

const ParentAlertData = [
  {
    id: 1,
    icon: <CurrencyRupeeOutlinedIcon />,
    title: 'Fee Payment Due',
    // if you want any type of  button then make showButton : true
    showButton: true, 
    buttonText : 'Pay',
    description: 'Fee Payment Due',
    
    // for bg color of icon
    bgColor : '#3c9f3cb5'
  },

  {
    id: 2,
    icon: <BookOutlinedIcon  />,

    title: 'New Book Issued',
    showButton: false,
    description: 'New Book Issued',
    bgColor : '#76b9ef'
  },

  {
    id: 3,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Leave Application Approved',
    showButton: false,
    description: 'Application No: 9',
    bgColor : '#5e35b1a3'
  },

  {
    id: 4,
    icon: <CurrencyRupeeOutlinedIcon />,
    title: 'Fee Payment Due',
    showButton: true,
    buttonText : 'Pay',
    description: 'Fee Payment Due',
    bgColor : '#3c9f3cb5'
  },

  {
    id: 5,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'New Book Issued',
    showButton: false,
    description: 'New Book Issued',
    bgColor : '#76b9ef'
  },

  {
    id: 6,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Leave Application Approved',
    showButton: false,
    description: 'Application No: 9',
    bgColor : '#5e35b1a3'
  },
 
];

export default ParentAlertData;
