import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import config from 'config';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
}));


export default function Leaves() {

    const leaveData = ()=>{
        fetchData();
    }
    const fetchData = async () => {
        const response = await axios.get(
          'https://uat.shauryasoft.com/api/student/attendance',
          { 
            params: {
              SCode: 6,
              Session: '2023-2024',
              Class: 'IX' ,
              Section: 'A',
              EnrollCode: 'D00023',
              Month: 'Nov-2023',
              Date:''
            },
            headers: {
              ApiKey: config.ApiKey,
            },
           
          }
        );
        console.log(response.data);
        alert(response.data.EnrollNo);
        if (response.data.EnrollNo === 'D00023') {
        alert(' successfull');
          console.log(jResponse);
        
        } else {
         alert('login unsuccessfull');
        }
    
    };
    return (
        <>
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
            <h3>Recent Leaves</h3>
            <StyledPaper
                sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,
                }}
            >
                {/* leave application */}
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth >
                        <Typography noWrap>Marriage</Typography>
                        <ListItemText secondary="Jan 9, 2023" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="text.secondary">Half Day</Typography>
                    </Grid>


                </Grid>
            </StyledPaper>
            <StyledPaper
                sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth >
                        <Typography noWrap>Fever</Typography>
                        <ListItemText secondary="Jan 9, 2023" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="text.secondary">3 Day</Typography>
                    </Grid>


                </Grid>
            </StyledPaper>
            <StyledPaper
                sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth >
                        <Typography noWrap>Fever</Typography>
                        <ListItemText secondary="Jan 9, 2023" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="text.secondary">4 Day</Typography>
                    </Grid>


                </Grid>
            </StyledPaper>
        </Box>
        {/* Apply for leave */}
               <Stack direction="row" spacing={2} sx={{display:"flexbox", justifyContent:"flex-end", alignItems:"flex-end",m: 2 }} >
                  <Button variant="contained"  onClick={leaveData} >Apply Leave +</Button>
               </Stack>
            </>
        
    );
}

