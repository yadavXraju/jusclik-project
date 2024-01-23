import React from 'react';
import { Paper, Grid, Typography, IconButton, Tooltip } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadIcon from '@mui/icons-material/Download';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreateIcon from '@mui/icons-material/Create';

const AssignmentItem = ({ item, index, handleOpenDialog,getFormattedDate }) => {
  return (
    <Paper elevation={2} key={item.id} sx={{ padding: '0px 20px', marginBottom: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Grid className='tab' container spacing={2} sx={{
        borderLeft: `4px solid ${index % 2 === 0 ? 'rgb(237,231,246)' : 'rgb(144,202,249)'}`
      }}>
        <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}>
              <CalendarTodayIcon sx={{ width: "16px", height: "16px" }} /> {item.date && getFormattedDate(item.date)}
            </Grid>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">Due Date: {item.dueDate && getFormattedDate(item.dueDate)}</Typography>
        </Grid>
        <Grid direction="row" alignItems="flex-start" justifyContent='flex-start' item xs={4} md={8}>
          <Typography variant='h6'>{item.homework}</Typography>
          <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}>
            <Tooltip title="Attachment">
              <IconButton onClick={handleOpenDialog}>
                <AttachmentIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Download">
              <IconButton>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', mt: '10px' }}>
          <Tooltip title="Download">
            <IconButton>
              <CreateIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssignmentItem;
