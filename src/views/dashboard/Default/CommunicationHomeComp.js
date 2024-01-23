import * as React from 'react';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import MainCard from 'ui-component/cards/MainCard';
import { contactData } from 'views/sidebar-menus/communication-message/Contact-list';
import { commonStyles } from 'views/sidebar-menus/communication-message/Contact-list';
import { useNavigate } from 'react-router';
import { HeadingCss , boxHeight , subTitle , subtitle2} from './dashboard-css/CommonCss';
import {
  useMediaQuery , 
  List ,
  ListItem ,
  ListItemText , 
  ListItemAvatar ,
  Avatar , 
  Typography , 
  Box ,
  Badge ,
  Grid 
} from '@mui/material';





const CommunicationHomeComp = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
// const contactListToShow = 4
const navigate = useNavigate();
  return (
    <>
     <MainCard  sx={{ fontSize: '22px', fontWeight: 'bold' , paddingLeft: isMobile ? '10px' : 'auto' }} style={boxHeight} className='scrollbar'>
        <Grid item>
            <Typography variant="h2" style={HeadingCss}>
                    communication
              </Typography>
        </Grid>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {contactData.map((contact, index) => (
          <React.Fragment key={index}>
            <ListItem sx={{borderBottom:'1px solid #80808024' , paddingLeft: isMobile ? '0px' : 'auto' }}>
              <ListItemAvatar>
                <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} />
              </ListItemAvatar>
              <ListItemText sx={{ paddingLeft: '10px' }}>
                <Typography variant="h4" style={subTitle}>{contact.name}</Typography>
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="subtitle2"
                   style={subtitle2}
                  >

                    {contact.role}
                  </Typography>
                </React.Fragment>
              </ListItemText>
              <ListItemDecorator sx={{cursor:'pointer'}}>
                <Badge badgeContent={4} color="primary">
                  <Box sx={{ ...commonStyles, borderColor: 'primary.main'  }} onClick={()=>navigate('/communication/inbox')}>
                    <MailOutlinedIcon color="primary" fontSize="small" />
                  </Box>
                </Badge>
              </ListItemDecorator>
            </ListItem>
            {/* {index < contactData.length - 1 && <Divider variant="middle" component="li" />} */}
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
