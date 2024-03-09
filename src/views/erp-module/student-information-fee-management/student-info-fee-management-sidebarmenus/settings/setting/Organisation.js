import { Grid, Box, Card, Typography, Container } from '@mui/material';
import React from 'react';
import SettingData from './SettingData'


const Organisation = () => {
  return (
    <Container>
      <Box sx={{}}>
        <Grid container spacing={5} sx={{}}>
          {SettingData.map((item, index) => (
            <Grid item xs={3} key={index} sx={{ paddingBottom: '2rem' }}>
              <Card sx={{ border: '1px solid #ebeaf2', padding: '36px', height: '110%', backgroundColor: '#f9f9fb' }}>
                <Box>
                  <Box sx={{ display: 'flex' }}>
                    {item.icon}
                    <Typography variant='h5' sx={{ paddingLeft: '7px', paddingTop: '3px' }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box sx={{ paddingTop: '14px' }}>
                    {item.items.map((subItem, subIndex) => (
                      <Typography key={subIndex} sx={{ paddingTop: '14px' }}>{subItem}</Typography>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Organisation;
