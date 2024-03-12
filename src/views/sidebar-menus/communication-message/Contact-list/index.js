import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router';
import Image1 from '../../../../assets/images/Avatar-images/IMG_01.png';
import Image2 from '../../../../assets/images/Avatar-images/IMG_02.png';
import Image3 from '../../../../assets/images/Avatar-images/IMG_03.png';
import Image4 from '../../../../assets/images/Avatar-images/IMG_04.png';
import Image5 from '../../../../assets/images/Avatar-images/IMG_05.png';


export const commonStyles = {
  bgcolor: 'background.paper',
  borderRadius: '5px',
  border: 1,
  padding: '5px',
  height: '30px'
};

export const contactData = [
  { name: 'Vikaay', role: 'Business Owner', avatar: Image2 },
  { name: 'Archana Sharma', role: 'Mathematics Teacher', avatar: Image5 },
  { name: 'Tamanna Bhatia', role: 'English Teacher', avatar: Image4 },
  { name: 'Bahadur Singh', role: 'HR Manager', avatar: Image2 },
  { name: 'Sweccha Chaudhary', role: 'Receptionist', avatar: Image5 },
  { name: 'Tarun Mishra', role: 'Lab Incharge', avatar: Image1 },
  { name: 'Anurag Singh', role: 'Accountant', avatar: Image1 },
  { name: 'Simerpreet', role: 'Wardon', avatar: Image1 },
  { name: 'Kartik Sharma', role: 'Librarian', avatar: Image2 },
  { name: 'Aruna Kaushik', role: 'Physics Teacher', avatar: Image3 },
  { name: 'Jaspreet Singh', role: 'Sports Teacher', avatar: Image1 },
  { name: 'Hariom Rai', role: 'History Teacher', avatar: Image1 },
  { name: 'Riya Singh', role: 'Economics Teacher', avatar: Image5 },
  { name: 'Asha Tiwari', role: 'Science Teacher', avatar: Image4 },
  { name: 'Supriya Sharma', role: 'HR Head', avatar: Image3 }
];

export default function AlignItemsList() {
  const navigate = useNavigate();

  const groupedContacts = groupContactsByLetter(contactData);

  function groupContactsByLetter(contacts) {
    return contacts.reduce((groupedContacts, contact) => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!groupedContacts[firstLetter]) {
        groupedContacts[firstLetter] = [];
      }
      groupedContacts[firstLetter].push(contact);
      // Sort the contacts array for each letter
      groupedContacts[firstLetter].sort((a, b) => a.name.localeCompare(b.name));
      return groupedContacts;
    }, {});
  }

  return (
    <>
      <Box sx={{ display: 'flex', height: '100%' }}>
        {/* Contact List */}
        <List sx={{ width: '100%', bgcolor: 'background.paper', paddingLeft: '10px' }}>
          {Object.entries(groupedContacts)
            .sort(([a], [b]) => a.localeCompare(b)) // Sort letters
            .map(([letter, contacts], index) => (
              <React.Fragment key={index}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '5px' }}>
                  {letter}
                </Typography>
                {contacts.map((contact, contactIndex) => (
                  <React.Fragment key={contactIndex}>
                    <ListItem>
                      <ListItemAvatar>
                        <img src={contact.avatar} style={{ width: 50, height: 50 }} alt="Avatar" />
                      </ListItemAvatar>

                      <ListItemText sx={{ paddingLeft: '10px' }}>
                        <Typography variant="h4">{contact.name}</Typography>
                        <React.Fragment>
                          <Typography sx={{ display: 'inline' }} component="span" variant="subtitle2" color="text.primary">
                            {contact.role}
                          </Typography>
                        </React.Fragment>
                      </ListItemText>
                      <ListItemDecorator>
                        <Badge badgeContent={4} color="primary">
                          <Box
                            sx={{ ...commonStyles, borderColor: 'primary.main' }}
                            onClick={() => navigate('/parent/communication/inbox')}
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
      </Box>
    </>
  );
}
