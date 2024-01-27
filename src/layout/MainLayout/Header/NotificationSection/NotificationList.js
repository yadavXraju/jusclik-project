// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
  Divider,
  Grid,
  List,
  ListItem,
  Box,
  ListItemText,
  Button
} from '@mui/material';


// import User1 from 'assets/images/users/user-round.svg';
import AlertData from 'views/dashboard/Default/Alerts/AlertData';

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

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
  const theme = useTheme();




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
      {AlertData.map((alert,index)=>{
          return (
            <>
            <ListItemWrapper key={index}>
            <ListItem alignItems="center" sx={{gap:'10px'}}>
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

            {/* <Grid container direction="column" className="list-container">
              <Grid item xs={12} sx={{ pb: 2 }}>
              <Typography variant="caption" display="block" gutterBottom>
                     {alert.description}
                    </Typography>
              </Grid>
        
            </Grid> */}

            {alert.showButton && (
             <Grid sx={{textAlign:'right' , pt:2}}>
                <Grid container justifyContent="flex-end">
                  <Grid item xs={12}>
         
                    <Button variant="contained">{alert.buttonText}</Button>
                  </Grid>
                </Grid>
              </Grid>
              )}

            </ListItemWrapper>
             <Divider />
           </>
          )
      })}



    </List>
  );
};

export default NotificationList;
