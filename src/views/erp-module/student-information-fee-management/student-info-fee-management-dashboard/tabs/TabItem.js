// You can add more label in the tab here 
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';

export const TabItem = [
    {
        id: 1,
        label: 'Dashboard',
        value: '1',
        icon: <HomeTwoToneIcon sx={{mb:'0 !important'}} />
    },
    {
        id: 2,
        label: 'Getting Started',
        value: '2',
        icon: <SettingsSuggestTwoToneIcon sx={{mb:'0 !important'}}  /> // Include your icon component here
    },
    {
        id: 3,
        label: 'Recent Updates',
        value: '3',
        icon: <NotificationsActiveTwoToneIcon sx={{mb:'0 !important'}}  /> // Include your icon component here
    }
];
