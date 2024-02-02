import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
// import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { initialData } from 'views/sidebar-menus/communication-message/MailBox';
import AvatarImg from '../../../assets/images/avatar.png'


// store a first data from initialData in this var

const recentData =  initialData[0]

const AlertData = [
  {
    id: 1,
    icon: <img src={AvatarImg} alt="avatar" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />,
    redirect : '/communication/inbox/message',
    title: recentData.name,
    showButton: true, 
    buttonText: 'Reply',
    description: recentData.message,
    bgColor: 'rgb(79 146 255)',
  },
  {
    id: 2,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Leave Application Approved',
    description: 'Application No: 9',
    bgColor : '#5e35b1a3',
    showButton: true,
    buttonText: 'View',
  },

  {
    id: 3,
    icon: <NotificationsNoneOutlinedIcon />,

    title: 'Latest Update',
    description: 'Latest Update',
    bgColor : '#5e35b1a3',
    showButton: true,
    buttonText: 'View',
  },



  {
    id: 4,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Request',
    showButton: 'View',
    buttonText : 'true',
    description: 'Request',
    bgColor : '#5e35b1a3',
  },

  {
    id: 5,
    icon: <img src={AvatarImg} alt="avatar" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />,
    redirect : 'communication/inbox/message',
    title: recentData.name,
    showButton: true, 
    buttonText: 'Reply',
    description: recentData.message,
    bgColor: 'rgb(79 146 255)',
  },
  {
    id: 6,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Leave Application Approved',
    description: 'Application No: 9',
    bgColor : '#5e35b1a3',
    showButton: true,
    buttonText: 'View',
  },

  {
    id: 7,
    icon: <NotificationsNoneOutlinedIcon />,

    title: 'Latest Update',
    description: 'Latest Update',
    bgColor : '#5e35b1a3',
    showButton: true,
    buttonText: 'View',
  },



  {
    id: 8,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Request',
    showButton: 'View',
    buttonText : 'true',
    description: 'Request',
    bgColor : '#5e35b1a3',
  },

 
];

export default AlertData;
