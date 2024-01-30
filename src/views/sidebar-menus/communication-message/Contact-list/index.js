import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Avatar from '@mui/material/Avatar';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router';
import UrlPage from 'views/navigation-for-pages';

export const commonStyles = {
  bgcolor: 'background.paper',
  borderRadius: '5px',
  border: 1,
  padding: '5px',
  height: '30px',
};

export const contactData = [
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
  const navigate = useNavigate();
  const [selectedLetter, setSelectedLetter] = useState('');

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const alphabetLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const groupedContacts = groupContactsByLetter(contactData);

  function groupContactsByLetter(contacts) {
    return contacts.reduce((groupedContacts, contact) => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!groupedContacts[firstLetter]) {
        groupedContacts[firstLetter] = [];
      }
      groupedContacts[firstLetter].push(contact);
      return groupedContacts;
    }, {});
  }

  return (
    <>
      <UrlPage />
      <Box sx={{ display: 'flex', height: '100%' }}>
                {/* Contact List */}
        <List sx={{ width: '98%', bgcolor: 'background.paper', flexGrow: 1, overflowY: 'auto' }}>
          {Object.entries(groupedContacts).map(([letter, contacts], index) => (
            <React.Fragment key={index}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '5px' }}>
                {letter}
              </Typography>
              {contacts.map((contact, contactIndex) => (
                <React.Fragment key={contactIndex}>
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
                      <Badge
                        badgeContent={4}
                        color="primary"
                      >
                        <Box
                          sx={{ ...commonStyles, borderColor: 'primary.main' }}
                          onClick={() => navigate('/communication/inbox')}
                        >
                          <MailOutlinedIcon color="primary" fontSize="small" />
                        </Box>
                      </Badge>
                    </ListItemDecorator>
                  </ListItem>
                  {contactIndex < contacts.length - 1 && <Divider variant="middle" component="li" />}
                </React.Fragment>
              ))}
              {index < Object.entries(groupedContacts).length - 1 && <Divider variant="middle" />}
            </React.Fragment>
          ))}
        </List>
        {/* Alphabetical Filter */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
          {Array.from(alphabetLetters).map((letter) => (
            <Typography
              key={letter}
              variant="body2"
              sx={{
                cursor: 'pointer',
                fontWeight: selectedLetter === letter ? 'bold' : 'normal',
                marginBottom: '5px',
              }}
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
}
