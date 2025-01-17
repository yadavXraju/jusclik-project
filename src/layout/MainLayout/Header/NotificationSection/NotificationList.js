// Page Owner Abhishek
// Description : Notification List 

import React from 'react';
import { useEffect, useState } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Divider, Grid, List, ListItem, Box, ListItemText, Button } from '@mui/material';
import { useSelector } from 'react-redux';
// Import alert data with different names
import { ParentAlertData } from 'views/erp-module/parent/dashboard';
import { ClassTeacherAlertData } from 'views/erp-module/teacher/class-teacher/dashboard/Alert';

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
  const [alertData, setAlertData] = useState([]);
  const theme = useTheme();
  const {erpModule} = useSelector((state) =>  state.erpModuleSlice);
 
  useEffect(() => {
    let data;
    if (erpModule.role == 'parent') {
      data = ParentAlertData;
    } else if (erpModule.role == 'class-teacher') {
      data = ClassTeacherAlertData;
    }
     else {
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
