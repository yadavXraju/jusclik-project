import React from 'react';
import { Typography, Chip, List, ListItem, ListItemText, Divider } from '@mui/material';

const NewArrival = () => {
  // Dummy data for dynamic rendering
  const stories = [
    { title: 'Jane Eyre', author: ' Charlotte Brontë', status: 'Available' },
    { title: 'To Kill a Mockingbird', author: ' Harper Lee', status: 'Available' },
    { title: 'The Great Gatsby', author: ' F. Scott Fitzgerald', status: 'Available' },
    { title: 'Crying in H Mart', author: ' Michelle Zauner', status: 'Available' },
    // { title: 'The Story 5', author: 'Emma', status: 'Available' },
  ];

  return (
    <List>
      {stories.map((story, index) => (
        <React.Fragment key={index}>
          <ListItem style={{ padding: '13px 8px', borderRadius: '4px' }}>
            <ListItemText sx={{display:"flex", justifyContent:"space-between"}}
              primary={
                <>
                  <Typography variant="h4" style={{ marginBottom: '4px' }}>{story.title}</Typography>
                  <Typography variant="body1">Author: {story.author}</Typography>
                </>
              }
              secondary={
                <Chip style={{ backgroundColor: '#75bb754f', marginRight: '8px' }} size="small" label={story.status} />
              }
            />
          </ListItem>
          {index !== stories.length - 1 && <Divider variant="middle" />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default NewArrival;

