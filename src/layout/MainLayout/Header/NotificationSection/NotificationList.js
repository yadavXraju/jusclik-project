import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Divider, Grid, List, ListItem, Box, ListItemText, Button } from '@mui/material';

// Import alert data with different names
import ParentAlertData from 'views/dashboard/Default/Alerts/AlertData';
import ClassTeacherAlertData from 'views/class-teacher-dashboard/Alerts/AlertData';
import SubjectTeacherAlertData from 'views/subject-teacher-dashboard/alerts/AlertData';

// styles
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

const NotificationList = () => {
  const location = useLocation();
  const [alertData, setAlertData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const { pathname } = location;
    let data;

    if (pathname.includes('/parent/dashboard')) {
      data = ParentAlertData;
    } else if (pathname.includes('/class-teacher/dashboard')) {
      data = ClassTeacherAlertData;
    } else if (pathname.includes('/subject-teacher/dashboard')) {
      data = SubjectTeacherAlertData;
    } else {
      data = [];
    }

    setAlertData(data);
  }, [location]);

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 330,
        py: 0,
        borderRadius: '10px',
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
      {alertData.map((alert, index) => (
        <React.Fragment key={index}>
          <ListItemWrapper>
            <ListItem alignItems="center" sx={{ gap: '10px' }}>
              <Box sx={{
                backgroundColor: alert.bgColor,
                padding: '6px',
                borderRadius: '50%',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
              }}>
                {alert.icon}
              </Box>

              <Grid>
                <ListItemText primary={alert.title} />
                <ListItemText secondary={alert.description} />
              </Grid>
            </ListItem>

            {alert.showButton && (
              <Grid sx={{ textAlign: 'right', pt: 2 }}>
                <Grid container justifyContent="flex-end">
                  <Grid item xs={12}>
                    <Button variant="contained">{alert.buttonText}</Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </ListItemWrapper>
          <Divider key={`divider-${index}`} />
        </React.Fragment>
      ))}
    </List>
  );
};

export default NotificationList;
