// You can add more label in the tab here 
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StartTwoToneIcon from '@mui/icons-material/StartTwoTone';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export const TabItem = [
    {
        id: 1,
        label: 'Dashboard',
        value: '1',
        icon: <HomeOutlinedIcon sx={{mb:0}} />
    },
    {
        id: 2,
        label: 'Getting Started',
        value: '2',
        icon: <StartTwoToneIcon sx={{mb:0}}  /> // Include your icon component here
    },
    {
        id: 3,
        label: 'Recent Updates',
        value: '3',
        icon: <NotificationsNoneOutlinedIcon sx={{mb:0}}  /> // Include your icon component here
    }
];
