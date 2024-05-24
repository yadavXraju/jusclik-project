// owned by sangeeta
import React from 'react'
import SetupTabs from 'components/Stepper'
import { Grid, Paper, Typography,Box} from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'components/dashboard-css/CommonCss'
import TopFive from './TopFive'
import BottomFive from './BottomFive'

const EmployeeTopAndBottom = () => {

  const tabPage = [
    {
      id: 1,
      name: 'Top Five',
      value: '1',
      component:TopFive,
    
    },
    {
      id: 2,
      name: 'Bottom Five',
      value: '2',
      component:BottomFive ,
     
    },

  ];
  return (
    <>
            <Paper spacing={gridSpacing} sx={{ display: 'flex', borderRadius: '12px', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)', boxShadow: '4px 4px 9px 2px #ddddddc2' }}>
        {/* ================================= heading  =================================  */}
        <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Employee Attendence</Typography>
        </Grid>
        <Grid>
          <Box sx={{padding:'10px'}}>
          <SetupTabs
        variant={"scrollable"}
        tabPage={tabPage}
        orientation={ "horizontal"}
        showBottomNav={false}
        numberShow ={false}
        iconShow={false}
        customtabWrapper={{
          display: 'flex',
          marginTop: '0',
          background: '#fff',
          paddingTop: '0rem',
         
        }}
        customtabSytle = {{
         display:"flex-inline",
         flexDirection:"row",
         alignItems:"center",
         marginRight:"0px",   
         
        }}
     customtabPanelStyle={{
       background:"transparent",
       padding:"24px 16px",
       height:"356px",
       overflowY:"hidden",
     }}
  />

          </Box>

        </Grid>
      </Paper>
    </>
  )
}

export default EmployeeTopAndBottom
