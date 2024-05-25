import React from 'react';
import ParamWidget from 'components/dashboard/Widget';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import initialData from 'views/erp-module/parent/communication-message/MailBox/InboxNameList';
import AvatarImg from 'assets/images/Avatar-images/avatar.png';
import { Box } from '@mui/material';

// store a first data from initialData in this var

const recentData =  initialData[0]

export const ClassTeacherAlertData = [
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
    showButton: 'true',
    buttonText : 'View',
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


const ClassTeacherAlert = () => {
  return (
    <>
    
    <Box sx={{
      '& .css-16ti1tk-MuiButtonBase-root-MuiButton-root': {
        fontSize: {
          xs: '10px',
          sm: '12px',
          md: '14px'
        }
      }
    }}>
      <ParamWidget
       HeadingTitle='Alerts' 
       Data={ClassTeacherAlertData}
       icon={true}
       button={true}/>
    </Box>

    </>
  )
}

export default ClassTeacherAlert