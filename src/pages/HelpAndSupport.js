// Page Owner : Abhsihek Negi
// Description : Help And support comp for all modules 
import React,{useState} from 'react';
import { Grid  ,  Typography,  useMediaQuery, Paper,Box , Card , CardMedia , Button , Divider } from '@mui/material';
import ParamStepper from 'components/tabs/Stepper';
import { subTitle  } from 'components/dashboard/CommonCss';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';
// ============== quick tips imports
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

// ============== quick tips start

// Sample Data
export const QuickTipsData = [
  {
      id:1,
      icon: <DescriptionOutlinedIcon sx={{bgColor:'rgb(0, 230, 118)'}}/>,
      title:'Invoice detail',
      btnText:'View',
      bgColor:'rgba(60, 159, 60, 0.71)',
  },
  {
      id:2,
      icon: <PersonAddAltOutlinedIcon/>,
      title:'How to add client',
      btnText:'View',
      bgColor:'rgb(118, 185, 239)',
  },

  {
      id:3,
      icon: <ReceiptLongOutlinedIcon/>,
      title:'How to add bill',
      btnText:'View',
      bgColor:'rgba(94, 53, 177, 0.64)',
  },
  {
      id:4,
      icon: <InsertChartOutlinedIcon/>,
      title:'Create invoice',
      btnText:'View',
      bgColor:'rgba(60, 159, 60, 0.71)',
  },
  {
      id:5,
      icon: <PersonAddAltOutlinedIcon/>,
      title:'How to add client',
      btnText:'View',
      bgColor:'rgb(118, 185, 239)',
  },


] 


const QuickTips = () => {
  return (
    <>
      {/* maping data */}
        { QuickTipsData.map((item, index) => (
                    <Grid item xs={12} key={index} sx={{paddingTop:'0 !important'}}>
                    <Grid container direction="column">
                        <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between" >
                            {/* title and icon */}
                            <Grid item sx={{display:'flex' , gap:'16px' ,alignItems:'center',}}>

                                {/* Icon */}
                                <Box sx={{
                                    backgroundColor: item.bgColor,
                                    padding: '6px !important',
                                    borderRadius: '50%',
                                    color: '#fff',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                        {item.icon}
                                </Box>

                                {/* title */}
                                <Box>
                                    <Typography variant="h3" style={subTitle}>
                                        {item.title}
                                    </Typography>
                                </Box>

                            </Grid>

                            {/* Button */}
       
                                <Grid item>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                    <Grid item>
                                        <Box>
                                            <Button sx={{fontSize:{md:'14px' , sm:'12px' , xs:'10px'}}} variant="contained">{item.btnText}</Button>
                                        </Box>
                                    </Grid>
                                    </Grid>
                                </Grid>
    
    
                        </Grid>
                        </Grid>
    
                    </Grid>
                    <Divider sx={{ my: 1.5 , color:'1px solid #80808024'}} />
                    </Grid>
        ))}
    </>
  )
}
// ============== quick tips end

// ============== how to make invoice start
// this style for iframe
export const iFrameStyle = {
  height: '250px',
  width: '100%',
  border:'none'
};


const HowToMakeInvoice = () => {

  return (
    <>
      <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid lg={12} md={6} sm={12} sx={{padding:'20px'}}>
            <Card elevation={3}>
              <CardMedia>
                  <iframe
                    src='https://www.youtube.com/embed/-jcgsn7l9xg?rel=0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='how to make invoice'
                    style={iFrameStyle}
                  />
                </CardMedia>
            </Card>
           
          </Grid>          
      </Grid>
    </>
  );
};
// ============== how to make invoice end

const NeedHelp = () => {
  const isTab = useMediaQuery('(max-width:991px)')
  // drawer btn
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
    };
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
      component:HowToMakeInvoice,
    },
  
  ];
  return (
    <>
      <Paper elevation={0} sx={{
        border:'1px solid rgb(227, 227, 227)',
        boxShadow:'4px 4px 9px 2px #ddddddc2'}}>
          {/* heading */}
          <ParamWidgetHeader title=' Help  & Support' />
        {/* stepper tabs  */}
        <Box sx={{ padding:"10px"}}>
            <ParamStepper
              variant={isTab ? 'scrollable' : null}
              tabPage={tabPage}
              orientation={ isTab ? "horizontal" :"horizontal"}
              showBottomNav={false}
              numberShow ={false}
              iconShow={false}
              value={value}
              handleChange={handleChange}
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
