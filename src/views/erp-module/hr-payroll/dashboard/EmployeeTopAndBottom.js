// owned by sangeeta
import React from 'react'
import SetupTabs from 'components/tabs/Stepper'
import { Grid, Paper, Typography,Box} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'components/dashboard/CommonCss'


// bottom five section start ============= 

// Custom component to display linear progress with label
const LinearProgressWithLabel = ({ value, color }) => {
  return (
    <Box width="100%" mr={1}>
      <LinearProgress variant="determinate" value={value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: color }, height: 15 }} />
    </Box>
  );
};

const BottomFive = () => {
  // Array of progress bars with values, labels, and colors
  const progressBars = [
    { attendance: 70, name: 'Amit', color: "Red",dept:"IT" },
    { attendance: 78, name: 'Cinu', color: "Red",dept:"HR" },
    { attendance: 68, name: 'John', color: "Red",dept:"IT" },
    { attendance: 79, name: 'Mary', color: "Red" ,dept:"IT"},
    { attendance: 79.6, name: 'Bob', color: "Red",dept:"IT" }
  ];

  return (
    <Box height="425px" className='scrollbar-2' sx={{ overflow: 'scroll', width: '100%', }}>
      {/* Iterate over the progressBars array and render each progress bar */}
      {progressBars.map((progress, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
            <Typography sx={{ fontWeight: 'bold', color: 'primary.main' }}>{progress.name}({progress.dept})</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{progress.attendance} %</Typography>
          </Box>
          <LinearProgressWithLabel value={progress.attendance} color={progress.color} />
        </Box>
      ))}
    </Box>
  );
};

// bottom five section end ============= 

// Topfive section Start ============= 

const TopFive = () => {
  // Array of progress bars with values, labels, and colors
  const progressBars = [
    { attendance: 90, name: 'Amit', color: "#A8CD9F" },
    { attendance: 94, name: 'Cinu', color: "#A8CD9F" },
    { attendance: 88, name: 'John', color: "#A8CD9F" },
    { attendance: 96, name: 'Mary', color: "#A8CD9F" },
    { attendance: 100, name: 'Bob', color: "#A8CD9F" }
  ];

  return (
    <Box height="425px" className='scrollbar-2' sx={{ overflow: 'scroll', width: '100%', }}>
      {/* Iterate over the progressBars array and render each progress bar */}
      {progressBars.map((progress, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
            <Typography>{progress.name}</Typography>
            <Typography>{progress.attendance} %</Typography>
          </Box>
          <LinearProgressWithLabel value={progress.attendance} color={progress.color} />
        </Box>
      ))}
    </Box>
  );
};

// Topfive section end ============= 

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
