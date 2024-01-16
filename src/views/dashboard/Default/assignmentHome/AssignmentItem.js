// AssignmentItem.js
import React from 'react';
import { Grid, Box, Typography, IconButton, Tooltip } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Attachment from 'views/sidebar-menus/assignments/Attachment';
import Model from 'views/sidebar-menus/assignments/Model';
import useDialog from '../customHook/UseDialog';

const AssignmentItem = ({ item, completedItems, selectedItems, handleCheckboxClick, navigate }) => {
  const { open, handleOpen, handleClose } = useDialog();
   return (
        <Grid container key={item.id} lg={12} sx={{ gap: '8px' }}>
          <Grid container lg={7} sx={{ gap: '8px' }}>
            <Grid item col={3} sx={{ display: 'flex', gap: '3px' }}>
              <Grid
                sx={{
                  background: completedItems.includes(item.id) ? (theme) => theme.palette.success.main : (theme) => theme.palette.primary.main,
                  width: '5px',
                  height: '100%',
                  borderRadius: '3px',
                }}
              ></Grid>

              <input
                type='checkbox'
                checked={selectedItems.includes(item.id)}
                onClick={() => handleCheckboxClick(item.id)}
              />
            </Grid>

            <Grid item col={9} sx={{ display: 'flex', gap: '30px' }}>
              <Box>
                <Typography variant='body1' sx={{}}>
                  {item.description}
                </Typography>

                <Typography variant='body1' sx={{ color: '#99a1b7', fontWeight: '500', fontSize: '14px' }}>
                  {item.name}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    color: completedItems.includes(item.id) ? '#00e676' : '#99a1b7',
                    fontWeight: '400',
                    fontSize: '14px',
                    background: completedItems.includes(item.id) ? '#dfffea' : null,
                  }}
                >
                  {completedItems.includes(item.id) ? 'Complete' : 'In Process'}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container lg={4} sx={{ gap: '14px', alignItems: 'center' }}>
            <Box>
              <Typography variant='body1' sx={{}}>
                {item.dueDate}
              </Typography>
            </Box>

            <Box>
            <Attachment handleOpenDialog={handleOpen} />

              <Tooltip title='Edit'>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title='Email' onClick={() => navigate('../../communication/inbox')}>
                <IconButton>
                  <MailOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>
          <Model openDialog={open} handleCloseDialog={handleClose} />
        </Grid>
      )} ;

export default AssignmentItem;
