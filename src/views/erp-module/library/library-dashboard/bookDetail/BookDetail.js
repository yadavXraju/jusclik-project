import React from 'react'
import { Paper, Typography , Box , Grid} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import EditNoteIcon from '@mui/icons-material/EditNote';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


const BookDetail = () => {
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

                  {/* total books */}
                    <Box sx={{flex:'0 0 33.3%' , display:'flex', gap:'40px',alignItems:'center' , padding:'2rem',  background:'#f9f9fb' , borderRadius:'0px 0px 0px 0',borderRight:"1px solid #7272724d"}}>
                        <Box sx={{
                            background:'rgb(229 231 235 / 65%)',
                            borderRadius:'50%',
                            padding:'7px' 
                            }}>
                            <LocalLibraryIcon sx={{color:'#000',fontSize:'30px' , display:'flex'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'32px' , color:'#22b378' }}>19499</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase' , paddingTop:'7px' , fontWeight:'500'}}>Total Books</Typography>
                    </Box>
                    </Box>

                  {/* avialable  counter*/}
                    <Box sx={{flex:'0 0 33.3%' , display:'flex', gap:'40px',alignItems:'center', padding:'2rem',background:'#f9f9fb', borderRight:"1px solid #7272724d"}}>
                        <Box sx={{
                            background:'rgb(229 231 235 / 65%)',
                            borderRadius:'50%',
                            padding:'7px',
                            }}>
                            <LibraryBooksIcon sx={{fontSize:'30px' , display:'flex'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'32px' , color:'rgb(94, 53, 177)' ,  }}>15328</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase' ,  paddingTop:'7px' , fontWeight:'500'}}>Avialable</Typography>
                    </Box>
                    </Box>
                 
                  {/* issued counter */}
                    <Box sx={{flex:'0 0 33.3%' , display:'flex', gap:'40px',alignItems:'center', padding:'2rem',background:'#f9f9fb'}}>
                        <Box sx={{
                            background:'rgb(229 231 235 / 65%)',
                            borderRadius:'50%',
                            padding:'7px'
                            }}>
                            <EditNoteIcon sx={{fontSize:'30px' , display:'flex'}}/>
                        </Box>

                        <Box>
                            <Typography variant='h3' sx={{fontSize:'32px' , color:'rgb(30, 136, 229)'}}>16232</Typography>
                            <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase', paddingTop:'7px' , fontWeight:'500'}}>Issued</Typography>
                        </Box>
                    </Box>
            </Grid>

            {/* counter grid 2 */}
     



      </Paper>
    </>
  )
}

export default BookDetail