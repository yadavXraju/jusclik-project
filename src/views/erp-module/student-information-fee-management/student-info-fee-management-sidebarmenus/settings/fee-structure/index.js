import { Box, Typography, Button , useMediaQuery } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParamStepper from 'views/common-section/param-stepper';
import FeeHeads from './feeHead/FeeHeads';
import Concession from './concession/Concession';
import OtherSettings from './other-settings/OtherSettings';
import useDrawer from 'hooks/useDrawer';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import FeedTwoToneIcon from '@mui/icons-material/FeedTwoTone';
import DiscountTwoToneIcon from '@mui/icons-material/DiscountTwoTone';
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

const FeeStructure = () => {
  const isTab = useMediaQuery('(max-width:991px)')
  // drawer btn
  const { anchor, toggleDrawer } = useDrawer();
  const tabPage = [
    {
      id: 1,
      name: 'Regular Fee Heads',
      value: '1',
      component: FeeHeads,
      props: {
         anchor:anchor,
         toggleDrawer:toggleDrawer
      },
      icon:<ReceiptTwoToneIcon />,
    },
    {
      id: 2,
      name: 'Optional Fee Heads',
      value: '2',
      component: FeeHeads,
      props: {
         anchor:anchor,
         toggleDrawer:toggleDrawer
      },
      icon:<FeedTwoToneIcon />,
    },
    {
      id: 3,
      name: 'Concession',
      value: '3',
      component: Concession,
      props: {
        anchor:anchor,
        toggleDrawer:toggleDrawer
      },
      icon:<DiscountTwoToneIcon />,
    },
    {
      id: 4,
      name: 'Discount',
      value: '4',
      component: FeeHeads,
      props: {
        anchor:anchor,
        toggleDrawer:toggleDrawer
      },
      icon:<NewReleasesTwoToneIcon />,
    },
    {
      id: 5,
      name: 'Other Settings',
      value: '5',
      component: OtherSettings,
      props: {
        anchor:anchor,
        toggleDrawer:toggleDrawer
      },
      icon:<SettingsTwoToneIcon/>,
    }
  ];
  return (
    <>
      <Box
        sx={{
          paddingRight: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(224, 224, 224, 1)',
          background: '#fff',
          padding: '16px 24px'
        }}
      >
        <Typography variant="h3">Fee Structure</Typography>
        <Button variant="outlined" startIcon={<AddOutlinedIcon />} onClick={toggleDrawer('right', true)}>
          New Head
        </Button>
      </Box>

      {/* stepper tabs  */}
      <ParamStepper
        variant={isTab ? 'scrollable' : null}
        tabPage={tabPage}
        numberShow={false}
        orientation={ isTab ? "horizontal" :"vertical"}
        nextBtnText='Next'
        customtabWrapper={{
          display: 'flex',
          flexDirection: isTab ? 'column' : 'row',
          marginTop: '0',
          background: '#fff',
          paddingTop: '0rem',
          '& .MuiTabs-indicator': {
            display: 'none'
          }
        }}
        // customtabStyle === tab btn style
        customtabSytle={{ width:'100%', margin:'0', border: 'none', fontSize: '16px' , marginRight:isTab ? '0' : 'auto' , display:'flex' , flexDirection:'row' , justifyContent:'start' , alignItems:'center' , gap:'10px' , minHeight:'auto' , padding:'12px 20px' ,maxWidth:{xs:'fit-content', lg:'100%'}
       }}
        selectedTab={{background:'rgb(231 243 255)'}}
        customtabPanelStyle={{ paddingTop: '0', height: 'auto' }}
        customStyleTabs={{  minWidth: isTab ? 'auto' :'250px' ,borderRight: '1px solid rgba(224, 224, 224, 1)' , borderBottom:'1px solid #e0e0e0' ,  paddingTop:'10px' ,}}
      />
    </>
  );
};

export default FeeStructure;
