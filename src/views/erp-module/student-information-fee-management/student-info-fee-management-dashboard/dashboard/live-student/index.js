import React from 'react'
import { Paper, Typography , Box , Grid} from '@mui/material'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const LiveStudent = () => {
  return (
    <>
      <Paper sx={{
         border:'1px solid rgb(227, 227, 227)',
         boxShadow:'4px 4px 9px 2px #ddddddc2',
         }}>


            {/* counter grid 1 */}
            <Grid sx={{
                    display:'flex' ,
            }}>

                  {/* live students */}
                    <Box sx={{flex:'0 0 33.3%' , display:'flex', gap:'40px',alignItems:'center' , padding:'2rem',  background:'#f9f9fb' , borderRadius:'12px 12px 0px 0'}}>
                        <Box sx={{
                            background:'rgb(229 231 235 / 65%)',
                            borderRadius:'50%',
                            padding:'7px' 
                            }}>
                            <PeopleOutlineIcon sx={{color:'#000',fontSize:'30px' , display:'flex'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'32px' , color:'#22b378' }}>99</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase' , paddingTop:'7px' , fontWeight:'500'}}>Live Students</Typography>
                    </Box>
                    </Box>

                  {/* boys  counter*/}
                    <Box sx={{flex:'0 0 33.3%' , display:'flex', gap:'40px',alignItems:'center', padding:'2rem',background:'#f9f9fb'}}>
                        <Box sx={{
                            background:'rgb(229 231 235 / 65%)',
                            borderRadius:'50%',
                            padding:'7px',
                            }}>
                            <PermIdentityOutlinedIcon sx={{fontSize:'30px' , display:'flex'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'32px' , color:'rgb(94, 53, 177)' ,  }}>83</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase' ,  paddingTop:'7px' , fontWeight:'500'}}>Boys</Typography>
                    </Box>
                    </Box>
                 
                  {/* girls counter */}
                    <Box sx={{flex:'0 0 33.3%' , display:'flex', gap:'40px',alignItems:'center', padding:'2rem',background:'#f9f9fb'}}>
                        <Box sx={{
                            background:'rgb(229 231 235 / 65%)',
                            borderRadius:'50%',
                            padding:'7px'
                            }}>
                            <Person2OutlinedIcon sx={{fontSize:'30px' , display:'flex'}}/>
                        </Box>

                        <Box>
                            <Typography variant='h3' sx={{fontSize:'32px' , color:'rgb(30, 136, 229)'}}>16</Typography>
                            <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase', paddingTop:'7px' , fontWeight:'500'}}>Girls</Typography>
                        </Box>
                    </Box>
            </Grid>

            {/* counter grid 2 */}
            <Grid sx={{
                    display:'flex' ,
                    borderTop:'1px solid rgb(227, 227, 227)',
            
            }}>
                    <Box sx={{
                        flex:'0 0 25%' ,
                        flexDirection:'column',
                        textAlign:'center',
                         display:'flex', gap:'20px',
                         alignItems:'center',
                         borderRight:'1px solid rgb(227, 227, 227)',
                         padding:'2rem',
                         }}>
                             <Box>
                                <Typography variant='h3' sx={{fontSize:'24px' , color:'rgb(94, 53, 177)' }}>25</Typography>         
                                <Typography variant='h3' sx={{fontSize:'18px' , fontWeight:'400' ,  paddingTop:'7px'}}>Enquiries</Typography>           
                            </Box>
                    </Box>

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
                        <Box>
                           <Typography variant='h3' sx={{fontSize:'24px',color:'#ddb630'}}>76</Typography>         
                            <Typography variant='h3' sx={{fontSize:'18px' , fontWeight:'400' , paddingTop:'7px'}}>Registration</Typography>       
                        </Box>
                    </Box>

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
                        <Box>
                            <Typography variant='h3' sx={{fontSize:'24px' ,  color:'#22b378'}}>281</Typography>    
                            <Typography variant='h3' sx={{fontSize:'18px' , fontWeight:'400' ,  paddingTop:'7px'}}>Admission</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        flex:'0 0 25%' ,
                        display:'flex',
                        flexDirection:'column',
                        textAlign:'center',
                        gap:'20px',
                        alignItems:'center',
                        padding:'2rem',
                  
                        }}>
                        <Box>
                            <Typography variant='h3' sx={{fontSize:'24px' , color:'rgb(30, 136, 229)'}}>27</Typography>    
                            <Typography variant='h3' sx={{fontSize:'18px' , fontWeight:'400' ,  paddingTop:'7px'}}>Withdrawals</Typography>
                        </Box> 
                    </Box>

                    
            </Grid>



      </Paper>
    </>
  )
}

export default LiveStudent