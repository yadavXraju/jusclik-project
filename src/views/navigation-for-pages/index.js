import React from 'react';
import { useLocation } from 'react-router-dom';
import { urlStore } from './UrlStore';
import { Grid , Typography , Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useNavigate } from 'react-router';

const UrlPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
        <MainCard sx={{ mb: 3 }}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid alignContent="center" justifyContent="space-between">

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                          {/* mapping the children menus */}
                          {urlStore.children.map((child, index) => (
                            <Typography
                              key={index}
                              variant="h4"
                              sx={{
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: child.url === pathname ? 'rgb(94, 53, 177)' : 'inherit', // Change color if URL matches current pathname
                              }}
                              onClick={() => navigate(child.url)}
                            >
                              {child.title}
                            </Typography>
                          ))}
                      </Box>

                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    </>
  );
};

export default UrlPage;
