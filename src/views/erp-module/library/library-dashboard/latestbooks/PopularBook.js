import React from 'react';
import { Typography, Chip, List, ListItem, ListItemText, Divider } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const PopularBook = () => {
  const stories = [
    { title: 'Jane Eyre', author: 'Charlotte Brontë', likes: '24 times' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', likes: '44 times' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', likes: '42 times' },
    { title: 'Crying in H Mart', author: 'Michelle Zauner', likes: '45 times' },
  ];

  return (
    <>
      <List>
        {stories.map((story, index) => (
          <React.Fragment key={index}>
            <ListItem style={{ padding: '13px 8px', borderRadius: '4px' }}>
              <ListItemText
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                primary={
                  <>
                    <Typography variant="h4" style={{ marginBottom: '4px' }}>
                      {story.title}
                    </Typography>
                    <Typography variant="body1">Author: {story.author}</Typography>
                  </>
                }
                secondary={
                  <Chip
                    style={{ backgroundColor: '#8dc5f742', marginRight: '8px', display: 'flex', alignItems: 'center' }}
                    size="small"
                    // icon={<FavoriteIcon style={{ fontSize: '16px',color:"red" }} />}
                    label={story.likes}
                  />
                }
              />
            </ListItem>
            {index !== stories.length - 1 && <Divider variant="middle" />}
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default PopularBook;
