import { Grid  ,  Typography,  useMediaQuery, Paper,Box } from '@mui/material';
import QuickTips from './quick-tips';
import ParamStepper from 'component/param-stepper';
import { HeadingCss } from 'component/dashboard-css/CommonCss';
import MakeInvoiceVideo from './make-invoice-video';



// import NewHead from './regularFeeHead/NewHead';



const NeedHelp = () => {
  const isTab = useMediaQuery('(max-width:991px)')
  // drawer btn

  const tabPage = [
    {
      id: 1,
      name: 'Quick Tips',
      value: '1',
      component:QuickTips,
    },
    {
      id: 2,
      name: 'Request For Demo',
      value: '2',
      component: 'test',
    },
  
    {
      id: 3,
      name: 'How to Make invoice?',
      value: '3',
      component:MakeInvoiceVideo,
    },
  
  ];
  return (
    <>
<Paper elevation={0} sx={{
        border:'1px solid rgb(227, 227, 227)',
        boxShadow:'4px 4px 9px 2px #ddddddc2'}}>
          {/* heading */}
<Grid item xs={12} sx={{padding: '24px 0px 0 24px ' , background:'#f9f9fb' , borderBottom:'1px solid rgba(128, 128, 128, 0.25)' , mb:0 , borderRadius:'12px 12px 0px 0'}} >
                <Grid  alignContent="center" justifyContent="space-between">
                    <Grid item sx={{  mb:'0'}} >
                        <Typography variant='h2' style={{...HeadingCss , border:'none'}}> Help  & Support </Typography> 
                    </Grid>
                </Grid>
             </Grid>
      {/* stepper tabs  */}
      <Box sx={{ padding:"10px"}}>

    
      <ParamStepper
        variant={isTab ? 'scrollable' : null}
        tabPage={tabPage}
        orientation={ isTab ? "horizontal" :"horizontal"}
        showBottomNav={false}
        numberShow ={false}
        iconShow={false}
        customtabWrapper={{
          display: 'flex',
          marginTop: '0',
          background: '#fff',
          paddingTop: '0rem',
         
        }}
        customtabSytle={{
            display: 'flex',
            margin:"0",
            padding:"10px"
        }}

        customtabPanelStyle={{
            height:'auto'
        }}
     

      />
         </Box>
</Paper>

    
    </>
  );
};

export default NeedHelp;
