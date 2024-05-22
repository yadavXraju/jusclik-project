//  Page Owner : Abhishek
//  Page Owner : Dashboard Layout 

import React from 'react';
import { Grid   }from '@mui/material';
import { gridSpacing } from 'store/constant';
import NeedHelp from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/support/Support2';




const DashboardLayout = ({ isLoading , children }) => {
  return (
    <>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing} >
                    {/* counter */}  
                    <Grid item xs={12} lg={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' , display:'flex' , flexDirection:'column', gap:'24px' ,} }}>
                        {children}
                    </Grid>


                    {/* enrollment stats */}
                    <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
                        {children}
                    </Grid>

                    {/* Payment Gateway Wise Collection */}
                    <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
                            {children}
                    </Grid>

                    {/* invoice raised */}
                    <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
                       {children}
                    </Grid>

                    {/* fee collection */}
                    <Grid item xs={12} lg={6}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
                        {children}
                    </Grid>

                    {/* fee defaulter */}
                    <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
                        {children}
                    </Grid>

                    {/* need support */}
                    <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
                        {/* <NeedSupport isLoading={isLoading} />  */}
                        <NeedHelp isLoading={isLoading} />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default DashboardLayout