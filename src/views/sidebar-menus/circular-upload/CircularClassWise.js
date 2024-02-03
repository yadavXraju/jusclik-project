import * as React from 'react';
import { Box, ListItem, ListItemText,Paper, Typography, Divider, Avatar,ListItemAvatar } from '@mui/material';

export default function BasicTable() {
  return (
    <Box sx={{ mt: 2 }}>
    <Paper sx={{ listStyleType: 'none', p: 0 }}>
      <ListItem sx={{ display: 'flex', alignItems: 'center',p:3 }}>
        <ListItemText >
          <Typography variant="h4" sx={{textAlign:'center'}} >
            Attachment
          </Typography>
        </ListItemText>
        <ListItemText >
          <Typography variant="h4"  sx={{textAlign:'center'}} >Course|Topic</Typography>
        </ListItemText>
        <ListItemText >
          <Typography variant="h4"  sx={{textAlign:'center'}} >Date</Typography>
        </ListItemText>
        <ListItemText >
          <Typography variant="h4"  sx={{textAlign:'center'}} >Action</Typography>
        </ListItemText>
      </ListItem>
      <Divider  />
      {(filteredCircularName.length > 0 ? filteredCircularName : CircularName).map((student) => (
        <React.Fragment key={student.id}>
          <ListItem sx={{ display: 'flex', alignItems: 'center', p: 2 }}>

<ListItemText sx={{ flex: '0 0 15%' }}>
  <Typography variant="h4" color="text.primary">
    {student.admnNo}
  </Typography>
</ListItemText>

<ListItemAvatar sx={{ flex: '0 0 3%' }}>
  <Avatar src={AvtarImg} sx={{ width: 50, height: 50 }} />
</ListItemAvatar>

<ListItemText sx={{ paddingLeft: '10px', flex: '0 0 32%' }}>
  <Typography variant="h4">{student.name}</Typography>
</ListItemText>
</ListItem>
        </React.Fragment>
           ))}
      </Paper>
      </Box>
  );
}