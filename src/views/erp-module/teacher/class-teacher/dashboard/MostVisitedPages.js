// Page Owner : Abhishek
// Description : Most Visited  pages on the teacher dashboard

import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, Button , Divider ,Paper} from '@mui/material';
import { subTitle , boxHeight, HeadingCss } from 'components/dashboard/CommonCss';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import { useNavigate } from 'react-router';


const MostVisitedPages = () => {
  const [mostVisitedPages, SetmostVisitedPages] = useState([]);
 const navigate = useNavigate();
  useEffect(() => {
    const MostVisitedPagesKey = 'MostVisitedPages';
    const MostVisitedPages = JSON.parse(localStorage.getItem(MostVisitedPagesKey));

    if (MostVisitedPages) {
      // Convert MostVisitedPages object into an array of entries
      const MostVisitedPagesArray = Object.entries(MostVisitedPages);
      // Sort the array based on count in descending order
      MostVisitedPagesArray.sort((a, b) => b[1].count - a[1].count);
      // Get the top 5 visited URLs
      const top5mostVisitedPages = MostVisitedPagesArray.slice(0, 6);
      // Set the top 5 visited URLs state
      SetmostVisitedPages(top5mostVisitedPages);
    }
  }, []);

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid rgba(128, 128, 128, 0.25)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
        marginBottom: '20px', // Add some bottom margin for spacing
      }}
    >
      <Grid
        sx={{
          padding: '24px 24px 0 24px',
          background: '#f9f9fb',
          borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
          borderRadius: '12px 12px 0px 0',
        }}
      >
        <Typography variant="h2" style={HeadingCss}>
          Most Visited Pages
        </Typography>
      </Grid>

      <Grid sx={{ padding: '24px' }} style={boxHeight}>
        {mostVisitedPages.map(([key, value]) => (
          <Grid item xs={12} key={key} sx={{ paddingTop: '0 !important' }}>
            <Grid container direction="column">
              <Grid item>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ gap: '20px' }}
                  className="finddiv"
                >
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
                        {value.title}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Link */}
                  <Grid item sx={{ marginLeft: 'auto' }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Box>
                          <Button variant="contained" onClick={() => navigate(value.url)}>
                            View
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
        ))}
      </Grid>
    </Paper>
  );
};

export default MostVisitedPages