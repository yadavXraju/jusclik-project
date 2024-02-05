import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Typography, Grid , Box , Button , Divider} from '@mui/material';
import { boxHeight, HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';
import { subTitle } from 'views/dashboard/Default/dashboard-css/CommonCss';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import { useNavigate } from 'react-router';
import { FavPagesList } from './FavPagesList';



const FavPages = () => {
  const navigate = useNavigate();

  return (
    <MainCard style={boxHeight} className='scrollbar'>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Grid alignContent="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h2" style={HeadingCss}>
                Favourite Pages 
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {FavPagesList.map((page, index) => (
          <Grid item xs={12} key={index} sx={{ paddingTop: '0 !important' }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container alignItems="center" justifyContent="space-between">
                  {/* title and icon */}
                  <Grid item sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {/* Icon */}
                    <Box sx={{
                      padding: '6px',
                      borderRadius: '50%',
                      color: 'rgb(30, 136, 229)',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
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
                          <Button variant="contained" onClick={() => navigate(page.url)}>{page.btnText}</Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5, color: '1px solid #80808024' }} />
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
};

export default FavPages;
