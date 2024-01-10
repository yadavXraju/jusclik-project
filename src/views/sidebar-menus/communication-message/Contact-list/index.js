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
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';

const commonStyles = {
  bgcolor: 'background.paper',
  borderRadius: '5px',
  border: 1,
  padding: '5px',
  height: '30px',
};

const contactData = [
  { name: 'Suraj Mishra', role: 'Website Developer' },
  { name: 'Abhishek Negi', role: 'Website Developer' },
  { name: 'Shruti Sharma', role: 'Gamer' },
  { name: 'Ruby Dhiman', role: 'Website Developer' },
  { name: 'Megha', role: 'Website Designer (Paratha Junction)' },
  { name: 'Amit', role: 'Graphic Designer & 3D Animation Creator' },
  { name: 'Nitika', role: 'Graphic Designer' },
  { name: 'Sangeeta', role: 'UI Designer' },
  { name: 'Harsh', role: 'Data Scientist' },
  { name: 'Kanika Kapoor Khan', role: 'Undefined' },
  { name: 'Sahil Jain', role: 'Trainee Manager' },
  { name: 'Ashish', role: 'Business Development Manager' },
  { name: 'Rahul Sood', role: 'Business Development Manager' },
  { name: 'Gaganraj', role: 'Software Engineer' },
  { name: 'Narendra Modi', role: 'Prime Minister' },
];

export default function AlignItemsList() {
  
  return (
    <MainCard title="CONTACT" sx={{ fontSize: '22px', fontWeight: 'bold' }}>
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
              <ListItemDecorator>
                <Badge badgeContent={4} color="primary">
                  <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
                    <MessageOutlinedIcon color="primary" fontSize="small" />
                  </Box>
                </Badge>
              </ListItemDecorator>
            </ListItem>
            {index < contactData.length - 1 && <Divider variant="middle" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </MainCard>
  );
}
