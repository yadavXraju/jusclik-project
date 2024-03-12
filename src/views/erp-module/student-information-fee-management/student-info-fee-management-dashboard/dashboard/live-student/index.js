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
         }}>
            <Grid sx={{
                    display:'flex' ,
            }}>
                    <Box sx={{flex:'0 0 40%' , display:'flex', gap:'20px',alignItems:'center' , padding:'2rem',}}>
                        <Box sx={{
                            background:'rgb(30, 136, 229)',
                            borderRadius:'10px',
                            padding:'7px'
                            }}>
                            <PeopleOutlineIcon sx={{color:'#fff',fontSize:'30px'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'24px'}}>99</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase'}}>Live Students</Typography>
                    </Box>
                    </Box>

                    <Box sx={{flex:'0 0 30%' , display:'flex', gap:'20px',alignItems:'center', padding:'2rem',}}>
                        <Box sx={{
                            background:'rgb(30, 136, 229)',
                            borderRadius:'10px',
                            padding:'7px'
                            }}>
                            <PermIdentityOutlinedIcon sx={{color:'#fff',fontSize:'30px'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'24px'}}>83</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase'}}>Boys</Typography>
                    </Box>
                    </Box>

                    <Box sx={{flex:'0 0 30%' , display:'flex', gap:'20px',alignItems:'center', padding:'2rem',}}>
                        <Box sx={{
                            background:'rgb(30, 136, 229)',
                            borderRadius:'10px',
                            padding:'7px'
                            }}>
                            <Person2OutlinedIcon sx={{color:'#fff',fontSize:'30px'}}/>
                        </Box>

                        <Box>
                            <Typography variant='h3' sx={{fontSize:'24px'}}>16</Typography>
                            <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase'}}>Girls</Typography>
                        </Box>
                    </Box>
            </Grid>


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
                                <Typography variant='h3' sx={{fontSize:'24px'}}>25</Typography>         
                                <Typography variant='h3' sx={{fontSize:'20px'}}>Enquiries</Typography>           
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
                           <Typography variant='h3' sx={{fontSize:'24px'}}>76</Typography>         
                            <Typography variant='h3' sx={{fontSize:'20px'}}>Registration</Typography>       
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
                            <Typography variant='h3' sx={{fontSize:'24px'}}>281</Typography>    
                            <Typography variant='h3' sx={{fontSize:'20px'}}>Admission</Typography>
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
                            <Typography variant='h3' sx={{fontSize:'24px'}}>27</Typography>    
                            <Typography variant='h3' sx={{fontSize:'20px'}}>Withdrawals</Typography>
                        </Box>
                    </Box>

                    
            </Grid>



      </Paper>
    </>
  )
}

export default LiveStudent