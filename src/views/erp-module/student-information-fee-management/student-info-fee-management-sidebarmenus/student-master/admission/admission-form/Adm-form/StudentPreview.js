import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Grid, Typography } from '@mui/material';
import PriviewTabs from './PreviewTabs';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';

function StudentPreview() {
  return (
    <>
      <MainCard>
        <Box height={'90vh'}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ height: '70px', width: '70px', borderRadius: '50%', background: '#ccc', mr: '20px' }}></Box>
              <Box>
                <Typography variant="h4">Suraj Misra</Typography>
                <Box>MBS School Noida</Box>
              </Box>
            </Box>
            <Box>
              {/* <ButtonGroup variant="text" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
              </ButtonGroup> */}
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box p={2}>
                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Basic Info
                  </Typography>
                  <Typography p={0.7} variant="body2">
                    Name - Suraj
                  </Typography>
                  <Typography p={0.7} variant="body2">
                    D.O.B - 10-may-2001
                  </Typography>
                  <Typography p={0.7} variant="body2">
                    Adm. Date - 05-June-2024
                  </Typography>
                  <Typography p={0.7} variant="body2">
                    Category - General
                  </Typography>
                </Box>

                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Description
                  </Typography>
                  <Typography p={0.7} variant="body2">
                    This is a sample Contact.
                  </Typography>
                </Box>

                <Box p={2}>
                  <Typography p={0.7} variant="h4">
                    Other Info
                  </Typography>
                  <Typography p={0.7} variant="body2"></Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <PriviewTabs />
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </>
  );
}

export default StudentPreview;
