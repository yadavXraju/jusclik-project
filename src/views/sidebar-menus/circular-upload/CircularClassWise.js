import * as React from 'react';
import { Box, ListItem, ListItemText, Paper, Typography, Divider } from '@mui/material';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone'; // Import the PDF icon
// import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Popover from '@mui/material/Popover';
import { IconButton } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Button} from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';

export default function BasicTable() {
  return (
    <Box sx={{ mt: 2 }}>
      <Paper sx={{ listStyleType: 'none', p: 0 }}>
        <ListItem sx={{ display: 'flex',p: 3 }}>
          <ListItemText>
            <Typography variant="h4">Attachment</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="h4"sx={{ display: 'flex',justifyContent:'center'}}>Course|Topic</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="h4" sx={{ display: 'flex',justifyContent:'end'}}>Date</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="h4" sx={{ display: 'flex',justifyContent:'end'}}>Action</Typography>
          </ListItemText>
        </ListItem>
        <Divider />
{/* First list for upload circular */}
        {/* Additional ListItem for PDF */}
        <ListItem sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
          <PictureAsPdfTwoToneIcon fontSize="large" />
          <ListItemText>
            <Typography variant="h4">ClassPresentation.PDF</Typography>
          </ListItemText>
          <ListItemText >
            <Typography variant="h4">Maths 101|Unit-2:Linear Programming</Typography> {/* Replace with the actual PDF file name */}
          </ListItemText>
          {/* Date */}
          <ListItemText >
            <Typography variant="h4">04-02-2024</Typography>
          </ListItemText>
          {/* Action */}
          <span>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <IconButton {...bindTrigger(popupState)}>
                        <MoreVertOutlinedIcon />
                      </IconButton>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <Typography sx={{ p: 1, display: 'Grid' }}>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                          <Button sx={{ color: 'black' }}>Delete</Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </span>
        </ListItem>
        {/* First list for upload circular end*/}
        <Divider />
        {/* 2nd list for upload circular start*/}
        <ListItem sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
          <NoteAddTwoToneIcon fontSize="large" />
          <ListItemText>
            <Typography variant="h4">SlideShow.PPT</Typography>
          </ListItemText>
          <ListItemText >
            <Typography variant="h4">Maths 102|Unit-2:Add and Subtract</Typography> {/* Replace with the actual PDF file name */}
          </ListItemText>
          {/* Date */}
          <ListItemText >
            <Typography variant="h4">07-02-2024</Typography>
          </ListItemText>
          {/* Action */}
          <span>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <IconButton {...bindTrigger(popupState)}>
                        <MoreVertOutlinedIcon />
                      </IconButton>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <Typography sx={{ p: 1, display: 'Grid' }}>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                          <Button sx={{ color: 'black' }}>Delete</Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </span>
        </ListItem>
         {/* 2nd list for upload circular end*/}
         <Divider />
        {/* 3rd list for upload circular start*/}
        <ListItem sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
          <AssignmentTwoToneIcon fontSize="large" />
          <ListItemText>
            <Typography variant="h4">Solving Sheets.XLS</Typography>
          </ListItemText>
          <ListItemText >
            <Typography variant="h4">Maths 103|Unit-2:Motion and Force</Typography> {/* Replace with the actual PDF file name */}
          </ListItemText>
          {/* Date */}
          <ListItemText >
            <Typography variant="h4">12-02-2024</Typography>
          </ListItemText>
          {/* Action */}
          <span>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <IconButton {...bindTrigger(popupState)}>
                        <MoreVertOutlinedIcon />
                      </IconButton>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <Typography sx={{ p: 1, display: 'Grid' }}>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                          <Button sx={{ color: 'black' }}>Delete</Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </span>
        </ListItem>
         {/* 3rd list for upload circular end*/}
      </Paper>
    </Box>
  );
}