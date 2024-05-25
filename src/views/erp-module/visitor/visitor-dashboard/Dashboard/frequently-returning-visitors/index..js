// sangeeta
import React from 'react'
import {  Grid , Typography , Box ,Divider } from '@mui/material'
import { HeadingCss , boxHeight , subTitle , subtitle2 } from 'views/dashboard/Default/dashboard-css/CommonCss'
import { FrequentlyReturningVisitorList } from './FrequentlyReturningVisitors'
import { gridSpacing } from 'store/constant';
import MainCard from 'components/ui/cards/MainCard';
import '../../../../dashboard/Default/dashboard-css/Overflow.css'

const FrequentlyReturningVisitor = () => {
  return (
    <>
       <MainCard  style={boxHeight} className='scrollbar' > 
          <Grid container spacing={gridSpacing}>
             <Grid item xs={12} sx={{mb:3}}>
                <Grid  alignContent="center" justifyContent="space-between">

                    <Grid item sx={{mb:3}}>
                        <Typography variant='h2' style={HeadingCss}> Frequently Returning Visitors</Typography> 
                    </Grid>

                    {/* mapping data */}
                    {FrequentlyReturningVisitorList.map((item , index)=>(
                        <>
                            <Grid spacing={gridSpacing}  key={index} sx={{display:'flex' , justifyContent:'space-between'}}>
                                {/* name and mobile num */}
                                <Grid sx={{display:'flex', flexDirection:'column'}}>
                                    {/* this box contian name */}
                                    <Box> 
                                        <Typography variant="h3" style={subTitle}>
                                        {item.name}
                                        </Typography>
                                    </Box>

                                    {/* this box contiane mobile no */}
                                    <Box> 
                                        <Typography variant="h3" style={subtitle2}>
                                        {item.mobileNo}
                                        </Typography>
                                    </Box>
                                </Grid>

                            {/* visits time and mobile */}

                                <Grid sx={{display:'flex', flexDirection:'column'}}>
                                    {/* this box contains how many time vistor visits  */}
                                    <Box> 
                                        <Typography variant="h3" style={subTitle}>
                                        {item.visitTimes} Times
                                        </Typography>
                                    </Box>

                                    {/* mobile no */}
                                    <Box> 
                                        <Typography variant="h3" style={subtitle2}>
                                        Mobile
                                        </Typography>
                                    </Box>
                                </Grid>
    
                            </Grid>

                            <Divider sx={{ my: 1.5 , color:'1px solid #80808024'}} />
                        </>
                        
                    ))}
        
                </Grid>
             </Grid>
           </Grid>
       </MainCard> 

   </>
  )
}

export default FrequentlyReturningVisitor