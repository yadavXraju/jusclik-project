// You can add more label in the tab here 
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import StartTwoToneIcon from '@mui/icons-material/StartTwoTone';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';

export const TabItem = [
    {
        id: 1,
        label: 'Dashboard',
        value: '1',
        icon: <HomeTwoToneIcon />
    },
    {
        id: 2,
        label: 'Getting Started',
        value: '2',
        icon: <StartTwoToneIcon  /> // Include your icon component here
    },
    {
        id: 3,
        label: 'Recent Updates',
        value: '3',
        icon: <NotificationsTwoToneIcon  /> // Include your icon component here
    }
];
