import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Avatar from '@mui/material/Avatar';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Typography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { contactData } from 'views/sidebar-menus/communication-message/Contact-list';
import { commonStyles } from 'views/sidebar-menus/communication-message/Contact-list';
import { useNavigate } from 'react-router';
import {  Grid } from '@mui/material';
import { HeadingCss , boxHeight} from './dashboard-css/CommonCss';


const CommunicationHomeComp = () => {
  
// const contactListToShow = 4
const navigate = useNavigate();
  return (
    <>
     <MainCard  sx={{ fontSize: '22px', fontWeight: 'bold' }} style={boxHeight} className='scrollbar'>
        <Grid item>
            <Typography variant="h2" style={HeadingCss}>
                    communication
              </Typography>
        </Grid>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {contactData.map((contact, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} />
              </ListItemAvatar>
              <ListItemText sx={{ paddingLeft: '10px' }}>
                <Typography variant="h4">{contact.name}</Typography>
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="subtitle2"
                    color="text.primary"
                  >
                    {contact.role}
                  </Typography>
                </React.Fragment>
              </ListItemText>
              <ListItemDecorator sx={{cursor:'pointer'}}>
                <Badge badgeContent={4} color="primary">
                  <Box sx={{ ...commonStyles, borderColor: 'primary.main' }} onClick={()=>navigate('/communication/inbox')}>
                    <MailOutlinedIcon color="primary" fontSize="small" />
                  </Box>
                </Badge>
              </ListItemDecorator>
            </ListItem>
            {index < contactData.length - 1 && <Divider variant="middle" component="li" />}
          </React.Fragment>
        ))}

        {/* <Box sx={{ pt: 3 , textAlign:'right'}}>
            <Button variant="contained" onClick={() => navigate('/communication/contact-list')}>
              View More
            </Button>
        </Box> */}
      </List>
    </MainCard>

    </>
  );
};

export default CommunicationHomeComp;
