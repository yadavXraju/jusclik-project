import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import { Typography , Grid , useMediaQuery } from '@mui/material'
import { HeadingCss , boxHeight} from 'views/common-section/dashboard-css/CommonCss';
// import 'views/erp-module/parent/dashboard/dashboard-css/Overflow.css'
import GmailInboxTemplate from 'views/erp-module/parent/parent-sidebar/communication-message/MailBox'

const   Communication = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
         <MainCard  sx={{ fontSize: '22px', fontWeight: 'bold' , paddingLeft: isMobile ? '10px' : 'auto' }} style={boxHeight} className='scrollbar'>
        <Grid item>
            <Typography variant="h2" style={HeadingCss}>
                  Recent  communication
              </Typography>
        </Grid>

        <GmailInboxTemplate />

        </MainCard>
    </>
  )
}

export default Communication