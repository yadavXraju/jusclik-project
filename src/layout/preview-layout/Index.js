import React from 'react';
import MainCard from 'components/ui/cards/MainCard';
import { Box, Grid, useMediaQuery } from '@mui/material';

const PreviewLayout = ({ Header, Body1, Body2, OptionalHeader, customHeaderStyle }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const issmallMobile = useMediaQuery('(max-width: 425px)');

  const style = {
    headerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: issmallMobile ? 'wrap' : 'nowrap',
      borderBottom: '1px solid #ccc',
      alignItems: 'center'
    }
  };
  return (
    <>
      <MainCard>
        <Box>
          <Box>
            <Box pb={1} sx={{ ...style.headerStyle, ...customHeaderStyle }}>
              {Header}
            </Box>
            {OptionalHeader}
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box p={2} sx={{ borderRight: isMobile ? 'none' : '1px solid #ccc' }}>
                {Body1}
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              {Body2}
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </>
  );
};

export default PreviewLayout;
