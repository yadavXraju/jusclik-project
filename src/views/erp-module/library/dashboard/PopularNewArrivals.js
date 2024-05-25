// Page Owner :  Sangeeta 
// Description : Popular New Arrival  


import React from 'react'
import{Paper,Grid,Typography,Box,Tab,useMediaQuery , Chip, List, ListItem, ListItemText, Divider}  from '@mui/material'
import {TabContext,TabList,TabPanel } from '@mui/lab';
import { HeadingCss } from 'components/dashboard/CommonCss'

// New Arrival start ============== 
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

// New Arrival end ==============
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
// Popular book ================

const LastestUpdatesOfBooks = () => {
   const isMobile = useMediaQuery('(max-width: 767px)');
   const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <>
      <Paper variant="elevation" elevation="3">
      <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Popular & New Arrivals</Typography>
        </Grid>
        

        {/* list  */}
        <Grid sx={{display:"flex",height:"410px"}}>
        <Box sx={{ width: '100%', typography: 'body1',padding:isMobile?"0px":"10px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>


          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="New Arrivals" value="1"  sx={{color:"black",paddingBottom:"0px"}}/>
            <Tab label="Popular Books" value="2"   sx={{color:"black",paddingBottom:"0px"}}/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{padding:'4px 0px 0px 0px'}}>
          <NewArrival/>
        </TabPanel>
        <TabPanel value="2" sx={{padding:'4px 0px 0px 0px'}}><PopularBook/></TabPanel>
      </TabContext>
    </Box>
        </Grid>
      </Paper>
    </>
  )
}

export default LastestUpdatesOfBooks
