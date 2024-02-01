import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import Button from '@mui/material/Button';
import MainCard from 'ui-component/cards/MainCard'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box } from '@mui/system';
import LeaveBarChart from './LeaveapplicationBar';
import LeaveChart from './LeaveApplicationChart';


const LeaveApplication = () => {

  return (
    <>
      <MainCard>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12} sm={8} lg={8} >

            <ul>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <li>Pending Leave Details</li>

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <IconButton {...bindTrigger(popupState)}>
                        <MoreHorizIcon />
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
                          <Button sx={{ color: 'black' }}>Cancel</Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            </ul>

          </Grid>

          <Grid item xs={12} sm={4} lg={4} >

            <Box sx={{display:'flex', justifyContent:'center',width:'100%'}}>
            <Button variant="outlined" startIcon={<AddOutlinedIcon/>}>
              Leave Application
            </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={7} lg={7} >
          <LeaveBarChart/>
          </Grid>

          <Grid item xs={12} sm={5} lg={5} >
          <LeaveChart/>
          </Grid>

        </Grid>
      </MainCard>
    </>
  )
}

export default LeaveApplication