import React from 'react';
import { Typography, Chip, List, ListItem, ListItemText, Divider } from '@mui/material';

const NewArrival = () => {
  // Dummy data for dynamic rendering
  const stories = [
    { title: 'The Story 1', author: 'San', status: 'Available' },
    { title: 'The Story 2', author: 'John', status: 'Available' },
    { title: 'The Story 3', author: 'Emma', status: 'Available' },
  ];

  return (
    <List>
      {stories.map((story, index) => (
        <React.Fragment key={index}>
          <ListItem style={{ padding: '8px', borderRadius: '4px' }}>
            <ListItemText
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

