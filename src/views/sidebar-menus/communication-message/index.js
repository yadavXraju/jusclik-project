import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Avatar from '@mui/material/Avatar';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Typography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';

export default function AlignItemsList() {
  
  return (
    <MainCard title="CONTACT" sx={{fontSize:'22px', fontWeight:'bold' }} >

    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Suraj Mishra</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                Website Developer
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Abhishek Negi</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                Website Developer
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Shruti Sharma</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                All Rounder
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" />
       <ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Ruby Dhiman</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                Website Developer
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Megha</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
               Website Designer (Paratha Junction)
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Amit</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                Graphic Designer & 3D Animation Creator
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Nitika</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                Graphic Designer
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Sangeeta</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                UI Designer
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Harsh</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
               Data Scientist
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Kanika Kapoor Khan</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                Undefined
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Sahil Jain</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
               Trainee Manager
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Ashish</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
               Business Development Manager
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Rahul Sood</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
               Business Development Manager
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Gaganraj</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
               Software Engineer
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" /><ListItem >
        <ListItemAvatar>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
        </ListItemAvatar>
        <ListItemText sx={{paddingLeft:'10px' }}>
      <Typography variant='h4'>Narendra Modi</Typography>
         {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                Prime Minister
              </Typography>
            </React.Fragment>
          }
        </ListItemText>
        <ListItemDecorator>
          <MessageOutlinedIcon />
        </ListItemDecorator>
      </ListItem>
      <Divider variant="middle" component="li" />

    </List>
    </MainCard>

  );
}