import * as React from 'react';
import AlignItemsList from 'views/erp-module/parent/parent-sidebar/communication-message/Contact-list';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
// import MainCard from 'ui-component/cards/MainCard';
// import { contactData } from 'views/sidebar-menus/communication-message/Contact-list';
// import { commonStyles } from 'views/sidebar-menus/communication-message/Contact-list';
// import { useNavigate } from 'react-router';
// import { HeadingCss , boxHeight , subTitle , subtitle2} from './dashboard-css/CommonCss';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss';
import { Grid , Typography ,Paper} from '@mui/material';
// import {
//   useMediaQuery , 
//   List ,
//   ListItem ,
//   ListItemText , 
//   ListItemAvatar ,
//   Avatar , 
//   Typography , 
//   Box ,
//   Badge ,
//   Grid 
// } from '@mui/material';





const CommunicationHomeComp = () => {
  // const isMobile = useMediaQuery('(max-width: 767px)');
// const contactListToShow = 4
// const navigate = useNavigate();

  

  
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
      <Typography variant="h2" sx={HeadingCss}>
        communication
      </Typography>
    </Grid>
    <Grid sx={{ padding: '24px', height: '470px',overflowY:"auto" }}>
      {/* Assuming AlignItemsList is a custom component */}
      <AlignItemsList communication_wrapper_style={{ paddingLeft: 0, paddingRight: 0 }} />
    </Grid>
  </Paper>
);
};

export default CommunicationHomeComp;
