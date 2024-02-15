import React, { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Typography, Grid, Box, Button , Divider } from '@mui/material';
import { boxHeight, HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';
import { subTitle } from 'views/dashboard/Default/dashboard-css/CommonCss';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import { useNavigate } from 'react-router';


const FavPages = ( { FavPagesList }) => {
  const [visitedURLs, setVisitedURLs] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    // Retrieve the list of visited URLs from local storage
    const storedVisitedURLs = JSON.parse(localStorage.getItem('FavPages_VisitedURLs')) || {};
    setVisitedURLs(storedVisitedURLs);
  }, []);

  // Convert the object of visited URLs and their counts into an array of objects
  const visitedURLsArray = Object.keys(visitedURLs).map(url => ({ url, count: visitedURLs[url] }));

  // Sort the URLs based on their count in descending order
  const sortedURLs = visitedURLsArray.sort((a, b) => b.count - a.count);

  // Get the top 6 most visited URLs that are also present in FavPagesList
  const topVisitedURLs = sortedURLs.filter(item => FavPagesList.find(page => page.url === item.url)).slice(0, 6);

  return (
    <MainCard style={boxHeight} className='scrollbar'>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Grid alignContent="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h2" style={HeadingCss}>
                Favorite Pages
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {topVisitedURLs.map(({ url }, index) => {
          // Find the corresponding page object from FavPagesList based on URL
          const page = FavPagesList.find(page => page.url === url);
          if (!page) return null; // Skip if page not found in FavPagesList

          return (
            <Grid item xs={12} key={index} sx={{ paddingTop: '0 !important' }}>
              <Grid container direction="column">
                <Grid item>
                  <Grid container alignItems="center" justifyContent="space-between">
                    {/* title and icon */}
                    <Grid item sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          padding: '6px',
                          borderRadius: '50%',
                          color: 'rgb(30, 136, 229)',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <AttachmentOutlinedIcon />
                      </Box>
                      {/* Title */}
                      <Box>
                        <Typography variant="h3" style={subTitle}>
                          {page.title} {/* Displaying the title from FavPagesList */}
                        </Typography>
                      </Box>
                    </Grid>

                    {/* Link */}
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Box>
                            <Button variant="contained" onClick={() => navigate(url)}>
                              {page.btnText}
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2, color: '1px solid #80808024' }} />
            </Grid>
          );
        })}
      </Grid>
    </MainCard>
  );
};

export default FavPages;
