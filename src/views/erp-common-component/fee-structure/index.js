import { Box, Typography, Button , useMediaQuery } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParamStepper from 'views/common-section/param-stepper';
import CreateRegularFeeHeads from './regularFeeHead/CreateRegularFeeHeads';
import Concession from './concession/Concession';
import OtherSettings from './other-settings/OtherSettings';
import useDrawer from 'hooks/useDrawer';

// import NewHead from './regularFeeHead/NewHead';



const FeeStructure = () => {
  const isTab = useMediaQuery('(max-width:991px)')
  // drawer btn
  const { anchor, toggleDrawer } = useDrawer();
  const tabPage = [
    {
      id: 1,
      name: 'Regular Fee Heads',
      value: '1',
      component: CreateRegularFeeHeads,
      props: {
         anchor:anchor,
         toggleDrawer:toggleDrawer
      }
    },
    {
      id: 2,
      name: 'Optional Fee Heads',
      value: '2',
      component: 'test',
      drawerContetn: 'test',
      props: {
        anchor:anchor,
        toggleDrawer:toggleDrawer
      }
    },
  
    {
      id: 3,
      name: 'Concession',
      value: '3',
      component: Concession,
      props: {
        anchor:anchor,
        toggleDrawer:toggleDrawer
      }
    },
  
    {
      id: 4,
      name: 'Discount',
      value: '4',
      component: CreateRegularFeeHeads,
      props: {
        anchor:anchor,
        toggleDrawer:toggleDrawer
      }
    },
  
    {
      id: 5,
      name: 'Other Settings',
      value: '5',
      component: OtherSettings,
      props: {
        anchor:anchor,
        toggleDrawer:toggleDrawer
      }
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
        orientation={ isTab ? "horizontal" :"vertical"}
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
        customtabSytle={{ minWidth: isTab ? 'auto' :'300px', padding: '14px', border: 'none', fontSize: '16px' , marginRight:isTab ? '0' : 'auto'}}
        customtabPanelStyle={{ paddingTop: '0', height: 'auto' }}
        customStyleTabs={{ borderRight: '1px solid rgba(224, 224, 224, 1)' , borderBottom:'1px solid #e0e0e0' }}
      />

      {/* Drawer */}
      {/* <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: '1rem' }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0rem', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4"> Fee Structure </Typography>
            <Button sx={{ marginTop: '-6px' }} onClick={toggleDrawer('right', false)}>
              Close
            </Button>
          </Box>
          <NewHead />
        </Box>
      </Drawer> */}
    </>
  );
};

export default FeeStructure;
