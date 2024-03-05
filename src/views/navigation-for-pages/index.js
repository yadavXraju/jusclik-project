// UrlPage.js

import React from 'react';
import { urlStore } from './UrlStore';
import { Grid , Typography  , Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useNavigate } from 'react-router';

const UrlPage = () => {
  const navigate = useNavigate();

  return (
    <>
        <MainCard sx={{ mb: 3 }}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid alignContent="center" justifyContent="space-between">

                      <Box sx={{display:'flex', flexWrap:'wrap' , gap: '20px' , }} >

                      {urlStore.title &&  urlStore.url && (
                           <Typography variant="h4"  sx={{ cursor: 'pointer' }} onClick={() => navigate(urlStore.url)} > {urlStore.title} </Typography>
                        )
                     }

                           {/* mapping the children menus */}
                                {urlStore.children.length > 0 && (
                                  <>      
                                    {urlStore.children.map((child, index) => (
                                      <>
                                        {child.title && child.url && (
                                          <Typography variant="h4" key={index}  sx={{ cursor: 'pointer' }} onClick={() => navigate(child.url)} > {child.title} </Typography>
                                        )}
                                      </>
                                    ))}
                                  </>

                              )} 
                      </Box>

                    </Grid>
                </Grid>
            </Grid>
        </MainCard>

    </>
  );
};

export default UrlPage;
