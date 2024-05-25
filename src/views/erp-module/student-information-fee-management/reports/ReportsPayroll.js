import { Typography, Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { useNavigate } from 'react-router';

const ReportsPayroll = ({sections}) => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    
   
      

      const toggleFavorite = (pageName, pagePath) => {
        const isFavorite = favorites.some((page) => page.name === pageName);
        if (isFavorite) {
          setFavorites(favorites.filter((page) => page.name !== pageName));
        } else {
          setFavorites([...favorites, { name: pageName, path: pagePath }]);
        }
      };
    
      return (
        <Box sx={{ paddingLeft: '30px', paddingRight: '40px', paddingTop: '20px' }}>
          {favorites.length > 0 && (
            <Box sx={{ display: 'flex', paddingBottom: '20px' }}>
              <VerifiedOutlinedIcon />
              <Typography variant="h4" sx={{ paddingBottom: '10px', marginTop: '3px', paddingLeft: '10px' }}>Favorites:</Typography>
            </Box>
          )}
          {favorites.length > 0 && (
            <Grid container spacing={2} sx={{ paddingBottom: '30px' }}>
              {favorites.map((favorite, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ paddingBottom: '20px' }}>
                  <Typography sx={{ paddingBottom: '10px', borderBottom: '1px dashed #cbcbcb' }}>
                    <Typography
                      style={{ textDecoration: 'none', textTransform: 'none', color: '#408dfb', cursor: 'pointer' }}
                      onClick={() => navigate(favorite.path)}
                    >
                      {favorite.name}
                    </Typography>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          )}
          <Grid container spacing={5}>
            {sections.map((section, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {section.icon}
                  <Typography variant="h4" sx={{ textDecoration: 'none', textTransform: 'none', marginLeft: '10px' }}>{section.title}</Typography>
                </Box>
                <Box sx={{ paddingTop: '20px' }}>
                  {section.pages.map((page, pageIndex) => (
                    <Typography key={pageIndex} sx={{ paddingBottom: '19px', borderBottom: '1px dashed #cbcbcb', display: 'flex', alignItems: 'center', paddingTop: '15px' }}>
                      {favorites.some((favPage) => favPage.name === page.name) ? (
                        <StarIcon onClick={() => toggleFavorite(page.name, page.path)} sx={{ color: '#f8cb01', cursor: 'pointer' }} />
                      ) : (
                        <StarBorderIcon onClick={() => toggleFavorite(page.name, page.path)} sx={{ color: '#cbcbcb', cursor: 'pointer' }} />
                      )}
                      <Typography
                        style={{ textDecoration: 'none', textTransform: 'none', color: '#408dfb', marginLeft: '8px', cursor: 'pointer' }}
                        onClick={() => navigate(page.path)}
                      >
                        {page.name}
                      </Typography>
                    </Typography>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    };
    
    export default ReportsPayroll;