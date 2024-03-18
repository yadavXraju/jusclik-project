import React from 'react'
import { Paper, Typography , Box , Grid} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import EditNoteIcon from '@mui/icons-material/EditNote';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const BookDetail = () => {

  return (
    <>
     <Paper sx={{
        //  border:'1px solid rgb(227, 227, 227)',
        //  boxShadow:'4px 4px 9px 2px #ddddddc2',
         background:'none'
         }}>
            {/* counter grid 1 */}
            <Grid sx={{
                display:'flex' ,
                gap: '17px',
            }}>

                  {/* live students */}
                    <Box sx={{
                        flex:'0 0 24%' , display:'flex', gap:'40px',alignItems:'center' , padding:'2rem',  background:'#f9f9fb' , borderRadius:'12px 12px 12px 12px' , borderRight:'1px solid rgb(227, 227, 227)', boxShadow:'4px 4px 9px 2px #ddddddc2',
                        }}>
                        <Box sx={{
                            background:'rgb(204 245 232)',
                            borderRadius:'50%',
                            padding:'7px' 
                            }}>
                            <LocalLibraryIcon sx={{color:'rgb(16 185 129)',fontSize:'30px' , display:'flex'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'32px' , color:'#000' }}>99</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase' , paddingTop:'7px' , fontWeight:'500',color:'#12192685'}}>Total Books</Typography>
                    </Box>
                    </Box>

                  {/* boys  counter*/}
                    <Box sx={{flex:'0 0 24%' , display:'flex', gap:'40px',alignItems:'center', padding:'2rem',background:'#f9f9fb' ,  borderRight:'1px solid rgb(227, 227, 227)' , boxShadow:'4px 4px 9px 2px #ddddddc2', borderRadius:'12px'}}>
                        <Box sx={{
                            background:'rgb(245 238 215)',
                            borderRadius:'50%',
                            padding:'7px',
                            }}>
                            <LibraryBooksIcon sx={{fontSize:'30px' , display:'flex' , color:'rgb(247, 144, 9)'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'32px' , color:'000' ,  }}>83</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase' ,  paddingTop:'7px' , fontWeight:'500',color:'#12192685'}}>Avialable Books</Typography>
                    </Box>
                    </Box>
                 
                  {/* girls counter */}
                    <Box sx={{flex:'0 0 24%' , display:'flex', gap:'40px',alignItems:'center', padding:'2rem',background:'#f9f9fb' , borderRadius:'12px' ,  boxShadow:'4px 4px 9px 2px #ddddddc2',}}>
                        <Box sx={{
                            background:'rgb(42 101 191 / 15%)',
                            borderRadius:'50%',
                            padding:'7px'
                            }}>
                            <MenuBookIcon sx={{fontSize:'30px' , display:'flex' , color:'rgb(42, 101, 191)'}}/>
                        </Box>

                        <Box>
                            <Typography variant='h3' sx={{fontSize:'32px' , color:'#000'}}>16</Typography>
                            <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase', paddingTop:'7px' , fontWeight:'500',color:'#12192685'}}>Issued Books</Typography>
                        </Box>
                    </Box>

                    <Box sx={{flex:'0 0 24%' , display:'flex', gap:'40px',alignItems:'center', padding:'2rem',background:'#f9f9fb' , borderRadius:'12px' ,  boxShadow:'4px 4px 9px 2px #ddddddc2',}}>
                        <Box sx={{
                            background:'#FF08004f',
                            borderRadius:'50%',
                            padding:'7px'
                            }}>
                            <EditNoteIcon sx={{fontSize:'30px' , display:'flex' , color:'#FF0800'}}/>
                        </Box>

                        <Box>
                            <Typography variant='h3' sx={{fontSize:'32px' , color:'#000'}}>16</Typography>
                            <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase', paddingTop:'7px' , fontWeight:'500',color:'#12192685'}}>Overdue books</Typography>
                        </Box>
                    </Box>
            </Grid>

      </Paper>


    </>
  )
}

export default BookDetail