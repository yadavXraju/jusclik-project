import React from 'react'
import { Paper, Typography , Box , Grid} from '@mui/material';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import NoAccountsTwoToneIcon from '@mui/icons-material/NoAccountsTwoTone';

const StudentStrength = () => {
  return (
    <>

        {/* counter 2 */}
        <Paper  sx={{
            border:'1px solid rgb(227, 227, 227)',
            boxShadow:'4px 4px 9px 2px #ddddddc2',
        }}>
            {/* counter grid 2 */}
                <Grid sx={{
                        display:'flex' ,
                        borderTop:'1px solid rgb(227, 227, 227)'
                }}>

                    {/* =========================  grid 1  enquiry and registration =========================   */}
                    <Grid sx={{flex:'0 0 50%'}}>

                        {/* enquiry */}
                        <Box sx={{
                            flex:'0 0 50%' ,
                            flexDirection:'column',
                            textAlign:'center',
                            display:'flex', gap:'20px',
                            alignItems:'center',
                            borderRight:'1px solid rgb(227, 227, 227)',
                            padding:'2rem',
                            borderBottom:'1px solid rgb(227, 227, 227)',
                            }}>

                            {/* icon and title */}
                                <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'100%'}}>
                                    {/* icon */}
                                    <Box sx={{padding:'10px' , borderRadius:'12px' , background:'rgb(227, 242, 253)' , display:'flex'}}>
                                    <LiveHelpTwoToneIcon sx={{color:'rgb(94, 53, 177)' ,  fontSize:'30px'}} />
                                    </Box>

                                    {/* stats */}
                                    <Box sx={{flex:'0 0 65%'}}>
                                        <Typography variant='h3' sx={{fontSize:'24px' ,  }}>25</Typography>         
                                        <Typography variant='h3' sx={{fontSize:'16px' , fontWeight:'400' ,  paddingTop:'7px'}}>Enquiries</Typography>           
                                    </Box>
                                </Grid>
                        </Box>

                        {/* Registration */}
                        <Box sx={{
                            flex:'0 0 25%' ,
                            display:'flex', 
                            flexDirection:'column',
                            textAlign:'center',
                            gap:'20px',
                            alignItems:'center',
                            borderRight:'1px solid rgb(227, 227, 227)',
                            padding:'2rem',
                            }}>

                            {/* icon and title */}
                            <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'100%'}}>

                                {/* icon */}
                                <Box sx={{padding:'10px' , borderRadius:'12px' , background:'rgb(227, 242, 253)' , display:'flex'}}>
                                    <AssignmentTurnedInTwoToneIcon  sx={{color:'rgb(94, 53, 177)' ,  fontSize:'30px'}} />
                                </Box>

                                {/* stats */}
                                <Box sx={{flex:'0 0 65%'}}>
                                <Typography variant='h3' sx={{fontSize:'24px',}}>76</Typography>         
                                    <Typography variant='h3' sx={{fontSize:'16px' , fontWeight:'400' , paddingTop:'7px'}}>Registration</Typography>       
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    {/* =========================   grid 2  withdrawl and admission  =========================  */}
                    <Grid sx={{flex:'0 0 50%'}}>

                        {/* admission */}
                            <Box sx={{
                            flex:'0 0 25%' ,
                            display:'flex',
                            flexDirection:'column',
                            textAlign:'center',
                            gap:'20px',
                            alignItems:'center',
                            // borderRight:'1px solid rgb(227, 227, 227)',
                            borderBottom:'1px solid rgb(227, 227, 227)',
                            padding:'2rem',
                            }}>
                                
                                {/* icon and title */}
                                <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'100%'}}>
                                    {/* icon */}
                                    <Box sx={{padding:'10px' , borderRadius:'12px' , background:'rgb(227, 242, 253)' , display:'flex'}}>
                                            <BadgeTwoToneIcon  sx={{color:'rgb(94, 53, 177)' ,  fontSize:'30px'}} />
                                    </Box>

                                    {/* stats */}
                                    <Box sx={{flex:'0 0 65%'}}>
                                        <Typography variant='h3' sx={{fontSize:'24px' ,  }}>281</Typography>    
                                        <Typography variant='h3' sx={{fontSize:'16px' , fontWeight:'400' ,  paddingTop:'7px'}}>Admission</Typography>
                                    </Box>
                                </Grid>
                            </Box>

                            {/* withdrawl */}

                        
                                <Box sx={{
                                    flex:'0 0 25%' ,
                                    display:'flex',
                                    flexDirection:'column',
                                    textAlign:'center',
                                    gap:'20px',
                                    alignItems:'center',
                                    padding:'2rem',
                            
                                    }}>

                                {/* icon and title */}
                                <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'100%'}}>
                                    {/* icon */}
                                    <Box sx={{padding:'10px' , borderRadius:'12px' , background:'rgb(227, 242, 253)' , display:'flex'}}>
                                            <NoAccountsTwoToneIcon sx={{color:'rgb(94, 53, 177)' , fontSize:'30px'}} />
                                    </Box>
                                    {/* stats */}
                                    <Box sx={{flex:'0 0 65%'}}>
                                            <Typography variant='h3' sx={{fontSize:'24px' , }}>27</Typography>    
                                            <Typography variant='h3' sx={{fontSize:'16px' , fontWeight:'400' ,  paddingTop:'7px'}}>Withdrawals</Typography>
                                        </Box> 
                                    </Grid>
                                </Box>
                    
                        </Grid>
                        
                </Grid>
        </Paper>
    </>
  )
    
}

export default StudentStrength