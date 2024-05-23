import React from 'react'

import { Typography , Grid ,Paper} from '@mui/material'
import { HeadingCss , boxHeight} from 'component/dashboard-css/CommonCss';
// import 'views/erp-module/parent/dashboard/dashboard-css/Overflow.css'
import GmailInboxTemplate from 'views/erp-module/parent/parent-sidebar/communication-message/MailBox'

const   Communication = () => {
    // const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
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
                  Recent  communication
              </Typography>
        </Grid>
        <Grid sx={{ padding: '24px' }} style={boxHeight}>
        <GmailInboxTemplate />
</Grid>
        </Paper>
    </>
  )
}

export default Communication