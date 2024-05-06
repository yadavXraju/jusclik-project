import React from 'react';
import { Grid , Typography , Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useNavigate , useLocation } from 'react-router';
import { useSelector } from 'react-redux';


const UrlPage = () => {
  const { menuNavItem } = useSelector((state) => state.menuNavItemSlice);
  const menuNavCollapse = useSelector((state) => state.menuNavCollapseSlice);
  const navigate = useNavigate();
  const Location = useLocation();
  const pathname = Location.pathname;
  return (
    <>
        <MainCard sx={{ mb: 3 , background:'none' , border:'none' ,}}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' , flexDirection:'column'}}>
                    <Grid alignContent="center" justifyContent="space-between">

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' , borderBottom:'2px solid #b7b7b742' , }}>
                      {menuNavCollapse.NavCollapse.map(item => 
                            <Typography
                              key={item.id}
                              variant="h4"
                              sx={{
                                cursor: 'pointer',
                                fontSize: '14px',
                                paddingBottom:'14px',
                                color: item?.url === pathname ? '#2196f3' : 'inherit', 
                                borderBottom: item?.url === pathname ? '2px solid #2196f3' : 'none',
                              }}
                              onClick={() => navigate(item?.url)}
                            >
                                 {item?.title}
                            </Typography>
                      )}

                            {menuNavCollapse.NavCollapse.length === 0 &&
                            <Typography
                              variant="h4"
                              sx={{
                                cursor: 'pointer',
                                fontSize: '14px',
                                paddingBottom:'14px',
                                color: menuNavItem?.NavItem?.url === pathname ? '#2196f3' : 'inherit', 
                                borderBottom: menuNavItem?.NavItem?.url === pathname ? '2px solid #2196f3' : 'none',
                              }}
                              onClick={() => navigate(menuNavItem?.NavItem?.url)}
                            >
                               {menuNavItem?.NavItem?.title}
                            </Typography>
                           }
                      </Box>

                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    </>
  );
};

export default UrlPage;

