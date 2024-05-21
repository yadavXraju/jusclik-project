// Page Owner Abhishek
// Description : Parent Dashboard And Teacher Dashboard icon and name 

import React from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, Box, ListItemText, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import { DashboardList } from './DashboardList';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { handleErpModule } from 'store/layout/erp-module-slice';
import parent from 'assets/images/dashboard-icon/parent-dashboard.svg';
import teacher from 'assets/images/dashboard-icon/teacher-dashboard.svg';

const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
  '&:hover': {
    background: theme.palette.primary.light
  },
  '& .MuiListItem-root': {
    padding: 0
  }
}));

export const DashboardList = [

    {
        id:1,
        name:'Parent',
        icon :  <img src={parent} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/parent/dashboard',
        role : 'parent',
    },

    {
        id:2,
        name:'Teacher',
        icon :  <img src={teacher} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/class-teacher/dashboard',
        role : 'class-teacher',
    },

]

const DashboardSwitchLayout = ({ setOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (url, role) => {
    localStorage.setItem('userRole', role);
    navigate(url);
    setOpen(false); // Close the Popper
    dispatch(handleErpModule({url ,role }))
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 350,
        py: 0,
        borderRadius: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
          maxWidth: 300
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 22
        },
        '& .MuiDivider-root': {
          my: 0
        },
        '& .list-container': {
          pl: 7
        }
      }}
    >
      {DashboardList.map((item, index) => (
        <React.Fragment key={index}>
          <ListItemWrapper sx={{ flex: '0 0 100%', borderBottom: '1px solid #8080801c', display: 'flex', alignItems: 'center' }}>
            <ListItem alignItems="center" sx={{ gap: '10px', flexDirection: 'column' }} onClick={() => handleClick(item.url, item.role)}>
              <Box sx={{
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'left',
                color: 'rgb(30, 136, 229)',
                flexDirection: 'column',
                textAlign: 'center',
              }}>
                {item.icon}
                <ListItemText primary={item.name} />
              </Box>
            </ListItem>
          </ListItemWrapper>
          <Divider key={`divider-${index}`} />
        </React.Fragment>
      ))}
    </List>
  );
};

export default DashboardSwitchLayout;