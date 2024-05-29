import React from 'react';
import { Paper, IconButton, TableCell, TableRow, TableContainer, Table, TableHead, TableBody, Button, Typography, Popover, Grid } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import withParamDrawer from 'components/temp-withParamDrawer';
import CreateNewDetails from './CreateNewDetails';

// =================  upload data sample data start
const UploadGallerydata = [
  {
    albumName: 'Photogallery Album-1',
    hidden: 'No',
    type: 'Photo',
    lastModified: '02/05/2024',
    updateby: 'Ruby',
  },
  {
      albumName: 'Photogallery Album-2',
      hidden: 'No',
      type: 'Photo',
      lastModified: '02/05/2024',
      updateby: 'Ruby',
    },
    {
      albumName: 'Photogallery Album-3',
      hidden: 'No',
      type: 'Photo',
      lastModified: '02/05/2024',
      updateby: 'Ruby',
    },
  // Add more homework data objects as needed
];
// =================  upload data sample data end

// =================  Gallery drawer start
const NewParamDrawer=withParamDrawer(CreateNewDetails);
function GalleryDrawer() {
  return (
    <div>
      <NewParamDrawer buttonLabel='Upload Photo Gallery' drawerTitle='Upload Photo Gallery' />
    </div>
  )
}
// =================  Gallery drawer end


export default function UploadGalleryTable() {
  // Sample homework data (you can fetch this data from an API or other source)
  
  return (
    <>
      <Paper elevation={1} sx={{ marginBottom: '16px', marginTop: '30px'}}>
        <Grid container spacing={2} p={2} alignItems="end">
          <Grid item xs={12} sm={8} lg={8}>
            <div>
              <Typography variant="h3">Upload Photo Gallery</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <GalleryDrawer/>
            </div>
          </Grid>
        </Grid>
        <TableContainer className='scrollbar-2'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Album Name</TableCell>
                <TableCell>Hidden</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Last Modified</TableCell>
                <TableCell>Updated By</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Render each homework's data dynamically */}
              {UploadGallerydata.map((homework, index) => (
                <TableRow key={index}>
                  <TableCell>{homework.albumName}</TableCell>
                  <TableCell>{homework.hidden}</TableCell>
                  <TableCell>{homework.type}</TableCell>
                  <TableCell>{homework.lastModified}</TableCell>
                  <TableCell>{homework.updateby}</TableCell>
                  <TableCell>
                    <PopupState variant="popover" popupId={`demo-popup-popover-${index}`}>
                      {(popupState) => (
                        <div>
                          <IconButton {...bindTrigger(popupState)}>
                            <MoreVertOutlinedIcon />
                          </IconButton>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'center'
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center'
                            }}
                          >
                            <Typography sx={{ p: 1, display: 'grid' }}>
                              <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                              <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Delete</Button>
                              <Button sx={{ color: 'black' }}>Grade</Button>
                            </Typography>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
