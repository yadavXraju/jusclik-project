// import React from 'react';
// import MainCard from 'ui-component/cards/MainCard';
// import { Typography, Grid , Box , Button , Divider} from '@mui/material';
// import { boxHeight, HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
// import { gridSpacing } from 'store/constant';
// import { subTitle } from 'views/dashboard/Default/dashboard-css/CommonCss';
// import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
// import { useNavigate } from 'react-router';
// import { FavPagesList } from './FavPagesList';



// const FavPages = () => {
//   const navigate = useNavigate();

//   return (
//     <MainCard style={boxHeight} className='scrollbar'>
//       <Grid container spacing={gridSpacing}>
//         <Grid item xs={12} sx={{ mb: 3 }}>
//           <Grid alignContent="center" justifyContent="space-between">
//             <Grid item>
//               <Typography variant="h2" style={HeadingCss}>
//                 Favourite Pages 
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>

//         {FavPagesList.map((page, index) => (
//           <Grid item xs={12} key={index} sx={{ paddingTop: '0 !important' }}>
//             <Grid container direction="column">
//               <Grid item>
//                 <Grid container alignItems="center" justifyContent="space-between">
//                   {/* title and icon */}
//                   <Grid item sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
//                     {/* Icon */}
//                     <Box sx={{
//                       padding: '6px',
//                       borderRadius: '50%',
//                       color: 'rgb(30, 136, 229)',
//                       display: 'flex',
//                       justifyContent: 'center',
//                     }}>
//                       <AttachmentOutlinedIcon />
//                     </Box>
//                     {/* title */}
//                     <Box>
//                       <Typography variant="h3" style={subTitle}>
//                         {page.title}
//                       </Typography>
//                     </Box>
//                   </Grid>

//                   {/* Link */}
//                   <Grid item>
//                     <Grid container alignItems="center" justifyContent="space-between">
//                       <Grid item>
//                         <Box>
//                           <Button variant="contained" onClick={() => navigate(page.url)}>{page.btnText}</Button>
//                         </Box>
//                       </Grid>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Divider sx={{ my: 1.5, color: '1px solid #80808024' }} />
//           </Grid>
//         ))}
//       </Grid>
//     </MainCard>
//   );
// };

// export default FavPages;

import React, { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Typography, Grid, Box, Button, Divider } from '@mui/material';
import { boxHeight, HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';
import { subTitle } from 'views/dashboard/Default/dashboard-css/CommonCss';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import { useNavigate } from 'react-router';
import { FavPagesList } from './FavPagesList';

const FavPages = () => {
  const navigate = useNavigate();
  const [favoritePages, setFavoritePages] = useState([]);

  useEffect(() => {
    // Retrieve favorite pages from local storage
    let pages = JSON.parse(localStorage.getItem('favoritePages')) || {};

    // If there are no favorite pages in local storage, set them to an empty object
    if (Object.keys(pages).length === 0) {
      pages = {};

      // Iterate over FavPagesList to initialize favorite pages with a visit count of 0
      FavPagesList.forEach(page => {
        pages[page.url] = 0;
      });

      // Save initialized favorite pages to local storage
      localStorage.setItem('favoritePages', JSON.stringify(pages));
    }

    // Sort and set the favorite pages state
    const sortedPages = Object.entries(pages)
      .sort((a, b) => b[1] - a[1]) // Sort by visit count in descending order
      .map(([url]) => url)
      .slice(0, 5); // Only show top 5 most visited pages
    setFavoritePages(sortedPages);
  }, []);

  const incrementPageCount = url => {
    const pages = JSON.parse(localStorage.getItem('favoritePages')) || {};
    pages[url] = (pages[url] || 0) + 1;
    localStorage.setItem('favoritePages', JSON.stringify(pages));
  };

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

        {favoritePages.map((url, index) => {
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
                      {/* title */}
                      <Box>
                        <Typography variant="h3" style={subTitle}>
                          {page.title}
                        </Typography>
                      </Box>
                    </Grid>

                    {/* Link */}
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Box>
                            <Button variant="contained" onClick={() => {
                              navigate(page.url);
                              incrementPageCount(page.url);
                            }}>
                              Go
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider sx={{ my: 1.5, color: '1px solid #80808024' }} />
            </Grid>
          );
        })}
      </Grid>
    </MainCard>
  );
};

export default FavPages;
