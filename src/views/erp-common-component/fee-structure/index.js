import { Box , Typography , Button, Drawer } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import  ParamStepper from 'views/common-section/param-stepper';
import CreateRegularFeeHeads from './regularFeeHead.js/CreateRegularFeeHeads';
import Concession from './concession/Concession';
import OtherSettings from './other-settings/OtherSettings';
import useDrawer from 'hooks/useDrawer';
import NewHead from './regularFeeHead.js/new-head/NewHead';
import ConcessionDrawer from './concession/ConcessionDrawer';



const tabPage = [
    {
      id: 1,
      name: 'Regular Fee Heads',
      value: '1',
      component: CreateRegularFeeHeads,
      drawerContent :  NewHead ,
    },
    {
        id: 2,
        name: 'Optional Fee Heads',
        value: '2',
        component:'test',
        drawerContent :  'test' ,
      },
  
    {
      id: 3,
      name: 'Concession',
      value: '3',
      component:Concession,
      drawerContent :  NewHead ,
    },
  
    {
      id: 4,
      name: 'Discount',
      value: '4',
      component:CreateRegularFeeHeads,
      drawerContent :  'NewHead' ,
    },
  
    {
      id: 5,
      name: 'Other Settings',
      value: '5',
      component:OtherSettings,
      drawerContent :  '' ,
    }
  ];

const FeeStructure = () => {
  // drawer btn
  const  {anchor,toggleDrawer} = useDrawer();
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

      {/* Drawer */}
      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: '1rem' }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0rem', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4"> Fee Structure </Typography>
            <Button sx={{ marginTop: '-6px' }} onClick={toggleDrawer('right', false)}>
              Close
            </Button>
          </Box>

          {/* <NewHead /> */}
          <ConcessionDrawer />
        </Box>
      </Drawer>

      {/* stepper tabs  */}
      <ParamStepper
        variant={null}
        tabPage={tabPage}
        orientation="vertical"
        customtabWrapper={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '0',
          background: '#fff',
          paddingTop: '0rem',
          '& .MuiTabs-indicator': {
            display: 'none'
          }
        }}
        customtabSytle={{ minWidth: '300px', padding: '14px', border: 'none', fontSize: '16px' }}
        customtabPanelStyle={{ paddingTop: '0', height: 'auto' }}
        customStyleTabs={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}
      />
    </>
  );
}

export default FeeStructure